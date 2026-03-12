const metrics = [
  {
    label: "Brake Modulation Index",
    value: "28K",
    unit: "MM",
  },
  {
    label: "Drivetrain Efficiency Window",
    value: "-25",
    unit: "°C",
  },
  {
    label: "System Weight Savings",
    value: "320",
    unit: "G",
  },
  {
    label: "Recycled Composite Content",
    value: "85",
    unit: "%",
  },
];

export default function PerformanceMetricsSection() {
  return (
    <section className="bg-[#0f1310] border-y border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-18">
        <div className="flex items-baseline justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/35" />
            <span className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-white/60">
              Performance Envelope
            </span>
          </div>
          <span className="text-[0.7rem] tracking-[0.25em] uppercase text-white/30 hidden sm:inline-flex">
            Lab-derived metrics · Field validated
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5 text-center">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="py-12 lg:py-16 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-3 drop-shadow-lg flex items-baseline justify-center gap-1">
                {metric.value}
                <span className="text-base md:text-lg lg:text-xl text-[#3F556B] ml-1">
                  {metric.unit}
                </span>
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/55 font-semibold max-w-44">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

