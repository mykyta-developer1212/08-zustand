import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import NoteCreateClient from "./NoteCreateClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Create a new note in your NoteHub app",
  openGraph: {
    title: "Create Note",
    description: "Create a new note in your NoteHub app",
    url: "https://08-zustand-mo7u.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <TanStackProvider>
      <NoteCreateClient />
    </TanStackProvider>
  );
}