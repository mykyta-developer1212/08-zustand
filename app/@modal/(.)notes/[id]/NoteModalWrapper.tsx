"use client";

import { useSearchParams, useRouter } from "next/navigation";
import NotePreviewClient from "./NotePreview.client";
import NoteCreateClient from "../create/NoteCreate.client";

export default function NoteModalWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const noteId = searchParams.get("id");
  const create = searchParams.get("create");

  if (!noteId && !create) return null;

  const handleClose = () => router.back();

  if (noteId) {
    return <NotePreviewClient noteId={noteId} onClose={handleClose} />;
  }

  if (create) {
    return <NoteCreateClient onClose={handleClose} />;
  }

  return null;
}