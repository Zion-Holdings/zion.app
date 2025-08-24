// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

// Reset fetch mocks before each test to ensure isolation
beforeEach(() => {
  fetchMock.resetMocks();
});

// Jest-DOM matchers
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder and TextDecoder for JSDOM environment
global.TextEncoder = TextEncoder;
// @ts-expect-error - Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder;


// Set up a mock for Vite environment variables accessed via import.meta.env
// This assumes that Babel (via babel-plugin-transform-import-meta or similar)
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR
// or that import.meta itself is transformed into an object where 'env' can be populated.
process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup';
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test_anon_key';


// Jest-axe matchers for accessibility
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Mock window.matchMedia for Jest
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock import.meta.env for Jest - This was ineffective for the SyntaxError
// global.import = {
//   // @ts-expect-error
//   meta: {
//     env: {
//       VITE_SUPABASE_URL: 'mock_supabase_url',
//       VITE_SUPABASE_ANON_KEY: 'mock_supabase_anon_key',
//       MODE: 'test',
//     },
//   },
// };

// Mock the supabase client module to prevent import.meta.env parsing errors
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
      // Add any other specific methods from supabase.auth if they get called
    },
    // Add other top-level Supabase client methods if they get called
    // e.g., from: jest.fn(), rpc: jest.fn(), etc.
    // For now, keeping it minimal.
  },
}));

// Mock Firebase/Firestore
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  // Add other app-level exports if needed, e.g., getApps, getApp
}));

jest.mock('firebase/firestore', () => {
  // Mock collection function to be available on the db instance (for v8 style)
  // and as a top-level export (for v9 style).
  const mockCollection = jest.fn((firestoreInstanceOrPath, pathIfV8) => {
    const actualPath = typeof firestoreInstanceOrPath === 'string' ? firestoreInstanceOrPath : pathIfV8;
    return {
      path: actualPath,
      doc: jest.fn((docId) => ({
        id: docId,
        path: `${actualPath}/${docId}`,
        get: jest.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
        set: jest.fn(() => Promise.resolve()),
        update: jest.fn(() => Promise.resolve()),
        delete: jest.fn(() => Promise.resolve()),
        onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function
      })),
      getDocs: jest.fn(() => Promise.resolve({ docs: [] })),
      addDoc: jest.fn(() => Promise.resolve({ id: 'mockedDocId' })),
      onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function
    };
  });

  const mockDoc = jest.fn((firestoreInstanceOrCollectionRef, pathOrId, ...pathSegments) => {
    let basePath = '';
    if (typeof firestoreInstanceOrCollectionRef.path === 'string') {
      basePath = firestoreInstanceOrCollectionRef.path;
    }
    const fullPath = [basePath, pathOrId, ...pathSegments].filter(Boolean).join('/');
    return {
      id: pathSegments.length > 0 ? pathSegments[pathSegments.length-1] : pathOrId,
      path: fullPath,
      get: jest.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
      set: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
      onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function
    };
  });

  return {
    getFirestore: jest.fn(() => ({
      // For v8 style: db.collection('path')
      collection: mockCollection,
      // For v8 style: db.doc('path/docId')
      doc: mockDoc,
      // Add any other methods directly on db if used, e.g. batch, runTransaction
    })),
    // For v9 style: collection(db, 'path')
    collection: mockCollection,
    // For v9 style: doc(db, 'path', 'docId')
    doc: mockDoc,
    getDoc: jest.fn(() => Promise.resolve({ exists: () => false, data: () => undefined })),
    setDoc: jest.fn(() => Promise.resolve()),
    updateDoc: jest.fn(() => Promise.resolve()),
    deleteDoc: jest.fn(() => Promise.resolve()),
    onSnapshot: jest.fn(() => jest.fn()), // Returns an unsubscribe function for document/query snapshots
    query: jest.fn((collectionRef, ...constraints) => ({ ref: collectionRef, constraints })),
    where: jest.fn((fieldPath, opStr, value) => ({ type: 'where', fieldPath, opStr, value })),
    orderBy: jest.fn((fieldPath, directionStr) => ({ type: 'orderBy', fieldPath, directionStr })),
    limit: jest.fn((count) => ({ type: 'limit', count })),
    Timestamp: {
      now: jest.fn(() => ({ toDate: () => new Date() })),
      fromDate: jest.fn((date) => ({ toDate: () => date })),
    },
    // Add other Firestore exports your code uses
  };
});

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    // Mock Auth instance properties/methods if needed, e.g., currentUser
    currentUser: null,
    onAuthStateChanged: jest.fn(() => jest.fn()), // Returns an unsubscribe function
  })),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } })),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'mock-uid', email: 'mock@example.com' } })),
  sendEmailVerification: jest.fn(() => Promise.resolve()),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve()),
  signOut: jest.fn(() => Promise.resolve()),
  // Add other Auth exports your code uses (e.g., GoogleAuthProvider, signInWithPopup, etc.)
  // For example:
  // GoogleAuthProvider: jest.fn(),
  // signInWithPopup: jest.fn(() => Promise.resolve({ user: { uid: 'mock-uid' } })),
}));

