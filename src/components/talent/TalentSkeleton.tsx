import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function TalentSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="p-6 space-y-4 border border-zion-blue-light bg-zion-blue-dark rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <Skeleton height={64} width={64} circle />
            <div className="flex-1 space-y-2">
              <Skeleton height={16} width="75%" />
              <Skeleton height={12} width="50%" />
            </div>
          </div>
          <Skeleton height={96} width="100%" />
        </div>
      ))}
    </div>
  );
}
