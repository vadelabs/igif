importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    /.*\.css/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache'
    })
);

workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif|webm|webp|avif|mp4)/,
    new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60
            })
        ]
    })
);
