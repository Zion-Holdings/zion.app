import React from 'react';

export type KpiBadgeProps = {
  label: string;
  value: string | number;
  hint?: string;
  tone?: 'default' | 'success' | 'warning' | 'danger' | 'info';
};

const toneToClasses: Record<NonNullable<KpiBadgeProps['tone']>, string> = {
  default: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
  success: 'bg-green-100 text-green-900 dark:bg-green-900/40 dark:text-green-200',
  warning: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900/40 dark:text-yellow-200',
  danger: 'bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-200',
  info: 'bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200',
};

export function KpiBadge({ label, value, hint, tone = 'default' }: KpiBadgeProps) {
  return (
    <div className={`rounded-xl p-4 border border-black/5 dark:border-white/10 ${toneToClasses[tone]}`}>
      <div className="text-xs uppercase tracking-wide opacity-70">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {hint && <div className="text-xs opacity-70 mt-1">{hint}</div>}
    </div>
  );
}

export default KpiBadge;