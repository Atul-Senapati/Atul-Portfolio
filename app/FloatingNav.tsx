"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Briefcase,
  Wrench,
  Mail,
  Share2,
  FileText,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "work", label: "Work", Icon: LayoutGrid },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "tools", label: "Tools", Icon: Wrench },
  { id: "contact", label: "Contact", Icon: Mail },
  { id: "connect", label: "Connect", Icon: Share2 },
];

// mobile dock: 5 slots, Contact raised into the centre notch
const mobileLeft = [
  { id: "home", label: "Home", Icon: Home },
  { id: "work", label: "Work", Icon: LayoutGrid },
];
const mobileRight = [
  { id: "tools", label: "Tools", Icon: Wrench },
  { id: "connect", label: "Connect", Icon: Share2 },
];

/**
 * The FAB's seat, carved out of the bar.
 *
 * A plain `radial-gradient` circle meets the bar's flat top edge at a right
 * angle, leaving a hard corner on each side of the cut. This is the real
 * shape instead: two fillet arcs (r=14) tangent to both the top edge and the
 * notch circle (r=34), so the edge eases into the cut.
 *
 * Tangency puts each fillet centre at cx ± √((r+f)² − f²) — worked out below
 * and baked into the path so nothing has to solve it at runtime.
 *
 * It's a fixed-size SVG tile rather than one stretched across the bar: the
 * mask is assembled from four layers (notch, two side fillers, and the area
 * below it) so the curve keeps its geometry at any screen width.
 */
const NOTCH_W = 140; // tile width
const NOTCH_H = 40; // tile height — the notch only affects the bar's top band

const NOTCH_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='40'%3E%3Cpath d='M0 0 L24.09 0 A14 14 0 0 1 37.48 9.92 A34 34 0 0 0 102.52 9.92 A14 14 0 0 1 115.91 0 L140 0 L140 40 L0 40 Z' fill='%23fff'/%3E%3C/svg%3E\")";

const SOLID = "linear-gradient(#000,#000)";

const notchMask = {
  maskImage: `${NOTCH_SVG}, ${SOLID}, ${SOLID}, ${SOLID}`,
  maskSize: `${NOTCH_W}px ${NOTCH_H}px, calc(50% - ${NOTCH_W / 2}px) ${NOTCH_H}px, calc(50% - ${NOTCH_W / 2}px) ${NOTCH_H}px, 100% calc(100% - ${NOTCH_H}px)`,
  maskPosition: "top center, top left, top right, bottom left",
  maskRepeat: "no-repeat",
  WebkitMaskImage: `${NOTCH_SVG}, ${SOLID}, ${SOLID}, ${SOLID}`,
  WebkitMaskSize: `${NOTCH_W}px ${NOTCH_H}px, calc(50% - ${NOTCH_W / 2}px) ${NOTCH_H}px, calc(50% - ${NOTCH_W / 2}px) ${NOTCH_H}px, 100% calc(100% - ${NOTCH_H}px)`,
  WebkitMaskPosition: "top center, top left, top right, bottom left",
  WebkitMaskRepeat: "no-repeat",
} as const;

