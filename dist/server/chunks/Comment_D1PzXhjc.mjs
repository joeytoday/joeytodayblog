import { e as createAstro, c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute, g as defineScriptVars, s as spreadAttributes } from './astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { c as cn } from './class-merge_ZZ4CtDft.mjs';
import { d as $$Icon } from './Svg_aXW9aLqX.mjs';
/* empty css                                                                  */
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_BZyUih0U.mjs';
import { parse } from 'node-html-parser';
/* empty css                                                                   */
import { c as config } from './_virtual_config_BIqm0lli.mjs';
import 'clsx';
/* empty css                                                                  */
/* empty css                          */
/* empty css                                                               */

const $$Astro$5 = createAstro("https://www.joeytoday.com");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Quote;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "quote-component", "quote-component", { "class": cn("not-prose inline-block", className) }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row items-center gap-x-3 rounded-full border px-4 py-2 text-sm shadow-sm"> <span class="relative flex items-center justify-center"> <span class="absolute size-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="size-2 rounded-full bg-green-400"></span> </span> <p id="quote-sentence" class="font-medium text-muted-foreground">Loading...</p> </div> ` })} ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/Quote.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/Quote.astro", void 0);

const $$Astro$4 = createAstro("https://www.joeytoday.com");
const $$GithubCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GithubCard;
  const { repo: repoRaw } = Astro2.props;
  const repo = repoRaw.replace(/^https:\/\/github\.com\//, "");
  const [owner, repoName] = repo.split("/");
  return renderTemplate`${renderComponent($$result, "github-card", "github-card", { "class": "not-prose loading astro-fkh43kdv", "data-repo": repo }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`https://github.com/${repo}`, "href")} target="_blank" class="group block flex flex-col gap-y-2 rounded-xl border px-5 py-4 transition-colors hover:bg-muted hover:text-muted-foreground astro-fkh43kdv"> <div class="flex items-center justify-between astro-fkh43kdv"> <div class="flex items-center gap-x-2 text-foreground group-hover:text-primary astro-fkh43kdv"> <div id="gh-avatar" class="gh-text me-2 size-8 bg-cover astro-fkh43kdv" style="border-radius:999px"></div> <span class="text-lg transition-colors astro-fkh43kdv">${owner}</span> <span class="text-muted-foreground astro-fkh43kdv">/</span> <span class="text-lg font-bold transition-colors astro-fkh43kdv">${repoName}</span> </div> <div class="rounded-full bg-primary-foreground p-1 astro-fkh43kdv"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "astro-fkh43kdv" })} </div> </div> <p id="gh-description" class="gh-text astro-fkh43kdv">Waiting for api.github.com...</p> <div class="flex items-center justify-between astro-fkh43kdv"> <div class="gh-text flex flex-wrap items-center gap-x-5 astro-fkh43kdv"> <div class="flex items-center gap-x-2 astro-fkh43kdv">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-fkh43kdv"><g fill="none" fill-rule="evenodd" class="astro-fkh43kdv"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-fkh43kdv"></path><path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176zM12 4.987L9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973l3.062 3.427c.234.262.347.61.312.959l-.463 4.573l4.206-1.854a1.25 1.25 0 0 1 1.008 0l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .311-.959l3.063-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592z" class="astro-fkh43kdv"></path></g></svg> <span id="gh-stars" class="leading-tight astro-fkh43kdv">???</span> </div> <div class="flex items-center gap-x-2 astro-fkh43kdv">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-fkh43kdv"><g fill="none" class="astro-fkh43kdv"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-fkh43kdv"></path><path fill="currentColor" d="M18 3a3 3 0 0 1 1 5.83V9a4 4 0 0 1-4 4H9a2 2 0 0 0-2 2v.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2 0v2.705A4 4 0 0 1 9 11h6a2 2 0 0 0 2-2v-.17A3.001 3.001 0 0 1 18 3M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" class="astro-fkh43kdv"></path></g></svg> <span id="gh-forks" class="leading-tight astro-fkh43kdv">???</span> </div> <div class="flex items-center gap-x-2 astro-fkh43kdv">  <!-- prettier-ignore --> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="astro-fkh43kdv"><g fill="none" fill-rule="evenodd" class="astro-fkh43kdv"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" class="astro-fkh43kdv"></path><path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v1h.764a2 2 0 0 1 .894.211L16.236 6H20a1 1 0 1 1 0 2h-.382l2.276 4.553c.07.139.106.292.106.447a4 4 0 0 1-8 0c0-.155.036-.308.106-.447L16.382 8h-.146a2 2 0 0 1-.894-.211L13.764 7H13v12h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V7h-.764l-1.578.789A2 2 0 0 1 7.764 8h-.146l2.276 4.553A1 1 0 0 1 10 13a4 4 0 0 1-8 0a1 1 0 0 1 .106-.447L4.382 8H4a1 1 0 0 1 0-2h3.764l1.578-.789A2 2 0 0 1 10.236 5H11V4a1 1 0 0 1 1-1M6 9.236l-1.989 3.977a2 2 0 0 0 3.978 0zm12 0l-1.989 3.977a2 2 0 0 0 3.955.157l.023-.156z" class="astro-fkh43kdv"></path></g></svg> <span id="gh-license" class="leading-tight astro-fkh43kdv">???</span> </div> </div> <span id="gh-language" class="gh-text leading-tight astro-fkh43kdv">?????</span> </div> </a> ` })}  ${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/GithubCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/GithubCard.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey !== void 0) this.delete(firstKey);
    }
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(async (res) => parse.parse(await res.text()));
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(`Failed to fetch ${url}`, `Error ${response.status}: ${response.statusText}`)
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error] astro-embed`, e?.message ?? e, `URL: ${url}`));
      return void 0;
    }
  };
}
const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro$3 = createAstro("https://www.joeytoday.com");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { href, hideMedia = false, zoomable = true } = Astro2.props;
  const meta = await parseOpenGraph(href);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<div class="not-prose link-preview-container my-2 flex justify-center sm:my-4 astro-fov3225h"><article${addAttribute([[
    "link-preview flex flex-col overflow-hidden rounded-lg border max-sm:max-w-sm sm:flex-row",
    {
      "link-preview--has-video max-sm:max-w-none sm:flex-col": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "astro-fov3225h"], "class:list")}>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" class="astro-fov3225h"><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} class="astro-fov3225h"></video>` : meta.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": (cn("m-0 sm:max-w-60", zoomable && "zoomable") ?? "") + " astro-fov3225h", "src": meta.image, "alt": meta.imageAlt || "", "width": "1200", "height": "630" })}` : null}<a class="group font-normal text-muted-foreground no-underline hover:text-muted-foreground astro-fov3225h"${addAttribute(href, "href")} target="_blank"><div class="link-preview__content flex h-full flex-col gap-y-1 px-3 py-2 transition-colors group-hover:bg-muted sm:px-5 sm:py-4 astro-fov3225h"><header class="line-clamp-1 font-medium text-foreground transition-colors group-hover:text-primary astro-fov3225h">${meta.title}</header><p class="link-preview__description line-clamp-2 astro-fov3225h">${meta.description}${" "}${domain && renderTemplate`<small class="link-preview__domain ml-1 astro-fov3225h">(${domain})</small>`}</p></div></a></article></div>` : renderTemplate`<div class="link-preview link-preview--no-metadata astro-fov3225h"><a${addAttribute(href, "href")} target="_blank" class="astro-fov3225h">${href}</a></div>`}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/LinkPreview.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://www.joeytoday.com");
