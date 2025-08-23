/* eslint-env serviceworker */
/* global self, caches */

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const STATIC_CACHE = 'zion-static-v1.0.0';
const DYNAMIC_CACHE = 'zion-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/favicon.ico',
  '/offline.html'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        // eslint-disable-next-line no-console
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error caching static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              // eslint-disable-next-line no-console
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle different caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (url.pathname === '/') {
    // Homepage - cache first, then network
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.startsWith('/api/')) {
    // API routes - network first, then cache
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/')) {
    // Static assets - cache first
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    // HTML, JS, CSS files - stale while revalidate
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
  } else if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp)$/)) {
    // Images - cache first
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else {
    // Default - network first
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache first strategy - check cache first, fallback to network
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Cache first strategy failed:', error);
    return getOfflineResponse();
  }
}

// Network first strategy - try network first, fallback to cache
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Network first strategy failed:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return getOfflineResponse();
  }
}

// Stale while revalidate strategy - return cached version immediately, update in background
async function staleWhileRevalidate(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    
    // Update cache in background
    fetch(request).then(async (networkResponse) => {
      if (networkResponse.ok) {
        const cache = await caches.open(cacheName);
        cache.put(request, networkResponse.clone());
      }
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Background update failed:', error);
    });
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Stale while revalidate strategy failed:', error);
    return getOfflineResponse();
  }
}

// Get offline response
async function getOfflineResponse() {
  try {
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    // If offline.html is not cached, return null to let the browser handle it
    return null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting offline response:', error);
    return null;
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Handle any pending background tasks
    // eslint-disable-next-line no-console
    console.log('Performing background sync');
    
    // Example: sync analytics data
    const pendingAnalytics = await getPendingAnalytics();
    if (pendingAnalytics.length > 0) {
      await syncAnalytics(pendingAnalytics);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Background sync failed:', error);
  }
}

// Get pending analytics data
async function getPendingAnalytics() {
  // This would typically read from IndexedDB or localStorage
  return [];
}

// Sync analytics data
async function syncAnalytics(analytics) {
  try {
    const response = await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(analytics)
    });
    
    if (response.ok) {
      // eslint-disable-next-line no-console
      console.log('Analytics synced successfully');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Analytics sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore Services',
          icon: '/icons/services-icon.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icons/close-icon.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      self.clients.openWindow('/services')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the main page
    event.waitUntil(
      self.clients.openWindow('/')
    );
  }
});

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// eslint-disable-next-line no-console
console.log('Zion Tech Group Service Worker loaded successfully');