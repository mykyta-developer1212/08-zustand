import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

export default function NotesPage() {
  return (
    <TanStackProvider>
      <NotesClient />
    </TanStackProvider>
  );
}