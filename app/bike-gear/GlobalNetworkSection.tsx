export default function GlobalNetworkSection() {
  return (
    <section className="bg-white text-[#2d322f] py-24 lg:py-32 border-y border-[#2d322f]/10 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#2d322f 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 grid gap-16 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        <div className="relative flex items-center justify-center [perspective:1000px]">
          <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-black/10 blur-xl rounded-[100%]" />

          <div className="absolute top-10 -left-4 lg:-left-12 bg-white border border-[#2d322f]/10 p-3 shadow-lg z-30 hidden md:block animate-[heroFadeUp_1s_ease-out_1s_both]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-[#ff3300] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-[#2d322f]">
                BCN_TRACK_01
              </span>
            </div>
            <div className="font-mono text-[9px] text-[#2d322f]/60 leading-tight">
              LAT: 41.3874 N
              <br />
              SPD: 34 KPH
            </div>
          </div>

          <div className="absolute bottom-20 -right-4 lg:-right-8 bg-white border border-[#2d322f]/10 p-3 shadow-lg z-30 hidden md:block animate-[heroFadeUp_1s_ease-out_1.5s_both]">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-[#3F556B] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-[#2d322f]">
                TYO_CRIT_04
              </span>
            </div>
            <div className="font-mono text-[9px] text-[#2d322f]/60 leading-tight">
              LAT: 35.6762 N
              <br />
              PWR: 420 W
            </div>
          </div>

          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full border border-[#2d322f]/10 bg-white/50 backdrop-blur-sm flex items-center justify-center">
            <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#2d322f]/20" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-[#2d322f]/20" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-[#2d322f]/20" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#2d322f]/20" />

            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`lat-${i}`}
                  className="absolute inset-x-0 h-px bg-[#2d322f]"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`lon-${i}`}
                  className="absolute inset-y-0 w-px bg-[#2d322f]"
                  style={{ left: `${(i + 1) * 20}%` }}
                />
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center preserve-3d animate-[globeRotate3D_25s_linear_infinite]">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`ring-${i}`}
                  className="absolute inset-0 rounded-full border border-[#2d322f]/80"
                  style={{
                    transform: `rotateY(${i * 22.5}deg)`,
                  }}
                />
              ))}
              <div
                className="absolute inset-0 rounded-full border border-[#3F556B]"
                style={{ transform: "rotateX(90deg)" }}
              />

              <div
                className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#ff3300] rounded-full shadow-sm border border-white"
                style={{
                  transform:
                    "rotateY(45deg) translateZ(160px) translateX(-50%) translateY(-50%)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#3F556B] rounded-full shadow-sm border border-white"
                style={{
                  transform:
                    "rotateY(120deg) translateZ(160px) translateY(-40px) translateX(-50%)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#2d322f] rounded-full shadow-sm border border-white"
                style={{
                  transform:
                    "rotateY(200deg) translateZ(160px) translateY(60px) translateX(-50%)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-[#ff3300] rounded-full shadow-sm border border-white"
                style={{
                  transform:
                    "rotateY(280deg) translateZ(160px) translateY(-20px) translateX(-50%)",
                }}
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-md border border-[#2d322f]/10 flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase rounded-full shadow-sm z-20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3300] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3300]" />
              </span>
              <span className="font-semibold text-[#2d322f]">
                Live Telemetry
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#3F556B]">
              Stress Test Matrix
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter uppercase leading-[1.02] text-[#2d322f]">
              Forged in the
              <span className="text-[#3F556B]"> Elements.</span>
            </h2>
            <p className="text-sm md:text-base text-[#2d322f]/70 leading-relaxed max-w-md">
              Every cassette, derailleur, and shell is tortured across 18
              distinct biomes. From the corrosive salt air of coastal
              cyclocross to the thin air of alpine passes, we break it so
              you don&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-[#2d322f]/10 bg-[#f4f6f3] px-5 py-4 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d322f]/50">
                Shift Cycles
              </span>
              <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#2d322f]">
                45M
              </span>
              <span className="text-[11px] text-[#2d322f]/40 uppercase tracking-[0.16em]">
                Actuations logged
              </span>
            </div>
            <div className="border border-[#2d322f]/10 bg-[#f4f6f3] px-5 py-4 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d322f]/50">
                Vertical Gain
              </span>
              <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#2d322f]">
                880K
              </span>
              <span className="text-[11px] text-[#2d322f]/40 uppercase tracking-[0.16em]">
                Meters climbed
              </span>
            </div>
            <div className="border border-[#2d322f]/10 bg-[#f4f6f3] px-5 py-4 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d322f]/50">
                Impact Load
              </span>
              <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#2d322f]">
                12G
              </span>
              <span className="text-[11px] text-[#2d322f]/40 uppercase tracking-[0.16em]">
                Max load sustained
              </span>
            </div>
            <div className="border border-[#2d322f]/10 bg-[#f4f6f3] px-5 py-4 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2d322f]/50">
                Failure Rate
              </span>
              <span className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#2d322f]">
                0.02%
              </span>
              <span className="text-[11px] text-[#2d322f]/40 uppercase tracking-[0.16em]">
                Field component failure
              </span>
            </div>
          </div>

          <div className="mt-8 border-t border-[#2d322f]/10 pt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d322f]">
                Incoming Data Stream
              </h3>
              <div className="flex gap-1">
                <span className="w-1 h-1 bg-[#2d322f] rounded-full animate-pulse" />
                <span className="w-1 h-1 bg-[#2d322f]/30 rounded-full" />
                <span className="w-1 h-1 bg-[#2d322f]/30 rounded-full" />
              </div>
            </div>
            <div className="font-mono text-[10px] text-[#2d322f]/70 space-y-2 h-24 overflow-hidden relative">
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              <div className="flex gap-3 opacity-100">
                <span className="text-[#3F556B]">14:02:21</span>
                <span>STRESS_TEST: CRANK_ARM_TORQUE_PEAK [1400Nm]</span>
              </div>
              <div className="flex gap-3 opacity-80">
                <span className="text-[#3F556B]">14:02:22</span>
                <span>ENV_WARN: SALINITY_LEVEL_CRITICAL [COASTAL_04]</span>
              </div>
              <div className="flex gap-3 opacity-60">
                <span className="text-[#3F556B]">14:02:24</span>
                <span>SHIFT_SEQ: RAPID_FIRE_DOWN [MS: 12ms]</span>
              </div>
              <div className="flex gap-3 opacity-40">
                <span className="text-[#3F556B]">14:02:28</span>
                <span>THERMAL: BRAKE_ROTOR_TEMP [450°C]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

