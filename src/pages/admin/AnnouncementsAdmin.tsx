import { useEffect, useRef, useState, type FormEvent } from "react";
import { deleteRow, fetchAnnouncements, insertRow, removeFile, updateRow, uploadFile } from "../../lib/api";
import { announcementCategories, type AnnouncementCategory, type AnnouncementRow } from "../../lib/types";
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
  Select,
  TextArea,
  TextInput,
  Toggle,
} from "../../admin/ui";

interface Draft {
  category: AnnouncementCategory;
  dateLabel: string;
  title: string;
  summary: string;
  published: boolean;
}

const emptyDraft: Draft = { category: "news", dateLabel: "", title: "", summary: "", published: true };

const categoryLabel = (c: AnnouncementCategory) =>
  announcementCategories.find((x) => x.value === c)?.label ?? c;

export default function AnnouncementsAdmin() {
  const { rows, loading, busy, error, notice, run } = useAdminResource<AnnouncementRow>(fetchAnnouncements);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [filter, setFilter] = useState<AnnouncementCategory | "all">("all");
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

  const startEdit = (row: AnnouncementRow) => {
    setEditingId(row.id);
    setFormError(null);
    setRemoveImage(false);
    setImageFile(null);
    setExistingImage(row.image_path ?? "");
    setDraft({
      category: row.category,
      dateLabel: row.date_label,
      title: row.title,
      summary: row.summary,
      published: row.published,
    });
    if (fileRef.current) fileRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!draft.title.trim()) {
      setFormError("Give the announcement a title.");
      return;
    }

    if (imageFile && !imageFile.type.startsWith("image/")) {
      setFormError("Only image files can be attached.");
      return;
    }

    const ok = await run(
      async () => {
        let imagePath = existingImage;
        if (imageFile) {
          imagePath = await uploadFile(GALLERY_BUCKET, imageFile, "announcements");
        } else if (removeImage) {
          imagePath = "";
        }

        const values = {
          category: draft.category,
          date_label: draft.dateLabel.trim(),
          title: draft.title.trim(),
          summary: draft.summary.trim(),
          published: draft.published,
          image_path: imagePath,
        };

        if (editingId) {
          await updateRow<AnnouncementRow>("announcements", editingId, values);
          const previous = rows.find((r) => r.id === editingId)?.image_path;
          if (previous && previous !== imagePath) await removeFile(GALLERY_BUCKET, previous).catch(() => {});
        } else {
          await insertRow<AnnouncementRow>("announcements", values);
        }
      },
      editingId ? "Announcement updated." : "Announcement published.",
    );

    if (ok) reset();
  };

  const onDelete = (row: AnnouncementRow) => {
    if (!window.confirm(`Remove "${row.title}"?`)) return;
    void run(async () => {
      await deleteRow("announcements", row.id);
      if (row.image_path) await removeFile(GALLERY_BUCKET, row.image_path).catch(() => {});
    }, "Announcement removed.");
    if (editingId === row.id) reset();
  };

  const visible = filter === "all" ? rows : rows.filter((r) => r.category === filter);

  return (
    <div>
      <SectionHeader
        eyebrow="Programs"
        title="Announcements"
        description="Post ministry news, upcoming programs and meetings, and outstanding events that have already taken place. Everything here shows on the News & Events page."
      />

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <Panel className="mb-8" title={editingId ? "Edit announcement" : "New announcement"}>
        {formError && <Banner tone="error">{formError}</Banner>}

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Type"
              hint={announcementCategories.find((c) => c.value === draft.category)?.blurb}
            >
              <Select value={draft.category} onChange={(e) => set("category", e.target.value as AnnouncementCategory)}>
                {announcementCategories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Date" hint="Written however you want it to read, e.g. “Sundays · 9:00 PM” or “12 Sep 2026”.">
              <TextInput
                value={draft.dateLabel}
                onChange={(e) => set("dateLabel", e.target.value)}
                placeholder="12 Sep 2026"
              />
            </Field>
          </div>

          <Field label="Title">
            <TextInput
              value={draft.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="Special ministry gathering in Blantyre"
            />
          </Field>

          <Field label="Details">
            <TextArea
              value={draft.summary}
              onChange={(e) => set("summary", e.target.value)}
              placeholder="What the ministry family needs to know."
            />
          </Field>

          <Field
            label="Picture or flyer"
            hint="Optional. Add a photo or a flyer if you have one — it will show with this post on the News & Events page."
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
              <div className="mt-3 overflow-hidden rounded-lg border border-[#e6e8ef] bg-[#f7f8fb]">
                <img src={shownPhoto} alt="" className="mx-auto max-h-56 w-full object-contain" />
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
                Remove picture
              </button>
            )}
          </Field>

          <Toggle checked={draft.published} onChange={(v) => set("published", v)} label="Visible on the website" />

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={busy}>
              {busy ? "Saving…" : editingId ? "Save changes" : "Publish announcement"}
            </Button>
            {editingId && (
              <Button type="button" variant="ghost" onClick={reset}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Panel>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {(["all", ...announcementCategories.map((c) => c.value)] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-md px-3 py-1.5 font-sans text-[12px] font-medium transition-colors ${
              filter === value
                ? "bg-[#001a4d] font-semibold text-white"
                : "border border-[#d8dbe4] bg-white text-[#5d6478] hover:border-[#001a4d]/50 hover:text-[#001a4d]"
            }`}
          >
            {value === "all" ? "All" : categoryLabel(value)}
          </button>
        ))}
      </div>

      {loading ? (
        <LoadingLine>Loading announcements…</LoadingLine>
      ) : visible.length === 0 ? (
        <EmptyState
          title="Nothing here yet"
          description="Use the form above to post news, an upcoming program, or a recent event."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {visible.map((row) => (
            <Card key={row.id} className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                {row.image_path && (
                  <img
                    src={publicFileUrl(GALLERY_BUCKET, row.image_path)}
                    alt=""
                    className="h-16 w-20 shrink-0 rounded-md object-cover"
                  />
                )}
                <div className="min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <Badge tone="gold">{categoryLabel(row.category)}</Badge>
                    {row.date_label && <Badge>{row.date_label}</Badge>}
                    {!row.published && <Badge>Hidden</Badge>}
                  </div>
                  <p className="font-sans text-[15px] font-semibold text-[#001a4d]">{row.title}</p>
                  {row.summary && <p className="mt-1 font-sans text-[13px] leading-relaxed text-[#757682]">{row.summary}</p>}
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
