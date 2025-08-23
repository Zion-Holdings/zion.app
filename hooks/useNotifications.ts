import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../utils/supabase/client';

export type NotificationStatus = 'New' | 'Viewed';
export type NotificationCategory = 'Onboarding' | 'Messages' | 'System Alerts';

export type ZionNotification = {
  id: string;
  title: string;
  message: string;
  created_at: string; // ISO
  status: NotificationStatus;
  category: NotificationCategory; // maps to filter groups
  cta_label?: string;
  cta_href?: string;
};

export type NotificationFilter = 'All' | 'Unread' | NotificationCategory;

const LOCAL_STORAGE_KEY = 'zion.notifications';

function isSupabaseConfigured(): boolean {
  // Fallback detection based on placeholder values
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || '';
  const anon = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) || '';
  if (!url || !anon) return false;
  if (url.includes('placeholder.supabase.co') || anon.includes('placeholder')) return false;
  return true;
}

function loadLocalNotifications(): ZionNotification[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  // Seed sample data
  const now = new Date();
  const iso = (minsAgo: number) => new Date(now.getTime() - minsAgo * 60000).toISOString();
  const seeded: ZionNotification[] = [
    {
      id: 'seed-1',
      title: 'Set your availability to get matched',
      message: 'Add now',
      created_at: iso(10),
      status: 'New',
      category: 'Onboarding',
      cta_label: 'Finish Profile',
      cta_href: '/talent/profile',
    },
    {
      id: 'seed-2',
      title: 'Invite talent to your open job',
      message: 'Find candidates fast',
      created_at: iso(120),
      status: 'Viewed',
      category: 'System Alerts',
      cta_label: 'Open Job',
      cta_href: '/talent/jobs',
    },
    {
      id: 'seed-3',
      title: 'We sent a reminder email',
      message: 'You can follow-up in messages',
      created_at: iso(60 * 24),
      status: 'Viewed',
      category: 'Messages',
      cta_label: 'Open Messages',
      cta_href: '/chat-content',
    },
  ];
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seeded));
  } catch {}
  return seeded;
}

function saveLocalNotifications(notifications: ZionNotification[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notifications));
  } catch {}
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<ZionNotification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<NotificationFilter>('All');

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (isSupabaseConfigured()) {
        const { data, error: sbError } = await supabase
          .from('notifications')
          .select('*')
          .order('created_at', { ascending: false });
        if (sbError) throw sbError;
        const mapped = (data || []).map((row: any) => ({
          id: String(row.id),
          title: row.title,
          message: row.message,
          created_at: row.created_at,
          status: (row.status as NotificationStatus) || 'New',
          category: (row.category as NotificationCategory) || 'System Alerts',
          cta_label: row.cta_label || undefined,
          cta_href: row.cta_href || undefined,
        })) as ZionNotification[];
        setNotifications(mapped);
      } else {
        const local = loadLocalNotifications();
        setNotifications(local);
      }
    } catch (e: any) {
      setError(e?.message || 'Failed to load notifications');
      const local = loadLocalNotifications();
      setNotifications(local);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return notifications;
    if (activeFilter === 'Unread') return notifications.filter((n) => n.status === 'New');
    return notifications.filter((n) => n.category === activeFilter);
  }, [notifications, activeFilter]);

  const unreadCount = useMemo(() => notifications.filter((n) => n.status === 'New').length, [notifications]);

  const markAsRead = useCallback(async (id: string) => {
    try {
      if (isSupabaseConfigured()) {
        await supabase.from('notifications').update({ status: 'Viewed' }).eq('id', id);
      }
      setNotifications((prev) => {
        const next = prev.map((n) => (n.id === id ? { ...n, status: 'Viewed' } : n));
        saveLocalNotifications(next);
        return next;
      });
    } catch {}
  }, []);

  const markAllAsRead = useCallback(async () => {
    try {
      if (isSupabaseConfigured()) {
        await supabase.from('notifications').update({ status: 'Viewed' }).neq('status', 'Viewed');
      }
      setNotifications((prev) => {
        const next = prev.map((n) => ({ ...n, status: 'Viewed' }));
        saveLocalNotifications(next);
        return next;
      });
    } catch {}
  }, []);

  const dismiss = useCallback(async (id: string) => {
    try {
      if (isSupabaseConfigured()) {
        await supabase.from('notifications').delete().eq('id', id);
      }
      setNotifications((prev) => {
        const next = prev.filter((n) => n.id !== id);
        saveLocalNotifications(next);
        return next;
      });
    } catch {}
  }, []);

  const setFilter = useCallback((filter: NotificationFilter) => setActiveFilter(filter), []);

  return {
    notifications: filtered,
    allNotifications: notifications,
    loading,
    error,
    unreadCount,
    activeFilter,
    setFilter,
    refresh,
    markAsRead,
    markAllAsRead,
    dismiss,
  };
}