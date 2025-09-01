import { p as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_Dg3zV7A2.mjs';
import 'clsx';

const frontmatter = {
  "title": "Configuration",
  "description": "Configuration files",
  "order": 4,
  "minutesRead": "1 min read",
  "words": 163
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "theme-configuration",
    "text": "Theme Configuration"
  }, {
    "depth": 2,
    "slug": "astro-configuration",
    "text": "Astro Configuration"
  }, {
    "depth": 2,
    "slug": "eslint-configuration",
    "text": "ESLint Configuration"
  }, {
    "depth": 2,
    "slug": "prettier-configuration",
    "text": "Prettier Configuration"
  }, {
    "depth": 2,
    "slug": "unocss-configuration",
    "text": "UnoCSS Configuration"
  }, {
    "depth": 2,
    "slug": "typescript-configuration",
    "text": "Typescript Configuration"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"theme-configuration\">Theme Configuration</h2>\n<p>File: <code>src/site.config.ts</code></p>\n<p>pending update…</p>\n<h2 id=\"astro-configuration\">Astro Configuration</h2>\n<p>File: <code>astro.config.mjs</code></p>\n<p>You can configure it to change deployment methods, add rehype &#x26; remark plugins, and more.</p>\n<p>Read more about Astro configuration <a href=\"https://docs.astro.build/en/guides/configuring-astro/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">here<span> ↗</span></a>.</p>\n<h2 id=\"eslint-configuration\">ESLint Configuration</h2>\n<p>File: <code>eslint.config.mjs</code></p>\n<p>You can configure ESLint to change rules and security checks.</p>\n<p>Read more about ESLint configuration <a href=\"https://eslint.org/docs/latest/use/configure/configuration-files\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">here<span> ↗</span></a>.</p>\n<h2 id=\"prettier-configuration\">Prettier Configuration</h2>\n<p>File: <code>prettier.config.mjs</code></p>\n<p>You can configure Prettier to change code formatting rules, this can change your experience using package command <code>format</code> and extension support for your favorite IDE.</p>\n<p>Options are available <a href=\"https://prettier.io/docs/en/options\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">here<span> ↗</span></a>.</p>\n<h2 id=\"unocss-configuration\">UnoCSS Configuration</h2>\n<p>File: <code>uno.config.ts</code></p>\n<p>It is a utility-first CSS framework building custom designs. Theme also uses its preset <code>typography</code> to make typesettings (checkout <a href=\"/docs/integrations/others#unocsspreset-typography\">Other Integrations#<code>@unocss/preset-typography</code></a> for more info).</p>\n<p>Get to know more:</p>\n<ul>\n<li><a href=\"https://unocss.dev/presets/typography\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">UnoCSS: Typography preset<span> ↗</span></a></li>\n<li><a href=\"https://unocss.dev/integrations/astro\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">UnoCSS: Astro Integration<span> ↗</span></a></li>\n<li><a href=\"https://unocss.dev/config\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">UnoCSS: Configuring UnoCSS<span> ↗</span></a></li>\n</ul>\n<p>And you can also customize the theme default UnoCSS palette by modifying the CSS file at <code>src/assets/styles/app.css</code>. For example, if you want to change the default theme color, you can modify the following code:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark has-diff\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"css\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">src/assets/styles/app.css</div><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">:root</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">  /* ... */</span></span>\n<span class=\"line diff remove\"><span style=\"color:#E36209;--shiki-dark:#FFAB70\">  --primary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">200</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 29</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">%</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 45</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">%</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">; </span></span>\n<span class=\"line diff add\"><span style=\"color:#E36209;--shiki-dark:#FFAB70\">  --primary</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: &#x3C;Your favorite </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> using raw hsl>; </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">css</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\":root {\n  /* ... */\n  --primary: 200 29% 45%; /* [!code --] */\n  --primary: <Your favorite color using raw hsl>; /* [!code ++] */\n}\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h2 id=\"typescript-configuration\">Typescript Configuration</h2>\n<p>File: <code>tsconfig.json</code></p>"
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
const url = "src/content/docs/setup/configuration.mdx";
const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/setup/configuration.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/setup/configuration.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
