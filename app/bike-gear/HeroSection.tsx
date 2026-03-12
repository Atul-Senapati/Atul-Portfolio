export default function HeroSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/img6.jpeg"
          className="w-full h-full object-cover grayscale opacity-100 scale-[1.06]"
          alt="Rider descending a technical trail"
        />
        <div className="absolute inset-0 bg-[#ebedea]/55" />
        <div className="absolute inset-0 bg-linear-to-r from-[#ebedea]/70 via-transparent to-[#ebedea]/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="w-full lg:w-[44%] flex flex-col items-end order-2 lg:order-1 text-right relative py-10 lg:py-12">
            <h1 className="relative flex flex-col items-end w-full">
              <span className="font-display uppercase font-semibold tracking-tighter leading-[0.9] text-[#2d322f] text-[3.5rem] md:text-[4.75rem] lg:text-[5.75rem] xl:text-[6.5rem] animate-[heroFadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.05s_both]">
                DIAL
              </span>
              <span className="font-display uppercase font-semibold tracking-tighter leading-[0.9] text-[#2d322f] text-[3.75rem] md:text-[5rem] lg:text-[6.25rem] xl:text-[7rem] animate-[heroFadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.18s_both]">
                VELOCITY
              </span>
              <span className="pointer-events-none absolute -right-1 top-1/2 -translate-y-[55%] border border-[#2d322f]/45 bg-[#3F556B] px-2.5 py-1.5 text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] font-semibold uppercase text-white tracking-[0.35em] rounded-sm animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.32s_both]">
                THE
              </span>
            </h1>

            <p className="font-accent italic text-base md:text-lg text-[#3F556B] mt-8 mb-3 pr-2 max-w-md animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
              Where tarmac, gravel, and singletrack converge.
            </p>

            <button className="bg-[#2d322f] text-white px-8 py-3 text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.25em] hover:bg-[#3F556B] transition-colors duration-300 mt-9 mr-2 rounded-sm animate-[heroFadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.55s_both]">
              Explore Bike Systems
            </button>
          </div>

          <div className="w-full lg:w-[110%] lg:translate-x-[2%] h-[420px] md:h-[480px] lg:h-[620px] flex items-center gap-1 lg:gap-1.5 overflow-visible relative group order-1 lg:order-2 animate-[heroBlindsIn_1s_cubic-bezier(0.22,1,0.36,1)_0.35s_both]">
            {["0%", "25%", "50%", "75%", "100%"].map((pos, i) => (
              <div
                key={pos}
                className={[
                  "relative overflow-hidden bg-[#1e2420] rounded-sm",
                  i === 2
                    ? "w-[28%] h-[110%] -translate-y-2 shadow-2xl z-30"
                    : i === 1 || i === 3
                    ? "w-[22%] h-[95%] translate-y-1 shadow-xl z-20"
                    : "w-[18%] h-[80%] -translate-y-4 shadow-lg z-10",
                ].join(" ")}
              >
                <div
                  className="absolute inset-x-0 -top-[30%] h-[160%] scale-[1.15] bg-no-repeat js-hero-blind will-change-transform"
                  style={{
                    backgroundImage: "url('/img23.png')",
                    backgroundSize: "500% 100%",
                    backgroundPosition: `${pos} 50%`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

