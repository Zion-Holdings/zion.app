import React from 'react';
import NotificationItem from './NotificationItem';
import { useNotifications, NotificationFilter } from '../../hooks/useNotifications';

const FILTERS: NotificationFilter[] = ['All', 'Unread', 'Onboarding', 'Messages', 'System Alerts'];

export default function NotificationCenter() {
  const {
    notifications,
    loading,
    error,
    activeFilter,
    setFilter,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismiss,
  } = useNotifications();

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Notifications</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Stay on top of reminders, nudges, and system alerts.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={markAllAsRead}
            className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Mark all as read
          </button>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = activeFilter === f;
          const base = 'inline-flex items-center rounded-full px-3 py-1.5 text-sm border';
          return (
            <button
              key={f}
              className={
                isActive
                  ? `${base} border-transparent text-white bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500`
                  : `${base} border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800`
              }
              onClick={() => setFilter(f)}
            >
              {f}
              {f === 'Unread' && unreadCount > 0 ? (
                <span className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/20 px-1 text-xs font-semibold">
                  {unreadCount}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {loading && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-300">
            Loading notifications...
          </div>
        )}
        {error && (
          <div className="rounded-xl border border-red-300/60 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30 p-3 text-sm text-red-700 dark:text-red-300">
            {error}
          </div>
        )}
        {!loading && notifications.length === 0 && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-center text-sm text-gray-600 dark:text-gray-300">
            You're all caught up. No notifications.
          </div>
        )}
        {notifications.map((n) => (
          <NotificationItem key={n.id} item={n} onMarkRead={markAsRead} onDismiss={dismiss} />
        ))}
      </div>
    </div>
  );
}