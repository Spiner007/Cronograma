const CACHE_NAME = "cronograma-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/Cronograma.css",
    "/Cronograma.js",
    "/imagenes/difinitio.jpg",  
    "/imagenes/Iglesia-Pentecostal-Unida-de-Colombia-Logo-Vector.svg-.png"
];

// Instalación del Service Worker y almacenamiento en caché
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Archivos en caché");
            return cache.addAll(urlsToCache);
        })
    );
});

// Interceptar peticiones y servir desde caché
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Actualizar caché
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Eliminando caché antigua");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
