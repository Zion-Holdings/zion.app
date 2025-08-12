import { initializeApp } from 'firebase/app';
import { memoryLocalCache, Firestore, getFirestore } from 'firebase/firestore';
import { getPerformance } from 'firebase/performance';
import { logWarn } from '@/utils/productionLogger';


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// Firestore tries to use IndexedDB for persistence which can fail in
// environments where access to local storage is blocked (e.g. third-party
// iframes or private browsing). Attempt to initialize normally and fall back to
// an in-memory cache when storage access is denied.
let db: Firestore;
try {
  db = getFirestore(app);
} catch (e) {
  logWarn('Firestore storage unavailable, using memory cache.', { data:  e });
  db = getFirestore(app);
}

// Initialize Firebase Performance Monitoring
const perf = getPerformance(app);

export { db, perf };

