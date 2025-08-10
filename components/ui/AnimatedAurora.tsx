import React from 'react';

export default function AnimatedAurora() {
  return (
    <div className="aurora-container" aria-hidden>
      <div className="aurora a1" />
      <div className="aurora a2" />
      <div className="aurora a3" />
      <div className="noise" />
      <style jsx>{`
        .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .aurora {
          position: absolute;
          filter: blur(60px);
          opacity: 0.55;
          border-radius: 9999px;
          mix-blend-mode: screen;
          animation: float 14s ease-in-out infinite;
        }
        .a1 {
          width: 60vw;
          height: 60vw;
          background: radial-gradient(closest-side, rgba(99,102,241,0.55), transparent 70%);
          top: -10vh; left: -10vw;
          animation-delay: 0s;
        }
        .a2 {
          width: 50vw; height: 50vw;
          background: radial-gradient(closest-side, rgba(236,72,153,0.5), transparent 70%);
          bottom: -15vh; right: -10vw;
          animation-delay: 3s;
        }
        .a3 {
          width: 70vw; height: 70vw;
          background: radial-gradient(closest-side, rgba(16,185,129,0.45), transparent 70%);
          top: 30vh; left: 20vw;
          animation-delay: 6s;
        }
        .noise {
          position: absolute; inset: -10%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        @keyframes float {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(0,-2%,0) scale(1.05); }
        }
      `}</style>
    </div>
  );
}