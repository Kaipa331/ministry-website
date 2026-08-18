import { requireSupabase } from "./supabase";

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
}

async function invoke<T>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await requireSupabase().functions.invoke("admins", { body });

  if (data && typeof data === "object" && "error" in data && data.error) {
    throw new Error(String((data as { error: string }).error));
  }

  if (error) {
    const raw = error.message.toLowerCase();
    const missing = raw.includes("not found") || raw.includes("404") || raw.includes("failed to send");
    const hint = missing
      ? " The admin function is not deployed yet. In Supabase go to Edge Functions, create one named “admins”, and paste supabase/functions/admins/index.ts."
      : "";
    throw new Error(`${error.message}.${hint}`);
  }

  if (!data) throw new Error("No response from the admin function.");
  return data as T;
}

export async function listAdmins(): Promise<AdminUser[]> {
  const result = await invoke<{ users: AdminUser[] }>({ action: "list" });
  return result.users ?? [];
}

export async function createAdmin(email: string, password: string): Promise<void> {
  await invoke({ action: "create", email, password });
}

export async function removeAdmin(id: string): Promise<void> {
  await invoke({ action: "remove", id });
}
