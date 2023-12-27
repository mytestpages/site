import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_jV1bAkUD.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".menu__burger\"),i=document.querySelector(\".menu__wrapper\");function n(r){if(e&&i){const{classList:t}=e,{classList:c}=i;t.contains(\"active\")?(t.remove(\"active\"),c.remove(\"active\")):(t.add(\"active\"),c.add(\"active\"))}}e&&e.addEventListener(\"click\",n);\n"}],"styles":[{"type":"external","src":"/_astro/_page_.DiDInBdq.css"}],"routeData":{"route":"/articles/[page]","type":"page","pattern":"^\\/articles\\/([^/]+?)\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["page"],"component":"src/pages/articles/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".menu__burger\"),i=document.querySelector(\".menu__wrapper\");function n(r){if(e&&i){const{classList:t}=e,{classList:c}=i;t.contains(\"active\")?(t.remove(\"active\"),c.remove(\"active\")):(t.add(\"active\"),c.add(\"active\"))}}e&&e.addEventListener(\"click\",n);\n"}],"styles":[{"type":"external","src":"/_astro/_page_.DiDInBdq.css"}],"routeData":{"route":"/articles/[slug]","type":"page","pattern":"^\\/articles\\/([^/]+?)\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/articles/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".menu__burger\"),i=document.querySelector(\".menu__wrapper\");function n(r){if(e&&i){const{classList:t}=e,{classList:c}=i;t.contains(\"active\")?(t.remove(\"active\"),c.remove(\"active\")):(t.add(\"active\"),c.add(\"active\"))}}e&&e.addEventListener(\"click\",n);\n"}],"styles":[{"type":"external","src":"/_astro/_page_.DiDInBdq.css"}],"routeData":{"route":"/category/[tag]/articles/[page]","type":"page","pattern":"^\\/category\\/([^/]+?)\\/articles\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}],[{"content":"articles","dynamic":false,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["tag","page"],"component":"src/pages/category/[tag]/articles/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","route":"/","pattern":"^\\/$","segments":[],"params":[],"component":"/","pathname":"/","prerender":false,"redirect":"/articles/1","fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","route":"/articles","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"/articles","pathname":"/articles","prerender":false,"redirect":"/articles/1","fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/DISK D/Антоша/STUDIYNG/APPS/news-website/client/src/pages/articles/[page].astro",{"propagation":"none","containsHead":true}],["D:/DISK D/Антоша/STUDIYNG/APPS/news-website/client/src/pages/articles/[slug].astro",{"propagation":"none","containsHead":true}],["D:/DISK D/Антоша/STUDIYNG/APPS/news-website/client/src/pages/category/[tag]/articles/[page].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/articles/[page]@_@astro":"pages/articles/_page_.astro.mjs","\u0000@astro-page:src/pages/articles/[slug]@_@astro":"pages/articles/_slug_.astro.mjs","\u0000@astro-page:src/pages/category/[tag]/articles/[page]@_@astro":"pages/category/_tag_/articles/_page_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/articles/[slug].astro":"chunks/pages/_slug__rIKVdACp.mjs","\u0000@astrojs-manifest":"manifest_t-wqhgUt.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.9NpwYg1l.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
