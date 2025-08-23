import React from 'react';

export type ProgressTrackerProps = {
  completedCount: number;
  totalCount: number;
};

export default function ProgressTracker({ completedCount, totalCount }: ProgressTrackerProps) {
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="font-medium">Progress</span>
        <span className="text-gray-500">{completedCount}/{totalCount} ({progress}%)</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded">
        <div
          className="h-2 bg-blue-600 dark:bg-blue-500 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}