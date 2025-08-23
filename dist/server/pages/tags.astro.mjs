/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CTfvycMK.mjs';
import 'kleur/colors';
import { g as getBlogCollection, c as getUniqueTagsWithCount } from '../chunks/server_DSktSB39.mjs';
import { $ as $$Button } from '../chunks/Svg_BVt06kNw.mjs';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CiqShqGj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getBlogCollection();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the topics I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Tags</h1> </div> <div id="content" class="animate"> ${allTags.length > 0 ? renderTemplate`<ul class="flex flex-wrap gap-4"> ${allTags.map(([tag, val]) => renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "href": `/tags/${tag}`, "style": "pill", "class": cn(
    "items-start gap-x-1",
    val > 2 ? "rounded-xl px-3 py-1 text-xl" : val > 1 && "text-lg"
  ) }, { "default": async ($$result3) => renderTemplate`${tag}<span${addAttribute(val > 2 ? "text-base" : "text-xs", "class")}>${val}</span> ` })} </li>`)} </ul>` : renderTemplate`<p>Any tag yet.</p>`} </div> </main> ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/tags/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
