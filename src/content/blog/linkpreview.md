---
title: 'LinkPreview 测试'
description: '测试Markdown中的linkpreview功能'
publishDate: '2025-09-02'
draft: true
---

# LinkPreview 测试

这个文件用来测试Markdown中的`linkpreview`代码块功能。

## 测试用例1：简单URL

```linkpreview
https://movie.douban.com/subject/35880703/
```

## 测试用例2：带标题的URL

```linkpreview-nopic
[精神政治学(豆瓣)](https://book.douban.com/subject/30389922/)
```

## 测试用例3：多个链接预览

```linkpreview
https://github.com/dashboard
```

```linkpreview
https://www.apple.com/
```

## 测试用例4：可能无法正常获取元数据的链接

```linkpreview
https://www.mozilla.org/en-US/
```

或者使用带标题的格式：

```linkpreview
[Mozilla](https://www.mozilla.org/en-US/)
```

要生成不带图片的链接预览，可以使用：

```linkpreview-nopic
https://www.cloudflare.com/
```

---

所有这些都会在页面上生成与mdx文件中使用LinkPreview组件相同的效果。有时候有问题啊。