import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';

const NotificationContext = createContext<NotificationContextType>({
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
});

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const notificationOps = useNotificationOperations(user?.id);
  
  // Load notifications when user changes
  useEffect(() => {
    notificationOps.fetchNotifications();
    
    // Set up real-time subscription for new notifications
    if (user) {
      const channel = supabase
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
            notificationOps.fetchNotifications();
          }
        )
        .subscribe();
        
      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user]);
  
  return (
    <NotificationContext.Provider value={notificationOps}>
      {children}
    </NotificationContext.Provider>
  );
};