export default function FieldDeploymentSection() {
  return (
    <section className="bg-[#f4f6f3] text-[#2d322f] py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-px bg-[#3F556B]/40 mx-auto mb-10" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2d322f]/60 mb-6">
          Field Deployment
        </p>
        <h2 className="text-4xl md:text-5xl font-display leading-tight mb-8 uppercase tracking-tight">
          Built for movement beyond
          <br className="hidden md:block" />
          marked routes.
        </h2>
        <p className="text-lg text-[#2d322f]/70 leading-relaxed mb-12 max-w-[55ch] mx-auto">
          AEX Velo designs modular bike systems for riders who blur the
          lines between commute, training, and expedition. Every element
          exists to reduce drag, stabilize load, and preserve power.
        </p>
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#3F556B] mb-12">
          Drivetrain / Cockpit Systems / Protection / Load Architecture
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#inventory"
            className="bg-[#2d322f] text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300"
          >
            Enter the Armory
          </a>
          <a
            href="#inventory"
            className="text-xs font-semibold uppercase tracking-widest text-[#2d322f]/70 hover:text-[#3F556B] transition-colors"
          >
            View Inventory →
          </a>
        </div>
      </div>
    </section>
  );
}

