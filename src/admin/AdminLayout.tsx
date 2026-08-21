import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Button } from "./ui";
import { IconAnnounce, IconAudio, IconExternal, IconGallery, IconOverview, IconQuote, IconTeam, IconVideo } from "./icons";
import BrandMark from "../components/BrandMark";
import Login from "../pages/admin/Login";
import { site } from "../data/content";

const sections = [
  { to: "/admin", label: "Overview", end: true, icon: IconOverview },
  { to: "/admin/videos", label: "Videos & Live", end: false, icon: IconVideo },
  { to: "/admin/audio", label: "Audio Sessions", end: false, icon: IconAudio },
  { to: "/admin/announcements", label: "Announcements", end: false, icon: IconAnnounce },
  { to: "/admin/testimonials", label: "Testimonies", end: false, icon: IconQuote },
  { to: "/admin/gallery", label: "Gallery", end: false, icon: IconGallery },
  { to: "/admin/team", label: "Team & Password", end: false, icon: IconTeam },
];

const titles: Record<string, string> = {
  "/admin": "Overview",
  "/admin/videos": "Videos & Live",
  "/admin/audio": "Audio Sessions",
  "/admin/announcements": "Announcements",
  "/admin/testimonials": "Testimonies",
  "/admin/gallery": "Gallery",
  "/admin/team": "Team & Password",
};

function initials(email: string | null) {
  if (!email) return "A";
  return email.slice(0, 1).toUpperCase();
}

export default function AdminLayout() {
  const { session, email, loading, configured, signOut } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `Admin · ${site.fullName}`;
  }, [pathname]);

  if (!configured) return <SetupNotice />;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f3f4f8]">
        <p className="font-sans text-[13px] text-[#7a8194]">Checking your session…</p>
      </div>
    );
  }

  if (!session) return <Login />;

  const pageTitle = titles[pathname] ?? "Console";

  return (
    <div className="min-h-screen bg-[#f3f4f8] lg:flex">
      <aside className="hidden lg:flex lg:w-[248px] lg:shrink-0 lg:flex-col lg:bg-[#001a4d]">
        <div className="border-b border-white/10 px-5 py-5">
          <BrandMark light markClassName="h-11 w-auto" />
          <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[1.8px] text-[#ffd700]/80">
            Ministry console
          </p>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Admin">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <NavLink
                key={s.to}
                to={s.to}
                end={s.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 font-sans text-[13px] transition-colors ${
                    isActive
                      ? "bg-white/10 font-semibold text-white"
                      : "font-medium text-white/65 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`h-4 w-4 ${isActive ? "text-[#ffd700]" : "text-white/55"}`} />
                    {s.label}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd700] font-sans text-[12px] font-bold text-[#001a4d]">
              {initials(email)}
            </span>
            <div className="min-w-0">
              <p className="truncate font-sans text-[12px] font-semibold text-white">{email ?? "Admin"}</p>
              <p className="font-sans text-[11px] text-white/50">Signed in</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-[#e6e8ef] bg-white/92 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-3 px-4 py-3 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <div className="lg:hidden">
                <BrandMark showWordmark={false} markClassName="h-10 w-auto" />
              </div>
              <div className="min-w-0">
                <p className="hidden font-sans text-[11px] font-semibold uppercase tracking-[1.6px] text-[#8a6d00] lg:block">
                  {site.organization}
                </p>
                <p className="truncate font-sans text-[14px] font-semibold text-[#001a4d] lg:text-[15px]">{pageTitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans text-[12px] font-semibold text-[#001a4d] transition-colors hover:bg-[#f3f4f8]"
              >
                View site
                <IconExternal className="h-3.5 w-3.5" />
              </Link>
              <Button variant="ghost" size="sm" onClick={() => void signOut()}>
                Sign out
              </Button>
            </div>
          </div>

          <nav className="flex gap-1 overflow-x-auto border-t border-[#eef0f5] px-3 py-2 lg:hidden" aria-label="Admin">
            {sections.map((s) => (
              <NavLink
                key={s.to}
                to={s.to}
                end={s.end}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-md px-3 py-1.5 font-sans text-[12px] transition-colors ${
                    isActive
                      ? "bg-[#001a4d] font-semibold text-white"
                      : "font-medium text-[#5d6478] hover:bg-[#f3f4f8] hover:text-[#001a4d]"
                  }`
                }
              >
                {s.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="mx-auto w-full max-w-[1080px] flex-1 px-4 py-6 lg:px-10 lg:py-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SetupNotice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f8] px-4 py-16">
      <div className="w-full max-w-[520px] rounded-[12px] border border-[#e6e8ef] bg-white p-7 shadow-[0_1px_2px_rgba(16,24,40,0.04)] md:p-9">
        <BrandMark className="mb-5" markClassName="h-12 w-auto" />
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[1.8px] text-[#8a6d00]">Setup</p>
        <h1 className="mt-1 font-sans text-[24px] font-semibold tracking-[-0.3px] text-[#001a4d]">
          Connect Supabase to finish setup
        </h1>
        <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#5d6478]">
          The dashboard is built and ready, but it needs the ministry&apos;s Supabase project keys before it can sign
          anyone in. The public website keeps working normally in the meantime.
        </p>
        <ol className="mt-5 flex list-decimal flex-col gap-2 pl-5 font-sans text-[14px] leading-relaxed text-[#5d6478]">
          <li>
            Create a free project at <span className="font-semibold text-[#001a4d]">supabase.com</span>.
          </li>
          <li>
            Run <span className="font-semibold text-[#001a4d]">supabase/schema.sql</span> in the project&apos;s SQL Editor.
          </li>
          <li>
            Copy <span className="font-semibold text-[#001a4d]">.env.example</span> to{" "}
            <span className="font-semibold text-[#001a4d]">.env.local</span> and paste in the project URL and anon key.
          </li>
          <li>Add the admin user under Authentication → Users, then restart the site.</li>
        </ol>
        <p className="mt-5 font-sans text-[13px] text-[#7a8194]">
          Full instructions are in <span className="font-semibold">ADMIN_SETUP.md</span> in the project folder.
        </p>
        <Link to="/" className="mt-6 inline-block font-sans text-[13px] font-semibold text-[#001a4d] hover:underline">
          ← Back to the website
        </Link>
      </div>
    </div>
  );
}
