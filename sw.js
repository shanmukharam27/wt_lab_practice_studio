const CACHE="wt-lab-v3";
const CORE=["./","./index.html","./data.js","./manifest.webmanifest"];
const CDN=[
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/material-darker.min.css",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/xml/xml.min.js",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/css/css.min.js",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/htmlmixed/htmlmixed.min.js",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/clike/clike.min.js",
"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/php/php.min.js"
];
self.addEventListener("install",e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE);await Promise.all(CDN.map(async u=>{try{const r=await fetch(u,{mode:"no-cors"});await c.put(u,r)}catch(_){}}));self.skipWaiting()})()));
self.addEventListener("activate",e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;e.respondWith((async()=>{const cached=await caches.match(e.request);if(cached)return cached;try{const r=await fetch(e.request);if(u.origin===location.origin){const c=await caches.open(CACHE);c.put(e.request,r.clone())}return r}catch(_){return caches.match("./index.html")}})())});
