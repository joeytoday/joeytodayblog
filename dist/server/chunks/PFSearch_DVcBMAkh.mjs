import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, g as defineScriptVars, r as renderComponent, e as renderSlot, f as renderScript, s as spreadAttributes, F as Fragment } from './astro/server_CTfvycMK.mjs';
import 'kleur/colors';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_1m3gVEp1.mjs';
import 'clsx';
import { c as cn } from './class-merge_ZZ4CtDft.mjs';
import { d as $$Icon, h as getFormattedDate, i as $$FormattedDate, $ as $$Button } from './Svg_BVt06kNw.mjs';
/* empty css                        */
import { c as config } from './_virtual_config_DUQtyjL_.mjs';
import { b as $$QRCode } from './Comment_D9k9N3Ah.mjs';
import { r as renderEntry } from './_astro_content_CyyzDHLF.mjs';

const $$Astro$8 = createAstro("https://www.joeytoday.com");
const $$ArticleBottom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArticleBottom;
  const { id, collections, class: className } = Astro2.props;
  const path = Astro2.url.pathname.split("/").slice(0, 2).join("/");
  const index = collections.findIndex((x) => x.id === id);
  const prev = collections[index - 1];
  const next = collections[index + 1];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex max-sm:flex-col sm:justify-between gap-2", className), "class")}> <span class="min-w-0"> ${prev && renderTemplate`<a${addAttribute(`${path}/${prev.id}`, "href")} class="group inline-flex items-center gap-x-2 rounded-xl px-4 py-2 no-underline transition-colors duration-300 hover:bg-muted max-sm:max-w-[80%] sm:flex"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 rotate-180 stroke-muted-foreground transition-colors group-hover:stroke-primary"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline> </svg> <p class="truncate font-medium transition-colors">${prev.data.title}</p> </a>`} </span> <span class="min-w-0"> ${next && renderTemplate`<a${addAttribute(`${path}/${next.id}`, "href")} class="group inline-flex items-center gap-x-2 rounded-xl px-4 py-2 text-right no-underline transition-colors duration-300 hover:bg-muted max-sm:float-end max-sm:max-w-[80%] sm:flex"> <p class="truncate font-medium transition-colors">${next.data.title}</p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 stroke-muted-foreground transition-colors group-hover:stroke-primary"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline> </svg> </a>`} </span> </div>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/ArticleBottom.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://www.joeytoday.com");
