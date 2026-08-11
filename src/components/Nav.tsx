import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(197,198,210,0.3)] bg-[rgba(250,248,255,0.88)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-8 lg:px-10 xl:px-16">
        <Link
          to="/"
          className="min-w-0 shrink transition-opacity hover:opacity-80"
          onClick={() => setMobileMenuOpen(false)}
        >
          <BrandMark markClassName="h-8 w-8 md:h-9 md:w-9" />
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
          className="p-2 lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="#001a4d" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#001a4d" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[rgba(197,198,210,0.3)] bg-[rgba(250,248,255,0.98)] backdrop-blur-[12px] lg:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left font-sans text-[16px] transition-colors ${
                    isActive ? "font-bold text-[#735c00]" : "font-normal text-[#444650]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-fit rounded-full bg-[#001a4d] px-6 py-2.5 font-sans text-[14px] font-bold tracking-[1.4px] text-white transition-colors hover:bg-[#002a7a]"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
