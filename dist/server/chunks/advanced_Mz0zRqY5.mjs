import { p as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_Dg3zV7A2.mjs';
import { c as $$Quote, d as $$GithubCard, e as $$LinkPreview, b as $$QRCode } from './Comment_Bf4GmHrO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Advanced Components",
  "description": "Advanced components with advanced docs",
  "order": 2,
  "minutesRead": "1 min read",
  "words": 200
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "web-content-render",
    "text": "Web Content Render"
  }, {
    "depth": 3,
    "slug": "quote",
    "text": "Quote"
  }, {
    "depth": 3,
    "slug": "github-card",
    "text": "GitHub Card"
  }, {
    "depth": 3,
    "slug": "link-preview",
    "text": "Link Preview"
  }, {
    "depth": 2,
    "slug": "data-transformer",
    "text": "Data Transformer"
  }, {
    "depth": 3,
    "slug": "qrcode",
    "text": "QRCode"
  }, {
    "depth": 3,
    "slug": "medium-zoom",
    "text": "Medium Zoom"
  }, {
    "depth": 2,
    "slug": "individual-server-integration",
    "text": "Individual Server Integration"
  }, {
    "depth": 3,
    "slug": "comment-system",
    "text": "Comment System"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"web-content-render\">Web Content Render<a class=\"anchor\" href=\"#web-content-render\">#</a></h2>\n<h3 id=\"quote\">Quote<a class=\"anchor\" href=\"#quote\">#</a></h3>\n<p>The <code>Quote</code> component is a simple component that displays a random quote.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Quote } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/advanced'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Quote</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Quote } from &#x27;astro-pure/advanced&#x27;\n\n<Quote />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Renders:</p>\n"
    }), "\n", createVNode($$Quote, {}), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Config:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-highlighted\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">src/site.config.ts</div><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> integ</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> IntegrationUserConfig</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  // Add a random quote to the footer (default on homepage footer)</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  quote: {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">    // https://github.com/lukePeavey/quotable</span></span>\n<span class=\"line highlighted\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    server: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://api.quotable.io/quotes/random?maxLength=60'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, </span></span>\n<span class=\"line highlighted\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    target: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">`(data) => data[0].content || 'Error'`</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"export const integ: IntegrationUserConfig = {\n  // Add a random quote to the footer (default on homepage footer)\n  quote: {\n    // https://github.com/lukePeavey/quotable\n    server: &#x27;https://api.quotable.io/quotes/random?maxLength=60&#x27;, // [!code highlight:2]\n    target: &#x60;(data) => data[0].content || &#x27;Error&#x27;&#x60;\n  }\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p><a href=\"https://github.com/lukePeavey/quotable\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Quotable<span> ↗</span></a> is a open-source API that provides random English quotes.</p>\n<p>For Chinese quotes, you can use <a href=\"https://developer.hitokoto.cn/sentence/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Hitokoto<span> ↗</span></a>.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-highlighted\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">src/site.config.ts</div><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> integ</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> IntegrationUserConfig</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  quote: {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80</span></span>\n<span class=\"line highlighted\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    server: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://v1.hitokoto.cn/?c=i'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, </span></span>\n<span class=\"line highlighted\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    target: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">`(data) => data.hitokoto || 'Error'`</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"export const integ: IntegrationUserConfig = {\n  quote: {\n    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80\n    server: &#x27;https://v1.hitokoto.cn/?c=i&#x27;, // [!code highlight:2]\n    target: &#x60;(data) => data.hitokoto || &#x27;Error&#x27;&#x60;\n  }\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h3 id=\"github-card\">GitHub Card<a class=\"anchor\" href=\"#github-card\">#</a></h3>\n<p>The <code>GithubCard</code> component is a simple component that displays a GitHub user card.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { GithubCard } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/advanced'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">GithubCard</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> repo</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'cworld1/astro-theme-pure'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { GithubCard } from &#x27;astro-pure/advanced&#x27;\n\n<GithubCard repo=&#x27;cworld1/astro-theme-pure&#x27; />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Render:</p>\n"
    }), "\n", createVNode($$GithubCard, {
      repo: "cworld1/astro-theme-pure"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"link-preview\">Link Preview<a class=\"anchor\" href=\"#link-preview\">#</a></h3>\n<p>Preview any link inserted in the content.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { LinkPreview } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/advanced'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">LinkPreview</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> href</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://www.cloudflare.com/'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// `zoomable` option will control mediumzoom tag</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// &#x3C;LinkPreview href='https://www.cloudflare.com/' zoomable={false} /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">LinkPreview</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> href</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://www.cloudflare.com/'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> hideMedia</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { LinkPreview } from &#x27;astro-pure/advanced&#x27;\n\n<LinkPreview href=&#x27;https://www.cloudflare.com/&#x27; />\n// &#x60;zoomable&#x60; option will control mediumzoom tag\n// <LinkPreview href=&#x27;https://www.cloudflare.com/&#x27; zoomable={false} />\n<LinkPreview href=&#x27;https://www.cloudflare.com/&#x27; hideMedia />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Render:</p>\n"
    }), "\n", createVNode($$LinkPreview, {
      href: "https://www.cloudflare.com/"
    }), "\n", createVNode($$LinkPreview, {
      href: "https://www.cloudflare.com/",
      hideMedia: true
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"data-transformer\">Data Transformer<a class=\"anchor\" href=\"#data-transformer\">#</a></h2>\n<h3 id=\"qrcode\">QRCode<a class=\"anchor\" href=\"#qrcode\">#</a></h3>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { QRCode } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/advanced'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// &#x3C;QRCode /> // default to render current page link</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">QRCode</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  content</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://github.com/cworld1/astro-theme-pure'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'inline-flex max-w-44 p-3 bg-muted rounded-lg border'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { QRCode } from &#x27;astro-pure/advanced&#x27;\n\n// <QRCode /> // default to render current page link\n<QRCode\n  content=&#x27;https://github.com/cworld1/astro-theme-pure&#x27;\n  class=&#x27;inline-flex max-w-44 p-3 bg-muted rounded-lg border&#x27; />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Render:</p>\n"
    }), "\n", createVNode($$QRCode, {
      content: "https://github.com/cworld1/astro-theme-pure",
      class: "inline-flex max-w-44 p-3 bg-muted rounded-lg border"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"medium-zoom\">Medium Zoom<a class=\"anchor\" href=\"#medium-zoom\">#</a></h3>\n<p>Try click the following image.</p>\n<p><img src=\"https://github.com/user-attachments/assets/6c42b061-df7e-4696-a29b-bff07fe17d88\" alt=\"img\" class=\"zoomable\"></p>\n<p>See <a href=\"/docs/integrations/others#medium-zoom\">Other Integrations#medium-zoom</a>.</p>\n<h2 id=\"individual-server-integration\">Individual Server Integration<a class=\"anchor\" href=\"#individual-server-integration\">#</a></h2>\n<h3 id=\"comment-system\">Comment System<a class=\"anchor\" href=\"#comment-system\">#</a></h3>\n<p>See <a href=\"/docs/integrations/comment#usage\">Comment#Usage</a>.</p>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/integrations/advanced.mdx";
const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/integrations/advanced.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/integrations/advanced.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
