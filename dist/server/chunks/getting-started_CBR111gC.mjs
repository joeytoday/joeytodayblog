import { p as createVNode, F as Fragment, ay as __astro_tag_component__ } from './astro/server_CTfvycMK.mjs';
import { k as $$Aside, j as $$Steps, n as $$Tabs, o as $$TabItem } from './Svg_BVt06kNw.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting Started",
  "description": "Get started with the Astro Theme Pure",
  "order": 1,
  "minutesRead": "3 min read",
  "words": 566
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 3,
    "slug": "install-using-template",
    "text": "Install Using Template"
  }, {
    "depth": 3,
    "slug": "install-using-fork",
    "text": "Install Using Fork"
  }, {
    "depth": 2,
    "slug": "start-the-dev-server",
    "text": "Start the Dev Server"
  }, {
    "depth": 2,
    "slug": "migrate-to-astro",
    "text": "Migrate to Astro"
  }, {
    "depth": 2,
    "slug": "theme-file-structure",
    "text": "Theme File Structure"
  }, {
    "depth": 2,
    "slug": "simple-setup",
    "text": "Simple Setup"
  }];
}
function _createMdxContent(props) {
  const _components = {
    button: "button",
    code: "code",
    div: "div",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    svg: "svg",
    ul: "ul",
    use: "use",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"installation\">Installation<a class=\"anchor\" href=\"#installation\">#</a></h2>\n<p>Two way to install. “Template” way is lightweight and simple, but hard to update; while “Fork” way is easy to update but needs some skills for git.</p>\n<h3 id=\"install-using-template\">Install Using Template<a class=\"anchor\" href=\"#install-using-template\">#</a></h3>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Astro has a great article teaching you setting up project: <a href=\"https://docs.astro.build/en/install-and-setup/#use-a-theme-or-starter-template\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Install and set up Astro #Use a theme or starter template<span> ↗</span></a></p>"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Install the theme"
          }), "\n", createVNode(_components.p, {
            children: "Execute the following command in the your user directory to install the theme:"
          }), "\n", createVNode($$Tabs, {
            children: [createVNode($$TabItem, {
              label: "bun",
              children: [createVNode(_components.div, {
                class: "astro-code astro-code-themes github-light github-dark",
                style: {
                  backgroundColor: "#fff",
                  "--shiki-dark-bg": "#24292e",
                  color: "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  overflowX: "auto"
                },
                tabindex: "0",
                "data-language": "shell",
                children: [createVNode(_components.pre, {
                  children: createVNode(_components.code, {
                    children: createVNode(_components.span, {
                      class: "line",
                      children: [createVNode(_components.span, {
                        style: {
                          color: "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "bun"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " create"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " astro@latest"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " --template"
                      }), createVNode(_components.span, {
                        style: {
                          color: "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: " cworld1/astro-theme-pure"
                      })]
                    })
                  })
                }), createVNode(_components.span, {
                  class: "language ps-1 pe-3 text-sm bg-muted text-muted-foreground",
                  children: "shell"
                }), createVNode(_components.button, {
                  class: "copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground",
                  "data-code": "bun create astro@latest --template cworld1/astro-theme-pure",
                  onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
                  children: [createVNode(_components.div, {
                    class: "ready",
                    children: createVNode(_components.svg, {
                      class: "size-5",
                      children: createVNode(_components.use, {
                        href: "/icons/code.svg#mingcute-clipboard-line"
                      })
                    })
                  }), createVNode(_components.div, {
                    class: "success hidden",
                    children: createVNode(_components.svg, {
                      class: "size-5",
                      children: createVNode(_components.use, {
                        href: "/icons/code.svg#mingcute-file-check-line"
                      })
                    })
                  })]
                })]
              }), createVNode($$Aside, {
                type: "tip",
                "set:html": "<p>For Bun, if the installation is slow, it is recommended to use a mirror configuration by creating <code>bunfig.toml</code> under the project root directory:</p><div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"toml\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">bunfig.toml</div><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">[</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">install</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">registry = </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"&#x3C;npm mirror site>\"</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">toml</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"[install]\nregistry = &#x22;<npm mirror site>&#x22;\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div><p>For details about other PM mirror configs, you may need to see their official documents.</p>"
              })]
            }), createVNode($$TabItem, {
              label: "pnpm",
              "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> create</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> astro@latest</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> --template</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> cworld1/astro-theme-pure</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"pnpm create astro@latest --template cworld1/astro-theme-pure\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
            }), createVNode($$TabItem, {
              label: "yarn",
              "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">yarn</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> create</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> astro</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> --template</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> cworld1/astro-theme-pure</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"yarn create astro --template cworld1/astro-theme-pure\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
            }), createVNode($$TabItem, {
              label: "npm",
              "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">npm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> create</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> astro@latest</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> --</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> --template</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> cworld1/astro-theme-pure</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"npm create astro@latest -- --template cworld1/astro-theme-pure\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
            })]
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<p>By default, this command will use the template repository’s main branch. To use a different branch name, pass it as part of the <code>--template</code> argument: <code>cworld1/astro-theme-pure#&#x3C;branch></code>.</p>\n"
          })]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Answer the questions and follow the instructions of the CLI wizard.</p>\n</li>\n<li>\n<p>VOILA!</p>\n<p>You can now <a href=\"https://docs.astro.build/en/install-and-setup/#start-the-astro-dev-server\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">start the Astro dev server<span> ↗</span></a> and see a live preview of your project while you make it your own!</p>\n</li>\n"
        })]
      })
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h3 id=\"install-using-fork\">Install Using Fork<a class=\"anchor\" href=\"#install-using-fork\">#</a></h3>\n<p>You only need to <a href=\"https://github.com/cworld1/astro-theme-pure/fork\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">click fork button at theme repository<span> ↗</span></a> to create your project; then clone the forked repository to your local machine.</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">git</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> clone</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> https://github.com/</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">your-usernam</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">e</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">/astro-theme-pure.git</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"git clone https://github.com/<your-username>/astro-theme-pure.git\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<p>Then, you can start the Astro dev server and see a live preview of your project while you make it your own!</p>\n<h2 id=\"start-the-dev-server\">Start the Dev Server<a class=\"anchor\" href=\"#start-the-dev-server\">#</a></h2>\n<p>Go to your project directory:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">cd</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> ./</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">your-projec</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">t</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"cd ./<your-project>\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "bun",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">bun</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"bun dev\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      }), createVNode($$TabItem, {
        label: "pnpm",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pnpm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"pnpm dev\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      }), createVNode($$TabItem, {
        label: "yarn",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">yarn</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> run</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"yarn run dev\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      }), createVNode($$TabItem, {
        label: "npm",
        "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><pre><code><span class=\"line\"><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">npm</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> run</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> dev</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">shell</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"npm run dev\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Next, please read the configuration notes first and continue configuring the theme.</p>\n<h2 id=\"migrate-to-astro\">Migrate to Astro<a class=\"anchor\" href=\"#migrate-to-astro\">#</a></h2>\n<p>See <a href=\"https://docs.astro.build/en/guides/migrate-to-astro/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Astro: Migrate an existing project to Astro<span> ↗</span></a>.</p>\n<h2 id=\"theme-file-structure\">Theme File Structure<a class=\"anchor\" href=\"#theme-file-structure\">#</a></h2>\n<p>The theme file structure is as follows:</p>\n<ul>\n<li><code>public</code>: Static resources that will be copied to the root directory</li>\n<li><code>src</code>:\n<ul>\n<li><code>assets</code>: Static resources</li>\n<li><code>components</code>: Components used in the theme, also include user-like components, like <code>Card</code>, <code>Collapse</code>, <code>Spoiler</code>, etc.</li>\n<li><code>layouts</code>: Basic site layouts</li>\n<li><code>pages</code>: Pages like <code>404</code>, <code>about</code>, <code>blog</code>, <code>docs</code>, <code>index</code>, etc.</li>\n<li><code>plugins</code>: Extended plugins used in the theme</li>\n<li><code>types</code>: Typescript type definitions</li>\n<li><code>utils</code>: Utilities</li>\n<li><code>site.config.ts</code>: Theme configuration file</li>\n</ul>\n</li>\n<li><code>astro.config.mjs</code>: Astro configuration file</li>\n<li><code>eslint.config.mjs</code>: ESLint configuration file</li>\n<li><code>prettier.config.mjs</code>: Prettier configuration file</li>\n<li><code>uno.config.ts</code>: UnoCSS configuration file</li>\n<li><code>tsconfig.json</code>: Typescript configuration file</li>\n<li><code>package.json</code>: Package information</li>\n</ul>\n<h2 id=\"simple-setup\">Simple Setup<a class=\"anchor\" href=\"#simple-setup\">#</a></h2>\n"
    }), createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Remove docs files"
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["Remove the ", createVNode(_components.code, {
                children: "src/pages/docs"
              }), " directory"]
            }), "\n", createVNode(_components.li, {
              children: ["Remove the menu declaration in ", createVNode(_components.code, {
                children: "src/site.config.ts"
              }), ":"]
            }), "\n"]
          }), "\n", createVNode(_components.div, {
            class: "astro-code astro-code-themes github-light github-dark has-diff",
            style: {
              backgroundColor: "#fff",
              "--shiki-dark-bg": "#24292e",
              color: "#24292e",
              "--shiki-dark": "#e1e4e8",
              overflowX: "auto"
            },
            tabindex: "0",
            "data-language": "ts",
            children: [createVNode(_components.div, {
              class: "title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border",
              children: "src/site.config.ts"
            }), createVNode(_components.pre, {
              children: createVNode(_components.code, {
                children: [createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "export"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " const"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " theme"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ":"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " ThemeUserConfig"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " {"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "   // ..."
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "   /** Configure the header of your site. */"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   header: {"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      menu: ["
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "         { title: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Blog'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", link: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'/blog'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " },"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "         { title: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'Docs'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", link: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'/docs'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }, "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "         // ..."
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      ],"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   },"
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}"
                  })
                })]
              })
            }), createVNode(_components.span, {
              class: "language ps-1 pe-3 text-sm bg-muted text-muted-foreground",
              children: "ts"
            }), createVNode(_components.button, {
              class: "copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground",
              "data-code": "export const theme: ThemeUserConfig = {\n   // ...\n   /** Configure the header of your site. */\n   header: {\n      menu: [\n         { title: 'Blog', link: '/blog' },\n         { title: 'Docs', link: '/docs' }, // [!code --]\n         // ...\n      ],\n   },\n}",
              onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
              children: [createVNode(_components.div, {
                class: "ready",
                children: createVNode(_components.svg, {
                  class: "size-5",
                  children: createVNode(_components.use, {
                    href: "/icons/code.svg#mingcute-clipboard-line"
                  })
                })
              }), createVNode(_components.div, {
                class: "success hidden",
                children: createVNode(_components.svg, {
                  class: "size-5",
                  children: createVNode(_components.use, {
                    href: "/icons/code.svg#mingcute-file-check-line"
                  })
                })
              })]
            })]
          }), "\n", createVNode(_components.ul, {
            children: ["\n", createVNode(_components.li, {
              children: ["Remove the Content Collection for docs in ", createVNode(_components.code, {
                children: "src/content.config.ts"
              }), ":"]
            }), "\n"]
          }), "\n", createVNode(_components.div, {
            class: "astro-code astro-code-themes github-light github-dark has-diff",
            style: {
              backgroundColor: "#fff",
              "--shiki-dark-bg": "#24292e",
              color: "#24292e",
              "--shiki-dark": "#e1e4e8",
              overflowX: "auto"
            },
            tabindex: "0",
            "data-language": "ts",
            children: [createVNode(_components.div, {
              class: "title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border",
              children: "src/content.config.ts"
            }), createVNode(_components.pre, {
              children: createVNode(_components.code, {
                children: [createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "const"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " docs"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " defineCollection"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "({ "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "loader: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "glob"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "({ base: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'./src/content/docs'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", pattern: "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "'**/*.{md,mdx}'"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }), "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "schema"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": ({ "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: "image"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " }) "
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "=>"
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   z."
                  }), createVNode(_components.span, {
                    style: {
                      color: "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "object"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "({ "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      ..."
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "   }) "
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "}) "
                  })
                }), "\n", createVNode(_components.span, {
                  class: "line diff remove",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "export"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " const"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " collections"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " { blog, docs } "
                  })]
                }), "\n", createVNode(_components.span, {
                  class: "line diff add",
                  children: [createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "export"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " const"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " content"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " ="
                  }), createVNode(_components.span, {
                    style: {
                      color: "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " { blog } "
                  })]
                })]
              })
            }), createVNode(_components.span, {
              class: "language ps-1 pe-3 text-sm bg-muted text-muted-foreground",
              children: "ts"
            }), createVNode(_components.button, {
              class: "copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground",
              "data-code": "const docs = defineCollection({ // [!code --]\nloader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }), // [!code --]\nschema: ({ image }) => // [!code --]\n   z.object({ // [!code --]\n      ... // [!code --]\n   }) // [!code --]\n}) // [!code --]\nexport const collections = { blog, docs } // [!code --]\nexport const content = { blog } // [!code ++]",
              onclick: "\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add('copied');\n          setTimeout(() => this.classList.remove('copied'), 2000)\n        ",
              children: [createVNode(_components.div, {
                class: "ready",
                children: createVNode(_components.svg, {
                  class: "size-5",
                  children: createVNode(_components.use, {
                    href: "/icons/code.svg#mingcute-clipboard-line"
                  })
                })
              }), createVNode(_components.div, {
                class: "success hidden",
                children: createVNode(_components.svg, {
                  class: "size-5",
                  children: createVNode(_components.use, {
                    href: "/icons/code.svg#mingcute-file-check-line"
                  })
                })
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: ["Remove ", createVNode(_components.code, {
              children: "packages"
            }), " directory (this will be imported by our NPM package)"]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Change the site favicon."
          }), "\n", createVNode($$Aside, {
            type: "tip",
            "set:html": "<p><a href=\"https://favicon.io/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">Favicon.io<span> ↗</span></a> is a great tool that can help you generate favicons quickly.</p>"
          }), "\n", createVNode(Fragment$1, {
            "set:html": "<p>Replace the <code>public/favicon/*</code> files with your own favicon.</p>\n"
          })]
        }), "\n", createVNode(Fragment$1, {
          "set:html": "<li>\n<p>Replace your avatar image.</p>\n<p>Replace the <code>src/assets/avatar.png</code> file with your own avatar image.</p>\n</li>\n<li>\n<p>Configure the site</p>\n<p>You can configure your project inside the <code>src/site.config.ts</code> configuration file:</p>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"ts\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">src/site.config.ts</div><pre><code><span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> theme</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> ThemeUserConfig</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">   author: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'CWorld'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">   title: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Astro Theme Pure'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">   site: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'https://astro-pure.js.org'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">   description: </span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">'Stay hungry, stay foolish'</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">   // ...</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#D73A49;--shiki-dark:#F97583\">export</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> integ</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\"> IntegrationUserConfig</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> { </span><span style=\"color:#6A737D;--shiki-dark:#6A737D\">/* ... */</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> }</span></span>\n<span class=\"line\"><span style=\"color:#6A737D;--shiki-dark:#6A737D\">// ...</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">ts</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"export const theme: ThemeUserConfig = {\n   author: &#x27;CWorld&#x27;,\n   title: &#x27;Astro Theme Pure&#x27;,\n   site: &#x27;https://astro-pure.js.org&#x27;,\n   description: &#x27;Stay hungry, stay foolish&#x27;,\n   // ...\n}\n\nexport const integ: IntegrationUserConfig = { /* ... */ }\n// ...\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n</li>\n<li>\n<p>Typescript Syntax</p>\n<p>The configuration file <code>site.config.ts</code> uses Typescript syntax. If you are not familiar with TS syntax, please read about it <a href=\"https://learnxinyminutes.com/docs/typescript/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">here<span> ↗</span></a> first.</p>\n</li>\n"
        })]
      })
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

const url = "src/content/docs/setup/getting-started.mdx";
const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/setup/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaiyijing/GitHub/joeytodayblog/src/content/docs/setup/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
