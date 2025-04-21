
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('prospect-cost-cache').then(function(cache) {
      return cache.addAll(['./index.html', './style.css', './logo.png']);
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
