import React from "react";

const Stream = () => {
  return (
    <section id="stream">
      <div className="absolute top-10 left-6 md:left-20 flex items-center gap-4 z-30 pointer-events-none">
        <div className="w-12 h-[1px] bg-[#ff3300]"></div>
        <span className="mono text-xs text-[#ff3300] uppercase tracking-widest">
          Data Stream
        </span>
      </div>

      <div className="stream-row row-left">
        <div className="stream-track">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04cf950b-7612-44ac-a767-6b8b9dc3e83b_800w.jpg"
            className="stream-img"
          />
          <span className="stream-text">RAW DATA</span>
          <span className="stream-code">XR-990</span>
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400"
            className="stream-img"
          />
          <span className="stream-text">NEGATIVE</span>
          <span className="stream-code">KODAK</span>

          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c59ec7be-cfcf-4651-b25c-6f5baded8d17_800w.jpg"
            className="stream-img"
          />
          <span className="stream-text">RAW DATA</span>
          <span className="stream-code">XR-990</span>
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400"
            className="stream-img"
          />
          <span className="stream-text">NEGATIVE</span>
          <span className="stream-code">KODAK</span>
        </div>
      </div>

      <div className="stream-row row-right">
        <div className="stream-track">
          <span className="stream-text">DEVELOPMENT</span>
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400"
            className="stream-img"
          />
          <span className="stream-code">ECN-2</span>
          <span className="stream-text">PROCESS</span>
          <img
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400"
            className="stream-img"
          />

          <span className="stream-text">DEVELOPMENT</span>
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400"
            className="stream-img"
          />
          <span className="stream-code">ECN-2</span>
          <span className="stream-text">PROCESS</span>
          <img
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=400"
            className="stream-img"
          />
        </div>
      </div>

      <div className="stream-row row-left">
        <div className="stream-track">
          <span className="stream-code">SCAN.LOG</span>
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/187a0108-cdee-4c0b-9d37-e438811c787e_800w.jpg"
            className="stream-img"
          />
          <span className="stream-text">OPTICAL</span>
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6191da6-cb07-4c17-b085-36202e1b172b_800w.jpg"
            className="stream-img"
          />
          <span className="stream-text">TRANSFER</span>

          <span className="stream-code">SCAN.LOG</span>
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400"
            className="stream-img"
          />
          <span className="stream-text">OPTICAL</span>
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c03ed2fe-b5ae-4807-b063-a69067689369_800w.jpg"
            className="stream-img"
          />
          <span className="stream-text">TRANSFER</span>
        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        #stream {
          position: relative;
          background-color: #050505;
          padding: 120px 0;
          overflow: hidden;
          z-index: 20;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .stream-row { display: flex; width: 100%; margin-bottom: 40px; position: relative; overflow: hidden; }
        .stream-track { display: flex; align-items: center; gap: 40px; white-space: nowrap; will-change: transform; animation-timing-function: linear; animation-iteration-count: infinite; }

        .row-left .stream-track { animation-name: slideLeft; animation-duration: 40s; }
        .row-right .stream-track { animation-name: slideRight; animation-duration: 45s; }

        @keyframes slideLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slideRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        .stream-img {
          width: 300px;
          height: 200px;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter .3s, transform .3s;
          cursor: crosshair;
          border: 1px solid #222;
          flex: none;
        }
        .stream-img:hover { filter: grayscale(0); transform: scale(1.05); border-color: #ff3300; z-index: 10; }

        .stream-text {
          font-family: 'Oswald', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          line-height: 1;
        }

        .stream-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem;
          color: #ff3300;
          background: rgba(255, 51, 0, 0.1);
          padding: 5px 10px;
          border: 1px solid #ff3300;
        }

        .stream-row:hover .stream-track { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Stream;
