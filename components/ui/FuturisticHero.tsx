import React from 'react';

export default function FuturisticHero() {
  return (
    <section className="relative py-20 md:py-28 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 drop-shadow-[var(--glow-shadow)]">Zion Autonomous Cloud</span>
      </h1>
      <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-white/80">
        Futuristic governance, AI-native automations, and seamless public workflows.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="/dao/templates" className="px-5 py-3 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium shadow-[var(--neon-shadow)] transition">Draft a Proposal</a>
        <a href="/automation/cloud-agents" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition">Explore Automations</a>
      </div>
    </section>
  );
}