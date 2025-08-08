// types
export type NotificationType = 'system' | 'onboarding' | 'quote' | 'match' | 'reminder' | 'info';

export type NotificationItem = {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  body?: string;
  created_at: string;
  read_status: boolean;
  related_action?: string;
};

export type NotificationFilter = 'all' | 'unread' | 'system' | 'onboarding' | 'quotes' | 'matches';

// helpers
export function getCurrentUserIdFromCookies(): string {
  if (typeof document === 'undefined') return 'demo-user-1';
  const cookies = document.cookie?.split(';').map((c) => c.trim()) || [];
  const userCookie = cookies.find((c) => c.startsWith('user_id='));
  if (userCookie) return decodeURIComponent(userCookie.split('=')[1]);
  return 'demo-user-1';
}

export function mapFilterToQuery(filter: NotificationFilter): { unread?: boolean; type?: NotificationType | null } {
  switch (filter) {
    case 'unread':
      return { unread: true, type: null } as any;
    case 'system':
      return { type: 'system' } as any;
    case 'onboarding':
      return { type: 'onboarding' } as any;
    case 'quotes':
      return { type: 'quote' } as any;
    case 'matches':
      return { type: 'match' } as any;
    default:
      return {} as any;
  }
}

// client API wrappers
export async function fetchNotifications(params: {
  filter?: NotificationFilter;
  limit?: number;
  offset?: number;
} = {}): Promise<NotificationItem[]> {
  const { filter = 'all', limit = 50, offset = 0 } = params;
  const qs = new URLSearchParams({ filter, limit: String(limit), offset: String(offset) });
  const res = await fetch(`/api/notifications?${qs.toString()}`, { credentials: 'include' });
  if (!res.ok) throw new Error('Failed to fetch notifications');
  const data = await res.json();
  return data.notifications || [];
}

export async function fetchUnreadCount(): Promise<number> {
  const res = await fetch('/api/notifications?countOnly=true&filter=unread', { credentials: 'include' });
  if (!res.ok) return 0;
  const data = await res.json();
  return data.count || 0;
}

export async function markNotificationRead(id: string): Promise<void> {
  const res = await fetch('/api/notifications/mark-read', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error('Failed to mark as read');
}

export async function markAllAsRead(): Promise<void> {
  const res = await fetch('/api/notifications/mark-all-read', {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to mark all as read');
}

export async function clearAllNotifications(): Promise<void> {
  const res = await fetch('/api/notifications/clear-all', {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to clear notifications');
}