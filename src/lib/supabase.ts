import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabaseAnonKey, supabaseUrl } from "./config";

/**
 * The full SDK is only needed for the admin dashboard — signing in, writing
 * rows, and uploading files. Public pages read over REST instead (see
 * publicApi.ts) so visitors never download this bundle.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;

export function requireSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error(
      "Supabase is not connected. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.",
    );
  }
  return supabase;
}

export { AUDIO_BUCKET, GALLERY_BUCKET, isSupabaseConfigured, publicFileUrl } from "./config";
