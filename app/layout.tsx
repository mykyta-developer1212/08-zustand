import { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub – Your Notes App",
  description: "Manage your notes efficiently with NoteHub",
  openGraph: {
    title: "NoteHub – Your Notes App",
    description: "Manage your notes efficiently with NoteHub",
    url: "https://08-zustand-8q1p.vercel.app/",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
