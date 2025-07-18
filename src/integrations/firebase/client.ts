<<<<<<< HEAD
import { initializeApp } from 'firebase/app'
import {;
  memoryLocalCache as _memoryLocalCache,;
  Firestore,'
  getFirestore,;
} from 'firebase/firestore'
import { getPerformance } from 'firebase/performance'
import { logWarn } from '@/utils/productionLogger;;
'
const firebaseConfig: {;",;"
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',;
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',;
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',;
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',;
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',;
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',;
=======
import { initializeApp } from 'firebase/app;'';
import {;
  memoryLocalCache as _memoryLocalCache,;
  Firestore,;''
  getFirestore,;;
} from 'firebase/firestore;'';
import { getPerformance } from 'firebase/performance;'';
import { logWarn } from '@/utils/productionLogger;'
;'';
const firebaseConfig: unknown "unknown = {;",;""
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',;;'
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',;;'
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',;;'
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',;;'
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',;;'
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
const app = initializeApp(firebaseConfig);
// Firestore tries to use IndexedDB for persistence which can fail in;
// environments where access to local storage is blocked (e.g. third-party;
// iframes or private browsing). Attempt to initialize normally and fall back to;
<<<<<<< HEAD
// an in-memory cache when storage access is denied.'
let db: Firestore;
try {;
  db = getFirestore(app)'
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
  logWarn('Firestore storage unavailable, using memory cache.', {;
    data: "{ data: e "},;
  });
  db = getFirestore(app);
};
// Initialize Firebase Performance Monitoring;"
const perf = getPerformance(app);";"
;"
export { db, perf };"
"""""
=======
// an in-memory cache when storage access is denied.;'';
let db: Firestore;
try {;
  db = getFirestore(app);''
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;;
  logWarn('Firestore storage unavailable, using memory cache.', {;;'
    data: "{ data: e "},;"
  });
  db = getFirestore(app);
};
;
// Initialize Firebase Performance Monitoring;"";
const perf: unknown = getPerformance(app);";""
;";";"";
export { db, perf };";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
