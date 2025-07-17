// Remove direct import of sonnerToast, rely on globalToastManager
import { globalToastManager, showToast, ToastType, ToastPriority } from '@/utils/globalToastManager';

// Deduplication settings
const DEDUPE_DELAY = 3000; // 3 seconds
const lastKey: string | null = null;
const lastShown = 0;

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
  duration?: number;
  priority?: ToastPriority;
  persistent?: boolean;
}



/**
 * Enhanced toast adapter that uses the global toast manager
 */
const toastAdapter = (props: ToastProps | string) => {
  if (typeof props === 'string') {
    return globalToastManager.showToast({
      message: props,
      type: ToastType.INFO,
    });
  }

  const { 
    title, 
    description, 
    variant = 'default', 
    action, 
    onRetry, 
    duration,
    priority,
    persistent = false 
  } = props;

  // Map variant to toast type
  let type: ToastType;
  switch (variant) {
    case 'destructive':
      type = ToastType.ERROR;
      break;
    case 'success':
      type = ToastType.SUCCESS;
      break;
    default:
      type = ToastType.INFO;
      break;
  }

  // Use title as message if no description, otherwise use description
  const message = description || title || '';
  const toastTitle = title && description ? title : undefined;

  return globalToastManager.showToast({
    message,
    ...(toastTitle && { title: toastTitle }),
    type,
    ...(priority && { priority }),
    ...(duration && { duration }),
    persistent,
    ...(action && { action }),
    ...(onRetry && { onRetry }),
  });
};

// Convenience methods that use the global toast manager
toastAdapter.success = (message: string, options?: { id?: string; duration?: number } & Record<string, unknown>) => {
  return showToast.success(message, options);
};

toastAdapter.error = (message: string, options?: { id?: string; duration?: number } & Record<string, unknown>) => {
  return showToast.error(message, options);
};

toastAdapter.info = (message: string, options?: { id?: string; duration?: number } & Record<string, unknown>) => {
  return showToast.info(message, options);
};

toastAdapter.warning = (message: string, options?: { id?: string; duration?: number } & Record<string, unknown>) => {
  return showToast.warning(message, options);
};

toastAdapter.dismiss = (toastId?: string | number) => {
  if (toastId) {
    globalToastManager.dismissToast(String(toastId));
  } else {
    globalToastManager.dismissAll();
  }
};

// Enhanced useToast hook with global toast manager integration
export const useToast = () => ({
  toast: toastAdapter,
  dismiss: (toastId?: string) => {
    if (toastId) {
      globalToastManager.dismissToast(toastId);
    } else {
      globalToastManager.dismissAll();
    }
  },
  
  // Additional methods from global toast manager
  showToast: globalToastManager.showToast.bind(globalToastManager),
  getActiveToasts: globalToastManager.getActiveToasts.bind(globalToastManager),
  getQueueLength: globalToastManager.getQueueLength.bind(globalToastManager),
  dismissAll: globalToastManager.dismissAll.bind(globalToastManager),
  
  // Convenience methods
  success: showToast.success,
  error: showToast.error,
  warning: showToast.warning,
  info: showToast.info,
  networkError: showToast.networkError,
  authError: showToast.authError,
  validationError: showToast.validationError,
  criticalError: showToast.criticalError,
});

export const toast = toastAdapter;
