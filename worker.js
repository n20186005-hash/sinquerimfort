// Native static-asset guard; Astro pages remain fully static.
export default {
 /** @param {Request} request @param {{ASSETS:{fetch(request:Request):Promise<Response>}}} env */
 async fetch(request,env){
  const url=new URL(request.url),head=request.method==='HEAD';
  if(url.hostname==='www.sinquerimfort.com'||(url.hostname==='sinquerimfort.com'&&url.protocol==='http:')){url.protocol='https:';url.hostname='sinquerimfort.com';url.port='';return new Response(null,{status:308,headers:{Location:url.href}});}
  /** @type {Record<string,string>} */
  const aliases={'/index':'/','/index.html':'/','/en':'/en/','/en/index':'/en/','/en/index.html':'/en/'};
  if(['GET','HEAD'].includes(request.method)&&Object.hasOwn(aliases,url.pathname)){url.pathname=aliases[url.pathname];return new Response(null,{status:308,headers:{Location:url.href}});}
  const errorAlias=/^\/(?:en\/)?404(?:\/|\.html)?$/.test(url.pathname);
  let response=await env.ASSETS.fetch(errorAlias?new Request(new URL('/404.html',url),{method:'GET'}):request);
  if(errorAlias||response.status===404){if(!errorAlias)response=await env.ASSETS.fetch(new Request(new URL('/404.html',url),{method:'GET'}));const headers=new Headers(response.headers);headers.delete('Location');headers.set('X-Robots-Tag','noindex');headers.set('Cache-Control','no-store');return new Response(head?null:response.body,{status:404,headers});}
  return head?new Response(null,{status:response.status,headers:response.headers}):response;
 }
};
