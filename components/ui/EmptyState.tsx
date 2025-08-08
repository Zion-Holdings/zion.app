import React from 'react';
import Link from 'next/link';

export type EmptyStateProps = {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
};

export default function EmptyState({ title, description, actionHref, actionLabel }: EmptyStateProps) {
  return (
    <div className="text-center py-16 border border-dashed rounded-xl border-gray-300 dark:border-gray-700 bg-white/40 dark:bg-black/30">
      <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
        <span className="text-3xl">✨</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80 max-w-md mx-auto mb-6">{description}</p>
      {actionHref && actionLabel && (
        <Link href={actionHref}><a className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">{actionLabel}</a></Link>
      )}
    </div>
  );
}