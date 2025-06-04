// src/utils/consoleErrorToast.ts
import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { captureException } from './sentry'; // Added import

const originalConsoleError = console.error;

console.error = (...args: any[]) => {
  try {
    const first = args[0];
    const message = first instanceof Error ? first.message : String(first);

    // Attempt to show snackbar
    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(message, { variant: 'error' });
    } catch (snackbarError) {
      originalConsoleError('Error showing snackbar in console.error override:', snackbarError);
    }

    // Attempt to report to Sentry
    try {
      if (first instanceof Error) {
        captureException(first);
      } else {
        // Create a new error for better stack trace if the original arg isn't one.
        // The stack will start from here, inside the console.error override.
        captureException(new Error(message));
      }
    } catch (sentryError) {
      originalConsoleError('Error reporting to Sentry in console.error override:', sentryError);
    }

  } catch (overallError) {
    // Fallback if determining message or other initial logic failed.
    originalConsoleError('Critical error in console.error override:', overallError);
  }

  // Call the original console.error in all cases to maintain original behavior
  originalConsoleError(...args);
};
