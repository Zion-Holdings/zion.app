'use client';

import React from 'react';

export default function ServiceGridSkeleton() {
  return (
    <section id="find-services" className="py-12 md:py-16 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <div className="h-8 w-64 mx-auto rounded-full bg-slate-800/70 animate-pulse" />
          <div className="h-4 w-96 mx-auto rounded-full bg-slate-800/70 animate-pulse mt-3" />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-9 w-24 rounded-full bg-slate-800/70 animate-pulse" />
          ))}
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mb-6">
          <div className="h-12 w-full rounded-xl bg-slate-800/70 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="h-4 w-24 rounded-full bg-slate-800/70 animate-pulse mb-4" />
              <div className="h-5 w-56 rounded-full bg-slate-800/70 animate-pulse mb-3" />
              <div className="h-3 w-full rounded-full bg-slate-800/70 animate-pulse mb-2" />
              <div className="h-3 w-5/6 rounded-full bg-slate-800/70 animate-pulse mb-2" />
              <div className="h-3 w-4/6 rounded-full bg-slate-800/70 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
