'use client'

import React from 'react'

/**
 * Shared design system for the Nexus marketing page.
 *
 * These live in one module so the page and its section components can't drift
 * apart — the globe section had been carrying its own heading size and surface
 * colour, which is exactly the kind of drift this prevents.
 */

// scroll-mt clears the fixed navbar when jumping to an anchor
export const SECTION = 'py-24 md:py-32 px-6 scroll-mt-24'
export const SECTION_BAND = `${SECTION} border-y border-white/5 bg-white/[0.02]`

export const H2 = 'text-3xl md:text-5xl font-medium text-white tracking-tight'
export const H2_SUB = 'text-neutral-500' // second line of a two-tone headline
export const LEAD = 'text-lg text-neutral-400 leading-relaxed'

export const EYEBROW =
  'inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] font-medium text-neutral-300 uppercase tracking-widest'

// large surfaces sit at one elevation and one radius
export const PANEL = 'rounded-3xl border border-white/10 bg-neutral-950'

// A single cool accent, spent sparingly — it only ever marks the live/active
// thing, so it keeps its meaning instead of becoming decoration.
export const ACCENT = 'text-cyan-300'

/**
 * Indexed section label. Numbering the sections gives the page a documentary
 * spine and tells you where you are in the argument, which a pill can't do.
 */
export function SectionLabel({
  index,
  children,
  align = 'left',
}: {
  index: string
  children: React.ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={`flex items-center gap-3 mb-7 ${align === 'center' ? 'justify-center' : ''}`}
    >
      <span className={`font-mono text-[11px] tabular-nums ${ACCENT}`}>{index}</span>
      <span className="h-px w-10 bg-gradient-to-r from-white/30 to-transparent" />
      <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
        {children}
      </span>
    </div>
  )
}
