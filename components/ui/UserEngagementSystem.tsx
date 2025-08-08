import React from 'react';

export type EmptyStateProps = {
  emoji?: string;
  title: string;
  message: string;
  action?: React.ReactNode;
};

export default function EmptyState({ emoji = '✨', title, message, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h2 className="mt-4 text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}