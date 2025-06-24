import { sendErrorToBackend } from './customErrorReporter';
import { captureException } from './sentry';

let handlersInitialized = false;

// Handler for window.onerror
function handleGlobalError(
  eventOrMessage: Event | string,
  sourceUrl?: string,
  lineno?: number,
  colno?: number,
  error?: Error
): void {
  try {
    let message: string;
    let stack: string | undefined;
    const filename: string | undefined = sourceUrl;
    const lineNumber: number | undefined = lineno;
    const colNumber: number | undefined = colno;

    if (error) { // Prefer error object if available
      message = error.message;
      stack = error.stack;
    } else if (typeof eventOrMessage === 'string') {
      message = eventOrMessage;
    } else {
      // Try to get a message from the event object, though it's often not very descriptive
      message = (eventOrMessage as any)?.message || 'Unknown error from window.onerror';
    }

    const errorDetails = {
      message,
      stack,
      filename,
      lineno: lineNumber,
      colno: colNumber,
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
      source: 'window.onerror' as const,
      traceId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    };

    sendErrorToBackend(errorDetails).catch(err => {
      console.error('Error sending window.onerror report to backend:', err);
    });

    try {
      const sentryContext = {
        extra: {
          sourceUrl: sourceUrl,
          lineno: lineno,
          colno: colno,
          errorObj: error, // The original error object if available
          sourceEventOrMessage: eventOrMessage // The original first argument to onerror
        }
      };
      if (error) {
        captureException(error, sentryContext);
      } else {
        // If no error object, create one for Sentry
        captureException(new Error(typeof eventOrMessage === 'string' ? eventOrMessage : 'Global onerror event'), sentryContext);
      }
    } catch (sentryErr) {
      console.error('Failed to report global error to Sentry:', sentryErr);
    }
  } catch (e) {
    console.error('[CRITICAL] Error within handleGlobalError:', e);
  }
}

// Close handleGlobalError function

// Handler for window.onunhandledrejection
function handleUnhandledRejection(event: PromiseRejectionEvent): void {
  try {
    const reason = event.reason;
    let message: string;
    let stack: string | undefined;
    let filename: string | undefined;
    let lineno: number | undefined;
    let colno: number | undefined;

    if (reason instanceof Error) {
      message = reason.message;
      stack = reason.stack;
      // Attempt to parse filename, lineno, colno from stack if available
      if (stack) {
        const stackLines = stack.split('\n');
        const regex = /\(?(.+?):(\d+):(\d+)\)?$/;
        for (const line of stackLines) {
          // Avoid picking up lines from node_modules or internal browser/node code if possible
          if (line.includes('node_modules') || line.trim().startsWith('at <anonymous>') || line.trim().startsWith('at Object.BuiltinNama')) continue;
          const match = regex.exec(line.trim());
          if (match) {
            filename = match[1].trim();
            lineno = parseInt(match[2], 10);
            colno = parseInt(match[3], 10);
            break;
          }
        }
      }
    } else if (typeof reason === 'string') {
      message = reason;
    } else if (reason && typeof reason === 'object' && (reason as any).message) {
      message = (reason as any).message;
      stack = (reason as any).stack;
    }
    else {
      message = 'Unhandled promise rejection with non-Error reason';
    }

    const errorDetails = {
      message,
      stack,
      filename, // May be undefined if not parsed from stack
      lineno,   // May be undefined
      colno,    // May be undefined
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
      source: 'unhandledrejection' as const,
      traceId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    };

    sendErrorToBackend(errorDetails).catch(err => {
      console.error('Error sending unhandledrejection report to backend:', err);
    });

    try {
      const sentryContext = {
        extra: {
          rejectionReason: event.reason, // The original reason
        }
      };
      if (event.reason instanceof Error) {
        captureException(event.reason, sentryContext);
      } else {
        // If reason is not an Error, create one for Sentry
        captureException(new Error(typeof event.reason === 'string' ? event.reason : 'Unhandled promise rejection with non-Error reason'), sentryContext);
      }
    } catch (sentryErr) {
      console.error('Failed to report unhandled rejection to Sentry:', sentryErr);
    }
  } catch (e) {
    console.error('[CRITICAL] Error within handleUnhandledRejection:', e);
  }
}

// Close handleUnhandledRejection function

export function initializeGlobalErrorHandlers(): void {
  if (handlersInitialized) {
    return;
  }

  if (typeof window !== 'undefined') {
    // window.onerror can be assigned directly or via addEventListener.
    // Assigning directly is common for more control over the arguments.
    window.onerror = (msg, url, line, col, errObj) => {
      handleGlobalError(msg, url, line, col, errObj);
      // Return false to prevent the default browser handling (e.g., console logging).
      // Return true to allow default handling. Depending on desired behavior.
      // For now, let's allow default handling as well.
      return true;
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    handlersInitialized = true;
    console.log('Global error handlers initialized.');
  }
}

function parseStackTrace(stack: string) {
  const lines = stack.split('\n');
  const firstLine = lines[1] || lines[0];
  const match = firstLine.match(/\((.*):(\d+):(\d+)\)/) || firstLine.match(/at (.*):(\d+):(\d+)/);
  
  if (match) {
    const filename = match[1] || 'unknown';
    const lineNumber = parseInt(match[2]) || 0;
    const colNumber = parseInt(match[3]) || 0;
    // ... rest of the function ...
  }
}
