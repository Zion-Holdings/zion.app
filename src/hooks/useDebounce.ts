import { useState, useEffect, useRef } from 'react';

export function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  const isFirstRun = useRef(true);

  useEffect(() => {
    // For the first run, set the debounced value immediately if it's not empty
    if (isFirstRun.current) {
      isFirstRun.current = false;
      if (value) {
        setDebounced(value);
        return;
      }
    }

    const handle = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handle);
  }, [value, delay]);

  return debounced;
}
