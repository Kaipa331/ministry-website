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
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[rgba(250,248,255,0.88)]"
      style={{ borderBottom: "1px solid rgba(197,198,210,0.3)", boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-[1280px] mx-auto px-[64px] py-[16px] flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-[12px] font-heading font-bold text-[#001a4d] text-[24px] tracking-[-0.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
        >
          <img src="/logo.png" alt="Logo" className="h-[40px] w-auto" />
          Lord Overtone
        </button>

        <nav className="flex items-center gap-[32px]">
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

        <button className="bg-[#001a4d] font-sans font-bold text-white text-[14px] tracking-[1.4px] px-[24px] py-[8px] rounded-full hover:bg-[#002a7a] transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
}
