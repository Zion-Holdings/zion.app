import { useState, useRef, useCallback } from 'react';

export function useWebSocketReconnection(options: any = {}) {
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const attemptReconnection = useCallback(
    (callback: () => void) => {
      if (attemptCount >= (options.maxAttempts || 5)) {
        setIsReconnecting(false);
        return;
      }

      setIsReconnecting(true);
      setAttemptCount((prev) => prev + 1);

      const delay =
        (options.delay || 1000) *
        Math.pow(options.backoffMultiplier || 2, attemptCount);

      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    },
    [attemptCount, options],
  );

  const resetReconnection = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsReconnecting(false);
    setAttemptCount(0);
  }, []);

  return {
    isReconnecting,
    attemptCount,
    attemptReconnection,
    resetReconnection,
  };
}
