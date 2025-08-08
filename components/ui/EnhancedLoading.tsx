import React from 'react';

export default function EnhancedLoading({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: rows }).map((_, idx) => (
        <div key={idx} className="h-20 w-full rounded-lg bg-gray-200 dark:bg-gray-800" />
      ))}
    </div>
  );
}