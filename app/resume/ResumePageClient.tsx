"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Download, Share2, FileText } from "lucide-react";

const RESUME_URL = "/Atul_Senapati_CV.pdf";
const RESUME_IFRAME_SRC = `${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0`;

export default function ResumePageClient() {
  const [shareMessage, setShareMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = "Atul Senapati — Resume";

    setShareMessage(null);

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Check out the portfolio and resume of design‑driven developer Atul Senapati.",
          url,
        });
        setShareMessage({ type: "success", text: "Shared from your device." });
        return;
      } catch {
        // ignore and fall through to clipboard
      }
    }

    if (navigator.clipboard && url) {
      try {
        await navigator.clipboard.writeText(url);
        setShareMessage({ type: "success", text: "Link copied to clipboard." });
      } catch {
        setShareMessage({
          type: "error",
          text: "Copy failed. Please copy the link from the address bar.",
        });
      }
    } else {
      setShareMessage({
        type: "error",
        text: "Sharing is not supported here. Please copy the link from the address bar.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-t from-zinc-950 via-zinc-900 to-black text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-10 md:gap-16 md:px-10 md:py-16 lg:px-16">
        {/* Header / Back */}
        <header className="flex flex-col gap-4 border-b border-zinc-900/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 transition hover:text-zinc-200"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to profile
            </Link>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                Resume
              </p>
              <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl md:text-4xl">
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-white bg-clip-text text-transparent">
                  Atul Senapati
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-400">
                  <FileText className="h-3.5 w-3.5 text-zinc-500" />
                  <span>CV</span>
                </span>
              </h1>
            </div>
            <p className="max-w-xl text-sm text-zinc-400 sm:text-[0.95rem]">
              A single-page overview of my product, front‑end, and design work,
              laid out for quick review, sharing, and saving for later.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-medium text-zinc-950 shadow-[0_18px_60px_rgba(34,197,94,0.55)] transition hover:bg-emerald-300"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-xs font-medium text-zinc-100 shadow-[0_12px_40px_rgba(0,0,0,0.85)] transition hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-200"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
            {shareMessage && (
              <span
                className={`text-[11px] ${
                  shareMessage.type === "success"
                    ? "text-emerald-300"
                    : "text-amber-300"
                }`}
              >
                {shareMessage.text}
              </span>
            )}
          </div>
        </header>

        {/* Viewer */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.8fr),minmax(0,1.2fr)] items-start">
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/70 shadow-[0_24px_90px_rgba(0,0,0,0.95)]">
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.26),transparent_60%)] opacity-70" />

            <div className="relative flex items-center justify-between px-4 py-3 text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                <span className="uppercase tracking-[0.22em] text-zinc-500">
                  Live preview
                </span>
              </div>
              <span className="hidden text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500 sm:inline">
                Scroll inside to read
              </span>
            </div>

            <div className="relative border-t border-zinc-900/70 bg-zinc-950/90">
              {/* Aspect-ratio style wrapper so the iframe is responsive */}
              <div className="relative w-full overflow-hidden rounded-3xl rounded-t-none border-t border-zinc-900/80 bg-zinc-950 aspect-[3/4] sm:aspect-auto sm:h-[78vh]">
                <iframe
                  src={RESUME_IFRAME_SRC}
                  title="Atul Senapati Resume"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-zinc-900/80 bg-zinc-950/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.9)] md:p-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
                Snapshot
              </p>
              <h2 className="text-lg font-semibold text-zinc-50">
                What&apos;s inside
              </h2>
              <p className="text-sm text-zinc-400">
                A concise view of my background as a design‑driven developer —
                focused on interface design, motion, and modern web engineering.
              </p>
            </div>

            <div className="space-y-3 text-sm text-zinc-300">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                  Highlights
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-zinc-400">
                  <li>2+ years in front‑end & product interfaces.</li>
                  <li>Experience across SaaS, AI, and brand websites.</li>
                  <li>Strong focus on responsive, motion-rich layouts.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                  Best experience
                </p>
                <p className="mt-2 text-xs text-zinc-400">
                  For the cleanest view, open the resume in a new tab on
                  desktop. On smaller screens you can still scroll and zoom
                  inside the embedded viewer.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-4 text-xs text-emerald-200">
                If your browser doesn&apos;t show the PDF correctly, use the{" "}
                <span className="font-medium text-emerald-300">Download</span>{" "}
                or{" "}
                <span className="font-medium text-emerald-300">
                  Open in new tab
                </span>{" "}
                buttons above.
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