const $$QRCode = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$QRCode;
  const { content, class: className, ...props } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="qrcode-container"', "", "></div> <script", "><\/script> <script>(function(){", "\n  const renderContent = content ?? window.location.href\n  // Load qrcode\n  function loadQRcode(qrcodeContainer) {\n    if (!qrcodeContainer) throw new Error('qrcode container not found')\n    if (qrcodeContainer.innerHTML !== '') return\n    new QRCode(qrcodeContainer, renderContent)\n  }\n  const qrcodeContainer = document.getElementById('qrcode-container')\n  if (!qrcodeContainer) throw new Error('qrcode container not found')\n  loadQRcode(qrcodeContainer)\n})();<\/script>"])), maybeRenderHead(), addAttribute(className, "class"), spreadAttributes(props), addAttribute(`${config.npmCDN}/qrcodejs/qrcode.min.js`, "src"), defineScriptVars({ content }));
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/QRCode.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.joeytoday.com");
const $$MediumZoom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MediumZoom;
  const { selector = config.integ.mediumZoom.selector, background = "hsl(var(--background) / 0.8)" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script", "><\/script> <script>(function(){", "\n  mediumZoom(selector, { background })\n})();<\/script> "])), addAttribute(`${config.npmCDN}/medium-zoom/dist/pure/medium-zoom.min.umd.js`, "src"), defineScriptVars({ selector, background }));
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/MediumZoom.astro", void 0);

const $$Astro = createAstro("https://www.joeytoday.com");
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comment;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "comment-component", "comment-component", { "class": "astro-ral5i6ka" }, { "default": () => renderTemplate`${maybeRenderHead()}<div id="waline"${addAttribute((cn("not-prose", className) ?? "") + " astro-ral5i6ka", "class")}>
Comment seems to stuck. Try to refresh?✨
</div>` })}`}${renderScript($$result, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/Comment.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/node_modules/astro-pure/components/advanced/Comment.astro", void 0);

export { $$Comment as $, $$MediumZoom as a, $$QRCode as b, $$GithubCard as c, $$Quote as d, $$LinkPreview as e };
