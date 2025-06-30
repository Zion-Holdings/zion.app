// Types exported from other modules as needed 
import { captureException } from './sentry';
import { sendErrorToBackend } from './customErrorReporter';
import { generateTraceId } from './generateTraceId';
import { logWarn, logError as prodLogError } from '@/utils/productionLogger';
import { getCapturedLogs, ConsoleLogEntry } from './consoleLogCapture';
import { getCorrelationId as fetchCorrelationId } from './correlationManager';

// Do not import datadogLogs at the top level for server-side compatibility

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
  let capturedConsoleLogs: ConsoleLogEntry[] = [];

  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    capturedConsoleLogs = getCapturedLogs();
  }

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
    const currentCorrelationId = fetchCorrelationId();
    const sentryExtraContext: Record<string, any> = {
      traceId,
      ...(context || {}),
      ...(capturedConsoleLogs.length > 0 && { recentConsoleLogs: capturedConsoleLogs }),
    };
    if (currentCorrelationId) {
      sentryExtraContext.correlationId = currentCorrelationId;
    }

    captureException(errorToSend, { extra: sentryExtraContext });

    // Datadog logging - client-side only
    if (typeof window !== 'undefined') {
      const datadogClientToken = process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN;
      const datadogSite = process.env.NEXT_PUBLIC_DATADOG_SITE || 'datadoghq.com';
      const datadogServiceName = process.env.NEXT_PUBLIC_DATADOG_SERVICE_NAME || 'zion-frontend';

      if (datadogClientToken) {
        import('@datadog/browser-logs').then(({ datadogLogs, datadogRum }) => {
          if (!datadogLogs.getInternalContext()) { // Check if already initialized
            datadogLogs.init({
              clientToken: datadogClientToken,
              site: datadogSite,
              service: datadogServiceName,
              forwardErrorsToLogs: true,
              sampleRate: 100,
              env: process.env.NODE_ENV || 'development',
            });
          }

          if (datadogLogs && datadogLogs.logger) {
            const ddContext: Record<string, any> = {
                error: errorToSend,
                traceId,
                ...context,
                ...(capturedConsoleLogs.length > 0 && { recentConsoleLogs: capturedConsoleLogs.map(log => `${log.timestamp} [${log.level}] ${log.message}`).join('\n') }),
            };
            if (currentCorrelationId) {
              ddContext.correlationId = currentCorrelationId;
            }
            datadogLogs.logger.error(errorToSend.message, ddContext);
          }
        }).catch(ddImportError => {
          logWarn('Failed to import or initialize Datadog logger:', { data: ddImportError });
        });
      } else if (process.env.NODE_ENV === 'development') {
        // logWarn('Datadog client token not configured. Skipping Datadog error logging.');
      }

      // LogRocket logging
      const logRocketAppId = process.env.NEXT_PUBLIC_LOGROCKET_APP_ID;
      if (logRocketAppId) {
        import('logrocket').then(LogRocket => {
          // LogRocket.init should ideally be called once in _app.tsx or similar
          // For now, just ensure captureException is available
          if (LogRocket && typeof LogRocket.captureException === 'function') {
            const lrExtra: Record<string, any> = {
              traceId,
              ...context,
              ...(capturedConsoleLogs.length > 0 && { recentConsoleLogs: capturedConsoleLogs.map(log => `${log.timestamp} [${log.level}] ${log.message}`).join('\n') }),
            };
            if (currentCorrelationId) {
              lrExtra.correlationId = currentCorrelationId;
            }
            LogRocket.captureException(errorToSend, { extra: lrExtra });
          }
        }).catch(lrError => {
          logWarn('Failed to import or use LogRocket:', { data: lrError });
        });
      } else if (process.env.NODE_ENV === 'development') {
        // logWarn('LogRocket App ID not configured. Skipping LogRocket error logging.');
      }
    }
  } catch (err) {
    prodLogError('Failed to report error to Sentry:', err, { componentStack: context?.componentStack });
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
      correlationId: currentCorrelationId || undefined, // Add correlationId here too
      ...(context && { customContext: context }),
      ...(capturedConsoleLogs.length > 0 && { recentConsoleLogs: capturedConsoleLogs }),
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
      prodLogError('Error sending logError to backend:', err, { componentStack: context?.componentStack });
    });

  } catch (err) {
    prodLogError('Failed to prepare or send error to custom backend:', { data: err });
  }

  return traceId;
}
