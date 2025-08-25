<<<<<<< HEAD
const CACHE_NAME = 'zion-tech-v1';
const STATIC_CACHE_NAME = 'zion-static-v1';
const DYNAMIC_CACHE_NAME = 'zion-dynamic-v1';
=======
const CACHE_NAME = 'zion-tech-group-v1';
const STATIC_CACHE = 'zion-static-v1';
const DYNAMIC_CACHE = 'zion-dynamic-v1';
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
<<<<<<< HEAD
  '/manifest.json',
  '/favicon.ico',
  '/images/zion-logo.png',
  '/images/placeholder.jpg'
=======
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico'
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
<<<<<<< HEAD
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static files');
=======
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Opened static cache');
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Error caching static files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
<<<<<<< HEAD
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME && 
                cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
=======
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache or network
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

<<<<<<< HEAD
  // Handle different types of requests with appropriate caching strategies
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else if (isHTMLRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
  }
});

// Cache first strategy for static assets
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
    console.error('Cache first strategy failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network first strategy for dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for HTML requests
    if (isHTMLRequest(request)) {
      return caches.match('/offline.html');
    }
    
    return new Response('Offline content not available', { status: 503 });
  }
}

// Helper functions to determine request types
function isStaticAsset(request) {
  const url = new URL(request.url);
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.pathname.startsWith('/graphql');
}

function isHTMLRequest(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith('.html') || 
         url.pathname === '/' || 
         !url.pathname.includes('.');
=======
  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isAPIRequest(request)) {
    event.respondWith(handleAPIRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.pathname.startsWith('/static/') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.includes('.js') ||
    url.pathname.includes('.css') ||
    url.pathname.includes('.png') ||
    url.pathname.includes('.jpg') ||
    url.pathname.includes('.svg') ||
    url.pathname.includes('.ico')
  );
}

// Check if request is for an API
function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') || url.hostname.includes('api.');
}

// Handle static asset requests
async function handleStaticAsset(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Fetch from network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Error handling static asset:', error);
    
    // Return offline fallback for critical assets
    if (request.url.includes('.css')) {
      return new Response('/* Offline CSS */', {
        headers: { 'Content-Type': 'text/css' }
      });
    }
    
    throw error;
  }
}

// Handle API requests
async function handleAPIRequest(request) {
  try {
    // Try network first for API requests
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('API request failed, trying cache:', error);
    
    // Fallback to cache for API requests
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline response
    return new Response(JSON.stringify({
      error: 'Network error',
      message: 'You are offline. Please check your connection.',
      offline: true
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handle page requests
async function handlePageRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Page request failed, trying cache:', error);
    
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page
    return caches.match('/offline.html');
  }
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

<<<<<<< HEAD
async function doBackgroundSync() {
  try {
    // Implement background sync logic here
    // For example, sync offline form submissions
    console.log('Background sync completed');
=======
// Handle background sync
async function doBackgroundSync() {
  try {
    // Get pending actions from IndexedDB
    const pendingActions = await getPendingActions();
    
    for (const action of pendingActions) {
      try {
        await processPendingAction(action);
        await removePendingAction(action.id);
      } catch (error) {
        console.error('Failed to process pending action:', error);
      }
    }
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

<<<<<<< HEAD
=======
// Get pending actions from IndexedDB
async function getPendingActions() {
  // This would typically interact with IndexedDB
  // For now, return empty array
  return [];
}

// Process a pending action
async function processPendingAction(action) {
  // Process different types of actions
  switch (action.type) {
    case 'form-submission':
      return await submitForm(action.data);
    case 'api-call':
      return await makeAPICall(action.data);
    default:
      console.warn('Unknown action type:', action.type);
  }
}

// Submit form data
async function submitForm(formData) {
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (!response.ok) {
    throw new Error('Form submission failed');
  }
  
  return response.json();
}

// Make API call
async function makeAPICall(apiData) {
  const response = await fetch(apiData.url, {
    method: apiData.method || 'GET',
    headers: apiData.headers || {},
    body: apiData.body
  });
  
  if (!response.ok) {
    throw new Error('API call failed');
  }
  
  return response.json();
}

// Remove processed action
async function removePendingAction(actionId) {
  // Remove from IndexedDB
  // For now, just log
  console.log('Removed pending action:', actionId);
}

>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
<<<<<<< HEAD
      icon: '/images/zion-logo.png',
      badge: '/images/zion-logo.png',
=======
      icon: '/favicon.ico',
      badge: '/favicon.ico',
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
<<<<<<< HEAD
          title: 'View',
          icon: '/images/zion-logo.png'
=======
          title: 'View Details',
          icon: '/favicon.ico'
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
        },
        {
          action: 'close',
          title: 'Close',
<<<<<<< HEAD
          icon: '/images/zion-logo.png'
        }
      ]
    };

=======
          icon: '/favicon.ico'
        }
      ]
    };
    
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
<<<<<<< HEAD

=======
  
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
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
<<<<<<< HEAD
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service worker unhandled rejection:', event.reason);
=======
>>>>>>> 516e4ee3bcbb9d3b0209b707c6b86a34fb0cacec
});