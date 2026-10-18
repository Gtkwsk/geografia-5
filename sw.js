/* Czytam mapę — service worker.
   Strategia „najpierw sieć”: gdy jest internet, zawsze pobierana jest najnowsza wersja
   (i odkładana do pamięci podręcznej). Pamięć podręczna służy tylko wtedy, gdy sieci brak.
   Przy zmianie plików wystarczy podbić VERSION — stare pamięci zostaną usunięte. */
const VERSION = 'czytam-mape-v2';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './fonts/BricolageGrotesque-normal-var-latin-ext.woff2',
  './fonts/BricolageGrotesque-normal-var-latin.woff2',
  './fonts/IBMPlexMono-normal-400-latin-ext.woff2',
  './fonts/IBMPlexMono-normal-400-latin.woff2',
  './fonts/IBMPlexMono-normal-600-latin-ext.woff2',
  './fonts/IBMPlexMono-normal-600-latin.woff2',
  './fonts/SourceSans3-italic-400-latin-ext.woff2',
  './fonts/SourceSans3-italic-400-latin.woff2',
  './fonts/SourceSans3-normal-var-latin-ext.woff2',
  './fonts/SourceSans3-normal-var-latin.woff2',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true })
        .then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
