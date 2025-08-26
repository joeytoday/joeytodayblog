/* empty css                                 */
import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { $ as $$Button, d as $$Icon } from '../chunks/Svg_aXW9aLqX.mjs';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
import { $ as $$BaseLayout, i as integ } from '../chunks/BaseLayout_CXqJ5sHM.mjs';
import { $ as $$DocsContents } from '../chunks/DocsContents_DrtqZHZv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.joeytoday.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const meta = {
    title: "Docs",
    description: "Docs content documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Docs of Astro Theme Pure</h1> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integ.typography.class), "class")}> <h2 class="text-xl font-medium">Theme documentation</h2> ${renderComponent($$result2, "DocsContents", $$DocsContents, { "title": false })} <h2 class="text-xl font-medium">Feedback</h2> <p>
If you have any problems, you can check <a href="https://github.com/cworld1/astro-theme-pure/issues" target="_blank">Github Issues</a> for community support.
</p> <h2 class="text-xl font-medium">News Describe (Alpha)</h2> <p> <a href="/docs/rss.xml" target="_blank">${renderComponent($$result2, "Icon", $$Icon, { "name": "rss" })} </a> </p> </div> </main> ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/index.astro";
const $$url = "/docs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
