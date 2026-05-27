const CACHE = 'japan-2026-v3';
const CORE = [
  './', './index.html', './data.js', './components.jsx', './map.jsx', './app.jsx',
];

self.addEventListener('install', e =>
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  )
);

self.addEventListener('activate', e =>
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
);

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isLocal = new URL(e.request.url).origin === self.location.origin;

  if (isLocal) {
    // Stale-while-revalidate: serve cached immediately, refresh in background
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(hit => {
          const fresh = fetch(e.request)
            .then(r => { cache.put(e.request, r.clone()); return r; })
            .catch(() => null);
          return hit || fresh;
        })
      )
    );
  } else {
    // CDN: network first, fall back to cache so React/Leaflet/etc work offline
    e.respondWith(
      fetch(e.request)
        .then(r => {
          caches.open(CACHE).then(c => c.put(e.request, r.clone()));
          return r;
        })
        .catch(() => caches.match(e.request).then(hit => hit || Response.error()))
    );
  }
});
