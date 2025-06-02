import { getEnqueueSnackbar } from '@/context/SnackbarContext';

const originalConsoleError = console.error;

console.error = (...args: any[]) => {
  try {
    const first = args[0];
    const message = first instanceof Error ? first.message : String(first);
    const enqueueSnackbar = getEnqueueSnackbar();
    enqueueSnackbar(message, { variant: 'error' });
  } catch {}
  originalConsoleError(...args);
};
