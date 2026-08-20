import type { PublicTestimony } from "../lib/types";

function Stars() {
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

export default function TestimonialCard({
  testimony,
  showStars = false,
}: {
  testimony: PublicTestimony;
  showStars?: boolean;
}) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0px_2px_16px_rgba(0,26,77,0.07)] md:p-7">
      <div className="mb-4 flex items-center gap-3">
        {testimony.image ? (
          <img
            src={testimony.image}
            alt=""
            className="h-11 w-11 shrink-0 rounded-full border border-[rgba(255,215,0,0.3)] object-cover"
          />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(255,215,0,0.3)] bg-[#001a4d] font-sans text-[12px] font-bold text-[#ffd700]">
            {testimony.avatar}
          </span>
        )}
        <div>
          <p className="font-sans text-[14px] font-semibold text-[#1a1b20]">{testimony.name}</p>
          <p className="font-sans text-[12px] text-[#757682]">{testimony.role || testimony.location}</p>
        </div>
      </div>
      <p className="font-sans text-[13px] italic leading-relaxed text-[#444650] md:text-[14px]">"{testimony.quote}"</p>
      {showStars && <Stars />}
    </article>
  );
}
