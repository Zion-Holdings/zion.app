import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-cyan-400/30 via-fuchsia-400/20 to-emerald-400/30 blur-3xl animate-slow-float" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/25 to-indigo-500/20 blur-3xl animate-slower-float" />
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-transparent via-cyan-500/10 to-transparent blur-2xl animate-spin-slow" />
      </div>
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-20px) translateX(10px) scale(1.02); }
        }
        .animate-slow-float { animation: float 12s ease-in-out infinite; }
        .animate-slower-float { animation: float 18s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 30s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg) translate(-50%, -50%); } 100% { transform: rotate(360deg) translate(-50%, -50%); } }
      `}</style>
    </div>
  );
}