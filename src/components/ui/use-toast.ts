import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (toastData: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toastData, id };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const dismiss = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title: string, description?: string) => {
    toast({ title, description, type: 'success' });
  };

  const error = (title: string, description?: string) => {
    toast({ title, description, type: 'error' });
  };

  const info = (title: string, description?: string) => {
    toast({ title, description, type: 'info' });
  };

  const warning = (title: string, description?: string) => {
    toast({ title, description, type: 'warning' });
  };

  return {
    toasts,
    toast,
    dismiss,
    success,
    error,
    info,
    warning
  };
};

// Export a simple toast function for direct use
export const toast = {
  success: (title: string, description?: string) => {
    console.log(`✅ ${title}: ${description || ''}`);
  },
  error: (title: string, description?: string) => {
    console.log(`❌ ${title}: ${description || ''}`);
  },
  info: (title: string, description?: string) => {
    console.log(`ℹ️ ${title}: ${description || ''}`);
  },
  warning: (title: string, description?: string) => {
    console.log(`⚠️ ${title}: ${description || ''}`);
  }
};