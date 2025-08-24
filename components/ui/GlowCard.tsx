import React from 'react';

export default function GlowCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/20 group-hover:to-violet-500/20 blur-xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold mb-2 tracking-wide">{title}</h3>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}