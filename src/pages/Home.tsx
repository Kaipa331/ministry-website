import svgPaths from "../../imports/svg-5ig8vumep4";

const HERO_PERSON_IMG = "/banner-bg.png";
const RADIO_ALBUM_IMG = "/img-2.png";

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

function StarRating() {
  return (
    <div className="flex gap-1 mt-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d={svgPaths.p1f93f980} fill="#FFD700" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full" style={{ background: "linear-gradient(180deg, rgb(250, 248, 255) 0%, rgb(245, 244, 255) 100%)" }}>
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] pt-[100px] md:pt-[140px] pb-[48px] md:pb-[80px] grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[64px] items-center">
        <div className="flex flex-col gap-[20px] md:gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-sans font-semibold text-[#001a4d] text-[11px] md:text-[13px] tracking-[2px] uppercase">Divine Frequencies</p>
            <h1 className="font-heading font-bold text-[#48px] md:text-[72px] leading-[1] tracking-[-1.5px]">
              <span className="text-[#001a4d]">LORD</span>
              <br />
              <span className="text-[#FFD700]">OVERTONE</span>
            </h1>
            <p className="font-sans font-bold text-[#444650] text-[16px] md:text-[20px] leading-[1.3] mt-2">
              THE MIGHTY ANGEL, THE CREATOR,<br />IN AN AFRICAN BODY
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[16px] mt-4">
            <button className="bg-[#001a4d] font-sans font-bold text-white text-[12px] md:text-[13px] tracking-[1.3px] px-[24px] md:px-[28px] py-[10px] md:py-[12px] rounded-full hover:bg-[#002a7a] transition-colors">
              DISCOVER THE MINISTRY
            </button>
            <button className="border-2 border-[#001a4d] font-sans font-bold text-[#001a4d] text-[12px] md:text-[13px] tracking-[1.3px] px-[24px] md:px-[28px] py-[10px] md:py-[12px] rounded-full hover:bg-[#001a4d] hover:text-white transition-colors">
              WATCH TESTIMONIES
            </button>
          </div>
        </div>
        <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden h-[320px] md:h-[480px] shadow-[0px_20px_40px_rgba(0,26,77,0.15)]">
          <img src={HERO_PERSON_IMG} alt="Lord Overtone Ministry" className="w-full h-full object-cover" />
          {/* Audio player card */}
          <div className="absolute bottom-[16px] md:bottom-[20px] right-[16px] md:right-[20px] bg-white/90 backdrop-blur-sm rounded-[12px] md:rounded-[16px] p-[12px] md:p-[16px] shadow-lg flex items-center gap-[10px] md:gap-[12px] w-[180px] md:w-[220px]">
            <div className="w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-full bg-[#001a4d] flex items-center justify-center shrink-0">
              <svg className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]" viewBox="0 0 16 16" fill="none">
                <path d="M3 2L13 8L3 14V2Z" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans font-semibold text-[#001a4d] text-[11px] md:text-[12px] truncate">The Quiet Voice</span>
              <span className="font-sans font-normal text-[#757682] text-[10px] md:text-[11px]">Episode 42</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lord Overtone Radio */}
      <section className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] py-[32px] md:py-[40px]">
        <div className="bg-white rounded-[16px] md:rounded-[20px] shadow-[0px_4px_24px_rgba(0,26,77,0.08)] p-[20px] md:p-[32px] flex flex-col md:flex-row items-center gap-[16px] md:gap-[24px]">
          <img src={RADIO_ALBUM_IMG} alt="Radio" className="w-[64px] md:w-[80px] h-[64px] md:h-[80px] rounded-[12px] object-cover shrink-0" />
          <div className="flex flex-col flex-1 min-w-0 text-center md:text-left">
            <p className="font-sans font-semibold text-[#001a4d] text-[16px] md:text-[18px] leading-tight">Lord Overtone Radio</p>
            <p className="font-sans font-normal text-[#757682] text-[13px] md:text-[14px] mt-1">Tune into the frequencies of the heavens. Experience 24/7 ministry, prophetic declarations, and celestial melodies directly from the heart of the Creator.</p>
          </div>
          <div className="flex items-center gap-[12px] md:gap-[16px] shrink-0">
            <button className="w-[40px] md:w-[44px] h-[40px] md:h-[44px] rounded-full bg-[#001a4d] flex items-center justify-center hover:bg-[#002a7a] transition-colors">
              <svg className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]" viewBox="0 0 16 16" fill="none">
                <path d="M3 2L13 8L3 14V2Z" fill="white" />
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-[4px]">
              <div className="w-[4px] h-[20px] bg-[#001a4d] rounded-full animate-pulse" />
              <div className="w-[4px] h-[32px] bg-[#FFD700] rounded-full animate-pulse" style={{ animationDelay: "0.15s" }} />
              <div className="w-[4px] h-[16px] bg-[#001a4d] rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
              <div className="w-[4px] h-[28px] bg-[#FFD700] rounded-full animate-pulse" style={{ animationDelay: "0.45s" }} />
              <div className="w-[4px] h-[12px] bg-[#001a4d] rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
            <span className="font-sans font-bold text-[#e74c3c] text-[11px] md:text-[12px] tracking-[1px] border border-[#e74c3c] rounded-full px-[8px] md:px-[10px] py-[2px]">LIVE</span>
          </div>
        </div>
      </section>

      {/* Join Podcast + Weekly Sessions CTA */}
      <section className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] py-[32px] md:py-[40px] grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[24px]">
        <div className="bg-[#001a4d] rounded-[16px] md:rounded-[20px] p-[32px] md:p-[48px] relative overflow-hidden">
          <div className="absolute right-[-40px] top-[-40px] w-[200px] h-[200px] rounded-full bg-[rgba(255,215,0,0.08)]" />
          <p className="font-sans font-bold text-white text-[22px] md:text-[28px] leading-tight mb-[10px] md:mb-[12px]">Join our Podcast</p>
          <p className="font-sans font-normal text-[#b3c5ff] text-[14px] md:text-[15px] leading-relaxed mb-[20px] md:mb-[28px] max-w-[380px]">Deep dive into the mysteries of the word. Subscribe to our weekly sessions where Lord Overtone unravels celestial truths for the modern seeker.</p>
          <div className="flex flex-col sm:flex-row gap-[10px] md:gap-[12px]">
            <button className="bg-[#FFD700] font-sans font-bold text-[#001a4d] text-[11px] md:text-[12px] tracking-[1.2px] px-[20px] md:px-[24px] py-[8px] md:py-[10px] rounded-full hover:bg-[#ffca00] transition-colors">
              LISTEN ON SPOTIFY
            </button>
            <button className="border border-white/40 font-sans font-normal text-white text-[11px] md:text-[12px] tracking-[1.2px] px-[20px] md:px-[24px] py-[8px] md:py-[10px] rounded-full hover:bg-white/10 transition-colors">
              APPLE PODCASTS
            </button>
          </div>
        </div>
        <div className="bg-[#f4f3f9] rounded-[16px] md:rounded-[20px] p-[24px] md:p-[32px] flex flex-col justify-between">
          <div>
            <div className="w-[36px] md:w-[40px] h-[36px] md:h-[40px] bg-white rounded-[10px] flex items-center justify-center shadow-sm mb-[12px] md:mb-[16px]">
              <svg className="w-[18px] md:w-[20px] h-[18px] md:h-[20px]" viewBox="0 0 20 20" fill="none">
                <path d={svgPaths.p3ccff7c0} fill="#001A4D" />
              </svg>
            </div>
            <p className="font-sans font-bold text-[#001a4d] text-[16px] md:text-[18px] leading-tight mb-[6px] md:mb-[8px]">Weekly Live Sessions</p>
            <p className="font-sans font-normal text-[#444650] text-[13px] md:text-[14px] leading-relaxed">Participate in real-time Q&A sessions every Sunday at 9:00 PM (GMT+2).</p>
          </div>
          <button className="mt-[16px] md:mt-[20px] text-left font-sans font-semibold text-[#001a4d] text-[12px] md:text-[13px] flex items-center gap-[6px] hover:gap-[10px] transition-all">
            Set Reminder
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
            </svg>
          </button>
        </div>
      </section>

      {/* Testimonials + Newsletter */}
      <section className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] py-[32px] md:py-[40px] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[32px] md:gap-[40px] items-start">
        {/* First testimonial */}
        <div className="bg-white rounded-[16px] p-[20px] md:p-[28px] shadow-[0px_2px_16px_rgba(0,26,77,0.07)]">
          <div className="flex items-center gap-[10px] md:gap-[12px] mb-[12px] md:mb-[16px]">
            <div className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-full bg-[#e8e4ff] flex items-center justify-center font-sans font-bold text-[#001a4d] text-[13px] md:text-[15px]">SM</div>
            <div>
              <p className="font-sans font-semibold text-[#1a1b20] text-[13px] md:text-[14px]">Sarah M.</p>
              <p className="font-sans font-normal text-[#757682] text-[11px] md:text-[12px]">Lagos, Nigeria</p>
            </div>
          </div>
          <p className="font-sans italic text-[#444650] text-[13px] md:text-[14px] leading-relaxed">
            "My life was forever changed after hearing the message of the Mighty Angel. There is a clarity I never knew existed."
          </p>
          <StarRating />
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-[14px] md:gap-[16px]">
          <h3 className="font-heading font-bold text-[#001a4d] text-[22px] md:text-[28px] leading-tight">
            Spiritual<br /><span className="text-[#FFD700]">Enlightenment</span><br />In Your Inbox
          </h3>
          <p className="font-sans font-normal text-[#444650] text-[13px] md:text-[14px] leading-relaxed">
            Subscribe to receive prophetic insights from the Lord Overtone Ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-[8px]">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-[#c5c6d2] rounded-full px-[16px] md:px-[20px] py-[8px] md:py-[10px] font-sans font-normal text-[13px] md:text-[14px] text-[#1a1b20] placeholder:text-[#c5c6d2] outline-none focus:border-[#001a4d] transition-colors"
            />
            <button className="bg-[#001a4d] font-sans font-bold text-white text-[12px] md:text-[13px] tracking-[1px] px-[20px] md:px-[24px] py-[8px] md:py-[10px] rounded-full hover:bg-[#002a7a] transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials row */}
      <section className="max-w-[1280px] mx-auto px-[16px] md:px-[64px] pb-[80px] md:pb-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-[16px] p-[20px] md:p-[28px] shadow-[0px_2px_16px_rgba(0,26,77,0.07)]">
              <div className="flex items-center gap-[10px] md:gap-[12px] mb-[12px] md:mb-[16px]">
                <div className="w-[40px] md:w-[44px] h-[40px] md:h-[44px] rounded-full bg-[#e8e4ff] flex items-center justify-center font-sans font-bold text-[#001a4d] text-[12px] md:text-[13px]">{t.avatar}</div>
                <div>
                  <p className="font-sans font-semibold text-[#1a1b20] text-[13px] md:text-[14px]">{t.name}</p>
                  <p className="font-sans font-normal text-[#757682] text-[11px] md:text-[12px]">{t.role}</p>
                </div>
              </div>
              <p className="font-sans italic text-[#444650] text-[13px] md:text-[14px] leading-relaxed">{t.quote}</p>
              <StarRating />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
