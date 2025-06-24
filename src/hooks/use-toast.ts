import React from 'react';
import { toast as sonnerToast } from 'sonner';

const variantStyles = {
  info: { background: '#1e3a8a', color: '#fff' },
  error: { background: '#7f1d1d', color: '#fff' },
};
import { logError } from '@/utils/logError';

const DEDUPE_DELAY = 3000; // 3 seconds debounce for identical messages
let lastKey = '';
let lastShown = 0;

function shouldShow(key: string) {
  const now = Date.now();
  if (key === lastKey && now - lastShown < DEDUPE_DELAY) {
    return false;
  }
  lastKey = key;
  lastShown = now;
  return true;
}

interface ToastActionProps {
  label: string;
  onClick: () => void;
}

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  action?: ToastActionProps;
  onRetry?: () => void; // Added for retry functionality
  id?: string;
}

const toastAdapter = (props: ToastProps | string) => {
  const key =
    typeof props === 'string'
      ? props
      : props.id ?? `${props.variant ?? 'default'}|${props.title}|${props.description}`;

  if (!shouldShow(key)) {
    return;
  }

  if (typeof props === 'string') {
    sonnerToast(props);
    return;
  }

  const { title, description, variant, action, id, onRetry } = props;
  const message = title || description || '';

  const options: {
    description?: string;
    action?: React.ReactNode;
    duration?: number;
    id?: string;
  } = {
    duration: 4000,
  };
  if (title && description) {
    options.description = description;
  }

  // Prefer onRetry if available for destructive toasts, otherwise use generic action
  if (variant === 'destructive' && onRetry) {
    options.action = React.createElement('button', { onClick: onRetry }, 'Retry');
  } else if (action) {
    options.action = React.createElement('button', { onClick: action.onClick }, action.label);
  }

  switch (variant) {
    case 'destructive':
      const traceId = (options as any)?.traceId ?? logError(new Error(message));
      // Ensure action (like Retry) is included if onRetry was provided
      sonnerToast.error(`${message} (Trace ID: ${traceId})`, { ...options, id, style: variantStyles.error });
      break;
    case 'success':
      sonnerToast.success(message, { ...options, id });
      break;
    default:
      if (title && description) {
        sonnerToast(title, { description, duration: 4000, id });
      } else if (title) {
        sonnerToast(title, { ...options, id });
      } else if (description) {
        sonnerToast(description, { ...options, id });
      } else {
        sonnerToast("Notification", { ...options, id });
      }
      break;
  }
};

toastAdapter.success = (message: string, options?: { id?: string } & Record<string, any>) => {
  const id = options?.id;
  if (shouldShow(id ?? `success|${message}`)) {
    sonnerToast.success(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.error = (message: string, options?: { id?: string } & Record<string, any>) => {
  const opts = options as { skipLog?: boolean; traceId?: string; id?: string } | undefined;
  const id = opts?.id;
  if (shouldShow(id ?? `error|${message}`)) {
    sonnerToast.error(message, { duration: 4000, ...(options || {}), style: variantStyles.error });
  }
};
toastAdapter.info = (message: string, options?: { id?: string } & Record<string, any>) => {
  const id = options?.id;
  if (shouldShow(id ?? `info|${message}`)) {
    sonnerToast.info(message, { duration: 4000, ...(options || {}), style: variantStyles.info });
  }
};
toastAdapter.warning = (message: string, options?: { id?: string } & Record<string, any>) => {
  const id = options?.id;
  if (shouldShow(id ?? `warning|${message}`)) {
    sonnerToast.warning(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.loading = (message: string, options?: { id?: string } & Record<string, any>) => {
  const id = options?.id;
  if (shouldShow(id ?? `loading|${message}`)) {
    sonnerToast.loading(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.custom = (component: React.ReactElement, options?: { id?: string } & Record<string, any>) => {
  const id = options?.id;
  if (shouldShow(id ?? 'custom')) {
    sonnerToast.custom(() => component, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.dismiss = (toastId?: string | number) => sonnerToast.dismiss(toastId);

export const toast = toastAdapter;
export const useToast = () => ({ toast: toastAdapter });
