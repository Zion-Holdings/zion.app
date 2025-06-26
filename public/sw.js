// Advanced Service Worker for Zion Tech Marketplace
// Version: 2.1.0

const CACHE_NAME = 'zion-marketplace-v2.1.0'
const STATIC_CACHE = 'zion-static-v2.1.0'
const DYNAMIC_CACHE = 'zion-dynamic-v2.1.0'
const API_CACHE = 'zion-api-v2.1.0'
const IMAGE_CACHE = 'zion-images-v2.1.0'

// Cache duration settings (in seconds)
const CACHE_DURATIONS = {
  static: 30 * 24 * 60 * 60, // 30 days
  dynamic: 7 * 24 * 60 * 60, // 7 days
  api: 5 * 60, // 5 minutes
  images: 14 * 24 * 60 * 60 // 14 days
}

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/manifest.json',
  '/logos/zion-logo.png',
  '/favicon.ico',
  '/_next/static/css/app.css', // Update with actual CSS path
  '/_next/static/js/app.js'    // Update with actual JS path
]

// API endpoints to cache
const CACHEABLE_APIS = [
  '/api/health',
  '/api/categories',
  '/api/products',
  '/api/equipment',
  '/api/talent'
]

// Network-first resources (always try network first)
const NETWORK_FIRST = [
  '/api/auth',
  '/api/user',
  '/api/cart',
  '/api/orders',
  '/api/payment'
]

// Cache-first resources (serve from cache if available)
const CACHE_FIRST = [
  '/logos/',
  '/images/',
  '/icons/',
  '/_next/static/',
  '/toolkit_assets/'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker installing...')
  
  event.waitUntil(
    (async () => {
      try {
        // Open static cache
        const staticCache = await caches.open(STATIC_CACHE)
        
        // Cache static assets
        await staticCache.addAll(STATIC_ASSETS)
        
        console.log('✅ Static assets cached successfully')
        
        // Skip waiting to activate immediately
        self.skipWaiting()
      } catch (error) {
        console.error('❌ Failed to cache static assets:', error)
      }
    })()
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker activating...')
  
  event.waitUntil(
    (async () => {
      try {
        // Get all cache names
        const cacheNames = await caches.keys()
        
        // Delete old caches
        const deletePromises = cacheNames
          .filter(cacheName => {
            return cacheName.startsWith('zion-') && 
                   !cacheName.includes('v2.1.0')
          })
          .map(cacheName => {
            console.log('🗑️ Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          })
        
        await Promise.all(deletePromises)
        
        // Claim all clients
        await self.clients.claim()
        
        console.log('✅ Service Worker activated successfully')
      } catch (error) {
        console.error('❌ Failed to activate service worker:', error)
      }
    })()
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return
  }
  
  event.respondWith(handleRequest(request))
})

// Main request handler
async function handleRequest(request) {
  const url = new URL(request.url)
  const pathname = url.pathname
  
  try {
    // Route to appropriate caching strategy
    if (isNetworkFirst(pathname)) {
      return await networkFirst(request)
    } else if (isCacheFirst(pathname)) {
      return await cacheFirst(request)
    } else if (isAPIRequest(pathname)) {
      return await staleWhileRevalidate(request)
    } else if (isImageRequest(pathname)) {
      return await cacheFirst(request, IMAGE_CACHE)
    } else {
      return await networkFirst(request)
    }
  } catch (error) {
    console.error('❌ Request failed:', pathname, error)
    return await getOfflineFallback(request)
  }
}

// Network-first strategy
async function networkFirst(request, cacheName = DYNAMIC_CACHE) {
  try {
    const response = await fetch(request)
    
    if (response.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, response.clone())
    }
    
    return response
  } catch (error) {
    console.log('📶 Network failed, trying cache for:', request.url)
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    throw error
  }
}

// Cache-first strategy
async function cacheFirst(request, cacheName = STATIC_CACHE) {
  const cachedResponse = await caches.match(request)
  
  if (cachedResponse && !isExpired(cachedResponse)) {
    return cachedResponse
  }
  
  try {
    const response = await fetch(request)
    
    if (response.ok) {
      const cache = await caches.open(cacheName)
      const responseWithTimestamp = addTimestamp(response.clone())
      cache.put(request, responseWithTimestamp)
    }
    
    return response
  } catch (error) {
    if (cachedResponse) {
      console.log('📂 Serving stale cache for:', request.url)
      return cachedResponse
    }
    throw error
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request, cacheName = API_CACHE) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)
  
  // Fetch in background
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  }).catch(error => {
    console.log('📡 Background fetch failed for:', request.url)
    return null
  })
  
  // Return cached response immediately if available
  if (cachedResponse && !isExpired(cachedResponse)) {
    // Still update in background
    fetchPromise
    return cachedResponse
  }
  
  // Otherwise wait for network
  return await fetchPromise || cachedResponse
}

// Check if resource should use network-first strategy
function isNetworkFirst(pathname) {
  return NETWORK_FIRST.some(pattern => pathname.startsWith(pattern))
}