const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BackToTop;
  const { header: headerName, content: contentName, needPercent = true } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="z-10 group fixed bottom-8 end-4 transition-all flex flex-col gap-y-4 sm:end-8 astro-jxfdehre" id="action-buttons"> ', ' <button aria-label="Back to Top" class="relative size-10 flex items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground duration-300 hover:border-border/75 sm:size-12 opacity-0 astro-jxfdehre" id="to-top-btn"> <div class="top-text absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center group-[.ended]:opacity-0 astro-jxfdehre"> <span class="text astro-jxfdehre">10</span> <span class="text-xs astro-jxfdehre">%</span> </div> ', " </button> </div> <script>(function(){", "\n  const actionBtns = document.getElementById('action-buttons')\n  const scrollBtn = document.getElementById('to-top-btn')\n  const scrollPercentEl = scrollBtn.children[0].children[0]\n  const targetHeader = document.getElementById(headerName)\n  const articleElement = document.getElementById(contentName)\n\n  // scroll to top\n  function callback(entries) {\n    entries.forEach((entry) => {\n      // only show the action buttons when the heading is out of view\n      actionBtns.classList.toggle('show', !entry.isIntersecting)\n    })\n  }\n  scrollBtn.addEventListener('click', () => {\n    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })\n  })\n  if (targetHeader) {\n    const observer = new IntersectionObserver(callback)\n    observer.observe(targetHeader)\n  } else {\n    console.error(`Element with ID ${headerName} not found.`)\n  }\n  if (needPercent) {\n    // scroll percentage\n    const scrollHeight = articleElement.scrollHeight // total height\n    const articleTop = articleElement.offsetTop // article top\n    const clientHeight = document.documentElement.clientHeight // client height\n\n    function calculateScrollPercent() {\n      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop\n      if (scrollTop < articleTop) return\n      return Math.round(((scrollTop - articleTop) / (scrollHeight - clientHeight)) * 100)\n    }\n\n    document.addEventListener('scroll', () => {\n      const scrollPercent = calculateScrollPercent()\n      if (scrollPercent === undefined) return\n      scrollPercentEl.innerText = scrollPercent.toString()\n\n      // If percent is 100, percent won't need to show\n      actionBtns.classList.toggle('ended', scrollPercent > 100)\n    })\n  } else {\n    actionBtns.classList.add('ended')\n  }\n})();<\/script> "], ["", '<div class="z-10 group fixed bottom-8 end-4 transition-all flex flex-col gap-y-4 sm:end-8 astro-jxfdehre" id="action-buttons"> ', ' <button aria-label="Back to Top" class="relative size-10 flex items-center justify-center rounded-full border-2 border-transparent bg-muted text-muted-foreground duration-300 hover:border-border/75 sm:size-12 opacity-0 astro-jxfdehre" id="to-top-btn"> <div class="top-text absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center group-[.ended]:opacity-0 astro-jxfdehre"> <span class="text astro-jxfdehre">10</span> <span class="text-xs astro-jxfdehre">%</span> </div> ', " </button> </div> <script>(function(){", "\n  const actionBtns = document.getElementById('action-buttons')\n  const scrollBtn = document.getElementById('to-top-btn')\n  const scrollPercentEl = scrollBtn.children[0].children[0]\n  const targetHeader = document.getElementById(headerName)\n  const articleElement = document.getElementById(contentName)\n\n  // scroll to top\n  function callback(entries) {\n    entries.forEach((entry) => {\n      // only show the action buttons when the heading is out of view\n      actionBtns.classList.toggle('show', !entry.isIntersecting)\n    })\n  }\n  scrollBtn.addEventListener('click', () => {\n    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })\n  })\n  if (targetHeader) {\n    const observer = new IntersectionObserver(callback)\n    observer.observe(targetHeader)\n  } else {\n    console.error(\\`Element with ID \\${headerName} not found.\\`)\n  }\n  if (needPercent) {\n    // scroll percentage\n    const scrollHeight = articleElement.scrollHeight // total height\n    const articleTop = articleElement.offsetTop // article top\n    const clientHeight = document.documentElement.clientHeight // client height\n\n    function calculateScrollPercent() {\n      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop\n      if (scrollTop < articleTop) return\n      return Math.round(((scrollTop - articleTop) / (scrollHeight - clientHeight)) * 100)\n    }\n\n    document.addEventListener('scroll', () => {\n      const scrollPercent = calculateScrollPercent()\n      if (scrollPercent === undefined) return\n      scrollPercentEl.innerText = scrollPercent.toString()\n\n      // If percent is 100, percent won't need to show\n      actionBtns.classList.toggle('ended', scrollPercent > 100)\n    })\n  } else {\n    actionBtns.classList.add('ended')\n  }\n})();<\/script> "])), maybeRenderHead(), renderSlot($$result, $$slots["other-icons"]), renderComponent($$result, "Icon", $$Icon, { "name": "up", "class": "top-icon group-[.ended]:opacity-100 astro-jxfdehre" }), defineScriptVars({ headerName, contentName, needPercent }));
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/BackToTop.astro", void 0);

const $$Astro$6 = createAstro("https://www.joeytoday.com");
const $$Copyright = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Copyright;
  const {
    data: { heroImage, title, publishDate },
    class: className
  } = Astro2.props;
  const image = typeof heroImage?.src === "string" ? heroImage?.src : heroImage?.src?.src ?? "";
  const shares = {
    weibo: {
      link: `http://service.weibo.com/share/share.php?url=${Astro2.url}&title=${title}&pic=${image}`
    },
    x: {
      link: `https://x.com/intent/tweet?text='${title}'&url='${Astro2.url}'&via='${config.author}'`
    },
    bluesky: {
      link: `https://bsky.app/intent/compose?text=${title}%0A${Astro2.url}`
    }
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "relative flex flex-col gap-y-2 rounded-xl border px-3 sm:px-4 py-2 sm:py-3",
    className
  ), "class")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "absolute end-4 top-4 size-20 opacity-10", "name": "copyright" })}  <div class="flex flex-col"> <div class="font-medium text-foreground">${title}</div> <div class="text-sm">${Astro2.url}</div> </div>  <div class="flex flex-row flex-wrap justify-start gap-x-5 gap-y-1 sm:gap-x-8"> <div class="flex gap-x-2 sm:flex-col"> <span>Author</span> <span class="text-sm text-foreground max-sm:place-self-center">${config.author}</span> </div> ${publishDate && renderTemplate`<div class="flex gap-x-2 sm:min-w-16 sm:flex-col"> <span>Published at</span> <span class="text-sm text-foreground max-sm:place-self-center"> ${getFormattedDate(publishDate, {
    month: "long"
  })} </span> </div>`} <div class="flex gap-x-2 sm:flex-col"> <span>Copyright</span> <a class="text-sm text-foreground max-sm:place-self-center" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
