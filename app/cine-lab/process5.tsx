import React from "react";

const Process = () => {
  return (
    <section
      id="process"
      className="relative min-h-screen py-32 overflow-hidden border-b border-white/5 bg-[#050505]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="process-bg-layer active bg-[#050505]"></div>
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3bf2a64-4eb0-40b9-9f2d-2ad4303037aa_3840w.webp"
          className="process-bg-layer object-cover w-full h-auto"
          id="bg-step-1"
          alt="Chemicals"
        />
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9ec54d2-3cc5-4bae-ac6d-4b4eef75799f_3840w.webp"
          className="process-bg-layer object-cover w-full h-auto"
          id="bg-step-2"
          alt="Laser"
        />
        <img
          src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2000"
          className="process-bg-layer"
          id="bg-step-3"
          alt="Color"
        />
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3bf2a64-4eb0-40b9-9f2d-2ad4303037aa_3840w.webp"
          className="process-bg-layer object-cover w-full h-auto"
          id="bg-step-4"
          alt="Server"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 h-full">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#ff3300]"></div>
              <span className="mono text-xs text-[#ff3300] uppercase tracking-widest">
                Workflow
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl heading-font mb-6 leading-none text-white">
              THE
              <br /> LABORATORY
            </h2>
            <p className="mono text-sm text-gray-400 max-w-xs leading-relaxed">
              Precision engineering meets artistic intent. Explore our
              end-to-end analog pipeline.
            </p>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col">
          {[
            {
              title: "IMMERSION",
              number: "01",
              tag: "Chemical Development",
              text: "Your negative enters our Photomec ECN-2 processor. We utilize Kodak-certified chemistry, monitored in real-time.",
              bg: "bg-step-1",
            },
            {
              title: "DIGITIZATION",
              number: "02",
              tag: "Scanning",
              text: "6.5K HDR Arriscan XT.",
              bg: "bg-step-2",
            },
            {
              title: "MANIPULATION",
              number: "03",
              tag: "Color Grading",
              text: "DCI-P3 Color Science.",
              bg: "bg-step-3",
            },
            {
              title: "PRESERVATION",
              number: "04",
              tag: "Archival",
              text: "LTO-8 Cold Storage.",
              bg: "bg-step-4",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="process-step py-8 cursor-pointer group"
              data-bg={step.bg}
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-4xl md:text-5xl heading-font text-gray-400 group-hover:text-white transition-colors scramble-text">
                  {step.title}
                </h3>
                <span className="step-number mono text-xl text-gray-600 transition-colors">
                  {step.number}
                </span>
              </div>
              <p className="mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-[#ff3300] transition-colors">
                {step.tag}
              </p>
              <div className="step-details">
                <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        /* PROCESS SECTION STYLES */
        .process-bg-layer {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease;
          object-fit: cover;
          width: 100%;
          height: 100%;
          z-index: 0;
          filter: grayscale(100%) brightness(0.4) contrast(1.2);
          mix-blend-mode: luminosity;
        }
        .process-bg-layer.active { opacity: 1; }

        .process-step {
          border-top: 1px solid rgba(255,255,255,0.1);
          transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .process-step:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .process-step:hover {
          background: rgba(255,255,255,0.03);
          padding-left: 20px;
        }
        .process-step:hover .step-number {
          color: #ff3300;
        }

        .step-details {
          height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.25,1,0.5,1);
        }
        .process-step:hover .step-details {
          height: auto;
          opacity: 1;
          padding-bottom: 2rem;
        }

        .tech-spec-box {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </section>
  );
};

export default Process;
