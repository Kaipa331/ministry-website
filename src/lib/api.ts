import { requireSupabase } from "./supabase";
import type { AnnouncementRow, AudioRow, GalleryRow, TestimonyRow, VideoRow } from "./types";

/**
 * Accepts anything the admin is likely to paste — a full watch URL, a share
 * link, a live URL, or the bare id — and returns the video id.
 */
export function parseYouTubeId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;
  if (/^[\w-]{11}$/.test(value)) return value;

  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    const fromQuery = url.searchParams.get("v");
    if (fromQuery && /^[\w-]{11}$/.test(fromQuery)) return fromQuery;

    const segments = url.pathname.split("/").filter(Boolean);
    const last = segments[segments.length - 1];
    if (last && /^[\w-]{11}$/.test(last)) return last;
  } catch {
    return null;
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/* Reads                                                                      */
/* -------------------------------------------------------------------------- */

async function selectAll<T>(table: string): Promise<T[]> {
  const { data, error } = await requireSupabase()
    .from(table)
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as T[];
}

export const fetchVideos = () => selectAll<VideoRow>("videos");
export const fetchAudio = () => selectAll<AudioRow>("audio_sessions");
export const fetchAnnouncements = () => selectAll<AnnouncementRow>("announcements");
export const fetchGallery = () => selectAll<GalleryRow>("gallery_images");
export const fetchTestimonials = () => selectAll<TestimonyRow>("testimonials");

/* -------------------------------------------------------------------------- */
/* Writes                                                                     */
/* -------------------------------------------------------------------------- */

export async function insertRow<T>(table: string, values: Record<string, unknown>): Promise<T> {
  const { data, error } = await requireSupabase().from(table).insert(values).select().single();
  if (error) throw new Error(error.message);
  return data as T;
}

export async function updateRow<T>(table: string, id: string, values: Record<string, unknown>): Promise<T> {
  const { data, error } = await requireSupabase().from(table).update(values).eq("id", id).select().single();
  if (error) throw new Error(error.message);
  return data as T;
}

export async function deleteRow(table: string, id: string): Promise<void> {
  const { error } = await requireSupabase().from(table).delete().eq("id", id);
  if (error) throw new Error(error.message);
}

/** Only one video can hold the featured or live badge at a time. */
export async function clearVideoFlag(flag: "featured" | "is_live", exceptId?: string): Promise<void> {
  let query = requireSupabase().from("videos").update({ [flag]: false }).eq(flag, true);
  if (exceptId) query = query.neq("id", exceptId);
  const { error } = await query;
  if (error) throw new Error(error.message);
}

/* -------------------------------------------------------------------------- */
/* Storage                                                                    */
/* -------------------------------------------------------------------------- */

function safeFileName(name: string): string {
  const cleaned = name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${Date.now()}-${cleaned || "file"}`;
}

export async function uploadFile(bucket: string, file: File, folder?: string): Promise<string> {
  const name = safeFileName(file.name);
  const path = folder ? `${folder}/${name}` : name;
  const { error } = await requireSupabase()
    .storage.from(bucket)
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw new Error(error.message);
  return path;
}

export async function removeFile(bucket: string, path: string): Promise<void> {
  const { error } = await requireSupabase().storage.from(bucket).remove([path]);
  if (error) throw new Error(error.message);
}
