self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf('cloud.squidex.io') > -1) {
    event.respondWith(
      caches.open(cacheName).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});
