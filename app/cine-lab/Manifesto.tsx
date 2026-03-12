import React from "react";

const ManifestoWord = ({ children }: { children: React.ReactNode }) => (
  <span
    className="
      inline-block
      transition-all
      duration-300
      ease-out
      hover:text-[#ff3300]
      hover:-translate-y-1 cursor-default
    "
  >
    {children}
  </span>
);

const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="py-24 px-6 bg-black relative flex items-center justify-center z-20"
    >
      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <p className="mono text-[#ff3300] text-sm mb-8 tracking-widest">
          [ THE ETHOS ]
        </p>

        <h2 className="text-5xl md:text-8xl heading-font leading-tight text-[#1a1a1a]">
          <ManifestoWord>WE</ManifestoWord> <ManifestoWord>DO</ManifestoWord>{" "}
          <ManifestoWord>NOT</ManifestoWord> <ManifestoWord>FIX</ManifestoWord>{" "}
          <ManifestoWord>IT</ManifestoWord> <ManifestoWord>IN</ManifestoWord>{" "}
          <ManifestoWord>POST.</ManifestoWord>
          <br />
          <ManifestoWord>WE</ManifestoWord>{" "}
          <ManifestoWord>CAPTURE</ManifestoWord>{" "}
          <ManifestoWord>IT</ManifestoWord> <ManifestoWord>IN</ManifestoWord>{" "}
          <ManifestoWord>CAMERA.</ManifestoWord>
        </h2>

        <div className="mt-16 border-t border-white/10 pt-8 flex justify-center gap-12 mono text-xs text-gray-600">
          <span>FILM IS FINITE</span>
          <span>GRAIN IS TEXTURE</span>
          <span>LIGHT IS DATA</span>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
