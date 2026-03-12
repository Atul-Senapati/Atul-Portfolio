import React from "react";

const Archive = () => {
  return (
    <section
      id="archive"
      className="py-32 px-6 md:px-20 bg-[#050505] relative z-20 border-b border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-6xl md:text-8xl heading-font text-white font-bold -mb-4 skew-on-scroll">
            ARCHIVE
          </h2>
          <p className="mono text-xs text-gray-500 mt-6">
            DATABASE ACCESS: LEVEL 4
          </p>
        </div>

        <div className="flex gap-4 mono text-[10px] text-gray-400 mt-8 md:mt-0">
          <span className="text-[#ff3300] cursor-pointer">[ALL]</span>
          <span className="hover:text-white cursor-pointer hover:underline">
            [16MM]
          </span>
          <span className="hover:text-white cursor-pointer hover:underline">
            [35MM]
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="archive-card group  ">
          <div className="archive-thumb-wrap">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14ce38c5-165b-458e-98d6-3b5cbb6b91dc_1600w.webp"
              className="archive-thumb object-cover w-full h-auto grayscale-100 group-hover:grayscale-0 transition-all ease-in-out delay-100 group-hover: "
              alt="Neon"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">
              NEON DRIFTER
            </h3>
            <span className="archive-tag mono text-[10px] border-[1px] border-white/20 rounded-xs px-[6px] py-[2px]  text-white/70">
              16MM / 5219
            </span>
          </div>
        </div>

        <div className="archive-card group">
          <div className="archive-thumb-wrap">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dcf1acc-de58-41a8-a3cd-2bb642c6e66e_1600w.webp"
              className="archive-thumb object-cover w-full h-auto grayscale-100"
              alt="Void"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">
              VOID RUNNER
            </h3>
            <span className="archive-tag mono text-[10px] border-[1px] border-white/20 rounded-xs px-[6px] py-[2px]  text-white/70">
              35MM / B&amp;W
            </span>
          </div>
        </div>

        <div className="archive-card group bg-[#0a0a0a]">
          <div className="archive-thumb-wrap">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6398c31-e7f2-45ea-9396-0967a4ff0c97_1600w.jpg"
              className="archive-thumb object-cover w-full h-auto grayscale-100"
              alt="Horizon"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">
              HORIZON LOST
            </h3>
            <span className="archive-tag mono text-[10px] border-[0.9px] border-white/10 rounded-xs px-[6px] py-[2px]  text-white/70">
              65MM / IMAX
            </span>
          </div>
        </div>

        <div className="archive-card group">
          <div className="archive-thumb-wrap">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f447586-99ce-4695-80ef-7e6a5ba06c4d_1600w.webp"
              className="archive-thumb object-cover w-full h-auto grayscale-100"
              alt="Static"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">
              STATIC NOISE
            </h3>
            <span className="archive-tag mono">S16 / BLEACH</span>
          </div>
        </div>

        <div className="archive-card group">
          <div className="archive-thumb-wrap">
            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&amp;w=800"
              className="archive-thumb"
              alt="Tokyo"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">
              TOKYO DRIFT
            </h3>
            <span className="archive-tag mono">35MM / 5219</span>
          </div>
        </div>

        <div className="archive-card group">
          <div className="archive-thumb-wrap">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a09bc92-f4bc-4e56-a19f-81c007a9fb04_1600w.webp"
              className="archive-thumb object-cover w-full h-auto grayscale-100"
              alt="Desert"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl heading-font text-gray-200 group-hover:text-white mb-4">
              DESERT ECHO
            </h3>
            <span className="archive-tag mono">16MM / 50D</span>
          </div>
        </div>
      </div>
      <style>{`* ARCHIVE CARDS */ .archive-card { border: 1px solid rgba(255,255,255,0.05); background: #0a0a0a; transition: all 0.4s ease; position: relative; overflow: hidden; } .archive-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-5px); } .archive-thumb-wrap { overflow: hidden; position: relative; height: 280px; } .archive-thumb { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: transform 0.7s ease, filter 0.5s ease; } .archive-card:hover .archive-thumb { transform: scale(1.05); filter: grayscale(0%); } .archive-tag { font-size: 10px; border: 1px solid rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: #888; }`}</style>
    </section>
  );
};

export default Archive;
