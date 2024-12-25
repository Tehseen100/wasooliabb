// const CACHE_NAME = 'offline-cache';
// const OFFLINE_URL = 'https://logicslabs.com/offline.html'; 
// const OFFLINE_ASSETS = [
//     OFFLINE_URL,
//     'https://logicslabs.com/assets/css/style.css',
//     'https://logicslabs.com/assets/css/bootstrap.min.css',
//     'https://logicslabs.com/assets/img/logo.png' 
// ];

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => {
//                 return cache.addAll(OFFLINE_ASSETS)
//                     .catch(error => {
//                         console.error('Failed to cache offline assets during install:', error);
//                     });
//             })
//     );
// });


// self.addEventListener('fetch', event => {
//     event.respondWith(
//         fetch(event.request)
//             .then(response => {
//                 const responseClone = response.clone();
                
//                 caches.open(CACHE_NAME).then(cache => {
//                     cache.put(event.request, responseClone);
//                 });
                
//                 return response;
//             })
//             .catch(() => {
//                 return caches.match(event.request).then(cachedResponse => {
//                     return cachedResponse || caches.match(OFFLINE_URL);
//                 });
//             })
//     );
// });




const CACHE_NAME = 'offline-cache';
const OFFLINE_URL = 'https://wasooliabb.netlify.app/offline.html'; 
const OFFLINE_ASSETS = [
    OFFLINE_URL,
    'https://wasooliabb.netlify.app/assets/imgs/offline.png',
    'https://wasooliabb.netlify.app/js/reload.js' 
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(OFFLINE_ASSETS)
                    .catch(error => {
                        console.error('Failed to cache offline assets during install:', error);
                    });
            })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') { 
        event.respondWith(
            fetch(event.request)
                .catch(() => caches.match(OFFLINE_URL))
        );
    } else {
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
    }
});
