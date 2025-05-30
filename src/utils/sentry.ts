export function captureException(error: unknown) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof console !== 'undefined') {
      console.error(error);
    }
  } else {
    if (typeof window !== 'undefined' && (window as any).Sentry?.captureException) {
      (window as any).Sentry.captureException(error);
    }
  }
}
