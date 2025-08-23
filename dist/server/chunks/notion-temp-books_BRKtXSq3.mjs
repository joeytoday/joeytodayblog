const notionTempBooks = new Proxy({"src":"/_astro/notion-temp-books.B1bw7PMO.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaiyijing/GitHub/joeytodayblog/src/assets/projects/notion-temp-books.jpeg";
							}
							
							return target[name];
						}
					});

export { notionTempBooks as default };
