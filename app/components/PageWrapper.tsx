import React, { ReactNode } from 'react';

/*
  PageWrapper — Unified page container.
  Replaces divergent page-level <main>/<div> wrappers so every page
  shares the same spacing and background contract.
*/
export default function PageWrapper({
  children,
  className = '',
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}) {
  const bg =
    variant === 'light'
      ? 'bg-slate-50 text-slate-900'
      : variant === 'dark'
        ? 'bg-slate-950 text-white'
        : 'bg-slate-950 text-white';

  return (
    <div className={`min-h-screen ${bg} ${className}`.trim()}>
      {children}
    </div>
  );
}
