/* empty css                         */
import { e as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { g as getBlogCollection } from './server_DhAiAWxY.mjs';
import { c as cn } from './class-merge_ZZ4CtDft.mjs';
/* empty css                                */

const $$Astro = createAstro("https://www.joeytoday.com");
const prerender = true;
const partial = true;
const $$DocsContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DocsContents;
  const docsCollection = await getBlogCollection("docs");
  const docsByCate = docsCollection.reduce((acc, doc) => {
    const id = doc.id.split("/")[0];
    if (!acc[id]) acc[id] = [];
    acc[id].push(doc);
    return acc;
  }, {});
  const docCategories = {
    setup: "Setup",
    integrations: "Integrations",
    advanced: "Advanced"
  };
  const { title = true, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "docs-toc", "docs-toc", { "class": (cn("not-prose", className) ?? "") + " astro-g432ox24", ...props }, { "default": () => renderTemplate` ${title && renderTemplate`${maybeRenderHead()}<h2 class="text-foreground font-semibold astro-g432ox24">DOCS</h2>`} <ul class="mt-4 flex flex-col gap-y-5 astro-g432ox24"> ${Object.entries(docCategories).map(([id, title2]) => renderTemplate`<li class="astro-g432ox24"> <h3 class="text-muted-foreground text-xs tracking-widest uppercase astro-g432ox24">${title2}</h3> <ul class="mt-2 flex flex-col astro-g432ox24"> ${docsByCate[id].sort((a, b) => a.data.order - b.data.order).map((doc) => renderTemplate`<li class="docs-item flex relative ms-2 px-3 py-1 text-foreground/75 transition-all rounded-2xl astro-g432ox24"> <a class="flex-1 hover:text-foreground astro-g432ox24"${addAttribute(`/docs/${doc.id}`, "href")}> ${doc.data.title} </a> </li>`)} </ul> </li>`)} </ul> ` })}  ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/DocsContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/DocsContents.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/DocsContents.astro";
const $$url = "/docs/DocsContents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DocsContents,
  file: $$file,
  partial,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DocsContents as $, _page as _ };
