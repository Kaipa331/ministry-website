import { useId, useState } from "react";
import type { PublicTestimony } from "../lib/types";

const TRUNCATE_AT = 200;

function truncatedQuote(quote: string) {
  if (quote.length <= TRUNCATE_AT) return quote;
  const slice = quote.slice(0, TRUNCATE_AT);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trimEnd();
}

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
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();
  const needsTruncate = testimony.quote.length > TRUNCATE_AT;
  const display = !needsTruncate || expanded ? testimony.quote : `${truncatedQuote(testimony.quote)}…`;

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
          <p className="font-sans text-[12px] text-[#757682]">
            {[testimony.role || testimony.location, testimony.date].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>
      <p id={quoteId} className="font-sans text-[13px] italic leading-relaxed text-[#444650] md:text-[14px]">
        "{display}"
      </p>
      {needsTruncate && (
        <button
          type="button"
          className="mt-2 font-sans text-[12px] font-semibold text-[#001a4d] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001a4d]"
          aria-expanded={expanded}
          aria-controls={quoteId}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      {showStars && <Stars />}
    </article>
  );
}
