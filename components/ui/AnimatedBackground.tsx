import React from 'react';

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -inset-40 bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-20 blur-3xl animate-gradient-x" />
      <div className="absolute -inset-32 bg-gradient-to-br from-emerald-500 via-blue-500 to-indigo-500 opacity-10 blur-2xl animate-fade-in" />
    </div>
  );
}