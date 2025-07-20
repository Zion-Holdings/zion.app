import { useState, useRef, useCallback } from 'react';

type ReconnectionOptions = {
  maxAttempts: number;
  delay: number;
  backoffMultiplier: number;
};

export function useWebSocketReconnection(options: ReconnectionOptions = {
  maxAttempts: 5,
  delay: 1000,
  backoffMultiplier: 2
}) {
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const attemptReconnection = useCallback((callback: () => void) => {
    if (attemptCount >= options.maxAttempts) {
      setIsReconnecting(false);
      return;
    }

    setIsReconnecting(true);
    setAttemptCount(prev => prev + 1);

    const delay = options.delay * Math.pow(options.backoffMultiplier, attemptCount);
    
    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  }, [attemptCount, options]);

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
    resetReconnection
  };
}