CC BY-NC-SA 4.0
</a> </div> </div>  <div class="relative"> <div class="flex flex-row gap-3"> <button id="copy-link" class="group rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-primary sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "link" })} </button> <button id="get-qrcode" class="group rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-primary sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "qrcode" })} </button> ${config.content.share.map((share) => renderTemplate`<a${addAttribute(shares[share].link, "href")} target="_blank"${addAttribute(`share-${share}`, "id")} class="group rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-primary sm:p-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": share })} </a>`)} </div> ${renderComponent($$result, "QRCode", $$QRCode, { "aria-expanded": "false", "class": "absolute z-10 -mt-2 box-content max-h-0 max-w-44 overflow-hidden rounded-xl border bg-muted p-4 opacity-0 transition-all duration-300 ease-in-out aria-expanded:max-h-44 aria-expanded:translate-y-4 aria-expanded:opacity-100" })} </div> </div> <div class="mx-6 rounded-b-xl border border-t-0 px-3 pb-1.5 pt-1 sm:mx-8 sm:px-4"> <a href="/projects#sponsorship" class="flex items-center justify-between text-muted-foreground no-underline" target="_blank"> <span>Buy me a cup of coffee ☕.</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "box-content size-5 p-1", "name": "receive-money" })} </a> </div> ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/Copyright.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/Copyright.astro", void 0);

const $$Astro$5 = createAstro("https://www.joeytoday.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    data: {
      title,
      description,
      draft,
      heroImage,
      publishDate,
      updatedDate,
      comment: enableComment,
      tags,
      language
    },
    remarkPluginFrontmatter
  } = Astro2.props;
  const dateTimeOptions = {
    month: "short"
  };
  return renderTemplate`${heroImage && renderTemplate`${maybeRenderHead()}<div class="hero-image relative mb-6 astro-qr7qsrsa">${renderComponent($$result, "Image", $$Image, { "alt": heroImage.alt || title, "class": "cover-image relative z-10 h-auto w-full max-w-[65ch] rounded-2xl object-contain astro-qr7qsrsa", "fetchpriority": "high", "loading": "eager", ...heroImage })}${renderComponent($$result, "Image", $$Image, { "alt": "Blur image", "fetchpriority": "high", "loading": "eager", "id": "blurImage", "class": "absolute end-0 top-4 z-0 mt-0 h-full max-w-[65ch] rounded-3xl opacity-60 transition-opacity duration-300 astro-qr7qsrsa", ...heroImage })}</div>`}${draft ? renderTemplate`<span class="text-red-500 astro-qr7qsrsa">(Draft)</span>` : null}<div class="article-info max-lg:mx-auto astro-qr7qsrsa"> <div class="flex flex-wrap gap-x-4 gap-y-2 text-xs leading-6 text-muted-foreground astro-qr7qsrsa">  <div class="flex items-center gap-1 astro-qr7qsrsa"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar", "class": "size-5 astro-qr7qsrsa" })} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "font-sans astro-qr7qsrsa", "date": publishDate, "dateTimeOptions": dateTimeOptions })} ${updatedDate && renderTemplate`<div class="flex items-center gap-1 astro-qr7qsrsa"> <span class="astro-qr7qsrsa"> / </span> <span class="astro-qr7qsrsa">
