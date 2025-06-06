import { captureException } from './sentry';

export function logError(error: unknown, context?: string) {
  try {
    console.error(context ? `${context}:` : 'Error:', error);
    if (error instanceof Error) {
      captureException(error, context ? { extra: { context } } : undefined);
    } else {
      captureException(new Error(String(error)), context ? { extra: { context } } : undefined);
    }
  } catch (reportErr) {
    console.error('Failed to capture error:', reportErr);
  }
}
