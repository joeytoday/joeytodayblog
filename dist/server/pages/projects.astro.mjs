/* empty css                                 */
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, r as renderComponent, a as renderTemplate, g as defineScriptVars } from '../chunks/astro/server_BC3yFm5u.mjs';
import 'kleur/colors';
import { $ as $$CommonPage } from '../chunks/CommonPage_CjM4uUAS.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C8dIiToh.mjs';
import { d as $$Icon } from '../chunks/Svg_pZWGp3Dg.mjs';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
import { c as config } from '../chunks/BaseLayout_yPSKZ3vk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-pure.js.org");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, projects, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/202508011634053.jpeg": () => import('../chunks/202508011634053_BlErTL2F.mjs'),"/src/assets/projects/202508011634233.jpeg": () => import('../chunks/202508011634233_CmepklDF.mjs'),"/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg": () => import('../chunks/kseniia-zapiatkina-yATU3rg8tNI-unsplash_CP8JdpXQ.mjs'),"/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg": () => import('../chunks/wen-qiao-g_w8I64FiO0-unsplash_BHxrbxtq.mjs')

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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const headings = [
    { depth: 2, slug: "theme", text: "Notion \u6A21\u677F" }
    // { depth: 2, slug: 'programs', text: 'Programs' },
    // { depth: 2, slug: 'learnings', text: 'Learnings' },
    // { depth: 2, slug: 'others', text: 'Others' },
    // { depth: 2, slug: 'gpg-signature', text: 'GPG Signature' },
    // { depth: 2, slug: 'sponsorship', text: 'Sponsorship' }
  ];
  return renderTemplate(_a || (_a = __template(["<!-- \u9879\u76EE\u9875\u9762\u5B8C\u6574\u6837\u5F0F\uFF1Ahttps://joeytoday.vercel.app/projects -->", ' <script type="module" data-astro-rerun>', "\n  const loadPageviewCount = async () => {\n    const pageview = await import(`${npmCDN}/@waline/client@v3/dist/pageview.js`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: window.location.pathname\n    })\n  }\n\n  await loadPageviewCount()\n<\/script> "], ["<!-- \u9879\u76EE\u9875\u9762\u5B8C\u6574\u6837\u5F0F\uFF1Ahttps://joeytoday.vercel.app/projects -->", ' <script type="module" data-astro-rerun>', "\n  const loadPageviewCount = async () => {\n    const pageview = await import(\\`\\${npmCDN}/@waline/client@v3/dist/pageview.js\\`)\n    pageview.pageviewCount({\n      serverURL: walineServer,\n      path: window.location.pathname\n    })\n  }\n\n  await loadPageviewCount()\n<\/script> "])), renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "info": { slug: "/projects", hideComment: true }, "class": "astro-2hwget37" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<p class="astro-2hwget37">这里是我的项目合集 👇</p> <h2 id="theme" class="astro-2hwget37">Notion 模板</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      image: "202508011634233.jpeg",
      name: "\u{1F4DA} \u56FE\u4E66\u7BA1\u7406\u6A21\u677F",
      description: "\u4E66\u540D\u3001\u4F5C\u8005\u3001\u5C01\u9762\u3001\u7B80\u4ECB\u3001\u5206\u7C7B\u7EDF\u8BA1\uFF0C\u8BFB\u4E66\u4E00\u76EE\u4E86\u7136\uFF0C\u6210\u5C31\u611F\u6EE1\u6EE1\u3002",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://www.xiaohongshu.com/explore/686f48920000000017037b46?xsec_token=ABGSWRQXZpuOdav7ypGfUUzLMqXMVihgHpECZOSg2WIkc" }
        //{ type: 'doc', href: 'https://github.com/cworld1/astro-theme-pure/blob/main/src/content/blog/customize/index.md'}
      ]
    },
    {
      name: "\u{1F7E2} \u4E60\u60EF\u6253\u5361\u70ED\u529B\u56FE\u6A21\u677F",
      description: "\u5FAE\u5C0F\u4E60\u60EF\u6539\u53D8\u4EBA\u751F\uFF01\u6309\u5468\u3001\u6708\u3001\u534A\u5E74\u67E5\u770B\u6253\u5361\u70ED\u529B\u56FE\u3002",
      image: "202508011634053.jpeg",
      links: [
        //{ type: 'github', href: 'https://github.com/cworld1/astro-theme-pure' },
        { type: "link", href: "https://www.xiaohongshu.com/explore/686f4cc50000000012022873?xsec_token=ABGSWRQXZpuOdav7ypGfUUzBOdLCELpL_7slncrxwwE94" }
        //{ type: 'doc', href: 'https://github.com/cworld1/astro-theme-pure/blob/main/src/content/blog/customize/index.md'}
      ]
    }
  ], ",": true, "class": "astro-2hwget37" })}   ` }), defineScriptVars({ npmCDN: config.npmCDN, walineServer: config.integ.waline.server }));
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
