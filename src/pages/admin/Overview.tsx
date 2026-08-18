import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAnnouncements, fetchAudio, fetchGallery, fetchVideos } from "../../lib/api";
import type { VideoRow } from "../../lib/types";
import { useAuth } from "../../admin/AuthProvider";
import { Badge, Banner, Card, SectionHeader } from "../../admin/ui";
import { IconAnnounce, IconAudio, IconGallery, IconVideo } from "../../admin/icons";
import { site } from "../../data/content";

interface Counts {
  videos: number;
  audio: number;
  announcements: number;
  gallery: number;
  live: VideoRow | null;
}

export default function Overview() {
  const { email } = useAuth();
  const [counts, setCounts] = useState<Counts | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([fetchVideos(), fetchAudio(), fetchAnnouncements(), fetchGallery()])
      .then(([videos, audio, announcements, gallery]) => {
        if (cancelled) return;
        setCounts({
          videos: videos.filter((v) => v.published).length,
          audio: audio.filter((a) => a.published).length,
          announcements: announcements.filter((a) => a.published).length,
          gallery: gallery.filter((g) => g.published).length,
          live: videos.find((v) => v.is_live && v.published) ?? null,
        });
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Could not load the dashboard.");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const greeting = email ? email.split("@")[0] : "there";

  const tiles = [
    { label: "Videos published", value: counts?.videos, to: "/admin/videos", action: "Manage videos", icon: IconVideo },
    { label: "Audio sessions", value: counts?.audio, to: "/admin/audio", action: "Manage audio", icon: IconAudio },
    { label: "Announcements", value: counts?.announcements, to: "/admin/announcements", action: "Post an update", icon: IconAnnounce },
    { label: "Gallery photos", value: counts?.gallery, to: "/admin/gallery", action: "Add photos", icon: IconGallery },
  ];

  const steps = [
    {
      title: "Live sessions",
      body: "Start the stream on YouTube, paste the link under Videos & Live, and switch on Live. A red banner invites visitors to watch. Switch it off when you finish.",
    },
    {
      title: "Recorded services",
      body: "Add the YouTube link the same way and leave Live off. Mark one as Featured to give it the main spot on the home page.",
    },
    {
      title: "Audio",
      body: "Upload recordings directly. Visitors listen on the Watch page without leaving the site.",
    },
    {
      title: "Announcements",
      body: "Post news, upcoming programs, and past events. They all appear on the News & Events page.",
    },
    {
      title: "Hiding something",
      body: "Every item has a Visible switch. Turning it off removes the item from the website without deleting it.",
    },
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="Overview"
        title={`Welcome back, ${greeting}`}
        description={`Everything you publish here appears on the ${site.fullName} website straight away.`}
      />

      {error && <Banner tone="error">{error}</Banner>}

      {counts?.live ? (
        <div className="mb-5 flex items-start gap-4 rounded-[12px] border border-[#ead0ce] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)] md:p-5">
          <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0" aria-hidden>
            <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[#e74c3c] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e74c3c]" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <Badge tone="live">Live now</Badge>
            </div>
            <p className="font-sans text-[14px] font-semibold text-[#001a4d]">“{counts.live.title}” is showing on the home page.</p>
            <p className="mt-1 font-sans text-[13px] text-[#5d6478]">
              Turn off the Live switch under Videos & Live when the session ends.
            </p>
          </div>
          <Link
            to="/admin/videos"
            className="shrink-0 font-sans text-[13px] font-semibold text-[#001a4d] hover:underline"
          >
            Manage →
          </Link>
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {tiles.map((t) => {
          const Icon = t.icon;
          return (
            <Link key={t.label} to={t.to} className="group">
              <Card className="h-full transition-colors group-hover:border-[#001a4d]/25">
                <div className="mb-5 flex items-start justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f3f4f8] text-[#001a4d]">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <p className="font-sans text-[28px] font-semibold leading-none tracking-[-0.6px] text-[#001a4d]">
                  {t.value ?? "—"}
                </p>
                <p className="mt-2 font-sans text-[12px] font-medium text-[#7a8194]">{t.label}</p>
                <p className="mt-4 font-sans text-[12px] font-semibold text-[#8a6d00] group-hover:underline">{t.action} →</p>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="mt-6 !p-0">
        <div className="border-b border-[#eef0f5] px-5 py-4 md:px-6">
          <h2 className="font-sans text-[14px] font-semibold text-[#001a4d]">How this works</h2>
        </div>
        <ol className="divide-y divide-[#eef0f5]">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 px-5 py-4 md:px-6">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#001a4d] font-sans text-[11px] font-bold text-[#ffd700]">
                {i + 1}
              </span>
              <div>
                <p className="font-sans text-[13px] font-semibold text-[#001a4d]">{step.title}</p>
                <p className="mt-1 font-sans text-[13px] leading-relaxed text-[#5d6478]">
                  {step.body}
                  {step.title === "Hiding something" ? (
                    <>
                      {" "}
                      <Badge>Visible</Badge>
                    </>
                  ) : null}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
