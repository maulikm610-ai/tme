const CACHE_NAME = 'tme-cache-v3'; // વર્ઝન બદલ્યું એટલે કેશ ક્લિયર થશે

self.addEventListener('install', function(event) {
    self.skipWaiting(); // જૂની એપને તરત જ કિલ કરીને નવી એપ લોડ કરશે
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName); // જૂની બધી મેમરી સાફ
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    // નોર્મલ ફેચ
});
