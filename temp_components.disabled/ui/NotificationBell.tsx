import React, { useEffect, useState } from 'react';
import { Bell, CheckCheck, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { fetchNotifications, fetchUnreadCount, markAllAsRead, NotificationItem, markNotificationRead, clearAllNotifications } from '../../utils/notifications';

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);
    try {
      const [count, list] = await Promise.all([
        fetchUnreadCount(),
        fetchNotifications({ limit: 5 }),
      ]);
      setUnread(count);
      setItems(list);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 30_000);
    return () => clearInterval(id);
  }, []);

  async function handleMarkAll() {
    await markAllAsRead();
    await refresh();
  }

  async function handleClearAll() {
    await clearAllNotifications();
    await refresh();
  }

  async function handleMarkOne(id: string) {
    await markNotificationRead(id);
    await refresh();
  }

  return (
    <div className="relative">
      <button aria-label="Notifications" className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition" onClick={() => setOpen((v) => !v)}>
        <Bell className="h-5 w-5" />
        {unread > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white text-[10px] leading-[18px] text-center shadow">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-96 max-w-[90vw] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden z-50">
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 dark:border-gray-800">
            <div className="font-medium">Notifications</div>
            <div className="flex items-center gap-1">
              <button onClick={handleMarkAll} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                <CheckCheck className="h-3.5 w-3.5" /> Mark all
              </button>
              <button onClick={handleClearAll} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                <Trash2 className="h-3.5 w-3.5" /> Clear
              </button>
            </div>
          </div>

          <div className="max-h-[60vh] overflow-auto divide-y divide-gray-100 dark:divide-gray-800">
            {loading && <div className="p-4 text-sm opacity-70">Loading...</div>}
            {!loading && items.length === 0 && (
              <div className="p-4 text-sm opacity-70">No notifications</div>
            )}
            {items.map((n) => (
              <div key={n.id} className="p-3 flex gap-3 items-start">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow bg-gradient-to-br ${
                  n.type === 'system' ? 'from-blue-500 to-cyan-400' :
                  n.type === 'onboarding' ? 'from-violet-500 to-indigo-400' :
                  n.type === 'quote' ? 'from-emerald-500 to-teal-400' :
                  n.type === 'match' ? 'from-pink-500 to-rose-400' :
                  'from-slate-500 to-gray-400'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium truncate">{n.title}</div>
                    <div className="text-[10px] opacity-60 whitespace-nowrap">{new Date(n.created_at).toLocaleString()}</div>
                  </div>
                  {n.body && <div className="text-xs opacity-80 line-clamp-2 mt-0.5">{n.body}</div>}
                  <div className="mt-2 flex items-center gap-2">
                    {!n.read_status && (
                      <button onClick={() => handleMarkOne(n.id)} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">Mark as read</button>
                    )}
                    {n.related_action && (
                      <Link href={n.related_action}>
                        <a className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white shadow hover:opacity-95">Open</a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-100 dark:border-gray-800 text-center">
            <Link href="/notifications"><a className="text-xs font-medium hover:underline">View all</a></Link>
          </div>
        </div>
      )}
    </div>
  );
}