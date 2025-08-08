import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'var(--cyber-gradient)',
        backgroundSize: '200% 200%',
        animation: 'holographic-shift 18s ease infinite'
      }} />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30">
        <div className="absolute -left-20 top-10 w-72 h-72 rounded-full" style={{
          background: 'var(--neon-gradient)', filter: 'blur(50px)', animation: 'cyber-float 12s ease-in-out infinite'
        }} />
        <div className="absolute right-0 top-40 w-96 h-96 rounded-full" style={{
          background: 'var(--sunset-gradient)', filter: 'blur(60px)', animation: 'cyber-float 16s ease-in-out infinite'
        }} />
        <div className="absolute left-1/2 bottom-0 w-80 h-80 rounded-full" style={{
          background: 'var(--holographic-gradient)', filter: 'blur(70px)', animation: 'cyber-float 20s ease-in-out infinite'
        }} />
      </div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
    </div>
  );
}