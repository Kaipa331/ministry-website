import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useAuth } from "../../admin/AuthProvider";
import { Badge, Banner, Button, Card, Field, LoadingLine, Panel, SectionHeader, TextInput } from "../../admin/ui";
import { createAdmin, listAdmins, removeAdmin, type AdminUser } from "../../lib/admins";

export default function TeamAdmin() {
  const { email, userId, changePassword } = useAuth();
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [listError, setListError] = useState<string | null>(null);
  const [listLoading, setListLoading] = useState(true);

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [createError, setCreateError] = useState<string | null>(null);
  const [createNotice, setCreateNotice] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [nextPassword, setNextPassword] = useState("");
  const [nextPasswordConfirm, setNextPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordNotice, setPasswordNotice] = useState<string | null>(null);
  const [savingPassword, setSavingPassword] = useState(false);

  const refresh = useCallback(async () => {
    setListLoading(true);
    try {
      setAdmins(await listAdmins());
      setListError(null);
    } catch (e) {
      setListError(e instanceof Error ? e.message : "Could not load admins.");
    } finally {
      setListLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const onCreate = async (e: FormEvent) => {
    e.preventDefault();
    setCreateError(null);
    setCreateNotice(null);

    if (!newEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail.trim())) {
      setCreateError("Enter a valid email address.");
      return;
    }
    if (newPassword.length < 8) {
      setCreateError("Password must be at least 8 characters.");
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      setCreateError("The two passwords do not match.");
      return;
    }

    setCreating(true);
    try {
      await createAdmin(newEmail.trim(), newPassword);
      setNewEmail("");
      setNewPassword("");
      setNewPasswordConfirm("");
      setCreateNotice("Admin added. They can sign in at /admin with that email and password.");
      await refresh();
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Could not add that admin.");
    } finally {
      setCreating(false);
    }
  };

  const onRemove = async (admin: AdminUser) => {
    if (admin.id === userId) return;
    if (!window.confirm(`Remove ${admin.email} as an admin? They will no longer be able to sign in.`)) return;
    try {
      await removeAdmin(admin.id);
      setCreateNotice(`${admin.email} has been removed.`);
      await refresh();
    } catch (err) {
      setListError(err instanceof Error ? err.message : "Could not remove that admin.");
    }
  };

  const onChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordNotice(null);

    if (nextPassword.length < 8) {
      setPasswordError("The new password must be at least 8 characters.");
      return;
    }
    if (nextPassword !== nextPasswordConfirm) {
      setPasswordError("The two new passwords do not match.");
      return;
    }
    if (currentPassword === nextPassword) {
      setPasswordError("Choose a new password that is different from the current one.");
      return;
    }

    setSavingPassword(true);
    try {
      await changePassword(currentPassword, nextPassword);
      setCurrentPassword("");
      setNextPassword("");
      setNextPasswordConfirm("");
      setPasswordNotice("Password updated. Use the new password the next time you sign in.");
    } catch (err) {
      setPasswordError(err instanceof Error ? err.message : "Could not update the password.");
    } finally {
      setSavingPassword(false);
    }
  };

  return (
    <div>
      <SectionHeader
        eyebrow="Access"
        title="Team & Password"
        description="Add other ministry staff as admins, or change the password on this account. Public sign-up stays closed — only people added here can open the console."
      />

      <Panel className="mb-6" title="Change your password" description={`Signed in as ${email ?? "this account"}.`}>
        {passwordError && <Banner tone="error">{passwordError}</Banner>}
        {passwordNotice && <Banner tone="success">{passwordNotice}</Banner>}
        <form className="flex flex-col gap-4" onSubmit={onChangePassword}>
          <Field label="Current password">
            <TextInput
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </Field>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="New password" hint="At least 8 characters.">
              <TextInput
                type="password"
                value={nextPassword}
                onChange={(e) => setNextPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
            <Field label="Confirm new password">
              <TextInput
                type="password"
                value={nextPasswordConfirm}
                onChange={(e) => setNextPasswordConfirm(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
          </div>
          <div>
            <Button type="submit" disabled={savingPassword}>
              {savingPassword ? "Saving…" : "Update password"}
            </Button>
          </div>
        </form>
      </Panel>

      <Panel
        className="mb-6"
        title="Add an admin"
        description="They receive a login immediately. Share the password with them privately, then ask them to change it after first sign-in."
      >
        {createError && <Banner tone="error">{createError}</Banner>}
        {createNotice && <Banner tone="success">{createNotice}</Banner>}
        <form className="flex flex-col gap-4" onSubmit={onCreate}>
          <Field label="Email">
            <TextInput
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              autoComplete="off"
              placeholder="leader@ministry.org"
              required
            />
          </Field>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Temporary password" hint="At least 8 characters.">
              <TextInput
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
            <Field label="Confirm password">
              <TextInput
                type="password"
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                autoComplete="new-password"
                required
              />
            </Field>
          </div>
          <div>
            <Button type="submit" disabled={creating}>
              {creating ? "Adding…" : "Add admin"}
            </Button>
          </div>
        </form>
      </Panel>

      <div>
        <h2 className="mb-3 font-sans text-[14px] font-semibold text-[#001a4d]">People with access</h2>
        {listError && <Banner tone="error">{listError}</Banner>}
        {listLoading ? (
          <LoadingLine>Loading admins…</LoadingLine>
        ) : admins.length === 0 ? (
          <Card>
            <p className="font-sans text-[14px] text-[#5d6478]">No admins were returned.</p>
          </Card>
        ) : (
          <div className="flex flex-col gap-2">
            {admins.map((admin) => {
              const isYou = admin.id === userId;
              return (
                <Card key={admin.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-sans text-[14px] font-semibold text-[#001a4d]">{admin.email || "No email"}</p>
                      {isYou && <Badge tone="gold">You</Badge>}
                    </div>
                    <p className="mt-1 font-sans text-[12px] text-[#7a8194]">
                      Added {formatDate(admin.created_at)}
                      {admin.last_sign_in_at ? ` · Last signed in ${formatDate(admin.last_sign_in_at)}` : " · Has not signed in yet"}
                    </p>
                  </div>
                  <Button variant="danger" size="sm" disabled={isYou} onClick={() => void onRemove(admin)}>
                    {isYou ? "Current account" : "Remove"}
                  </Button>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}
