import { b as getImage } from '../../chunks/_astro_assets_BZyUih0U.mjs';
import rss from '@astrojs/rss';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { c as config } from '../../chunks/_virtual_config_BIqm0lli.mjs';
import { s as sortMDByDate, g as getBlogCollection } from '../../chunks/server_CIY9VcqT.mjs';
export { renderers } from '../../renderers.mjs';

const imagesGlob = /* #__PURE__ */ Object.assign({


});
const renderContent = async (post, site) => {
  function remarkReplaceImageLink() {
    return async function(tree) {
      const promises = [];
      visit(tree, "image", (node) => {
        if (node.url.startsWith("/images")) {
          node.url = `${site}${node.url.replace("/", "")}`;
        } else {
          const imagePathPrefix = `/src/content/docs/${post.id}/${node.url.replace("./", "")}`;
          const promise = imagesGlob[imagePathPrefix]?.().then(async (res) => {
            const imagePath = res?.default;
            if (imagePath) {
              node.url = `${site}${(await getImage({ src: imagePath })).src.replace("/", "")}`;
            }
          });
          if (promise) promises.push(promise);
        }
      });
      await Promise.all(promises);
    };
  }
  const file = await unified().use(remarkParse).use(remarkReplaceImageLink).use(remarkRehype).use(rehypeStringify).process(post.body);
  return String(file);
};
const GET = async (context) => {
  const allPostsByDate = sortMDByDate(await getBlogCollection("docs"));
  const siteUrl = context.site ?? new URL("https://www.joeytoday.com");
  return rss({
    // Basic configs
    trailingSlash: false,
    xmlns: { h: "http://www.w3.org/TR/html4/" },
    stylesheet: "/scripts/pretty-feed-v3.xsl",
    // Contents
    title: config.title,
    description: config.description,
    site: "https://www.joeytoday.com",
    items: await Promise.all(
      allPostsByDate.map(async (post) => ({
        link: `/docs/${post.id}`,
        content: await renderContent(post, siteUrl),
        ...post.data
      }))
    )
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
