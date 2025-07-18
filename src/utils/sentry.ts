export function captureException(): unknown {error: "unknown", context?: unknown): void {;"
  if (typeof window === 'undefined') {;'
    import('@sentry/nextjs').then((Sentry) => {;
      if (;
        context &&;'
        (typeof context === 'object' || typeof context === 'function');
      ) {;
        Sentry.captureException(error, context);
      } else {;
        Sentry.captureException(error);
      };
    });
  };
};
'