/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, b as addAttribute } from '../chunks/astro/server_CTfvycMK.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_1m3gVEp1.mjs';
import { $ as $$FriendList, l as links } from '../chunks/FriendList_DW8pdXYO.mjs';
import { $ as $$PostPreview } from '../chunks/PFSearch_DVcBMAkh.mjs';
import { g as getBlogCollection, s as sortMDByDate } from '../chunks/server_DSktSB39.mjs';
import { f as $$Label, d as $$Icon, $ as $$Button } from '../chunks/Svg_BVt06kNw.mjs';
import { $ as $$BaseLayout, c as config } from '../chunks/BaseLayout_CiqShqGj.mjs';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$ToolSection } from '../chunks/ToolSection_Cbr1mfCF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.joeytoday.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/notion-temp-books.jpeg": () => import('../chunks/notion-temp-books_BRKtXSq3.mjs'),"/src/assets/projects/notion-temp-habits.jpeg": () => import('../chunks/notion-temp-habits_BJkXJ23B.mjs'),"/src/assets/projects/notion-temp-para.jpeg": () => import('../chunks/notion-temp-para_IntUgSgp.mjs'),"/src/assets/projects/notion-temp-stuffs.jpeg": () => import('../chunks/notion-temp-stuffs_pN9y-6uc.mjs')

});
  if (!images[imagePath])
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif,avif.webp}"`
    );
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": (cn(
    className,
    "project-card group overflow-hidden relative flex flex-col gap-y-3 rounded-2xl border bg-muted ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ) ?? "") + " astro-4z6dfqi7", "href": href, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText ?? heading, "class": "absolute top-0 h-36 w-full object-cover opacity-60 transition-opacity group-hover:opacity-100 dark:opacity-35 astro-4z6dfqi7", "loading": "lazy" })} ${maybeRenderHead()}<div class="project-card-fg z-10 flex flex-col gap-y-0.5 px-5 pb-4 pt-24 transition-all astro-4z6dfqi7"> <h2 class="text-lg font-medium astro-4z6dfqi7">${heading}</h2> <p class="text-muted-foreground astro-4z6dfqi7">${subheading}</p> </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/home/ProjectCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.joeytoday.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-semibold md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/home/Section.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.CNCfkCan.png","width":1203,"height":1174,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaiyijing/GitHub/joeytodayblog/src/assets/avatar.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.joeytoday.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 6;
  const allPosts = await getBlogCollection();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  const { friends } = links;
  return renderTemplate`<!-- 原始样式查看：https://astro-pure.js.org/ -->${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" }, "highlightColor": "#4AA32E" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> ${renderComponent($$result2, "Image", $$Image, { "src": avatar, "alt": "profile", "class": "h-28 w-auto rounded-full border p-1", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-bold">${config.author}</h1> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> <!-- 头像下tags --> ${renderComponent($$result2, "Label", $$Label, { "title": "China" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "location", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Contact", "as": "a", "href": "mailto:huashi451@hotmail.com", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "email", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "\u8C46\u74E3", "as": "a", "href": "https://www.douban.com/people/147872735/", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "hashtag", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "\u5C0F\u7EA2\u4E66", "as": "a", "href": "https://www.xiaohongshu.com/user/profile/59dda42e44363b2e63937e31", "target": "_blank" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "tag-2", "class": "size-5", "slot": "icon" })}` })}  </div> </div> <!--头部按钮 Know More --> <a href="/about" target="_blank" class="flex flex-row items-center gap-x-3 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p class="font-medium text-muted-foreground">More About Me</p> </a> </section> <br>  <div id="content" class="animate flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": async ($$result3) => renderTemplate` <p class="text-muted-foreground">👏 Welcome to my digital garden!</p> <p class="text-muted-foreground" style="line-height: 2;">
🧰 工具控，爱折腾。熟练掌握 <strong>Notion、Obsidian</strong> 等工具。
          喜欢很多美丽而“无用”的事物， <strong>📖 书籍 & 🎬 电影 & 🎵 音乐</strong>，希望在这个世界寻找一点乐趣，
          也<strong>「诚心祝福你，捱得到新天地」</strong>。<br>
