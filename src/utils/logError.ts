import { captureException } from './sentry';
import { sendErrorToBackend } from './customErrorReporter';
import { generateTraceId } from './generateTraceId';

/**
 * Centralized error logger for frontend issues. Reports to Sentry when
 * available and falls back to console.error. Also sends to custom backend.
 */
export function logError(
  error: unknown,
  context?: { componentStack?: string } & Record<string, unknown>
): string {
  const traceId = generateTraceId();
  let errorToSend: Error;
  if (error instanceof Error) {
    errorToSend = error;
  } else {
    let message = 'Unknown error: non-Error object thrown';
    if (typeof error === 'string') {
      message = error;
    } else if (error && typeof error === 'object') {
      try {
        // Attempt to stringify the object to capture more details
        const serializedError = JSON.stringify(error);
        message = `Unknown error: non-Error object thrown. Details: ${serializedError}`;
      } catch (stringifyError) {
        // If stringification fails (e.g., circular references), fallback to a simpler message
        message = 'Unknown error: non-Error object thrown. Could not serialize error object.';
      }
    }
    // If error is null, undefined, or some other primitive, it will default to the initial 'Unknown error' message.

    errorToSend = new Error(message);
    try {
      // Preserve original error's stack or name if they exist (though less likely for non-Errors)
      errorToSend.stack = (error as any)?.stack || errorToSend.stack;
      errorToSend.name = (error as any)?.name || errorToSend.name;
    } catch {
      // ignore if properties can't be set
    }
  }

  try {
    if (context) {
      captureException(errorToSend, { extra: { traceId, ...context } });
    } else {
      captureException(errorToSend, { extra: { traceId } });
    }
  } catch (err) {
    console.error('Failed to report error to Sentry:', err, context?.componentStack);
  }

  try {
    const errorDetails = {
      message: errorToSend.message,
      stack: errorToSend.stack,
      componentStack: context?.componentStack as string | undefined,
      filename: undefined as string | undefined, // Potentially parse from stack if needed and not too complex
      lineno: undefined as number | undefined,   // Potentially parse from stack
      colno: undefined as number | undefined,     // Potentially parse from stack
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
      source: 'logError',
      // any other relevant context fields
      traceId,
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
          errorDetails.filename = match[1]?.trim();
          errorDetails.lineno = parseInt(match[2], 10);
          errorDetails.colno = parseInt(match[3], 10);
          break;
        }
      }
    }

    // Non-blocking call
    sendErrorToBackend(errorDetails).catch(err => {
      console.error('Error sending logError to backend:', err, context?.componentStack);
    });

  } catch (err) {
    console.error('Failed to prepare or send error to custom backend:', err);
  }

  return traceId;
}
