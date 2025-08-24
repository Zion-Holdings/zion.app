import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose?: (id: string) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  showToast: (toast: Omit<ToastProps, 'id'>) => void;
  hideToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const ToastItem: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  action
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto-dismiss
    if (duration > 0) {
      const dismissTimer = setTimeout(() => {
        handleClose();
      }, duration);
      
      return () => clearTimeout(dismissTimer);
    }
    
    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.(id);
    }, 300);
  }, [id, onClose]);

  const handleAction = useCallback(() => {
    action?.onClick();
    handleClose();
  }, [action, handleClose]);

  const typeStyles = {
    success: {
      icon: '✓',
      bg: 'bg-green-500',
      border: 'border-green-400',
      text: 'text-green-800',
      iconBg: 'bg-green-100'
    },
    error: {
      icon: '✕',
      bg: 'bg-red-500',
      border: 'border-red-400',
      text: 'text-red-800',
      iconBg: 'bg-red-100'
    },
    warning: {
      icon: '⚠',
      bg: 'bg-yellow-500',
      border: 'border-yellow-400',
      text: 'text-yellow-800',
      iconBg: 'bg-yellow-100'
    },
    info: {
      icon: 'ℹ',
      bg: 'bg-blue-500',
      border: 'border-blue-400',
      text: 'text-blue-800',
      iconBg: 'bg-blue-100'
    }
  };

  const styles = typeStyles[type];

  return (
    <div
      className={`
        relative w-full max-w-sm bg-white rounded-lg shadow-lg border-l-4 p-4 mb-3
        transform transition-all duration-300 ease-out
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${isExiting ? 'translate-x-full opacity-0' : ''}
        ${styles.border}
      `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {/* Progress bar */}
      {duration > 0 && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 rounded-t-lg overflow-hidden">
          <div
            className={`h-full ${styles.bg} transition-all duration-300 ease-linear`}
            style={{
              width: isVisible ? '0%' : '100%',
              transitionDuration: `${duration}ms`
            }}
          />
        </div>
      )}

      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className={`flex-shrink-0 w-6 h-6 rounded-full ${styles.iconBg} flex items-center justify-center text-sm font-bold ${styles.text}`}>
          {styles.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`text-sm font-semibold ${styles.text}`}>
            {title}
          </h4>
          {message && (
            <p className="mt-1 text-sm text-gray-600">
              {message}
            </p>
          )}
          
          {/* Action button */}
          {action && (
            <button
              onClick={handleAction}
              className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 w-5 h-5 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = useCallback((toast: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // Limit toasts to prevent memory issues
  useEffect(() => {
    if (toasts.length > 5) {
      setToasts(prev => prev.slice(-5));
    }
  }, [toasts.length]);

  const contextValue: ToastContextType = {
    showToast,
    hideToast,
    clearToasts
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {toasts.length > 0 && createPortal(
        <div
          className="fixed top-4 right-4 z-50 space-y-2 max-w-sm"
          role="region"
          aria-label="Notifications"
        >
          {toasts.map(toast => (
            <ToastItem
              key={toast.id}
              {...toast}
              onClose={hideToast}
            />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

// Utility functions for quick toast creation
export const toast = {
  success: (title: string, message?: string, options?: Partial<ToastProps>) => {
    // This would be called from the context
    return { type: 'success' as const, title, message, ...options };
  },
  error: (title: string, message?: string, options?: Partial<ToastProps>) => {
    return { type: 'error' as const, title, message, ...options };
  },
  warning: (title: string, message?: string, options?: Partial<ToastProps>) => {
    return { type: 'warning' as const, title, message, ...options };
  },
  info: (title: string, message?: string, options?: Partial<ToastProps>) => {
    return { type: 'info' as const, title, message, ...options };
  }
};

// HOC to wrap components with toast functionality
export const withToast = <P extends object>(
  Component: React.ComponentType<P & { toast?: ToastContextType }>
) => {
  return (props: P) => (
    <ToastContext.Consumer>
      {(toastContext) => (
        <Component {...props} toast={toastContext} />
      )}
    </ToastContext.Consumer>
  );
};