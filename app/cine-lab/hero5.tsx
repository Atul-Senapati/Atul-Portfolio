export default function Hero() {

  return (
    <section  className="h-screen relative flex flex-col justify-between  overflow-hidden border-b border-white/10 bg-black">
      <div className="hero-img-container">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2560"
          className="hero-img grayscale-100"
          alt="Cinema Camera"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#050505_120%)]" />
      </div>
      <div className="absolute top-1/2 left-6 -translate-y-1/2 hidden md:flex flex-col gap-4 z-10 mono text-[14px] text-gray-500 writing-vertical-lr opacity-60">
        <span>ISO 500T / 5219</span>
        <span className="">TEMP 24.5°C</span>
        <span>PROCESS ECN-2</span>
      </div>
      <div className="absolute right-6 top-1/3 flex flex-col items-end z-10 mono text-xs text-red-600">
        <span id="timecode">00:00:00:00</span>
        <span className="text-gray-500 mt-1">REC ●</span>
      </div>
      <div className="absolute bottom-2 z-10 mt-auto mb-10 md:mb-20 ml-0 md:ml-12">
        <div className="line-wrapper">
          <h1 className="hero-line text-[10vw] leading-[0.8] font-bold tracking-tighter mix-blend-screen text-white">
            ANALOG
          </h1>
        </div>

        <div className="line-wrapper flex items-center gap-10">
          <h1 className="hero-line text-[10vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
            RESEARCH
          </h1>

          <div className="hidden md:block w-32 h-[1px] bg-[#ff3300] mt-8" />

          <p className="hero-sub mono text-xs md:text-sm max-w-xs text-gray-400 mt-4 leading-relaxed uppercase">
            We bridge the gap between photochemical tradition and digital
            precision. A full-service cinema laboratory.
          </p>
        </div>
      </div>
    </section>
  );
}
