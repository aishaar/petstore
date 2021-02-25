var cacheName = "petstore-v1";
var cacheFiles = [
    'petstore.html',
    'product.js',
    'petstore.webmanifest',
    'Images/cat.jpg',
    'Images/dog.jpeg',
    'Images/bird.jpeg',
    'Images/icon-store-512.png'
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