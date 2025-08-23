import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, f as renderScript, h as defineStyleVars, i as renderHead, s as spreadAttributes, e as renderSlot } from './astro/server_CTfvycMK.mjs';
import 'kleur/colors';
import { c as config$1 } from './_virtual_config_DUQtyjL_.mjs';
import { d as $$Icon } from './Svg_BVt06kNw.mjs';
/* empty css                        */
import 'clsx';
import './_astro_content_CyyzDHLF.mjs';

const $$Astro$2 = createAstro("https://www.joeytoday.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerConf = config$1.footer;
  let social = footerConf.social || {};
  social.rss = {
    label: "RSS",
    url: "/rss.xml"
  };
  const footerLink1 = footerConf.links?.filter(({ pos }) => pos === 1) || [];
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mb-5 mt-16"> <div class="border-t pt-5"> <div class="flex items-center gap-y-3 max-sm:flex-col sm:justify-between sm:gap-y-0"> <div class="flex items-center gap-x-4 gap-y-2 text-muted-foreground max-sm:flex-col [&_a]:text-foreground">  ${footerLink1.length > 0 && renderTemplate`<div> ${footerLink1.map(({ title, link, style }, index) => renderTemplate`<span> <a${addAttribute(link, "href")} target="_blank"${addAttribute(style, "class")}> ${title} </a> ${index < footerLink1.length - 1 && " \u2022 "} </span>`)} </div>`}  <div> ${config$1.footer.year} ${config$1.author} ${footerConf.links && footerConf.links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&
<span> ${footerConf.links.filter(({ pos }) => pos === 2).map(({ title, link, style }) => renderTemplate`<span> <a${addAttribute(link, "href")} target="_blank"${addAttribute(style, "class")}> ${title} </a> </span>`)} </span> ` })}`} </div> ${renderTemplate`<span> <a href="https://github.com/withastro/astro" target="_blank">
Astro
</a>
&
<a href="https://github.com/cworld1/astro-theme-pure" target="_blank">
Pure
</a>
theme powered
</span>`} </div>  <div class="flex items-center gap-x-4"> ${footerConf.social && Object.entries(footerConf.social).map(([platform, { label, url }]) => renderTemplate`<a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"${addAttribute(url, "href")}${addAttribute(label, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": platform })} </a>`)} </div> </div> </div> </footer>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/basic/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n  const toggleDarkModeElement = document.getElementById('toggleDarkMode')\n  if (toggleDarkModeElement) {\n    toggleDarkModeElement.dataset.theme = localStorage.getItem('theme') || 'system'\n  }\n<\/script> ", " "])), renderComponent($$result, "header-component", "header-component", { "class": "group sticky top-4 z-30 md:z-50 mb-12 flex items-center justify-between rounded-xl border border-transparent max-sm:py-1 sm:rounded-2xl astro-zgz2aqyx" }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="z-30 text-xl font-semibold group-[.not-top]:ms-2 sm:group-[.not-top]:ms-3 astro-zgz2aqyx" style="transition:margin-inline 0.3s" href="/" aria-label="Brand">${config$1.title}</a> <div class="flex items-center gap-x-2 astro-zgz2aqyx">  <div id="headerExpandContent" class="end-0 start-0 top-12 grid border border-transparent group-[.not-top]:rounded-xl group-[.expanded]:opacity-100 dark:group-[.expanded.not-top]:bg-muted max-sm:absolute max-sm:opacity-0 max-sm:group-[.not-top]:border-border max-sm:group-[.expanded.not-top]:bg-background max-sm:group-[.not-top]:px-4 max-sm:group-[.not-top]:py-2 sm:grid-rows-1 astro-zgz2aqyx"> <div class="flex flex-col items-center justify-center overflow-hidden sm:flex-row astro-zgz2aqyx"> ${config$1.header.menu.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="w-full flex-none grow py-2 text-right font-medium transition-none hover:text-primary sm:w-fit sm:px-3 astro-zgz2aqyx" aria-label="Nav menu item"> ${item.title} </a>`)} <div class="flex w-full grow flex-row justify-end gap-x-3 sm:w-fit sm:gap-x-5 astro-zgz2aqyx"> <a class="px-1 py-2 transition-none sm:px-2 astro-zgz2aqyx" href="/search" title="Search"> <span class="sr-only astro-zgz2aqyx">Search</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "size-5 astro-zgz2aqyx" })} </a> </div> </div> </div>  <div class="z-30 flex gap-x-4 group-[.not-top]:gap-x-2 astro-zgz2aqyx" style="transition:gap 0.3s"> <button id="toggleDarkMode" class="group/dark box-content size-5 rounded-md border p-1.5 transition-colors hover:bg-border sm:group-[.not-top]:rounded-xl astro-zgz2aqyx"> <span class="sr-only astro-zgz2aqyx">Dark Theme</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "system size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "computer" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "light hidden size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "sun" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "dark hidden size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "moon" })} </button> <button id="toggleMenu" class="rounded-md border p-1.5 transition-colors hover:bg-border sm:hidden sm:group-[.not-top]:rounded-xl astro-zgz2aqyx"> <span class="sr-only astro-zgz2aqyx">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5 astro-zgz2aqyx", "name": "menu" })} </button> </div> </div> ` }), renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/basic/Header.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/basic/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  function simpleSetTheme() {
    let theme = localStorage.getItem('theme')
    // If undefined or 'system', get from system
    if (!theme || theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0B0B10' : '#FCFCFD')
  }
  simpleSetTheme()
  document.addEventListener('astro:page-load', () => simpleSetTheme())
