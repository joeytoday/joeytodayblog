const notionTempHabits = new Proxy({"src":"/_astro/notion-temp-habits.BQLyq7tL.jpeg","width":1024,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaiyijing/GitHub/joeytodayblog/src/assets/projects/notion-temp-habits.jpeg";
							}
							
							return target[name];
						}
					});

export { notionTempHabits as default };
