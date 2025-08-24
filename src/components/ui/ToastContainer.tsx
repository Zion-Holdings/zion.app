import React, { useState, useCallback } from 'react';
import { Toast, ToastProps } from './Toast';

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastProps['variant'];
  duration?: number;
}

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      id,
      title: options.title,
      description: options.description,
      variant: options.variant || 'default',
      duration: options.duration || 5000,
      onDismiss: (toastId: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== toastId));
      }
    };

    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  // Expose methods globally for easy access
  React.useEffect(() => {
    (window as any).showToast = addToast;
    (window as any).removeToast = removeToast;
    (window as any).clearToasts = clearAll;
  }, [addToast, removeToast, clearAll]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onDismiss={removeToast}
        />
      ))}
    </div>
  );
};