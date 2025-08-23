import { useState, useEffect } from 'react';

/**
 * Returns the provided error only after the specified delay.
 * If the error changes or becomes null before the delay elapses,
 * no error is returned and the timer resets.
 */
export function useDelayedError<T>(error: T | null | undefined, delay = 1000) {
  const [delayedError, setDelayedError] = useState<T | null>(null);

  useEffect(() => {
    if (!error) {
      setDelayedError(null);
      return;
    }

    const timer = setTimeout(() => setDelayedError(error), delay);
    return () => clearTimeout(timer);
  }, [error, delay]);

  return delayedError;
}
