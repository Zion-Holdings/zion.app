let isLocalStorageAvailable = true;
const isDevelopment = process.env.NODE_ENV !== 'production';
const localStorageMemoryStore: { [key: string]: string } = {};

export const safeStorage = {
  getItem: (key: string): string | null => {
    if (isDevelopment) {
      console.log(
        `safeStorage.getItem: Attempting to get item "${key}". isLocalStorageAvailable: ${isLocalStorageAvailable}`
      );
    }
    if (!isLocalStorageAvailable) {
      if (isDevelopment) {
        console.log(`safeStorage.getItem: Using in-memory store for key "${key}".`);
      }
      return localStorageMemoryStore[key] || null;
    }
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error(`safeStorage.getItem: Error accessing localStorage for key "${key}". Falling back to in-memory. Error:`, e);
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      return localStorageMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (isDevelopment) {
      console.log(
        `safeStorage.setItem: Attempting to set item "${key}" with value "${value}". isLocalStorageAvailable: ${isLocalStorageAvailable}`
      );
    }
    if (!isLocalStorageAvailable) {
      if (isDevelopment) {
        console.log(`safeStorage.setItem: Using in-memory store for key "${key}".`);
      }
      localStorageMemoryStore[key] = value;
      return;
    }
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error(`safeStorage.setItem: Error accessing localStorage for key "${key}". Falling back to in-memory. Error:`, e);
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      localStorageMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (isDevelopment) {
      console.log(
        `safeStorage.removeItem: Attempting to remove item "${key}". isLocalStorageAvailable: ${isLocalStorageAvailable}`
      );
    }
    if (!isLocalStorageAvailable) {
      if (isDevelopment) {
        console.log(`safeStorage.removeItem: Using in-memory store for key "${key}".`);
      }
      delete localStorageMemoryStore[key];
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`safeStorage.removeItem: Error accessing localStorage for key "${key}". Falling back to in-memory. Error:`, e);
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      delete localStorageMemoryStore[key];
    }
  },
  get isAvailable(): boolean {
    return isLocalStorageAvailable;
  }
};

let isSessionStorageAvailable = true;
const sessionStorageMemoryStore: { [key: string]: string } = {};

export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    if (isDevelopment) {
      console.log(
        `safeSessionStorage.getItem: Attempting to get item "${key}". isSessionStorageAvailable: ${isSessionStorageAvailable}`
      );
    }
    if (!isSessionStorageAvailable) {
      if (isDevelopment) {
        console.log(`safeSessionStorage.getItem: Using in-memory store for key "${key}".`);
      }
      return sessionStorageMemoryStore[key] || null;
    }
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      console.error(`safeSessionStorage.getItem: Error accessing sessionStorage for key "${key}". Falling back to in-memory. Error:`, e);
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      return sessionStorageMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (isDevelopment) {
      console.log(
        `safeSessionStorage.setItem: Attempting to set item "${key}" with value "${value}". isSessionStorageAvailable: ${isSessionStorageAvailable}`
      );
    }
    if (!isSessionStorageAvailable) {
      if (isDevelopment) {
        console.log(`safeSessionStorage.setItem: Using in-memory store for key "${key}".`);
      }
      sessionStorageMemoryStore[key] = value;
      return;
    }
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      console.error(`safeSessionStorage.setItem: Error accessing sessionStorage for key "${key}". Falling back to in-memory. Error:`, e);
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      sessionStorageMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (isDevelopment) {
      console.log(
        `safeSessionStorage.removeItem: Attempting to remove item "${key}". isSessionStorageAvailable: ${isSessionStorageAvailable}`
      );
    }
    if (!isSessionStorageAvailable) {
      if (isDevelopment) {
        console.log(`safeSessionStorage.removeItem: Using in-memory store for key "${key}".`);
      }
      delete sessionStorageMemoryStore[key];
      return;
    }
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      console.error(`safeSessionStorage.removeItem: Error accessing sessionStorage for key "${key}". Falling back to in-memory. Error:`, e);
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      delete sessionStorageMemoryStore[key];
    }
  },
  get isAvailable(): boolean {
    return isSessionStorageAvailable;
  }
};
