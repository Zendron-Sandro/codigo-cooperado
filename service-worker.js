
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('codigo-cooperado').then(function(cache) {
      return cache.addAll([
        './index.html',
        './icon-512x512.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
