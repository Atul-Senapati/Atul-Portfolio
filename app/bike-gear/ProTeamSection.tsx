export default function ProTeamSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-b border-[#2d322f]/10">
      <div className="mb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-[#3F556B]/70" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d322f]/60">
            FIELD TESTED // RIDERS
          </span>
          <span className="h-px w-10 bg-[#3F556B]/70" />
        </div>

        <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter uppercase text-[#2d322f] leading-[0.95]">
          Proven By Riders
          <br />
          Who Brake <span className="text-[#3F556B]">later</span>
          <br />
        </h2>

        <p className="mt-8 font-sans text-lg md:text-xl text-[#2d322f]/60 max-w-[40ch] mx-auto leading-relaxed">
          Elite test riders validating AEX systems from crit circuits to
          backcountry ridgelines.
        </p>

        <div className="mt-10 flex justify-center">
          <span className="h-px w-20 bg-[#3F556B]/40" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 h-auto md:h-[600px]">
        <div className="group cursor-pointer flex flex-col h-full">
          <div className="aspect-[3/4] md:h-[65%] w-full overflow-hidden bg-[#2d322f] mb-6">
            <img
              src="/img18.png"
              alt="Operative Elias Vance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-1">
              Elias Vance
            </h3>
            <p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-3">
              ENDURO / BIKE PARK / CONTROL
            </p>
            <p className="font-accent italic text-[#2d322f]/70 text-lg mb-4">
              &quot;Brake once, commit, let the chassis do the rest.&quot;
            </p>
          </div>
        </div>

        <div className="group cursor-pointer flex flex-col h-full">
          <div className="mb-6 order-1">
            <h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-1">
              Sarah Thorne
            </h3>
            <p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-3">
              ALL ROAD / LONG RANGE / DISCIPLINE
            </p>
            <p className="font-accent italic text-[#2d322f]/70 text-lg mb-4">
              &quot;If the fit is right, the kilometers disappear.&quot;
            </p>
          </div>
          <div className="aspect-[3/4] md:h-[65%] w-full overflow-hidden bg-[#2d322f] order-2">
            <img
              src="/img19.png"
              alt="Operative Sarah Thorne"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="group cursor-pointer flex flex-col h-full">
          <div className="aspect-[3/4] md:h-[65%] w-full overflow-hidden bg-[#2d322f] mb-6">
            <img
              src="img20.png"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-1">
              Marcus Lin
            </h3>
            <p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-3">
              GRAVEL / BIKEPACKING / LIGHTWEIGHT
            </p>
            <p className="font-accent italic text-[#2d322f]/70 text-lg mb-4">
              &quot;Every gram removed is another climb you don&apos;t feel.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center w-full">
        <a
          href="#"
          className="bg-transparent border border-[#2d322f] px-10 py-4 text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] hover:text-white transition-all duration-300"
        >
          View All Operatives
        </a>
      </div>
    </section>
  );
}

