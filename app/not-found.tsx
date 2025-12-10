import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteHub - Page Not Found",
  description: "Sorry, the page you are looking for does not exist on NoteHub.",
  openGraph: {
    title: "NoteHub - Page Not Found",
    description: "Sorry, the page you are looking for does not exist on NoteHub.",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub 404 Page Image",
      },
    ],
  },
};

export default function NotFoundPage() {
  return <p>Sorry, the page you are looking for does not exist.</p>;
}