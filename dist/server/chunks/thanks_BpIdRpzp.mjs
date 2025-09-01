import { p as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_Dg3zV7A2.mjs';
import { d as $$GithubCard } from './Comment_CIMhtcSk.mjs';
import { $ as $$Button } from './Svg_D_ielPpo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Acknowledgements",
  "description": "Acknowledgements for this theme project",
  "order": 5,
  "minutesRead": "1 min read",
  "words": 80
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contributions",
    "text": "Contributions"
  }, {
    "depth": 2,
    "slug": "sponsorship",
    "text": "Sponsorship"
  }, {
    "depth": 2,
    "slug": "open-source-references",
    "text": "Open Source References"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>The astro-theme-pure theme is open source under the <a href=\"https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Apache 2.0<span> ↗</span></a> license. Please abide by this license for any further development.</p>\n"
    }), createVNode($$GithubCard, {
      repo: "cworld1/astro-theme-pure"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"contributions\">Contributions</h2>\n<p>A big thank you to everyone who has contributed to the <a href=\"https://github.com/cworld1/astro-theme-pure\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">astro-theme-pure<span> ↗</span></a>. The open-source community is amazing because of you.</p>\n<p><a href=\"https://github.com/cworld1/astro-theme-pure/graphs/contributors\" rel=\"nofollow noopener noreferrer\" target=\"_blank\"><img src=\"https://contrib.rocks/image?repo=cworld1/astro-theme-pure\" alt=\"contributors\" class=\"zoomable\"><span> ↗</span></a></p>\n<h2 id=\"sponsorship\">Sponsorship</h2>\n<p>We would like to express our gratitude to all the sponsors.</p>\n"
    }), createVNode($$Button, {
      href: "https://cworld0.com/projects#sponsorship",
      target: "_blank",
      title: "Become a Sponsor",
      style: "ahead"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"open-source-references\">Open Source References</h2>\n<p>This theme uses/references/derives content from the following projects:</p>\n<p>Framework:</p>\n<ul>\n<li><a href=\"https://github.com/withastro/astro\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">astro<span> ↗</span></a></li>\n<li><a href=\"https://github.com/unocss/unocss\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">unocss<span> ↗</span></a></li>\n</ul>\n<p>Content rendering:</p>\n<ul>\n<li><a href=\"https://github.com/mdx-js/mdx/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">mdx<span> ↗</span></a></li>\n<li><a href=\"https://github.com/unocss/unocss/tree/main/packages-presets/preset-typography\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@unocss/preset-typography<span> ↗</span></a></li>\n<li><a href=\"https://github.com/rehypejs/rehype\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@unifiedjs/rehype<span> ↗</span></a></li>\n<li><a href=\"https://github.com/remarkjs/remark\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">@unifiedjs/remark<span> ↗</span></a></li>\n</ul>\n<p>Integrations:</p>\n<ul>\n<li>Code block: <a href=\"https://github.com/shikijs/shiki\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Shiki<span> ↗</span></a></li>\n<li>Image lightbox: <a href=\"https://github.com/francoischalifour/medium-zoom\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Medium Zoom<span> ↗</span></a></li>\n<li>Comment: <a href=\"https://github.com/walinejs/waline\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Waline<span> ↗</span></a></li>\n<li>Search: <a href=\"https://github.com/cloudcannon/pagefind\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Pagefind<span> ↗</span></a></li>\n</ul>\n<p>Others:</p>\n<ul>\n<li>Compress: <a href=\"https://github.com/PlayForm/Compress\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">playform/compress<span> ↗</span></a></li>\n<li>Image compress: <a href=\"https://github.com/lovell/sharp\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">sharp<span> ↗</span></a></li>\n</ul>"
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

const url = "src/content/docs/advanced/thanks.mdx";
const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/advanced/thanks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/advanced/thanks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
