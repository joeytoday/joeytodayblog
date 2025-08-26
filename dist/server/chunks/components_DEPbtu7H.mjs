import { p as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_Dg3zV7A2.mjs';
import { j as $$Aside, n as $$MdxRepl, o as $$Card, l as $$Tabs, m as $$TabItem, b as $$Collapse, e as $$CardList, c as $$Timeline, k as $$Steps, $ as $$Button, a as $$Spoiler, i as $$FormattedDate, f as $$Label, g as $$Svg, d as $$Icon, I as Icons } from './Svg_aXW9aLqX.mjs';
import 'clsx';

const frontmatter = {
  "title": "User Components",
  "description": "Easily extend your content page more interactive",
  "order": 1,
  "minutesRead": "5 min read",
  "words": 813
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "containers",
    "text": "Containers"
  }, {
    "depth": 3,
    "slug": "card",
    "text": "Card"
  }, {
    "depth": 3,
    "slug": "collapse",
    "text": "Collapse"
  }, {
    "depth": 3,
    "slug": "aside",
    "text": "Aside"
  }, {
    "depth": 3,
    "slug": "tabs",
    "text": "Tabs"
  }, {
    "depth": 3,
    "slug": "mdx-repl",
    "text": "MDX Repl"
  }, {
    "depth": 2,
    "slug": "list",
    "text": "List"
  }, {
    "depth": 3,
    "slug": "cardlist",
    "text": "CardList"
  }, {
    "depth": 3,
    "slug": "timeline",
    "text": "Timeline"
  }, {
    "depth": 3,
    "slug": "steps",
    "text": "Steps"
  }, {
    "depth": 2,
    "slug": "simple-text-render",
    "text": "Simple Text Render"
  }, {
    "depth": 3,
    "slug": "button",
    "text": "Button"
  }, {
    "depth": 3,
    "slug": "spoiler",
    "text": "Spoiler"
  }, {
    "depth": 3,
    "slug": "formatted-date",
    "text": "Formatted Date"
  }, {
    "depth": 3,
    "slug": "label",
    "text": "Label"
  }, {
    "depth": 3,
    "slug": "svg-loader",
    "text": "SVG Loader"
  }, {
    "depth": 2,
    "slug": "resources",
    "text": "Resources"
  }, {
    "depth": 3,
    "slug": "icon",
    "text": "Icon"
  }];
}
function _createMdxContent(props) {
  const _components = {
    div: "div",
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Components let you easily reuse a piece of UI or styling consistently. You can use them not just in <code>.astro</code> files, but also in <code>.mdx</code> files.</p>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p><a href=\"https://mdxjs.com/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">MDX<span> ↗</span></a> is a format that lets you write JSX embedded inside Markdown. And it has no difference with markdown files in other ways.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>For <code>.astro</code>, you can directly import and use components and use. An example will also shown in the first section.</p>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>If you always import some components in your contents, you can use <a href=\"https://github.com/delucis/astro-auto-import/tree/main/packages/astro-auto-import\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">astro-auto-import<span> ↗</span></a> to automatically import them instead of manually importing them in every file.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"containers\">Containers<a class=\"anchor\" href=\"#containers\">#</a></h2>\n<h3 id=\"card\">Card<a class=\"anchor\" href=\"#card\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$Card, {
        as: "a",
        href: "#card",
        heading: "Lorem ipsum",
        subheading: "Lorem ipsum dolor sit amet, vidit suscipit at mei.",
        date: "August 2021",
        "set:html": "<p>You can even contain a list here</p>"
      }), createVNode($$Tabs, {
        slot: "desc",
        children: [createVNode($$TabItem, {
          label: "MDX",
          "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Card } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Card</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'a'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  href</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'#card'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  heading</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  subheading</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum dolor sit amet, vidit suscipit at mei.'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  date</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'August 2021'</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  You can even contain a list here</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Card</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Card } from &#x27;astro-pure/user&#x27;\n\n<Card\n  as=&#x27;a&#x27;\n  href=&#x27;#card&#x27;\n  heading=&#x27;Lorem ipsum&#x27;\n  subheading=&#x27;Lorem ipsum dolor sit amet, vidit suscipit at mei.&#x27;\n  date=&#x27;August 2021&#x27;\n>\n  You can even contain a list here\n</Card>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
        }), createVNode($$TabItem, {
          label: "Astro",
          "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"astro\"><pre><code><span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Card } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">&#x3C;!-- ... --></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Card</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  as</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'a'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  href</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'#card'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  heading</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  subheading</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum dolor sit amet, vidit suscipit at mei.'</span></span>\n<span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">  date</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'August 2021'</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  You can even contain a list here</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Card</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">astro</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"---\nimport { Card } from &#x27;astro-pure/user&#x27;\n---\n<!-- ... -->\n<Card\n  as=&#x27;a&#x27;\n  href=&#x27;#card&#x27;\n  heading=&#x27;Lorem ipsum&#x27;\n  subheading=&#x27;Lorem ipsum dolor sit amet, vidit suscipit at mei.&#x27;\n  date=&#x27;August 2021&#x27;\n>\n  You can even contain a list here\n</Card>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"collapse\">Collapse<a class=\"anchor\" href=\"#collapse\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$Collapse, {
        title: "Lorem ipsum",
        "set:html": "Lorem ipsum dolor sit amet, vidit suscipit at mei."
      }), createVNode($$Collapse, {
        title: "Lorem ipsum",
        children: [createVNode("div", {
          slot: "before",
          class: "mt-2",
          "set:html": "Are you sure you want to see?"
        }), createVNode(_components.div, {
          "set:html": "Lorem ipsum dolor sit amet, vidit suscipit at mei."
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Collapse } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Collapse</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> Lorem ipsum dolor sit amet, vidit suscipit at mei. &#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Collapse</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Collapse</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> slot</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'before'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'mt-2'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Are you sure you want to see?&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Lorem ipsum dolor sit amet, vidit suscipit at mei.&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Collapse</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Collapse } from &#x27;astro-pure/user&#x27;\n\n<Collapse title=&#x27;Lorem ipsum&#x27;> Lorem ipsum dolor sit amet, vidit suscipit at mei. </Collapse>\n<Collapse title=&#x27;Lorem ipsum&#x27;>\n  <div slot=&#x27;before&#x27; class=&#x27;mt-2&#x27;>Are you sure you want to see?</div>\n  <div>Lorem ipsum dolor sit amet, vidit suscipit at mei.</div>\n</Collapse>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"aside\">Aside<a class=\"anchor\" href=\"#aside\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "100%",
      children: [createVNode($$Aside, {
        "set:html": "No type selected will default to ‘note’. 😉"
      }), createVNode($$Aside, {
        type: "tip",
        "set:html": "<p>Other content is also supported in aside! 😍</p><div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><pre><code><span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// A code snippet, for example.</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">js</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"// A code snippet, for example.\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      }), createVNode($$Aside, {
        type: "caution",
        title: "You should know it!",
        "set:html": "Is your code buggy again? 🤨"
      }), createVNode($$Aside, {
        type: "danger",
        "set:html": "Have you used <code>rm -rf</code> to clean your computer? 😡"
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Aside } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>No type selected will default to 'note'. 😉&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> type</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"tip\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Other content is also supported in aside! 😍</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">// ```js</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">// A code snippet, for example.</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">// ```</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> type</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'caution'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'You should know it!'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Is your code buggy again? 🤨&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> type</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'danger'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Have you used `rm -rf` to clean your computer? 😡&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Aside</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Aside } from &#x27;astro-pure/user&#x27;\n\n<Aside>No type selected will default to &#x27;note&#x27;. 😉</Aside>\n<Aside type=&#x22;tip&#x22;>\nOther content is also supported in aside! 😍\n\n// &#x60;&#x60;&#x60;js\n// A code snippet, for example.\n// &#x60;&#x60;&#x60;\n</Aside>\n<Aside type=&#x27;caution&#x27; title=&#x27;You should know it!&#x27;>Is your code buggy again? 🤨</Aside>\n<Aside type=&#x27;danger&#x27;>Have you used &#x60;rm -rf&#x60; to clean your computer? 😡</Aside>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>This component also has a remark support version (which can directly use in <code>.md</code>), but not integrated in this theme. You can check <a href=\"https://github.com/withastro/starlight/blob/main/packages/starlight/integrations/asides.ts\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">packages/starlight/index.ts<span> ↗</span></a> for reference code.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"md\"><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">:::tip</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">This theme author is a good guy.</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">:::</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">md</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\":::tip\nThis theme author is a good guy.\n:::\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<h3 id=\"tabs\">Tabs<a class=\"anchor\" href=\"#tabs\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "80%",
      children: [createVNode($$Tabs, {
        children: [createVNode($$TabItem, {
          label: "Stars",
          "set:html": "Sirius, Vega, Betelgeuse"
        }), createVNode($$TabItem, {
          label: "Moons",
          "set:html": "Io, Europa, Ganymede"
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Tabs, TabItem } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Tabs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">TabItem</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> label</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"Stars\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Sirius, Vega, Betelgeuse&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">TabItem</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">TabItem</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> label</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"Moons\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Io, Europa, Ganymede&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">TabItem</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Tabs</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Tabs, TabItem } from &#x27;astro-pure/user&#x27;;\n\n<Tabs>\n  <TabItem label=&#x22;Stars&#x22;>Sirius, Vega, Betelgeuse</TabItem>\n  <TabItem label=&#x22;Moons&#x22;>Io, Europa, Ganymede</TabItem>\n</Tabs>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"mdx-repl\">MDX Repl<a class=\"anchor\" href=\"#mdx-repl\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$MdxRepl, {
        width: "100%",
        children: [createVNode(_components.p, {
          children: "Hello"
        }), createVNode(Fragment$1, {
          slot: "desc",
          "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"html\"><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Hello&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">html</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"<p>Hello</p>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { MdxRepl } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// Width is optional; using width parameter to set</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// all elements inside the MDX Repl component.</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// (slot desc is not included this parameter)</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">MdxRepl</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> width</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'100%'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Hello&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Fragment</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> slot</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'desc'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  ```html</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Hello&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">p</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  ```</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Fragment</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">MdxRepl</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { MdxRepl } from &#x27;astro-pure/user&#x27;\n\n// Width is optional; using width parameter to set\n// all elements inside the MDX Repl component.\n// (slot desc is not included this parameter)\n<MdxRepl width=&#x27;100%&#x27;>\n<p>Hello</p>\n<Fragment slot=&#x27;desc&#x27;>\n  &#x60;&#x60;&#x60;html\n  <p>Hello</p>\n  &#x60;&#x60;&#x60;\n</Fragment>\n</MdxRepl>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>You can combine any other components for the sclot <code>desc</code>. And <code>&#x3C;Fragment></code> will not be rendered as a parent html container tag.</p>\n<h2 id=\"list\">List<a class=\"anchor\" href=\"#list\">#</a></h2>\n<h3 id=\"cardlist\">CardList<a class=\"anchor\" href=\"#cardlist\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "80%",
      children: [createVNode($$CardList, {
        title: "A list",
        list: [{
          title: 'I am hidden!'
        }],
        collapse: true
      }), createVNode($$CardList, {
        title: "A list",
        list: [{
          title: 'Lorem ipsum',
          link: '#list'
        }, {
          title: 'Dolor sit amet',
          children: [{
            title: 'Vidit suscipit',
            link: '#'
          }]
        }]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { CardList } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">CardList</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'A list'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> list</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  [{title: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'I am hidden!'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}]</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">} </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">collapse</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">CardList</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'A list'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> list</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  [</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    { title: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Lorem ipsum'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, link: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'#list'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> },</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    { title: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Dolor sit amet'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, children: [{</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      title: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Vidit suscipit'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, link: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'#'</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    }] }</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  ]</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">} /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { CardList } from &#x27;astro-pure/user&#x27;\n\n<CardList title=&#x27;A list&#x27; list={\n  [{title: &#x27;I am hidden!&#x27;}]\n} collapse />\n<CardList title=&#x27;A list&#x27; list={\n  [\n    { title: &#x27;Lorem ipsum&#x27;, link: &#x27;#list&#x27; },\n    { title: &#x27;Dolor sit amet&#x27;, children: [{\n      title: &#x27;Vidit suscipit&#x27;, link: &#x27;#&#x27;\n    }] }\n  ]\n} />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"timeline\">Timeline<a class=\"anchor\" href=\"#timeline\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$Timeline, {
        events: [{
          date: 'August 2021',
          content: 'Hello'
        }, {
          date: 'August 2022',
          content: '<i>World!</i>'
        }]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Timeline } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Timeline</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> events</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  [</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    { date: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'August 2021'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, content: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Hello'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> },</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    { date: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'August 2022'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, content: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'&#x3C;i>World!&#x3C;/i>'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> },</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  ]</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">} /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Timeline } from &#x27;astro-pure/user&#x27;\n\n<Timeline events={\n  [\n    { date: &#x27;August 2021&#x27;, content: &#x27;Hello&#x27; },\n    { date: &#x27;August 2022&#x27;, content: &#x27;<i>World!</i>&#x27; },\n  ]\n} />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"steps\">Steps<a class=\"anchor\" href=\"#steps\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "80%",
      children: [createVNode(_components.div, {
        children: [createVNode(_components.p, {
          "set:html": "How to Yi Jian San Lian:"
        }), createVNode($$Steps, {
          "set:html": "<ol>\n<li>\n<p>Dian Zan</p>\n</li>\n<li>\n<p>Tou Bi</p>\n</li>\n<li>\n<p>Shou Cang</p>\n<p>Or GuanZhu sometimes.</p>\n</li>\n</ol>"
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Steps } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">How to Yi Jian San </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">Lian</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">:</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Steps</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">1. Dian Zan</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">2. Tou Bi</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">3. Shou Cang</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  Or GuanZhu sometimes.</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Steps</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Steps } from &#x27;astro-pure/user&#x27;\n\nHow to Yi Jian San Lian:\n\n<Steps>\n1. Dian Zan\n2. Tou Bi\n3. Shou Cang\n  \n  Or GuanZhu sometimes.\n</Steps>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"simple-text-render\">Simple Text Render<a class=\"anchor\" href=\"#simple-text-render\">#</a></h2>\n<h3 id=\"button\">Button<a class=\"anchor\" href=\"#button\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode("div", {
        class: "flex gap-x-2",
        children: [createVNode($$Button, {
          as: "div",
          title: "Simple"
        }), createVNode($$Button, {
          as: "a",
          href: "#button",
          title: "Link style",
          style: "ahead",
          class: "not-prose"
        }), createVNode($$Button, {
          as: "div",
          title: "Back",
          style: "back"
        }), createVNode($$Button, {
          as: "div",
          title: "Pill style",
          style: "pill"
        }), createVNode($$Button, {
          as: "div",
          style: "pill",
          "set:html": "<i>Italic</i>"
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Button } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'flex gap-x-2'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'div'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Simple'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'a'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> href</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'#button'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Link style'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'ahead'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'not-prose'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'div'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Back'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'back'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'div'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Pill style'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'pill'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'div'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'pill'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">i</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>Italic&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">i</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Button } from &#x27;astro-pure/user&#x27;\n\n<div class=&#x27;flex gap-x-2&#x27;>\n  <Button as=&#x27;div&#x27; title=&#x27;Simple&#x27; />\n  <Button as=&#x27;a&#x27; href=&#x27;#button&#x27; title=&#x27;Link style&#x27; style=&#x27;ahead&#x27; class=&#x27;not-prose&#x27; />\n  <Button as=&#x27;div&#x27; title=&#x27;Back&#x27; style=&#x27;back&#x27; />\n  <Button as=&#x27;div&#x27; title=&#x27;Pill style&#x27; style=&#x27;pill&#x27; />\n  <Button as=&#x27;div&#x27; style=&#x27;pill&#x27;><i>Italic</i></Button>\n</div>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"spoiler\">Spoiler<a class=\"anchor\" href=\"#spoiler\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode(_components.p, {
        children: [createVNode($$Spoiler, {
          "set:html": "No one can find me."
        }), " But I am exposed here."]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Spoiler } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Spoiler</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>No one can find me.&#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Spoiler</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">> But </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">I</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> am exposed here.</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Spoiler } from &#x27;astro-pure/user&#x27;\n\n<Spoiler>No one can find me.</Spoiler> But I am exposed here.\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"formatted-date\">Formatted Date<a class=\"anchor\" href=\"#formatted-date\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$FormattedDate, {
        date: new Date('2021-08-01'),
        dateTimeOptions: {
          month: 'short'
        }
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { FormattedDate } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">FormattedDate</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> date</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">new</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> Date</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'2021-08-01'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)} </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">dateTimeOptions</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{{ month: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'short'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> }} /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { FormattedDate } from &#x27;astro-pure/user&#x27;\n\n<FormattedDate date={new Date(&#x27;2021-08-01&#x27;)} dateTimeOptions={{ month: &#x27;short&#x27; }} />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"label\">Label<a class=\"anchor\" href=\"#label\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$Label, {
        title: "Hello"
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Label } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Label</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Hello'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Label } from &#x27;astro-pure/user&#x27;\n\n<Label title=&#x27;Hello&#x27; />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"svg-loader\">SVG Loader<a class=\"anchor\" href=\"#svg-loader\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      children: [createVNode($$Svg, {
        src: import('./key_DG437zAG.mjs')
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Svg } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Svg</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> src</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'@/assets/icons/key.svg?raw'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)} /></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Svg } from &#x27;astro-pure/user&#x27;\n\n<Svg src={import(&#x27;@/assets/icons/key.svg?raw&#x27;)} />\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"resources\">Resources<a class=\"anchor\" href=\"#resources\">#</a></h2>\n<h3 id=\"icon\">Icon<a class=\"anchor\" href=\"#icon\">#</a></h3>\n"
    }), createVNode($$MdxRepl, {
      width: "100%",
      children: [createVNode(_components.div, {
        children: [createVNode(_components.p, {
          children: ["Single use: ", createVNode($$Icon, {
            name: "rss",
            class: "inline"
          })]
        }), createVNode(_components.p, {
          "set:html": "Preview all icons available (click button to copy):"
        }), createVNode("div", {
          class: "flex flex-wrap gap-2",
          children: Object.keys(Icons).map(icon => {
            const script = `navigator.clipboard.writeText('${icon}');document.dispatchEvent(new CustomEvent('toast',{detail:{message:'Copied "${icon}" to clipboard!'}}))`;
            return createVNode($$Button, {
              as: "button",
              type: "button",
              class: "cursor-pointer",
              onClick: script,
              children: [createVNode($$Icon, {
                slot: "before",
                name: icon
              }), createVNode("span", {
                children: icon
              })]
            });
          })
        })]
      }), createVNode(Fragment$1, {
        slot: "desc",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"jsx\"><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Icon } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Single </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">use</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">: &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Icon</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> name</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'rss'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'inline'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> /></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Preview all icons </span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">available</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> (click button to copy):</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Icons </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">as</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> allIcons } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/libs'</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">import</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { Button } </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">from</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> 'astro-pure/user'</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'flex flex-wrap gap-2'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  Object.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">keys</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(allIcons).</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">map</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#E36209;--shiki-dark:#FFAB70\">icon</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =></span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">    const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> script</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> `navigator.clipboard.writeText('${</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">icon</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">}');document.dispatchEvent(new CustomEvent('toast',{detail:{message:'Copied \"${</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">icon</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">}\" to clipboard!'}}))`</span></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">    return</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> (</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> as</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'button'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> type</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'button'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> class</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'cursor-pointer'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> onclick</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{script}></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">        &#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Icon</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> slot</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'before'</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> name</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">{icon} /></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">        &#x3C;</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">span</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">>{icon}&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">span</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">      &#x3C;/</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">Button</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">    )</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">  })</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">&#x3C;/</span><span style=\"color:#22863A;--shiki-dark:#85E89D\">div</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">jsx</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"import { Icon } from &#x27;astro-pure/user&#x27;\n\nSingle use: <Icon name=&#x27;rss&#x27; class=&#x27;inline&#x27; />\n\nPreview all icons available (click button to copy):\n\nimport { Icons as allIcons } from &#x27;astro-pure/libs&#x27;\nimport { Button } from &#x27;astro-pure/user&#x27;\n\n<div class=&#x27;flex flex-wrap gap-2&#x27;>\n{\n  Object.keys(allIcons).map(icon => {\n    const script = &#x60;navigator.clipboard.writeText(&#x27;${icon}&#x27;);document.dispatchEvent(new CustomEvent(&#x27;toast&#x27;,{detail:{message:&#x27;Copied &#x22;${icon}&#x22; to clipboard!&#x27;}}))&#x60;\n    return (\n      <Button as=&#x27;button&#x27; type=&#x27;button&#x27; class=&#x27;cursor-pointer&#x27; onclick={script}>\n        <Icon slot=&#x27;before&#x27; name={icon} />\n        <span>{icon}</span>\n      </Button>\n    )\n  })\n}\n</div>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(_components.p, {
      "set:html": "There’s also some <a href=\"/docs/integrations/advanced\">Advanced Components</a>, which may suit for you. Hope you enjoy using these components!"
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

const url = "src/content/docs/integrations/components.mdx";
const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/integrations/components.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/integrations/components.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
