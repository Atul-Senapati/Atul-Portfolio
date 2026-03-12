const sectors = [
  {
    id: "Sector 01",
    title: "Road",
    image: "/img9.jpeg",
    description:
      "Aero-tuned drivetrains and braking systems for controlled speed on fast descents and technical switchbacks.",
  },
  {
    id: "Sector 02",
    title: "Gravel",
    image: "/img7.jpeg",
    description:
      "Mixed-surface wheelsets and flared cockpits optimized for washboard, loose over hardpack, and unmarked lines.",
  },
  {
    id: "Sector 03",
    title: "Trail",
    image: "/img8.jpeg",
    description:
      "Progressive suspension setups and contact points tuned for traction, feedback, and repeatable lines on rough descents.",
  },
  {
    id: "Sector 04",
    title: "Urban",
    image: "/img4.png",
    description:
      "Low-maintenance drivetrains, integrated lighting, and cargo systems for fast, predictable movement through the city grid.",
  },
];

export default function SectorGridSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[70vh]">
        {sectors.map((sector) => (
          <article
            key={sector.id}
            className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#111511] transition-transform duration-500 ease-out will-change-transform lg:hover:-translate-y-1"
          >
            <img
              src={sector.image}
              alt={sector.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050705]/85 via-[#050705]/30 to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 z-20 pointer-events-none flex items-center gap-3">
              <span className="h-px w-6 bg-white/40 group-hover:w-10 transition-all duration-500 ease-out" />
              <span className="font-display text-[0.6rem] tracking-[0.35em] uppercase text-white/70">
                {sector.id}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 pb-7 z-20 pointer-events-none flex flex-col gap-2">
              <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white uppercase tracking-tight drop-shadow-lg">
                {sector.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.28em] uppercase text-white/60">
                <span className="h-px w-6 bg-white/40" />
                Ride Program
              </span>
            </div>

            <div className="absolute inset-y-0 right-0 w-[65%] md:w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end p-8 border-l border-white/10">
              <div className="w-0 group-hover:w-full h-px bg-white/40 mb-6 transition-all duration-700 delay-300 ease-out" />
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium">
                {sector.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

