import { useRef, useState, type FormEvent } from "react";
import { deleteRow, fetchAudio, insertRow, removeFile, updateRow, uploadFile } from "../../lib/api";
import type { AudioRow } from "../../lib/types";
import { AUDIO_BUCKET, publicFileUrl } from "../../lib/supabase";
import { useAdminResource } from "../../admin/useAdminResource";
import { Badge, Banner, Button, Card, EmptyState, Field, fileInputClass, LoadingLine, Panel, SectionHeader, TextArea, TextInput, Toggle } from "../../admin/ui";

interface Draft {
  title: string;
  subtitle: string;
  description: string;
  recordedOn: string;
  published: boolean;
}

const emptyDraft: Draft = { title: "", subtitle: "", description: "", recordedOn: "", published: true };

export default function AudioAdmin() {
  const { rows, loading, busy, error, notice, run } = useAdminResource<AudioRow>(fetchAudio);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  const reset = () => {
    setDraft(emptyDraft);
    setEditingId(null);
    setFormError(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const startEdit = (row: AudioRow) => {
    setEditingId(row.id);
    setFormError(null);
    setDraft({
      title: row.title,
      subtitle: row.subtitle,
      description: row.description,
      recordedOn: row.recorded_on ?? "",
      published: row.published,
    });
    if (fileRef.current) fileRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const file = fileRef.current?.files?.[0] ?? null;
    if (!draft.title.trim()) {
      setFormError("Give the session a title.");
      return;
    }
    if (!editingId && !file) {
      setFormError("Choose an audio file to upload.");
      return;
    }
    if (file && !file.type.startsWith("audio/")) {
      setFormError("That file is not audio. Choose an MP3, M4A, or WAV file.");
      return;
    }

    const metadata = {
      title: draft.title.trim(),
      subtitle: draft.subtitle.trim(),
      description: draft.description.trim(),
      recorded_on: draft.recordedOn || null,
      published: draft.published,
    };

    const ok = await run(async () => {
      if (editingId) {
        const existing = rows.find((r) => r.id === editingId);
        if (file) {
          const path = await uploadFile(AUDIO_BUCKET, file);
          await updateRow<AudioRow>("audio_sessions", editingId, { ...metadata, audio_path: path });
          if (existing) await removeFile(AUDIO_BUCKET, existing.audio_path).catch(() => {});
        } else {
          await updateRow<AudioRow>("audio_sessions", editingId, metadata);
        }
      } else {
        const path = await uploadFile(AUDIO_BUCKET, file!);
        await insertRow<AudioRow>("audio_sessions", { ...metadata, audio_path: path });
      }
    }, editingId ? "Session updated." : "Audio session published.");

    if (ok) reset();
  };

  const onDelete = (row: AudioRow) => {
    if (!window.confirm(`Delete "${row.title}"? The audio file is removed too.`)) return;
    void run(async () => {
      await deleteRow("audio_sessions", row.id);
      await removeFile(AUDIO_BUCKET, row.audio_path).catch(() => {});
    }, "Session deleted.");
    if (editingId === row.id) reset();
  };

  return (
    <div>
      <SectionHeader
        eyebrow="Listen"
        title="Audio Sessions"
        description="Upload recorded teachings and prayer sessions straight from your computer. They appear on the Watch page with a player, and visitors can listen without leaving the site."
      />

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <Panel className="mb-8" title={editingId ? "Edit session" : "Upload an audio session"}>
        {formError && <Banner tone="error">{formError}</Banner>}

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Field
            label={editingId ? "Replace audio file (optional)" : "Audio file"}
            hint="MP3, M4A, or WAV. Keep files under about 50 MB so they load quickly for listeners."
          >
            <input
              ref={fileRef}
              type="file"
              accept="audio/*"
              className={fileInputClass}
            />
          </Field>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Title">
              <TextInput
                value={draft.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Morning prayer session"
              />
            </Field>
            <Field label="Subtitle">
              <TextInput
                value={draft.subtitle}
                onChange={(e) => set("subtitle", e.target.value)}
                placeholder="Moatize · Prayer"
              />
            </Field>
          </div>

          <Field label="Recorded on" hint="Optional — shown next to the session.">
            <TextInput type="date" value={draft.recordedOn} onChange={(e) => set("recordedOn", e.target.value)} />
          </Field>

          <Field label="Description">
            <TextArea
              value={draft.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="A short summary of the session."
            />
          </Field>

          <Toggle checked={draft.published} onChange={(v) => set("published", v)} label="Visible on the website" />

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={busy}>
              {busy ? "Uploading…" : editingId ? "Save changes" : "Upload session"}
            </Button>
            {editingId && (
              <Button type="button" variant="ghost" onClick={reset}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Panel>

      {loading ? (
        <LoadingLine>Loading sessions…</LoadingLine>
      ) : rows.length === 0 ? (
        <EmptyState
          title="No audio sessions yet"
          description="Upload a recording above and it will appear on the Watch page for visitors to listen to."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {rows.map((row) => (
            <Card key={row.id}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    {!row.published && <Badge>Hidden</Badge>}
                    {row.recorded_on && <Badge>{row.recorded_on}</Badge>}
                  </div>
                  <p className="font-sans text-[15px] font-semibold text-[#001a4d]">{row.title}</p>
                  <p className="mt-0.5 font-sans text-[13px] text-[#757682]">{row.subtitle || "No subtitle"}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button variant="ghost" size="sm" onClick={() => startEdit(row)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => onDelete(row)}>
                    Delete
                  </Button>
                </div>
              </div>
              <audio
                controls
                preload="none"
                src={publicFileUrl(AUDIO_BUCKET, row.audio_path)}
                className="mt-4 w-full"
              />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
