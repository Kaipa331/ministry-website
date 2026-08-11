import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";
import { site } from "../data/content";

function SocialIcon({ children, href, label }: { children: ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="opacity-70 transition-opacity hover:opacity-100"
    >
      {children}
    </a>
  );
}

const explore = [
  { label: "Watch", to: "/podcast" },
  { label: "News & Events", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
] as const;

const support = [
  { label: "Contact", to: "/contact" },
  { label: "Partner", to: "/contact?intent=partner" },
  { label: "Donate", to: "/contact?intent=donate", accent: true },
] as const;

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1b20]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-16 md:py-20">
        <div className="mb-8 flex flex-col items-start justify-between gap-10 md:mb-12 md:flex-row md:gap-0">
          <div className="flex w-full flex-col gap-4 md:max-w-[384px]">
            <BrandMark light showWordmark markClassName="h-10 w-10" />
            <p className="font-sans text-[14px] leading-[1.6] text-[rgba(227,226,232,0.7)] md:text-[15px]">
              {site.organization} — a ministry website sharing divine frequencies and celestial messages. This is not a
              church website; it is a ministry presence for peace and spiritual clarity.
            </p>
            <div className="mt-2 flex gap-4">
              <SocialIcon href={site.social.twitter} label="Twitter">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M20 3.8a8.2 8.2 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1A4.1 4.1 0 0 0 9.85 6.9a11.65 11.65 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.48 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.28a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.36-.01-.53A8.35 8.35 0 0 0 20 3.8Z"
                    fill="rgba(227,226,232,0.7)"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href={site.social.instagram} label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 1.8c2.67 0 2.99.01 4.04.06 2.71.12 3.98 1.41 4.1 4.1.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.12 2.71-1.41 3.98-4.1 4.1-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-2.71-.12-3.98-1.41-4.1-4.1C1.81 12.99 1.8 12.67 1.8 10s.01-2.99.06-4.04c.12-2.71 1.41-3.98 4.1-4.1C7.01 1.81 7.33 1.8 10 1.8ZM10 0C7.28 0 6.94.01 5.88.06 2.25.23.23 2.24.06 5.88 0 6.94 0 7.28 0 10s.01 3.06.06 4.12c.17 3.63 2.18 5.65 5.82 5.82C6.94 20 7.28 20 10 20s3.06-.01 4.12-.06c3.63-.17 5.65-2.18 5.82-5.82C20 13.06 20 12.72 20 10s-.01-3.06-.06-4.12C19.78 2.25 17.76.23 14.12.06 13.06 0 12.72 0 10 0Zm0 4.87a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26Zm0 8.47a3.33 3.33 0 1 1 0-6.67 3.33 3.33 0 0 1 0 6.67Zm5.34-8.67a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
                    fill="rgba(227,226,232,0.7)"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href={site.social.youtube} label={`${site.organization} on YouTube`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M19.58 5.2a2.5 2.5 0 0 0-1.76-1.77C16.25 3 10 3 10 3s-6.25 0-7.82.43A2.5 2.5 0 0 0 .42 5.2 26.2 26.2 0 0 0 0 10a26.2 26.2 0 0 0 .42 4.8 2.5 2.5 0 0 0 1.76 1.77C3.75 17 10 17 10 17s6.25 0 7.82-.43a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 20 10a26.2 26.2 0 0 0-.42-4.8ZM8 13V7l5.2 3L8 13Z"
                    fill="rgba(227,226,232,0.7)"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-12 md:w-auto">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[14px] uppercase tracking-[1px] text-white">Explore</p>
              {explore.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="font-sans text-[15px] text-[rgba(227,226,232,0.7)] transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[14px] uppercase tracking-[1px] text-white">Support</p>
              {support.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`font-sans text-[15px] transition-colors ${
                    l.accent
                      ? "font-bold text-[#ffd700] hover:text-[#ffca00]"
                      : "text-[rgba(227,226,232,0.7)] hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[14px] uppercase tracking-[1px] text-white">Legal</p>
              {legal.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="font-sans text-[15px] text-[rgba(227,226,232,0.7)] transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-[rgba(227,226,232,0.1)] pt-8 md:flex-row md:gap-0">
          <p className="font-sans text-[13px] text-[rgba(255,255,255,0.5)] md:text-[14px]">
            © {new Date().getFullYear()} {site.fullName}. All Rights Reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            {legal.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="font-sans text-[13px] text-[rgba(227,226,232,0.7)] transition-colors hover:text-white md:text-[14px]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
