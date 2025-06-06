import { toast } from 'sonner';

// Utility to prevent duplicate toasts. Similar to react-hot-toast's isActive check.

const activeToasts = new Set<string | number>();

export type ToastType = 'default' | 'success' | 'error' | 'info' | 'warning' | 'loading';

export function isToastActive(id: string | number): boolean {
  return activeToasts.has(id);
}

export function showToast(id: string | number, msg: string, type: ToastType = 'error'): void {
  if (activeToasts.has(id)) return;
  activeToasts.add(id);

  const method = (toast as any)[type] || toast;
  method(msg, { id });

  setTimeout(() => activeToasts.delete(id), 5000);
}

// Example: showToast('api-error', 'Network error');
