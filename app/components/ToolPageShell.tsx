'use client';

import { ReactNode } from 'react';

interface ToolPageShellProps {
  loading: boolean;
  error?: string | null;
  onRetry?: () => void;
  emptyState?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function ToolPageShell({
  loading,
  error,
  onRetry,
  emptyState,
  children,
  className = '',
}: ToolPageShellProps) {
  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {/* Skeleton rows matching a typical tool results table */}
        <div className="glass-card overflow-hidden">
          <div className="border-b border-slate-700/60">
            <div className="flex gap-4 p-4">
              <div className="h-4 w-16 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 w-24 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 w-32 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 w-20 bg-slate-800 rounded animate-pulse ml-auto" />
            </div>
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-b border-slate-800/50">
              <div className="flex gap-4 p-4">
                <div className="h-4 w-16 bg-slate-800/80 rounded animate-pulse" />
                <div className="h-4 w-24 bg-slate-800/80 rounded animate-pulse" />
                <div className="h-4 w-40 bg-slate-800/80 rounded animate-pulse" />
                <div className="h-6 w-20 bg-slate-800/80 rounded animate-pulse ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`glass-card border border-red-900/40 bg-red-950/20 p-6 ${className}`}>
        <div className="flex items-start gap-3">
          <div className="text-red-400 text-xl">⚠</div>
          <div className="flex-1">
            <p className="text-red-300 font-medium mb-1">Something went wrong</p>
            <p className="text-red-400/80 text-sm">{error}</p>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="btn-primary px-4 py-2 text-sm whitespace-nowrap"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    );
  }

  if (emptyState) {
    return <div className={className}>{emptyState}</div>;
  }

  return <div className={className}>{children}</div>;
}
