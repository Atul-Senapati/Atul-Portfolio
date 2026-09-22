import type { Metadata } from "next";

const SITE_URL = "https://atul-portfolio-red.vercel.app";

export const metadata: Metadata = {
  title: "Razor & Co. | Atul Senapati",
  description:
    "Razor & Co. — a cinematic barbershop experience with bold typography, deep contrast, and smooth scroll-driven storytelling.",
  alternates: {
    canonical: `${SITE_URL}/barbershop`,
  },
  openGraph: {
    title: "Razor & Co. — Atul Senapati",
    description:
      "A cinematic barbershop experience with bold typography, deep contrast, and smooth scroll-driven storytelling.",
    url: `${SITE_URL}/barbershop`,
    siteName: "Atul Senapati Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razor & Co. | Atul Senapati",
    description:
      "A cinematic barbershop experience with bold typography, deep contrast, and smooth scroll-driven storytelling.",
  },
};

export default function BarbershopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
