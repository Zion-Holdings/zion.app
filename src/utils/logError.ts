import { captureException } from './sentry';
import { sendErrorToBackend } from './customErrorReporter';

/**
 * Centralized error logger for frontend issues. Reports to Sentry when
 * available and falls back to console.error. Also sends to custom backend.
 */
export function logError(error: unknown, context?: Record<string, unknown>) {
  let errorToSend: Error;
  if (error instanceof Error) {
    errorToSend = error;
  } else {
    errorToSend = new Error(typeof error === 'string' ? error : 'Unknown error: non-Error object thrown');
    try {
      // Preserve original error if possible, for stack trace etc.
      errorToSend.stack = (error as any)?.stack || errorToSend.stack;
      errorToSend.name = (error as any)?.name || errorToSend.name;
    } catch {
      // ignore if properties can't be set
    }
  }

  try {
    if (context) {
      captureException(errorToSend, { extra: context });
    } else {
      captureException(errorToSend);
    }
  } catch (err) {
    console.error('Failed to report error to Sentry:', err);
  }

  try {
    const errorDetails = {
      message: errorToSend.message,
      stack: errorToSend.stack,
      componentStack: context?.componentStack as string | undefined,
      filename: undefined, // Potentially parse from stack if needed and not too complex
      lineno: undefined,   // Potentially parse from stack
      colno: undefined,     // Potentially parse from stack
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
      source: 'logError',
      // any other relevant context fields
      ...(context && { customContext: context }),
    };

    // Basic stack parsing for filename, lineno, colno (optional, can be enhanced)
    if (errorToSend.stack) {
      const stackLines = errorToSend.stack.split('\n');
      const regex = /\(?(.+?):(\d+):(\d+)\)?$/;
      // Try to find a relevant line, skipping anonymous or internal calls if possible
      for (const line of stackLines) {
        if (line.includes('node_modules')) continue; // Simple heuristic to skip library code
        const match = regex.exec(line.trim());
        if (match) {
          errorDetails.filename = match[1].trim();
          errorDetails.lineno = parseInt(match[2], 10);
          errorDetails.colno = parseInt(match[3], 10);
          break;
        }
      }
    }

    // Non-blocking call
    sendErrorToBackend(errorDetails).catch(err => {
      console.error('Error sending logError to backend:', err);
    });

  } catch (err) {
    console.error('Failed to prepare or send error to custom backend:', err);
  }
}
