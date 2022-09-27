const CACHE_NAME = "version_1";
const urlsToCache = ["index.html", "offline.html"];

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    )
})

this.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => (
                fetch(e.request)
                    .catch(() => caches.match('offline.html'))
            ))
    )
})

this.addEventListener('activate', e => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    e.waitUntil(
        caches.keys()
            .then(cacheNames => Promisse.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhiteList.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            ))
    )
})