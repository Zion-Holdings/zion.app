/* eslint-env serviceworker */
/* global self, caches, Response, clients */

const CACHE_NAME = 'zion-tech-group-v1.0.0';
const urlsToCache = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/static/css/main.css',
  '/static/js/main.js'
];

// Install event - cache resources
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync function
async function doBackgroundSync() {
  try {
    // Handle offline actions when connection is restored
    console.log('Background sync completed');
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Zion Tech Group',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icon-192x192.png'
      }
    ]
  };

    event.waitUntil(
      self.registration.showNotification(data.title || 'Zion Tech Group', options)
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
