import "@/app/globals.css";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ flex: 1 }}>
      {children}
    </main>
  );
}