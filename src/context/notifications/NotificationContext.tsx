import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';

// Default context used when React type definitions are missing. Providing a
// fully-typed object here avoids TypeScript errors that occur when an untyped
// `createContext` call returns `{}` instead of the expected shape.
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

// Cast the default context value to avoid issues when React types are missing.
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