const CACHE_NAME = 'offline-map-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://unpkg.com/leaflet/dist/leaflet.css',
  'https://unpkg.com/leaflet/dist/leaflet.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
