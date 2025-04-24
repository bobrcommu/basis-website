// Evere Memorial Service Worker
// Implements various caching strategies for different asset types

const CACHE_NAME = 'evere-cache-v1';
const STATIC_CACHE = 'evere-static-v1';
const API_CACHE = 'evere-api-v1';
const PAGE_CACHE = 'evere-pages-v1';

// Resources to pre-cache
const PRECACHE_URLS = [
  '/',
  '/offline',
  '/evereicon.png',
  '/EVEREICON1.png',
  '/EVERELOGOWHITE.png',
  '/manifest.json',
  '/robots.txt',
  '/everefront.png'
];

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/optimized/logonew.webp',
  '/optimized/everefront.webp',
  '/optimized/herobg.webp',
  '/favicon.ico',
  '/manifest.json'
];

// Assets that should always be cached
const CACHE_ALWAYS = [
  /\.(woff2|ttf|otf|eot)$/,
  /\.(jpg|jpeg|png|gif|webp|avif|svg)$/,
  /\.(css)$/
];

// Assets that should be cached with network first, then cache fallback
const NETWORK_FIRST = [
  /\/api\//,
  /\.(js)$/
];

// Install event - precache static resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [STATIC_CACHE, API_CACHE, PAGE_CACHE];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper: Check if URL matches any of the patterns
const matchesPatterns = (url, patterns) => {
  return patterns.some(pattern => {
    return typeof pattern === 'string' 
      ? url.includes(pattern) 
      : pattern.test(url);
  });
};

// Fetch event - implement different caching strategies
self.addEventListener('fetch', event => {
  const url = event.request.url;
  
  // Skip cross-origin requests
  if (!url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Cache-first strategy for static assets
  if (matchesPatterns(url, CACHE_ALWAYS)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Put in cache if the response is valid
            if (response.ok) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
        });
      })
    );
    return;
  }
  
  // Network-first strategy for API and JS files
  if (matchesPatterns(url, NETWORK_FIRST)) {
    event.respondWith(
      fetch(event.request).then((response) => {
        // Put in cache if the response is valid
        if (response.ok) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      }).catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
    );
    return;
  }
  
  // Default strategy: stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response immediately if available
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // Update cache with fresh response
          if (networkResponse.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If both cache and network fail, return offline fallback
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
          return null;
        });
      
      return cachedResponse || fetchPromise;
    })
  );
});

// Handle push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: '/evereicon.png',
    badge: '/evereicon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'View Memorial',
        icon: '/evereicon.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('EverE Memorial Update', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://evere.io')
  );
});
