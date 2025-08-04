/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as renderSlot, F as Fragment } from '../../chunks/astro/server_BC3yFm5u.mjs';
import 'kleur/colors';
import { r as renderEntry } from '../../chunks/_astro_content_mkw-c5Qg.mjs';
import { s as sortMDByDate, g as getBlogCollection } from '../../chunks/server_B7EQo4xx.mjs';
/* empty css                                   */
import { a as $$MediumZoom, $ as $$Comment } from '../../chunks/Comment_s8458AMA.mjs';
import { a as $$TOC, b as $$Hero, c as $$Copyright, d as $$ArticleBottom } from '../../chunks/PFSearch_BfpJrUTt.mjs';
import { $ as $$ContentLayout } from '../../chunks/ContentLayout_BV3VeQmx.mjs';
import '../../chunks/BaseLayout_yPSKZ3vk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    post: { id, data },
    posts,
    headings,
    remarkPluginFrontmatter
  } = Astro2.props;
  const {
    description,
    heroImage,
    publishDate,
    title,
    updatedDate,
    draft: isDraft,
    comment: enableComment
  } = data;
  const socialImage = heroImage ? typeof heroImage.src === "string" ? heroImage.src : heroImage.src.src : "/images/social-card.png";
  const articleDate = updatedDate?.toISOString() ?? publishDate.toISOString();
  const primaryColor = data.heroImage?.color ?? "hsl(var(--primary) / var(--un-text-opacity))";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { articleDate, description, ogImage: socialImage, title }, "highlightColor": primaryColor, "back": "/blog" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "bottom" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Copyright", $$Copyright, { "data": data })} ${renderComponent($$result3, "ArticleBottom", $$ArticleBottom, { "collections": posts, "id": id, "class": "mt-3 sm:mt-6" })} ${!isDraft && enableComment && renderTemplate`${renderComponent($$result3, "Comment", $$Comment, { "class": "mt-3 sm:mt-6" })}`}` })}`, "bottom-sidebar": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom-sidebar"])}`, "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "data": data, "remarkPluginFrontmatter": remarkPluginFrontmatter, "slot": "header" })}`, "sidebar": ($$result2) => renderTemplate`${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings, "slot": "sidebar" })}`}` })} ${renderTemplate`${renderComponent($$result, "MediumZoom", $$MediumZoom, {})}`}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://astro-pure.js.org");
const prerender = true;
async function getStaticPaths() {
  const posts = sortMDByDate(await getBlogCollection());
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post, posts }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post, posts } = Astro2.props;
  const { Content, headings, remarkPluginFrontmatter } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "PostLayout", $$BlogPost, { "post": post, "posts": posts, "headings": headings, "remarkPluginFrontmatter": remarkPluginFrontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/blog/[...id].astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/blog/[...id].astro";
const $$url = "/blog/[...id]";

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
