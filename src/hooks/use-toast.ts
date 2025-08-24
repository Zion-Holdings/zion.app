import * as React from 'react';

export interface ToastOptions {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToastOptions[]>([]);

  const toast = React.useCallback((options: Omit<ToastOptions, 'id'>) => {
    const newToast: ToastOptions = {
      id: Math.random().toString(36).substr(2, 9),
      duration: 5000,
      ...options,
    };

    setToasts(prev => [...prev, newToast]);

    if (newToast.duration) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t !== newToast));
      }, newToast.duration);
    }
  }, []);

  const dismiss = React.useCallback((toastToDismiss: ToastOptions) => {
    setToasts(prev => prev.filter(t => t !== toastToDismiss));
  }, []);

  const dismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    toast,
    dismiss,
    dismissAll,
  };
};