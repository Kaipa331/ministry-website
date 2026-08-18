import { useState, type FormEvent } from "react";
import { clearVideoFlag, deleteRow, fetchVideos, insertRow, parseYouTubeId, updateRow } from "../../lib/api";
import type { VideoRow } from "../../lib/types";
import { useAdminResource } from "../../admin/useAdminResource";
import { Badge, Banner, Button, Card, EmptyState, Field, SectionHeader, TextArea, TextInput, Toggle } from "../../admin/ui";
import { youtubeThumb } from "../../data/content";

interface Draft {
  link: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  isLive: boolean;
  published: boolean;
}

const emptyDraft: Draft = {
  link: "",
  title: "",
  subtitle: "",
  description: "",
  featured: false,
  isLive: false,
  published: true,
};

export default function VideosAdmin() {
  const { rows, loading, busy, error, notice, run } = useAdminResource<VideoRow>(fetchVideos);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const reset = () => {
    setDraft(emptyDraft);
    setEditingId(null);
    setFormError(null);
  };

  const startEdit = (row: VideoRow) => {
    setEditingId(row.id);
    setFormError(null);
    setDraft({
      link: row.youtube_id,
      title: row.title,
      subtitle: row.subtitle,
      description: row.description,
      featured: row.featured,
      isLive: row.is_live,
      published: row.published,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const youtubeId = parseYouTubeId(draft.link);
    if (!youtubeId) {
      setFormError("Paste a valid YouTube link or an 11-character video ID.");
      return;
    }
    if (!draft.title.trim()) {
      setFormError("Give the message a title.");
      return;
    }

    const values = {
      youtube_id: youtubeId,
      title: draft.title.trim(),
      subtitle: draft.subtitle.trim(),
      description: draft.description.trim(),
      featured: draft.featured,
      is_live: draft.isLive,
      published: draft.published,
    };

    const ok = await run(async () => {
      const saved = editingId
        ? await updateRow<VideoRow>("videos", editingId, values)
        : await insertRow<VideoRow>("videos", values);

      if (values.featured) await clearVideoFlag("featured", saved.id);
      if (values.is_live) await clearVideoFlag("is_live", saved.id);
    }, editingId ? "Message updated." : "Message published.");

    if (ok) reset();
  };

  const onDelete = (row: VideoRow) => {
    if (!window.confirm(`Remove "${row.title}" from the website?`)) return;
    void run(() => deleteRow("videos", row.id), "Message removed.");
    if (editingId === row.id) reset();
  };

  const toggleField = (row: VideoRow, field: "featured" | "is_live" | "published", value: boolean) => {
    void run(async () => {
      await updateRow<VideoRow>("videos", row.id, { [field]: value });
      if (value && field !== "published") await clearVideoFlag(field, row.id);
    }, "Saved.");
  };

  return (
    <div>
      <SectionHeader
        title="Videos & Live Sessions"
        description="Services stay on YouTube — paste the link here and it appears on the website. Mark a link as live and a red Watch Live banner shows on the home page until you turn it off."
      />

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <Card className="mb-8">
        <h2 className="mb-4 font-heading text-[18px] font-bold text-[#001a4d]">
          {editingId ? "Edit message" : "Add a message or live session"}
        </h2>
        {formError && <Banner tone="error">{formError}</Banner>}

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Field label="YouTube link" hint="Paste the full link from YouTube — watch, share, or live URLs all work.">
            <TextInput
              value={draft.link}
              onChange={(e) => set("link", e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </Field>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Title">
              <TextInput value={draft.title} onChange={(e) => set("title", e.target.value)} placeholder="Sunday Service" />
            </Field>
            <Field label="Subtitle" hint="Place and date, for example “Lilongwe · 2 August 2026”.">
              <TextInput
                value={draft.subtitle}
                onChange={(e) => set("subtitle", e.target.value)}
                placeholder="Lilongwe · 2 August 2026"
              />
            </Field>
          </div>

          <Field label="Description">
            <TextArea
              value={draft.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="A short summary of the message."
            />
          </Field>

          <div className="flex flex-wrap gap-5 pt-1">
            <Toggle checked={draft.isLive} onChange={(v) => set("isLive", v)} label="This is live now" />
            <Toggle checked={draft.featured} onChange={(v) => set("featured", v)} label="Feature on home page" />
            <Toggle checked={draft.published} onChange={(v) => set("published", v)} label="Visible on the website" />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={busy}>
              {busy ? "Saving…" : editingId ? "Save changes" : "Publish message"}
            </Button>
            {editingId && (
              <Button type="button" variant="ghost" onClick={reset}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Card>

      {loading ? (
        <p className="font-sans text-[14px] text-[#757682]">Loading messages…</p>
      ) : rows.length === 0 ? (
        <EmptyState
          title="No messages yet"
          description="Paste a YouTube link above to publish the first service to the website."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {rows.map((row) => (
            <Card key={row.id} className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <img
                src={youtubeThumb(row.youtube_id)}
                alt=""
                className="h-[90px] w-full shrink-0 rounded-xl object-cover sm:w-[160px]"
              />
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  {row.is_live && <Badge tone="live">Live now</Badge>}
                  {row.featured && <Badge tone="gold">Featured</Badge>}
                  {!row.published && <Badge>Hidden</Badge>}
                </div>
                <p className="font-sans text-[15px] font-semibold text-[#001a4d]">{row.title}</p>
                <p className="mt-0.5 font-sans text-[13px] text-[#757682]">{row.subtitle || "No subtitle"}</p>

                <div className="mt-3 flex flex-wrap gap-4">
                  <Toggle
                    checked={row.is_live}
                    onChange={(v) => toggleField(row, "is_live", v)}
                    label="Live"
                  />
                  <Toggle
                    checked={row.featured}
                    onChange={(v) => toggleField(row, "featured", v)}
                    label="Featured"
                  />
                  <Toggle
                    checked={row.published}
                    onChange={(v) => toggleField(row, "published", v)}
                    label="Visible"
                  />
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button variant="ghost" onClick={() => startEdit(row)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(row)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