jest.mock('firebase/storage', () => ({
  getStorage: jest.fn(() => ({
    // Mock Storage instance properties/methods if needed
  })),
  ref: jest.fn((storageInstance, path) => ({
    // Mock StorageReference
    name: path ? path.substring(path.lastIndexOf('/') + 1) : 'mockfile.txt',
    fullPath: path || 'mock/full/path/mockfile.txt',
    // Add methods like uploadBytes, getDownloadURL, delete, etc.
  })),
  uploadBytes: jest.fn((storageRef, data, metadata) => Promise.resolve({
    // Mock UploadResult
    metadata: { fullPath: storageRef.fullPath, ...metadata },
    ref: storageRef,
  })),
  getDownloadURL: jest.fn((storageRef) => Promise.resolve(`https://mockstorage.com/${storageRef.fullPath}`)),
  deleteObject: jest.fn(() => Promise.resolve()),
  // Add other Storage exports your code uses
}));

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  // Add other axios methods if used (e.g., put, delete, request)
}));

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Polyfill for URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = jest.fn();
}

// Polyfill for BroadcastChannel
if (typeof BroadcastChannel === 'undefined') {
  // @ts-expect-error - BroadcastChannel polyfill for test environment
  global.BroadcastChannel = class BroadcastChannelMock {
    constructor(name: string) {
      // @ts-expect-error - Mock name property assignment
      this.name = name;
    }
    postMessage = jest.fn();
    close = jest.fn();
    onmessage = null;
    onmessageerror = null;
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
    dispatchEvent = jest.fn();
  };
}

// Polyfill for window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  window.scrollTo = jest.fn();
}

// Mock axios.create to return axios itself
import axios from 'axios';
// @ts-ignore
axios.create = jest.fn(() => axios);

// -----------------------------
// Vitest Compatibility Layer for Jest
// -----------------------------
// Some test files were originally written for Vitest and import utilities from 'vitest'.
// To keep migrating gradually while still running the Jest suite successfully, we create
// a lightweight shim that re-maps the most common Vitest helpers to their Jest equivalents.
// This avoids individual test failures like "Vitest cannot be imported in a CommonJS module".
//
// NOTE: When the test suite is fully migrated to Vitest this shim can be removed together
// with the associated `moduleNameMapper` entry in `jest.config.cjs`.
// ---------------------------------------------------------------------------
jest.mock('vitest', () => {
  const jestFn = (...args: unknown[]) => jest.fn(...(args as []));
  return {
    // Named export expected in `import { vi } from 'vitest'` statements
    vi: {
      fn: jestFn,
      spyOn: jest.spyOn.bind(jest),
      mock: jest.mock.bind(jest),
      clearAllMocks: jest.clearAllMocks,
      resetAllMocks: jest.resetAllMocks,
      // Provide a simple implementation of `import.meta` mocking helpers
      // frequently used in Vitest examples
      // (no-op implementations because Jest already handles env vars via `process.env`).
      importActual: jest.requireActual,
      mockResolvedValue: <T = unknown>(value: T) => jest.fn().mockResolvedValue(value),
      mockRejectedValue: <T = unknown>(value: T) => jest.fn().mockRejectedValue(value),
    },

    // Re-export common testing globals so that `import { expect, test } from 'vitest'`
    // continues to work inside the Jest environment.
    describe: global.describe,
    it: global.it,
    test: global.test,
    expect: expect, // Use expect from jest-dom/jest instead of global.expect
    beforeEach: global.beforeEach,
    afterEach: global.afterEach,
    beforeAll: global.beforeAll,
    afterAll: global.afterAll,
  } as unknown as Record<string, unknown>;
});

// -----------------------------
// Lightweight Context & Redux mocks to avoid provider runtime errors
// -----------------------------

// Auth Context
jest.mock('@/context/auth/AuthProvider', () => {
  const useAuth = () => ({
    isAuthenticated: false,
    isLoading: false,
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
    signUp: jest.fn(),
  });

  const AuthProvider = ({ children }: any) => children;

  return {
    __esModule: true,
    AuthProvider,
    default: AuthProvider,
    useAuth,
  };
});

// Analytics Context
jest.mock('@/context/AnalyticsContext', () => {
  const useAnalytics = () => ({
    trackEvent: jest.fn(),
    trackPageView: jest.fn(),
  });
  const AnalyticsProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    AnalyticsProvider,
    default: AnalyticsProvider,
    useAnalytics,
  };
});

