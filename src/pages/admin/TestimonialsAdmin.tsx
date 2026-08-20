import { useEffect, useRef, useState, type FormEvent } from "react";
import { deleteRow, fetchTestimonials, insertRow, removeFile, updateRow, uploadFile } from "../../lib/api";
import type { TestimonyRow } from "../../lib/types";
import { GALLERY_BUCKET, publicFileUrl } from "../../lib/supabase";
import { useAdminResource } from "../../admin/useAdminResource";
import {
  Badge,
  Banner,
  Button,
  Card,
  EmptyState,
  Field,
  fileInputClass,
  LoadingLine,
  Panel,
  SectionHeader,
  TextArea,
  TextInput,
  Toggle,
} from "../../admin/ui";

interface Draft {
  name: string;
  role: string;
  location: string;
  quote: string;
  published: boolean;
}

const emptyDraft: Draft = { name: "", role: "", location: "", quote: "", published: true };

export default function TestimonialsAdmin() {
  const { rows, loading, busy, error, notice, run } = useAdminResource<TestimonyRow>(fetchTestimonials);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [existingImage, setExistingImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((d) => ({ ...d, [key]: value }));

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const shownPhoto = imageFile
    ? previewUrl
    : existingImage && !removeImage
      ? publicFileUrl(GALLERY_BUCKET, existingImage)
      : "";

  const reset = () => {
    setDraft(emptyDraft);
    setEditingId(null);
    setFormError(null);
    setExistingImage("");
    setImageFile(null);
    setRemoveImage(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const startEdit = (row: TestimonyRow) => {
    setEditingId(row.id);
    setFormError(null);
    setRemoveImage(false);
    setImageFile(null);
    setExistingImage(row.image_path ?? "");
    setDraft({
      name: row.name,
      role: row.role,
      location: row.location,
      quote: row.quote,
      published: row.published,
    });
    if (fileRef.current) fileRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!draft.name.trim()) {
      setFormError("Add the person’s name.");
      return;
    }
    if (!draft.quote.trim()) {
      setFormError("Add the testimony.");
      return;
    }
    if (imageFile && !imageFile.type.startsWith("image/")) {
      setFormError("Only image files can be used as a photo.");
      return;
    }

    const ok = await run(
      async () => {
        let imagePath = existingImage;
        if (imageFile) {
          imagePath = await uploadFile(GALLERY_BUCKET, imageFile, "testimonials");
        } else if (removeImage) {
          imagePath = "";
        }

        const values = {
          name: draft.name.trim(),
          role: draft.role.trim(),
          location: draft.location.trim(),
          quote: draft.quote.trim(),
          published: draft.published,
          image_path: imagePath,
        };

        if (editingId) {
          await updateRow<TestimonyRow>("testimonials", editingId, values);
          const previous = rows.find((r) => r.id === editingId)?.image_path;
          if (previous && previous !== imagePath) await removeFile(GALLERY_BUCKET, previous).catch(() => {});
        } else {
          await insertRow<TestimonyRow>("testimonials", values);
        }
      },
      editingId ? "Testimony updated." : "Testimony published.",
    );

    if (ok) reset();
  };

  const onDelete = (row: TestimonyRow) => {
    if (!window.confirm(`Remove the testimony from ${row.name}?`)) return;
    void run(async () => {
      await deleteRow("testimonials", row.id);
      if (row.image_path) await removeFile(GALLERY_BUCKET, row.image_path).catch(() => {});
    }, "Testimony removed.");
    if (editingId === row.id) reset();
  };

  return (
    <div>
      <SectionHeader
        eyebrow="Voices"
        title="Testimonies"
        description="Add reviewed testimonies. Only items marked visible appear on the home, About, and Watch pages."
      />

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <Panel className="mb-8" title={editingId ? "Edit testimony" : "New testimony"}>
        {formError && <Banner tone="error">{formError}</Banner>}

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name">
              <TextInput
                value={draft.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Sarah M."
              />
            </Field>
            <Field label="Role" hint="Optional. For example, Student or Community Leader.">
              <TextInput
                value={draft.role}
                onChange={(e) => set("role", e.target.value)}
                placeholder="Community Leader"
              />
            </Field>
          </div>

          <Field label="Location" hint="Optional. City and country, if you want it shown.">
            <TextInput
              value={draft.location}
              onChange={(e) => set("location", e.target.value)}
              placeholder="Blantyre, Malawi"
            />
          </Field>

          <Field label="Testimony">
            <TextArea
              value={draft.quote}
              onChange={(e) => set("quote", e.target.value)}
              placeholder="What this person shared about the ministry."
            />
          </Field>

          <Field
            label="Photo"
            hint="Optional. A portrait of the person, if you have one."
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className={fileInputClass}
              onChange={(e) => {
                setImageFile(e.target.files?.[0] ?? null);
                setRemoveImage(false);
              }}
            />
            {shownPhoto && (
              <div className="mt-3 h-24 w-24 overflow-hidden rounded-full border border-[#e6e8ef]">
                <img src={shownPhoto} alt="" className="h-full w-full object-cover" />
              </div>
            )}
            {(existingImage || imageFile) && !removeImage && (
              <button
                type="button"
                className="mt-2 self-start font-sans text-[12px] font-semibold text-[#b3261e] hover:underline"
                onClick={() => {
                  setRemoveImage(true);
                  setImageFile(null);
                  if (fileRef.current) fileRef.current.value = "";
                }}
              >
                Remove photo
              </button>
            )}
          </Field>

          <Toggle checked={draft.published} onChange={(v) => set("published", v)} label="Visible on the website" />

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={busy}>
              {busy ? "Saving…" : editingId ? "Save changes" : "Publish testimony"}
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
        <LoadingLine>Loading testimonies…</LoadingLine>
      ) : rows.length === 0 ? (
        <EmptyState
          title="No testimonies yet"
          description="Until you add testimonies here, the website shows the original reviewed set that shipped with the site."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {rows.map((row) => (
            <Card key={row.id} className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                {row.image_path ? (
                  <img
                    src={publicFileUrl(GALLERY_BUCKET, row.image_path)}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#001a4d] font-sans text-[12px] font-bold text-[#ffd700]">
                    {row.name.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <p className="font-sans text-[15px] font-semibold text-[#001a4d]">{row.name}</p>
                    {!row.published && <Badge>Hidden</Badge>}
                  </div>
                  {(row.role || row.location) && (
                    <p className="font-sans text-[12px] text-[#7a8194]">
                      {[row.role, row.location].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <p className="mt-1 font-sans text-[13px] italic leading-relaxed text-[#757682]">“{row.quote}”</p>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button variant="ghost" size="sm" onClick={() => startEdit(row)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => onDelete(row)}>
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
