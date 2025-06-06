import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore, memoryLocalCache } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// Firestore tries to use IndexedDB for persistence which can fail in
// environments where access to local storage is blocked (e.g. third-party
// iframes or private browsing). Attempt to initialize normally and fall back to
// an in-memory cache when storage access is denied.
let db;
try {
  db = getFirestore(app);
} catch (e) {
  console.warn('Firestore storage unavailable, using memory cache.', e);
  db = initializeFirestore(app, { localCache: memoryLocalCache() });
}

export { db };
