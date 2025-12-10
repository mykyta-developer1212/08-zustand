import NotesClient from "./Notes.client";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import NoteModalWrapper from "@/app/@modal/(.)notes/[id]/NoteModalWrapper";
import type { NoteTag } from "@/types/note";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;

  const tag = slug && slug.length > 0 ? (slug[0] as NoteTag) : "All";

  return {
    title: `Notes – ${tag}`,
    description: `Browse all notes tagged as ${tag}`,
    openGraph: {
      title: `Notes – ${tag}`,
      description: `Browse all notes tagged as ${tag}`,
      url: `https://08-zustand-vvzl.vercel.app/notes/filter/${tag}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        },
      ],
    },
  };
}

export default async function NotesPage(props: PageProps) {
  const { slug } = await props.params;

  const tag = slug && slug.length > 0 ? (slug[0] as NoteTag) : undefined;

  return (
    <TanStackProvider>
      <NotesClient tag={tag} />
      <NoteModalWrapper />
    </TanStackProvider>
  );
}
