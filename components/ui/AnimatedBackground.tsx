import React from 'react';

export type AnimatedBackgroundProps = {
  className?: string;
};

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ''}`} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(99,102,241,0.12),transparent)]" />
      <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-40 animate-float-slow" style={{ background: 'conic-gradient(from 90deg at 50% 50%, rgba(99,102,241,0.4), rgba(168,85,247,0.4), rgba(20,184,166,0.4), rgba(99,102,241,0.4))' }} />
      <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-40 animate-float-fast" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(20,184,166,0.35), rgba(99,102,241,0.35), rgba(168,85,247,0.35), rgba(20,184,166,0.35))' }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <style jsx>{`
        @keyframes floatSlow { 0%{ transform: translate3d(0,0,0) } 50%{ transform: translate3d(0,-16px,0) } 100%{ transform: translate3d(0,0,0) } }
        @keyframes floatFast { 0%{ transform: translate3d(0,0,0) } 50%{ transform: translate3d(0,12px,0) } 100%{ transform: translate3d(0,0,0) } }
        .animate-float-slow{ animation: floatSlow 12s ease-in-out infinite; }
        .animate-float-fast{ animation: floatFast 9s ease-in-out infinite; }
      `}</style>
    </div>
  );
}