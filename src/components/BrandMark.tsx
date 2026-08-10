interface BrandMarkProps {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  light?: boolean;
}

export default function BrandMark({
  className = "",
  markClassName = "h-9 w-9 md:h-10 md:w-10",
  showWordmark = true,
  light = false,
}: BrandMarkProps) {
  const text = light ? "text-[#ffd700]" : "text-[#001a4d]";
  const sub = light ? "text-white/70" : "text-[#735c00]";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`relative inline-flex items-center justify-center rounded-full bg-[#001a4d] ring-1 ring-[#FFD700]/35 ${markClassName}`}
        aria-hidden
      >
        <span className="font-heading text-[15px] font-bold leading-none tracking-tight text-[#FFD700] md:text-[17px]">
          LO
        </span>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-heading font-bold text-[18px] md:text-[22px] tracking-[-0.4px] ${text}`}>
            Lord Overtone
          </span>
          <span className={`mt-1 hidden font-sans text-[10px] uppercase tracking-[1.6px] sm:block ${sub}`}>
            Ministry
          </span>
        </span>
      )}
    </span>
  );
}
