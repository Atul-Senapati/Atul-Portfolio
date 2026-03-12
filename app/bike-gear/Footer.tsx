import { Radar, Camera, Mail, PlayCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2420] text-white pt-24 pb-12 border-t-4 border-[#3F556B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-white mb-4 flex items-center gap-3">
              <Radar className="h-6 w-6 text-[#3F556B]" />
              Join Command
            </h3>
            <p className="text-sm text-white/60 mb-6 max-w-sm leading-relaxed">
              Secure frequency for field reports, prototype access, and
              technical system updates.
            </p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="ENTER COMM LINK"
                className="w-full bg-[#2d322f] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#3F556B] transition-colors uppercase tracking-[0.15em]"
              />
              <button
                type="submit"
                className="bg-[#3F556B] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-colors shrink-0 border border-[#3F556B] hover:border-white"
              >
                Transmit
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
              Systems
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Outerwear Matrices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Thermal Layers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Tactical Packs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  All-Terrain Treads
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
              Logistics
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Maintenance Bay
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Warranty Protocol
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Extraction / Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Comm Channel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
              Identity
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Mission Statement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Eco-Directive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Operative Roster
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Recruitment
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="font-display text-3xl font-semibold tracking-tighter text-white uppercase">
              AEX
            </span>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
              © 2024 Alpine Engineered Extremes.
            </p>
          </div>
          <div className="flex gap-6 text-white/40">
            <button className="hover:text-white transition-colors">
              <Camera className="h-5 w-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </button>
            <button className="hover:text-white transition-colors">
              <PlayCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

