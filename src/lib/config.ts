export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() ?? "";
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ?? "";

/**
 * The public site must keep working before Supabase credentials exist, so every
 * caller checks this first and falls back to the bundled content.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const AUDIO_BUCKET = "audio";
export const GALLERY_BUCKET = "gallery";

/** Both buckets are public, so their URLs are predictable and need no SDK. */
export function publicFileUrl(bucket: string, path: string): string {
  if (!supabaseUrl) return "";
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodeURI(path)}`;
}
