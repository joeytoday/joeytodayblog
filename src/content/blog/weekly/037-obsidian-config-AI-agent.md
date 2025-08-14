---
title: 第三周刊_No.37｜关于工具的想法+如何在Obsidian配置AI助手？
description: 我们在使用工具，工具也在反向塑造着我们。利用AI边读书边搜索概念的解释并整合理解。
author: Joey Kai
tags:
  - 教程
  - 观点
  - 第三周刊
heroImage: {src: 'https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314791.png', inferSize: true}
publishDate: 2025-08-15
createdDate: 2022-12-17 12:01
updatedDate: 2025-08-14 13:22
---

直到这几天前，我都没有考虑过在我的 Obsidian 中配置任何 AI，因为在我看来，AI 无法替代阅读和思考的时间，看似提高效率的工具，如果压缩了本身大脑理解的时间，不会让我们变得更聪明，甚至就如《[[成瘾：在放纵中寻找平衡]]》这本书中写到的一样，如果你获取结果（多巴胺）越容易，你就越容易对此成瘾。

我很认同的一个观点是：**我们在使用工具，工具也在反向塑造着我们**。所以我特别喜欢探索一些工具和它们背后的理念，比如在这篇周刊—— [第三周刊_No.36｜聊聊自己喜欢的笔记软件](https://www.joeytoday.com/blog/weekly/036-my-note-taking-software)里，我讨论了一些目前我筛选后允许进入我的生活的工具们。

<img src="https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314789.jpeg" style="zoom:30%; " />

<img src="https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314790.jpeg" style="zoom:30%;" />

这两天在整理自己的阅读笔记的时候，发现很多引申的概念在摘录中并没有说的很清楚，所以还是需要我通过互联网的搜索完整这些的概念，所以我想，正是时候，可以在 Obsidian 内部配置一个解释概念与定义的 AI 助手了。话不多说，直接开始看看操作吧。

## 前期准备
- Obsidian 软件：`https://obsidian.md/`
- 注册「硅基流动」账号：`https://cloud.siliconflow.cn/`
- 在 Obsidian 中安装 `Text Generator` 插件，需要科学上网。

## 开始配置
硅基流动注册后就有 14 元的额度，能进行几百次对话了，API 的整体价格都比较低，所以相对来说很划算的，在硅基流动中也有很多中模型可选，切换也会比较容易。

### 硅基流动中获取 API 与模型名称
注册完【硅基流动】之后，可以挑选自己的想要的模型，复制模型名称，下一步配置插件需要。

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314791.png)

选择侧边栏【API 密钥】-【新建 API 密钥】，复制此处 API，下一步需要。

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314792.png)

### 配置 Text Generator 插件
打开 Obsidian 中 Text Generator 插件设置，填写参数：
- Endpoint：
  `https://api.siliconflow.cn/v1/chat/completions`
- API Key：上一步中生成的【API 密钥】
- Model：上一步复制的【模型名称】

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314793.png)

Advanced Setting：Streaming 要打开。
![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314794.png)

🎉 这样就配置结束了

## 开始使用
选中文本要求，点击侧边栏【Generate Text】或使用快捷键 `⌘` + `J` 就可以开始生成了。

根据本文内容，生成一段简短的总结，并写作一首庆祝疯狂星期四的七言绝句：

<img src="https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508141314795.gif" alt="z" style="zoom:50%;" />

### 总结：
本文围绕工具创新与本地AI部署展开，重点探讨了工具在效率提升与智能应用中的潜力，并详细介绍了在Obsidian中通过插件集成、本地模型部署及API调用等方式配置本地AI的实践方法，为知识管理与智能辅助的结合提供了可行路径。

### 七言绝句：
周四狂欢炸鸡香，  
智能工具助兴忙。  
AI 笔触添新趣，  
知识花园共绽放！  

（注：诗中"周四"呼应疯狂星期四主题，"智能工具"与"AI"对应文章技术内容，"知识花园"暗指Obsidian的知识管理功能，末句以"共绽放"象征人机协作的创意迸发。）

## End
以上就是本篇内容啦～疯狂星期四愉快 🎉

