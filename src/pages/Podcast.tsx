import svgPaths from "../../imports/svg-siklij73in";

const FEATURED_IMG = "/blog-bg.png";
const ALBUM1_IMG = "/img-1.png";

const sideEpisodes = [
  {
    title: "The Quiet Voice",
    subtitle: "Episode 42 · 16 min",
    description: "Learning to discern the divine whisper amidst the noise of modern life.",
  },
  {
    title: "Faith in Action",
    subtitle: "Episode 41 · 34 min",
    description: "Real stories of community impact driven by deep-rooted spiritual conviction.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Community Leader",
    quote: '"The Lord Overtone podcasts have been a sanctuary for my soul. Listening to \'Kupembedza Mulengi\' changed how I view my cultural identity within my faith."',
    avatar: "SM",
  },
  {
    name: "David K.",
    role: "Educator",
    quote: '"Finding content that is both intellectually stimulating and spiritually nourishing is rare. This ministry hits that perfect balance every single time."',
    avatar: "DK",
  },
  {
    name: "John Phiri",
    role: "Student",
    quote: '"As a young seeker, I found clarity through the podcast episodes. The cultural perspective on faith is exactly what my generation needs to hear."',
    avatar: "JP",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path d={svgPaths.p1f93f980} fill="#FFD700" />
        </svg>
      ))}
    </div>
  );
}