export default function FloatingNav() {
  const [activeId, setActiveId] = useState("home");
  const clickLockRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const ids = navItems.map((item) => item.id);

    const onScroll = () => {
      // hold the indicator steady while a click-driven scroll is in flight
      if (clickLockRef.current && Date.now() < clickLockRef.current) return;

      const line = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // pin the last section once the page bottoms out
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = ids[ids.length - 1];
      }
      setActiveId(current);
    };

    // watch scroll position via rAF — cheaper than it looks (one number
    // compare per frame) and immune to scroll-event quirks
    let lastY = -1;
    let rafId = 0;
    const watch = () => {
      if (window.scrollY !== lastY) {
        lastY = window.scrollY;
        onScroll();
      }
      rafId = requestAnimationFrame(watch);
    };
    rafId = requestAnimationFrame(watch);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);

    const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const targetY = Math.max(
      0,
      Math.min(
        el.getBoundingClientRect().top + window.scrollY - offset,
        document.documentElement.scrollHeight - window.innerHeight
      )
    );
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 1) return;

    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: targetY, behavior: "instant" });
      return;
    }

    // duration scales gently with distance, clamped for feel
    const duration = Math.min(1100, Math.max(550, Math.abs(distance) * 0.28));
    clickLockRef.current = Date.now() + duration + 200;
    const startTime = performance.now();
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      window.scrollTo({
        top: startY + distance * easeInOutCubic(t),
        behavior: "instant",
      });
      animationRef.current = t < 1 ? requestAnimationFrame(step) : null;
    };
    animationRef.current = requestAnimationFrame(step);
  };

  // Experience has no mobile slot — keep Work lit while passing through it
  const mobileActive = activeId === "experience" ? "work" : activeId;

  const mobileItem = ({
    id,
    label,
    Icon,
  }: {
    id: string;
    label: string;
    Icon: typeof Home;
  }) => {
    const isActive = id === mobileActive;
    return (
      <button
        key={id}
        type="button"
        onClick={() => scrollTo(id)}
        aria-label={label}
        aria-current={isActive ? "true" : undefined}
        className="group relative flex flex-col items-center justify-center gap-1 py-2 outline-none"
      >
        <span className="relative grid h-6 w-6 place-items-center">
          {/* soft glow behind the active icon */}
          <span
            aria-hidden
            className={`absolute -inset-2 rounded-full bg-emerald-400/20 blur-md transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
          <Icon
            className={`relative h-[19px] w-[19px] transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:scale-90 ${
              isActive ? "text-emerald-400" : "text-zinc-500"
            }`}
            strokeWidth={isActive ? 2.2 : 1.8}
          />
        </span>
        <span
          className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
            isActive ? "text-emerald-400" : "text-zinc-500"
          }`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <>
    <nav
      aria-label="Section navigation"
      className="fixed right-4 md:right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block animate-[navSlideIn_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]"
    >
      {/* Surface, border and glow all borrowed from the page's own card
          language (zinc-800 hairline, near-black fill, emerald accent) so the
          rail reads as part of the portfolio rather than a bolted-on widget. */}
      <div className="relative flex flex-col items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950/80 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = id === activeId;
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className="group relative grid h-11 w-11 shrink-0 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              {/* everything that scales lives here — fixed footprint, so
                  magnifying one icon never nudges its neighbours */}
              <span
                aria-hidden
                className="absolute inset-0 origin-center rounded-full transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform group-hover:scale-[1.32] group-active:scale-[1.18]"
              >
                {/* active ring */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[6px]" />
                  <span className="absolute inset-0 rounded-full border border-emerald-400/40 bg-emerald-500/10 shadow-[0_0_18px_rgba(16,185,129,0.35),inset_0_0_10px_rgba(16,185,129,0.15)]" />
                </span>

                {/* hover fill */}
                <span className="absolute inset-0 rounded-full bg-white/[0.07] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />

                {/* icon, centred inside the scaling layer */}
                <span className="absolute inset-0 grid place-items-center">
                  <Icon
                    className={`h-[18px] w-[18px] ${
                      isActive
                        ? "text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                        : "text-zinc-500 transition-colors duration-200 group-hover:text-zinc-100"
                    }`}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </span>
              </span>

              {/* slide-out label */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-[calc(100%+18px)] top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-950/90 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-200 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100"
              >
                {label}
              </span>
            </button>
          );
        })}

        {/* separator — resume is a page navigation, not a section scroll */}
        <span
          aria-hidden
          className="my-0.5 h-px w-6 shrink-0 bg-zinc-800"
        />

        <Link
          href="/resume"
          aria-label="View resume"
          className="group relative grid h-11 w-11 shrink-0 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-center rounded-full transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform group-hover:scale-[1.32] group-active:scale-[1.18]"
          >
            <span className="absolute inset-0 rounded-full bg-white/[0.07] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100" />
            <span className="absolute inset-0 grid place-items-center">
              <FileText
                className="h-[18px] w-[18px] text-zinc-500 transition-colors duration-200 group-hover:text-zinc-100"
                strokeWidth={1.8}
              />
            </span>
          </span>

          <span
            aria-hidden
            className="pointer-events-none absolute right-[calc(100%+18px)] top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-950/90 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-200 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100"
          >
            View resume
          </span>
        </Link>
      </div>
    </nav>

    {/* mobile dock */}
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 md:hidden animate-[dockRiseIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.35s_both]"
    >
      <div className="relative">
        {/* bar with the notch masked out */}
        <div
          style={notchMask}
          className="rounded-t-[26px] bg-zinc-950/94 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_40px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
        >
          <div className="grid h-[62px] grid-cols-5 items-center">
            {mobileLeft.map(mobileItem)}
            <span aria-hidden />
            {mobileRight.map(mobileItem)}
          </div>
        </div>

        {/* raised contact button, seated in the notch */}
        <button
          type="button"
          onClick={() => scrollTo("contact")}
          aria-label="Contact"
          aria-current={mobileActive === "contact" ? "true" : undefined}
          className="group absolute left-1/2 top-0 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full outline-none"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-emerald-400/30 blur-lg transition-opacity duration-300 group-active:opacity-70"
          />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-400 shadow-[0_8px_24px_rgba(16,185,129,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:scale-90" />
          <Mail
            className="relative h-[22px] w-[22px] text-zinc-950 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:scale-90"
            strokeWidth={2.2}
          />
        </button>
      </div>
    </nav>
    </>
  );
}
