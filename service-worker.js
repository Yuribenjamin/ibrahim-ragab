let cacheName = 'ibrahim-Ragab-cache';
let cacheFiles = [
    './',
    'index.html',
    'css/app.css',
    'js/app.js',
    'js/canvas.js',
    'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
]

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((x) => {
        return x.addAll(cacheFiles);
    })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((y) => {
            return Promise.all(
                y.filter(y => y !== cacheName).map(y => caches.delete(y))
            )
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(cacheName)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });