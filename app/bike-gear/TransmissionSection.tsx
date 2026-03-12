import { Cog, Scale, Radar, ShieldCheck } from "lucide-react";

export default function TransmissionSection() {
  return (
    <section className="bg-[#1e2420] text-white py-32 border-t border-white/10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #3F556B 25%, transparent 25%, transparent 75%, #3F556B 75%, #3F556B), linear-gradient(45deg, #3F556B 25%, transparent 25%, transparent 75%, #3F556B 75%, #3F556B)",
          backgroundPosition: "0 0, 10px 10px",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#3F556B] font-semibold tracking-[0.2em] uppercase text-xs block mb-4">
              Engineering
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter uppercase">
              Precision <span className="text-[#3F556B]">Transmission</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm leading-relaxed">
            Zero-loss drivetrains machined from single blocks of hardened
            steel. Engineered for instant engagement under maximum torque
            load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-500">
            <div className="aspect-square relative overflow-hidden p-8 flex items-center justify-center bg-black/20">
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white/40">
                Ref: CS-1290
              </div>
              <img
                src="https://images.unsplash.com/photo-1576435728678-68d01740d818?w=800&q=80&auto=format&fit=crop"
                alt="Cassette"
                className="w-full h-full object-contain mix-blend-lighten opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display uppercase tracking-tight mb-2">
                Helix Cassette
              </h3>
              <div className="flex items-center gap-4 text-xs text-white/60 mb-6">
                <span className="flex items-center gap-1">
                  <Cog className="w-3 h-3 text-[#3F556B]" /> 10-52T
                </span>
                <span className="flex items-center gap-1">
                  <Scale className="w-3 h-3 text-[#3F556B]" /> 340g
                </span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed border-t border-white/10 pt-4">
                One-piece tool steel construction with PVD coating for
                extreme durability in abrasive grit conditions.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-500">
            <div className="aspect-square relative overflow-hidden p-8 flex items-center justify-center bg-black/20">
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white/40">
                Ref: RD-8000
              </div>
              <img
                src="https://images.unsplash.com/photo-1626446825768-3d447661149a?w=800&q=80&auto=format&fit=crop"
                alt="Rear Derailleur"
                className="w-full h-full object-contain mix-blend-lighten opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display uppercase tracking-tight mb-2">
                Vector Actuator
              </h3>
              <div className="flex items-center gap-4 text-xs text-white/60 mb-6">
                <span className="flex items-center gap-1">
                  <Radar className="w-3 h-3 text-[#3F556B]" /> Wireless
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#3F556B]" /> IPX7
                </span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed border-t border-white/10 pt-4">
                Overload clutch mechanism decouples on impact. Ceramic
                pulley bearings standard. 40-hour battery life.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/5 border border-white/10 hover:border-[#3F556B]/50 transition-colors duration-500">
            <div className="aspect-square relative overflow-hidden p-8 flex items-center justify-center bg-black/20">
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white/40">
                Ref: FC-9100
              </div>
              <img
                src="https://images.unsplash.com/photo-1534145397448-8a7a2a4b868e?w=800&q=80&auto=format&fit=crop"
                alt="Carbon Crankset"
                className="w-full h-full object-contain mix-blend-lighten opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display uppercase tracking-tight mb-2">
                Carbon Drive
              </h3>
              <div className="flex items-center gap-4 text-xs text-white/60 mb-6">
                <span className="flex items-center gap-1">
                  <Scale className="w-3 h-3 text-[#3F556B]" /> 420g
                </span>
                <span className="flex items-center gap-1">
                  <Cog className="w-3 h-3 text-[#3F556B]" /> Direct Mount
                </span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed border-t border-white/10 pt-4">
                Hollow carbon arms bonded to a 30mm aluminum spindle. Power
                meter integrated into the spider web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

