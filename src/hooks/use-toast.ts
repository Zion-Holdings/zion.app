import React from 'react';
import { toast as sonnerToast } from 'sonner';

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
}

const toastAdapter = (props: ToastProps | string) => {
  const key =
    typeof props === 'string'
      ? `default|${props}`
      : `${props.variant ?? 'default'}|${props.title}|${props.description}`;

  if (!shouldShow(key)) {
    return;
  }

  if (typeof props === 'string') {
    sonnerToast(props);
    return;
  }

  const { title, description, variant, action } = props;
  const message = title || description || '';

  const options: {
    description?: string;
    action?: React.ReactNode;
    duration?: number;
  } = {
    duration: 4000,
  };
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
        sonnerToast(title, { description, duration: 4000 });
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

toastAdapter.success = (message: string, options?: object) => {
  if (shouldShow(`success|${message}`)) {
    sonnerToast.success(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.error = (message: string, options?: object) => {
  if (shouldShow(`error|${message}`)) {
    sonnerToast.error(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.info = (message: string, options?: object) => {
  if (shouldShow(`info|${message}`)) {
    sonnerToast.info(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.warning = (message: string, options?: object) => {
  if (shouldShow(`warning|${message}`)) {
    sonnerToast.warning(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.loading = (message: string, options?: object) => {
  if (shouldShow(`loading|${message}`)) {
    sonnerToast.loading(message, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.custom = (component: React.ReactElement, options?: object) => {
  if (shouldShow('custom')) {
    sonnerToast.custom(() => component, { duration: 4000, ...(options || {}) });
  }
};
toastAdapter.dismiss = (toastId?: string | number) => sonnerToast.dismiss(toastId);

export const toast = toastAdapter;
export const useToast = () => ({ toast: toastAdapter });
