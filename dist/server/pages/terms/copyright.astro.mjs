/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_Dg3zV7A2.mjs';
import 'kleur/colors';
import { $ as $$IndividualPage } from '../../chunks/IndividualPage_Cfi1dBvW.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<p>本主页内容采用<a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议<span> ↗</span></a>进行许可</p>\n<p>The content of this homepage is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License] (<a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">http://creativecommons.org/licenses/by-nc-sa/4.0/<span> ↗</span></a>).</p>";

				const frontmatter = {"layout":"@/layouts/IndividualPage.astro","title":"Copyright","description":"Effective date: 2025-07-31","language":"ch-CN","back":"/terms/list","minutesRead":"1 min read","words":54};
				const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/terms/copyright.md";
				const url = "/terms/copyright";
				function rawContent() {
					return "   \n                                        \n\n                  \n                                         \n                 \n                   \n   \n\n本主页内容采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可\n\nThe content of this homepage is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License] (http://creativecommons.org/licenses/by-nc-sa/4.0/).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$IndividualPage, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
