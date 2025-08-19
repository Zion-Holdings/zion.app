const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/vite.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

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
  }
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(() => {
        const accepts = event.request.headers.get('accept') || '';
        if (event.request.mode === 'navigate' || accepts.includes('text/html')) {
          return caches.match('/offline.html');
        }
      });
    })
  );
});

// Display notifications from push events
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Zion Notification';
  const options = {
    body: data.body,
    icon: '/vite.svg'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
