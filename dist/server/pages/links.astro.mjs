/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { $ as $$FriendList, l as links } from '../chunks/FriendList_vv8oryJ6.mjs';
import { c as config } from '../chunks/_virtual_config_BIqm0lli.mjs';
import { $ as $$Comment } from '../chunks/Comment_D1PzXhjc.mjs';
import { b as $$Collapse, c as $$Timeline } from '../chunks/Svg_aXW9aLqX.mjs';
import { $ as $$CommonPage } from '../chunks/CommonPage_DRaQRbWT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "common-links", text: "Common Links" },
    { depth: 2, slug: "special-links", text: "Special Links" },
    { depth: 2, slug: "apply-links", text: "Apply Links" }
  ];
  const { friends } = links;
  const linksConf = config.integ.links;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Links", "headings": headings, "info": "/links" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "slot": "bottom" })}`, "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>欢迎看看👉<a href="https://note.joeytoday.com/">📒 我的笔记</a></p><p>怎么可能有顺序呢，当然是随机的~ It's random.</p><h2 id="common-links">Common Links</h2>${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[0] })}${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Links with Bad Status" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "FriendList", $$FriendList, { "list": friends[1] })}` })}${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Link History Book" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Timeline", $$Timeline, { "events": linksConf.logbook })}` })}<h2 id="special-links">Special Links</h2>${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[2] })}<h2 id="apply-links">Apply Links</h2><p>本站信息如下 The site information（点击快速复制）：</p><blockquote class="not-prose grid grid-cols-[auto_1fr] gap-x-2 break-words border-s-4 ps-4">${linksConf.applyTip.map(({ name, val }) => {
    const script = `navigator.clipboard.writeText('${val}');document.dispatchEvent(new CustomEvent('toast',{detail:{message:'Copied "${val}" to clipboard!'}}))`;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<span class="text-end">${name}:</span><samp class="cursor-pointer"${addAttribute(script, "onclick")}>${val}</samp>` })}`;
  })}</blockquote><p>
申请时还请按照这个模板留言。此外有关申请说明：
</p><ul><li>在你的友链上添加了本站；</li><li>请确保你的站点活着；</li><li>博客内容不违反国家法律。</li></ul>` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/links/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/links/index.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
