import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-[#2d322f]/10 bg-[#ebedea]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex-1 flex justify-start items-center">
          <a
            href="#"
            className="font-display text-3xl font-semibold tracking-tighter uppercase flex items-center gap-2 text-[#2d322f]"
          >
            AEX
          </a>
        </div>

        <nav className="hidden md:flex justify-center gap-10 flex-1">
          {["Outerwear", "Equipment", "Base Layers", "Innovations"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="relative group text-xs font-semibold text-[#2d322f]/70 hover:text-[#3F556B] transition-colors duration-300 uppercase tracking-[0.15em] py-2 whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3F556B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            )
          )}
        </nav>

        <div className="flex-1 flex justify-end items-center gap-6">
          <button
            aria-label="Search"
            className="text-[#2d322f] hover:text-[#3F556B] transition-colors duration-300"
          >
            <Search className="h-5 w-5" />
          </button>
          <button className="bg-[#2d322f] text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300 flex items-center gap-2">
            Pack
            <span className="text-white/50 flex items-center gap-1">
              <ShoppingBag className="h-4 w-4" />
              [0]
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

