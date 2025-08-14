import React, { PropsWithChildren } from 'react';

export default function FuturisticLayout({ children }: PropsWithChildren<object>) {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Aurora gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-aurora" />

      {/* Subtle animated hex grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hex-grid opacity-10" />

      {/* Diagonal light beams */}
      <div aria-hidden className="pointer-events-none absolute inset-0 beams-layer beams-45 mix-blend-screen" />

      {/* Star twinkle field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 twinkle-field opacity-20" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}


