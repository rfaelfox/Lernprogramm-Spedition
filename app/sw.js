// Service Worker: macht die App offline nutzbar.
// Strategie: Netzwerk zuerst (damit Aktualisierungen sofort ankommen), bei fehlender Verbindung
// der zwischengespeicherte Stand. Beim Installieren werden App und alle Lerninhalte vorgeladen.
const CACHE = 'lernprogramm-v1';
const CORE = [
  './', './index.html', './manifest.webmanifest', './config.js', './version.js', './css/app.css',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './js/main.js', './js/util.js', './js/md.js', './js/db.js', './js/store.js', './js/content.js', './js/grading.js',
  './js/learning.js', './js/sync.js', './js/supabase.js', './js/ui.js', './js/sheetgen.js', './js/planner.js', './js/tasks-ui.js', './js/charts.js',
  './js/views/dashboard.js', './js/views/learn.js', './js/views/cards.js', './js/views/practice.js', './js/views/sheets.js',
  './js/views/grades.js', './js/views/plan.js', './js/views/materials.js', './js/views/lexicon.js', './js/views/search.js',
  './js/views/mistakes.js', './js/views/coverage.js', './js/views/settings.js',
  './content/curriculum.js', './content/sources.js', './content/units/index.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE.map((u) => new Request(u, { cache: 'reload' })));
    // Lerneinheiten aus dem Inhaltsverzeichnis vorladen
    try {
      const txt = await (await fetch('./content/units/index.js', { cache: 'reload' })).text();
      const ids = Array.from(txt.matchAll(/'([a-z0-9-]+)'/g), (m) => m[1]);
      await c.addAll(ids.map((id) => new Request(`./content/units/${id}.js`, { cache: 'reload' })));
    } catch (err) { /* Inhalte werden dann beim ersten Öffnen zwischengespeichert */ }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && k !== CACHE + '-lib' && k.startsWith('lernprogramm-')) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {
    // Bibliotheken von CDNs (OCR, PDF, Word) nach dem ersten Laden offline bereithalten
    if (/cdn\.jsdelivr\.net|unpkg\.com|cdnjs\.cloudflare\.com/.test(url.host)) e.respondWith(cacheFirst(req));
    return; // Supabase-Anfragen nie zwischenspeichern
  }
  e.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const c = await caches.open(CACHE);
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 4000);
    const res = await fetch(req, { signal: ctl.signal, cache: 'no-cache' });
    clearTimeout(t);
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch {
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
    if (req.mode === 'navigate') return (await c.match('./index.html')) || Response.error();
    return Response.error();
  }
}
async function cacheFirst(req) {
  const c = await caches.open(CACHE + '-lib');
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) c.put(req, res.clone());
  return res;
}
