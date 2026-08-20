import { site } from "../data/content";

interface BrandMarkProps {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function BrandMark({
  className = "",
  markClassName = "h-9 w-[3.4rem] md:h-10 md:w-[3.8rem]",
  showWordmark = true,
  light = false,
  stacked = false,
}: BrandMarkProps) {
  if (stacked) {
    return (
      <span className={`inline-flex ${className}`}>
        <img src="/logo.png" alt={site.fullName} className="h-28 w-auto mix-blend-screen md:h-36" />
      </span>
    );
  }

  const text = light ? "text-[#ffd700]" : "text-[#001a4d]";
  const sub = light ? "text-[#ffd700]/75" : "text-[#8a6d00]";

  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <img
        src="/logo-mark.png"
        alt={showWordmark ? "" : site.fullName}
        className={`shrink-0 object-contain ${light ? "mix-blend-screen" : ""} ${markClassName}`}
      />
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className={`font-sans text-[13px] font-extrabold uppercase tracking-[0.14em] md:text-[15px] ${text}`}>
            Headstone
          </span>
          <span className={`mt-0.5 font-sans text-[8px] font-semibold uppercase tracking-[0.12em] md:mt-1 md:text-[9px] md:tracking-[0.16em] ${sub}`}>
            <span className="sm:hidden">Prophetic Ministry</span>
            <span className="hidden sm:inline">Prophetic Ministry International</span>
          </span>
        </span>
      )}
    </span>
  );
}
