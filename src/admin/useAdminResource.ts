import { useCallback, useEffect, useState } from "react";

const messageOf = (e: unknown) => (e instanceof Error ? e.message : "Something went wrong. Please try again.");

/**
 * Loads a table for the dashboard and wraps every mutation so the list
 * refreshes and the admin always sees a clear success or failure message.
 */
export function useAdminResource<T>(loader: () => Promise<T[]>) {
  const [rows, setRows] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      setRows(await loader());
      setError(null);
    } catch (e) {
      setError(messageOf(e));
    } finally {
      setLoading(false);
    }
  }, [loader]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const run = useCallback(
    async (action: () => Promise<void>, successMessage: string) => {
      setError(null);
      setNotice(null);
      setBusy(true);
      try {
        await action();
        await refresh();
        setNotice(successMessage);
        return true;
      } catch (e) {
        setError(messageOf(e));
        return false;
      } finally {
        setBusy(false);
      }
    },
    [refresh],
  );

  return { rows, loading, busy, error, notice, refresh, run };
}
