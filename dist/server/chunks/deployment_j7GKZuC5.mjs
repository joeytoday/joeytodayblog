import { p as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_CTfvycMK.mjs';
import { k as $$Aside, j as $$Steps } from './Svg_BVt06kNw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Deployment",
  "description": "Deploy your site to various platforms",
  "order": 3,
  "minutesRead": "2 min read",
  "words": 314
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "package-mode",
    "text": "Package Mode"
  }, {
    "depth": 2,
    "slug": "deployment-mode",
    "text": "Deployment Mode"
  }, {
    "depth": 3,
    "slug": "vercel",
    "text": "Vercel"
  }, {
    "depth": 3,
    "slug": "node-server",
    "text": "Node server"
  }, {
    "depth": 3,
    "slug": "bun-server",
    "text": "Bun server"
  }, {
    "depth": 3,
    "slug": "static",
    "text": "Static"
  }, {
    "depth": 3,
    "slug": "github-pages",
    "text": "GitHub Pages"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"package-mode\">Package Mode<a class=\"anchor\" href=\"#package-mode\">#</a></h2>\n<p>This theme which >= v4.0.0 has integrated NPM package mode. Recommended way is remove local package file, and install the theme integration from NPM. If there’s some reason you want to change the package content, you should link local package to your theme template. A <code>bun</code> method is integrated. You should:</p>\n<ol>\n<li>Add environment variable <code>BUN_LINK_PKG=true</code>.</li>\n<li>Run <code>bun pure check</code> to link the package automatically.</li>\n</ol>\n<p>This method can also work on Deployment for other platforms like ‘Vercel’. All you need is to add the environment variable to build options on your platform control settings. The build command <code>astro-pure check &#x26;&#x26; astro check &#x26;&#x26; astro build</code> will automatically link the package.</p>\n<h2 id=\"deployment-mode\">Deployment Mode<a class=\"anchor\" href=\"#deployment-mode\">#</a></h2>\n"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Astro had a very fantastic support for deployment. Check <a href=\"https://docs.astro.build/en/guides/deploy/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Deploy your Astro Site<span> ↗</span></a> for more.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"vercel\">Vercel<a class=\"anchor\" href=\"#vercel\">#</a></h3>\n<p>This theme supports Vercel by default:</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>Push your code to your online Git repository (GitHub, GitLab, BitBucket).</li>\n<li><a href=\"https://vercel.com/new\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Import your project<span> ↗</span></a> into Vercel.</li>\n<li>Vercel will automatically detect Astro and configure the right settings.</li>\n<li>Your application is deployed! (e.g. <a href=\"https://astro.vercel.app/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">astro.vercel.app<span> ↗</span></a>)</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>And vercel also support static method:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-diff\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">astro.config.mjs</div><pre><code><span class=\"line diff remove\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> vercelServerless </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@astrojs/vercel/serverless'</span></span>\n<span class=\"line diff add\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> vercelStatic </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@astrojs/vercel/static'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">; </span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> default</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> defineConfig</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  //   ...</span></span>\n<span class=\"line diff remove\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  adapter: </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vercelServerless</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">() </span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  adapter: </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vercelStatic</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(), </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">})</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import vercelServerless from &#x27;@astrojs/vercel/serverless&#x27; // [!code --]\nimport vercelStatic from &#x27;@astrojs/vercel/static&#x27;; // [!code ++]\n\nexport default defineConfig({\n  //   ...\n  adapter: vercelServerless() // [!code --]\n  adapter: vercelStatic(), // [!code ++]\n})\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h3 id=\"node-server\">Node server<a class=\"anchor\" href=\"#node-server\">#</a></h3>\n<p>If you are deploying with Node.js locally, you need to install <code>@astrojs/node</code> first:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> add</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@astrojs/node'</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"bun add &#x27;@astrojs/node&#x27;\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Then follow the comments in <code>astro.config.ts</code> and modify like:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-diff\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">astro.config.ts</div><pre><code><span class=\"line diff remove\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> vercelServerless </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@astrojs/vercel/serverless'</span></span>\n<span class=\"line diff add\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> node </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@astrojs/node'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> default</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> defineConfig</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  //   ...</span></span>\n<span class=\"line diff remove\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  adapter: </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vercelServerless</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(), </span></span>\n<span class=\"line diff add\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  adapter: </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">node</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">({ mode: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'standalone'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> }), </span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  integrations: [</span></span>\n<span class=\"line diff remove\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">    outputCopier</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">({ </span></span>\n<span class=\"line diff remove\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      integ: [</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'sitemap'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'pagefind'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">] </span></span>\n<span class=\"line diff remove\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    }) </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  ]</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">})</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import vercelServerless from &#x27;@astrojs/vercel/serverless&#x27; // [!code --]\nimport node from &#x27;@astrojs/node&#x27; // [!code ++]\n\nexport default defineConfig({\n  //   ...\n  adapter: vercelServerless(), // [!code --]\n  adapter: node({ mode: &#x27;standalone&#x27; }), // [!code ++]\n\n  integrations: [\n    outputCopier({ // [!code --]\n      integ: [&#x27;sitemap&#x27;, &#x27;pagefind&#x27;] // [!code --]\n    }) // [!code --]\n  ]\n})\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h3 id=\"bun-server\">Bun server<a class=\"anchor\" href=\"#bun-server\">#</a></h3>\n<p>Bun also support static method.</p>\n<p>Check <a href=\"https://www.npmjs.com/package/@nurodev/astro-bun\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@nurodev/astro-bun<span> ↗</span></a> for more.</p>\n<h3 id=\"static\">Static<a class=\"anchor\" href=\"#static\">#</a></h3>\n<p>Remove all server adapter configuration in <code>astro.config.ts</code>:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-diff\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">astro.config.ts</div><pre><code><span class=\"line diff remove\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> vercelServerless </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> '@astrojs/vercel/serverless'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> default</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> defineConfig</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  //   ...</span></span>\n<span class=\"line diff remove\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  adapter: </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vercelServerless</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(), </span></span>\n<span class=\"line diff remove\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  output: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'server'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">})</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import vercelServerless from &#x27;@astrojs/vercel/serverless&#x27; // [!code --]\n\nexport default defineConfig({\n  //   ...\n  adapter: vercelServerless(), // [!code --]\n  output: &#x27;server&#x27;, // [!code --]\n})\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h3 id=\"github-pages\">GitHub Pages<a class=\"anchor\" href=\"#github-pages\">#</a></h3>\n<p>See <a href=\"https://docs.astro.build/en/guides/deploy/github/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Astro: Configure Astro for GitHub Pages<span> ↗</span></a>.</p>"
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

const url = "src/content/docs/setup/deployment.mdx";
const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/setup/deployment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/setup/deployment.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
