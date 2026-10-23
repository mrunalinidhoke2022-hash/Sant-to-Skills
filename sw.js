const C="s2s-v6",F=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png?v=2","./icons/icon-512.png?v=2","./icons/apple-touch-icon.png?v=2","./icons/favicon-32.png?v=2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 if(e.request.mode==="navigate"){
  e.respondWith(fetch(e.request).then(response=>{
   if(!response.ok)throw new Error(`Navigation request failed: ${response.status}`);
   const copy=response.clone();
   caches.open(C).then(cache=>cache.put(e.request,copy)).catch(error=>console.error("Could not refresh the offline page cache.",error));
   return response
  }).catch(error=>{
   console.warn("Using the cached app page because the network is unavailable.",error);
   return caches.match(e.request).then(response=>response||caches.match("./index.html"))
  }));
  return
 }
 e.respondWith(caches.match(e.request).then(response=>response||fetch(e.request).then(networkResponse=>{
  const copy=networkResponse.clone();
  caches.open(C).then(cache=>cache.put(e.request,copy)).catch(error=>console.error("Could not cache the requested asset.",error));
  return networkResponse
 }).catch(error=>{
  console.error("The requested asset could not be loaded.",error);
  return caches.match("./index.html")
 })))
});
