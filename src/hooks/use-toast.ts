import React from 'react';
import { toast as sonnerToast } from 'sonner';

interface ToastActionProps {
  label: string;
  onClick: () => void;
}

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  action?: ToastActionProps;
}

const toastAdapter = (props: ToastProps | string) => {
  if (typeof props === 'string') {
    sonnerToast(props);
    return;
  }

  const { title, description, variant, action } = props;
  const message = title || description || '';

  const options: { description?: string; action?: React.ReactNode; } = {};
  if (title && description) {
    options.description = description;
  }
  if (action) {
    options.action = React.createElement('button', { onClick: action.onClick }, action.label);
  }

  switch (variant) {
    case 'destructive':
      sonnerToast.error(message, options);
      break;
    case 'success':
      sonnerToast.success(message, options);
      break;
    default:
      if (title && description) {
        sonnerToast(title, { description });
      } else if (title) {
        sonnerToast(title, options);
      } else if (description) {
        sonnerToast(description, options);
      } else {
        sonnerToast("Notification", options);
      }
      break;
  }
};

toastAdapter.success = (message: string, options?: object) => sonnerToast.success(message, options);
toastAdapter.error = (message: string, options?: object) => sonnerToast.error(message, options);
toastAdapter.info = (message: string, options?: object) => sonnerToast.info(message, options);
toastAdapter.warning = (message: string, options?: object) => sonnerToast.warning(message, options);
toastAdapter.loading = (message: string, options?: object) => sonnerToast.loading(message, options);
toastAdapter.custom = (component: React.ReactElement, options?: object) => sonnerToast.custom(() => component, options);
toastAdapter.dismiss = (toastId?: string | number) => sonnerToast.dismiss(toastId);

export const toast = toastAdapter;
export const useToast = () => ({ toast: toastAdapter });
