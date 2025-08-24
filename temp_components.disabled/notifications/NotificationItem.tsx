import Link from 'next/link';
import { Bell, Info, Mail, Rocket, AlertTriangle, CheckCircle, X } from 'lucide-react';
import React from 'react';
import { ZionNotification } from '../../hooks/useNotifications';

function formatTimeAgo(iso: string): string {
  const date = new Date(iso);
  const diffMs = Date.now() - date.getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function CategoryIcon({ category }: { category: ZionNotification['category'] }) {
  const base = 'h-5 w-5';
  switch (category) {
    case 'Onboarding':
      return <Rocket className={`${base} text-purple-500`} />;
    case 'Messages':
      return <Mail className={`${base} text-cyan-500`} />;
    case 'System Alerts':
      return <AlertTriangle className={`${base} text-blue-500`} />;
    default:
      return <Bell className={`${base} text-gray-500`} />;
  }
}

export default function NotificationItem({
  item,
  onMarkRead,
  onDismiss,
}: {
  item: ZionNotification;
  onMarkRead: (id: string) => void;
  onDismiss: (id: string) => void;
}) {
  const isNew = item.status === 'New';
  return (
    <div className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <CategoryIcon category={item.category} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">{item.title}</h3>
            {isNew && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> New
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.message}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <span>{formatTimeAgo(item.created_at)}</span>
            <span>•</span>
            <span>{item.category}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {item.cta_label && item.cta_href && (
            <Link href={item.cta_href}>
              <a className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:opacity-90">
                {item.cta_label}
              </a>
            </Link>
          )}
          {isNew ? (
            <button
              onClick={() => onMarkRead(item.id)}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <CheckCircle className="h-4 w-4 text-emerald-500" /> Mark read
            </button>
          ) : null}
          <button
            onClick={() => onDismiss(item.id)}
            className="inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-1 text-xs hover:bg-gray-50 dark:hover:bg-gray-800"
            aria-label="Dismiss"
            title="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}