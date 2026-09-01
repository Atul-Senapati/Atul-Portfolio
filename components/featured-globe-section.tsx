"use client"

import { Globe } from "@/components/globe"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { H2, H2_SUB, LEAD, PANEL, ACCENT, SectionLabel } from "@/app/bot/design"

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

// Concrete numbers give the globe something to actually mean.
const regions = [
  { code: "SFO", city: "San Francisco", ms: "0.6" },
  { code: "FRA", city: "Frankfurt", ms: "0.8" },
  { code: "SIN", city: "Singapore", ms: "1.1" },
]

export function FeaturedGlobeSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={`relative w-full max-w-7xl mx-auto overflow-hidden mt-24 md:mt-32 ${PANEL}`}
    >
      {/* Globe sits on the right and bleeds off the panel edge, so it reads as
          a cropped object rather than a tidy column — which keeps it distinct
          from the other split sections.

          NB: <Globe> is itself `absolute inset-0`, so this wrapper must be a
          SIZED box. Give it only an edge offset with no height and it collapses
          to zero, dropping the sphere outside the panel where overflow-hidden
          eats it. Interaction is desktop-only so a drag can't swallow a touch
          scroll on mobile. */}
      <div className="pointer-events-none absolute -right-28 top-1/2 h-[340px] w-[340px] -translate-y-1/2 opacity-30 sm:-right-24 md:pointer-events-auto md:-right-20 md:h-[520px] md:w-[520px] md:opacity-90 lg:-right-10 lg:h-[560px] lg:w-[560px]">
        <Globe />
      </div>

      {/* light source behind the globe, on its side of the panel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_65%_at_88%_50%,rgba(103,232,249,0.12),transparent_68%)]" />
      {/* scrim so the copy always wins over the sphere on narrow screens */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent md:via-neutral-950/60 md:to-transparent" />

      <div className="relative z-10 px-6 py-14 md:px-16 md:py-20">
        <div className="max-w-xl">
          <SectionLabel index="09">Global Edge</SectionLabel>

          <h2 className={H2}>
            Deploy globally.{" "}
            <span className={H2_SUB}>Feel local everywhere.</span>
          </h2>

          <p className={`${LEAD} mt-6 max-w-xl`}>
            Fast, elegant, scalable agents running at the edge — from San
            Francisco to Singapore, served from whichever node sits closest to
            your user.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200">
            Join Today <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* live region readout — turns decoration into evidence.
            Held to the copy column so it never runs under the sphere. */}
        <div className="mt-12 flex max-w-xl flex-wrap gap-x-9 gap-y-6">
          {regions.map((r) => (
            <div key={r.code} className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-sm tracking-widest text-white">
                    {r.code}
                  </span>
                  <span className={`font-mono text-xs tabular-nums ${ACCENT}`}>
                    {r.ms}ms
                  </span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">
                  {r.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
