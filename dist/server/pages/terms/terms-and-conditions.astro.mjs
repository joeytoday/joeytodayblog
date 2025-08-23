/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CTfvycMK.mjs';
import 'kleur/colors';
import { $ as $$IndividualPage } from '../../chunks/IndividualPage_Bp2g32T5.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<p>It may be recommended to generate policies from <a href=\"https://policymaker.io\" rel=\"nofollow noopener noreferrer\" target=\"_blank\">PolicyMaker.io<span> ↗</span></a>.</p>";

				const frontmatter = {"layout":"@/layouts/IndividualPage.astro","title":"Terms and Conditions","description":"Last updated: 2025-07-31","language":"zh-CN","back":"/terms/list","minutesRead":"1 min read","words":9};
				const file = "/Users/kaiyijing/GitHub/joeytodayblog/src/pages/terms/terms-and-conditions.md";
				const url = "/terms/terms-and-conditions";
				function rawContent() {
					return "   \n                                        \n\n                             \n                                       \n                 \n                   \n   \n\nIt may be recommended to generate policies from [PolicyMaker.io](https://policymaker.io).\n";
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
