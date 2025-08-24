import React from 'react';
import { useSnackbar, VariantType, OptionsObject } from 'notistack';

export type ToastOptions = OptionsObject & { variant?: VariantType };

export function useToast() {
  const { enqueueSnackbar } = useSnackbar();
  const toast = React.useCallback((message: string, options?: ToastOptions) => {
    enqueueSnackbar(message, options);
  }, [enqueueSnackbar]);

  toast.error = (msg: string) => enqueueSnackbar(msg, { variant: 'error' });
  toast.success = (msg: string) => enqueueSnackbar(msg, { variant: 'success' });

  return { toast } as { toast: typeof toast };
}

let globalEnqueue: (msg: string, opts?: OptionsObject) => void;

export function ToastInitializer() {
  const { enqueueSnackbar } = useSnackbar();
  React.useEffect(() => {
    globalEnqueue = enqueueSnackbar;
  }, [enqueueSnackbar]);
  return null;
}

export const toast = {
  error: (msg: string) => globalEnqueue?.(msg, { variant: 'error' }),
  success: (msg: string) => globalEnqueue?.(msg, { variant: 'success' }),
};

toastAdapter.warning = (message: string, options?: { id?: string; duration?: number } & Record<string, any>) => {
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
