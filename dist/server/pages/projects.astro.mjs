/* empty css                                 */
import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, r as renderComponent, a as renderTemplate, g as defineScriptVars } from '../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BZyUih0U.mjs';
import { d as $$Icon, $ as $$Button } from '../chunks/Svg_D_ielPpo.mjs';
import { $ as $$CommonPage } from '../chunks/CommonPage_BWB4uY7C.mjs';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
/* empty css                                 */
import { c as config } from '../chunks/BaseLayout_QQy4BsbB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.joeytoday.com");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, projects, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/notion-temp-auto-books+films.png": () => import('../chunks/notion-temp-auto-books_films_CamQPRjh.mjs'),"/src/assets/projects/notion-temp-books.jpeg": () => import('../chunks/notion-temp-books_BRKtXSq3.mjs'),"/src/assets/projects/notion-temp-habits.jpeg": () => import('../chunks/notion-temp-habits_BJkXJ23B.mjs'),"/src/assets/projects/notion-temp-para.jpeg": () => import('../chunks/notion-temp-para_IntUgSgp.mjs'),"/src/assets/projects/notion-temp-stuffs.jpeg": () => import('../chunks/notion-temp-stuffs_pN9y-6uc.mjs')

});
  const projectIconSet = {
    github: "github-circle",
    site: "earth",
    link: "link",
    doc: "document",
    release: "package"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${projects.map((project) => {
    var imagePath = null;
    if (project.image) {
      imagePath = "/src/assets/projects/" + project.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif,avif.webp}"`
        );
    }
    return renderTemplate`<div class="relative overflow-hidden rounded-xl border"> ${imagePath && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "absolute end-0 z-0 m-0 h-full w-1/2 object-cover opacity-40", "src": images[imagePath](), "alt": project.name, "loading": "lazy", "style": {
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      msMaskImage: "-ms-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      WebkitMaskImage: "-webkit-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
    } })}`} <div${addAttribute(cn(
      "relative z-10 flex flex-col gap-y-2 px-3 py-1.5 sm:px-4 sm:py-3",
      imagePath && "me-20"
    ), "class")}> <a class="line-clamp-1 font-medium text-foreground no-underline transition-colors"${addAttribute(project.links[0].href, "href")} target="_blank"> ${project.name} </a> <div class="line-clamp-2 leading-snug text-muted-foreground sm:h-12"> ${project.description} </div> <div class="flex flex-row items-center gap-x-2 sm:gap-x-3"> ${project.links.map((link) => {
      const icon = projectIconSet[link.type];
      return renderTemplate`<a${addAttribute(link.href, "href")} class="rounded-full bg-muted p-1 text-muted-foreground transition-colors sm:p-1.5"${addAttribute(link.type, "aria-label")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": icon })} </a>`;
    })} </div> </div> </div>`;
  })} </div> </div>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/projects/ProjectSection.astro", void 0);

const $$Astro = createAstro("https://www.joeytoday.com");
const $$Sponsorship = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sponsorship;
  const { class: className, methods, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((cn("flex flex-col justify-center gap-4 sm:flex-row", className) ?? "") + " astro-x4djmzfl", "class")}${spreadAttributes(props)}> ${methods.map((item) => renderTemplate`<div class="sponsorship-card relative justify-center overflow-hidden rounded-xl border bg-white astro-x4djmzfl"> <div class="sponsorship-card-icon absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity astro-x4djmzfl"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-20 astro-x4djmzfl", "name": item.icon })} </div> ${renderComponent($$result, "Image", $$Image, { "class": "sponsorship-card-img mx-auto my-0 max-w-60 blur-sm transition-opacity astro-x4djmzfl", "src": item.image, "alt": item.name, "loading": "lazy" })} </div>`)} </div> `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/projects/Sponsorship.astro", void 0);

