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
