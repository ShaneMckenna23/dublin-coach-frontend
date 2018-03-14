self.addEventListener('fetch', function fetcher (event) {
  var request = event.request;
  // check if request
  if (request.url.indexOf('cloud.squidex.io') > -1) {
    // squidex asset detected
    event.respondWith(
      caches.match(event.request).then(function(response) {
        // return from cache, otherwise fetch from network
        return response || fetch(request);
      })
    );
  }
  // otherwise: ignore event
});
