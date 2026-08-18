import { useEffect, useState } from "react";
import { isSupabaseConfigured } from "../lib/config";
import {
  fetchPublicAnnouncements,
  fetchPublicAudio,
  fetchPublicGallery,
  fetchPublicVideos,
} from "../lib/publicApi";
import type { PublicAnnouncement, PublicAudio, PublicGalleryImage, PublicVideo } from "../lib/types";
import {
  galleryImages,
  newsItems,
  recentEvents,
  upcomingMeetings,
  videos as staticVideos,
} from "../data/content";

/* -------------------------------------------------------------------------- */
/* Fallbacks — used until Supabase is connected, or if a request fails.        */
/* -------------------------------------------------------------------------- */

const fallbackVideos: PublicVideo[] = staticVideos.map((v) => ({
  key: v.id,
  id: v.id,
  title: v.title,
  subtitle: v.subtitle,
  description: v.description,
  featured: v.featured,
  isLive: false,
}));

const fallbackAnnouncements: PublicAnnouncement[] = [
  ...newsItems.map((n) => ({ key: n.id, category: "news" as const, date: n.date, title: n.title, summary: n.summary })),
  ...upcomingMeetings.map((m) => ({
    key: m.id,
    category: "upcoming" as const,
    date: m.date,
    title: m.title,
    summary: m.summary,
  })),
  ...recentEvents.map((e) => ({
    key: e.id,
    category: "event" as const,
    date: e.date,
    title: e.title,
    summary: e.summary,
  })),
];

const fallbackGallery: PublicGalleryImage[] = galleryImages.map((g) => ({ key: g.src, src: g.src, alt: g.alt }));

/* -------------------------------------------------------------------------- */
/* Loaders                                                                    */
/* -------------------------------------------------------------------------- */

const loadVideos = fetchPublicVideos;
const loadAudio = fetchPublicAudio;
const loadAnnouncements = fetchPublicAnnouncements;
const loadGallery = fetchPublicGallery;

/**
 * Reads live content when Supabase is connected. If it is not configured, or a
 * request fails, or the admin has not added anything yet, the bundled content
 * is shown instead so the site is never empty.
 */
function useRemoteContent<T>(loader: () => Promise<T[]>, fallback: T[]) {
  const [data, setData] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let cancelled = false;

    loader()
      .then((rows) => {
        if (!cancelled && rows.length > 0) setData(rows);
      })
      .catch(() => {
        /* keep the bundled fallback */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [loader]);

  return { data, loading };
}

export function useVideos() {
  const { data, loading } = useRemoteContent(loadVideos, fallbackVideos);
  const live = data.find((v) => v.isLive) ?? null;
  const featured = data.find((v) => v.featured) ?? data[0] ?? null;
  return { videos: data, live, featured, loading };
}

export function useAudioSessions() {
  const { data, loading } = useRemoteContent<PublicAudio>(loadAudio, []);
  return { audio: data, loading };
}

export function useAnnouncements() {
  const { data, loading } = useRemoteContent(loadAnnouncements, fallbackAnnouncements);
  return {
    all: data,
    news: data.filter((a) => a.category === "news"),
    upcoming: data.filter((a) => a.category === "upcoming"),
    events: data.filter((a) => a.category === "event"),
    loading,
  };
}

export function useGallery() {
  const { data, loading } = useRemoteContent(loadGallery, fallbackGallery);
  return { images: data, loading };
}
