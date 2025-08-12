import { useEffect, useRef } from 'react';

/**
 * Track component mount state.
 * Returns a ref with `.current` set to `true` when the component is mounted
 * and `false` after it unmounts.
 */
export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}
