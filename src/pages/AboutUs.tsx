import svgPaths from "../../imports/svg-ueeare77qf";

const ANGEL_IMG = "/pastor.png";

export default function AboutUs() {
  return (
    <div className="w-full" style={{ background: "linear-gradient(180deg, rgb(250, 248, 255) 0%, rgb(245, 244, 255) 100%)" }}>
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-[64px] pt-[160px] pb-[80px]">
        <div className="flex flex-col gap-[8px] mb-[48px]">
          <p className="font-sans font-semibold text-[#757682] text-[12px] tracking-[2px] uppercase">DIVINE VISITATION</p>
          <h1 className="font-heading font-bold text-[#001a4d] text-[56px] leading-[1.1] tracking-[-1px]">About the Mighty Angel</h1>
          <p className="font-sans italic text-[#444650] text-[16px] mt-2 max-w-[600px]">
            A vision that transformed a ministry and echoed through the heavens.
          </p>
        </div>

        {/* Featured Article */}
        <div className="grid grid-cols-[1fr_360px] gap-[48px] items-start">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[8px]">
              <p className="font-sans font-semibold text-[#FFD700] text-[11px] tracking-[2px] uppercase">FEBRUARY 2024 — BLOG</p>
              <h2 className="font-heading font-bold text-[#001a4d] text-[32px] leading-[1.2]">
                On that sacred Monday, the spiritual atmosphere shifted. It was more than a dream; it was a profound interaction with the celestial.
              </h2>
            </div>

            <div className="flex flex-col gap-[20px] font-sans font-normal text-[#444650] text-[16px] leading-[1.7]">
              <p>
                The vision unfolded with crystalline clarity. An immense presence filled the room — the Mighty Angel — standing with a divine patent bearing heaven's seal and an ancient commission that would redefine the ministry's purposes.
              </p>
              <p>
                The message was clear: The auditions can be heard on earth. Every word spoken in ministry must resonate with the frequencies of the Angel.
              </p>
              <p>
                This pivotal encounter on 3rd February 2024 defines what Lord Overtone Ministry has been commissioned to amplify the heavenly broadcast. The angel's presence becoming both standard and a guide for the ministry's voice.
              </p>
            </div>

            <button className="flex items-center gap-[8px] font-sans font-semibold text-[#001a4d] text-[14px] hover:gap-[12px] transition-all w-fit">
              Watch Full Video
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="relative rounded-[16px] overflow-hidden shadow-[0px_8px_32px_rgba(0,26,77,0.12)]">
              <img src={ANGEL_IMG} alt="About Us Image" className="w-full h-auto object-contain object-top" />
            </div>

            {/* Core Pillars */}
            <div className="bg-white rounded-[16px] p-[24px] shadow-[0px_2px_16px_rgba(0,26,77,0.07)]">
              <p className="font-sans font-bold text-[#001a4d] text-[13px] tracking-[1.5px] uppercase mb-[16px]">Core Pillars</p>
              <div className="flex flex-col gap-[12px]">
                {["Authentic Representation", "Authoritative Clarity", "Grounded Stewardship"].map((pillar) => (
                  <div key={pillar} className="flex items-center gap-[10px]">
                    <div className="w-[20px] h-[20px] shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d={svgPaths.p1caa9380} fill="#001A4D" />
                      </svg>
                    </div>
                    <p className="font-sans font-normal text-[#444650] text-[14px]">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat */}
            <div className="bg-[#001a4d] rounded-[16px] p-[24px] text-center">
              <p className="font-heading font-bold text-[#FFD700] text-[48px] leading-tight">10+</p>
              <p className="font-sans font-normal text-[#b3c5ff] text-[13px] mt-1">YEARS OF VISION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Since that day section */}
      <section className="max-w-[1280px] mx-auto px-[64px] pb-[60px]">
        <div className="bg-white rounded-[20px] p-[48px] shadow-[0px_2px_24px_rgba(0,26,77,0.06)]">
          <p className="font-sans font-normal text-[#444650] text-[16px] leading-[1.8] max-w-[720px]">
            Since that day, every podcast recorded and every testimony shared is filtered through this divine mandate. The Mighty Angel stands as a sentinel of our commitment to majestic professionalism and spiritual accuracy.
          </p>
        </div>
      </section>

      {/* Carry the Sound CTA */}
      <section className="max-w-[1280px] mx-auto px-[64px] pb-[120px]">
        <div className="bg-[#001a4d] rounded-[24px] p-[64px] relative overflow-hidden text-center">
          <div className="absolute left-1/2 top-[-60px] w-[300px] h-[300px] rounded-full bg-[rgba(255,215,0,0.06)] -translate-x-1/2" />
          <p className="font-sans font-semibold text-[#b3c5ff] text-[12px] tracking-[2px] uppercase mb-[12px]">OUR CALLING</p>
          <h2 className="font-heading font-bold text-white text-[40px] leading-tight mb-[16px]">Carry the Sound</h2>
          <p className="font-sans font-normal text-[#b3c5ff] text-[16px] leading-relaxed max-w-[480px] mx-auto mb-[32px]">
            The Voice of the Mighty Angel continues to guide us as we reach frequencies globally through professional content and community engagement.
          </p>
          <div className="flex items-center justify-center gap-[16px]">
            <button className="bg-[#FFD700] font-sans font-bold text-[#001a4d] text-[13px] tracking-[1.3px] px-[32px] py-[12px] rounded-full hover:bg-[#ffca00] transition-colors">
              EXPLORE PODCASTS
            </button>
            <button className="border border-white/40 font-sans font-normal text-white text-[13px] tracking-[1px] px-[32px] py-[12px] rounded-full hover:bg-white/10 transition-colors">
              Support the vision
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
