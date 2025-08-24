import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  variant?: 'default' | 'destructive';
  duration?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (options: Omit<Toast, 'id'>) => {
    const id = Date.now().toString();
    const newToast: Toast = {
      id,
      duration: 5000,
      ...options
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, newToast.duration);

    return id;
  };

  const dismiss = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const success = (title: string, description?: string) => {
    return toast({ title, description, type: 'success' });
  };

  const error = (title: string, description?: string) => {
    return toast({ title, description, type: 'error', variant: 'destructive' });
  };

  const warning = (title: string, description?: string) => {
    return toast({ title, description, type: 'warning' });
  };

  const info = (title: string, description?: string) => {
    return toast({ title, description, type: 'info' });
  };

  return {
    toasts,
    toast,
    dismiss,
    success,
    error,
    warning,
    info
  };
}

// Export a standalone toast function for convenience
export const toast = (options: Omit<Toast, 'id'>) => {
  // This is a simplified version that just logs to console
  // In a real app, you'd want to integrate with a toast library
  console.log('Toast:', options);
  return Date.now().toString();
};