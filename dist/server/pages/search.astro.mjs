/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { h as $$PFSearch } from '../chunks/PFSearch_DUjq_rep.mjs';
import { $ as $$Button } from '../chunks/Svg_aXW9aLqX.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CXqJ5sHM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    description: "Search relative posts of the whole blog",
    title: "Search"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Search</h1> </div> <div id="content" class="animate"> ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p>Enter a search term or phrase to search the blog.</p> ${renderComponent($$result3, "PFSearch", $$PFSearch, {})} ` })}` } </div> </main> ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/search/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
