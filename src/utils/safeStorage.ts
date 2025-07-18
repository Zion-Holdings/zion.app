import { logError, logWarn } from '@/utils/logger';

// In-memory storage for fallback with optimizations
const inMemoryStore: Record<string, string> = {};
let localStorageAvailable: boolean | null = null; // Cache the availability check
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max

// Recursion prevention for error logging
let isLoggingError = false;

function isLocalStorageAvailable(): boolean {
  const now = Date.now();
  
  // Use cached result if checked recently
  if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
    return localStorageAvailable;
  }
  
  lastAvailabilityCheck = now;
  
  try {
    if (typeof window === 'undefined') {
      localStorageAvailable = false;
      return false;
    }
    
    const testKey = '__localStorage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    localStorageAvailable = true;
    return true;
  } catch {
    localStorageAvailable = false;
    return false;
  }
}

function safeConsoleError(message: string, error?: unknown) {
  // Prevent infinite recursion in console logging
  if (isLoggingError || (typeof process !== 'undefined' && process.env.NODE_ENV === 'production')) return;
  
  isLoggingError = true;
  try {
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
      logError(message, error);
    }
  } catch {
    // Silent fail if console.error causes recursion
  } finally {
    isLoggingError = false;
  }
}

export const safeStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    
    // Don't log verbose messages for Supabase auth tokens to prevent spam
    const isVerboseKey = key.includes('sb-') || key.includes('supabase');
    
    try {
      return localStorage.getItem(key);
    } catch {
      if (!isVerboseKey) {
        safeConsoleError(`safeStorage.getItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`);
      }
      return inMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    
    const isVerboseKey = key.includes('sb-') || key.includes('supabase');
    
    try {
      localStorage.setItem(key, value);
    } catch {
      if (!isVerboseKey) {
        safeConsoleError(`safeStorage.setItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`);
      }
      inMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    
    const isVerboseKey = key.includes('sb-') || key.includes('supabase');
    
    try {
      localStorage.removeItem(key);
    } catch {
      if (!isVerboseKey) {
        safeConsoleError(`safeStorage.removeItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`);
      }
      delete inMemoryStore[key];
    }
  },
  clear: () => {
    if (typeof window === 'undefined') {
      for (const key in inMemoryStore) {
        delete inMemoryStore[key];
      }
      return;
    }
    try {
      localStorage.clear();
    } catch {
      safeConsoleError('safeStorage.clear: Error clearing localStorage. Falling back to in-memory.');
      for (const key in inMemoryStore) {
        delete inMemoryStore[key];
      }
    }
  },
  get isAvailable(): boolean {
    return isLocalStorageAvailable();
  }
};

// Simplified session storage without excessive logging
const sessionMemoryStore: Record<string, string> = {};

export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      return sessionStorage.getItem(key);
    } catch {
      return sessionMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    try {
      sessionStorage.setItem(key, value);
    } catch {
      sessionMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    try {
      sessionStorage.removeItem(key);
    } catch {
      delete sessionMemoryStore[key];
    }
  },
  clear: () => {
    if (typeof window === 'undefined') {
      for (const key in sessionMemoryStore) {
        delete sessionMemoryStore[key];
      }
      return;
    }
    try {
      sessionStorage.clear();
    } catch {
      for (const key in sessionMemoryStore) {
        delete sessionMemoryStore[key];
      }
    }
  },
  get isAvailable(): boolean {
    try {
      if (typeof window === 'undefined') return false;
      const testKey = '__session_test__';
      sessionStorage.setItem(testKey, 'test');
      sessionStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }
};
