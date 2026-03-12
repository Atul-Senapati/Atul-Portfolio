import Archive from "./Archive";
import Hero from "./hero5";
import Manifesto from "./Manifesto";
import Process from "./process5";
import Stream from "./Stream";

export default function Home() {
  return (
    <main className="font-mono bg-black">
      {/* <Navbar /> */}
      <nav className="fixed top-0 left-0 w-full px-6 py-5 flex justify-between items-start z-50 mix-blend-difference text-white">
        <div className="flex flex-col">
          <div className="heading-font text-2xl font-bold tracking-tighter leading-none">
            CINE—LAB
          </div>
          <div className="mono text-[10px] text-gray-400 mt-1 tracking-widest">
            EST. 2022
          </div>
        </div>

        <div className="hidden md:flex gap-12 mono text-xs uppercase tracking-widest items-center">
          <div className="flex items-center gap-2 text-[#ff3300]">
            <div className="w-2 h-2 rounded-full bg-[#ff3300] animate-pulse"></div>
            <span className="">Lab Online</span>
          </div>
          <a
            href="#process"
            className="hover:text-[#ff3300] transition-colors delay-200"
          >
            Process
          </a>
          <a
            href="#stream"
            className="hover:text-[#ff3300] transition-colors delay-200"
          >
            Stream
          </a>
          <a
            href="#archive"
            className="hover:text-[#ff3300] transition-colors delay-200"
          >
            Archive
          </a>
          <a
            href="#manifesto"
            className="hover:text-[#ff3300] transition-colors delay-200"
          >
            Ethos
          </a>
          <a href="#contact" className="btn-lab px-5 py-2 rounded-full text-xs">
            Start Project <span className="btn-text"></span>
          </a>
        </div>
        <div className="md:hidden text-xs uppercase mono border border-white/20 px-3 py-1 rounded">
          Menu
        </div>
      </nav>
      <Hero />
      <Process />
      <Stream />
      <Archive />
      <Manifesto />
      <footer
        id="contact"
        className="bg-[#050505] flex flex-col justify-between p-6 md:p-12 relative overflow-hidden z-20 border-t border-white/5"
      >
        <div className="footer-bg-text font-bold text-[184px] text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2  text-nowrap tracking-tighter">
          START NOW
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start z-10 relative">
          <div>
            <h2 className="text-4xl heading-font uppercase mb-4 text-white">
              Ready to Develop?
            </h2>
            <p className="mono text-sm text-gray-500 max-w-sm">
              Send us your reels. We handle logistics worldwide.
            </p>
          </div>
          <div className="text-right mt-8 md:mt-0">
            <p className="mono text-xs text-[#ff3300] uppercase mb-2">
              Location
            </p>
            <p className="text-xl font-light text-white">
              85 N 3rd St, Brooklyn
              <br />
              New York, 11249
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow z-10 relative mt-24 mb-24">
          <a
            href="mailto:lab@cine-lab.com"
            className="group relative inline-block"
          >
            <span className="heading-font text-[12vw] md:text-[84px] leading-none text-white group-hover:text-[#ff3300] transition-colors duration-300">
              GET A QUOTE
            </span>
            <div className="w-full h-[4px] bg-[#ff3300] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>

        <div className="flex justify-between items-end border-t border-white/10 pt-6 z-10 relative">
          <p className="mono text-xs text-gray-500">© 2025 CINE-LAB.</p>
          <div className="flex gap-6 font-mono text-xs uppercase text-gray-400">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Vimeo
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
