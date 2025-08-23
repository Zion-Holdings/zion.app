declare module '@sentry/nextjs' {
  export function init(options?: unknown): void;
  export function captureException(err: unknown): void;
  export function captureMessage(message: string): void;
  export function addBreadcrumb(breadcrumb: unknown): void;
  export function withScope(callback: (scope: import('@sentry/types').Scope) => void): void;
  export function withSentryConfig<T>(config: T): T;
  export function wrapApiHandlerWithSentry<T>(handler: T): T;
  export function wrapGetServerSidePropsWithSentry<T>(handler: T): T;
  export function wrapGetStaticPropsWithSentry<T>(handler: T): T;
  export function wrapAppGetInitialPropsWithSentry<T>(handler: T): T;
  export function wrapErrorGetInitialPropsWithSentry<T>(handler: T): T;
}
