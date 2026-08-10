import { useMemo, useState } from "react";
import { episodes, testimonials } from "../data/content";
import { usePlayer } from "../context/PlayerContext";

function Stars() {
  return (
    <div className="mt-2 flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.4l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5Z"
            fill="#FFD700"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Podcast() {
  const { play, toggle, playing, current } = usePlayer();
  const featured = episodes.find((e) => e.featured) ?? episodes[0];
  const side = episodes.filter((e) => !e.featured);
  const [page, setPage] = useState(0);
  const pageSize = 3;
  const maxPage = Math.max(0, Math.ceil(testimonials.length / pageSize) - 1);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return testimonials.slice(start, start + pageSize);
  }, [page]);

  return (
    <div className="w-full bg-page pb-24">
      <section className="mx-auto max-w-[1280px] px-4 pb-6 pt-[100px] md:px-16 md:pb-6 md:pt-[140px]">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="mb-4 font-heading text-[36px] font-bold leading-tight tracking-[-1px] text-[#001a4d] md:text-[56px]">
            Podcast &amp; Testimonies
          </h1>
          <p className="mx-auto max-w-[560px] font-sans text-[15px] text-[#444650] md:text-[18px]">
            Discover divine wisdom and inspiring life stories through our curated collection of spiritual discourses and
            personal transformations.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 pb-10 md:grid-cols-[1fr_320px] md:gap-8 md:px-16 md:pb-16">
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="relative h-[240px] overflow-hidden rounded-[20px] shadow-[0px_8px_24px_rgba(0,26,77,0.12)] md:h-[320px]">
            <img src={featured.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => toggle(featured)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD700] shadow-lg transition-transform hover:scale-105 hover:bg-[#ffca00] md:h-16 md:w-16"
                aria-label={playing && current.id === featured.id ? "Pause featured episode" : "Play featured episode"}
              >
                {playing && current.id === featured.id ? (
                  <svg width="22" height="22" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <rect x="3" y="2" width="2.5" height="10" rx="0.5" fill="#001A4D" />
                    <rect x="8.5" y="2" width="2.5" height="10" rx="0.5" fill="#001A4D" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 3L19 12L5 21V3Z" fill="#001A4D" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#FFD700] md:text-[11px]">
              Featured Episode
            </p>
            <h2 className="font-heading text-[22px] font-bold leading-[1.2] text-[#001a4d] md:text-[28px]">
              {featured.title}
            </h2>
            <p className="font-sans text-[14px] leading-relaxed text-[#444650] md:text-[15px]">{featured.description}</p>
            <button
              type="button"
              onClick={() => play(featured)}
              className="mt-2 flex w-fit items-center gap-2 font-sans text-[13px] font-semibold text-[#001a4d] transition-all hover:gap-3 md:text-[14px]"
            >
              Listen Now
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
                <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {side.map((ep) => {
            const active = current.id === ep.id && playing;
            return (
              <article
                key={ep.id}
                className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-[0px_2px_12px_rgba(0,26,77,0.07)]"
              >
                <div className="flex items-center gap-3">
                  <img src={ep.image} alt="" className="h-10 w-10 shrink-0 rounded-[10px] object-cover" />
                  <div>
                    <p className="font-sans text-[14px] font-semibold text-[#001a4d]">{ep.title}</p>
                    <p className="font-sans text-[12px] text-[#757682]">{ep.subtitle}</p>
                  </div>
                </div>
                <p className="font-sans text-[13px] leading-relaxed text-[#444650]">{ep.description}</p>
                <button
                  type="button"
                  onClick={() => toggle(ep)}
                  className="w-fit rounded-full border border-[#001a4d] px-5 py-2 font-sans text-[12px] font-semibold tracking-[1px] text-[#001a4d] transition-colors hover:bg-[#001a4d] hover:text-white"
                >
                  {active ? "Pause" : "Listen Now"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section id="testimonies" className="mx-auto max-w-[1280px] scroll-mt-28 px-4 pb-20 md:px-16 md:pb-28">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-center md:gap-0">
          <div>
            <p className="mb-1 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682] md:text-[12px]">
              Voices of Truth
            </p>
            <h2 className="font-heading text-[28px] font-bold text-[#001a4d] md:text-[36px]">Powerful Testimonies</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5c6d2] transition-colors hover:border-[#001a4d] hover:bg-[#001a4d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous testimonies"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M7.5 2 3.5 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              disabled={page >= maxPage}
              onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5c6d2] transition-colors hover:border-[#001a4d] hover:bg-[#001a4d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next testimonies"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M4.5 2 8.5 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {visible.map((t) => (
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
              <p className="font-sans text-[13px] italic leading-relaxed text-[#444650]">"{t.quote}"</p>
              <Stars />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
