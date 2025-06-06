import { captureException } from './sentry';

/**
 * Centralized error logger for frontend issues. Reports to Sentry when
 * available and falls back to console.error.
 */
export function logError(error: unknown, context?: Record<string, unknown>) {
  try {
    if (error instanceof Error) {
      if (context) {
        captureException(error, { extra: context });
      } else {
        captureException(error);
      }
    } else {
      const wrapped = new Error(typeof error === 'string' ? error : 'Unknown error');
      if (context) {
        captureException(wrapped, { extra: context });
      } else {
        captureException(wrapped);
      }
    }
  } catch (err) {
    console.error('Failed to log error:', err);
  }
}
