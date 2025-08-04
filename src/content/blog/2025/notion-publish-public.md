---
title: 如何使用 Notion【无代码】搭建自己的主页
description: 简单使用 Notion 搭建个人主页，可互联网公开。
author: Joey Kai
tags:
  - Notion
  - 教程
draft: false
publishDate: 2025-08-05
createdDate: 2023-05-31 14:59
updatedDate: 2025-08-01 13:56
---

```ad-caution
本文初写于 2023-05-01，目前 Notion 主页已关闭，但搭建过程可参考。
```

在两天前突然有了想搭建自己个人博客的念头，于是在耗费两天时间整理设计，初步搭成了自己的个人主页。

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039420.png)

一开始只是希望能够把自己的电子书库分享给朋友们，进而想到何不干脆建立一个自己的主页呢？刚好在自己的地方分享自己喜欢的文章、书籍、电影、软件等等。

Notion 有分享到互联网的功能，而且模块可以自由组合，我自己的书库和写作也都在这里，可以很方便地进行引用，除了分享出去网页链接很长，基本上没有什么问题。

上网搜了一些关于个人博客的搭建，买域名、html 代码、css 样式，对我来说必要性都不是很强，太麻烦了，使用 Notion 搭建个人博客简单很多很多，而且免费，非常推荐。

下面我来说一下自己的主页搭建过程。

# 我的主页设计

先给大家看一下我的主页整体样式：

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039421.png)

在思考建立主页的的过程中，因为不清楚博客样式，去网上搜索了很多别人的博客，但其他人主要是使用前端代码了，所以样式都很漂亮。看了一些之后，发现其实**主要是要确定自己主页要展示的内容。**

我很确定【书库】是必须要在其中的，然后或许可以加上自己写的【文章】，看大家都有一个【联系方式】，那这个也加上，【目录导航】非常必要，是很好区分内容的方式，剩下就是一些【装饰零碎】的片段。空闲时搜索 Notion，在知乎上看到嵌入的小组件，所以连装饰问题也解决了。

总结下来我需要的模块：

- 书库
- 文章
- 导航目录
- 联系方式
- 装饰自由发挥
- 其他模块

所以就按照以上内容调整区域和建立数据库视图就OK了。

# 我的主页搭建

在看了十几个他人的博客主页，决定增加几项小组件。

- 开头的欢迎
- 想要知道主页的浏览量
- 末尾的点赞功能
- 音乐
- 一些装饰图片

## 装饰模块

小组件使用 Notionpet，直接复制链接 embed 进来。是在过于简单，我把网址放在下面就不教了。

[组件世界/WidgetStore - 丰富的嵌入式小组件库、动态图标库、可视化图表库](https://cn.widgetstore.net/#/lib/basic)

🌰 拿音乐模块举个例子：

1. 进入网页选择一个小组件，修改配置后，复制链接。

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039422.png)

2. 粘贴到 Notion 中，选择 `Create embed`。

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039423.png)

3. 等待小组件加载完成。

## 目录模块

使用 Callout 块建立目录，新建不同 Page 拖动到目录中，修改目录块颜色，over。

![iShot_2023-05-31_00.46.35.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039424.gif)

![iShot_2023-05-31_00.50.14.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039425.gif)

## 联系我模块

使用 Callout 块添加联系方式和超链接，最后整合到一个块中。

![iShot_2023-05-31_00.52.20.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039426.gif)

## 书库&文章模块

我自己有一个电子书库，此时只需要链接过来，然后调整视图，使用 `Filter` 筛选，使用 `Sort` 排序，使用 `Properties` 选择显示的属性。

![iShot_2023-05-31_00.57.20.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039427.gif)

# 我的主页使用指南

## 主页切换

导航栏的`Home` 可以选择主页的视图。

![iShot_2023-05-31_01.06.55.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039428.gif)

## 目录使用

点击目录内的页面跳转到相应页面。

![iShot_2023-05-31_01.09.17.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039429.gif)

## 书库视图切换

可以选择不同的视图查看不同类型的书籍。

![iShot_2023-05-31_01.11.06.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039430.gif)

## 书库下载指南

进入书库页面后，点击最下方的资源，然后点击`···` 选择`Download` 。

![iShot_2023-05-31_01.02.36.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039431.gif)

## 点击社交媒体信息跳转

![iShot_2023-05-31_01.15.53.gif](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039432.gif)

## 文章页面说明

此页面共有 5 种视图。

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039433.png)

## 留言评论

进入「[留言板](https://www.notion.so/Comment-4f3363aa462d4e0bbdd079bbd9c2e39b)」在红框部分点击就可以评论，评论需要登陆 Notion。

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039434.png)

还可以划线评论，选中部分文字后会出现状态栏，点击`comment`，或者使用快捷键`shift`+`command`+`m` 。

![Untitled](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242039435.png)

# 最后

最后也没有什么想说的了，下面是我的主页，感兴趣可以点进去看看。

```ad-info
往期教程，目前主页已关闭，可参考我的[音乐推荐页面](https://joeytoday.notion.site/music)
```

使用 Notion 公开主页搭建自己域名的博客参考：[如何通过 Notion【无代码】搭建个人博客](https://www.joeytoday.com/blog/2025/notion-publish-public2blog)