import { AUDIO_BUCKET, GALLERY_BUCKET, publicFileUrl, supabaseAnonKey, supabaseUrl } from "./config";
import type {
  AnnouncementRow,
  AudioRow,
  GalleryRow,
  PublicAnnouncement,
  PublicAudio,
  PublicGalleryImage,
  PublicVideo,
  VideoRow,
} from "./types";

/**
 * Reads published content straight from the REST endpoint. Row level security
 * already limits anonymous callers to published rows; the explicit filter just
 * makes that visible here.
 */
async function selectPublished<T>(table: string): Promise<T[]> {
  const query = "select=*&published=is.true&order=sort_order.asc,created_at.desc";
  const response = await fetch(`${supabaseUrl}/rest/v1/${table}?${query}`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
  });

  if (!response.ok) throw new Error(`Could not load ${table}`);
  return (await response.json()) as T[];
}

export const fetchPublicVideos = async (): Promise<PublicVideo[]> =>
  (await selectPublished<VideoRow>("videos")).map((row) => ({
    key: row.id,
    id: row.youtube_id,
    title: row.title,
    subtitle: row.subtitle,
    description: row.description,
    featured: row.featured,
    isLive: row.is_live,
  }));

export const fetchPublicAudio = async (): Promise<PublicAudio[]> =>
  (await selectPublished<AudioRow>("audio_sessions")).map((row) => ({
    key: row.id,
    title: row.title,
    subtitle: row.subtitle,
    description: row.description,
    url: publicFileUrl(AUDIO_BUCKET, row.audio_path),
    recordedOn: row.recorded_on,
  }));

export const fetchPublicAnnouncements = async (): Promise<PublicAnnouncement[]> =>
  (await selectPublished<AnnouncementRow>("announcements")).map((row) => ({
    key: row.id,
    category: row.category,
    date: row.date_label,
    title: row.title,
    summary: row.summary,
    image: row.image_path ? publicFileUrl(GALLERY_BUCKET, row.image_path) : undefined,
  }));

export const fetchPublicGallery = async (): Promise<PublicGalleryImage[]> =>
  (await selectPublished<GalleryRow>("gallery_images")).map((row) => ({
    key: row.id,
    src: publicFileUrl(GALLERY_BUCKET, row.image_path),
    alt: row.alt,
  }));
