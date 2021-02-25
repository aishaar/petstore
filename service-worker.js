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
});

/*self.addEventListener('fetch', function (e) {
    e.respondWith(
        //check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resources:' + e.request.url );
            //'r' is the matching file if it exists in the cache
            return r
        })
    );
});*/

self.addEventListener('fetch', function (e) {
    e.respondWith(
        //check if the cache has the file
        caches.match(e.request).then(function (r) {
            //Downloading the file if it is not in the cache
            return r || fetch(e.request).then(function(response)
            {
                //add the new files to cache
                return caches.open(cacheName).then(function(cache)
                {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});