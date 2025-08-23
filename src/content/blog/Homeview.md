---
draft: true
---


```dataviewjs
// 统计单个文件的字数（修复中文+英文统计，排除格式内容）
async function countWordsInFile(file) {
    const content = await app.vault.cachedRead(file);
    
    // 1. 移除无关内容（frontmatter、代码块、注释）
    let text = content
        .replace(/^---\s*[\s\S]*?---\s*/, '') // 移除frontmatter
        .replace(/```[\s\S]*?```/g, '')       // 移除多行代码块
        .replace(/`[^`]+`/g, '')              // 移除单行代码
        .replace(/<!--[\s\S]*?-->/g, '')      // 移除HTML注释
        .trim();

    // 2. 移除Markdown格式符号（保留纯文本内容）
    text = text
        .replace(/#{1,6}\s+/g, '')            // 移除标题符号（#）
        .replace(/\[\[(.*?)\]\]/g, '$1')      // 保留双链文本（[[链接]] → 链接）
        .replace(/\[(.*?)\]\(.*?\)/g, '$1')   // 保留链接文本（[文本](链接) → 文本）
        .replace(/\*\*|\*|__|_/g, '')         // 移除粗体/斜体符号（**/*/__/_）
        .replace(/~~/g, '')                   // 移除删除线（新增，避免遗漏）
        .replace(/\s+/g, ' ')                 // 多空格合并为单个（优化后续匹配）
        .trim();

    // 3. 【核心修复】中文+英文+数字混合计数逻辑
    // 匹配规则：
    // - [\u4e00-\u9fa5]：所有中文字符
    // - [a-zA-Z]+：英文单词（大小写）
    // - \d+：数字（整数）
    // - [\u3040-\u309F\u30A0-\u30FF]：可选，日文（如需可保留）
    const wordMatches = text.match(/[\u4e00-\u9fa5]|[a-zA-Z]+|\d+/g);
    
    // 4. 统计有效字数（无匹配时返回0，避免NaN）
    return wordMatches ? wordMatches.length : 0;
}

// 统计单个文件夹的字数
async function countFolderWords(folderPath) {
    let total = 0;
    const files = app.vault.getMarkdownFiles().filter(file => 
        file.path.startsWith(`${folderPath}/`) || file.path === folderPath
    );
    
    for (let i = 0; i < files.length; i++) {
        total += await countWordsInFile(files[i]);
    }
    return { 
        total, 
        fileCount: files.length,
        folderPath: folderPath,
        folderName: folderPath.split('/').pop() // 提取文件夹名称
    };
}

// 统计整个知识库的字数
async function countVaultWords() {
    let total = 0;
    const files = app.vault.getMarkdownFiles();
    
    for (let i = 0; i < files.length; i++) {
        total += await countWordsInFile(files[i]);
    }
    return { 
        total, 
        fileCount: files.length,
        folderName: "总共写作"
    };
}

// 【可修改】需要统计的文件夹路径
const targetFolders = [
    "2023", 
    "2024",
    "2025"
    // 可继续添加更多文件夹
];

// 【可修改】卡片背景颜色（支持多个颜色，循环使用）
const cardBackgrounds = [
    "rgba(240, 243, 252, 0.8)",  // 淡蓝色
    "rgba(248, 243, 236, 0.8)",  // 淡橙色
    "rgba(240, 252, 244, 0.8)",  // 淡绿色
    "rgba(252, 240, 250, 0.8)",  // 淡紫色
    "rgba(252, 251, 240, 0.8)",  // 淡黄色
    "rgba(242, 240, 252, 0.8)",  // 淡靛色
    "rgba(240, 250, 252, 0.8)",  // 淡青色
    "rgba(252, 245, 240, 0.8)"   // 淡粉色
];

// 执行统计并以卡片形式显示结果
(async () => {
    // 创建主容器
    const mainContainer = document.createElement('div');
    mainContainer.style.cssText = `
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
    `;
    
    // 创建卡片网格容器（4列布局）
    const gridContainer = document.createElement('div');
    gridContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        width: 100%;
    `;
    mainContainer.appendChild(gridContainer);
    
    // 统计并添加所有卡片
    const allStats = [];
    // 先添加整个知识库统计
    allStats.push(await countVaultWords());
    // 再添加各个文件夹统计
    for (const folder of targetFolders) {
        allStats.push(await countFolderWords(folder));
    }
    
    // 生成卡片
    allStats.forEach((stats, index) => {
        // 循环使用背景颜色
        const bgColor = cardBackgrounds[index % cardBackgrounds.length];
        
        // 创建卡片容器
        const card = document.createElement('div');
        card.style.cssText = `
            background: ${bgColor};
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            box-sizing: border-box;
        `;
        
        // 1. 文件夹名称（标题，加粗）
        const title = document.createElement('div');
        title.style.cssText = `
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
            color: var(--text-normal);
        `;
        title.textContent = stats.folderName;
        card.appendChild(title);
        
        // 2. 总字数（强调，加粗）
        const wordCount = document.createElement('div');
        wordCount.style.cssText = `
            font-size: 1rem;
            margin-bottom: 0.5rem;
        `;
        // 字数颜色
        wordCount.innerHTML = `<span style=
	        "font-weight: bold; 
	        color: #E75E58;"> 
	        ${stats.total.toLocaleString()} 字
        </span>`;
        card.appendChild(wordCount);
        
        // 3. 文件数量
        const fileCount = document.createElement('div');
        fileCount.style.cssText = `
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 0.3rem;
        `;
        fileCount.textContent = `文件数量：${stats.fileCount}`;
        card.appendChild(fileCount);
        
        // 4. 平均文件字数
        const avgWords = document.createElement('div');
        avgWords.style.cssText = `
            font-size: 0.9rem;
            color: var(--text-muted);
        `;
        const avg = stats.fileCount > 0 ? Math.round(stats.total / stats.fileCount) : 0;
        avgWords.textContent = `平均字数：${avg.toLocaleString()}`;
        card.appendChild(avgWords);
        
        // 添加到网格
        gridContainer.appendChild(card);
    });
    
    // 添加响应式样式（小屏幕自动调整列数）
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 1200px) {
            [style*="grid-template-columns"] {
                grid-template-columns: repeat(3, 1fr) !important;
            }
        }
        @media (max-width: 900px) {
            [style*="grid-template-columns"] {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }
        @media (max-width: 600px) {
            [style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
            }
        }
    `;
    mainContainer.appendChild(style);
    
    // 添加到页面
    dv.container.appendChild(mainContainer);
})();
```

