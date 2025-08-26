/* empty css                                    */
import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { $ as $$PostPreview, e as $$Paginator } from '../../chunks/PFSearch_DUjq_rep.mjs';
import { s as sortMDByDate, g as getBlogCollection, b as getUniqueTags } from '../../chunks/server_CIY9VcqT.mjs';
import { $ as $$Button, d as $$Icon } from '../../chunks/Svg_aXW9aLqX.mjs';
import { $ as $$BaseLayout, c as config } from '../../chunks/BaseLayout_CXqJ5sHM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.joeytoday.com");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  const collections = sortMDByDate(await getBlogCollection());
  const uniqueTags = getUniqueTags(collections);
  const collectionsCount = collections.length;
  return paginate(collections, {
    pageSize: config.content.blogPageSize,
    props: { uniqueTags, collectionsCount }
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, uniqueTags, collectionsCount } = Astro2.props;
  const meta = {
    description: "Some posts or archives of my blog",
    title: "Blog"
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous `,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next \u2192`,
        url: page.url.next
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 mt-6 text-3xl font-medium sm:mt-10">Blog</h1> </div> ${page.data.length === 0 ? renderTemplate`<p>No posts yet.</p>` : renderTemplate`<div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"> <section aria-label="Blog posts list" class="animate" id="content">  <div class="mb-3 flex flex-col justify-between text-sm sm:mb-5 sm:flex-row"> <span class="text-muted-foreground">
Page ${page.currentPage} - Showing ${page.data.length} of ${collectionsCount} Posts
</span> <a aria-label="View all blog by years" href="/archives" data-astro-prefetch>
View all posts →
</a> </div>  <ul class="flex flex-col gap-y-4 text-start"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "detailed": true })}`)} </ul> ${renderComponent($$result2, "Paginator", $$Paginator, { ...paginationProps })} </section>  ${!!uniqueTags.length && renderTemplate`<aside class="animate" id="sidebar"> <h2 class="mb-4 flex items-center text-lg font-semibold"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tag-2", "class": "me-2" })}
Tags
</h2> <ul class="text-bgColor flex flex-wrap gap-2"> ${uniqueTags.map((tag) => renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "title": tag, "href": `/tags/${tag}`, "style": "pill" })} </li>`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all blog categories" href="/tags" data-astro-prefetch>
View all →
</a> </span> </aside>`} </div>`} </main> ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/blog/[...page].astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

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
