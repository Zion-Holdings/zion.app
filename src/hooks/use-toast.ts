import React from 'react';
import { toast as sonnerToast } from 'sonner';

const variantStyles = {
  info: { background: '#1e3a8a', color: '#fff' },
  error: { background: '#7f1d1d', color: '#fff' },
};

interface ToastActionProps {
  label: string;
  onClick: () => void;
}

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  action?: ToastActionProps;
  onRetry?: () => void;
  id?: string;
}

const toastAdapter = (props: ToastProps | string) => {
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

  if (variant === 'destructive' && onRetry) {
    options.action = React.createElement('button', { onClick: onRetry }, 'Retry');
  } else if (action) {
    options.action = React.createElement('button', { onClick: action.onClick }, action.label);
  }

  switch (variant) {
    case 'destructive':
      sonnerToast.error(message, { ...options, id, style: variantStyles.error });
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
  sonnerToast.success(message, { duration: 4000, ...(options || {}) });
};

toastAdapter.error = (message: string, options?: { id?: string } & Record<string, any>) => {
  sonnerToast.error(message, { duration: 4000, ...(options || {}), style: variantStyles.error });
};

toastAdapter.info = (message: string, options?: { id?: string } & Record<string, any>) => {
  sonnerToast.info(message, { duration: 4000, ...(options || {}), style: variantStyles.info });
};

toastAdapter.warning = (message: string, options?: { id?: string } & Record<string, any>) => {
  sonnerToast.warning(message, { duration: 4000, ...(options || {}) });
};

toastAdapter.dismiss = (toastId?: string | number) => sonnerToast.dismiss(toastId);

export const toast = toastAdapter;
export const useToast = () => ({ 
  toast: toastAdapter,
  dismiss: (toastId?: string) => sonnerToast.dismiss(toastId)
});
