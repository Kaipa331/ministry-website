import { useRef, useState, type FormEvent } from "react";
import { deleteRow, fetchGallery, insertRow, removeFile, updateRow, uploadFile } from "../../lib/api";
import type { GalleryRow } from "../../lib/types";
import { GALLERY_BUCKET, publicFileUrl } from "../../lib/supabase";
import { useAdminResource } from "../../admin/useAdminResource";
import { Badge, Banner, Button, Card, EmptyState, Field, SectionHeader, TextInput } from "../../admin/ui";

export default function GalleryAdmin() {
  const { rows, loading, busy, error, notice, run } = useAdminResource<GalleryRow>(fetchGallery);
  const [alt, setAlt] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setAlt("");
    setFormError(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const files = Array.from(fileRef.current?.files ?? []);
    if (files.length === 0) {
      setFormError("Choose at least one photo to upload.");
      return;
    }
    if (files.some((f) => !f.type.startsWith("image/"))) {
      setFormError("Only image files can be added to the gallery.");
      return;
    }

    const ok = await run(async () => {
      for (const file of files) {
        const path = await uploadFile(GALLERY_BUCKET, file);
        await insertRow<GalleryRow>("gallery_images", { image_path: path, alt: alt.trim(), published: true });
      }
    }, files.length === 1 ? "Photo added to the gallery." : `${files.length} photos added to the gallery.`);

    if (ok) reset();
  };

  const onDelete = (row: GalleryRow) => {
    if (!window.confirm("Remove this photo from the gallery?")) return;
    void run(async () => {
      await deleteRow("gallery_images", row.id);
      await removeFile(GALLERY_BUCKET, row.image_path).catch(() => {});
    }, "Photo removed.");
  };

  const toggleVisible = (row: GalleryRow) => {
    void run(() => updateRow<GalleryRow>("gallery_images", row.id, { published: !row.published }).then(() => {}), "Saved.");
  };

  return (
    <div>
      <SectionHeader
        title="Gallery"
        description="Upload photos from ministry gatherings. You can select several at once, and they appear on the Gallery page in the order they were added."
      />

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <Card className="mb-8">
        <h2 className="mb-4 font-heading text-[18px] font-bold text-[#001a4d]">Add photos</h2>
        {formError && <Banner tone="error">{formError}</Banner>}

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Field label="Photos" hint="JPG or PNG. You can choose more than one file at a time.">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="w-full rounded-xl border border-dashed border-[#c5c6d2] bg-white px-4 py-3 font-sans text-[13px] text-[#444650] file:mr-3 file:rounded-full file:border-0 file:bg-[#001a4d] file:px-4 file:py-2 file:font-sans file:text-[12px] file:font-bold file:text-white hover:file:bg-[#002a7a]"
            />
          </Field>

          <Field label="Photo description" hint="Describes the photo for visitors using screen readers.">
            <TextInput
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Ministry gathering in Lilongwe"
            />
          </Field>

          <div className="pt-2">
            <Button type="submit" disabled={busy}>
              {busy ? "Uploading…" : "Upload photos"}
            </Button>
          </div>
        </form>
      </Card>

      {loading ? (
        <p className="font-sans text-[14px] text-[#757682]">Loading photos…</p>
      ) : rows.length === 0 ? (
        <EmptyState
          title="No photos uploaded yet"
          description="Until you add photos here, the Gallery page shows the original set that shipped with the website."
        />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {rows.map((row) => (
            <div key={row.id} className="overflow-hidden rounded-2xl bg-white shadow-[0px_2px_16px_rgba(0,26,77,0.07)]">
              <div className="relative aspect-square">
                <img
                  src={publicFileUrl(GALLERY_BUCKET, row.image_path)}
                  alt={row.alt}
                  className="h-full w-full object-cover"
                />
                {!row.published && (
                  <span className="absolute left-2 top-2">
                    <Badge>Hidden</Badge>
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 p-3">
                <p className="line-clamp-2 font-sans text-[12px] text-[#757682]">{row.alt || "No description"}</p>
                <div className="flex gap-2">
                  <Button variant="ghost" className="flex-1 !px-3 !text-[12px]" onClick={() => toggleVisible(row)}>
                    {row.published ? "Hide" : "Show"}
                  </Button>
                  <Button variant="danger" className="flex-1 !px-3 !text-[12px]" onClick={() => onDelete(row)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
