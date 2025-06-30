// Vitest setup file
import { beforeAll, afterEach, afterAll, vi, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'; // Extends Vitest's expect with jest-dom matchers
import { TextEncoder, TextDecoder } from 'util';

// MSW API mocking
import { server } from '../src/mocks/server'; // Assuming server is in src/mocks

// Jest-axe matchers for accessibility
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Polyfill TextEncoder and TextDecoder for JSDOM environment
global.TextEncoder = TextEncoder;
// @ts-expect-error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder as any;


// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
// Also, ensure React Testing Library cleans up.
afterEach(() => {
  server.resetHandlers();
  cleanup();
  vi.restoreAllMocks();
});

// Clean up after the tests are finished.
afterAll(() => server.close());

// Common global mocks

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: vi.fn(() => []),
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Polyfill for URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = vi.fn();
}

// Polyfill for BroadcastChannel
if (typeof BroadcastChannel === 'undefined') {
  // @ts-expect-error - BroadcastChannel polyfill for test environment
  global.BroadcastChannel = class BroadcastChannelMock {
    constructor(name: string) {
      // @ts-expect-error - Mock name property assignment
      (this as any).name = name;
    }
    postMessage = vi.fn();
    close = vi.fn();
    onmessage = null;
    onmessageerror = null;
    addEventListener = vi.fn();
    removeEventListener = vi.fn();
    dispatchEvent = vi.fn();
  };
}

// Mock Shoplocket (example, if used)
if (typeof window.Shoplocket === 'undefined') {
  (window as any).Shoplocket = {
    open: vi.fn(),
    close: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  };
}

// Mock safeStorage and safeSessionStorage
vi.mock('@/utils/safeStorage', async (importOriginal) => {
  const actual = await importOriginal() as any; // Type assertion
  return {
    ...actual,
    safeStorage: {
      getItem: vi.fn((key: string) => null), // Default to returning null
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
    safeSessionStorage: {
      getItem: vi.fn((key: string) => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
  };
});

// Mock the supabase client module
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } },
      })),
      // Add any other specific methods from supabase.auth if they get called
    },
    // Add other top-level Supabase client methods if they get called
  },
}));

// Mock Firebase/Firestore
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
}));

vi.mock('firebase/firestore', () => {
  const mockCollection = vi.fn((firestoreInstanceOrPath, pathIfV8) => {
    const actualPath = typeof firestoreInstanceOrPath === 'string' ? firestoreInstanceOrPath : pathIfV8;
    return {
      path: actualPath,
      doc: vi.fn((docId) => ({
        id: docId,
        path: `${actualPath}/${docId}`,
        get: vi.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
        set: vi.fn(() => Promise.resolve()),
        update: vi.fn(() => Promise.resolve()),
        delete: vi.fn(() => Promise.resolve()),
        onSnapshot: vi.fn(() => vi.fn()), // Returns an unsubscribe function
      })),
      getDocs: vi.fn(() => Promise.resolve({ docs: [] })),
      addDoc: vi.fn(() => Promise.resolve({ id: 'mockedDocId' })),
      onSnapshot: vi.fn(() => vi.fn()), // Returns an unsubscribe function
    };
  });

  const mockDoc = vi.fn((firestoreInstanceOrCollectionRef, pathOrId, ...pathSegments) => {
    let basePath = '';
    if (typeof (firestoreInstanceOrCollectionRef as any).path === 'string') {
      basePath = (firestoreInstanceOrCollectionRef as any).path;
    }
    const fullPath = [basePath, pathOrId, ...pathSegments].filter(Boolean).join('/');
    return {
      id: pathSegments.length > 0 ? pathSegments[pathSegments.length-1] : pathOrId,
      path: fullPath,
      get: vi.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
      set: vi.fn(() => Promise.resolve()),
      update: vi.fn(() => Promise.resolve()),
      delete: vi.fn(() => Promise.resolve()),
      onSnapshot: vi.fn(() => vi.fn()), // Returns an unsubscribe function
    };
  });

  return {
    getFirestore: vi.fn(() => ({
      collection: mockCollection,
      doc: mockDoc,
    })),
    collection: mockCollection,
    doc: mockDoc,
    getDoc: vi.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
    setDoc: vi.fn(() => Promise.resolve()),
    updateDoc: vi.fn(() => Promise.resolve()),
    deleteDoc: vi.fn(() => Promise.resolve()),
    onSnapshot: vi.fn(() => vi.fn()),
    query: vi.fn((collectionRef, ...constraints) => ({ ref: collectionRef, constraints })),
    where: vi.fn((fieldPath, opStr, value) => ({ type: 'where', fieldPath, opStr, value })),
    orderBy: vi.fn((fieldPath, directionStr) => ({ type: 'orderBy', fieldPath, directionStr })),
    limit: vi.fn((count) => ({ type: 'limit', count })),
    Timestamp: {
      now: vi.fn(() => ({ toDate: () => new Date() })),
      fromDate: vi.fn((date: Date) => ({ toDate: () => date })),
    },
  };
});

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    currentUser: null,
    onAuthStateChanged: vi.fn(() => vi.fn()),
  })),
  createUserWithEmailAndPassword: vi.fn(() => Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } })),
  signInWithEmailAndPassword: vi.fn(() => Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } })),
  sendEmailVerification: vi.fn(() => Promise.resolve()),
  sendPasswordResetEmail: vi.fn(() => Promise.resolve()),
  signOut: vi.fn(() => Promise.resolve()),
}));