// Whitelabel Context
jest.mock('@/context/WhitelabelContext', () => {
  const useWhitelabel = () => ({
    brand: 'default',
    theme: 'light',
  });
  const WhitelabelProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    WhitelabelProvider,
    default: WhitelabelProvider,
    useWhitelabel,
  };
});

// Feedback Context
jest.mock('@/context/FeedbackContext', () => {
  const useFeedback = () => ({
    open: jest.fn(),
  });
  const FeedbackProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    FeedbackProvider,
    default: FeedbackProvider,
    useFeedback,
  };
});

// react-redux hooks
jest.mock('react-redux', () => {
  const actualRedux = jest.requireActual('react-redux');
  return {
    ...actualRedux,
    useDispatch: () => jest.fn(),
    // Provide predictable data for selectors so components don't explode
    useSelector: jest.fn((selector: any) => {
      const mockState = {
        cart: { items: [] },
        wishlist: { items: [] },
      };
      return typeof selector === 'function' ? selector(mockState) : mockState;
    }),
  };
});

// Cart Context – simple noop implementation for tests
jest.mock('@/context/CartContext', () => {
  const useCart = () => ({ items: [], dispatch: jest.fn() });
  const CartProvider = ({ children }: { children: React.ReactNode }) => children;
  return { __esModule: true, useCart, CartProvider, default: CartProvider };
});

// Wishlist hook – return empty list helpers
jest.mock('@/hooks/useWishlist', () => {
  const useWishlist = () => ({ items: [] as string[], toggle: jest.fn(), isWishlisted: () => false });
  return { __esModule: true, useWishlist, default: useWishlist };
});

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-ignore
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-ignore
  global.IntersectionObserver = MockIntersectionObserver;
}

// Ensure all code paths use the mock implementation
// Some services import the global fetch reference before jest-fetch-mock is enabled.
// Override it explicitly so those modules receive the mocked version.
// @ts-ignore
global.fetch = fetchMock;

// Polyfill performance.getEntriesByType for JSDOM (used in productionLogger)
if (typeof performance.getEntriesByType !== 'function') {
  // @ts-ignore
  performance.getEntriesByType = () => [];
}

jest.mock('@supabase/ssr', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
    },
  },
}));

// Provide minimal mocks for other @supabase/ssr helpers referenced by auth-js
jest.mock('@supabase/ssr/dist/main/cookies', () => ({
  getAll: () => ({}),
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

// When a module imports '@/context' root index (e.g., useEnqueueSnackbar)
jest.mock('@/context', () => {
  const useEnqueueSnackbar = () => jest.fn();
  return { __esModule: true, useEnqueueSnackbar };
});

// Extend Vitest shim with restoreAllMocks for suites that call it
// @ts-ignore - vi is added by the vitest mock above
if (global.vi && !global.vi.restoreAllMocks) {
  // @ts-ignore
  global.vi.restoreAllMocks = jest.restoreAllMocks;
}

// Mock @supabase/ssr createBrowserClient so components don't crash in tests
jest.mock('@supabase/ssr', () => ({
  createBrowserClient: () => ({
    auth: { onAuthStateChange: jest.fn(), signInWithPassword: jest.fn(), signUp: jest.fn() },
  }),
}));

// Ensure hooks/use-toast exports usable toast fn
jest.mock('@/hooks/use-toast', () => {
  const toastFn = jest.fn();
  return { __esModule: true, toast: toastFn, useToast: () => ({ toast: toastFn }) };
});

// Minimal MSW mocks to satisfy tests without parsing ESM bundles
jest.mock('msw', () => ({ rest: { get: jest.fn(), post: jest.fn(), put: jest.fn(), delete: jest.fn() } }));
jest.mock('msw/node', () => ({ setupServer: () => ({ listen: jest.fn(), resetHandlers: jest.fn(), close: jest.fn() }) }));

// Provide mock for missing component
jest.mock('@/components/search/FilterSidebar', () => ({ FilterSidebar: () => null }));

// Extend Vitest shim with timer helpers if not present
// @ts-ignore - vi is added by the vitest mock above
if (global.vi) {
  // @ts-ignore
  if (!global.vi.useFakeTimers) global.vi.useFakeTimers = jest.useFakeTimers.bind(jest);
  // @ts-ignore
  if (!global.vi.runAllTimers) global.vi.runAllTimers = jest.runAllTimers.bind(jest);
  // @ts-ignore
  if (!global.vi.advanceTimersByTime) global.vi.advanceTimersByTime = jest.advanceTimersByTime.bind(jest);
}