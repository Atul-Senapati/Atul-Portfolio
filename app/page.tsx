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
    "full stack developer",
    "fullstack developer",
    "UI engineer",
    "UI UX designer",
    "product designer",
    "design driven developer",
    "freelance developer",
    "freelance web developer",
    "freelance full stack developer",
    "hire freelance developer",
    "hire frontend developer",
    "hire full stack developer",
    "hire React developer",
    "hire Next.js developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "JavaScript developer",
    "TypeScript developer",
    "tech stack",
    "Next.js portfolio",
    "Tailwind CSS",
    "SaaS landing page",
    "web designer",
    "remote developer for hire",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Atul Senapati",
  url: SITE_URL,
  image: `${SITE_URL}/developer.png`,
  jobTitle: "Design‑Driven Frontend Developer",
  description:
    "Design‑driven frontend developer focused on cinematic interfaces, motion, and modern web experiences with Next.js, React, and Tailwind.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Flask",
    "MongoDB",
    "Tailwind CSS",
    "Figma",
    "UI/UX Design",
    "Framer Motion",
    "Full-Stack Development",
    "Frontend Development",
  ],
  sameAs: [
    "https://github.com/Atul-Senapati",
    "https://www.instagram.com/atul.senapati",
    "https://www.facebook.com/atul.senapati.92",
    "https://in.linkedin.com/in/atul-senapati-657b6920a",
    "https://x.com/atul_senapati",
    "https://www.upwork.com/freelancers/~0101b4da2e3862f1c5?viewMode=1",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HomeClient />
    </>
  );
}

