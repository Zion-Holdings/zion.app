export function captureException(): unknown {): unknown {): unknown {): unknown {): unknown {error: unknown, context?: unknown): void {;"
  if (typeof window === 'undefined') {;
    import('@sentry/nextjs').then((Sentry) => {;
      if ('
        context &&;
        (typeof context === 'object' || typeof context === 'function');