import { useEffect, useState } from 'react';

/**
 * Returns true once the specified timeout (in ms) has elapsed.
 * Useful for displaying a fallback UI when a loading state takes too long.
 */
export function useSkeletonTimeout(timeout = 20000) {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return timedOut;
}
