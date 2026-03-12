"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";

const toolGroups = [
  {
    label: "Design",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_24px_-4px_rgba(167,139,250,0.4)]",
    tools: [
      { name: "Figma", icon: "/tech-icons/figma.svg" },
      { name: "Framer", icon: "/tech-icons/framer.svg" },
      { name: "Sketch", icon: "/tech-icons/sketch.svg" },
      { name: "Adobe PS", icon: "/tech-icons/adobe-ps.svg" },
      { name: "After Effects", icon: "/tech-icons/adobe-ae.svg" },
      { name: "Illustrator", icon: "/tech-icons/adobe-ai.svg" },
      { name: "Adobe XD", icon: "/tech-icons/adobe-xd.svg" },
      { name: "Miro", icon: "/tech-icons/miro.svg" },
      { name: "Canva", icon: "/tech-icons/canva.svg" },
      { name: "Invision", icon: "/tech-icons/invision.svg" },
      { name: "Lottie", icon: "/tech-icons/lottie.svg" },
    ],
  },
  {
    label: "Front-end & runtimes",
    accent: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_24px_-4px_rgba(52,211,153,0.4)]",
    tools: [
      { name: "Next.js", icon: "/tech-icons/react.svg" },
      { name: "Vue", icon: "/tech-icons/vue.svg" },
      { name: "React", icon: "/tech-icons/react.svg" },
      { name: "HTML5", icon: "/tech-icons/html5.svg" },
      { name: "CSS3", icon: "/tech-icons/css3.svg" },
      { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
      { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
      { name: "Tailwind", icon: "/tech-icons/tailwind.svg" },
      { name: "Webflow", icon: "/tech-icons/webflow.svg" },
      { name: "Bootstrap", icon: "/tech-icons/boostrap.svg" },
      { name: "jQuery", icon: "/tech-icons/jquery.svg" },
    ],
  },
  {
    label: "Back-end & tools",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_24px_-4px_rgba(251,191,36,0.4)]",
    tools: [
      { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
      { name: "Python", icon: "/tech-icons/python.svg" },
      { name: "GitHub", icon: "/tech-icons/github.svg" },
      { name: "npm", icon: "/tech-icons/npm.svg" },
      { name: "Jira", icon: "/tech-icons/jira.svg" },
      { name: "Trello", icon: "/tech-icons/trello.svg" },
      { name: "Notion", icon: "/tech-icons/notion.svg" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    handle: "@atul_senapati",
    href: "https://www.instagram.com/atul.senapati",
    accent: "from-fuchsia-500/80 via-rose-500/80 to-amber-400/80",
    icon: "/Social/Instagram_white.svg",
  },
  {
    label: "Facebook",
    handle: "facebook.com/atulsenapati",
    href: "https://www.facebook.com/atul.senapati.92",
    accent: "from-sky-500/80 via-blue-600/80 to-indigo-500/80",
    icon: "/Social/Facebook_white.svg",
  },
  {
    label: "GitHub",
    handle: "github.com/atul-senapati",
    href: "https://github.com/Atul-Senapati",
    accent: "from-zinc-700/80 via-zinc-500/80 to-emerald-400/80",
    icon: "/Social/Github_white.svg",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/atul-senapati",
    href: "https://in.linkedin.com/in/atul-senapati-657b6920a",
    accent: "from-sky-500/80 via-blue-500/80 to-cyan-400/80",
    icon: "/Social/LinkedIN_white.svg",
  },
  {
    label: "X (Twitter)",
    handle: "@atul_senapati",
    href: "https://x.com/atul_senapati",
    accent: "from-zinc-100/80 via-zinc-400/80 to-zinc-900/80",
    icon: "/Social/Twitter_white.svg",
  },
  {
    label: "Upwork",
    handle: "upwork.com/freelancers/atul",
    href: "https://www.upwork.com/freelancers/~0101b4da2e3862f1c5?viewMode=1",
    accent: "from-emerald-500/80 via-emerald-400/80 to-lime-400/80",
    icon: "/Social/Shopify_white.svg",
  },
];

const projects = [
  {
    title: "Nexus AI",
    href: "/bot",
    label: "AI, 3D feel, Interface",
    description:
      "An AI-powered  interface that brings conversational experiences to life with clean design and smooth interactions.",
    accent: "from-cyan-500/60 via-blue-500/60 to-violet-500/60",
    previewImage: "/previews/bot-nexus.jpg",
    previewImageMobile: "/previews/iPad-2.png",
    deviceImage: "/previews/Starlight-1.png",
  },
  {
    title: "Razor & Co.",
    href: "/barbershop",
    label: "Brand, UI, Interaction",
    description:
      "A cinematic barbershop experience with bold typography, deep contrast, and smooth scroll-driven storytelling.",
    accent: "from-rose-500/60 via-amber-400/60 to-emerald-400/60",
    previewImage: "/previews/barbershop.jpg",
    previewImageMobile: "/previews/iphone-1.png",
    deviceImage: "/previews/Starlight-2.png",
  },
  {
    title: "AEX Bike Gear",
    href: "/bike-gear",
    label: "Adventure, Brand, Product UI",
    description:
      "High-impact visuals, layered depth, and motion that showcases performance gear in a tactile, responsive layout.",
    accent: "from-sky-500/60 via-indigo-500/60 to-fuchsia-500/60",
    previewImage: "/previews/bike-gear.jpg",
    previewImageMobile: "/previews/iPad-1.png",
    deviceImage: "/previews/Starlight.png",
  },
  {
    title: "Cine‑Lab Studio",
    href: "/cine-lab",
    label: "Cinematic, Experimental",
    description:
      "An atmospheric cine‑lab that explores light, grain, and motion through bold layouts and story‑driven sections.",
    accent: "from-amber-500/60 via-orange-500/60 to-rose-500/60",
    previewImage: "/previews/cine-lab.jpg",
    previewImageMobile: "/previews/iPad-3.png",
    deviceImage: "/previews/Starlight-5.png",
  },
  {
    title: "Revio AI ",
    href: "https://saas-landing-page-beige-one.vercel.app/",
    label: "SaaS, Strategy, Analytics",
    description:
      "A B2B SaaS platform for forecasting, tracking KPIs, and visualizing complex market data with crisp dashboards and interactions.",
    accent: "from-emerald-500/60 via-sky-400/60 to-violet-500/60",
    previewImage: "/previews/valuemap.jpg",
    previewImageMobile: "/previews/ipad-4.png",
    deviceImage: "/previews/Starlight-7.png",
  },
  {
    title: "91 Degrees",
    href: "https://www.91degrees.in/",
    label: "Brand, E‑commerce, Lifestyle",
    description:
      "A modern sanitary care brand website with editorial layouts, clean product storytelling, and fluid mobile-first browsing.",
    accent: "from-rose-500/60 via-amber-400/60 to-sky-400/60",
    previewImage: "/previews/91-degrees.jpg",
    previewImageMobile: "/previews/iphone3.png",
    deviceImage: "/previews/Starlight-6.png",
  },
];

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

export default function HomeClient() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string | null)?.trim();
    const email = (formData.get("email") as string | null)?.trim();
    const project = (formData.get("project") as string | null)?.trim();

    if (!name || !email || !project) {
      setStatus("error");
      setErrorMessage(
        "Please fill in your name, email, and a short project description."
      );
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured yet. Please try again later."
      );
      return;
    }

    setIsSending(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          project_details: project,
          email: "atulsenapati020601@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-t from-zinc-950 via-zinc-900 to-black text-zinc-50 font-sans">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        {/* Hero */}
        <section className="grid gap-12 md:grid-cols-[minmax(0,3fr),minmax(0,2.4fr)] items-center">
          <div className="space-y-4 sm:space-y-2">
            <div className="group inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-white/[0.02] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-md transition-all hover:bg-white/[0.04]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              </span>
              <span>Available for design & front‑end builds</span>
            </div>

            <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-4 md:max-w-xl">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-zinc-400 text-base font-normal tracking-[0.3em] uppercase mb-3">
                    Atul Senapati
                  </span>
                  <span className="bg-gradient-to-r from-zinc-200 via-neutral-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(45,212,191,0.45)]">
                    Design‑driven{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                      Developer
                    </span>
                  </span>
                </h1>

                <div className="mt-6 space-y-5">
                  <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    I blend visual storytelling, interaction, and clean engineering
                    to build interfaces that feel sharp and effortless.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                      3+ years experience
                    </div>
                    <span className="hidden h-4 w-px bg-zinc-800 sm:inline" />
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                      16 projects delivered
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mt-2  flex justify-center sm:mt-0 md:justify-end">
                <div className="relative h-82 w-82 overflow-hidden rounded-3xl bg-black/80 shadow-[0_32px_120px_rgba(0,0,0,1)] sm:h-80 sm:w-80 md:h-96 md:w-96 max-w-screen ">
                  <img
                    src="/developer.png"
                    alt="Portrait of Atul Senapati, design‑driven developer"
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black via-black/60 to-transparent" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_18px_60px_rgba(0,0,0,0.65)] transition hover:bg-zinc-200"
                >
                  View featured work
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-emerald-300 hover:bg-zinc-900/60 hover:text-zinc-50"
                >
                  View CV
                </Link>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-100 shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
                >
                  Contact me
                  <span className="transition-transform group-hover:translate-x-1">
                    ✶
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="h-7 w-[1px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
                <div className="space-y-0.5">
                  <p className="text-zinc-300">
                    Design systems · Motion · 3D feel
                  </p>
                  <p>Next.js · React · Tailwind</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden">
            <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.16),transparent_60%)] opacity-80" />
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-[radial-gradient(circle_at_0_0,_#22c55e0d,transparent_55%),radial-gradient(circle_at_100%_100%,_#38bdf80d,transparent_55%)] px-6 py-6 shadow-[0_32px_120px_rgba(0,0,0,0.9)] sm:px-7 sm:py-7">
              <div className="flex items-center justify-between gap-4 pb-5">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
                    Portfolio snapshot
                  </p>
                  <p className="text-sm text-zinc-300">
                    A quick feel for how I design and build.
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
                </div>
              </div>

              <div className="grid gap-4 text-xs text-zinc-300 sm:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                    Design focus
                  </p>
                  <p className="text-sm">
                    Clean grids, cinematic spacing, and micro‑interactions that
                    guide the eye without shouting.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                    Build quality
                  </p>
                  <p className="text-sm">
                    Responsive layouts, smooth transitions, and performance‑minded
                    React + Tailwind foundations.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-zinc-800/70 bg-gradient-to-r from-zinc-900 to-zinc-950/10 px-4 py-3 text-xs text-zinc-400">
                <p>
                  Curated specifically to{" "}
                  <span className="text-zinc-100">show, not tell</span>.
                </p>
                <span className="hidden text-[0.7rem] uppercase tracking-[0.25em] text-zinc-500 sm:inline">
                  Scroll ↓
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Featured work
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-50">
                Live experiences in this playground
              </h2>
              <p className="max-w-2xl text-sm text-zinc-400">
                Explore interactive pages built inside this project. Each tile
                below is a direct link into a crafted, high‑impact interface.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects?.map((project, index) => (
              <Link
                key={project.href}
                href={project.href}
                target="_blank"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1.5 hover:border-zinc-300/40 hover:shadow-[0_26px_110px_rgba(0,0,0,0.9)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-br ${project.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-80`}
                />

                <div className="flex items-center justify-evenly">
                  <img
                    src={project.deviceImage}
                    alt={project.title}
                    className="w-3/5 h-full object-cover"
                  />
                  <img
                    src={project.previewImageMobile}
                    alt={project.title}
                    className={`w-1/5 h-full object-contain ${
                      index === 1 || index === projects.length - 1
                        ? "scale-100"
                        : "scale-125"
                    }`}
                  />
                </div>

                <div className="relative flex items-center justify-between gap-3 mt-4">
                  <div className="space-y-1">
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-zinc-400">
                      {project.label}
                    </p>
                    <h3 className="text-lg font-semibold text-zinc-50">
                      {project.title}
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/80 text-sm text-zinc-200 transition group-hover:border-zinc-200 group-hover:bg-zinc-50 group-hover:text-zinc-950">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <p className="relative mt-3 text-xs leading-relaxed text-zinc-300">
                  {project.description}
                </p>

                <div className="relative mt-4 flex items-center gap-3 text-[0.7rem] text-zinc-400">
                  <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-2.5 py-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                    {" "}
                    Live in this project
                  </span>
                  <span className="hidden text-zinc-500 sm:inline">
                    Hover to preview the energy. Click to dive in.
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6 mt-12">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Experience
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-50">
                Where I&apos;ve worked
              </h2>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.85)] transition duration-300 hover:border-zinc-300/40 hover:shadow-[0_26px_110px_rgba(0,0,0,0.9)]">
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Software Developer
                </h3>
                <p className="text-sm font-medium text-emerald-400">INVOLEAD</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1.5 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse" />
                  Jan 2024 – Present
                </span>
                <span className="text-zinc-500 px-1">Bhubaneswar</span>
              </div>
            </div>

            <div className="relative space-y-8">
              {/* Project 1 */}
              <div className="relative">
                <h4 className="text-sm font-medium text-zinc-200 mb-3 flex items-center gap-2">
                  <span className="h-px w-4 bg-zinc-700"></span>
                  B2B Marketing Analytics Platform
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 ml-6">
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Developed and maintained interactive dashboards using Next.js,
                    Chart.js, Tailwind CSS, MongoDB, and Flask.
                  </li>
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Built complex data visualization modules to present campaign
                    performance, engagement metrics, and marketing insights.
                  </li>
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Integrated real-time data services and developed reusable UI
                    components for consistency across analytics modules.
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="relative">
                <h4 className="text-sm font-medium text-zinc-200 mb-3 flex items-center gap-2">
                  <span className="h-px w-4 bg-zinc-700"></span>
                  AI Conversational Interface & Interactive Avatar System
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 ml-6">
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Developed a conversational UI enabling users to interact with
                    an AI assistant using natural language queries.
                  </li>
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Designed and integrated a 3D avatar interface supporting
                    real-time two-way voice conversations.
                  </li>
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Implemented text-to-speech (TTS) and speech input features for
                    a natural interaction experience.
                  </li>
                  <li className="relative before:absolute before:-left-4 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-700">
                    Built dynamic chat interfaces with streaming responses and
                    message state handling.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tools I use */}
        <section
          id="tools"
          className="relative mt-6 overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/80 px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.9)] md:px-8 md:py-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.12),transparent)]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),transparent)]" />
          <div className="relative mb-8 space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              Tools I use
            </p>
            <h2 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
              Design, build & ship
            </h2>
            <p className="max-w-2xl text-sm text-zinc-400">
              A mix of design tools, runtimes, and frameworks I reach for on the
              daily.
            </p>
          </div>
          <div className="relative space-y-8">
            {toolGroups.map((group) => (
              <div key={group.label} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-zinc-300">
                    {group.label}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-zinc-700/80 to-transparent" />
                </div>
                <div
                  className={`relative rounded-2xl border border-zinc-700/50 bg-gradient-to-r ${group.accent} p-4 transition-shadow duration-300`}
                >
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className={`group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10 ${group.borderGlow}`}
                        title={tool.name}
                      >
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 p-1.5">
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={32}
                            height={32}
                            className="h-full w-full object-contain object-center"
                          />
                        </div>
                        <span className="text-center text-[0.65rem] font-medium text-zinc-300 group-hover:text-zinc-100 sm:text-[0.7rem]">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-4 grid gap-8 rounded-3xl border border-zinc-900/80 bg-zinc-950/60 px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.9)] md:grid-cols-[minmax(0,1.4fr),minmax(0,1.6fr)] md:px-8 md:py-10"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              Contact
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-50">
              Have a project, idea, or experiment in mind?
            </h2>
            <p className="text-sm text-zinc-400">
              I collaborate with founders, product teams, and studios to turn
              fuzzy ideas into sharp, expressive interfaces. Tell me a bit about
              what you&apos;re building, and I&apos;ll get back with thoughts on
              direction, scope, and timelines.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-zinc-300">Direct line</p>
              <Link
                href="mailto:atulsenapati020601@gmail.com?subject=Let%27s%20build%20something"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
              >
                atulsenapati020601@gmail.com
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[0.75rem] text-zinc-400"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="How should I call you?"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[0.75rem] text-zinc-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="project"
                className="text-[0.75rem] text-zinc-400"
              >
                What are you looking to build?
              </label>
              <textarea
                id="project"
                name="project"
                rows={4}
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-500/30"
                placeholder="Share a few lines about your idea, product, or brand. Timelines and links are welcome."
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_18px_60px_rgba(34,197,94,0.55)] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send message"}
              <span>→</span>
            </button>
            {status === "success" && (
              <p className="text-[0.7rem] text-emerald-400">
                Message sent successfully. I&apos;ll get back to you shortly.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="text-[0.7rem] text-rose-400">{errorMessage}</p>
            )}
            {status === "idle" && (
              <p className="text-[0.7rem] text-zinc-500">
                This will send your message directly without opening your mail app.
              </p>
            )}
          </form>
        </section>

        {/* Connect / Social */}
        <section
          id="connect"
          className="relative mt-2 md:mt-6 overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/80 px-6 py-6 shadow-[0_20px_70px_rgba(0,0,0,0.9)] md:px-8 md:py-7"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_-20%,rgba(16,185,129,0.12),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_60%)]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Connect
              </p>
              <h2 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
                Around the web
              </h2>
              <p className="max-w-md text-sm text-zinc-400">
                Compact links to where I&apos;m active. Pick what feels easiest for
                you.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 md:justify-end">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-zinc-800/80 bg-zinc-950/80 px-3.5 py-1.75 text-xs text-zinc-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-colors duration-200 hover:border-emerald-400/80 hover:bg-zinc-900"
                >
                  <div
                    className={`pointer-events-none absolute inset-px rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70 bg-linear-to-r ${item.accent}`}
                  />
                  <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-zinc-900/90 ring-1 ring-zinc-700/80">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={18}
                      height={18}
                      className="h-3.5 w-3.5 object-contain"
                    />
                  </div>
                  <div className="relative flex flex-col leading-tight">
                    <span className="text-[0.7rem] font-medium text-zinc-200">
                      {item.label}
                    </span>
                    <span className="hidden text-[0.6rem] text-zinc-400 sm:inline">
                      {item.handle}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 flex flex-col gap-3 border-t border-zinc-900/80 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Designed & built by{" "}
            <span className="text-zinc-200">Atul Senapati</span> — design‑driven
            developer.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1">
              Open to collabs & experiments
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

