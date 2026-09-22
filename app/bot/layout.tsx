import type { Metadata } from "next";

const SITE_URL = "https://atul-portfolio-red.vercel.app";

export const metadata: Metadata = {
  title: "Nexus AI | Atul Senapati",
  description:
    "Nexus AI — an AI-powered conversational interface with a clean, 3D-feel design and smooth interactions.",
  alternates: {
    canonical: `${SITE_URL}/bot`,
  },
  openGraph: {
    title: "Nexus AI — Atul Senapati",
    description:
      "An AI-powered interface that brings conversational experiences to life with clean design and smooth interactions.",
    url: `${SITE_URL}/bot`,
    siteName: "Atul Senapati Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus AI | Atul Senapati",
    description:
      "An AI-powered interface that brings conversational experiences to life with clean design and smooth interactions.",
  },
};

export default function BotLayout({ children }: { children: React.ReactNode }) {
  return children;
}
