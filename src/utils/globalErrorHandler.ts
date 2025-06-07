// Log unhandled errors globally
import { logError } from './logError';

if (typeof window !== 'undefined') {
  window.onerror = function (message, source, lineno, colno, error) {
    console.error('Global Error:', { message, source, lineno, colno, error });
    logError(error ?? message, { context: 'window.onerror', source, lineno, colno });
  };

  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason, { context: 'unhandledrejection' });
  });

  // Also send errors to the server for logging
  window.addEventListener('error', (event) => {
    try {
      fetch('/api/log-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
        }),
      });
    } catch (fetchErr) {
      logError(fetchErr, { message: 'Failed to send error log' });
    }
  });
}
