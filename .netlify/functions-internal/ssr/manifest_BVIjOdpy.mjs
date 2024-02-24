import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './chunks/astro__vVzI8bq.mjs';
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
    }),
    isIndex: rawRouteData.isIndex
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
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test.ts","pathname":"/api/test","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/blog.gRYbr8FG.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DqR2iBSn.js"}],"styles":[{"type":"external","src":"/_astro/blog.gRYbr8FG.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/dev/wsjs/fc-astro/fcc-astro/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/dev/wsjs/fc-astro/fcc-astro/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/dev/wsjs/fc-astro/fcc-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/blog.astro":"chunks/pages/blog_C2vf3lCZ.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Bn3EoBnh.mjs","/src/pages/api/test.ts":"chunks/pages/test__hfpPs88.mjs","/src/pages/index.astro":"chunks/prerender_7YRCxO1K.mjs","\u0000@astrojs-manifest":"manifest_BVIjOdpy.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BwLq8SjL.mjs","\u0000@astro-page:src/pages/api/test@_@ts":"chunks/test_kKv1MjS1.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__dGfdrrUj.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_DwLT0O9F.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BXNB3yu5.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/behind-the-scenes-with-our-artists.mdx?astroContentCollectionEntry=true":"chunks/behind-the-scenes-with-our-artists_L0kC_m2P.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/collaboration-in-music-production.md?astroContentCollectionEntry=true":"chunks/collaboration-in-music-production_BGefGFOP.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/creating-a-successful-music-brand.md?astroContentCollectionEntry=true":"chunks/creating-a-successful-music-brand_CTYNu4iF.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/gear-is-insanely-expensive.md?astroContentCollectionEntry=true":"chunks/gear-is-insanely-expensive_DNw-UtMf.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/guitar-solos-are-still-awesome.md?astroContentCollectionEntry=true":"chunks/guitar-solos-are-still-awesome_D6s0Zwpc.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/live-music-is-crucial.md?astroContentCollectionEntry=true":"chunks/live-music-is-crucial_C3dChIkh.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/making-a-home-studio.md?astroContentCollectionEntry=true":"chunks/making-a-home-studio_Drgr7NQZ.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/the-art-of-music-production.md?astroContentCollectionEntry=true":"chunks/the-art-of-music-production_CAYeGLpa.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/the-importance-of-audio-quality.md?astroContentCollectionEntry=true":"chunks/the-importance-of-audio-quality_CB-jNVI4.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/tune-your-snare-drum.md?astroContentCollectionEntry=true":"chunks/tune-your-snare-drum_BwV2HKcn.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/behind-the-scenes-with-our-artists.mdx?astroPropagatedAssets":"chunks/behind-the-scenes-with-our-artists_DPp1Chjl.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/collaboration-in-music-production.md?astroPropagatedAssets":"chunks/collaboration-in-music-production_CxQFNS2h.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/creating-a-successful-music-brand.md?astroPropagatedAssets":"chunks/creating-a-successful-music-brand_Cb-hqw08.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/gear-is-insanely-expensive.md?astroPropagatedAssets":"chunks/gear-is-insanely-expensive_BgP2LcFS.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/guitar-solos-are-still-awesome.md?astroPropagatedAssets":"chunks/guitar-solos-are-still-awesome_B4ERYm09.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/live-music-is-crucial.md?astroPropagatedAssets":"chunks/live-music-is-crucial_DA3wryPj.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/making-a-home-studio.md?astroPropagatedAssets":"chunks/making-a-home-studio_DdRK2Mly.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/the-art-of-music-production.md?astroPropagatedAssets":"chunks/the-art-of-music-production_AQ5nhJQB.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/the-importance-of-audio-quality.md?astroPropagatedAssets":"chunks/the-importance-of-audio-quality_DxbZrmm3.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/tune-your-snare-drum.md?astroPropagatedAssets":"chunks/tune-your-snare-drum_D7ZwtUbs.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/behind-the-scenes-with-our-artists.mdx":"chunks/behind-the-scenes-with-our-artists_CTvhVUd1.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/collaboration-in-music-production.md":"chunks/collaboration-in-music-production_55n3-XVS.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/creating-a-successful-music-brand.md":"chunks/creating-a-successful-music-brand_CbQeq4kZ.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/gear-is-insanely-expensive.md":"chunks/gear-is-insanely-expensive_Bp5SNFlv.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/guitar-solos-are-still-awesome.md":"chunks/guitar-solos-are-still-awesome_C9J68RV1.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/live-music-is-crucial.md":"chunks/live-music-is-crucial_DIN4cMcG.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/making-a-home-studio.md":"chunks/making-a-home-studio_B8k4sL4U.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/the-art-of-music-production.md":"chunks/the-art-of-music-production_BjIkhDdu.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/the-importance-of-audio-quality.md":"chunks/the-importance-of-audio-quality_BtYFtC4H.mjs","D:/dev/wsjs/fc-astro/fcc-astro/src/content/posts/tune-your-snare-drum.md":"chunks/tune-your-snare-drum_FLep-0CM.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DqR2iBSn.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/record.CRzfKz-P.jpg","/_astro/gear.CFQSK5TA.jpg","/_astro/producer.BL9OIBzv.jpg","/_astro/band.CMKc0NPe.jpg","/_astro/speaker.CYZBuHP8.jpg","/_astro/guitarist.B83iMcFz.jpg","/_astro/drums.CKG6fYl0.jpg","/_astro/concert.CSJ1K1HT.jpg","/_astro/photoshoot.CS3kpkvt.jpg","/_astro/studio.LDnkyfMd.jpg","/_astro/blog.gRYbr8FG.css","/favicon.svg","/heartbeat.png","/_astro/hoisted.DqR2iBSn.js","/index.html"],"buildFormat":"directory"});

export { manifest };
