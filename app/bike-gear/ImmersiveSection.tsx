export default function ImmersiveSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1e2420]">
      <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-[#3F556B]/60 to-transparent z-10 pointer-events-none" />
      <img
        src="/img17.jpg"
        alt="Night ride through the city"
        className="absolute inset-x-0 -top-[30%] w-full h-[160%] object-cover object-[center_40%] js-immersive-bg transition-transform duration-300 ease-out z-0 scale-[1.15] will-change-transform"
      />
      <div className="absolute inset-0 bg-[#1e2420]/30 z-0 mix-blend-multiply pointer-events-none" />
      <h2 className="relative z-20 flex flex-col items-center text-center px-6 mt-12">
        <span className="font-display text-6xl md:text-8xl lg:text-[9rem] font-semibold text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
          Tested Over
        </span>
        <span className="font-accent italic text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mt-6 drop-shadow-xl">
          <span className="text-white/80">10,000</span>
          <span className="text-white">kilometers</span>
        </span>
      </h2>
    </section>
  );
}