Update
${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "font-sans astro-qr7qsrsa", "date": updatedDate, "dateTimeOptions": dateTimeOptions })} </span> </div>`} </div>  <div class="flex items-center gap-1 astro-qr7qsrsa"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time", "class": "size-5 astro-qr7qsrsa" })} ${remarkPluginFrontmatter.minutesRead} </div> ${// Language
  language && renderTemplate`<span class="flex items-center gap-1 astro-qr7qsrsa"> ${renderComponent($$result, "Icon", $$Icon, { "name": "earth", "class": "size-5 astro-qr7qsrsa" })} ${language} </span>`} ${// Tags
  !!tags?.length && renderTemplate`<span class="flex items-center gap-1 astro-qr7qsrsa"> ${renderComponent($$result, "Icon", $$Icon, { "name": "hashtag", "class": "size-5 astro-qr7qsrsa" })} ${tags.map((tag, i) => renderTemplate`<div class="astro-qr7qsrsa"> <a${addAttribute(`View more blogs with the tag ${tag}`, "aria-label")} class="hover:underline hover:underline-offset-4 astro-qr7qsrsa" data-pagefind-filter="tag"${addAttribute(`/tags/${tag}`, "href")}> ${tag} </a> ${i < tags.length - 1 && "/"} </div>`)} </span>`} </div> <h1 class="mt-4 text-2xl font-medium sm:mb-2 sm:mt-6 sm:text-3xl astro-qr7qsrsa"> ${title} </h1> <div class="mt-3 italic astro-qr7qsrsa"> <blockquote class="text-sm text-muted-foreground astro-qr7qsrsa"><q class="astro-qr7qsrsa">${description}</q></blockquote> ${!draft && enableComment && renderTemplate`${renderComponent($$result, "PageInfo", $$PageInfo, { "class": "mt-1 astro-qr7qsrsa" })}`} </div> </div>  <div class="mt-4 w-1/2 border-t max-lg:mx-auto sm:mt-6 sm:w-1/3 astro-qr7qsrsa"></div> ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://www.joeytoday.com");
const $$PageInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PageInfo;
  const { class: className, hideComment, ...props } = Astro2.props;
  const path = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("text-base text-sm text-muted-foreground", className), "class")}${spreadAttributes(props)}> <span class="waline-pageview-count"${addAttribute(path, "data-path")}></span> views
${!hideComment && renderTemplate`<a href="#waline">
| <span class="waline-comment-count"${addAttribute(path, "data-path")}></span> comments
</a>`} </div>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/PageInfo.astro", void 0);

const $$Astro$3 = createAstro("https://www.joeytoday.com");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { nextUrl, prevUrl } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<nav class="mt-4 flex items-center gap-x-4 sm:mt-6">${prevUrl && renderTemplate`<a class="me-auto py-2" data-astro-prefetch${addAttribute(prevUrl.url, "href")}>${prevUrl.srLabel && renderTemplate`<span class="sr-only">${prevUrl.srLabel}</span>`}${prevUrl.text ? prevUrl.text : "Previous"}</a>`}${nextUrl && renderTemplate`<a class="ms-auto py-2" data-astro-prefetch${addAttribute(nextUrl.url, "href")}>${nextUrl.srLabel && renderTemplate`<span class="sr-only">${nextUrl.srLabel}</span>`}${nextUrl.text ? nextUrl.text : "Next"}</a>`}</nav>`}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/Paginator.astro", void 0);

const $$Astro$2 = createAstro("https://www.joeytoday.com");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { as: Tag = "div", post, detailed = false, class: className } = Astro2.props;
  const { id, data } = post;
  const { remarkPluginFrontmatter } = await renderEntry(post);
  const postDate = data.updatedDate ?? data.publishDate;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute((cn(
    "post-preview group/card flex flex-col relative rounded-2xl border bg-background transition-colors ease-in-out px-5 py-2.5 hover:bg-muted",
    detailed && "max-sm:px-4 sm:py-5",
    className
  ) ?? "") + " astro-yh2ne4rs", "class")}${addAttribute(detailed && data.heroImage?.color && `--preview-highlight:color-mix(in srgb,${data.heroImage.color} 40%,hsl(var(--foreground)/var(--un-text-opacity,1)));
    --preview-highlight-bg:hsl(from ${data.heroImage.color} h s l/20%)`, "style")}> <a${addAttribute((cn(
    "group/link w-full flex flex-col transition-all hover:text-primary",
    !detailed && "sm:flex-row",
    detailed && data.heroImage && "max-md:pt-24"
  ) ?? "") + " astro-yh2ne4rs", "class")}${addAttribute(`/blog/${id}`, "href")} data-astro-prefetch> ${detailed && data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "alt": data.heroImage.alt || data.title, "class": "cover-image absolute end-0 top-0 z-0 h-2/3 w-full rounded-2xl object-cover opacity-50 transition-opacity duration-300 group-hover/card:opacity-70 md:h-full md:w-3/5 astro-yh2ne4rs", "loading": "eager", ...data.heroImage })}`} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "min-w-[95px] py-1 text-xs astro-yh2ne4rs", "date": postDate })} ${renderComponent($$result, "Tag", Tag, { "class": "z-10 flex-grow astro-yh2ne4rs" }, { "default": async ($$result2) => renderTemplate`<div class="flex justify-between astro-yh2ne4rs"> <div${addAttribute(((detailed && "font-medium") ?? "") + " astro-yh2ne4rs", "class")}> ${data.draft && renderTemplate`<span class="text-red-500 astro-yh2ne4rs">(Draft) </span>`} ${data.title} </div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="preview-redirect my-1 stroke-muted-foreground group-hover/link:stroke-primary astro-yh2ne4rs"><line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:scale-x-100 astro-yh2ne4rs"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 astro-yh2ne4rs"></polyline></svg> </div> ${detailed && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-yh2ne4rs" }, { "default": async ($$result3) => renderTemplate`<p${addAttribute((cn(
    "line-clamp-2 pt-1 text-sm text-muted-foreground sm:line-clamp-3",
    data.heroImage && "sm:me-24"
  ) ?? "") + " astro-yh2ne4rs", "class")}> ${data.description} </p> <div class="flex items-center gap-2 py-1.5 text-sm italic leading-4 text-muted-foreground sm:py-3 astro-yh2ne4rs">  <span class="flex items-center gap-1 astro-yh2ne4rs"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "time", "class": "size-4 astro-yh2ne4rs" })} ${remarkPluginFrontmatter.minutesRead} </span>  ${data.language && renderTemplate`<span class="flex items-center gap-1 astro-yh2ne4rs"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "earth", "class": "size-4 astro-yh2ne4rs" })} ${data.language} </span>`} </div> ` })}`}` })} </a> <!-- tags --> ${detailed && data.tags && renderTemplate`<ul class="tag-list mt-1 flex flex-wrap gap-2 astro-yh2ne4rs"> ${data.tags.map((tag) => renderTemplate`<li class="astro-yh2ne4rs"> ${renderComponent($$result, "Button", $$Button, { "title": tag, "href": `/tags/${tag}`, "style": "pill", "class": "astro-yh2ne4rs" })} </li>`)} </ul>`} </li> `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/PostPreview.astro", void 0);

