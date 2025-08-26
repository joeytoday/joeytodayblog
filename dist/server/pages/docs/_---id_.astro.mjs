/* empty css                                    */
import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { r as renderEntry } from '../../chunks/_astro_content_dcatdFAQ.mjs';
import { a as $$MediumZoom } from '../../chunks/Comment_Bf4GmHrO.mjs';
import { a as $$TOC } from '../../chunks/PFSearch_CaJCsYjt.mjs';
import { s as sortMDByDate, g as getBlogCollection } from '../../chunks/server_Coezwm2B.mjs';
import { $ as $$ContentLayout } from '../../chunks/ContentLayout_BNWKA9Yh.mjs';
import { $ as $$DocsContents } from '../../chunks/DocsContents_BclNi8K-.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.joeytoday.com");
const prerender = true;
async function getStaticPaths() {
  const posts = sortMDByDate(await getBlogCollection("docs"));
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content, headings } = await renderEntry(post);
  const { description, title } = post.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { description, title }, "back": "/docs", "class": "astro-rguolavm" }, { "bottom": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="mt-5 not-prose my-3 flex flex-col gap-y-2 rounded-xl border px-4 py-3 sm:py-4 astro-rguolavm"> ${renderComponent($$result2, "DocsContents", $$DocsContents, { "class": "astro-rguolavm" })} </div>`, "default": async ($$result2) => renderTemplate`   ${renderComponent($$result2, "Content", Content, { "class": "astro-rguolavm" })}  `, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": async ($$result3) => renderTemplate` <h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl astro-rguolavm"> ${title} </h1> <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-6 text-muted-foreground astro-rguolavm"> ${// Description
  description && renderTemplate`<blockquote class="text-sm italic text-muted-foreground astro-rguolavm"> <q class="astro-rguolavm">${description}</q> </blockquote>`} </div> ` })}`, "sidebar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "sidebar" }, { "default": async ($$result3) => renderTemplate`${!!headings.length && renderTemplate`${renderComponent($$result3, "TOC", $$TOC, { "headings": headings, "class": "astro-rguolavm" })}`}${renderComponent($$result3, "DocsContents", $$DocsContents, { "class": "docs-toc block mt-3 astro-rguolavm" })} ` })}` })} ${renderComponent($$result, "MediumZoom", $$MediumZoom, { "class": "astro-rguolavm" })} `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/[...id].astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/docs/[...id].astro";
const $$url = "/docs/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
