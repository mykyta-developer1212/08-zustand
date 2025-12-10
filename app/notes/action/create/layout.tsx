"use client";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function CreateNoteLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}