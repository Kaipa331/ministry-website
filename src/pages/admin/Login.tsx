import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../admin/AuthProvider";
import { Banner, Button, Field, TextInput } from "../../admin/ui";
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
    <div className="flex min-h-screen items-center justify-center bg-[#faf8ff] px-4 py-16">
      <div className="w-full max-w-[420px]">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <BrandMark markClassName="h-11 w-11" />
          <h1 className="font-heading text-[28px] font-bold text-[#001a4d]">Ministry Admin</h1>
          <p className="font-sans text-[14px] text-[#757682]">
            Sign in to publish messages, audio, announcements, and photos for {site.organization}.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0px_4px_24px_rgba(0,26,77,0.08)] md:p-8">
          {error && <Banner tone="error">{error}</Banner>}

          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
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
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                placeholder="••••••••"
              />
            </Field>
            <Button type="submit" disabled={busy}>
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
  );
}
