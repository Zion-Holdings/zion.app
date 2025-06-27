import { logWarn } from '@/utils/productionLogger';

const DB_NAME = 'zion-store';
const DB_VERSION = 1;
const CART_STORE = 'cart';
const WISHLIST_STORE = 'wishlist';

let indexedDBAvailable = true;
const memoryStore: Record<string, any[]> = {
  [CART_STORE]: [],
  [WISHLIST_STORE]: []
};

function openDB(): Promise<IDBDatabase | null> {
  if (!indexedDBAvailable) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    let request: IDBOpenDBRequest;
    try {
      request = indexedDB.open(DB_NAME, DB_VERSION);
    } catch (err) {
      logWarn('IndexedDB not available. Falling back to in-memory store.', { data: err });
      indexedDBAvailable = false;
      return resolve(null);
    }
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(CART_STORE)) {
        db.createObjectStore(CART_STORE);
      }
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {
        db.createObjectStore(WISHLIST_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      logWarn('IndexedDB open error. Falling back to in-memory store.', { data: request.error });
      indexedDBAvailable = false;
      resolve(null);
    };
  });
}

async function getList(storeName: string): Promise<any[]> {
  const db = await openDB();
  if (!db) {
    return memoryStore[storeName] || [];
  }
  return new Promise(resolve => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const req = store.get('items');
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

async function setList(storeName: string, items: any[]): Promise<void> {
  const db = await openDB();
  if (!db) {
    memoryStore[storeName] = items;
    return;
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(items, 'items');
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getCart() {
  return getList(CART_STORE);
}
export async function saveCart(items: any[]) {
  await setList(CART_STORE, items);
}
export async function getWishlist() {
  return getList(WISHLIST_STORE);
}
export async function saveWishlist(items: any[]) {
  await setList(WISHLIST_STORE, items);
}
