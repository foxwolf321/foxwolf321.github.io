const CACHE_NAME = 'physics-g-cards-v2-1-0';
const CORE = [
  '/physics-g-cards/',
  '/physics-g-cards/index.html',
  '/physics-g-cards/manifest.webmanifest',
  '/physics-g-cards/icon-192.png',
  '/physics-g-cards/icon-512.png',
  '/physics-g-cards/bg-bike-physics.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).catch(() => null));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.includes('physics-g-cards') && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('/physics-g-cards/index.html', copy));
          return res;
        })
        .catch(() => caches.match('/physics-g-cards/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return res;
    }).catch(() => cached))
  );
});
