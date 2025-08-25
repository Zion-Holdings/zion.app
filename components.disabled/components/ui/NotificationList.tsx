import React, { useEffect, useMemo, useState } from 'react';
import { Bell, Filter, CheckCheck, Trash2 } from 'lucide-react';
import {
  NotificationItem,
  NotificationFilter,
  fetchNotifications,
  mapFilterToQuery,
  markAllAsRead,
  markNotificationRead,
  clearAllNotifications,
} from '../../utils/notifications';

const tabs: { key: NotificationFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'unread', label: 'Unread' },
  { key: 'system', label: 'System' },
  { key: 'onboarding', label: 'Onboarding' },
  { key: 'quotes', label: 'Quotes' },
  { key: 'matches', label: 'Matches' },
];

export default function NotificationList() {
  const [active, setActive] = useState<NotificationFilter>('all');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<NotificationItem[]>([]);

  async function load() {
    setLoading(true);
    try {
      await fetchNotifications({ filter: active }).then(setItems);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  async function handleMarkAll() {
    await markAllAsRead();
    await load();
  }

  async function handleClearAll() {
    await clearAllNotifications();
    await load();
  }

  async function handleMarkOne(id: string) {
    await markNotificationRead(id);
    await load();
  }

  const emptyMessage = useMemo(() => {
    switch (active) {
      case 'unread':
        return 'No unread notifications';
      case 'system':
        return 'No system alerts';
      case 'onboarding':
        return 'No onboarding reminders';
      case 'quotes':
        return 'No quote updates';
      case 'matches':
        return 'No new matches';
      default:
        return 'No notifications';
    }
  }, [active]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-2">
        <div className="flex items-center justify-between gap-2 px-2 py-1">
          <div className="flex items-center gap-1 overflow-auto">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`text-sm px-3 py-1.5 rounded-full border transition whitespace-nowrap ${
                  active === t.key
                    ? 'border-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white shadow'
                    : 'border-gray-200 dark:border-gray-800 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleMarkAll} className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 inline-flex items-center gap-1">
              <CheckCheck className="h-3.5 w-3.5" /> Mark all as read
            </button>
            <button onClick={handleClearAll} className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 inline-flex items-center gap-1">
              <Trash2 className="h-3.5 w-3.5" /> Clear all
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {loading && (
          <div className="rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">Loading...</div>
        )}
        {!loading && items.length === 0 && (
          <div className="rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 text-sm opacity-70">{emptyMessage}</div>
        )}
        {!loading && items.map((n) => (
          <div key={n.id} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-4 flex items-start gap-3">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow bg-gradient-to-br ${
              n.type === 'system' ? 'from-blue-500 to-cyan-400' :
              n.type === 'onboarding' ? 'from-violet-500 to-indigo-400' :
              n.type === 'quote' ? 'from-emerald-500 to-teal-400' :
              n.type === 'match' ? 'from-pink-500 to-rose-400' :
              'from-slate-500 to-gray-400'
            }`}>
              <Bell className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="font-medium truncate">{n.title}</div>
                <div className="text-xs opacity-60 whitespace-nowrap">{new Date(n.created_at).toLocaleString()}</div>
              </div>
              {n.body && <div className="text-sm opacity-80 mt-1">{n.body}</div>}
              <div className="mt-3 flex items-center gap-2">
                {!n.read_status && (
                  <button onClick={() => handleMarkOne(n.id)} className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">Mark as read</button>
                )}
                {n.related_action && (
                  <a href={n.related_action} className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white shadow hover:opacity-95">Open</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}