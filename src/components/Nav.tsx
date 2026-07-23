import { useState } from "react";

type Page = "home" | "about" | "podcast" | "contact";

interface NavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Podcast", page: "podcast" },
  { label: "Contact Us", page: "contact" },
];

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[rgba(250,248,255,0.88)]"
      style={{ borderBottom: "1px solid rgba(197,198,210,0.3)", boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] py-[16px] flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-[12px] font-heading font-bold text-[#001a4d] text-[20px] md:text-[24px] tracking-[-0.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
        >
          <img src="/logo.png" alt="Logo" className="h-[32px] md:h-[40px] w-auto" />
          <span className="hidden sm:inline">Lord Overtone</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {navLinks.map(({ label, page }) => {
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`relative pb-[2px] font-sans font-normal text-[16px] whitespace-nowrap transition-colors ${
                  isActive
                    ? "font-sans font-bold text-[#735c00]"
                    : "text-[#444650] hover:text-[#001a4d]"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#735c00] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <button className="bg-[#001a4d] font-sans font-bold text-white text-[14px] tracking-[1.4px] px-[24px] py-[8px] rounded-full hover:bg-[#002a7a] transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="#001a4d" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#001a4d" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgba(250,248,255,0.98)] backdrop-blur-[12px] border-t border-[rgba(197,198,210,0.3)]">
          <div className="px-[16px] py-[16px] flex flex-col gap-[16px]">
            {navLinks.map(({ label, page }) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => {
                    onNavigate(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-sans font-normal text-[16px] transition-colors ${
                    isActive ? "font-bold text-[#735c00]" : "text-[#444650]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
            <button className="bg-[#001a4d] font-sans font-bold text-white text-[14px] tracking-[1.4px] px-[24px] py-[10px] rounded-full hover:bg-[#002a7a] transition-colors w-fit">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
