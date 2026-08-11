import { Link } from "react-router-dom";
import { site, testimonials, videos, youtubeThumb, youtubeWatchUrl } from "../data/content";

function StarRating() {
  return (
    <div className="mt-3 flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.4l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5Z"
            fill="#FFD700"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const featured = videos.find((v) => v.featured) ?? videos[0];
  const highlights = videos.slice(0, 3);

  return (
    <div className="w-full bg-page">
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/2.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] animate-ken-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a4d]/92 via-[#001a4d]/72 to-[#001a4d]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/80 via-transparent to-[#001a4d]/30" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-16 md:pb-24 md:pt-32">
          <div className="max-w-[640px] animate-rise">
            <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[2.4px] text-[#ffd700] md:text-[13px]">
              {site.organization}
            </p>
            <h1 className="font-heading text-[52px] font-bold leading-[0.95] tracking-[-1.5px] text-white md:text-[80px]">
              LORD
              <br />
              <span className="text-[#FFD700]">OVERTONE</span>
            </h1>
            <p className="mt-5 max-w-[460px] font-sans text-[16px] leading-relaxed text-white/85 md:text-[18px]">
              The Mighty Angel, the Creator — speaking peace, clarity, and celestial truth through an African body.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/about"
                className="rounded-full bg-[#FFD700] px-7 py-3 text-center font-sans text-[12px] font-bold tracking-[1.3px] text-[#001a4d] transition-transform hover:scale-[1.02] hover:bg-[#ffca00] md:text-[13px]"
              >
                DISCOVER THE MINISTRY
              </Link>
              <a
                href={youtubeWatchUrl(featured.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/80 px-7 py-3 text-center font-sans text-[12px] font-bold tracking-[1.3px] text-white transition-colors hover:bg-white hover:text-[#001a4d] md:text-[13px]"
              >
                WATCH LATEST SERVICE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-8 md:px-16 md:py-10">
        <div className="flex flex-col items-center gap-4 rounded-[20px] bg-white p-5 shadow-[0px_4px_24px_rgba(0,26,77,0.08)] md:flex-row md:gap-6 md:p-8">
          <img
            src={youtubeThumb(featured.id)}
            alt=""
            className="h-16 w-28 shrink-0 rounded-xl object-cover md:h-20 md:w-36"
          />
          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="font-sans text-[16px] font-semibold leading-tight text-[#001a4d] md:text-[18px]">
              {featured.title}
            </p>
            <p className="mt-1 font-sans text-[13px] text-[#757682] md:text-[14px]">
              Latest from {site.organization} — watch here or on YouTube.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <Link
              to="/podcast"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#001a4d] transition-colors hover:bg-[#002a7a]"
              aria-label="Watch on site"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 2L13 8L3 14V2Z" fill="white" />
              </svg>
            </Link>
            <a
              href={youtubeWatchUrl(featured.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#e74c3c] px-2.5 py-0.5 font-sans text-[11px] font-bold tracking-[1px] text-[#e74c3c] transition-colors hover:bg-[#e74c3c] hover:text-white md:text-[12px]"
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-4 md:px-16 md:py-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682]">On YouTube</p>
            <h2 className="font-heading text-[24px] font-bold text-[#001a4d] md:text-[32px]">Recent messages</h2>
          </div>
          <Link to="/podcast" className="font-sans text-[13px] font-semibold text-[#001a4d] hover:underline">
            Watch all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((v) => (
            <Link
              key={v.id}
              to="/podcast"
              className="group overflow-hidden rounded-2xl bg-white shadow-[0px_2px_16px_rgba(0,26,77,0.07)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={youtubeThumb(v.id)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFD700]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 3L19 12L5 21V3Z" fill="#001A4D" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 font-sans text-[14px] font-semibold text-[#001a4d]">{v.title}</p>
                <p className="mt-1 font-sans text-[12px] text-[#757682]">{v.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-4 py-8 md:grid-cols-[2fr_1fr] md:px-16 md:py-10">
        <div className="relative overflow-hidden rounded-[20px] bg-[#001a4d] p-8 md:p-12">
          <div className="absolute right-[-40px] top-[-40px] h-[200px] w-[200px] rounded-full bg-[rgba(255,215,0,0.08)]" />
          <p className="mb-3 font-sans text-[22px] font-bold leading-tight text-white md:text-[28px]">Watch the Ministry</p>
          <p className="mb-7 max-w-[380px] font-sans text-[14px] leading-relaxed text-[#b3c5ff] md:text-[15px]">
            Deep dive into the mysteries of the word. Subscribe on YouTube for teachings where Lord Overtone unravels
            celestial truths for the modern seeker.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#FFD700] px-6 py-2.5 text-center font-sans text-[11px] font-bold tracking-[1.2px] text-[#001a4d] transition-colors hover:bg-[#ffca00] md:text-[12px]"
            >
              SUBSCRIBE ON YOUTUBE
            </a>
            <Link
              to="/podcast"
              className="rounded-full border border-white/40 px-6 py-2.5 text-center font-sans text-[11px] tracking-[1.2px] text-white transition-colors hover:bg-white/10 md:text-[12px]"
            >
              VIEW MESSAGES
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[20px] bg-[#f4f3f9] p-6 md:p-8">
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white shadow-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm.75 9.25V5.5h-1.5v6.25h5V10.25h-3.5Z"
                  fill="#001A4D"
                />
              </svg>
            </div>
            <p className="mb-2 font-sans text-[16px] font-bold leading-tight text-[#001a4d] md:text-[18px]">
              Weekly Live Sessions
            </p>
            <p className="font-sans text-[13px] leading-relaxed text-[#444650] md:text-[14px]">
              Join live on YouTube {site.liveSession.toLowerCase()}.
            </p>
          </div>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-1.5 font-sans text-[12px] font-semibold text-[#001a4d] transition-all hover:gap-2.5 md:text-[13px]"
          >
            Open YouTube channel
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
              <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
            </svg>
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 px-4 py-8 md:grid-cols-2 md:gap-10 md:px-16 md:py-10">
        <div className="rounded-2xl bg-white p-5 shadow-[0px_2px_16px_rgba(0,26,77,0.07)] md:p-7">
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/avatar-sarah.png"
              alt=""
              className="h-12 w-12 shrink-0 rounded-full border border-[rgba(255,215,0,0.3)] object-cover"
            />
            <div>
              <p className="font-sans text-[14px] font-semibold text-[#1a1b20]">Sarah M.</p>
              <p className="font-sans text-[12px] text-[#757682]">Lagos, Nigeria</p>
            </div>
          </div>
          <p className="font-sans text-[14px] italic leading-relaxed text-[#444650]">
            "My life was forever changed after hearing the message of the Mighty Angel. There is a clarity I never knew
            existed."
          </p>
          <StarRating />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-[22px] font-bold leading-tight text-[#001a4d] md:text-[28px]">
            Stay Connected
            <br />
            <span className="text-[#FFD700]">on YouTube</span>
          </h2>
          <p className="font-sans text-[13px] leading-relaxed text-[#444650] md:text-[14px]">
            Follow {site.organization} for prophetic insights, live sessions, and teachings from Lord Overtone.
          </p>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full bg-[#001a4d] px-6 py-2.5 font-sans text-[13px] font-bold tracking-[1px] text-white transition-colors hover:bg-[#002a7a]"
          >
            SUBSCRIBE
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-20 md:px-16 md:pb-28">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <article key={t.name} className="rounded-2xl bg-white p-5 shadow-[0px_2px_16px_rgba(0,26,77,0.07)] md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={t.image}
                  alt=""
                  className="h-11 w-11 shrink-0 rounded-full border border-[rgba(255,215,0,0.3)] object-cover"
                />
                <div>
                  <p className="font-sans text-[14px] font-semibold text-[#1a1b20]">{t.name}</p>
                  <p className="font-sans text-[12px] text-[#757682]">{t.role}</p>
                </div>
              </div>
              <p className="font-sans text-[14px] italic leading-relaxed text-[#444650]">"{t.quote}"</p>
              <StarRating />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