function diveChildren(item, depth) {
  if (depth === 1 || !item.subheadings.length) {
    return item.subheadings;
  } else {
    return diveChildren(item.subheadings[item.subheadings.length - 1], depth - 1);
  }
}
function generateToc(headings) {
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)];
  const toc = [];
  bodyHeadings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      if (toc.length === 0) return;
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      const gap = heading.depth - lastItemInToc.depth;
      const target = diveChildren(lastItemInToc, gap);
      target.push(heading);
    }
  });
  return toc;
}

const $$Astro$1 = createAstro("https://www.joeytoday.com");
const $$TOCHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TOCHeading;
  const {
    heading: { depth, slug, subheadings, text: rawText }
  } = Astro2.props;
  const text = rawText.endsWith("#") ? rawText.slice(0, -1) : rawText;
  return renderTemplate`${maybeRenderHead()}<li> <div class="relative"> <span class="absolute top-[5%] w-[2px] rounded transition-colors duration-300 [&.highlight-bg]:bg-primary [&.is-read]:bg-input"></span> <a${addAttribute(`Scroll to section: ${text}`, "aria-label")}${addAttribute(cn(
    "toc-item line-clamp-2 px-3 py-1 ms-2 text-foreground/75 transition-all hover:text-foreground [&.highlight]:font-medium [&.highlight]:text-primary [&.is-read]:text-input [&.highlight-bg-translucent]:bg-muted",
    depth > 2 && "ps-7"
  ), "class")}${addAttribute(`#${slug}`, "href")}>${text}</a> </div> ${!!subheadings.length && renderTemplate`<ul> ${subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/TOCHeading.astro", void 0);

const $$Astro = createAstro("https://www.joeytoday.com");
const $$TOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TOC;
  const { headings, class: className, ...props } = Astro2.props;
  const toc = generateToc(headings);
  return renderTemplate`${renderComponent($$result, "toc-heading", "toc-heading", { "class": (className ?? "") + " astro-mmcgqrmu", ...props }, { "default": () => renderTemplate` ${maybeRenderHead()}<h2 class="font-semibold astro-mmcgqrmu">TABLE OF CONTENTS</h2> <ul class="mt-4 text-card-foreground astro-mmcgqrmu"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TOCHeading", $$TOCHeading, { "heading": heading, "class": "astro-mmcgqrmu" })}`)} </ul> ` })} ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/TOC.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/TOC.astro", void 0);

const $$PFSearch = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "class": "astro-574sfdxb" }, { "default": () => renderTemplate` ${maybeRenderHead()}<aside class="form my-4 astro-574sfdxb"> ${renderTemplate`<div id="site-search" class="astro-574sfdxb"></div>`} </aside> ` })} ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/PFSearch.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/pages/PFSearch.astro", void 0);

export { $$PostPreview as $, $$TOC as a, $$Hero as b, $$Copyright as c, $$ArticleBottom as d, $$Paginator as e, $$PageInfo as f, $$BackToTop as g, $$PFSearch as h };
