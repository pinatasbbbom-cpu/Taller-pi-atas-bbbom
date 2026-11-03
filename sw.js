const CN='bbbom-v5',X='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CN).then(async c=>{await c.addAll(['./','index.html','manifest.json','icon.svg','icon-192.png','logo.png']);try{await c.add(new Request(X,{mode:'no-cors'}))}catch(_){}}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=CN).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!='GET'||u.hostname.endsWith('supabase.co'))return;
e.respondWith(caches.match(e.request).then(c=>{const f=fetch(e.request).then(r=>{if(r.ok||r.type=='opaque'){const cl=r.clone();caches.open(CN).then(x=>x.put(e.request,cl))}return r}).catch(()=>c);return c||f}))});
