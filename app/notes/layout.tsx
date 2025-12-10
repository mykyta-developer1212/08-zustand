import "@/app/globals.css";

export default function NotesLayout({
  children,
  sidebar
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div>
      <aside>
        {sidebar}
      </aside>

      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}