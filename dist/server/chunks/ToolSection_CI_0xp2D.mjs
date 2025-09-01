import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, r as renderComponent, F as Fragment, a as renderTemplate } from './astro/server_Dg3zV7A2.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_BZyUih0U.mjs';
import { g as $$Svg } from './Svg_D_ielPpo.mjs';
import { c as cn } from './class-merge_ZZ4CtDft.mjs';

const $$Astro = createAstro("https://www.joeytoday.com");
const $$ToolSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToolSection;
  const { class: className, title, tools, ...props } = Astro2.props;
  function isImageMetadata(obj) {
    return obj && typeof obj === "object" && "src" in obj;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("not-prose flex flex-col rounded-xl border py-3 px-3 gap-y-3 sm:gap-y-4", className), "class")}${spreadAttributes(props)}> <div class="m-0 px-2 text-lg font-medium">${title}</div> <div class="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2"> ${tools.map((tool) => renderTemplate`<a class="group relative text-sm leading-normal no-underline"${addAttribute(tool.href, "href")}${addAttribute(tool.name, "id")} target="_blank"> <div class="flex items-center gap-x-3 rounded-lg border border-transparent px-1.5 py-1 transition-colors hover:border-border hover:bg-muted"> ${tool.darkIcon ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${isImageMetadata(tool.icon) ? renderTemplate`<div class="size-10 rounded-lg bg-primary-foreground p-2 dark:hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": tool.icon, "alt": tool.name, "class": "h-full w-full object-contain" })} </div>` : renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "src": tool.icon, "class": "size-10 rounded-lg bg-primary-foreground fill-foreground p-2 dark:hidden" })}`}${isImageMetadata(tool.darkIcon) ? renderTemplate`<div class="size-10 rounded-lg bg-primary-foreground p-2 hidden dark:block"> ${renderComponent($$result2, "Image", $$Image, { "src": tool.darkIcon, "alt": tool.name, "class": "h-full w-full object-contain" })} </div>` : renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "src": tool.darkIcon, "class": "size-10 rounded-lg bg-primary-foreground fill-foreground p-2 hidden dark:block" })}`}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${isImageMetadata(tool.icon) ? renderTemplate`<div class="size-10 rounded-lg bg-primary-foreground p-2"> ${renderComponent($$result2, "Image", $$Image, { "src": tool.icon, "alt": tool.name, "class": "h-full w-full object-contain" })} </div>` : renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "src": tool.icon, "class": "size-10 rounded-lg bg-primary-foreground fill-foreground p-2" })}`}` })}`} <div class="z-20 flex flex-col"> <div class="font-medium text-foreground">${tool.name}</div> <div class="font-normal">${tool.description}</div> </div> </div> </a>`)} </div> </div>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/about/ToolSection.astro", void 0);

export { $$ToolSection as $ };
