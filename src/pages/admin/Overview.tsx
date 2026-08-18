import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAnnouncements, fetchAudio, fetchGallery, fetchVideos } from "../../lib/api";
import type { VideoRow } from "../../lib/types";
import { useAuth } from "../../admin/AuthProvider";
import { Badge, Banner, Card, SectionHeader } from "../../admin/ui";
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

  const tiles = [
    { label: "Videos published", value: counts?.videos, to: "/admin/videos", action: "Add a message" },
    { label: "Audio sessions", value: counts?.audio, to: "/admin/audio", action: "Upload audio" },
    { label: "Announcements", value: counts?.announcements, to: "/admin/announcements", action: "Post an update" },
    { label: "Gallery photos", value: counts?.gallery, to: "/admin/gallery", action: "Add photos" },
  ];

  return (
    <div>
      <SectionHeader
        title={`Welcome back${email ? `, ${email.split("@")[0]}` : ""}`}
        description={`Everything you publish here appears on the ${site.fullName} website straight away.`}
      />

      {error && <Banner tone="error">{error}</Banner>}

      {counts?.live ? (
        <Banner tone="info">
          <span className="font-bold">You are live right now.</span> “{counts.live.title}” is showing as a live session on
          the home page. Turn off the Live switch under Videos & Live when the session ends.
        </Banner>
      ) : null}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {tiles.map((t) => (
          <Card key={t.label} className="flex flex-col justify-between gap-3">
            <div>
              <p className="font-heading text-[32px] font-bold leading-none text-[#001a4d]">
                {t.value ?? "—"}
              </p>
              <p className="mt-1.5 font-sans text-[13px] text-[#757682]">{t.label}</p>
            </div>
            <Link to={t.to} className="font-sans text-[13px] font-semibold text-[#735c00] hover:underline">
              {t.action} →
            </Link>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <h2 className="mb-3 font-heading text-[18px] font-bold text-[#001a4d]">How this works</h2>
        <ul className="flex flex-col gap-2.5 font-sans text-[14px] leading-relaxed text-[#444650]">
          <li>
            <span className="font-semibold text-[#001a4d]">Live sessions.</span> Start the stream on YouTube, paste the
            link under Videos & Live, and switch on Live. A red banner invites visitors to watch. Switch it off when you
            finish.
          </li>
          <li>
            <span className="font-semibold text-[#001a4d]">Recorded services.</span> Add the YouTube link the same way and
            leave Live off. Mark one as Featured to give it the main spot on the home page.
          </li>
          <li>
            <span className="font-semibold text-[#001a4d]">Audio.</span> Upload recordings directly — visitors listen on
            the Watch page without leaving the site.
          </li>
          <li>
            <span className="font-semibold text-[#001a4d]">Announcements.</span> Post news, upcoming programs, and past
            events. They all appear on the News & Events page.
          </li>
          <li>
            <span className="font-semibold text-[#001a4d]">Hiding something.</span> Every item has a{" "}
            <Badge>Visible</Badge> switch. Turning it off removes the item from the website without deleting it.
          </li>
        </ul>
      </Card>
    </div>
  );
}
