import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function PageWrapper({ children, className = '', noPadding = false }: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-slate-950 text-white ${noPadding ? '' : 'py-12 sm:py-16 lg:py-20'} ${className}`}>
      {children}
    </div>
  );
}
