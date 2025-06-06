// Log unhandled errors globally
import { captureException } from './sentry';

if (typeof window !== 'undefined') {
  window.onerror = function (
    message,
    source,
    lineno,
    colno,
    error
  ) {
    console.error('Global Error:', { message, source, lineno, colno, error });
    try {
      if (error instanceof Error) {
        captureException(error);
      } else {
        captureException(new Error(String(message)));
      }
    } catch (reportErr) {
      console.error('Failed to report global error:', reportErr);
    }
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
      console.error('Failed to send error log:', fetchErr);
    }
  });
}
