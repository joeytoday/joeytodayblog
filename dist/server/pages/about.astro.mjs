/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, d as renderScript } from '../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { $ as $$FriendList, l as links } from '../chunks/FriendList_vv8oryJ6.mjs';
import { c as config } from '../chunks/_virtual_config_BIqm0lli.mjs';
import { $ as $$Comment } from '../chunks/Comment_D1PzXhjc.mjs';
import { a as $$Spoiler, b as $$Collapse, c as $$Timeline } from '../chunks/Svg_aXW9aLqX.mjs';
import { $ as $$CommonPage } from '../chunks/CommonPage_DRaQRbWT.mjs';
import { $ as $$ToolSection } from '../chunks/ToolSection_ioET_NN7.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$BooksDisplay = createComponent(($$result, $$props, $$slots) => {
  const movies = [
    {
      id: "m1",
      title: "\u695A\u95E8\u7684\u4E16\u754C The Truman Show",
      cover: "/cover/m1.jpg",
      releaseYear: 1998,
      director: "\u5F7C\u5F97\xB7\u5A01\u5C14",
      description: "\u5982\u679C\u518D\u4E5F\u4E0D\u80FD\u89C1\u5230\u4F60\uFF0C\u795D\u4F60\u65E9\u5B89\uFF0C\u5348\u5B89\uFF0C\u665A\u5B89\u3002"
    },
    {
      id: "m2",
      title: "\u6CB9\u70B8\u7EFF\u756A\u8304 Fried Green Tomatoes",
      cover: "/cover/m2.jpg",
      releaseYear: 1991,
      director: "\u4E54\u6069\xB7\u963F\u7EF4\u5948",
      description: "\u5854\u65FA\u8FBE\uFF01"
    },
    {
      id: "m3",
      title: "\u5973\u4EBA\u4E0E\u6D77 Young Woman and the Sea",
      cover: "/cover/m3.jpg",
      releaseYear: 2024,
      director: "\u7EA6\u963F\u5E0C\u59C6\xB7\u4F26\u5B81",
      description: "\u6E38\u8FC7\u90A3\u7247\u5145\u6EE1\u4E0D\u516C\u7684\u6D77\u5CE1\uFF0C\u521B\u9020\u51FA\u5C5E\u4E8E\u53E6\u4E00\u534A\u4EBA\u7C7B\u7684\u5386\u53F2\u3002"
    }
  ];
  const books = [
    {
      id: "1",
      title: "\u5973\u5B69\uFF0C\u5973\u4EBA\uFF0C\u5176\u4ED6",
      cover: "/cover/b1.png",
      publishYear: 2022,
      author: "\u4F2F\u5A1C\u4E01\xB7\u57C3\u74E6\u91CC\u65AF\u6258",
      description: "\u6211\u4EEC\u8FC7\u7740\u622A\u7136\u4E0D\u540C\u7684\u751F\u6D3B\uFF0C\u4F46\u6211\u4EEC\u751F\u6D3B\u5728\u540C\u4E00\u4E2A\u4E16\u754C\u3002"
    },
    {
      id: "2",
      title: "\u538C\u5973",
      cover: "/cover/b2.png",
      publishYear: 2015,
      author: "\u4E0A\u91CE\u5343\u9E64\u5B50",
      description: "\u770B\u6E05\u538C\u5973\uFF0C\u6D88\u9664\u538C\u5973\u3002"
    },
    {
      id: "3",
      title: "\u9F20\u75AB",
      cover: "/cover/b3.jpg",
      publishYear: 2013,
      author: "\u963F\u5C14\u8D1D\xB7\u52A0\u7F2A",
      description: "\u4E60\u60EF\u4E8E\u7EDD\u671B\u662F\u4E00\u4EF6\u6BD4\u7EDD\u671B\u672C\u8EAB\u66F4\u53EF\u6015\u7684\u4E8B\u60C5\u3002\u957F\u76F8\u7231\u6216\u5171\u8D74\u6B7B\uFF0C\u522B\u65E0\u51FA\u8DEF\u3002"
    }
  ];
  return renderTemplate`<!-- 左侧3栏图书 -->${maybeRenderHead()}<div class="column books-column astro-d3skngfc"> <h3 class="astro-d3skngfc">Books</h3> <div class="books-grid astro-d3skngfc"> ${books.map((book) => renderTemplate`<div class="book-card astro-d3skngfc"> <div class="book-cover-wrapper astro-d3skngfc"> <div class="book-cover-container astro-d3skngfc"> <img${addAttribute(book.cover, "src")}${addAttribute(`${book.title} \u5C01\u9762`, "alt")} loading="lazy" class="zoomable astro-d3skngfc"> </div> </div> <div class="book-info astro-d3skngfc"> <h4 class="book-title astro-d3skngfc">${book.title}</h4> <div class="book-meta astro-d3skngfc"> <p class="astro-d3skngfc">年份：${book.publishYear}</p> <p class="astro-d3skngfc">作者：${book.author}</p> </div> <p class="book-description astro-d3skngfc">${book.description}</p> </div> </div>`)} </div> </div> <!-- 右侧3栏电影 --> <div class="column movies-column astro-d3skngfc"> <h3 class="astro-d3skngfc">Movies</h3> <div class="movies-grid astro-d3skngfc"> ${movies.map((movie) => renderTemplate`<div class="movie-card astro-d3skngfc"> <div class="movie-cover-wrapper astro-d3skngfc"> <div class="movie-cover-container astro-d3skngfc"> <img${addAttribute(movie.cover, "src")}${addAttribute(`${movie.title} \u6D77\u62A5`, "alt")} loading="lazy" class="zoomable astro-d3skngfc"> </div> </div> <div class="movie-info astro-d3skngfc"> <h4 class="movie-title astro-d3skngfc">${movie.title}</h4> <div class="movie-meta astro-d3skngfc"> <p class="astro-d3skngfc">年份：${movie.releaseYear}</p> <p class="astro-d3skngfc">导演：${movie.director}</p> </div> <p class="movie-description astro-d3skngfc">${movie.description}</p> </div> </div>`)} </div> </div> `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/BooksDisplay.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "hobbies", text: "Hobbies" },
    { depth: 2, slug: "tools", text: "Tools" },
    { depth: 2, slug: "social-networks", text: "Social Networks" },
    { depth: 2, slug: "gossips", text: "Gossips" },
    { depth: 2, slug: "about-blog", text: "About Blog" }
  ];
  const { friends } = links;
  const linksConf = config.integ.links;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "About Me \u5173\u4E8E\u6211", "headings": headings, "info": "/about" }, { "bottom": ($$result2) => renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "slot": "bottom" })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>👏 Welcome to my blog! 欢迎来到我的博客～</p> <p style="line-height: 2;">
