---
title: 图片多端同步：阿里云+PicGo配置Markdown图床+Obsidian设置
description: Obsidian 图片自动上传阿里云并生成 markdown 链接。
author: Joey Kai
draft: false
publishDate: 2025-08-05
tags:
  - 教程
  - 技术
  - 工具
  - Obsidian
heroImage: {src: 'https://unsplash.com/photos/white-clouds-and-blue-sky-during-daytime-A9_IsUtjHm4', inferSize: true}
createdDate: 2023-07-24 20:54
updatedDate: 2025-08-01 13:56
---

---

我相信每个使用 markdown 写作的人都会被 md 文件的图片显示烦到，不管是转移还是复制，在 markdown 里面插入的图片换个地方就不能显示了。

在以下教程中，我通过配置阿里云+PicGo 图床，让图片在任何地方都能正常显示，目前大部分的编辑器都支持 markdown 语法了，通过配置图床只要复制粘贴就能完美在另一个地方显示同样的文档内容。

## 阿里云设置

首先，去阿里云注册新账号可以获得免费 3 个月的试用，就算试用期结束之后，价格也非常便宜，对象标准存储半年也才 5 块，如果只是上传图片，按照流量计算都不需要，一个月估计也就几毛钱。
- 详细价格可以查看：[阿里云价格](https://common-buy.aliyun.com/?spm=a2c4g.59636.0.0.746b73124DFtpw&commodityCode=ossbag)

![阿里云主页](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242125414.png)

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242127248.png)

注册并登陆账号之后，点击侧边栏进入「对象存储」，新建 bucket。
![创建bucket](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242136704.png)

名称自选，地域也可以自己选，剩下的按照框出来的选就好了。
![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242138123.png)

点进 bucket 之后选择概览，框出来的两个之后在 PicGo 配置需要，可以先复制下来。
![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242144523.png)

然后新建 AccessKey，鼠标移到头像处点击 AccessKey 管理：
![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242146855.png)

已经创建了没法截图了，新建之后会创建 AccessKey ID 和 AccessKey Secret，这个也复制下来。

## PicGo 配置

官方有帮助文档，主页：[PicGo](https://picgo.github.io/PicGo-Doc/)，可以去此处下载安装包和查看配置指南。简单说一下 Mac 的配置，之后截图粘贴的图片就能自动上传到阿里云上。

![PicGo设置](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242156237.png)

## Obsidian 配置

在第三方插件里搜索 `Image auto upload Plugin` 并安装，进入设置后全默认就好了，有些可以根据需要开启。

![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242200576.png)

之前的文件图片上传就可以调出命令面板选择这个插件就可以自动上传了，之后图片会自动转化成网页链接。

![快捷命令面板上传图片](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242205839.png)
![image.png](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202307242205938.png)

## 最后

好像也没什么要说明的，配置比我想象的简单，腾讯云这些配置也差不多，就到这里。