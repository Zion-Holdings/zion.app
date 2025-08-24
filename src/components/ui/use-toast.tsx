import { useState } from 'react';

interface ToastOptions {
  duration?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>>([]);

  const toast = (type: 'success' | 'error' | 'info', message: string, options: ToastOptions = {}) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, options.duration || 3000);
  };

  const success = (message: string, options?: ToastOptions) => toast('success', message, options);
  const error = (message: string, options?: ToastOptions) => toast('error', message, options);
  const info = (message: string, options?: ToastOptions) => toast('info', message, options);

  return { toast, success, error, info, toasts };
}