相见即是缘分！欢迎来到这里。<br>
🧰 工具控，爱折腾。熟练掌握 <strong>Notion、Obsidian</strong> 等工具。
    喜欢很多美丽而“无用”的事物， <strong>📖 书籍 & 🎬 电影 & 🎵 音乐</strong>，
    希望在这个世界寻找一点乐趣，也<strong>「诚心祝福你，捱得到新天地」</strong>。<br>
如果你是新朋友，欢迎查看更多关于我的信息～欢迎扫描下方二维码关注我的公众号 👇
<img src="/src/assets/mp-qr-code.jpeg" width="200px"> </p> <p>
📌 Show, not tell.｜如果有更多想说的，也可以 <a href="mailto:open1v@hotmail.com">📮 给我发邮件</a> ${renderComponent($$result2, "Spoiler", $$Spoiler, {}, { "default": ($$result3) => renderTemplate` 🎉 这里是彩蛋内容：祝你今日开心！` })} </p>  <p>🎵 接下来可以听着音乐继续看：</p>  <div style="
    width: 100%; 
    max-width: 700px; 
    margin: 15px auto 0; 
    padding: 0 8px; 
    box-sizing: border-box;
    position: relative;
  "> <!-- 关键修改：src 中的 type=0（歌单）+ 你的歌单ID --> <iframe src="https://music.163.com/outchain/player?type=0&id=13382956851&auto=0&height=280" style="
        border: 1px solid #eee; 
        width: 100%; 
        height: 280px; /* 增加高度，容纳多首歌的清单 */
        display: block; 
        border-radius: 8px;
        min-height: 260px; /* 手机端最小高度兜底 */
      " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" loading="lazy" title="我的音乐清单"></iframe> <!-- 加载状态提示 --> <div id="musicLoader" style="
      position: absolute; 
      top: 0; 
      left: 8px; 
      right: 8px; 
      bottom: 0; 
      background: #fff; 
      border-radius: 8px; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      font-size: 14px; 
      color: #666;
      z-index: 1;
    ">
音乐清单加载中...</div> <!-- 手机端提示 --> <p style="
      text-align: center; 
      font-size: 12px; 
      color: #888; 
      margin: 8px 0 0;
    ">
点击播放按钮，可切换歌单内歌曲 🎵（播放不了是版权限制）
</p> </div>  ${renderScript($$result2, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/about/index.astro?astro&type=script&index=0&lang.ts")} <h2 id="hobbies">Hobbies 我的爱好</h2> <ul> <li>📖 喜欢阅读与电影，经常写随笔，也经常放鸽子。看不到我的随笔，也欢迎看看👉<a href="https://note.joeytoday.com/">📒 我的笔记</a></li> <li>✈️ 喜欢宅家，但也爱旅行，若有喜爱的朋友相伴，是美事一桩～</li> <li>🎈 日常 J 人，出门就变 P，主打一个什么都行，开心就好!</li> <li>🎵 很爱音乐，只要好听！这里是我的推荐，如果你也想听听看～👉<a href="https://joeytoday.notion.site/music">joeytoday的歌单</a></li> <li>🐈 家有傲娇小猫，名曰「兜兜」，不粘人但喜欢人，喜欢被拍拍，但最喜欢我（我自封），附上兜兜美照。</li> </ul> <img src="https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508020135822.jpeg" width="90%">  ${renderComponent($$result2, "BooksDisplay", $$BooksDisplay, {})} <h2 id="tools">Tools 我的工具</h2> <p>Current support tools as follow:</p> ${renderComponent($$result2, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Productivity", "tools": [
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
👏 欢迎关注～有什么想说的，也可以 <a href="https://www.notion.so/joeytoday/310f5493daf44d82a0599d2c034100cb">💬 给我留言</a> </p> ${renderComponent($$result2, "FriendList", $$FriendList, { "list": friends[3] })} <h2 id="gossips">Gossips 碎碎念</h2> ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "\u788E\u788E\u5FF5" }, { "default": ($$result3) => renderTemplate`
其实这里的文字只是为了凑这个模块，嘿嘿，看来你打开了这里 😊
` })} <h2 id="about-blog">About Blog 关于此博客</h2> <p>Website history</p>  ${renderComponent($$result2, "Timeline", $$Timeline, { "events": linksConf.logbook })} <hr> <p>
本站出于我一时的热情建立，熬了两个通宵终于初步完成了，希望能成为我记录生活的开始。<br>
有点类似千禧年代的互联网精神，开源的、互联的，现在想来有点浪漫～<br>
搭建有点辛苦，但过程很开心，希望各位网友也阅读开心！🎉 撒花
</p>   ` })}`;
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
