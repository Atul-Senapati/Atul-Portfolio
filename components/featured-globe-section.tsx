"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "@/components/globe"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export function FeaturedGlobeSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl bg-neutral-900/80 border border-white/10 px-6 py-16 md:px-16 md:py-24 mt-24 md:mt-32"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Deploy globally with{" "}
            <span className="text-white">Nexus AI</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed">
            Empower your team with fast, elegant, and scalable AI agents. Nexus AI brings simplicity and performance to your modern apps—from San Francisco to Singapore.
          </p>
          <Button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200">
            Join Today <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative h-[180px] w-full max-w-xl md:h-[220px]">
          <Globe className="absolute -bottom-20 -right-40 scale-150 opacity-90" />
        </div>
      </div>
    </motion.section>
  )
}
