import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../admin/AuthProvider";
import { Banner, Button, Field, PasswordInput, TextInput } from "../../admin/ui";
import BrandMark from "../../components/BrandMark";
import { site } from "../../data/content";

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await signIn(email.trim(), password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign in.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-[#001a4d] lg:flex lg:flex-col lg:justify-between lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#ffd700]/10" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-white/5" />
        <BrandMark light markClassName="h-10 w-[3.75rem]" />
        <div className="relative max-w-[420px]">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#ffd700]">Ministry console</p>
          <h1 className="mt-3 font-heading text-[42px] font-bold leading-[1.05] tracking-[-0.8px] text-white">
            Publish the work of the ministry.
          </h1>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-white/70">
            Live sessions, audio recordings, announcements, and gallery photos — all from one signed-in workspace for{" "}
            {site.organization}.
          </p>
        </div>
        <p className="relative font-sans text-[12px] text-white/40">Restricted access · authorised staff only</p>
      </aside>

      <div className="flex min-h-screen items-center justify-center bg-[#f3f4f8] px-4 py-16">
        <div className="w-full max-w-[400px]">
          <div className="mb-8 lg:hidden">
            <BrandMark markClassName="h-10 w-10" />
          </div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[1.8px] text-[#8a6d00]">Sign in</p>
          <h2 className="mt-1 font-sans text-[26px] font-semibold tracking-[-0.3px] text-[#001a4d]">Ministry Admin</h2>
          <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#5d6478]">
            Use the account created for you in Supabase. Sign-ups are closed.
          </p>

          <div className="mt-7 rounded-[12px] border border-[#e6e8ef] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            {error && <Banner tone="error">{error}</Banner>}

            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <Field label="Email">
                <TextInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  required
                  placeholder="admin@ministry.org"
                />
              </Field>
              <Field label="Password">
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                />
              </Field>
              <Button type="submit" disabled={busy} className="mt-1 w-full">
                {busy ? "Signing in…" : "Sign in"}
              </Button>
            </form>
          </div>

          <Link
            to="/"
            className="mt-6 block text-center font-sans text-[13px] font-semibold text-[#001a4d] hover:underline"
          >
            ← Back to the website
          </Link>
        </div>
      </div>
    </div>
  );
}
