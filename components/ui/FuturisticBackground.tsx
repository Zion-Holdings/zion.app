import React from "react";

export default function FuturisticBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="futuristic-bg absolute -inset-20" />

      {/* Moving grid overlay */}
      <div className="grid-overlay absolute inset-0 opacity-20" />

      {/* Glow orbs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/5 w-96 h-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-float [animation-delay:1.2s]" />
      <div className="absolute -top-16 right-1/3 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl animate-float [animation-delay:2.1s]" />
    </div>
  );
}