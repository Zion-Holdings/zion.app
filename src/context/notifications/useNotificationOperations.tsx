import { useState } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { FilterType } from '../../components/notifications/NotificationFilter';
import { Notification, NotificationType } from './types';

export const useNotificationOperations = (userId?: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>('all');
  const [unreadCount, setUnreadCount] = useState(0);

  // Filter notifications based on the selected filter
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
      default:
        return true;
    }
  });

  // Fetch notifications from Supabase
  const fetchNotifications = async () => {
    if (!userId) {
      setNotifications([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      // Map the raw data to the Notification interface
      const mappedNotifications = data.map((notification) => ({
        ...notification,
        action_url: notification.action_url || undefined,
        action_text: notification.action_text || undefined,
      })) as Notification[];
      
      setNotifications(mappedNotifications);
      
      // Calculate unread count
      const unread = mappedNotifications.filter((notification) => !notification.read).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  // Mark a notification as read
  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true, updated_at: new Date().toISOString() })
        .eq('id', id);
        
      if (error) throw error;
      
      // Update local state
      setNotifications((prev) => 
        prev.map((notification) => 
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
      
      // Update unread count
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  };

  // Mark all notifications as read
  const markAllAsRead = async () => {
    if (!userId || notifications.length === 0) return;
    
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true, updated_at: new Date().toISOString() })
        .eq('user_id', userId)
        .eq('read', false);
        
      if (error) throw error;
      
      // Update local state
      setNotifications((prev) => 
        prev.map((notification) => ({ ...notification, read: true }))
      );
      
      // Reset unread count
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      throw error;
    }
  };

  // Dismiss (delete) a notification
  const dismissNotification = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      // Update local state
      const updatedNotifications = notifications.filter(
        (notification) => notification.id !== id
      );
      setNotifications(updatedNotifications);
      
      // Update unread count if necessary
      const wasUnread = notifications.find((n) => n.id === id)?.read === false;
      if (wasUnread) {
        setUnreadCount((prev) => Math.max(0, prev - 1));
      }
    } catch (error) {
      console.error('Error dismissing notification:', error);
      throw error;
    }
  };

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
    fetchNotifications
  };
};