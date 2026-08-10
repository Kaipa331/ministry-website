import { useState } from "react";
import { galleryImages } from "../data/content";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full bg-page">
      <section className="mx-auto max-w-[1280px] px-4 pb-20 pt-[120px] md:px-16 md:pb-28 md:pt-[160px]">
        <div className="mb-10 max-w-[640px] md:mb-14">
          <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682] md:text-[12px]">
            Moments of Presence
          </p>
          <h1 className="font-heading text-[36px] font-bold tracking-[-1px] text-[#001a4d] md:text-[56px]">Gallery</h1>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#444650] md:text-[18px]">
            Glimpses from gatherings, messages, and fellowship — the living atmosphere of Lord Overtone Ministry.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#001a4d]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].alt}
            className="max-h-[90vh] max-w-full rounded-xl object-contain animate-rise"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
