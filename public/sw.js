// This classic script runs in a service-worker scope, not the page Window.
const retirementWorker=/** @type {{skipWaiting():Promise<void>;registration:{unregister():Promise<boolean>};addEventListener(type:string,listener:(event:{waitUntil(promise:Promise<unknown>):void})=>void):void}} */(/** @type {unknown} */(self));
retirementWorker.addEventListener('install',()=>retirementWorker.skipWaiting());
retirementWorker.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sinquerim-fort-')).map(k=>caches.delete(k)))).then(()=>retirementWorker.registration.unregister())));