export default function Podcast() {
  return (
    <div className="w-full" style={{ background: "linear-gradient(180deg, rgb(250, 248, 255) 0%, rgb(245, 244, 255) 100%)" }}>
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-[64px] pt-[140px] pb-[24px]">
        <div className="text-center mb-[48px]">
          <h1 className="font-heading font-bold text-[#001a4d] text-[56px] leading-tight tracking-[-1px] mb-[16px]">
            Podcast & Testimonies
          </h1>
          <p className="font-sans font-normal text-[#444650] text-[18px] max-w-[560px] mx-auto">
            Discover divine wisdom and inspiring life stories through our curated collection of spiritual discourses and personal transformations.
          </p>
        </div>
      </section>

      {/* Featured + Side Episodes */}
      <section className="max-w-[1280px] mx-auto px-[64px] pb-[64px] grid grid-cols-[1fr_320px] gap-[32px]">
        {/* Featured */}
        <div className="flex flex-col gap-[24px]">
          <div className="relative rounded-[20px] overflow-hidden h-[320px] shadow-[0px_8px_24px_rgba(0,26,77,0.12)]">
            <img src={FEATURED_IMG} alt="Featured Episode" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-[64px] h-[64px] rounded-full bg-[#FFD700] flex items-center justify-center shadow-lg hover:bg-[#ffca00] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3L19 12L5 21V3Z" fill="#001A4D" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[16px] h-[16px]">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p1f93f980} fill="#FFD700" />
                </svg>
              </div>
              <p className="font-sans font-semibold text-[#FFD700] text-[11px] tracking-[2px] uppercase">FEATURED EPISODE</p>
            </div>
            <h2 className="font-heading font-bold text-[#001a4d] text-[28px] leading-[1.2]">
              Kupembedza Mulengi mwa chikhalidwe chathu
            </h2>
            <p className="font-sans font-normal text-[#444650] text-[15px] leading-relaxed">
              An exploration of honoring the Creator through the rich tapestry of our cultural heritage. This deep dive into tradition and faith examines how our roots amplify our spiritual communication.
            </p>
            <button className="flex items-center gap-[8px] font-sans font-semibold text-[#001a4d] text-[14px] hover:gap-[12px] transition-all w-fit mt-2">
              Watch Full Video
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
              </svg>
            </button>
          </div>
        </div>

        {/* Side Episodes */}
        <div className="flex flex-col gap-[16px]">
          {sideEpisodes.map((ep) => (
            <div key={ep.title} className="bg-white rounded-[16px] p-[20px] shadow-[0px_2px_12px_rgba(0,26,77,0.07)] flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#001a4d] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p51fc680} fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#001a4d] text-[14px]">{ep.title}</p>
                  <p className="font-sans font-normal text-[#757682] text-[12px]">{ep.subtitle}</p>
                </div>
              </div>
              <p className="font-sans font-normal text-[#444650] text-[13px] leading-relaxed">{ep.description}</p>
              <button className="border border-[#001a4d] font-sans font-semibold text-[#001a4d] text-[12px] tracking-[1px] px-[20px] py-[8px] rounded-full hover:bg-[#001a4d] hover:text-white transition-colors w-fit">
                Listen Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="max-w-[1280px] mx-auto px-[64px] pb-[120px]">
        <div className="flex items-center justify-between mb-[32px]">
          <div>
            <p className="font-sans font-semibold text-[#757682] text-[12px] tracking-[2px] uppercase mb-[4px]">VOICES OF TRUTH</p>
            <h2 className="font-heading font-bold text-[#001a4d] text-[36px]">Powerful Testimonies</h2>
          </div>
          <div className="flex gap-[8px]">
            <button className="w-[40px] h-[40px] border border-[#c5c6d2] rounded-full flex items-center justify-center hover:bg-[#001a4d] hover:border-[#001a4d] hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d={svgPaths.p3ed0080} fill="currentColor" />
              </svg>
            </button>
            <button className="w-[40px] h-[40px] border border-[#c5c6d2] rounded-full flex items-center justify-center hover:bg-[#001a4d] hover:border-[#001a4d] hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d={svgPaths.p28c84800} fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-[16px] p-[28px] shadow-[0px_2px_16px_rgba(0,26,77,0.07)]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="w-[44px] h-[44px] rounded-full bg-[#e8e4ff] flex items-center justify-center font-sans font-bold text-[#001a4d] text-[13px] shrink-0">{t.avatar}</div>
                <div>
                  <p className="font-sans font-semibold text-[#1a1b20] text-[14px]">{t.name}</p>
                  <p className="font-sans font-normal text-[#757682] text-[12px]">{t.role}</p>
                </div>
              </div>
              <p className="font-sans italic text-[#444650] text-[13px] leading-relaxed">{t.quote}</p>
              <Stars />
            </div>
          ))}
        </div>
      </section>

      {/* Mini Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1b20] px-[64px] py-[12px] flex items-center gap-[24px] z-40 shadow-[0px_-4px_24px_rgba(0,0,0,0.3)]">
        <img src={ALBUM1_IMG} alt="Now Playing" className="w-[44px] h-[44px] rounded-[8px] object-cover shrink-0" />
        <div className="flex flex-col min-w-[160px]">
          <p className="font-sans font-semibold text-white text-[13px]">The Quiet Voice</p>
          <p className="font-sans font-normal text-[#757682] text-[11px]">Episode 42</p>
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="text-[#757682] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.pd921fe8} fill="currentColor" />
            </svg>
          </button>
          <button className="text-[#757682] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p2ee7f2e0} fill="currentColor" />
            </svg>
          </button>
          <button className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center hover:bg-[#e8e4ff] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 1.5L11.5 7L2.5 12.5V1.5Z" fill="#001A4D" />
            </svg>
          </button>
          <button className="text-[#757682] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p6f94780} fill="currentColor" />
            </svg>
          </button>
          <button className="text-[#757682] hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p310f3a00} fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center gap-[8px] ml-4">
          <span className="font-sans font-normal text-[#757682] text-[11px] w-[32px]">0:4:12</span>
          <div className="flex-1 bg-[#444650] rounded-full h-[3px] relative">
            <div className="absolute left-0 top-0 h-full bg-white rounded-full w-[30%]" />
          </div>
          <span className="font-sans font-normal text-[#757682] text-[11px] w-[32px]">18:48</span>
        </div>
        <div className="flex items-center gap-[8px] ml-4">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d={svgPaths.p51fc680} fill="#757682" />
          </svg>
          <div className="w-[80px] bg-[#444650] rounded-full h-[3px] relative">
            <div className="absolute left-0 top-0 h-full bg-white rounded-full w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
