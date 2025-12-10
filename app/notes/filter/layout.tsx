"use client";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal?: ReactNode;
}

export default function NotesLayout({ children, sidebar, modal }: LayoutProps) {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", position: "relative" }}>
      <aside style={{ width: "250px", flexShrink: 0 }}>
        {sidebar}
      </aside>

      <main style={{ flexGrow: 1 }}>
        {children}
      </main>

      {modal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1000 }}>
          {modal}
        </div>
      )}
    </div>
  );
}