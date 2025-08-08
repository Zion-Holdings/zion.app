import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-layer gradient-orb orb-1" />
      <div className="bg-layer gradient-orb orb-2" />
      <div className="bg-layer gradient-orb orb-3" />
      <div className="noise-layer" />
      <div className="grid-overlay" />
    </div>
  );
}