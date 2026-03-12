import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const SITE_URL = "https://atul-portfolio-red.vercel.app";

export const metadata: Metadata = {
  title: "Atul Senapati | Design‑Driven Frontend Developer & UI Engineer",
  description:
    "Portfolio of Atul Senapati, a design‑driven frontend developer focused on cinematic interfaces, motion, and modern web experiences with Next.js, React, and Tailwind.",
  keywords: [
    "Atul Senapati",
    "frontend developer",
    "front-end developer",
    "UI engineer",
    "product designer",
    "design driven developer",
    "Next.js portfolio",
    "React developer",
    "Tailwind CSS",
    "SaaS landing page",
    "web designer",
    "Bhubaneswar developer",
  ],
  authors: [{ name: "Atul Senapati", url: "https://github.com/Atul-Senapati" }],
  creator: "Atul Senapati",
  publisher: "Atul Senapati",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Atul Senapati — Design‑Driven Frontend Developer & UI Engineer",
    description:
      "Explore featured work, live experiments, and interface design by Atul Senapati, blending visual storytelling with clean engineering.",
    url: `${SITE_URL}/`,
    siteName: "Atul Senapati Portfolio",
    images: [
      {
        url: `${SITE_URL}/developer.png`,
        width: 1200,
        height: 1200,
        alt: "Portrait of design‑driven developer Atul Senapati",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Senapati | Design‑Driven Frontend Developer",
    description:
      "Design‑driven frontend developer building cinematic, high‑impact interfaces with Next.js, React, and Tailwind.",
    creator: "@atul_senapati",
    images: [`${SITE_URL}/developer.png`],
  },
};

export default function Page() {
  return <HomeClient />;
}

