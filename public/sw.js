// Empty service worker placeholder
self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', (event) => {
  // Pass through - no caching
  event.respondWith(fetch(event.request));
});
