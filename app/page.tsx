import Image from "next/image";
import Link from "next/link";


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
      { name: "React", icon: "/tech-icons/react.svg" },
      { name: "Vue", icon: "/tech-icons/vue.svg" },
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

const projects = [
  {
    title: "Barbershop Experience",
    href: "/barbershop",
    label: "Brand, UI, Interaction",
    description:
      "A cinematic barbershop experience with bold typography, deep contrast, and smooth scroll-driven storytelling.",
    accent: "from-rose-500/60 via-amber-400/60 to-emerald-400/60",
    previewImage: "/previews/barbershop.jpg",
    previewImageMobile: "/previews/barbershop-mobile.jpg",
  },
  {
    title: "Bike Gear Immersive",
    href: "/bike-gear",
    label: "3D feel, Product UI",
    description:
      "High-impact visuals, layered depth, and motion that showcases performance gear in a tactile, responsive layout.",
    accent: "from-sky-500/60 via-indigo-500/60 to-fuchsia-500/60",
    previewImage: "/previews/bike-gear.jpg",
    previewImageMobile: "/previews/bike-gear-mobile.jpg",
  },
  {
    title: "Cine‑Lab Studio",
    href: "/cine-lab",
    label: "Cinematic, Experimental",
    description:
      "An atmospheric cine‑lab that explores light, grain, and motion through bold layouts and story‑driven sections.",
    accent: "from-amber-500/60 via-orange-500/60 to-rose-500/60",
    previewImage: "/previews/cine-lab.jpg",
    previewImageMobile: "/previews/cine-lab-mobile.jpg",
  },
  {
    title: "Bot Nexus AI",
    href: "/bot",
    label: "AI, Chat, Interface",
    description:
      "An AI-powered chat interface that brings conversational experiences to life with clean design and smooth interactions.",
    accent: "from-cyan-500/60 via-blue-500/60 to-violet-500/60",
    previewImage: "/previews/bot-nexus.jpg",
    previewImageMobile: "/previews/bot-nexus-mobile.jpg",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-t from-zinc-950 via-zinc-900 to-black text-zinc-50 font-sans">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        {/* Hero */}
        <section className="grid gap-12 md:grid-cols-[minmax(0,3fr),minmax(0,2.4fr)] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400 shadow-[0_0_60px_rgba(255,255,255,0.04)] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
              Available for design & front‑end builds
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-4 sm:max-w-md">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-zinc-400 text-base font-normal tracking-[0.3em] uppercase mb-3">
                    Atul Senapati
                  </span>
                  <span className="bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                    Design‑driven <span className="text-emerald-400">Developer</span>
                  </span>
                </h1>

                <div className="mt-6 space-y-5">
                  <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    I blend visual storytelling, interaction, and clean engineering
                    to build interfaces that feel sharp and effortless.
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm font-medium text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                      3+ years experience
                    </div>
                    <span className="h-4 w-px bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                      16 projects delivered
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex justify-start sm:justify-end">
                <div className="relative h-92 w-92 overflow-hidden bg-black scale-120">
                  <img
                    src="/developer.png"
                    alt="Portrait of Atul Senapati, design‑driven developer"
                    className="h-full w-full object-cover grayscale "
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black via-black/60 to-transparent" />
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
                    ↗
                  </span>
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
                  <p className="text-zinc-300">Design systems · Motion · 3D feel</p>
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
            {projects?.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                target="_blank"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1.5 hover:border-zinc-300/40 hover:shadow-[0_26px_110px_rgba(0,0,0,0.9)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-br ${project.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-80`}
                />

             
                <div className="flex items-center  justify-evenly"> 
                   <img src={"/Starlight.png"} alt={project.title} className="w-3/5 h-full object-cover" />
                   <img src={"iPad Pro.png"} alt={project.title} className="w-1/5 h-full object-contain scale-125" />
                {/* <img src={"/Device 14PM.svg"} alt={project.title} className="w-1/5 h-full object-cover scale-90" /> */}
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
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/80 text-sm text-zinc-200 transition group-hover:border-zinc-200 group-hover:bg-zinc-50 group-hover:text-zinc-950">
                    ↗
                  </span>
                </div>

                <p className="relative mt-3 text-xs leading-relaxed text-zinc-300">
                  {project.description}
                </p>

                <div className="relative mt-4 flex items-center gap-3 text-[0.7rem] text-zinc-400">
                  <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-2.5 py-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
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
                href="mailto:hello.atul.senapati@example.com?subject=Let%27s%20build%20something"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
              >
                hello.atul.senapati@example.com
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          <form
            className="space-y-4 text-sm"
            action="mailto:hello.atul.senapati@example.com"
            method="post"
            encType="text/plain"
          >
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
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_18px_60px_rgba(34,197,94,0.55)] transition hover:bg-emerald-300"
            >
              Send message
              <span>→</span>
            </button>
            <p className="text-[0.7rem] text-zinc-500">
              This will open your default mail app with the details you provide.
            </p>
          </form>
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
              A mix of design tools, runtimes, and frameworks I reach for on the daily.
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
