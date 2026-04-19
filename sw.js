/* ================================================
   スタディクエスト Service Worker
   - 静的アセット: Cache First（高速表示）
   - index.html: Network First（常に最新版）
   - 外部API(Supabase/Google等): キャッシュしない
   ================================================ */

const VERSION = 'sq-v4';
const STATIC_CACHE = VERSION + '-static';
const RUNTIME_CACHE = VERSION + '-runtime';

// インストール時にキャッシュするファイル
const PRECACHE_URLS = [
  '/study-quest/',
  '/study-quest/index.html',
  '/study-quest/manifest.json',
  '/study-quest/icons/icon.svg',
  '/study-quest/icons/app-icon.png',
];

// キャッシュしない外部ドメイン
const BYPASS_DOMAINS = [
  'supabase.co',
  'googleapis.com',
  'googletagmanager.com',
  'fonts.gstatic.com',
  'api.qrserver.com',
  'jsdelivr.net',
  'unpkg.com',
];

// ─── インストール ───
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ─── アクティベート（古いキャッシュ削除）───
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ─── フェッチ ───
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 外部APIはスルー
  if (BYPASS_DOMAINS.some(d => url.hostname.includes(d))) return;
  // 同一オリジン以外もスルー
  if (url.origin !== self.location.origin) return;
  // POST等はスルー
  if (event.request.method !== 'GET') return;

  // index.html / ルート → Network First（常に最新を優先、失敗時はキャッシュ）
  if (url.pathname === '/study-quest/' || url.pathname.endsWith('index.html')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // 静的アセット → Cache First
  event.respondWith(cacheFirst(event.request));
});

// Network First: ネット優先、失敗時キャッシュにフォールバック
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || offlineFallback();
  }
}

// Cache First: キャッシュ優先、なければネット取得してキャッシュ
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return offlineFallback();
  }
}

// オフライン時フォールバック
function offlineFallback() {
  return new Response(
    `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>オフライン | スタディクエスト</title>
    <style>
      body{font-family:sans-serif;display:flex;flex-direction:column;align-items:center;
        justify-content:center;min-height:100vh;background:#F8F9FA;color:#1A202C;text-align:center;padding:20px;}
      h1{font-size:48px;margin-bottom:8px;}
      p{color:#718096;font-size:15px;line-height:1.7;}
      button{margin-top:24px;padding:12px 28px;background:#8CC63F;color:#fff;
        border:none;border-radius:100px;font-size:14px;cursor:pointer;}
    </style></head><body>
    <h1>⚔</h1>
    <h2>オフラインです</h2>
    <p>インターネット接続を確認してください。<br>記録はオンライン復帰後に同期されます。</p>
    <button onclick="location.reload()">再読み込み</button>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}
