import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'info' | 'warning';
};

type ToastContextValue = {
  toasts: Toast[];
  showToast: (toast: Omit<Toast, 'id'>) => void;
  dismissToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    const newToast: Toast = { id, ...toast };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(() => ({ toasts, showToast, dismissToast }), [toasts, showToast, dismissToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-16 right-4 z-[100] space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className={`w-80 rounded-md shadow-lg border p-3 backdrop-blur bg-white/90 dark:bg-black/80 ${
            t.variant === 'success' ? 'border-green-400' : t.variant === 'error' ? 'border-red-400' : t.variant === 'warning' ? 'border-yellow-400' : 'border-gray-300 dark:border-gray-700'
          }`}>
            {t.title && <div className="font-medium mb-0.5">{t.title}</div>}
            {t.description && <div className="text-sm opacity-80">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}