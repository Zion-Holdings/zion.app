import React from 'react';
import { cn } from '@/lib/utils';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

export interface ToasterProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

export interface ToasterProviderProps {
  children: React.ReactNode;
}

export interface UseToasterReturn {
  toasts: Toast[];
  toast: (toast: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToasterContext = React.createContext<UseToasterReturn | undefined>(undefined);

export const useToaster = (): UseToasterReturn => {
  const context = React.useContext(ToasterContext);
  if (!context) {
    throw new Error('useToaster must be used within ToasterProvider');
  }
  return context;
};

export const ToasterProvider: React.FC<ToasterProviderProps> = ({ children }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((toastData: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { ...toastData, id };
    setToasts(prev => [...prev, newToast]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismiss(id);
    }, 5000);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const value: UseToasterReturn = {
    toasts,
    toast,
    dismiss
  };

  return (
    <ToasterContext.Provider value={value}>
      {children}
    </ToasterContext.Provider>
  );
};

export const Toaster: React.FC<ToasterProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'flex w-full max-w-sm items-center space-x-4 rounded-lg border bg-background p-4 shadow-lg',
            toast.variant === 'destructive' && 'border-destructive bg-destructive text-destructive-foreground'
          )}
        >
          <div className="flex-1 space-y-1">
            {toast.title && (
              <p className="text-sm font-medium leading-none">{toast.title}</p>
            )}
            {toast.description && (
              <p className="text-sm text-muted-foreground">{toast.description}</p>
            )}
          </div>
          {toast.action}
          <button
            onClick={() => onDismiss(toast.id)}
            className="rounded-md p-1 text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};