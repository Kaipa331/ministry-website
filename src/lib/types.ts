export type AnnouncementCategory = "news" | "upcoming" | "event";

export const announcementCategories: { value: AnnouncementCategory; label: string; blurb: string }[] = [
  { value: "news", label: "News", blurb: "Ministry updates and notices" },
  { value: "upcoming", label: "Upcoming meeting", blurb: "Programs and gatherings still ahead" },
  { value: "event", label: "Past event", blurb: "Outstanding events already held" },
];

/** Database rows, exactly as stored in Supabase. */

export interface VideoRow {
  id: string;
  youtube_id: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  is_live: boolean;
  published: boolean;
  sort_order: number;
  created_at: string;
}

export interface AudioRow {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  audio_path: string;
  recorded_on: string | null;
  published: boolean;
  sort_order: number;
  created_at: string;
}

export interface AnnouncementRow {
  id: string;
  category: AnnouncementCategory;
  date_label: string;
  title: string;
  summary: string;
  image_path: string;
  published: boolean;
  sort_order: number;
  created_at: string;
}

export interface GalleryRow {
  id: string;
  image_path: string;
  alt: string;
  published: boolean;
  sort_order: number;
  created_at: string;
}

export interface TestimonyRow {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  date_label: string;
  image_path: string;
  published: boolean;
  sort_order: number;
  created_at: string;
}

/**
 * Shapes the public pages render. These stay identical whether the data came
 * from Supabase or from the bundled fallback content.
 */

export interface PublicVideo {
  key: string;
  /** YouTube video id — used for embeds, thumbnails, and watch links. */
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  isLive: boolean;
}

export interface PublicAudio {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  recordedOn: string | null;
}

export interface PublicAnnouncement {
  key: string;
  category: AnnouncementCategory;
  date: string;
  title: string;
  summary: string;
  image?: string;
}

export interface PublicGalleryImage {
  key: string;
  src: string;
  alt: string;
}

export interface PublicTestimony {
  key: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  date: string;
  image: string;
  avatar: string;
}
