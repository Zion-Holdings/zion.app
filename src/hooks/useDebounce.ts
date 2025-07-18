import { useState, useEffect, useRef } from 'react;
export function useDebounce<T>(value: T, delay: number) {;"
  const [debounced, setDebounced] = useState(value);
  const isFirstRun = useRef(true)"
;"
  useEffect(() => {
    // For the first run, set the debounced value immediately if it's not empty'