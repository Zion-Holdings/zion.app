import React from 'react';

export type MetricCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: 'blue' | 'green' | 'amber' | 'purple' | 'rose' | 'gray';
  rightAdornment?: React.ReactNode;
  onClick?: () => void;
};

const colorToClasses: Record<NonNullable<MetricCardProps['color']>, string> = {
  blue: 'border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/30',
  green: 'border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-950/30',
  amber: 'border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30',
  purple: 'border-purple-200 bg-purple-50 dark:border-purple-900/50 dark:bg-purple-950/30',
  rose: 'border-rose-200 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-950/30',
  gray: 'border-gray-200 bg-gray-50 dark:border-gray-900/50 dark:bg-gray-950/30',
};

export default function MetricCard({ title, value, subtitle, color = 'gray', rightAdornment, onClick }: MetricCardProps) {
  return (
    <div className={`rounded-xl border ${colorToClasses[color]} p-4 transition hover:shadow-sm`} onClick={onClick}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">{title}</div>
          <div className="mt-1 text-2xl font-semibold">{value}</div>
          {subtitle ? <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{subtitle}</div> : null}
        </div>
        {rightAdornment}
      </div>
    </div>
  );
}