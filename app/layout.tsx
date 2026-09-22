import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://atul-portfolio-red.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Atul Senapati",
  description: "Design‑driven developer",
  icons: {
    icon: "/fav.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "IfyF186s_EfyHgN9Aj6fThjjtRvx6hKuRDsfGkyG4rA",
  },
  openGraph: {
    title: "Atul Senapati – Design‑driven developer",
    description:
      "Explore Atul Senapati’s design‑driven development work, experiments, and visuals.",
    url: "https://atul-portfolio-red.vercel.app/",
    siteName: "Atul Senapati",
    images: [
      {
        url: "https://atul-portfolio-red.vercel.app/developer.png",
        width: 1200,
        height: 630,
        alt: "Atul Senapati – Design‑driven developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-YECYJ6Z37W" />
    </html>
  );
}
