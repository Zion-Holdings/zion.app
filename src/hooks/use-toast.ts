import { useState } from 'react';

interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  variant?: 'default' | 'destructive' | 'success';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const toast = (options: ToastOptions) => {
    const newToast = {
      ...options,
      duration: options.duration || 5000,
    };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto-remove toast after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t !== newToast));
    }, newToast.duration);
  };

  const dismiss = (toastToDismiss: ToastOptions) => {
    setToasts(prev => prev.filter(t => t !== toastToDismiss));
  };

  return {
    toast,
    dismiss,
    toasts,
  };
};