// v2.2.0: 開発安定化のため、index.html側ではこのService Workerを登録しません。
// 古いService Workerが残っている場合に備え、登録されても即時反映・古いキャッシュ削除だけ行います。
const CACHE_NAME = 'physics-g-cards-v2-2-0-disabled';
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.includes('physics-g-cards')).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
