import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BrandMark from "./BrandMark";
import { site } from "../data/content";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Watch", to: "/podcast" },
  { label: "News", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(197,198,210,0.3)] bg-[rgba(250,248,255,0.92)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[12px] pt-[env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-5 py-3 md:px-8 lg:px-10 xl:px-16">
        <Link
          to="/"
          className="min-w-0 shrink transition-opacity hover:opacity-80"
          onClick={() => setMobileMenuOpen(false)}
        >
          <BrandMark markClassName="h-8 w-12 md:h-9 md:w-[3.4rem]" />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Primary">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative whitespace-nowrap pb-0.5 font-sans text-[14px] transition-colors xl:text-[15px] ${
                  isActive ? "font-bold text-[#735c00]" : "font-normal text-[#444650] hover:text-[#001a4d]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#735c00]" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#001a4d] px-4 py-2 font-sans text-[12px] font-bold tracking-[0.8px] text-white transition-colors hover:bg-[#002a7a] xl:px-5 xl:text-[13px] xl:tracking-[1px]"
          >
            Subscribe on YouTube
          </a>
        </div>

        <button
          type="button"
          className="-mr-1 flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="#001a4d" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#001a4d" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-10 flex h-[calc(100dvh-100%)] flex-col bg-[#faf8ff] lg:hidden"
        >
          <nav className="flex flex-1 flex-col overflow-y-auto px-5 py-2" aria-label="Primary">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-12 items-center border-b border-[rgba(197,198,210,0.28)] font-sans text-[17px] transition-colors ${
                    isActive ? "font-bold text-[#735c00]" : "font-medium text-[#444650]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="border-t border-[rgba(197,198,210,0.28)] px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#001a4d] px-6 py-3.5 font-sans text-[14px] font-bold tracking-[0.6px] text-white transition-colors hover:bg-[#002a7a]"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
