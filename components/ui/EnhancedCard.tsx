import React from 'react';

type EnhancedCardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function EnhancedCard({ title, children, footer }: EnhancedCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      {title ? (
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 font-medium text-sm">
          {title}
        </div>
      ) : null}
      <div className="px-4 py-4">
        {children}
      </div>
      {footer ? (
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500">
          {footer}
        </div>
      ) : null}
    </div>
  );
}