import {
  ArrowRight,
  Heart,
  Snowflake,
  Droplets,
  Scale,
  Cog,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";

export default function InventorySection() {
  const items = [
    {
      id: "terra-grip-drive-shoe",
      badge: "Prototype Drop",
      imageSrc:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3734ddcc-c1d3-4dc2-929f-b785a4cb24b1_800w.webp",
      imageAlt: "Clip-compatible gravel shoe",
      name: "Terra-Grip Drive Shoe",
      price: "$180",
      specs: [
        { Icon: Snowflake, label: "All-Weather", hasBorderX: false },
        { Icon: Droplets, label: "Resistant", hasBorderX: true },
        { Icon: Scale, label: "245g", hasBorderX: false },
      ],
    },
    {
      id: "zero-point-shell-jacket",
      badge: "Tactical Series",
      imageSrc:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d1829ff-2aa2-4535-9e73-12ce151d3ad1_800w.webp",
      imageAlt: "Storm-ready riding jacket",
      name: "Zero-Point Shell Jacket",
      price: "$520",
      specs: [
        { Icon: Snowflake, label: "-25°C", hasBorderX: false },
        { Icon: Droplets, label: "28K MM", hasBorderX: true },
        { Icon: Scale, label: "380g", hasBorderX: false },
      ],
    },
    {
      id: "carbon-core-saddle",
      badge: "Most Deployed",
      imageSrc:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90248f41-e000-45bc-8d5c-36811411ca3f_800w.webp",
      imageAlt: "Carbon saddle with alloy rails",
      name: "Carbon Core Saddle",
      price: "$145",
      specs: [
        { Icon: Cog, label: "Modular", hasBorderX: false },
        { Icon: ShieldCheck, label: "UIAA Cert", hasBorderX: true },
        { Icon: Scale, label: "210g", hasBorderX: false },
      ],
    },
    {
      id: "apex-shell-helmet",
      badge: "Enduro Line",
      imageSrc: "/img11.jpeg",
      imageAlt: "Enduro Helmet",
      name: "Apex Shell Helmet",
      price: "$260",
      specs: [
        { Icon: ShieldCheck, label: "MIPS+", hasBorderX: false },
        { Icon: Snowflake, label: "Vented", hasBorderX: true },
        { Icon: Scale, label: "320g", hasBorderX: false },
      ],
    },
    {
      id: "field-repair-roll",
      badge: "Range Kit",
      imageSrc: "/img10.jpeg",
      imageAlt: "Repair Roll",
      name: "Field Repair Roll",
      price: "$95",
      specs: [
        { Icon: Cog, label: "Tools", hasBorderX: false },
        { Icon: Droplets, label: "Seals", hasBorderX: true },
        { Icon: Scale, label: "480g", hasBorderX: false },
      ],
    },
    {
      id: "cargo-frame-pack",
      badge: "Load System",
      imageSrc: "/img1.jpeg",
      imageAlt: "Cargo Pack",
      name: "Cargo Frame Pack",
      price: "$210",
      specs: [
        { Icon: Scale, label: "18L", hasBorderX: false },
        { Icon: Droplets, label: "DWR", hasBorderX: true },
        { Icon: Cog, label: "Modular", hasBorderX: false },
      ],
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-[#ebedea]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter uppercase text-[#2d322f] mb-4">
            Bike Gear <span className="text-[#3F556B]">Inventory</span>
          </h2>
          <p className="text-base text-[#2d322f]/70">
            Component-level systems for riders who tune every contact point,
            from drivetrain to cockpit to loadout.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#2d322f]/20 bg-[#ebedea] text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-colors shrink-0"
        >
          Access Armory
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)]"
          >
            <div className="relative aspect-[4/5] bg-white overflow-hidden flex items-center justify-center p-8">
              <span className="absolute top-4 left-4 bg-[#3F556B] text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 z-10 shadow-sm">
                {item.badge}
              </span>
              <button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
                  <span className="border-b-2 border-[#3F556B] pb-1 inline-block">
                    {item.name}
                  </span>
                </h3>
                <span className="font-display text-xl font-semibold text-[#2d322f] shrink-0">
                  {item.price}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
                {item.specs.map(({ Icon, label, hasBorderX }, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center ${
                      hasBorderX ? "border-x border-[#2d322f]/10" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 text-[#3F556B] mb-1" />
                    <span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-transparent border border-[#2d322f] py-3 text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-all flex items-center justify-center gap-2">
                Initialize
                <PlusCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

