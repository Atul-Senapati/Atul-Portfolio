import type { Metadata } from "next";
import ResumePageClient from "./ResumePageClient";

const SITE_URL = "https://atul-portfolio-red.vercel.app";

export const metadata: Metadata = {
  title: "Resume | Atul Senapati — Design‑Driven Frontend Developer",
  description:
    "Download and review the resume of design‑driven frontend developer Atul Senapati — experience across SaaS, AI, and modern brand websites.",
  alternates: {
    canonical: `${SITE_URL}/resume`,
  },
  openGraph: {
    title: "Resume — Atul Senapati",
    description:
      "Single‑page resume for design‑driven developer Atul Senapati, focused on modern interfaces, motion, and React/Next.js.",
    url: `${SITE_URL}/resume`,
    siteName: "Atul Senapati Portfolio",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/developer.png`,
        width: 1200,
        height: 1200,
        alt: "Portrait of design‑driven developer Atul Senapati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Atul Senapati",
    description:
      "Quick view and download of the resume for design‑driven frontend developer Atul Senapati.",
    images: [`${SITE_URL}/developer.png`],
  },
};

export default function ResumePage() {
  return <ResumePageClient />;
}

