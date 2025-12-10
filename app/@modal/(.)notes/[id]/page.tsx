"use client";

import NotePreviewClient from "./NotePreview.client";
import { useSearchParams, useRouter } from "next/navigation";

export default function NoteModalWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const noteId = searchParams.get("id");

  if (!noteId) return null;

  const handleClose = () => router.back();

  return <NotePreviewClient noteId={noteId} onClose={handleClose} />;
}