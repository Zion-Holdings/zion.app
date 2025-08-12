import {logErrorToProduction} from '@/utils/productionLogger';

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

function safeConsoleError(message: string, error?: any) {
  // Prevent infinite recursion in console logging
  if (isLoggingError || process.env.NODE_ENV === 'production') return;
  
  isLoggingError = true;
  try {
    if (process.env.NODE_ENV === 'development') {
      logErrorToProduction(message, error);
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
    } catch (e) {
      if (!isVerboseKey) {
        safeConsoleError(`safeStorage.getItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`, e);
      }
      return inMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    
    const isVerboseKey = key.includes('sb-') || key.includes('supabase');
    
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      if (!isVerboseKey) {
        safeConsoleError(`safeStorage.setItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`, e);
      }
      inMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    
    const isVerboseKey = key.includes('sb-') || key.includes('supabase');
    
    try {
      localStorage.removeItem(key);
    } catch (e) {
      if (!isVerboseKey) {
        safeConsoleError(`safeStorage.removeItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`, e);
      }
      delete inMemoryStore[key];
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
    } catch (e) {
      return sessionMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      sessionMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      delete sessionMemoryStore[key];
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