如果你是新朋友，欢迎关注我的公众号 👉<strong>「偶然时刻」</strong>。<br>
🎧 来都来了，听首歌吧 🎧
</p> <p style="text-align: center;"> <iframe style="border: none; margin: 0;" width="100%" height="86" src="//music.163.com/outchain/player?type=2&id=29750217&auto=1&height=66"></iframe> </p>  ` })}  ${renderComponent($$result2, "Section", $$Section, { "title": "Projects" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 gap-3 sm:grid-cols-2"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.xiaohongshu.com/discovery/item/68a572a4000000001d01dd67?xsec_token=ABR7z7ngc0MAcw1sqpm1SJwIFfeFu8Kulw2Aqx72uX938", "heading": "\u{1F3AF} P.A.R.A \u4E2A\u4EBA\u7BA1\u7406\u7CFB\u7EDF", "subheading": "\u6253\u9020\u4E2A\u4EBA\u7B2C\u4E8C\u5927\u8111\uFF0C\u5E26\u4F60\u5F00\u542F\u9AD8\u6548\u4EBA\u751F\u3002\u9886\u57DF-\u9879\u76EE-\u4EFB\u52A1-\u8D44\u6599-\u7B14\u8BB0\uFF0CAll in One\u3002", "imagePath": "/src/assets/projects/notion-temp-para.jpeg" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.xiaohongshu.com/discovery/item/686f48920000000017037b46?xsec_token=ABGSWRQXZpuOdav7ypGfUUzNZG66S9LPP37YNz4iyd0xM", "heading": "\u{1F4DA} Notion\u6A21\u677F\uFF5C\u56FE\u4E66\u7BA1\u7406", "subheading": "\u4E66\u540D\u3001\u4F5C\u8005\u3001\u5C01\u9762\u3001\u7B80\u4ECB\u3001\u5206\u7C7B\u7EDF\u8BA1\uFF0C\u8BFB\u4E86\u4EC0\u4E48\u4E66\u4E00\u76EE\u4E86\u7136\uFF0C\u6210\u5C31\u611F\u6EE1\u6EE1 get\u3002", "imagePath": "/src/assets/projects/notion-temp-books.jpeg" })} <!--           <ProjectCard
            href='https://www.xiaohongshu.com/discovery/item/687eebe80000000013012264?xsec_token=ABXasX90R282Rybry8UfkAsGW8ZbbXyMWXIfbM3xtqOd0'
            heading='🟢 Notion模板｜习惯打卡热力图'
            subheading='微小习惯改变人生！按周、月、半年查看打卡记录，看见时间都去哪儿了～'
            imagePath='/src/assets/projects/notion-temp-habits.jpeg'
          />

          <ProjectCard
            href='https://www.xiaohongshu.com/discovery/item/689584ef00000000020017de?xsec_token=ABY_OeELXbiWFQQgYftHsYt0HWQm9ZJx8RG-aR1QCx3T0'
            heading='🎒 个人物品管理模板'
            subheading='你拥有的东西构成了你，💥东西买的值不值？💰日均成本多少？'
            imagePath='/src/assets/projects/notion-temp-stuffs.jpeg'
          /> --> </div> ${renderComponent($$result3, "Button", $$Button, { "title": "More Products", "class": "w-fit self-end", "href": "/projects", "style": "ahead" })} ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": async ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-1.5 sm:gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p, "detailed": true })} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "title": "More Posts", "class": "w-fit self-end", "href": "/blog", "style": "ahead" })} ` })}`}       ${renderComponent($$result2, "Section", $$Section, { "title": "Tools" }, { "default": async ($$result3) => renderTemplate`  ${renderComponent($$result3, "ToolSection", $$ToolSection, { "class": "mb-5", "title": "Productivity", "tools": [
    {
      name: "Notion",
      description: "\u4E2A\u4EBA\u7CFB\u7EDF\uFF5C\u4E66\u5F71\u7BA1\u7406\uFF5C\u9879\u76EE\u7BA1\u7406",
      href: "https://www.notion.com/",
      icon: import('../chunks/notion_D-IUr5a1.mjs')
    },
    {
      name: "Obsidian",
      description: "\u5199\u4F5C\uFF5C\u65E5\u8BB0\uFF5C\u7B14\u8BB0\uFF5C\u601D\u8003",
      href: "https://obsidian.md/",
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
  ] })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Social" }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "FriendList", $$FriendList, { "list": friends[3] })} ` })} </div> <!-- <Quote class='mt-12' title='世事何须多计较，神天自有大乘除。' /> --> <br> <br> <a href="/about" target="_blank" class="flex flex-row items-center gap-x-3 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p class="font-medium text-muted-foreground">落花时节又逢君</p> </a> </main> ` })}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
