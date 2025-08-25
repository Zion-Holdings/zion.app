import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Info, X, AlertTriangle } from 'lucide-react';

export interface NotificationProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const notificationStyles = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-zion-emerald/10',
    borderColor: 'border-zion-emerald/20',
    textColor: 'text-zion-emerald',
    iconColor: 'text-zion-emerald'
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    textColor: 'text-red-500',
    iconColor: 'text-red-500'
  },
  info: {
    icon: Info,
    bgColor: 'bg-zion-blue/10',
    borderColor: 'border-zion-blue/20',
    textColor: 'text-zion-blue',
    iconColor: 'text-zion-blue'
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-zion-gold/10',
    borderColor: 'border-zion-gold/20',
    textColor: 'text-zion-gold',
    iconColor: 'text-zion-gold'
  }
};

export function Notification({ id, type, title, message, duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const styles = notificationStyles[type];
  const Icon = styles.icon;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.bgColor} ${styles.borderColor} border rounded-lg p-4 shadow-lg animate-fade-in max-w-sm`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start space-x-3">
        <Icon className={`w-5 h-5 mt-0.5 ${styles.iconColor}`} />
        <div className="flex-1 min-w-0">
          <h4 className={`text-sm font-medium ${styles.textColor}`}>{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{message}</p>
        </div>
        <button
          onClick={handleClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function NotificationContainer({ notifications, onClose }: { 
  notifications: NotificationProps[], 
  onClose: (id: string) => void 
}) {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={onClose}
        />
      ))}
    </div>
  );
}