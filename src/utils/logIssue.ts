import { captureException } from './sentry';

/**
 * Wrapper to report minor issues or warnings to Sentry.
 * Falls back to console.error if reporting fails.
 */
export function logIssue(message: string, context?: Record<string, unknown>) {
  try {
    if (context) {
      captureException(new Error(message), { extra: context });
    } else {
      captureException(new Error(message));
    }
  } catch (err) {
    console.error('Failed to report issue:', err);
  }
}
