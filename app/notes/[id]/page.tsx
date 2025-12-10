import type { Metadata } from "next";
import { fetchNoteById } from "@/lib/api";
import type { Note } from "@/types/note";

interface NoteDetailsPageProps {
  params: { id: string };
  searchParams?: { fullscreen?: string };
}

export async function generateMetadata({
  params,
}: NoteDetailsPageProps): Promise<Metadata> {
  const note: Note | null = await fetchNoteById(params.id);

  const title = note ? note.title : "Note details – NoteHub";
  const description = note ? note.content : "View note details in NoteHub.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yourwebsite.com/notes/${params.id}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub preview",
        },
      ],
    },
  };
}

export default function NoteDetailsPage({
  params,
  searchParams,
}: NoteDetailsPageProps) {
  if (!searchParams?.fullscreen) return <></>;
  return <div>Note details for {params.id}</div>;
}