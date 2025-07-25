self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  // no offline cache (basic PWA for now)
});
