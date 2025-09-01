const notionTempStuffs = new Proxy({"src":"/_astro/notion-temp-stuffs.D2P5ZXLm.jpeg","width":5376,"height":4032,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaiyijing/GitHub/joeytodayblog/src/assets/projects/notion-temp-stuffs.jpeg";
							}
							
							return target[name];
						}
					});

export { notionTempStuffs as default };
