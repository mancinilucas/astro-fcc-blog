import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BVIjOdpy.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BwLq8SjL.mjs');
const _page1 = () => import('./chunks/test_kKv1MjS1.mjs');
const _page2 = () => import('./chunks/_slug__dGfdrrUj.mjs');
const _page3 = () => import('./chunks/blog_DwLT0O9F.mjs');
const _page4 = () => import('./chunks/index_BXNB3yu5.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/test.ts", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "db530ab3-94cb-4e31-af24-80918293ff85"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
