self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mws-restaurant-stage-1').then(cache => {
            return cache.addAll([
                '/',
                '/css/styles.css',
                '/js/main.js',
                '/js/dbhelper.js',
                '/restaurant.html',
                '/data/restaurants.json',
                '/img/',
                '/js/restaurant_info.js'
                ]);
        }));
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }));
});