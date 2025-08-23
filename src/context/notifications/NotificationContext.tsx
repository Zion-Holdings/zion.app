import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';
import { subscribeToPush } from '@/utils/pushSubscription';
import { safeStorage } from '@/utils/safeStorage';
import { logInfo } from '@/utils/productionLogger';


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

export const NotificationProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
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
          (payload: any) => {
            logInfo('Notification change received:', { data: payload });
            notificationOps.fetchNotifications();
          }
        )
        .subscribe();
        
      return () => {
        supabase.removeChannel(channel);
      };
    }
    return undefined;
  }, [user]);

  // Subscribe to push notifications once per user session
  useEffect(() => {
    if (!user) return;
    const alreadySubscribed = safeStorage.getItem('push_subscribed');
    if (alreadySubscribed === 'true') return;

    subscribeToPush()
      .then(() => safeStorage.setItem('push_subscribed', 'true'))
      .catch(() => {
        /* noop */
      });
  }, [user]);
  
  return (
    <NotificationContext.Provider value={notificationOps}>
      {children}
    </NotificationContext.Provider>
  );
};