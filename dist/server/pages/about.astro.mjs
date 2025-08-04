/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BC3yFm5u.mjs';
import 'kleur/colors';
import { $ as $$FriendList, l as links } from '../chunks/FriendList_DIVPsM1A.mjs';
import { $ as $$Comment } from '../chunks/Comment_s8458AMA.mjs';
import { a as $$Spoiler, b as $$Collapse, c as $$Timeline } from '../chunks/Svg_pZWGp3Dg.mjs';
import { $ as $$CommonPage } from '../chunks/CommonPage_CjM4uUAS.mjs';
import { $ as $$ToolSection } from '../chunks/ToolSection_B3YFmgOR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "hobbies", text: "Hobbies" },
    { depth: 2, slug: "tools", text: "Tools" },
    { depth: 2, slug: "social-networks", text: "Social Networks" },
    { depth: 2, slug: "gossips", text: "Gossips" },
    { depth: 2, slug: "about-blog", text: "About Blog" }
  ];
  const { friends } = links;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "About Me \u5173\u4E8E\u6211", "headings": headings, "info": "/about" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "slot": "bottom" })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>👏 Welcome to my digital garden! 欢迎来到我的博客～</p> <p>
相见即是缘分！诚心祝福你，捱得到新天地。<br>
如果你是新朋友，欢迎查看更多关于我的信息～欢迎扫描下方二维码关注我的公众号 👇
<img src="https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202501112218896.jpg" width="200px"> </p> <p>
📌 Show, not tell.
${renderComponent($$result2, "Spoiler", $$Spoiler, {}, { "default": ($$result3) => renderTemplate` 🎉 这里是彩蛋内容：祝你今日开心！` })} </p>  <p>🎵 接下来可以听着音乐继续看：</p> <p style="text-align: center;"> <iframe style="border: none; margin: 0;" width="100%" height="86" src="//music.163.com/outchain/player?type=2&id=1359470247&auto=1&height=66"></iframe> </p> <h2 id="hobbies">Hobbies 我的爱好</h2> <ul> <li>📖 喜欢阅读与电影，经常写随笔，也经常放鸽子。</li> <li>✈️ 喜欢宅家，但也爱旅行，若有喜爱的朋友相伴，是美事一桩～</li> <li>🎈 日常 J 人，出门就变 P，主打一个什么都行，开心就好!</li> <li>🎵 很爱音乐，只要好听！这里是我的推荐，如果你也想听听看～👉<a href="https://joeytoday.notion.site/music">joeytoday的歌单</a></li> <li>🐈 家有傲娇小猫，名曰「兜兜」，不粘人但喜欢人，喜欢被拍拍，但最喜欢我（我自封），附上兜兜美照。</li> </ul> <img src="https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508020135822.jpeg" width="90%"> <h2 id="tools">Tools</h2> <p>Current support tools as follow:</p> ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Productivity", "tools": [
    {
      name: "Notion",
      description: "\u4E2A\u4EBA\u7CFB\u7EDF\uFF5C\u4E66\u5F71\u7BA1\u7406\uFF5C\u9879\u76EE\u7BA1\u7406",
      href: "https://joeytoday.notion.site/",
      icon: import('../chunks/notion_D-IUr5a1.mjs')
    },
    {
      name: "Obsidian",
      description: "\u5199\u4F5C\uFF5C\u65E5\u8BB0\uFF5C\u7B14\u8BB0\uFF5C\u601D\u8003",
      href: "https://joeyposts.vercel.app/",
      icon: import('../chunks/obsidian_4i5Ej1D9.mjs')
    },
    {
      name: "\u5FAE\u4FE1\u8BFB\u4E66",
      description: "\u4E30\u5BCC\u4E66\u5E93\uFF5C\u968F\u5904\u9605\u8BFB",
      href: "https://weread.qq.com/",
      icon: import('../chunks/weread-logo_D90WS6ti.mjs')
    },
    {
      name: "Readwise Reader",
      description: "\u7F51\u7EDC\u6587\u7AE0\u7A0D\u540E\u8BFB\uFF5C\u8BA2\u9605 RSS \u6E90",
      href: "https://readwise.io/read",
      icon: import('../chunks/readwise-logo_B5pTPEyr.mjs')
    },
    {
      name: "Calflow",
      description: "\u65F6\u95F4\u8BB0\u5F55\uFF5C\u65E5\u7A0B\u7BA1\u7406\uFF5C\u539F\u751F iOS \u652F\u6301",
      href: "https://calflow.app/",
      icon: import('../chunks/calflow-logo_c-FvrJFC.mjs')
    },
    {
      name: "flomo",
      description: "\u788E\u7247\u5316\u8BB0\u5F55\uFF5C\u6D1E\u5BDF\u56DE\u987E\uFF5C\u7075\u611F\u601D\u8003",
      href: "https://flomoapp.com/",
      icon: import('../chunks/flomo-logo_D-UKJGah.mjs')
    }
  ] })} ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Device", "tools": [
    {
      name: "\u{1F4BB} MacBook Air M3",
      description: "Personal computer \u4E2A\u4EBA\u7535\u8111",
      href: "https://support.apple.com/zh-cn/118551",
      icon: import('../chunks/apple_D53-Rkoh.mjs')
    },
    {
      name: "\u{1F4F1} iPhone 14 Pro",
      description: "\u4F7F\u7528\u624B\u673A",
      href: "https://support.apple.com/zh-cn/111849",
      icon: import('../chunks/iPhone_CQIhzsG-.mjs')
    },
    {
      name: "\u{1F4D6} iReader Ocean 3 Turbo",
      description: "\u9605\u8BFB\u7535\u5B50\u4E66",
      href: "https://item.jd.com/100046103416.html",
      icon: import('../chunks/iReader_X77bky8H.mjs')
    },
    {
      name: "\u{1F4F7} Fuji XT30-II",
      description: "\u65E5\u5E38\u4F7F\u7528\u76F8\u673A",
      href: "https://www.fujifilm-x.com/zh-cn/products/cameras/x-t30-ii/",
      icon: import('../chunks/fuji_Bj3ITcZE.mjs')
    }
  ] })} <h2 id="social-networks">Social Networks 社交媒体</h2> <p>
👏 欢迎关注～
</p> ${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[3] })} <h2 id="gossips">Gossips 碎碎念</h2> ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "\u788E\u788E\u5FF5" }, { "default": ($$result3) => renderTemplate`
其实这里的文字只是为了凑这个模块，嘿嘿，看来你打开了这里 😊
` })} <h2 id="about-blog">About Blog 关于此博客</h2> <p>Website history</p> ${renderComponent($$result2, "Timeline", $$Timeline, { "events": [
    {
      date: "2025-07-31",
      content: "\u672C\u7AD9\u521D\u6B65\u5EFA\u7ACB"
    },
    {
      date: "2024-08-03",
      content: '\u672C\u7AD9\u6B63\u5F0F\u5BF9\u5916\u5EFA\u7ACB\uFF0C\u67E5\u770B<a href="https://github.com/joeytoday/joeytodayblog/">\u672C\u7AD9\u6E90\u7801</a>'
    }
  ] })} <hr> <p>
本站出于我一时的热情建立，熬了两个通宵终于初步完成了，希望能成为我记录生活的开始。<br>
有点类似千禧年代的互联网精神，开源的、互联的，现在想来有点浪漫～<br>
搭建有点辛苦，但过程很开心，希望各位网友也阅读开心！🎉 撒花
</p>  ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/about/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
