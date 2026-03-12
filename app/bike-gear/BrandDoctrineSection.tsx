export default function BrandDoctrineSection() {
  return (
    <section className="relative w-full bg-[#1e2420] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative max-w-[1100px] mx-auto px-6 py-24 lg:py-32 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-[#3F556B]/70" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
            AEX VELO DOCTRINE
          </span>
          <span className="h-px w-10 bg-[#3F556B]/70" />
        </div>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter uppercase text-white leading-[0.9]">
          Built for the
          <span className="text-[#3F556B]"> edge</span>
          <br />
          of speed
        </h2>

        <p className="mt-8 font-sans text-lg md:text-xl text-white/60 max-w-[40ch] mx-auto leading-relaxed">
          AEX engineers bike systems for precise control on loose surfaces,
          wet corners, and long-haul days in the saddle.
        </p>

        <div className="mt-10 flex justify-center">
          <span className="h-px w-20 bg-[#3F556B]/60" />
        </div>
      </div>
    </section>
  );
}

