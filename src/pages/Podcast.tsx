import { useState } from "react";
import { Link } from "react-router-dom";
import { site, youtubeThumb, youtubeWatchUrl } from "../data/content";
import YouTubeEmbed from "../components/YouTubeEmbed";
import TestimonialCard from "../components/TestimonialCard";
import { useAudioSessions, useTestimonials, useVideos } from "../hooks/usePublicContent";

export default function Podcast() {
  const { videos, featured, live } = useVideos();
  const { audio } = useAudioSessions();
  const { testimonials } = useTestimonials();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const active = videos.find((v) => v.key === activeKey) ?? live ?? featured;
  if (!active) return null;

  const side = videos.filter((v) => v.key !== active.key);

  const play = (key: string) => {
    setActiveKey(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-page">
      <section className="mx-auto max-w-[1280px] px-5 pb-6 pt-nav md:px-16 md:pb-6">
        <div className="mb-8 text-left md:mb-12 md:text-center">
          <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[1.6px] text-[#757682] md:text-[12px] md:tracking-[2px]">
            {site.organization}
          </p>
          <h1 className="mb-4 font-heading text-[32px] font-bold leading-tight tracking-[-1px] text-[#001a4d] sm:text-[36px] md:text-[56px]">
            Watch &amp; Testimonies
          </h1>
          <p className="max-w-[560px] font-sans text-[15px] leading-relaxed text-[#444650] md:mx-auto md:text-[18px]">
            Watch services and teachings directly from our YouTube channel — select a message below to play here.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 pb-10 md:grid-cols-[1fr_340px] md:gap-8 md:px-16 md:pb-16">
        <div className="flex flex-col gap-5 md:gap-6">
          <YouTubeEmbed key={active.key} videoId={active.id} title={active.title} />
          <div className="flex flex-col gap-2">
            {active.isLive ? (
              <p className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#e74c3c] md:text-[11px]">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e74c3c] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e74c3c]" />
                </span>
                Live now
              </p>
            ) : (
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#FFD700] md:text-[11px]">
                Now Playing
              </p>
            )}
            <h2 className="font-heading text-[20px] font-bold leading-[1.25] text-[#001a4d] sm:text-[22px] md:text-[28px]">
              {active.title}
            </h2>
            <p className="font-sans text-[13px] text-[#757682] md:text-[14px]">{active.subtitle}</p>
            <p className="font-sans text-[14px] leading-relaxed text-[#444650] md:text-[15px]">{active.description}</p>
            <a
              href={youtubeWatchUrl(active.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-fit items-center gap-2 font-sans text-[13px] font-semibold text-[#001a4d] transition-all hover:gap-3 md:text-[14px]"
            >
              Open on YouTube
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
                <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:max-h-[640px] md:overflow-y-auto md:pr-1">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[1.5px] text-[#757682]">More messages</p>
          {side.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => play(v.key)}
              className="flex gap-3 rounded-2xl bg-white p-3 text-left shadow-[0px_2px_12px_rgba(0,26,77,0.07)] transition-colors hover:bg-[#f4f3f9]"
            >
              <img
                src={youtubeThumb(v.id)}
                alt=""
                className="h-[64px] w-[112px] shrink-0 rounded-lg object-cover sm:h-[72px] sm:w-[128px]"
              />
              <div className="min-w-0 flex-1">
                <p className="line-clamp-2 font-sans text-[13px] font-semibold text-[#001a4d]">{v.title}</p>
                <p className="mt-1 font-sans text-[11px] text-[#757682]">{v.subtitle}</p>
                <span
                  className={`mt-2 inline-block font-sans text-[11px] font-semibold tracking-[0.8px] ${
                    v.isLive ? "text-[#e74c3c]" : "text-[#735c00]"
                  }`}
                >
                  {v.isLive ? "Live now" : "Play"}
                </span>
              </div>
            </button>
          ))}
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-dashed border-[#c5c6d2] px-4 py-4 text-center font-sans text-[13px] font-semibold text-[#001a4d] transition-colors hover:border-[#001a4d] hover:bg-white"
          >
            See all on YouTube →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-10 md:px-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.slice(0, 3).map((v) => (
            <button
              key={`grid-${v.key}`}
              type="button"
              onClick={() => play(v.key)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-[0px_2px_16px_rgba(0,26,77,0.07)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={youtubeThumb(v.id)}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 3L19 12L5 21V3Z" fill="#001A4D" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 font-sans text-[14px] font-semibold text-[#001a4d]">{v.title}</p>
                <p className="mt-1 font-sans text-[12px] text-[#757682]">{v.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {audio.length > 0 && (
        <section id="audio" className="mx-auto max-w-[1280px] scroll-mt-28 px-5 pb-14 md:px-16 md:pb-20">
          <div className="mb-6 max-w-[640px] md:mb-8">
            <p className="mb-1 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682] md:text-[12px]">
              Listen
            </p>
            <h2 className="font-heading text-[28px] font-bold text-[#001a4d] md:text-[36px]">Audio sessions</h2>
            <p className="mt-2 font-sans text-[14px] text-[#444650]">
              Recorded teachings and prayer sessions you can listen to right here.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {audio.map((a) => (
              <article key={a.key} className="rounded-2xl bg-white p-5 shadow-[0px_2px_16px_rgba(0,26,77,0.07)] md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-heading text-[18px] font-bold leading-tight text-[#001a4d]">{a.title}</h3>
                    {a.subtitle && <p className="mt-1 font-sans text-[13px] text-[#757682]">{a.subtitle}</p>}
                  </div>
                  {a.recordedOn && (
                    <p className="shrink-0 font-sans text-[12px] text-[#757682]">{a.recordedOn}</p>
                  )}
                </div>
                {a.description && (
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-[#444650]">{a.description}</p>
                )}
                <audio controls preload="none" src={a.url} className="mt-4 w-full max-w-full">
                  Your browser does not support audio playback.
                </audio>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="testimonies" className="mx-auto max-w-[1280px] scroll-mt-28 px-5 pb-20 md:px-16 md:pb-28">
        <div className="mb-6 max-w-[640px] md:mb-8">
          <p className="mb-1 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682] md:text-[12px]">
            Reviewed voices
          </p>
          <h2 className="font-heading text-[28px] font-bold text-[#001a4d] md:text-[36px]">Selected testimonies</h2>
          <p className="mt-2 font-sans text-[14px] text-[#444650]">
            Comments are moderated. Only reviewed messages appear here — share yours via Contact for ministry review
            before publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.key} testimony={t} showStars />
          ))}
        </div>
        <Link
          to="/contact?intent=testimony"
          className="mt-6 inline-flex font-sans text-[13px] font-semibold text-[#001a4d] hover:underline"
        >
          Share a testimony for review →
        </Link>
      </section>
    </div>
  );
}
