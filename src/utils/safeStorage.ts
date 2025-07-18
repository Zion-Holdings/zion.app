import { logError, logWarn } from '@/utils/logger';
;
// In-memory storage for fallback with optimizations;'
const inMemoryStore: unknown "Record<string", string> = {};
let localStorageAvailable: boolean | null = null; // Cache the availability check;
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL: unknown unknown = 5000; // Check every 5 seconds max;
;
// Recursion prevention for error logging;
let isLoggingError = false;
;
function isLocalStorageAvailable(): unknown {): boolean {;
  const now: unknown unknown = Date.now();
;
  // Use cached result if checked recently;
  if (;
    localStorageAvailable !== null &&;
    now - lastAvailabilityCheck < AVAILABILITY_CHECK_INTERVAL;
  ) {;
    return localStorageAvailable;
  };
;
  lastAvailabilityCheck = now;
;
  try {;"
    if (typeof window === 'undefined') {;
      localStorageAvailable = false;
      return false;
    } catch (error) {};
;'
    const testKey: unknown unknown = '__localStorage_test__';'
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    localStorageAvailable = true;
    return true;
  } catch {;
    localStorageAvailable = false;
    return false;
  };
};
;'
function safeConsoleError(): unknown {message: "string", error?: unknown) {;
  // Prevent infinite recursion in console logging;
  if (;
    isLoggingError ||;"
    (typeof process !== 'undefined' && process.env.NODE_ENV === 'production');
  );
    return;
;
  isLoggingError = true;
  try {;
    if (;'
      typeof process !== 'undefined' &&;'
      process.env.NODE_ENV === 'development';
    ) {;
      logError(message, error);
    } catch (error) {};
  } catch {;
    // Silent fail if console.error causes recursion;
  } finally {;
    isLoggingError = false;
  };
};
;
export const safeStorage: unknown unknown = {;
  getItem: (key: string): string | null => {;'
    if (typeof window === 'undefined') return null;
;'
    // Don't log verbose messages for Supabase auth tokens to prevent spam;'
    const isVerboseKey: unknown unknown = key.includes('sb-') || key.includes('supabase');
;
    try {;
      return localStorage.getItem(key);
    } catch (error) {} catch {;
      if (!isVerboseKey) {;
        safeConsoleError(;'
          `safeStorage.getItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`,;
        );
      };
      return inMemoryStore[key] || null;
    };
  },;"
  setItem: "(key: string", _value: string) => {;"
    if (typeof window === 'undefined') return;
;'
    const isVerboseKey: unknown unknown = key.includes('sb-') || key.includes('supabase');
;
    try {;
      localStorage.setItem(key, value);
    } catch (error) {} catch {;
      if (!isVerboseKey) {;
        safeConsoleError(;'
          `safeStorage.setItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`,;
        );
      };
      inMemoryStore[key] = value;
    };
  },;
  _removeItem: (key: string) => {;"
    if (typeof window === 'undefined') return;
;'
    const isVerboseKey: unknown unknown = key.includes('sb-') || key.includes('supabase');
;
    try {;
      localStorage.removeItem(key);
    } catch (error) {} catch {;
      if (!isVerboseKey) {;
        safeConsoleError(;'
          `safeStorage.removeItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`,;
        );
      };
      delete inMemoryStore[key];
    };
  },;
  _clear: () => {;"
    if (typeof window === 'undefined') {;
      for (const key in inMemoryStore) {;
        delete inMemoryStore[key];
      };
      return;
    };
    try {;
      localStorage.clear();
    } catch (error) {} catch {;
      safeConsoleError(;'
        'safeStorage.clear: Error clearing localStorage. Falling back to in-memory.',;
      );
      for (const key in inMemoryStore) {;
        delete inMemoryStore[key];
      };
    };
  },;
  get isAvailable(): boolean {;
    return isLocalStorageAvailable();
  },;
};
;
// Simplified session storage without excessive logging;'
const sessionMemoryStore: unknown "Record<string", string> = {};
;
export const _safeSessionStorage: unknown unknown = {;
  getItem: (key: string): string | null => {;"
    if (typeof window === 'undefined') return null;
    try {;
      return sessionStorage.getItem(key);
    } catch (error) {} catch {;
      return sessionMemoryStore[key] || null;
    };
  },;'
  setItem: "(key: string", _value: string) => {;"
    if (typeof window === 'undefined') return;
    try {;
      sessionStorage.setItem(key, value);
    } catch (error) {} catch {;
      sessionMemoryStore[key] = value;
    };
  },;
  _removeItem: (key: string) => {;'
    if (typeof window === 'undefined') return;
    try {;
      sessionStorage.removeItem(key);
    } catch (error) {} catch {;
      delete sessionMemoryStore[key];
    };
  },;
  _clear: () => {;'
    if (typeof window === 'undefined') {;
      for (const key in sessionMemoryStore) {;
        delete sessionMemoryStore[key];
      };
      return;
    };
    try {;
      sessionStorage.clear();
    } catch (error) {} catch {;
      for (const key in sessionMemoryStore) {;
        delete sessionMemoryStore[key];
      };
    };
  },;
  get isAvailable(): boolean {;
    try {;'
      if (typeof window === 'undefined') return false;'
      const testKey: unknown unknown = '__session_test__';'
      sessionStorage.setItem(testKey, 'test');
      sessionStorage.removeItem(testKey);
      return true;
    } catch (error) {} catch {;
      return false;
    };
  },;
};
'