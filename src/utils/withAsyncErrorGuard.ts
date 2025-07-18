import { logErrorToProduction } from '@/utils/productionLogger';

/**
 * Wrap an async function with automatic error logging.
 */
export function withAsyncErrorGuard<Args extends unknown[], R>(
  fn: (...args: Args) => Promise<R>,
): (...args: Args) => Promise<R> {
  return async (...args: Args): Promise<R> => {
    try {
      return await fn(...args);
    } catch {
      logErrorToProduction(
        _error instanceof Error ? _error : String(_error),
        _error instanceof Error ? _error : undefined,
        { context: 'withAsyncErrorGuard' },
      );
      throw _error;
    }
  };
}