// Check if resource should use cache-first strategy
function isCacheFirst(pathname) {
  return CACHE_FIRST.some(pattern => pathname.startsWith(pattern))
}

// Check if request is for API
function isAPIRequest(pathname) {
  return pathname.startsWith('/api/') && 
         CACHEABLE_APIS.some(pattern => pathname.startsWith(pattern))
}

// Check if request is for images
function isImageRequest(pathname) {
  return /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(pathname) ||
         pathname.includes('/images/') ||
         pathname.includes('/logos/')
}

// Add timestamp to response headers
function addTimestamp(response) {
  const headers = new Headers(response.headers)
  headers.set('sw-cached-at', Date.now().toString())
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  })
}

// Check if cached response is expired
function isExpired(response) {
  const cachedAt = response.headers.get('sw-cached-at')
  if (!cachedAt) return false
  
  const age = Date.now() - parseInt(cachedAt)
  const maxAge = CACHE_DURATIONS.api * 1000 // Convert to milliseconds
  
  return age > maxAge
}

// Get offline fallback
async function getOfflineFallback(request) {
  const url = new URL(request.url)
  
  // Return offline page for navigation requests
  if (request.destination === 'document') {
    const offlineResponse = await caches.match('/offline')
    if (offlineResponse) {
      return offlineResponse
    }
  }
  
  // Return placeholder for images
  if (isImageRequest(url.pathname)) {
    return new Response(
      '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#f3f4f6"/><text x="100" y="100" text-anchor="middle" dy=".3em" fill="#9ca3af">Offline</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    )
  }
  
  // Return generic offline response
  return new Response(
    JSON.stringify({ error: 'Offline', message: 'You are currently offline' }),
    { 
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  console.log('🔄 Background sync triggered:', event.tag)
  
  if (event.tag === 'background-sync') {
    event.waitUntil(processBackgroundSync())
  }
})

// Process background sync
async function processBackgroundSync() {
  try {
    // Get pending sync data from IndexedDB
    const db = await openDB()
    const transaction = db.transaction(['syncQueue'], 'readonly')
    const store = transaction.objectStore('syncQueue')
    const requests = await store.getAll()
    
    for (const syncRequest of requests) {
      try {
        const response = await fetch(syncRequest.url, syncRequest.options)
        
        if (response.ok) {
          // Remove from sync queue
          const deleteTransaction = db.transaction(['syncQueue'], 'readwrite')
          const deleteStore = deleteTransaction.objectStore('syncQueue')
          await deleteStore.delete(syncRequest.id)
          
          console.log('✅ Background sync completed for:', syncRequest.url)
        }
      } catch (error) {
        console.error('❌ Background sync failed for:', syncRequest.url, error)
      }
    }
  } catch (error) {
    console.error('❌ Background sync processing failed:', error)
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return
  
  try {
    const data = event.data.json()
    
    const options = {
      body: data.body || 'New notification from Zion',
      icon: '/logos/zion-logo.png',
      badge: '/logos/zion-logo.png',
      image: data.image,
      data: data.data,
      actions: data.actions || [
        {
          action: 'view',
          title: 'View',
          icon: '/icons/view.png'
        },
        {
          action: 'dismiss',
          title: 'Dismiss',
          icon: '/icons/dismiss.png'
        }
      ],
      requireInteraction: data.requireInteraction || false,
      silent: data.silent || false,
      vibrate: data.vibrate || [200, 100, 200]
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'Zion Notification', options)
    )
  } catch (error) {
    console.error('❌ Push notification error:', error)
  }
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  const action = event.action
  const data = event.notification.data
  
  if (action === 'dismiss') {
    return
  }
  
  // Default action or 'view' action
  const url = data?.url || '/'
  
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      // Check if there's already a window/tab open with the target URL
      for (let client of windowClients) {
        if (client.url === url && 'focus' in client) {
          return client.focus()
        }
      }
      
      // If not, open a new window/tab
      if (clients.openWindow) {
        return clients.openWindow(url)
      }
    })
  )
})

// IndexedDB helper
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('zion-sync-db', 1)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result
      
      if (!db.objectStoreNames.contains('syncQueue')) {
        const store = db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true })
        store.createIndex('timestamp', 'timestamp', { unique: false })
      }
    }
  })
}

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  const { type, payload } = event.data
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting()
      break
      
    case 'GET_VERSION':
      event.ports[0].postMessage({ version: CACHE_NAME })
      break
      
    case 'CACHE_NEW_ROUTE':
      cacheNewRoute(payload.url)
      break
      
    default:
      console.log('Unknown message type:', type)
  }
})

// Cache new route
async function cacheNewRoute(url) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE)
    await cache.add(url)
    console.log('✅ New route cached:', url)
  } catch (error) {
    console.error('❌ Failed to cache new route:', url, error)
  }
}

console.log('🎯 Zion Service Worker v2.1.0 loaded successfully') 