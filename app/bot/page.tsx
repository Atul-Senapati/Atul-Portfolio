'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { FeaturedGlobeSection } from "@/components/featured-globe-section"
import { Testimonial } from "@/components/Testimonial"
import { 
  ArrowRight, Bot, Cpu, Globe, Lock, Network, Sparkles, Terminal, Zap,
  Database, MessageSquare, Code, BarChart, Activity, CheckCircle2, Command, Layers
} from 'lucide-react'
import {
  SECTION, SECTION_BAND, H2, H2_SUB, LEAD, EYEBROW, PANEL, ACCENT, SectionLabel,
} from './design'

// Reusable animation variants
const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

// Fine film grain. Flat dark surfaces read as cheap; a little noise gives the
// blacks a material quality and hides banding in the large gradients.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")"

export default function BotPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 50])


  // Live Sandbox / parameter sliders
  const [params, setParams] = useState({
    temperature: 0.72,
    maxTokens: 8000,
    topP: 0.92,
    frequencyPenalty: 0.18,
  })

  // Mock live logs. Timestamps are stamped on creation client-side —
  // deriving them during render made the server and client disagree.
  const [logs, setLogs] = useState<{ id: number; text: string; time: string }[]>([])

  useEffect(() => {
    const stamp = () => new Date().toISOString().split('T')[1].slice(0, -1)
    let id = 0
    const make = (text: string) => ({ id: id++, text, time: stamp() })

    setLogs(
      [
        "SYS_OP: Optimizing query routing in us-east-1...",
        "NET: Node connection established globally",
        "EXEC: Resolved customer ticket #88492",
        "SEC: Blocked anomalous request pattern",
        "ML: Model weights updated successfully",
      ].map(make)
    )

    const interval = setInterval(() => {
      const newLogs = [
        "SYS_OP: Rebalancing load across edge nodes...",
        "EXEC: Automated code review completed for PR #492",
        "DATA: Synthesized 2.4TB of telemetry data",
        "NET: Latency optimized to 0.7ms in ap-northeast",
        "SEC: Zero-trust verification passed for session",
        "EXEC: Generated executive summary report",
      ]
      setLogs(prev => {
        const next = [make(newLogs[Math.floor(Math.random() * newLogs.length)]), ...prev]
        if (next.length > 6) next.pop()
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-neutral-200 min-h-screen selection:bg-cyan-300 selection:text-black overflow-hidden">

      {/* global grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.045] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      {/* Navigation (Floating) */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
      >
        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2 text-white font-medium">
            <Bot className="w-5 h-5" />
            <span>Nexus AI</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pipeline" className="hover:text-white transition-colors">Pipeline</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>
          <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
            Deploy Now
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20">
        {/* Futuristic Grid Background */}
        <motion.div 
          style={{ y: gridY }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>

        {/* Horizon: a cool glow rising from the bottom edge. Gives the hero a
            light source and a ground, instead of type floating in flat black. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[55vh] bg-[radial-gradient(ellipse_55%_100%_at_50%_115%,rgba(103,232,249,0.16),rgba(103,232,249,0.04)_45%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${EYEBROW} mb-8`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nexus Engine v2.0 Live</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-8"
          >
            Intelligence that <br className="hidden md:block" />
            {/* the fade now cools into the accent instead of dying to grey,
                so the headline belongs to the same palette as everything else */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-cyan-200/70">
              scales infinitely.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
          >
            Deploy autonomous agents capable of reasoning, executing complex workflows, and learning from every interaction in real-time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="h-12 px-8 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
              Start Building <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Read the Docs
            </button>
          </motion.div>

          {/* Spec strip — a concrete detail to land on after the claim, and it
              gives the centred stack a base so it doesn't just trail off. */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.16em] sm:gap-x-10"
          >
            {[
              ['Model', 'nexus-v2-turbo'],
              ['Context', '256k'],
              ['Regions', '142'],
            ].map(([k, v], i) => (
              <div key={k} className="flex items-center gap-8 sm:gap-10">
                {i > 0 && <span aria-hidden className="hidden h-3 w-px bg-white/10 sm:block" />}
                <div className="flex items-baseline gap-2">
                  <dt className="text-neutral-600">{k}</dt>
                  <dd className={`tabular-nums ${ACCENT}`}>{v}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-neutral-600 text-[10px] uppercase tracking-[0.3em]">System Active</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-600 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [-20, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats / Proof */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            /* hairline dividers instead of gaps — reads as one instrument
               cluster rather than four floating numbers */
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07] [&>*:nth-child(-n+2)]:border-b [&>*:nth-child(-n+2)]:border-white/[0.07] md:[&>*]:border-b-0 [&>*:nth-child(odd)]:border-l-0 md:[&>*:first-child]:border-l-0 md:[&>*:nth-child(odd)]:border-l"
          >
            {[
              { value: '0.8', unit: 'ms', label: 'Inference latency' },
              { value: '100', unit: 'B+', label: 'Parameters' },
              { value: '99.99', unit: '%', label: 'Uptime SLA' },
              { value: '256', unit: 'k', label: 'Context window' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="group relative px-6 py-10 md:py-12"
              >
                {/* accent hairline wipes in on hover */}
                <span className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300/70 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-medium tracking-tighter text-white tabular-nums">
                    {stat.value}
                  </span>
                  <span className={`text-lg md:text-xl font-medium ${ACCENT}`}>
                    {stat.unit}
                  </span>
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


       {/* 3D Interactive Section */}
       <section id="architecture" className={`${SECTION} relative`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Card className={`w-full h-[600px] relative overflow-hidden ${PANEL}`}>
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />
              
              {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] pointer-events-none z-20" /> */}

              <div className="flex flex-col md:flex-row h-full relative z-10">
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center pointer-events-none">
                  <SectionLabel index="02">Interactive Architecture</SectionLabel>
                  <h2 className={`${H2} mb-6`}>
                    Visualize the <br />
                    <span className={H2_SUB}>data flow.</span>
                  </h2>
                  <p className={`${LEAD} max-w-md`}>
                    Interact with our 3D representation of the Nexus neural architecture. Watch how nodes communicate and process information in real-time.
                  </p>
                </div>
                
                <div className="flex-1 relative min-h-[300px] md:min-h-0">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full absolute inset-0 scale-125 md:scale-100 origin-center"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className={SECTION}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <SectionLabel index="03">Capabilities</SectionLabel>
            <h2 className={`${H2} mb-6`}>
              Engineered for the future. <br className="hidden md:block" />
              <span className={H2_SUB}>Built for today.</span>
            </h2>
            <p className={`${LEAD} max-w-2xl`}>
              Our architecture combines raw computational power with elegant, intuitive interfaces. Every component is optimized for maximum performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[320px]">
            
            {/* Large Card — routing diagram.
                Stock photography of circuit boards told you nothing about
                routing; a diagram of the actual mechanism does. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`md:col-span-2 md:row-span-2 relative overflow-hidden group ${PANEL}`}
            >
              <span className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.07] opacity-70 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Routing
                  </span>
                  <Network className="h-4 w-4 text-neutral-600" strokeWidth={1.6} />
                </div>

                {/* one query fanning out to specialised sub-models */}
                <div className="relative my-8 flex-1">
                  <svg viewBox="0 0 420 220" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="edgeFade" x1="0" x2="1">
                        <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.12" />
                      </linearGradient>
                    </defs>

                    {[40, 90, 140, 190].map((y, i) => (
                      <path
                        key={y}
                        d={`M96,110 C190,110 200,${y} 300,${y}`}
                        fill="none"
                        stroke={i === 1 ? 'url(#edgeFade)' : 'rgba(255,255,255,0.14)'}
                        strokeWidth={i === 1 ? 1.6 : 1}
                        strokeDasharray="4 8"
                        style={{ animation: `dashFlow ${2.4 + i * 0.5}s linear infinite` }}
                      />
                    ))}

                    {/* query node */}
                    <circle cx="96" cy="110" r="7" fill="#0a0a0a" stroke="#67e8f9" strokeWidth="1.5" />
                    <circle cx="96" cy="110" r="14" fill="none" stroke="#67e8f9" strokeOpacity="0.25" />
                    <text x="96" y="146" textAnchor="middle" className="fill-neutral-600 font-mono" fontSize="9">
                      QUERY
                    </text>

                    {/* sub-models */}
                    {[
                      { y: 40, label: 'code' },
                      { y: 90, label: 'reason' },
                      { y: 140, label: 'search' },
                      { y: 190, label: 'vision' },
                    ].map((n, i) => (
                      <g key={n.label}>
                        <rect
                          x="300" y={n.y - 11} width="86" height="22" rx="6"
                          fill={i === 1 ? 'rgba(103,232,249,0.08)' : 'rgba(255,255,255,0.03)'}
                          stroke={i === 1 ? 'rgba(103,232,249,0.45)' : 'rgba(255,255,255,0.10)'}
                        />
                        <text
                          x="343" y={n.y + 4} textAnchor="middle"
                          className={i === 1 ? 'fill-cyan-200 font-mono' : 'fill-neutral-500 font-mono'}
                          fontSize="10"
                        >
                          {n.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="mt-auto">
                  <h3 className="mb-3 text-2xl md:text-3xl font-medium text-white">Neural Routing</h3>
                  <p className="max-w-md text-neutral-400">
                    Dynamic query routing across specialized sub-models ensures optimal accuracy and minimal latency for every request.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small Card 1 — latency comparison.
                The claim is "faster", so show the two numbers next to each other. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`relative overflow-hidden p-8 flex flex-col group ${PANEL}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  Latency
                </span>
                <Zap className="h-4 w-4 text-neutral-600" strokeWidth={1.6} />
              </div>

              <div className="my-7 space-y-4">
                {[
                  { k: 'Edge', v: '0.8ms', w: 'w-[12%]', on: true },
                  { k: 'Origin', v: '240ms', w: 'w-full', on: false },
                ].map((r) => (
                  <div key={r.k}>
                    <div className="mb-1.5 flex items-baseline justify-between font-mono text-[11px]">
                      <span className="uppercase tracking-[0.16em] text-neutral-500">{r.k}</span>
                      <span className={`tabular-nums ${r.on ? ACCENT : 'text-neutral-600'}`}>{r.v}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div
                        className={`h-full rounded-full ${r.w} ${
                          r.on
                            ? 'bg-gradient-to-r from-cyan-300 to-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.5)]'
                            : 'bg-white/15'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <h3 className="mb-2 text-xl font-medium text-white">Edge Compute</h3>
                <p className="text-sm text-neutral-400">
                  Models deployed at the edge. Processing happens closer to your users, eliminating round-trip delays.
                </p>
              </div>
            </motion.div>

            {/* Small Card 2 — the payload itself, redacted. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`relative overflow-hidden p-8 flex flex-col group ${PANEL}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  Payload
                </span>
                <Lock className="h-4 w-4 text-neutral-600" strokeWidth={1.6} />
              </div>

              <div className="my-7 space-y-2 font-mono text-[11px]">
                {[
                  { k: 'prompt', v: '••••••••••••••••••' },
                  { k: 'context', v: '••••••••••••' },
                  { k: 'keys', v: '••••••••••••••' },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                  >
                    <span className="w-14 shrink-0 text-neutral-600">{row.k}</span>
                    <span className="truncate tracking-[0.15em] text-neutral-500">{row.v}</span>
                  </div>
                ))}
                <div className={`flex items-center gap-2 pt-1 ${ACCENT}`}>
                  <span className="h-1 w-1 rounded-full bg-cyan-300" />
                  <span className="text-[10px] uppercase tracking-[0.18em]">
                    Ephemeral · never trained on
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="mb-2 text-xl font-medium text-white">Zero-Trust Security</h3>
                <p className="text-sm text-neutral-400">
                  End-to-end encryption with ephemeral memory. Your data never trains our base models.
                </p>
              </div>
            </motion.div>

            {/* Wide Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`md:col-span-3 relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 group ${PANEL}`}
            >
              {/* faint meridian field instead of a stock earth photo */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.5] bg-[radial-gradient(ellipse_50%_60%_at_85%_50%,rgba(103,232,249,0.10),transparent_65%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)] bg-[size:3rem_100%] [mask-image:linear-gradient(to_right,transparent,#000_40%,transparent)]"
              />
              <div className="flex-1 z-10">
                <Globe className="w-8 h-8 text-white mb-6" />
                <h3 className="text-3xl font-medium text-white mb-3">Global Synchronization</h3>
                <p className="text-neutral-400 text-lg max-w-md">
                  State is synchronized across all nodes globally in real-time. A conversation started in Tokyo seamlessly continues in New York.
                </p>
              </div>
              {/* One conversation, two regions — shows the claim instead of
                  gesturing at it with placeholder bars */}
              <div className="flex-1 w-full relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                  <span className="text-neutral-500">session · 8f2a</span>
                  <span className={`flex items-center gap-1.5 ${ACCENT}`}>
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    synced
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-4">
                  {[
                    { region: 'TYO', text: 'Summarise Q3 churn drivers.', me: false },
                    { region: 'NYC', text: 'Continuing with full context…', me: true },
                  ].map((m) => (
                    <div key={m.region} className={`flex flex-col gap-1.5 ${m.me ? 'items-end' : 'items-start'}`}>
                      <span className="font-mono text-[10px] tracking-widest text-neutral-600">{m.region}</span>
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
                          m.me
                            ? 'bg-white text-black rounded-br-md'
                            : 'border border-white/10 bg-white/[0.04] text-neutral-300 rounded-bl-md'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}

                  {/* live typing indicator */}
                  <div className="flex items-center gap-1 pl-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-neutral-600 animate-pulse"
                        style={{ animationDelay: `${d * 0.18}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The Intelligence Pipeline */}
      <section id="pipeline" className={`${SECTION_BAND} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col items-center text-center mb-20"
          >
            <SectionLabel index="04" align="center">Pipeline</SectionLabel>
            <h2 className={`${H2} mb-6`}>
              How it thinks.
            </h2>
            <p className={`${LEAD} max-w-2xl mx-auto`}>
              A transparent, deterministic pipeline that transforms raw input into executed actions in milliseconds.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
            >
              {[
                { icon: Database, n: '01', title: "Ingest", desc: "Multi-modal data from APIs, databases, and user input." },
                { icon: Layers, n: '02', title: "Contextualize", desc: "Retrieves historical memory and applies semantic search." },
                { icon: Cpu, n: '03', title: "Reason", desc: "Evaluates constraints, permissions, and optimal pathways." },
                { icon: Activity, n: '04', title: "Execute", desc: "Triggers tools, writes code, or responds to the user." },
              ].map((step, i, arr) => (
                <motion.div
                  key={step.n}
                  variants={fadeUp}
                  className="group relative flex flex-col"
                >
                  {/* Connector is anchored to THIS node and bridges the grid
                      gap to the next one, so it stays aligned whatever the
                      column maths does. A single absolutely-positioned rail
                      across the row can't do that — it has to guess where the
                      nodes are, and gets it wrong. */}
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-[68px] right-[-2rem] top-7 hidden h-px overflow-hidden bg-white/[0.08] md:block"
                    >
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="block h-full origin-left bg-gradient-to-r from-cyan-300/50 to-white/20"
                      />
                    </span>
                  )}

                  {/* node — opaque, so the connector reads as passing behind it */}
                  <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950 transition-colors duration-500 group-hover:border-cyan-300/30">
                    <span className="absolute inset-0 rounded-2xl bg-cyan-300/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                    <step.icon className="relative h-[22px] w-[22px] text-neutral-300 transition-colors duration-500 group-hover:text-cyan-200" strokeWidth={1.6} />
                  </div>

                  <div className="flex items-baseline gap-2.5">
                    <span className={`font-mono text-[11px] tabular-nums ${ACCENT}`}>{step.n}</span>
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  </div>
                  <p className="mt-2.5 max-w-[230px] text-sm leading-relaxed text-neutral-500">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Sandbox / Tweak Parameters */}
      <section className={`${SECTION} border-y border-white/5`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            /* Mirrored: the instrument leads and the copy follows. Four
               consecutive sections were all copy-left / panel-right, which is
               what made the page feel like one repeating template. */
            className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start"
          >
            {/* Copy — sits right on desktop */}
            <div className="flex-1 max-w-xl lg:sticky lg:top-28">
              <SectionLabel index="05">Live Sandbox</SectionLabel>
              <h2 className={`${H2} leading-[1.1] mb-6`}>
                <span className="block">Tweak parameters</span>
                <span className={`block ${H2_SUB}`}>in real time.</span>
              </h2>
              <p className={LEAD}>
                Expose model temperature, context length, and sampling constants to quickly test response quality, creativity thresholds, and safety boundaries.
              </p>
            </div>

            {/* Parameter sliders — lead the composition on desktop */}
            <div className="flex-1 w-full lg:max-w-lg space-y-0">
              {[
                {
                  id: 'temperature',
                  label: 'Temperature',
                  value: params.temperature,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  display: params.temperature.toFixed(2),
                },
                {
                  id: 'maxTokens',
                  label: 'Max tokens',
                  value: params.maxTokens,
                  min: 512,
                  max: 128000,
                  step: 256,
                  display: params.maxTokens.toLocaleString(),
                },
                {
                  id: 'topP',
                  label: 'Top P',
                  value: params.topP,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  display: params.topP.toFixed(2),
                },
                {
                  id: 'frequencyPenalty',
                  label: 'Frequency penalty',
                  value: params.frequencyPenalty,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  display: params.frequencyPenalty.toFixed(2),
                },
              ].map(({ id, label, value, min, max, step, display }) => (
                <div
                  key={id}
                  className="group relative py-5 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center justify-between gap-4 mb-3.5">
                    <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                      {label}
                    </span>
                    <span className={`font-mono text-sm tabular-nums ${ACCENT}`}>
                      {display}
                    </span>
                  </div>

                  {/* tick marks turn a plain bar into a calibrated dial */}
                  <div aria-hidden className="mb-2 flex justify-between">
                    {Array.from({ length: 21 }).map((_, t) => (
                      <span
                        key={t}
                        className={`w-px ${t % 5 === 0 ? 'h-2 bg-white/20' : 'h-1 bg-white/[0.08]'}`}
                      />
                    ))}
                  </div>

                  <div className="relative h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-300/70 to-cyan-200"
                      style={{
                        width: `${((value - min) / (max - min)) * 100}%`,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    <input
                      type="range"
                      min={min}
                      max={max}
                      step={step}
                      value={value}
                      onChange={(e) =>
                        setParams((prev) => ({
                          ...prev,
                          [id]: Number(e.target.value),
                        }))
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Code Integration Section */}
      <section id="integration" className={SECTION_BAND}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionLabel index="06">Integration</SectionLabel>
            <h2 className={`${H2} mb-6`}>
              Three lines of code. <br />
              <span className={H2_SUB}>Infinite possibilities.</span>
            </h2>
            <p className={`${LEAD} mb-8`}>
              Our SDK is designed for developer happiness. Type-safe, fully documented, and ridiculously easy to implement.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['NPM, Yarn, & PNPM support', 'Comprehensive TypeScript definitions', 'Built-in error handling & retries'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors flex items-center gap-2">
              View Documentation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className={`relative overflow-hidden shadow-2xl ${PANEL}`}
          >
            {/* subtle cyan bloom so the panel reads as the lit object here */}
            <div className="pointer-events-none absolute -top-24 left-1/3 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Window chrome */}
            <div className="relative flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <div className="ml-2 text-xs text-neutral-500 font-mono">agent.ts</div>
              <span className={`ml-auto font-mono text-[10px] uppercase tracking-[0.16em] ${ACCENT}`}>
                typescript
              </span>
            </div>

            {/* Code. Token colours: cyan = keywords, white = identifiers,
                amber = strings/literals — enough hue to read as real syntax
                highlighting without turning into a rainbow. */}
            <div className="relative flex text-sm md:text-[15px] font-mono leading-[1.9]">
              {/* gutter */}
              <div
                aria-hidden
                className="select-none border-r border-white/[0.06] px-4 py-6 text-right text-neutral-700 tabular-nums"
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div className="flex-1 overflow-x-auto px-5 py-6">
                <pre>
                  <code className="text-neutral-300">
                    <span className="text-cyan-300">import</span>{' '}
                    <span className="text-neutral-500">{'{'}</span> Agent{' '}
                    <span className="text-neutral-500">{'}'}</span>{' '}
                    <span className="text-cyan-300">from</span>{' '}
                    <span className="text-amber-200/90">'@nexus/ai'</span>
                    <span className="text-neutral-500">;</span>
                    <br />
                    <br />
                    <span className="text-cyan-300">const</span>{' '}
                    <span className="text-white">bot</span>{' '}
                    <span className="text-neutral-500">=</span>{' '}
                    <span className="text-cyan-300">new</span>{' '}
                    <span className="text-white">Agent</span>
                    <span className="text-neutral-500">({'{'}</span>
                    <br />
                    {'  '}
                    <span className="text-sky-200/80">model</span>
                    <span className="text-neutral-500">:</span>{' '}
                    <span className="text-amber-200/90">'nexus-v2-turbo'</span>
                    <span className="text-neutral-500">,</span>
                    <br />
                    {'  '}
                    <span className="text-sky-200/80">memory</span>
                    <span className="text-neutral-500">:</span>{' '}
                    <span className="text-cyan-300">true</span>
                    <span className="text-neutral-500">,</span>
                    <br />
                    {'  '}
                    <span className="text-sky-200/80">tools</span>
                    <span className="text-neutral-500">:</span>{' '}
                    <span className="text-neutral-500">[</span>
                    <span className="text-white">search</span>
                    <span className="text-neutral-500">,</span>{' '}
                    <span className="text-white">database</span>
                    <span className="text-neutral-500">]</span>
                    <br />
                    <span className="text-neutral-500">{'}'});</span>
                    <br />
                    <br />
                    <span className="text-cyan-300">await</span>{' '}
                    <span className="text-white">bot</span>
                    <span className="text-neutral-500">.</span>
                    <span className="text-white">deploy</span>
                    <span className="text-neutral-500">();</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 3: Live System Activity Feed */}
      <section className={`${SECTION} border-b border-white/5 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
        {/* Mirrored again — the stream leads, copy follows */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center relative z-10">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <SectionLabel index="07">Live Activity</SectionLabel>
              <h2 className={`${H2} mb-6`}>
                Global execution.
              </h2>
              <p className={`${LEAD} mb-8 max-w-md`}>
                Millions of autonomous actions executed every second across our distributed global network.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-neutral-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  System Online
                </div>
                <div className="w-px h-4 bg-neutral-800" />
                <div className="text-neutral-500">142 Regions Active</div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full">
            <div className={`w-full relative overflow-hidden ${PANEL}`}>
              {/* terminal chrome — gives the feed somewhere to live */}
              <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  </span>
                  nexus://stream
                </div>
                <div className="font-mono text-[11px] tabular-nums text-neutral-600">
                  142 regions
                </div>
              </div>

              <div className="relative h-[264px] px-5 pb-5 pt-2 font-mono text-[13px] flex flex-col justify-end">
                {/* older entries recede into the top edge */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-10" />

                <div className="flex flex-col">
                  <AnimatePresence initial={false}>
                    {logs.map((log, i) => {
                      const tag = log.text.split(':')[0]
                      const body = log.text.slice(tag.length + 1)
                      // severity colour lets you scan the feed by category
                      const tone =
                        tag === 'SEC'
                          ? 'text-amber-300/80'
                          : tag === 'EXEC'
                          ? 'text-cyan-300/80'
                          : 'text-neutral-500'
                      return (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                          animate={{ opacity: 1 - i * 0.14, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="flex items-baseline gap-3 border-l border-white/10 py-[7px] pl-3 hover:border-cyan-300/40 transition-colors"
                        >
                          <span className="shrink-0 tabular-nums text-neutral-700">{log.time}</span>
                          <span className={`shrink-0 w-12 font-medium ${tone}`}>{tag}</span>
                          <span className="text-neutral-400">{body}</span>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`${SECTION_BAND} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col items-center text-center mb-20"
          >
            <SectionLabel index="08" align="center">Testimonials</SectionLabel>
            <h2 className={`${H2} mb-6`}>
              Trusted by teams that <br className="hidden md:block" />
              <span className={H2_SUB}>ship at scale.</span>
            </h2>
            <p className={`${LEAD} max-w-2xl mx-auto`}>
              See what design and engineering leaders say about building with Nexus.
            </p>
          </motion.div>
          <Testimonial />
        </div>
      </section>

      {/* Globe / Deploy globally */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <FeaturedGlobeSection />
        </div>
      </section>

      {/* Final CTA — bookends the hero: same cyan horizon, but rising from the
          top of the section so the page closes where it opened. */}
      <section className="relative overflow-hidden px-6 pt-28 pb-32 md:pt-36 md:pb-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_50%_100%_at_50%_-15%,rgba(103,232,249,0.14),rgba(103,232,249,0.03)_45%,transparent_75%)]"
        />
        {/* grid floor, echoing the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_55%_60%_at_50%_100%,#000_20%,transparent_75%)]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            {/* The real call to action for a developer tool is the command,
                not the question — so lead with something they can copy. */}
            <div className="mb-10 flex justify-center">
              <div className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-5 pr-2.5 backdrop-blur-sm">
                <span className="font-mono text-sm">
                  <span className={ACCENT}>$</span>{' '}
                  <span className="text-neutral-300">npx nexus init</span>
                  <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] bg-cyan-300/80 animate-pulse" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 transition-colors group-hover:text-neutral-300">
                  copy
                </span>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.02] mb-7">
              Ship your first agent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-cyan-200/70">
                before lunch.
              </span>
            </h2>

            <p className={`${LEAD} text-lg mb-11 max-w-xl mx-auto`}>
              Join thousands of teams building the next generation of autonomous
              software. Free to start, no card required.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <button className="group px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                Create Free Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="px-8 py-3.5 border border-white/15 bg-transparent text-white font-medium rounded-full hover:bg-white/5 hover:border-white/25 transition-colors">
                Contact Sales
              </button>
            </div>

            {/* quiet reassurance strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-600">
              {['No card required', 'SOC 2 Type II', 'Cancel anytime'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 text-neutral-700" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-neutral-500 text-sm">
        <p>© 2026 Nexus AI Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
