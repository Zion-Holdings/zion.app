// Log unhandled errors globally
import { logError } from './logError';

if (typeof window !== 'undefined') {
  window.onerror = function (
    message,
    source,
    lineno,
    colno,
    error
  ) {
    logError(error instanceof Error ? error : new Error(String(message)), 'Global Error');
  };

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
      logError(fetchErr, 'Failed to send error log');
    }
  });
}
