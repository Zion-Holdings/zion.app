const OFFLINE_URL = '/offline.html';
const CACHE_NAME = 'zion-site-static-v1';
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
];

const shouldCache = (url) => {
  try {
    const u = new URL(url, 'http://localhost');
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (!shouldCache(request.url)) return;
  if (request.method !== 'GET') return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL)))
  );
});
