// src/components/ui/skeleton.tsx
import React from 'react';

interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ className }) => {
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg p-4 animate-pulse ${className || ''}`.trim()}>
      <div className="bg-gray-300 dark:bg-gray-600 h-48 w-full rounded-md"></div>
      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 dark:bg-gray-600 h-6 w-3/4 rounded-md"></div>
        <div className="bg-gray-300 dark:bg-gray-600 h-4 w-1/2 rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
