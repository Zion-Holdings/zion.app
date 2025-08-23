/* eslint-env serviceworker */
/* global workbox */

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

workbox.routing.registerRoute(
  ({ url }) => url.href.includes('/product_images/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'product-images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ]
  })
);

// Cache documentation pages for offline access
workbox.routing.registerRoute(
  ({ url }) => url.pathname.startsWith('/docs') || url.pathname.startsWith('/resources/docs'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'docs-pages',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      })
    ]
  })
);

let bgSyncPlugin = null;
try {
  bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('apiQueue', {
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
} catch (e) {
  console.warn('BackgroundSync disabled: storage unavailable', e);
}

const networkOnlyOptions = bgSyncPlugin ? { plugins: [bgSyncPlugin] } : {};
workbox.routing.registerRoute(
  ({url, request}) => url.pathname.startsWith('/api/') && request.method !== 'GET',
  new workbox.strategies.NetworkOnly(networkOnlyOptions)
);

workbox.routing.setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match('/offline.html');
  }
  return Response.error();
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Zion Notification';
  const options = {
    body: data.body,
    icon: '/logos/zion-logo.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.notification.data) {
    event.waitUntil(clients.openWindow(event.notification.data));
  }
});

// Manually trigger replay of the Background Sync queue
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SYNC_QUEUE' && bgSyncPlugin) {
    event.waitUntil(
      bgSyncPlugin.queue
        .replayRequests()
        .catch(err => console.error('Background sync replay failed', err))
    );
  }
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.mode === 'navigate' && url.pathname.startsWith('/auth/')) {
    event.respondWith(fetch(event.request));
  }
});
