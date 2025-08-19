export function captureException(error: unknown) {
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error);
  }
}
