importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

self.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

workbox.routing.registerRoute(
  ({request}) => request.method === 'GET' && request.url.includes('/api/'),
  new workbox.strategies.StaleWhileRevalidate({ cacheName: 'api-get' })
);

workbox.routing.registerRoute(
  ({request}) => ['image','font'].includes(request.destination),
  new workbox.strategies.CacheFirst({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 })
    ]
  })
);

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('apiQueue', {
  maxRetentionTime: 24 * 60,
  callbacks: {
    queueDidReplay: async () => {
      const clients = await self.clients.matchAll();
      for (const client of clients) {
        client.postMessage({ type: 'QUEUE_SYNCED' });
      }
    }
  }
});

fix/multi-faceted-loading-errors
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(response => {
            if (response.status === 200) {
              try {
                const requestUrl = new URL(event.request.url); // Use new URL to parse the request's URL
                if (requestUrl.protocol === 'http:' || requestUrl.protocol === 'https:') {
                  cache.put(event.request, response.clone());
                } else {
                  // Optionally log that a non-cacheable scheme was skipped
                  console.log(`Service Worker: Skipped caching request with non-HTTP/S protocol: ${event.request.url}`);
                }
              } catch (e) {
                // Handle cases where event.request.url might not be a valid URL (though unlikely for a fetch event)
                console.error(`Service Worker: Could not parse request URL for caching: ${event.request.url}`, e);
              }
            }
            return response;
          })
          .catch(() => cache.match(event.request))
      )
    );
    return;
workbox.routing.registerRoute(
  ({url, request}) => url.pathname.startsWith('/api/') && request.method !== 'GET',
  new workbox.strategies.NetworkOnly({ plugins: [bgSyncPlugin] })
);

workbox.routing.setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match('/offline.html');
main
  }
  return Response.error();
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Zion Notification';
  const options = {
    body: data.body,
    icon: '/vite.svg'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle Web Push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'New message';
  const options = {
    body: data.body,
    icon: '/vite.svg',
    data: data.url
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.notification.data) {
    event.waitUntil(clients.openWindow(event.notification.data));
  }
});
