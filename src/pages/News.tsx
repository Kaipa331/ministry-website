import { Link } from "react-router-dom";
import { site } from "../data/content";
import { useAnnouncements } from "../hooks/usePublicContent";
import type { AnnouncementCategory, PublicAnnouncement } from "../lib/types";

type Item = PublicAnnouncement;

const categoryLabels: Record<AnnouncementCategory, string> = {
  news: "News",
  upcoming: "Upcoming",
  event: "Event",
};

function CategoryBadge({ category }: { category: AnnouncementCategory }) {
  const styles =
    category === "upcoming"
      ? "bg-[#FFD700]/20 text-[#735c00]"
      : category === "event"
        ? "bg-[#001a4d]/10 text-[#001a4d]"
        : "bg-[#f4f3f9] text-[#444650]";

  return (
    <span className={`rounded-full px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[1px] ${styles}`}>
      {categoryLabels[category]}
    </span>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-[0px_2px_16px_rgba(0,26,77,0.07)] md:p-6">
      <div className="flex items-center justify-between gap-3">
        <CategoryBadge category={item.category} />
        {item.date && <p className="font-sans text-[12px] text-[#757682]">{item.date}</p>}
      </div>
      <h3 className="font-heading text-[22px] font-bold leading-tight text-[#001a4d]">{item.title}</h3>
      <p className="font-sans text-[14px] leading-relaxed text-[#444650]">{item.summary}</p>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: readonly Item[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mb-14 md:mb-20">
      <div className="mb-6 max-w-[640px] md:mb-8">
        <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682]">{eyebrow}</p>
        <h2 className="font-heading text-[28px] font-bold text-[#001a4d] md:text-[36px]">{title}</h2>
        <p className="mt-2 font-sans text-[14px] leading-relaxed text-[#444650] md:text-[15px]">{intro}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {items.map((item) => (
          <ItemCard key={item.key} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function News() {
  const { news, upcoming, events } = useAnnouncements();

  return (
    <div className="w-full bg-page">
      <section className="mx-auto max-w-[1280px] px-4 pb-8 pt-[120px] md:px-16 md:pb-10 md:pt-[160px]">
        <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#757682] md:text-[12px]">
          {site.organization}
        </p>
        <h1 className="font-heading text-[36px] font-bold tracking-[-1px] text-[#001a4d] md:text-[56px]">
          News &amp; Events
        </h1>
        <p className="mt-3 max-w-[640px] font-sans text-[15px] leading-relaxed text-[#444650] md:text-[18px]">
          Updates from the ministry — news, upcoming meetings, and recent outstanding gatherings. This is a ministry
          website, not a church website.
        </p>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 pb-20 md:px-16 md:pb-28">
        <Section
          eyebrow="Announcements"
          title="Ministry news"
          intro="What is happening across Headstone Prophetic Ministry International."
          items={news}
        />
        <Section
          eyebrow="Gather with us"
          title="Upcoming meetings"
          intro="Times and gatherings to mark on your calendar."
          items={upcoming}
        />
        <Section
          eyebrow="Highlights"
          title="Recent outstanding events"
          intro="Moments and messages that stood out in recent weeks."
          items={events}
        />

        <div className="rounded-[20px] bg-[#001a4d] p-8 text-center md:p-12">
          <p className="font-heading text-[24px] font-bold text-white md:text-[32px]">Watch live on YouTube</p>
          <p className="mx-auto mt-3 max-w-[480px] font-sans text-[14px] text-[#b3c5ff] md:text-[15px]">
            Services and special meetings are streamed on {site.organization}.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#FFD700] px-7 py-3 font-sans text-[12px] font-bold tracking-[1.2px] text-[#001a4d] hover:bg-[#ffca00]"
            >
              OPEN YOUTUBE CHANNEL
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/40 px-7 py-3 font-sans text-[12px] tracking-[1px] text-white hover:bg-white/10"
            >
              Contact the ministry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
