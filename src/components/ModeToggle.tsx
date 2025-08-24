import React from 'react';

export function ModeToggle() {
  return (
    <button className="p-2 rounded-lg bg-zion-slate/10 hover:bg-zion-slate/20 transition-colors">
      <svg className="w-5 h-5 text-zion-slate-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );
}