// v3.0.0 年間固定版: キャッシュ事故を避けるため、index.htmlからは登録しません。
const CACHE_NAME='physics-g-cards-v3-0-0-disabled';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.includes('physics-g-cards')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
