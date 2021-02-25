var cacheName = "petstore-v1";
var cacheFiles = [
    'petstore.html',
    'product.js',
    'petstore.webmanifest',
    'images/cat.jpg',
    'images/dog.jpeg',
    'images/bird.jpeg',
    'images/icon-store-512.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install' );
    e.waitUntil(
        caches.open(cacheName).then((cache) => { 
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
   );
})