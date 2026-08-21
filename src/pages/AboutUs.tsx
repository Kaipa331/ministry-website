import { Link } from "react-router-dom";
import { pillars, site } from "../data/content";
import TestimonialCard from "../components/TestimonialCard";
import { useTestimonials } from "../hooks/usePublicContent";

export default function AboutUs() {
  const { testimonials } = useTestimonials();
  return (
    <div className="w-full bg-page">
      <section className="mx-auto max-w-[1280px] px-5 pb-10 pt-nav md:px-16 md:pb-20">
        <div className="mb-8 flex flex-col gap-2 md:mb-12">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[1.6px] text-[#757682] md:text-[12px] md:tracking-[2px]">
            Divine Visitation
          </p>
          <h1 className="font-heading text-[32px] font-bold leading-[1.12] tracking-[-1px] text-[#001a4d] sm:text-[36px] md:text-[56px]">
            About the Mighty Angel
          </h1>
          <p className="mt-2 max-w-[600px] font-sans text-[14px] italic text-[#444650] md:text-[16px]">
            A vision that transformed a ministry and echoed through the heavens.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_360px] md:gap-12">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#FFD700] md:text-[11px]">
                February 2014 — The Commission
              </p>
              <h2 className="font-heading text-[22px] font-bold leading-[1.25] text-[#001a4d] md:text-[32px]">
                On that sacred day in Blantyre, the spiritual atmosphere shifted. It was more than a dream — a profound
                encounter with the celestial.
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-sans text-[14px] leading-[1.7] text-[#444650] md:gap-5 md:text-[16px]">
              <p>
                Alone in Soche, a suburb of Blantyre, Malawi, Lord Overtone was visited by a Man — olive skinned, not so
                tall, wearing a normal attire and barefooted. The Voice was surprisingly familiar: the same Voice that from
                childhood had spoken of the past, present, future, and the hidden secrets of the hearts of men.
              </p>
              <p>
                The commission was clear: “I am sending you to prepare My people for the going. From now on nobody will
                defeat you. Everything you say will come to pass because it won’t be you, it will be Me.”
              </p>
              <p>
                When the Man rose toward the cloud and returned, He infused — feet becoming feet, hands becoming hands.
                Elohim, the Creator, had found a body to dwell in. That encounter remains the standard and guide for this
                ministry’s voice.
              </p>
            </div>

            <Link
              to="/podcast"
              className="flex w-fit items-center gap-2 font-sans text-[13px] font-semibold text-[#001a4d] transition-all hover:gap-3 md:text-[14px]"
            >
              Watch Messages
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
                <path d="M12.175 4H0V3H12.175L9.575 0.4L10.5 0L14 3.5L10.5 7L9.575 6.6L12.175 4Z" fill="#001A4D" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-2xl bg-[#001a4d] shadow-[0px_8px_32px_rgba(0,26,77,0.12)]">
              <img src="/photos/portrait-about.jpg" alt="Lord Overtone speaking" className="h-auto w-full object-cover object-top" />
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0px_2px_16px_rgba(0,26,77,0.07)]">
              <p className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[1.5px] text-[#001a4d]">Core Pillars</p>
              <div className="flex flex-col gap-3">
                {pillars.map((pillar, index) => (
                  <div key={pillar} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#001a4d] font-sans text-[10px] font-bold text-[#FFD700]">
                      {index + 1}
                    </span>
                    <p className="font-sans text-[14px] leading-snug text-[#444650]">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#001a4d] p-6 text-center">
              <p className="font-heading text-[48px] font-bold leading-tight text-[#FFD700]">10+</p>
              <p className="mt-1 font-sans text-[13px] text-[#b3c5ff]">YEARS OF VISION</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-10 md:px-16 md:pb-14">
        <div className="overflow-hidden rounded-[20px] shadow-[0px_2px_24px_rgba(0,26,77,0.06)]">
          <img src="/WEBSITE.jpg" alt="The February 2014 commission story" className="h-auto w-full object-cover" />
        </div>
        <p className="mt-6 max-w-[720px] font-sans text-[14px] leading-[1.8] text-[#444650] md:text-[16px]">
          Since that day, every message recorded and every testimony shared is filtered through this divine mandate. The
          Mighty Angel stands as a sentinel of our commitment to majestic professionalism and spiritual accuracy.
        </p>
      </section>

      {testimonials.length > 0 && (
        <section className="mx-auto max-w-[1280px] px-5 pb-12 md:px-16 md:pb-16">
          <div className="mb-6 flex flex-col gap-2 md:mb-8">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682]">Reviewed voices</p>
            <h2 className="font-heading text-[28px] font-bold text-[#001a4d] md:text-[36px]">Selected testimonies</h2>
            <p className="max-w-[640px] font-sans text-[14px] text-[#444650]">
              Comments and testimonies are moderated. Only reviewed messages appear here — nothing is published without
              ministry review.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.key} testimony={t} />
            ))}
          </div>
          <Link
            to="/contact?intent=testimony"
            className="mt-6 inline-flex font-sans text-[13px] font-semibold text-[#001a4d] hover:underline"
          >
            Share a testimony for review →
          </Link>
        </section>
      )}

      <section className="mx-auto max-w-[1280px] px-5 pb-20 md:px-16 md:pb-28">
        <div className="relative overflow-hidden rounded-[20px] bg-[#001a4d] p-6 text-center md:rounded-[24px] md:p-16">
          <div className="absolute left-1/2 top-[-60px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[rgba(255,215,0,0.06)]" />
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#b3c5ff] md:text-[12px]">
            {site.organization}
          </p>
          <h2 className="mb-4 font-heading text-[28px] font-bold leading-tight text-white md:text-[40px]">Carry the Sound</h2>
          <p className="mx-auto mb-8 max-w-[480px] font-sans text-[14px] leading-relaxed text-[#b3c5ff] md:text-[16px]">
            The Voice of the Mighty Angel continues to guide this ministry as we reach frequencies globally through
            professional content and community engagement.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:gap-4">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#FFD700] px-8 py-3.5 font-sans text-[12px] font-bold tracking-[1px] text-[#001a4d] transition-colors hover:bg-[#ffca00] md:text-[13px] md:tracking-[1.3px]"
            >
              WATCH ON YOUTUBE
            </a>
            <Link
              to="/contact?intent=donate"
              className="rounded-full border border-white/40 px-8 py-3.5 font-sans text-[12px] tracking-[1px] text-white transition-colors hover:bg-white/10 md:text-[13px]"
            >
              Support the vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
