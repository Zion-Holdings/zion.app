<<<<<<< HEAD
import { logWarn } from '@/utils/productionLogger;;
const DB_NAME = 'zion-store;
const DB_VERSION = 1;
const CART_STORE = 'cart'
const WISHLIST_STORE = 'wishlist;
'
let indexedDBAvailable = true;
const memoryStore: unknown "Record<string", unknown[]> = {;
=======
import { logWarn } from '@/utils/productionLogger;'
;;
const DB_NAME: unknown = 'zion-store;';
const DB_VERSION: unknown = 1;;
const CART_STORE: unknown = 'cart;'';
const WISHLIST_STORE: unknown = 'wishlist;'
;'';
let indexedDBAvailable = true;;
const memoryStore: unknown "Record<string", unknown[]> = {;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  [CART_STORE]: [],;
  [WISHLIST_STORE]: [],;
};
function openDB(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<IDBDatabase | null> {;
  if (!indexedDBAvailable) {;
    return Promise.resolve(null);
  };
<<<<<<< HEAD
  return new Promise((resolve) => {;"
    let request: IDBOpenDBRequest;";"
    try {;"
      request = indexedDB.open(DB_NAME, DB_VERSION);"
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;"
      logWarn('IndexedDB not available. Falling back to in-memory store.', {;
        data: "{ data: error "},;
=======
  return new Promise((resolve) => {;""
    let request: IDBOpenDBRequest;";""
    try {;";";""
      request = indexedDB.open(DB_NAME, DB_VERSION);";";";""
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;";";";";""
      logWarn('IndexedDB not available. Falling back to in-memory store.', {;;'
        data: "{ data: error "},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
      indexedDBAvailable = false;
      return resolve(null);
    };
    request.onupgradeneeded = () => {;
      const db = request.result;
      if (!db.objectStoreNames.contains(CART_STORE)) {;
        db.createObjectStore(CART_STORE);
      };
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {;
<<<<<<< HEAD
        db.createObjectStore(WISHLIST_STORE);"
      };";"
    };"
    request.onsuccess = () => resolve(request.result);"
    request.onerror = () => {;"
      logWarn('IndexedDB open error. Falling back to in-memory store.', {;
        data: "{ data: request.error "},;
=======
        db.createObjectStore(WISHLIST_STORE);""
      };";""
    };";";""
    request.onsuccess = () => resolve(request.result);";";";""
    request.onerror = () => {;";";";";""
      logWarn('IndexedDB open error. Falling back to in-memory store.', {;;'
        data: "{ data: request.error "},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      });
      indexedDBAvailable = false;
      resolve(null);
    };
  });
};
async function getList(): unknown {): unknown {): unknown {): unknown {): unknown {storeName: string): Promise<unknown[]> {;
<<<<<<< HEAD
  const db = await openDB();"
  if (!db) {;";"
    return memoryStore[storeName] || [];"
  };"
  return new Promise((resolve) => {;"
    const tx: db.transaction(storeName", 'readonly')'
    const store = tx.objectStore(storeName);
    const req = store.get('items');
    req.onsuccess = () => resolve(req.result || [])'
    req.onerror = () => resolve([]);
  });
}'
;
async function setList(): unknown {): unknown {): unknown {): unknown {): unknown {storeName: string, items: unknown[]): Promise<void> {;
  const db = await openDB();
  if (!db) {;"
    memoryStore[storeName] = items;";"
    return;"
  };"
  return new Promise((resolve, reject) => {;"
    const tx: db.transaction(storeName", 'readwrite');
    tx.objectStore(storeName).put(items, 'items');
=======
  const db: unknown = await openDB();""
  if (!db) {;";""
    return memoryStore[storeName] || [];";";""
  };";";";""
  return new Promise((resolve) => {;";";";";""
    const tx: unknown "unknown = db.transaction(storeName", 'readonly');''
    const store: unknown = tx.objectStore(storeName);;
    const req: unknown = store.get('items');'
    req.onsuccess = () => resolve(req.result || []);''
    req.onerror = () => resolve([]);
  });
};''
;;
async function setList(): unknown {): unknown {): unknown {): unknown {): unknown {storeName: "string", items: unknown[]): Promise<void> {;"
  const db: unknown = await openDB();
  if (!db) {;""
    memoryStore[storeName] = items;";""
    return;";";""
  };";";";""
  return new Promise((resolve, reject) => {;";";";";""
    const tx: unknown "unknown = db.transaction(storeName", 'readwrite');;'
    tx.objectStore(storeName).put(items, 'items');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};
export async function getCart(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<unknown[]> {;
  return getList(CART_STORE);
};
export async function saveCart(): unknown {): unknown {): unknown {): unknown {): unknown {items: unknown[]): Promise<void> {;
  await setList(CART_STORE, items);
};
export async function getWishlist(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<unknown[]> {;
  return getList(WISHLIST_STORE);
<<<<<<< HEAD
}'
=======
};'';
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
export async function saveWishlist(): unknown {): unknown {): unknown {): unknown {): unknown {items: unknown[]): Promise<void> {;
  await setList(WISHLIST_STORE, items);
};
};
};
};
<<<<<<< HEAD
}'
=======
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
};
};
};
};
};
};
<<<<<<< HEAD
}'
=======
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
}
};
};
};
};
};
<<<<<<< HEAD
}'
}'
=======
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}
}
}
}
}
}''