let isLocalStorageAvailable = true;
const localStorageMemoryStore: { [key: string]: string } = {};

export const safeStorage = {
  getItem: (key: string): string | null => {
    if (!isLocalStorageAvailable) {
      return localStorageMemoryStore[key] || null;
    }
    try {
      return localStorage.getItem(key);
    } catch (e) {
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      return localStorageMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (!isLocalStorageAvailable) {
      localStorageMemoryStore[key] = value;
      return;
    }
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      localStorageMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (!isLocalStorageAvailable) {
      delete localStorageMemoryStore[key];
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (e) {
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      delete localStorageMemoryStore[key];
    }
  },
  clear: () => {
    if (!isLocalStorageAvailable) {
      for (const key in localStorageMemoryStore) {
        delete localStorageMemoryStore[key];
      }
      return;
    }
    try {
      localStorage.clear();
    } catch (e) {
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      for (const key in localStorageMemoryStore) {
        delete localStorageMemoryStore[key];
      }
    }
  },
  key: (index: number): string | null => {
    if (!isLocalStorageAvailable) {
      return Object.keys(localStorageMemoryStore)[index] || null;
    }
    try {
      return localStorage.key(index);
    } catch (e) {
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      return Object.keys(localStorageMemoryStore)[index] || null;
    }
  },
  get length(): number {
    if (!isLocalStorageAvailable) {
      return Object.keys(localStorageMemoryStore).length;
    }
    try {
      return localStorage.length;
    } catch (e) {
      if (isLocalStorageAvailable) { // Only log once
        console.warn('localStorage is not available. Falling back to in-memory storage for this session.', e);
        isLocalStorageAvailable = false;
      }
      return Object.keys(localStorageMemoryStore).length;
    }
  },
  get isLocalStorageAvailable(): boolean {
    return isLocalStorageAvailable;
  }
};

let isSessionStorageAvailable = true;
const sessionStorageMemoryStore: { [key: string]: string } = {};

export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    if (!isSessionStorageAvailable) {
      return sessionStorageMemoryStore[key] || null;
    }
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      return sessionStorageMemoryStore[key] || null;
    }
  },
  setItem: (key: string, value: string) => {
    if (!isSessionStorageAvailable) {
      sessionStorageMemoryStore[key] = value;
      return;
    }
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      sessionStorageMemoryStore[key] = value;
    }
  },
  removeItem: (key: string) => {
    if (!isSessionStorageAvailable) {
      delete sessionStorageMemoryStore[key];
      return;
    }
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      delete sessionStorageMemoryStore[key];
    }
  },
  clear: () => {
    if (!isSessionStorageAvailable) {
      for (const key in sessionStorageMemoryStore) {
        delete sessionStorageMemoryStore[key];
      }
      return;
    }
    try {
      sessionStorage.clear();
    } catch (e) {
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      for (const key in sessionStorageMemoryStore) {
        delete sessionStorageMemoryStore[key];
      }
    }
  },
  key: (index: number): string | null => {
    if (!isSessionStorageAvailable) {
      return Object.keys(sessionStorageMemoryStore)[index] || null;
    }
    try {
      return sessionStorage.key(index);
    } catch (e) {
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      return Object.keys(sessionStorageMemoryStore)[index] || null;
    }
  },
  get length(): number {
    if (!isSessionStorageAvailable) {
      return Object.keys(sessionStorageMemoryStore).length;
    }
    try {
      return sessionStorage.length;
    } catch (e) {
      if (isSessionStorageAvailable) { // Only log once
        console.warn('sessionStorage is not available. Falling back to in-memory storage for this session.', e);
        isSessionStorageAvailable = false;
      }
      return Object.keys(sessionStorageMemoryStore).length;
    }
  },
  get isSessionStorageAvailable(): boolean {
    return isSessionStorageAvailable;
  }
};
