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
// @ts-ignore // Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder;


// Set up a mock for Vite environment variables accessed via import.meta.env
// This assumes that Babel (via babel-plugin-transform-import-meta or similar)
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR
// or that import.meta itself is transformed into an object where 'env' can be populated.
process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup';


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
// @ts-ignore
// global.import = {
//   // @ts-ignore
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