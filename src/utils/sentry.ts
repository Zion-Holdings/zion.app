// Remove all Sentry imports and dynamic imports. Provide a no-op captureException function.
export function captureException(error: unknown, context?: unknown): void {
  // No-op: Sentry is disabled to prevent node: import errors in build.
}