<\/script>`, ""])), renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/basic/ThemeProvider.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/basic/ThemeProvider.astro", void 0);

const theme = {
  // === Basic configuration ===
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: "joeytoday",
  /** Will be used in index page & copyright declaration */
  author: "joeytoday",
  /** Description metadata for your website. Can be used in page metadata. */
  description: "Show, not tell. 工具、教程，熟练掌握 Notion、Obsidian 等工具。",
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: "/favicon/favicon.ico",
  /** Specify the default language for this site. */
  locale: {
    lang: "en-US",
    attrs: "en_US",
    // Date locale
    dateLocale: "en-US",
    dateOptions: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: "src/assets/avatar.png",
    alt: "Avatar"
  },
  // === Global configuration ===
  titleDelimiter: "•",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",
  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],
  /** Configure the header of your site. */
  header: {
    menu: [
      { title: "Blog", link: "/blog" },
      //{ title: 'Docs', link: '/docs' },
      { title: "Projects", link: "/projects" },
      { title: "Tags", link: "/tags" },
      //{ title: 'Achieves', link: '/archives' },
      { title: "Notes", link: "https://note.joeytoday.com/" },
      { title: "Links", link: "/links" },
      { title: "About", link: "/about" }
    ]
  },
  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© 2024 - ${(/* @__PURE__ */ new Date()).getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      // Registration link
      {
        title: "Copyright All Servered",
        link: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans",
        style: "text-sm"
        // Uno/TW CSS class
      },
      {
        title: "Travelling",
        link: "https://www.travellings.cn/go.html",
        style: "text-sm"
      },
      // Privacy Policy link
      {
        title: "Site Policy",
        link: "/terms/list",
        pos: 2
        // position set to 2 will be appended to copyright line
      }
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: { github: "https://github.com/joeytoday/joeytodayblog" }
  },
  content: {
    externalLinksContent: " ↗",
    /** Blog page size for pagination (optional) */
    blogPageSize: 10,
    externalLinkArrow: true,
    // show external link arrow
    // Currently support weibo, x, bluesky
    share: ["weibo", "x", "bluesky"]
  }
};
const integ = {
  // UnoCSS typography
  // See: https://unocss.dev/presets/typography
  typography: {
    class: "prose text-base text-muted-foreground"},
  // Comment system
  waline: {
    // Server service link
    server: "https://comment.joeytoday.com/"}
};
const terms = {
  title: "Terms content",
  list: [
    {
      title: "Privacy Policy",
      link: "/terms/privacy-policy"
    },
    {
      title: "Terms and Conditions",
      link: "/terms/terms-and-conditions"
    },
    {
      title: "Copyright",
      link: "/terms/copyright"
    },
    {
      title: "Disclaimer",
      link: "/terms/disclaimer"
    }
  ]
};
const config = { ...theme, integ };

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.joeytoday.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const siteTitle = `${title} ${config.titleDelimiter} ${config.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/images/social-card.png", Astro2.url).href;
  return renderTemplate(
    _a || (_a = __template(['<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>', '</title><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="preload" href="/fonts/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Satoshi-VariableItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="canonical"', "><meta", ' name="title"><meta', ' name="description"><meta', ' name="author"><meta content="" name="theme-color"><meta', ' property="og:type"><meta', ' property="og:title"><meta', ' property="og:description"><meta', ' property="og:url"><meta', ' property="og:site_name"><meta', ' property="og:locale"><meta', ' property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">', '<meta content="summary_large_image" property="twitter:card"><meta', ' property="twitter:url"><meta', ' property="twitter:title"><meta', ' property="twitter:description"><meta', ' property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"', "", "><meta", ` name="generator"><link rel="stylesheet" href="/styles/global.css"><!-- <ClientRouter /> --><!-- <script is:inline>
  const style = document.createElement('style')
  style.textContent = \`* { transition: none !important; }\`
  document.addEventListener('astro:after-swap', () => {
    document.head.appendChild(style)
    setTimeout(() => {
      style.remove()
    }, 100)
  })
<\/script> -->`, ""], ['<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>', '</title><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="preload" href="/fonts/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Satoshi-VariableItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="canonical"', "><meta", ' name="title"><meta', ' name="description"><meta', ' name="author"><meta content="" name="theme-color"><meta', ' property="og:type"><meta', ' property="og:title"><meta', ' property="og:description"><meta', ' property="og:url"><meta', ' property="og:site_name"><meta', ' property="og:locale"><meta', ' property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">', '<meta content="summary_large_image" property="twitter:card"><meta', ' property="twitter:url"><meta', ' property="twitter:title"><meta', ' property="twitter:description"><meta', ' property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"', "", "><meta", ` name="generator"><link rel="stylesheet" href="/styles/global.css"><!-- <ClientRouter /> --><!-- <script is:inline>
  const style = document.createElement('style')
  style.textContent = \\\`* { transition: none !important; }\\\`
  document.addEventListener('astro:after-swap', () => {
    document.head.appendChild(style)
    setTimeout(() => {
      style.remove()
    }, 100)
  })
<\/script> -->`, ""])),
    siteTitle,
    addAttribute(canonicalURL, "href"),
    addAttribute(siteTitle, "content"),
    addAttribute(description, "content"),
    addAttribute(config.author, "content"),
    addAttribute(articleDate ? "article" : "website", "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(config.title, "content"),
    addAttribute(config.locale.attrs, "content"),
    addAttribute(socialImageURL, "content"),
    articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(config.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    addAttribute(config.title, "title"),
    addAttribute(`${Astro2.site}rss.xml`, "href"),
    addAttribute(Astro2.generator, "content"),
    /* User script*/
    renderTemplate`${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}`
  );
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://www.joeytoday.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = config.description, ogImage, title },
    highlightColor,
    ...props
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ highlightColor }]);
  return renderTemplate`<html${addAttribute(config.locale.lang, "lang")} class="astro-37fxchfa"${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title, "class": "astro-37fxchfa" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-37fxchfa" })}${renderHead()}</head> <body class="flex justify-center bg-background text-foreground astro-37fxchfa"${spreadAttributes(props)}${addAttribute($$definedVars, "style")}> ${highlightColor && renderTemplate`<div id="highlight-gradient" class="pointer-events-none absolute start-0 top-0 z-0 h-screen w-full opacity-25 astro-37fxchfa"${addAttribute(`${`background-image:linear-gradient(${highlightColor},transparent)`}; ${$$definedVars}`, "style")}></div>`} <div class="w-full max-w-[70rem] px-4 sm:px-7 lg:px-10 astro-37fxchfa"${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "class": "astro-37fxchfa" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37fxchfa" })} </div>   </body> </html>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, config as c, integ as i, terms as t };
