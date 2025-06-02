import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';

const defaultContext: NotificationContextType = {
  notifications: [],
  filteredNotifications: [],
  unreadCount: 0,
  loading: false,
  filter: 'all',
  markAsRead: async () => {},
  markAllAsRead: async () => {},
  dismissNotification: async () => {},
  setFilter: () => {},
  fetchNotifications: async () => {},
};

const NotificationContext = createContext(
  defaultContext as NotificationContextType
);

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext) as NotificationContextType;
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const { user } = useAuth();
  const notificationOps = useNotificationOperations(user?.id);
  
  useEffect(() => {
    // Ensure fetchNotifications is called only if notificationOps is available
    if (notificationOps) {
      notificationOps.fetchNotifications();
    }
    
    let channel: ReturnType<typeof supabase.channel> | undefined;
    if (user && notificationOps) { // Ensure notificationOps is available for fetch on change
      channel = supabase
        .channel('notifications-changes')
        .on('postgres_changes', 
          {
            event: '*', 
            schema: 'public',
            table: 'notifications',
            filter: `user_id=eq.${user.id}`
          },
          (payload) => {
            console.log('Notification change received:', payload);
            notificationOps.fetchNotifications(); // Call fetchNotifications from the stable notificationOps
          }
        )
        .subscribe();
        
      return () => {
        if (channel) {
          supabase.removeChannel(channel);
        }
      };
    }
  }, [user, notificationOps]); // Added notificationOps
  
  return (
    <NotificationContext.Provider value={notificationOps}>
      {children}
    </NotificationContext.Provider>
  );
};