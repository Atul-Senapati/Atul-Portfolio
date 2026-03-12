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

  // Mock live logs
  const [logs, setLogs] = useState<string[]>([
    "SYS_OP: Optimizing query routing in us-east-1...",
    "NET: Node connection established globally",
    "EXEC: Resolved customer ticket #88492",
    "SEC: Blocked anomalous request pattern",
    "ML: Model weights updated successfully",
  ])

  useEffect(() => {
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
        const next = [...prev]
        next.unshift(newLogs[Math.floor(Math.random() * newLogs.length)])
        if (next.length > 6) next.pop()
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-neutral-200 min-h-screen selection:bg-white selection:text-black overflow-hidden">
      
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

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-neutral-300 uppercase tracking-widest mb-8"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
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
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: '0.8ms', label: 'Inference Latency' },
              { value: '100B+', label: 'Parameters' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '256k', label: 'Context Window' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


       {/* 3D Interactive Section */}
       <section id="architecture" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Card className="w-full h-[600px] bg-neutral-950 relative overflow-hidden border border-white/10 rounded-3xl">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={400} />
              
              {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] pointer-events-none z-20" /> */}

              <div className="flex flex-col md:flex-row h-full relative z-10">
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-neutral-300 uppercase tracking-widest mb-6 w-fit">
                    Interactive Architecture
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    Visualize the <br />
                    <span className="text-neutral-500">data flow.</span>
                  </h2>
                  <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
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
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Engineered for the future. <br className="hidden md:block" />
              <span className="text-neutral-500">Built for today.</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl text-lg">
              Our architecture combines raw computational power with elegant, intuitive interfaces. Every component is optimized for maximum performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[320px]">
            
            {/* Large Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80&grayscale=1" 
                  alt="Neural Network" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 mix-blend-luminosity group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <Network className="w-8 h-8 text-white mb-6" />
                <h3 className="text-3xl font-medium text-white mb-3">Neural Routing</h3>
                <p className="text-neutral-400 max-w-md text-lg">
                  Dynamic query routing across specialized sub-models ensures optimal accuracy and minimal latency for every request.
                </p>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 p-8 flex flex-col group"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80&grayscale=1" 
                  alt="Edge Compute" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="mt-auto relative z-10">
                <Zap className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Edge Compute</h3>
                <p className="text-neutral-400 text-sm">
                  Models deployed at the edge. Processing happens closer to your users, eliminating round-trip delays.
                </p>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 p-8 flex flex-col group"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80&grayscale=1" 
                  alt="Zero-Trust Security" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="mt-auto relative z-10">
                <Lock className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Zero-Trust Security</h3>
                <p className="text-neutral-400 text-sm">
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
              className="md:col-span-3 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 group"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80&grayscale=1" 
                  alt="Global Synchronization" 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
              </div>
              <div className="flex-1 z-10">
                <Globe className="w-8 h-8 text-white mb-6" />
                <h3 className="text-3xl font-medium text-white mb-3">Global Synchronization</h3>
                <p className="text-neutral-400 text-lg max-w-md">
                  State is synchronized across all nodes globally in real-time. A conversation started in Tokyo seamlessly continues in New York.
                </p>
              </div>
              <div className="flex-1 w-full relative h-48 md:h-full rounded-xl overflow-hidden border border-white/10 bg-black/50 z-10 backdrop-blur-sm">
                {/* Abstract UI Mockup */}
                <div className="absolute inset-0 p-4 flex flex-col gap-3">
                  <div className="w-3/4 h-12 rounded-lg bg-white/5 border border-white/5 animate-pulse" />
                  <div className="w-1/2 h-12 rounded-lg bg-white/10 border border-white/10 self-end animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2/3 h-12 rounded-lg bg-white/5 border border-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The Intelligence Pipeline */}
      <section id="pipeline" className="py-32 px-6 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
              How it thinks.
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              A transparent, deterministic pipeline that transforms raw input into executed actions in milliseconds.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-neutral-800">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-transparent via-white to-transparent origin-left"
              />
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
            >
              {[
                { icon: Database, title: "1. Ingest", desc: "Ingests multi-modal data from APIs, databases, and user inputs." },
                { icon: Layers, title: "2. Contextualize", desc: "Retrieves historical memory and applies semantic search." },
                { icon: Cpu, title: "3. Reason", desc: "Evaluates constraints, permissions, and optimal pathways." },
                { icon: Activity, title: "4. Execute", desc: "Triggers tools, writes code, or responds to the user." },
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-white/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Sandbox / Tweak Parameters */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
          >
            {/* Left: Header + Title + Description */}
            <div className="flex-1 max-w-xl">
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                <span className="block">Tweak parameters</span>
                <span className="block">in real time.</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Expose model temperature, context length, and sampling constants to quickly test response quality, creativity thresholds, and safety boundaries.
              </p>
            </div>

            {/* Right: Parameter sliders */}
            <div className="flex-1 w-full max-w-md space-y-0">
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
                  className="relative py-5 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                      {label}
                    </span>
                    <span className="text-sm font-mono text-white tabular-nums">
                      {display}
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-white/90"
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
      <section id="integration" className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
              Three lines of code. <br />
              <span className="text-neutral-500">Infinite possibilities.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
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
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl"
          >
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-neutral-700" />
              <div className="w-3 h-3 rounded-full bg-neutral-700" />
              <div className="w-3 h-3 rounded-full bg-neutral-700" />
              <div className="ml-2 text-xs text-neutral-500 font-mono">agent.ts</div>
            </div>
            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed">
              <pre>
                <code className="text-neutral-300">
                  <span className="text-neutral-500">import</span> {'{'} Agent {'}'} <span className="text-neutral-500">from</span> <span className="text-white">'@nexus/ai'</span>;
                  <br /><br />
                  <span className="text-neutral-500">const</span> bot = <span className="text-neutral-500">new</span> Agent({'{'}<br />
                  {'  '}model: <span className="text-white">'nexus-v2-turbo'</span>,<br />
                  {'  '}memory: <span className="text-white">true</span>,<br />
                  {'  '}tools: [search, database]<br />
                  {'}'});<br /><br />
                  <span className="text-neutral-500">await</span> bot.deploy();
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 3: Live System Activity Feed */}
      <section className="py-24 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                Global execution.
              </h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-md">
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
            <div className="h-[300px] w-full rounded-2xl border border-white/10 bg-black p-6 relative overflow-hidden font-mono text-sm flex flex-col justify-end">
              {/* Fade out top */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />
              
              <div className="flex flex-col gap-3">
                <AnimatePresence initial={false}>
                  {logs.map((log, i) => (
                    <motion.div
                      key={log + i}
                      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                      animate={{ opacity: 1 - (i * 0.15), y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="text-neutral-400 border-l-2 border-white/20 pl-3 py-1"
                    >
                      <span className="text-neutral-600 mr-3">{new Date().toISOString().split('T')[1].slice(0, -1)}</span>
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-40 md:py-48 px-6 md:px-8 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20 md:mb-28"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 md:mb-8">
              Trusted by teams that <br className="hidden md:block" />
              <span className="text-neutral-500">ship at scale.</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl">
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

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-8">
              Ready to initialize?
            </h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies building the next generation of autonomous software.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="h-14 px-10 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors text-lg">
                Create Free Account
              </button>
              <button className="h-14 px-10 border border-white/20 bg-transparent text-white font-medium rounded-full hover:bg-white/5 transition-colors text-lg">
                Contact Sales
              </button>
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
