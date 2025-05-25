export const SENTRY_DSN = import.meta.env.SENTRY_DSN;

export function captureException(error: unknown) {
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error);
  }
  // Here you would send the error to Sentry using the DSN
}
