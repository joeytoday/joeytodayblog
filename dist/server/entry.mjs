import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_wq3aAQTx.mjs';
import { manifest } from './manifest_BYH_ybeO.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/archives.astro.mjs');
const _page4 = () => import('./pages/blog/_---id_.astro.mjs');
const _page5 = () => import('./pages/blog/_---page_.astro.mjs');
const _page6 = () => import('./pages/docs/docscontents.astro.mjs');
const _page7 = () => import('./pages/docs/rss.xml.astro.mjs');
const _page8 = () => import('./pages/docs.astro.mjs');
const _page9 = () => import('./pages/docs/_---id_.astro.mjs');
const _page10 = () => import('./pages/links.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/robots.txt.astro.mjs');
const _page13 = () => import('./pages/rss.xml.astro.mjs');
const _page14 = () => import('./pages/search.astro.mjs');
const _page15 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page16 = () => import('./pages/tags.astro.mjs');
const _page17 = () => import('./pages/terms/copyright.astro.mjs');
const _page18 = () => import('./pages/terms/disclaimer.astro.mjs');
const _page19 = () => import('./pages/terms/list.astro.mjs');
const _page20 = () => import('./pages/terms/privacy-policy.astro.mjs');
const _page21 = () => import('./pages/terms/terms-and-conditions.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/archives/index.astro", _page3],
    ["src/pages/blog/[...id].astro", _page4],
    ["src/pages/blog/[...page].astro", _page5],
    ["src/pages/docs/DocsContents.astro", _page6],
    ["src/pages/docs/rss.xml.ts", _page7],
    ["src/pages/docs/index.astro", _page8],
    ["src/pages/docs/[...id].astro", _page9],
    ["src/pages/links/index.astro", _page10],
    ["src/pages/projects/index.astro", _page11],
    ["src/pages/robots.txt.ts", _page12],
    ["src/pages/rss.xml.ts", _page13],
    ["src/pages/search/index.astro", _page14],
    ["src/pages/tags/[tag]/[...page].astro", _page15],
    ["src/pages/tags/index.astro", _page16],
    ["src/pages/terms/copyright.md", _page17],
    ["src/pages/terms/disclaimer.md", _page18],
    ["src/pages/terms/list.astro", _page19],
    ["src/pages/terms/privacy-policy.md", _page20],
    ["src/pages/terms/terms-and-conditions.md", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d54150bf-3dd4-4287-be6d-29eaea20943a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
