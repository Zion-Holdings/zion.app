declare module '@sentry/nextjs' {
  export const withSentryConfig: any;
  export function captureException(error: unknown): void;
}
