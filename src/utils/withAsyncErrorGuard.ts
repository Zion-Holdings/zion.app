import { logError } from './logError';

/**
 * Wrap an async function with automatic error logging.
 */
export function withAsyncErrorGuard<T extends (...args: any[]) => Promise<any>>(fn: T): T {
  return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      return (await fn(...args)) as ReturnType<T>;
    } catch (err) {
      logError(err);
      throw err;
    }
  }) as T;
}
