import { useState, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { logWarn } from '@/utils/productionLogger';


/**
 * Persist state to localStorage and keep it in sync.
 * @param key Storage key
 * @param initialValue Initial value to use when no stored value exists
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = safeStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      logWarn('useLocalStorage: Error reading key', { data: { key, error } });
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        safeStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      logWarn('useLocalStorage: Error setting key', { data: { key, error } });
    }
  };

  return [storedValue, setValue] as const;
}
