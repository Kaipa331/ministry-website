import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Button } from "./ui";
import BrandMark from "../components/BrandMark";
import Login from "../pages/admin/Login";
import { site } from "../data/content";

const sections = [
  { to: "/admin", label: "Overview", end: true },
  { to: "/admin/videos", label: "Videos & Live", end: false },
  { to: "/admin/audio", label: "Audio Sessions", end: false },
  { to: "/admin/announcements", label: "Announcements", end: false },
  { to: "/admin/gallery", label: "Gallery", end: false },
];

export default function AdminLayout() {
  const { session, email, loading, configured, signOut } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `Admin · ${site.fullName}`;
  }, [pathname]);

  if (!configured) return <SetupNotice />;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf8ff]">
        <p className="font-sans text-[14px] text-[#757682]">Checking your session…</p>
      </div>
    );
  }

  if (!session) return <Login />;

  return (
    <div className="flex min-h-screen flex-col bg-[#faf8ff]">
      <header className="border-b border-[rgba(197,198,210,0.4)] bg-white">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3 md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <BrandMark markClassName="h-8 w-8" />
            <span className="hidden font-sans text-[13px] font-bold tracking-[1px] text-[#735c00] uppercase sm:block">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden max-w-[200px] truncate font-sans text-[13px] text-[#757682] md:block">{email}</span>
            <Link
              to="/"
              className="font-sans text-[13px] font-semibold text-[#001a4d] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View site
            </Link>
            <Button variant="ghost" onClick={() => void signOut()}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col gap-6 px-4 py-6 md:flex-row md:gap-10 md:px-8 md:py-10">
        <nav className="flex gap-2 overflow-x-auto pb-1 md:w-[210px] md:shrink-0 md:flex-col md:overflow-visible md:pb-0">
          {sections.map((s) => (
            <NavLink
              key={s.to}
              to={s.to}
              end={s.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-xl px-4 py-2.5 font-sans text-[14px] transition-colors ${
                  isActive
                    ? "bg-[#001a4d] font-bold text-white"
                    : "font-medium text-[#444650] hover:bg-white hover:text-[#001a4d]"
                }`
              }
            >
              {s.label}
            </NavLink>
          ))}
        </nav>

        <main className="min-w-0 flex-1 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SetupNotice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf8ff] px-4 py-16">
      <div className="w-full max-w-[560px] rounded-2xl bg-white p-6 shadow-[0px_4px_24px_rgba(0,26,77,0.08)] md:p-9">
        <BrandMark markClassName="mb-4 h-10 w-10" />
        <h1 className="font-heading text-[26px] font-bold text-[#001a4d]">Connect Supabase to finish setup</h1>
        <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#444650]">
          The dashboard is built and ready, but it needs the ministry&apos;s Supabase project keys before it can sign
          anyone in. The public website keeps working normally in the meantime.
        </p>
        <ol className="mt-5 flex list-decimal flex-col gap-2 pl-5 font-sans text-[14px] leading-relaxed text-[#444650]">
          <li>
            Create a free project at <span className="font-semibold">supabase.com</span>.
          </li>
          <li>
            Run <span className="font-semibold">supabase/schema.sql</span> in the project&apos;s SQL Editor.
          </li>
          <li>
            Copy <span className="font-semibold">.env.example</span> to <span className="font-semibold">.env.local</span>{" "}
            and paste in the project URL and anon key.
          </li>
          <li>Add the admin user under Authentication → Users, then restart the site.</li>
        </ol>
        <p className="mt-5 font-sans text-[13px] text-[#757682]">
          Full instructions are in <span className="font-semibold">ADMIN_SETUP.md</span> in the project folder.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block font-sans text-[14px] font-semibold text-[#001a4d] hover:underline"
        >
          ← Back to the website
        </Link>
      </div>
    </div>
  );
}
