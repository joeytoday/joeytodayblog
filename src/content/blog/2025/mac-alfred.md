---
title: Mac 上最好用的工具，Alfred 简约教程及 workflow 推荐
description: 在 Macbook 上使用 Alfred 快速自动化常用动作。
author: Joey Kai
tags:
  - 教程
  - 工具
  - 效率
draft: false
heroImage: {src: 'https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172037088.png', inferSize: true}
publishDate: 2025-08-05
createdDate: 2024-12-17 20:33
updatedDate: 2025-08-01 13:56
---
![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172037088.png)
_官网地址：https://www.alfredapp.com_

从Notion到Obsidian再到Logseq，本人总是不厌其烦致力于探索各种好用的软件，在各种论坛中对Alfred闻名已久，终于在近期下载了试试，结果一上手就爱不释手，特意在此推荐给大家。


## Alfred是什么？

Mac系统使用`command`-`space`调出的「🔍焦点搜索」，可以快速搜索电脑上的本地文件、程序等等，Alfred就类似是一个加强版的「🔍焦点搜索」。

Alfred可以让你在完全脱离鼠标的情况下快速搜索文件、打开程序、搜索网页等功能，最大程度地减少我们在键盘与鼠标之间切换的次数。


## Alfred 能做什么？

举个例子来说，比如你想搜索一部电影《楚门的世界》，常规的做法就是：1.先打开浏览器 ➡️ 2. 将鼠标移动到搜索框 ➡️ 3. 输入“楚门的世界” ➡️ 4. 呈现搜索结果，如果你想直接在豆瓣中搜索还要在1-2再增加一个步骤，打开豆瓣的主页。

可是如果有Alfred，这些步骤可以简化成两步：1. 使用快捷键调出搜索框；2. 输入你想搜索网页前缀（比如豆瓣我设置的是db）+“楚门的世界”；3. 查看结果。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172038957.png)



## 基础（免费）功能介绍

### 使用前准备：快捷键设置

如果你想要用Alfred替代Mac自带的搜索，首先就是需要打开`设置-键盘快捷键-聚焦`，将默认的勾选取消。如果不想替代，此步骤可以省略。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172038790.png)


然后再打开Alfred软件，在`General`-`Alfred Hotkey`中按下`command`+`space`，完成快捷键设置。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172039257.png)


### ⭐️ File Search 文件查找

点击`Features`-`Default Results`，设置文件搜索的配置，一般上来说不必更改，我是将搜索的方位放在了根目录上，只需要点击`+`就可以修改文件夹的位置了。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172039604.png)


可以在搜索内容前使用前缀直接操作，也可以调出搜索框直接搜索之后针对结果进行操作，使用`Enter`直接打开，使用`Shift`预览。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172039336.png)

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172039569.png)


### ⭐️ Web Search 网页查找

这一段是重中之重，其实Alfred内置了很多搜索，但是有些网页对于不能科学上网的我们是很不方便的，所以我们可以自己进行配置。

依旧拿豆瓣举例子，打开豆瓣的主页，在搜索框随便输入搜索的内容「test」，网页会变成如下：

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172039938.png)


具体操作如下：

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172040856.png)


如此类推可以配置百度、必应、B站等等你任何想快捷搜索的网页，以及快捷搜图等等。

### ⭐️ Web Bookmarks 网页书签

快捷搜索你在浏览器中收藏的网页。

❗️这里请注意，想要搜索Safari书签需要开放**完全磁盘权限**。



![图片](https://mmbiz.qpic.cn/mmbiz_gif/M8dgeAXEaicQIGX0e7ovCcKBsQnlHu2ysNTCSrUlQ2iaq03Mso5dSKDplT3ljOhjzvqlT1lmoUMiatsI6KeQPGnxw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

**计算器与词典**

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172040894.png)


**System 系统命令**

直接使用搜索框来操作电脑，我懒得写了，这应该能看懂。  

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172040629.png)



## Workflow推荐（进阶付费）

下面是我个人使用的一些工作流，每一个工作流我都放了GitHub地址，可以点进去下载以及查看设置教程。

#### CodeVar 程序员命名必备：生成可用的代码变量

https://github.com/xudaolong/CodeVar  

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172041540.png)


#### Create new file 快速新建文件

https://github.com/zeezali/alfred-new-file

![图片](https://mmbiz.qpic.cn/mmbiz_gif/M8dgeAXEaicQIGX0e7ovCcKBsQnlHu2ysrmJD2kSUJzVD2PrIibAvKCjyhjlhyEm4dSFXib5YA3hfL1KAxZs5y8lg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

#### Eudic Search 欧陆词典查词

https://github.com/hanleylee/alfred-eudic-workflow

![图片](https://mmbiz.qpic.cn/mmbiz_gif/M8dgeAXEaicQIGX0e7ovCcKBsQnlHu2ysceakzWjaoFnmQibNaRdy4M4M2PeaoxBpvuL9CZQZkJMKTiatiaK0KNgsQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

#### Open in Browser 快速切换浏览器

#### https://github.com/animeshsinghweb/alfred-open-in-browser

![图片](https://mmbiz.qpic.cn/mmbiz_gif/M8dgeAXEaicQIGX0e7ovCcKBsQnlHu2ysbicibyk3xb79AQ9IbofDmSU3ElWqJcC5dwb7fgqcHnNCKOh3qppiaNTgg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

#### TimeZones 时区查看

https://github.com/jaroslawhartman/TimeZones-Alfred

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172042267.png)


#### Notion Search Notion文件快速查找

https://github.com/wrjlewis/notion-search-alfred5-workflow

搜索我的Notion页面的内容，这个配置略显麻烦，请大家参考原作者的文档配置。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202412172041504.png)


## 结语

以上就是Alfred大概的一个介绍了，祝大家生活愉快！
