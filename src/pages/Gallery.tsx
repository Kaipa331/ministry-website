import { useState } from "react";
import { useGallery } from "../hooks/usePublicContent";

export default function Gallery() {
  const { images: galleryImages } = useGallery();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full bg-page">
      <section className="mx-auto max-w-[1280px] px-5 pb-20 pt-nav md:px-16 md:pb-28">
        <div className="mb-8 max-w-[640px] md:mb-14">
          <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[1.6px] text-[#757682] md:text-[12px] md:tracking-[2px]">
            Moments of Presence
          </p>
          <h1 className="font-heading text-[32px] font-bold tracking-[-1px] text-[#001a4d] sm:text-[36px] md:text-[56px]">Gallery</h1>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#444650] md:text-[18px]">
            Glimpses from gatherings, messages, and fellowship — the living atmosphere of Lord Overtone Ministry.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <button
              key={img.key}
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

      {active !== null && galleryImages[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] sm:p-4"
          role="dialog"
          aria-modal
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top,0px))] flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg text-white hover:bg-white/25 sm:right-4"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].alt}
            className="max-h-[88dvh] max-w-full rounded-lg object-contain animate-rise sm:rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
