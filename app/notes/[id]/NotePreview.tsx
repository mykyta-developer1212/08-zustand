"use client";

import { useQuery } from "@tanstack/react-query";
import Modal from "@/components/Modal/Modal";
import styles from "./NotePreview.module.css";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";

interface NotePreviewProps {
  noteId: string;
  onClose: () => void;
}

export default function NotePreview({ noteId, onClose }: NotePreviewProps) {
  const { data: note, isLoading, isError } = useQuery<Note>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !!noteId,
    refetchOnMount: false,
  });

  if (isLoading || isError || !note) return null;

return (
  <Modal onClose={onClose}>
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={onClose}>
        Back
      </button>

      <div className={styles.item}>
        <div className={styles.header}>
          <h2>{note.title}</h2>
          {note.tag && <span className={styles.tag}>{note.tag}</span>}
        </div>

        <p className={styles.content}>{note.content}</p>

        <p className={styles.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  </Modal>
);
}