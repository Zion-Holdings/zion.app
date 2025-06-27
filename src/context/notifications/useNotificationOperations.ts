import { useState, useCallback, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { Notification, FilterType, NotificationContextType } from './types';
import axios from '@/lib/axios';
import { logError } from '@/utils/productionLogger';

export const useNotificationOperations = (

  userId?: string,
): NotificationContextType => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterType>(
    () => (safeStorage.getItem('notification_filter') as FilterType) || 'all',
  );

  useEffect(() => {
    safeStorage.setItem('notification_filter', filter);
  }, [filter]);

  const fetchNotifications = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    try {
      const res = await axios.get(`/api/notifications`, { params: { userId } });
      setNotifications(res.data || []);
    } catch (err) {
      logError('Error fetching notifications:', { data: err });
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const markAsRead = useCallback(
    async (id: string) => {
      if (!userId) return;

      try {
        await axios.patch(`/api/notifications/${id}`, { read: true });
        await fetchNotifications();
      } catch (err) {
        logError('Error marking notification as read:', { data: err });
      }
    },
    [userId, fetchNotifications],
  );

  const markAllAsRead = useCallback(async () => {
    if (!userId) return;

    try {
      await Promise.all(
        notifications
          .filter((n) => !n.read)
          .map((n) =>
            axios.patch(`/api/notifications/${n.id}`, { read: true }),
          ),
      );
      await fetchNotifications();
    } catch (err) {
      logError('Error marking all notifications as read:', { data: err });
    }
  }, [userId, fetchNotifications, notifications]);

  const dismissNotification = useCallback(
    async (id: string) => {
      if (!userId) return;

      try {
        await axios.delete(`/api/notifications/${id}`);
        await fetchNotifications();
      } catch (err) {
        logError('Error dismissing notification:', { data: err });
      }
    },
    [userId, fetchNotifications],
  );

  const filteredNotifications = notifications.filter((notification) => {
    switch (filter) {
      case 'unread':
        return !notification.read;
      case 'messages':
        return notification.type === 'message';
      case 'onboarding':
        return notification.type === 'onboarding';
      case 'system':
        return notification.type === 'system';
      case 'orders':
        return notification.type === 'order_status';
      default:
        return true;
    }
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return {
    notifications,
    filteredNotifications,
    unreadCount,
    loading,
    filter,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    setFilter,
    fetchNotifications,
  };
};
