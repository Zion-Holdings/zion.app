// Types exported from other modules as needed 
import { captureException } from './sentry';
import { sendErrorToBackend } from './customErrorReporter';
import { generateTraceId } from './generateTraceId';
import { logWarn } from '@/utils/productionLogger';

// Do not import datadogLogs at the top level for server-side compatibility

/**
 * Centralized error logger for frontend issues. Reports to Sentry when
 * available and falls back to console.error. Also sends to custom backend.
 * This is the primary error reporting function for external monitoring services.
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
    // Sentry logging (can run on both client and server if Sentry is configured for both)
    if (context) {
      captureException(errorToSend, { extra: { traceId, ...context } });
    } else {
      captureException(errorToSend, { extra: { traceId } });
    }

    // Datadog logging - client-side only
    if (typeof window !== 'undefined') {
      import('@datadog/browser-logs').then(({ datadogLogs }) => {
        if (datadogLogs && datadogLogs.logger) {
          if (context) {
            datadogLogs.logger.error(errorToSend.message, {
              error: errorToSend,
              traceId,
              ...context,
            });
          } else {
            datadogLogs.logger.error(errorToSend.message, { error: errorToSend, traceId });
          }
        }
      }).catch(ddImportError => {
        logWarn('Failed to import or use Datadog logger:', { data: ddImportError });
      });

      // LogRocket logging
      import('logrocket').then(mod => {
        const LogRocket = mod.default;
        if (LogRocket && typeof LogRocket.captureException === 'function') {
          if (context) {
            LogRocket.captureException(errorToSend, { extra: { traceId, ...context } });
          } else {
            LogRocket.captureException(errorToSend, { extra: { traceId } });
          }
        }
      }).catch(lrError => {
        logWarn('Failed to log error to LogRocket:', { data: lrError });
      });
    }
  } catch (err) {
    // Use console logging to avoid circular dependencies
    console.error('Failed to report error to Sentry:', err);
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
          errorDetails.lineno = parseInt(match[2] || '0', 10);
          errorDetails.colno = parseInt(match[3] || '0', 10);
          break;
        }
      }
    }

    // Non-blocking call
    sendErrorToBackend(errorDetails).catch(err => {
      // Use console logging to avoid circular dependencies
      console.error('Error sending logError to backend:', err);
    });

  } catch (err) {
    // Use console logging to avoid circular dependencies
    console.error('Failed to prepare or send error to custom backend:', err);
  }

  return traceId;
}

// Export aliases for different use cases
export { logError as reportErrorToServices };  // More descriptive name
// Note: logErrorToProduction was moved to productionLogger.ts to avoid naming conflicts
