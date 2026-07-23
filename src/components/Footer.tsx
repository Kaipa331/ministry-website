import svgPaths from "../../imports/svg-lz7pxwlanc";

export default function Footer() {
  return (
    <div className="bg-[#1a1b20] w-full">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] py-[48px] md:py-[80px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[32px] md:gap-0 mb-[32px] md:mb-[48px]">
          {/* Brand */}
          <div className="flex flex-col gap-[16px] max-w-[384px]">
            <p className="font-heading font-bold text-[#ffd700] text-[20px] md:text-[24px]">Lord Overtone</p>
            <p className="font-sans font-normal text-[rgba(227,226,232,0.7)] text-[14px] md:text-[15px] leading-[1.6]">
              Sharing divine frequencies and celestial messages through modern media. A place for peace and spiritual clarity.
            </p>
            <div className="flex gap-[16px] mt-2">
              <div className="relative size-[20px] cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip-tw)">
                    <path d={svgPaths.p330a0740} fill="rgba(227,226,232,0.7)" />
                  </g>
                  <defs>
                    <clipPath id="clip-tw"><rect fill="white" height="20" width="20" /></clipPath>
                  </defs>
                </svg>
              </div>
              <div className="relative size-[20px] cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip-ig)">
                    <path d={svgPaths.p279b6d00} fill="rgba(227,226,232,0.7)" />
                  </g>
                  <defs>
                    <clipPath id="clip-ig"><rect fill="white" height="20" width="20" /></clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-[32px] md:gap-[48px]">
            <div className="flex flex-col gap-[16px]">
              <p className="font-sans font-normal text-white text-[14px] uppercase tracking-[1px]">EXPLORE</p>
              {["Episodes", "Gallery", "Speakers"].map((l) => (
                <p key={l} className="font-sans font-normal text-[rgba(227,226,232,0.7)] text-[15px] cursor-pointer hover:text-white transition-colors">{l}</p>
              ))}
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-sans font-normal text-white text-[14px] uppercase tracking-[1px]">SUPPORT</p>
              {["Help Center", "Partner"].map((l) => (
                <p key={l} className="font-sans font-normal text-[rgba(227,226,232,0.7)] text-[15px] cursor-pointer hover:text-white transition-colors">{l}</p>
              ))}
              <p className="font-sans font-bold text-[#ffd700] text-[15px] cursor-pointer hover:text-[#ffca00] transition-colors">Donate</p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-sans font-normal text-white text-[14px] uppercase tracking-[1px]">LEGAL</p>
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <p key={l} className="font-sans font-normal text-[rgba(227,226,232,0.7)] text-[15px] cursor-pointer hover:text-white transition-colors">{l}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-[16px] pt-[24px] md:pt-[32px]"
          style={{ borderTop: "1px solid rgba(227,226,232,0.1)" }}
        >
          <p className="font-sans font-normal text-[rgba(255,255,255,0.5)] text-[13px] md:text-[14px]">
            © 2026 Lord Overtone Ministry. All Rights Reserved.
          </p>
          <div className="flex gap-[16px] md:gap-[24px]">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <p key={l} className="font-sans font-normal text-[rgba(227,226,232,0.7)] text-[13px] md:text-[14px] cursor-pointer hover:text-white transition-colors">{l}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
