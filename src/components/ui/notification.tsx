import React, { useState, createContext, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle, Bell } from 'lucide-react';
import { Button } from './button';

// Types
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  timestamp: Date;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

// Context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Hook
export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}

// Provider Component
interface NotificationProviderProps {
  children: React.ReactNode;
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export function NotificationProvider({ 
  children, 
  maxNotifications = 5,
  position = 'top-right'
}: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      dismissible: notification.dismissible ?? true,
      duration: notification.duration ?? 5000
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      return updated.slice(0, maxNotifications);
    });

    // Auto-dismiss after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, newNotification.duration);
    }
  }, [maxNotifications, removeNotification]);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAll
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer position={position} />
    </NotificationContext.Provider>
  );
}

// Notification Container
interface NotificationContainerProps {
  position: string;
}

function NotificationContainer({ position }: NotificationContainerProps) {
  const { notifications, clearAll } = useNotifications();

  const getPositionClasses = (pos: string) => {
    switch (pos) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      default:
        return 'top-4 right-4';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className={`fixed z-50 ${getPositionClasses(position)} max-w-sm w-full`}>
      {/* Header with clear all button */}
      {notifications.length > 1 && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-zion-cyan" />
            <span className="text-zinc-300 text-sm font-medium">
              {notifications.length} notifications
            </span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={clearAll}
            className="text-zinc-400 hover:text-zion-cyan text-xs"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Notifications */}
      <div className="space-y-2">
        <AnimatePresence mode="popLayout">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Individual Notification Item
interface NotificationItemProps {
  notification: Notification;
}

function NotificationItem({ notification }: NotificationItemProps) {
  const { removeNotification } = useNotifications();

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getTypeClasses = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return 'border-green-500/30 bg-green-500/10';
      case 'error':
        return 'border-red-500/30 bg-red-500/10';
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'info':
        return 'border-blue-500/30 bg-blue-500/10';
      default:
        return 'border-zion-blue-light/30 bg-zion-blue/10';
    }
  };

  const getProgressColor = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return 'bg-green-400';
      case 'error':
        return 'bg-red-400';
      case 'warning':
        return 'bg-yellow-400';
      case 'info':
        return 'bg-blue-400';
      default:
        return 'bg-zion-cyan';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30,
        opacity: { duration: 0.2 }
      }}
      className={`relative overflow-hidden border rounded-xl p-4 backdrop-blur-sm ${getTypeClasses(notification.type)}`}
    >
      {/* Progress Bar */}
      {notification.duration && notification.duration > 0 && (
        <motion.div
          className={`absolute top-0 left-0 h-1 ${getProgressColor(notification.type)}`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: notification.duration / 1000, ease: "linear" }}
        />
      )}

      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {getIcon(notification.type)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium text-sm mb-1">
            {notification.title}
          </h4>
          {notification.message && (
            <p className="text-zinc-300 text-sm leading-relaxed">
              {notification.message}
            </p>
          )}
          
          {/* Action Button */}
          {notification.action && (
            <div className="mt-3">
              <Button
                size="sm"
                variant="ghost"
                onClick={notification.action.onClick}
                className="text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10 text-xs"
              >
                {notification.action.label}
              </Button>
            </div>
          )}
        </div>

        {/* Dismiss Button */}
        {notification.dismissible && (
          <button
            onClick={() => removeNotification(notification.id)}
            className="flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors duration-200"
          >
            <X className="w-4 h-4 text-zinc-400 hover:text-white" />
          </button>
        )}
      </div>

      {/* Timestamp */}
      <div className="mt-2 text-xs text-zinc-400">
        {notification.timestamp.toLocaleTimeString()}
      </div>
    </motion.div>
  );
}

// Convenience functions for quick notifications
export function showSuccess(title: string, message?: string, options?: Partial<Notification>) {
  // This would be called from the context
  return { type: 'success' as const, title, message, ...options };
}

export function showError(title: string, message?: string, options?: Partial<Notification>) {
  return { type: 'error' as const, title, message, ...options };
}

export function showWarning(title: string, message?: string, options?: Partial<Notification>) {
  return { type: 'warning' as const, title, message, ...options };
}

export function showInfo(title: string, message?: string, options?: Partial<Notification>) {
  return { type: 'info' as const, title, message, ...options };
}