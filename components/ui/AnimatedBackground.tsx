<<<<<<< HEAD
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-layer gradient-orb orb-1" />
      <div className="bg-layer gradient-orb orb-2" />
      <div className="bg-layer gradient-orb orb-3" />
      <div className="noise-layer" />
      <div className="grid-overlay" />
=======
import React from 'react';

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -inset-40 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-20 blur-3xl animate-gradient-x" />
      <div className="absolute -inset-32 bg-gradient-to-br from-emerald-500 via-blue-500 to-indigo-500 opacity-10 blur-2xl animate-fade-in" />
>>>>>>> cursor/integrate-ai-resume-builder-into-job-applications-9820
    </div>
  );
}