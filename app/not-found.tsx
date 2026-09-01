import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const shortcuts = [
  { label: "Featured work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Tools", href: "/#tools" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume" },
];

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-t from-zinc-950 via-zinc-900 to-black font-sans text-zinc-50">
      {/* same grid + glow vocabulary the rest of the site uses, so a dead end
          still feels like part of the portfolio */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50vh] bg-[radial-gradient(ellipse_50%_100%_at_50%_115%,rgba(16,185,129,0.14),transparent_72%)]"
      />

      <main className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-white/[0.02] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-md sm:text-[11px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </span>
          <span>Error 404 · Page not found</span>
        </div>

        <p className="mt-10 bg-gradient-to-b from-zinc-100 via-zinc-400 to-zinc-700 bg-clip-text text-[5.5rem] font-semibold leading-none tracking-tighter text-transparent sm:text-[8rem]">
          404
        </p>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          This page took a wrong turn.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
          The link may be outdated, or the page moved while I was rebuilding
          something. Everything below is still where it should be.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_18px_60px_rgba(0,0,0,0.65)] transition hover:bg-zinc-200"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
          >
            View featured work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 w-full max-w-lg">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-zinc-500">
            Jump to
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {shortcuts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3.5 py-1.5 text-xs text-zinc-400 transition hover:border-emerald-400/40 hover:text-emerald-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
