import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-cyber animate-gradient-x opacity-60" style={{ backgroundImage: 'linear-gradient(120deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1), rgba(236,72,153,0.1), rgba(16,185,129,0.1))' }} />
      <div className="absolute -inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan-line" />
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-neon-blue blur-3xl opacity-20 animate-breathe" />
      <div className="absolute right-0 bottom-10 h-40 w-40 rounded-full bg-neon-purple blur-3xl opacity-20 animate-breathe" />
      <div className="absolute left-1/3 top-1/2 h-24 w-24 rounded-full bg-neon-pink blur-2xl opacity-30 animate-float" />
    </div>
  );
}