import { e as createAstro, c as createComponent, s as spreadAttributes, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_Dg3zV7A2.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_BZyUih0U.mjs';

const friends = [{"id_name":"cf-links","desc":"Common links included in circle friends","link_list":[{"name":"Arthals' ink","intro":"所见高山远木，阔云流风；所幸岁月盈余，了无拘束","link":"https://arthals.ink/","avatar":"https://cdn.arthals.ink/Arthals.png"},{"name":"CWorld Site","intro":"求知若愚，虚怀若谷","link":"https://cworld0.com/","avatar":"https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200"},{"name":"ZY知识库","intro":"一个技术探索与分享的平台","link":"https://blog.pljzy.top/","avatar":"https://blog.pljzy.top/_astro/logo.BxIxyJV1_Z19cEQW.webp"}]},{"id_name":"inactive-links","desc":"Inactive or rule-breaking friends","link_list":[]},{"id_name":"special-links","desc":"Other special links","link_list":[{"name":"虫洞","intro":"随机前往十年之约的成员博客","link":"https://www.foreverblog.cn/go.html","avatar":"/images/wormhole.png"},{"name":"开往","intro":"随机前往开往的成员博客","link":"https://www.travellings.cn/go.html","avatar":"https://www.travellings.cn/assets/travelling.png"},{"name":"BlogFinder","intro":"聚合优秀个人博客","link":"https://bf.zzxworld.com/s","avatar":"https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508020204279.png"}]},{"id_name":"cf-links","desc":"Common links included in circle friends","link_list":[{"name":"豆瓣","intro":"我的阅读和观影 🎬","link":"https://www.douban.com/people/147872735/","avatar":"https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508012343512.svg"},{"name":"小红书","intro":"购买 Notion 模板请看 👀","link":"https://www.xiaohongshu.com/user/profile/59dda42e44363b2e63937e31","avatar":"https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508012350936.png"},{"name":"公众号","intro":"微信搜索「偶然时刻」","link":"","avatar":"https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508061502423.png"}]}];
const links = {
  friends,
};

const $$Astro = createAstro("https://www.joeytoday.com");
const $$FriendList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FriendList;
  function shuffle(arr) {
    return arr.sort(function() {
      return Math.random() - 0.5;
    });
  }
  const { title, list: friend_list, ...props } = Astro2.props;
  return renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2${addAttribute(friend_list.id_name, "id")}>${title}</h2>`}<div class="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"${spreadAttributes(props)}>${friend_list.link_list.length > 0 ? shuffle(friend_list.link_list).map((frd) => renderTemplate`<a${addAttribute(frd.link, "href")} target="_blank" class="no-underline"><div class="group relative h-full overflow-hidden rounded-2xl border bg-background px-2.5 py-1.5 transition-colors hover:bg-muted sm:px-4 sm:py-2"><div class="relative z-10 flex h-full items-center gap-3"><div class="relative h-14 w-14 min-w-14 overflow-hidden rounded-full">${renderComponent($$result, "Image", $$Image, { "class": "my-0 bg-white", "src": frd.avatar, "height": 80, "width": 80, "alt": "avatar", "loading": "lazy" })}<div class="absolute start-0 top-0 h-full w-full"><div class="flex h-full w-full items-center justify-center rounded-full bg-foreground opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="me-2 stroke-background"><line x1="5" y1="12" x2="19" y2="12" class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"></polyline></svg></div></div></div><div class="flex flex-col gap-y-1"><p class="my-0 line-clamp-1 text-sm">${frd.name}</p><p class="my-0 line-clamp-1 text-xs text-muted-foreground">${frd.intro}</p></div></div>${renderComponent($$result, "Image", $$Image, { "class": "absolute -start-2 top-0 z-0 my-0 h-full w-2/3 bg-white object-cover opacity-15", "src": frd.avatar, "height": 80, "width": 80, "alt": "avatar bg", "loading": "lazy", "style": {
    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
    msMaskImage: "-ms-linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
    WebkitMaskImage: "-webkit-linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
  } })}</div></a>`) : renderTemplate`<p>Nothing here.</p>`}</div>`;
}, "/Users/kaiyijing/GitHub/joeytodayblog/src/components/links/FriendList.astro", void 0);

export { $$FriendList as $, links as l };
