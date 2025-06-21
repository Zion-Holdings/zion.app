// src/utils/consoleErrorToast.ts
import { toast } from '@/hooks/use-toast';
import { logError } from './logError';

const originalConsoleError = console.error;

console.error = (...args: any[]) => {
  try {
    const first = args[0];
    const message = first instanceof Error ? first.message : String(first);

    let traceId: string | undefined;
    try {
      traceId = logError(first instanceof Error ? first : new Error(message));
    } catch (sentryError) {
      originalConsoleError('Error reporting to logger in console.error override:', sentryError);
    }

    try {
      toast.error(message, { skipLog: true, traceId });
    } catch (snackbarError) {
      originalConsoleError('Error showing toast in console.error override:', snackbarError);
    }

  } catch (overallError) {
    // Fallback if determining message or other initial logic failed.
    originalConsoleError('Critical error in console.error override:', overallError);
  }

  // Call the original console.error in all cases to maintain original behavior
  originalConsoleError(...args);
};
