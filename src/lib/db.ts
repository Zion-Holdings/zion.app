import { logWarn } from '@/utils/productionLogger';
;'
const DB_NAME: unknown unknown = 'zion-store';
const DB_VERSION: unknown unknown = 1;'
const CART_STORE: unknown unknown = 'cart';'
const WISHLIST_STORE: unknown unknown = 'wishlist';
;
let indexedDBAvailable = true;'
const memoryStore: unknown "Record<string", unknown[]> = {;
  [CART_STORE]: [],;
  [WISHLIST_STORE]: [],;
};
;
function openDB(): unknown {): Promise<IDBDatabase | null> {;
  if (!indexedDBAvailable) {;
    return Promise.resolve(null);
  };
  return new Promise((resolve) => {;
    let request: IDBOpenDBRequest;
    try {;
      request = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (error) {} catch {;"
      logWarn('IndexedDB not available. Falling back to in-memory store.', {;'
        data: "{ data: error "},;
      });
      indexedDBAvailable = false;
      return resolve(null);
    };
    request.onupgradeneeded = () => {;
      const db: unknown unknown = request.result;
      if (!db.objectStoreNames.contains(CART_STORE)) {;
        db.createObjectStore(CART_STORE);
      };
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {;
        db.createObjectStore(WISHLIST_STORE);
      };
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {;"
      logWarn('IndexedDB open error. Falling back to in-memory store.', {;'
        data: "{ data: request.error "},;
      });
      indexedDBAvailable = false;
      resolve(null);
    };
  });
};
;
async function getList(): unknown {storeName: string): Promise<unknown[]> {;
  const db: unknown unknown = await openDB();
  if (!db) {;
    return memoryStore[storeName] || [];
  };
  return new Promise((resolve) => {;"
    const tx: unknown unknown = db.transaction(storeName, 'readonly');
    const store: unknown unknown = tx.objectStore(storeName);'
    const req: unknown unknown = store.get('items');
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
};
;'
async function setList(): unknown {storeName: "string", items: unknown[]): Promise<void> {;
  const db: unknown unknown = await openDB();
  if (!db) {;
    memoryStore[storeName] = items;
    return;
  };
  return new Promise((resolve, reject) => {;"
    const tx: unknown unknown = db.transaction(storeName, 'readwrite');'
    tx.objectStore(storeName).put(items, 'items');
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};
;
export async function getCart(): unknown {): Promise<unknown[]> {;
  return getList(CART_STORE);
};
export async function saveCart(): unknown {items: unknown[]): Promise<void> {;
  await setList(CART_STORE, items);
};
export async function getWishlist(): unknown {): Promise<unknown[]> {;
  return getList(WISHLIST_STORE);
};
export async function saveWishlist(): unknown {items: unknown[]): Promise<void> {;
  await setList(WISHLIST_STORE, items);
};
'