const wechat = new Proxy({"src":"/_astro/wechat-qrcode.B_u09Tgq.jpg","width":603,"height":621,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaiyijing/GitHub/joeytodayblog/src/assets/wechat-qrcode.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "notion-temp", text: "Notion \u6A21\u677F" },
    // { depth: 2, slug: 'programs', text: 'Programs' },
    // { depth: 2, slug: 'learnings', text: 'Learnings' },
    // { depth: 2, slug: 'others', text: 'Others' },
    { depth: 2, slug: "sponsorship", text: "Sponsorship" }
  ];
  return renderTemplate(_a || (_a = __template(["<!-- \u9879\u76EE\u9875\u9762\u5B8C\u6574\u6837\u5F0F\uFF1Ahttps://joeytoday.vercel.app/projects -->", ' <script type="module" data-astro-rerun>', "\n  const loadPageviewCount = async () => {\n    const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: window.location.pathname\n    })\n  }\n\n  await loadPageviewCount()\n<\/script> "], ["<!-- \u9879\u76EE\u9875\u9762\u5B8C\u6574\u6837\u5F0F\uFF1Ahttps://joeytoday.vercel.app/projects -->", ' <script type="module" data-astro-rerun>', "\n  const loadPageviewCount = async () => {\n    const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: window.location.pathname\n    })\n  }\n\n  await loadPageviewCount()\n<\/script> "])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "info": {
    slug: "/projects",
    hideComment: false
  }, "class": "astro-2hwget37" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="astro-2hwget37">Github Activities:</p> <p class="astro-2hwget37"> ${renderComponent($$result2, "Image", $$Image, { "src": "https://ghchart.rshah.org/7A50DF/joeytoday", "alt": "github activities", "inferSize": true, "loading": "lazy", "class": "astro-2hwget37" })} </p> <p class="astro-2hwget37">
👇 这里是我的项目合集，如果你觉得有意思 or 对你有用的话，欢迎给作者买杯咖啡☕️～
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Checkout sponsorship", "class": "w-fit astro-2hwget37", "href": "#sponsorship" }, { "before": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "class": "size-5 astro-2hwget37", "name": "receive-money", "slot": "before" })}` })} <h2 id="notion-temp" class="astro-2hwget37">Notion 模板</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "\u{1F3AF} P.A.R.A \u4E2A\u4EBA\u7BA1\u7406\u7CFB\u7EDF",
      description: "\u6253\u9020\u4E2A\u4EBA\u7B2C\u4E8C\u5927\u8111\uFF0C\u5E26\u4F60\u5F00\u542F\u9AD8\u6548\u4EBA\u751F\uFF0C\u4E2A\u4EBA\u7CFB\u7EDF All in One\u3002",
      image: "notion-temp-para.jpeg",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://xhslink.com/m/1o7dBKGBSZV" },
        { type: "doc", href: "https://www.joeytoday.com/blog/2025/notion-temp-para-second-brain" },
        { type: "site", href: "https://joeytoday.notion.site/P-A-R-A-22115b43acf080a4bc1ad815c8176156" }
      ]
    },
    {
      name: "\u{1F579}\uFE0F Notion\uFF5C\u6570\u5B57\u4E66\u5F71\u5E93",
      description: "\u5F00\u7BB1\u5373\u7528\uFF01\u5168\u81EA\u52A8\u53EF\u89C6\u5316Notion\u56FE\u4E66\u9986+\u5F71\u89C6\u5E93\uFF0C\u6708\u5EA6\u5E74\u5EA6\u81EA\u52A8\u6C47\u603B\u7EDF\u8BA1",
      image: "notion-temp-auto-books+films.png",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://xhslink.com/m/6jTC8joPt0G" },
        { type: "doc", href: "https://www.joeytoday.com/blog/2025/notion-temp-auto-booksfilms" },
        { type: "site", href: "https://joeytoday.notion.site/25d15b43acf08066b96cea23bd9ffe2a" }
      ]
    },
    {
      name: "\u{1F4DA} \u56FE\u4E66\u7BA1\u7406\u6A21\u677F",
      description: "\u4E66\u540D\u3001\u4F5C\u8005\u3001\u5C01\u9762\u3001\u7B80\u4ECB\u3001\u5206\u7C7B\u7EDF\u8BA1\uFF0C\u8BFB\u4E66\u4E00\u76EE\u4E86\u7136\uFF0C\u6210\u5C31\u611F\u6EE1\u6EE1\u3002",
      image: "notion-temp-books.jpeg",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://xhslink.com/m/XQ1OJvpWo6" },
        { type: "doc", href: "https://www.joeytoday.com/blog/2025/notion-temp-books" },
        { type: "site", href: "https://joeytoday.notion.site/Temp-baf346805d3e491a9824651d72fac512" }
      ]
    },
    {
      name: "\u{1F7E2} \u4E60\u60EF\u6253\u5361\u70ED\u529B\u56FE\u6A21\u677F",
      description: "\u5FAE\u5C0F\u4E60\u60EF\u6539\u53D8\u4EBA\u751F\uFF01\u6309\u5468\u3001\u6708\u3001\u534A\u5E74\u67E5\u770B\u6253\u5361\u70ED\u529B\u56FE\u3002",
      image: "notion-temp-habits.jpeg",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://xhslink.com/m/1dEvFTew2Md" },
        { type: "doc", href: "https://www.joeytoday.com/blog/2025/notion-temp-habits" },
        { type: "site", href: "https://joeytoday.notion.site/Habits-Tracker-Temp-24b15b43acf0800ea8fed8b6d243ea3f" }
      ]
    },
    {
      name: "\u{1F392} \u4E2A\u4EBA\u7269\u54C1\u7BA1\u7406\u6A21\u677F",
      description: "\u4F60\u62E5\u6709\u7684\u4E1C\u897F\u6784\u6210\u4E86\u4F60\u3002",
      image: "notion-temp-stuffs.jpeg",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://xhslink.com/m/2Mw6qn4NxYl" },
        { type: "doc", href: "https://www.joeytoday.com/blog/weekly/032" },
        { type: "site", href: "https://joeytoday.notion.site/1e015b43acf08033a7afc17ffcb17fdd" }
      ]
    }
  ], ",": true, "class": "astro-2hwget37" })}   <h2 id="sponsorship" class="astro-2hwget37">Sponsorship 喜欢作者</h2> <p class="astro-2hwget37">感谢喜欢，赞赏后可留下信息～</p> ${renderComponent($$result2, "Sponsorship", $$Sponsorship, { "methods": [
    { name: "WeChat", icon: "wechat-pay", image: wechat }
    //{ name: 'Alipay', icon: 'alipay', image: alipay }
  ], "class": "astro-2hwget37" })}  ` }), defineScriptVars({ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }));
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/projects/index.astro", void 0);

const $$file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
