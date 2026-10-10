const CACHE = 'suraxha-v10';
const FILES = ['./', 'index.html', 'style.css', 'app.js', 'data/rules.js',
  'manifest.json', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Show the saved copy instantly, and quietly fetch a fresh copy for next time.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(cache =>
    cache.match(e.request).then(saved => {
      const fresh = fetch(e.request).then(res => { cache.put(e.request, res.clone()); return res; }).catch(() => saved);
      return saved || fresh;
    })));
});
