import React from 'react';

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1022] via-[#0a0f1f] to-[#060b18]" />
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-cyan-500/20 blur-[100px] animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slower" />
      <div className="absolute inset-0 neon-grid opacity-20" />
      <div className="absolute inset-0 stars" />
    </div>
  );
}