vi.mock('firebase/storage', () => ({
  getStorage: vi.fn(() => ({})),
  ref: vi.fn((storageInstance, path) => ({
    name: path ? path.substring(path.lastIndexOf('/') + 1) : 'mockfile.txt',
    fullPath: path || 'mock/full/path/mockfile.txt',
  })),
  uploadBytes: vi.fn((storageRef, data, metadata) => Promise.resolve({
    metadata: { fullPath: storageRef.fullPath, ...metadata },
    ref: storageRef,
  })),
  getDownloadURL: vi.fn((storageRef) => Promise.resolve(`https://mockstorage.com/${storageRef.fullPath}`)),
  deleteObject: vi.fn(() => Promise.resolve()),
}));

// Mock axios
vi.mock('axios', () => ({
  default: { // Assuming axios is used as default import
    get: vi.fn(() => Promise.resolve({ data: {} })),
    post: vi.fn(() => Promise.resolve({ data: {} })),
    create: vi.fn(function() { return this; }), // Mock create to return the mock itself
  },
  get: vi.fn(() => Promise.resolve({ data: {} })),
  post: vi.fn(() => Promise.resolve({ data: {} })),
  create: vi.fn(function() { return this; }), // Mock create to return the mock itself
}));


// Lightweight Context & Redux mocks
vi.mock('@/context/auth/AuthProvider', () => {
  const useAuth = () => ({
    isAuthenticated: false,
    isLoading: false,
    user: null,
    login: vi.fn(),
    logout: vi.fn(),
    signUp: vi.fn(),
  });
  const AuthProvider = ({ children }: any) => children;
  return { AuthProvider, useAuth, default: AuthProvider };
});

vi.mock('@/context/AnalyticsContext', () => {
  const useAnalytics = () => ({
    trackEvent: vi.fn(),
    trackPageView: vi.fn(),
  });
  const AnalyticsProvider = ({ children }: any) => children;
  return { AnalyticsProvider, useAnalytics, default: AnalyticsProvider };
});

vi.mock('@/context/WhitelabelContext', () => {
  const useWhitelabel = () => ({
    brand: 'default',
    theme: 'light',
  });
  const WhitelabelProvider = ({ children }: any) => children;
  return { WhitelabelProvider, useWhitelabel, default: WhitelabelProvider };
});

vi.mock('@/context/FeedbackContext', () => {
  const useFeedback = () => ({
    open: vi.fn(),
  });
  const FeedbackProvider = ({ children }: any) => children;
  return { FeedbackProvider, useFeedback, default: FeedbackProvider };
});

vi.mock('react-redux', async () => {
  const actualRedux = await vi.importActual('react-redux') as object;
  return {
    ...actualRedux,
    useDispatch: () => vi.fn(),
    useSelector: vi.fn(() => ({})),
  };
});
