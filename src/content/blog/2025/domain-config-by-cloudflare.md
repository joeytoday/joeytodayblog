---
title: 如何使用 Cloudflare 配置域名？
description: 使用 Cloudflare 配置域名，包括 cdn 加速。
author: Joey Kai
tags:
  - 教程
  - 技术
draft: false
heroImage: {src: 'https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508031731433.png', inferSize: true}
publishDate: 2025-08-04
---

> 前置步骤：[《如何使用NameSilo购买域名？》](https://www.joeytoday.com/blog/2025/domain-purchase-by-namesilo)

## 配置域名
> [https://www.cloudflare-cn.com](https://www.cloudflare-cn.com/products/registrar/)
> 包括 cdn 加速。

注册登录后，点击右上角「添加」-「现有域」

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508031731433.png)

把自己刚刚购买的站点添加进去，选「免费」计划就好，然后选择「继续前往激活」，会弹出一个对话框确认，点击「确认」。

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508031731434.png)

##  配置子域名

打开主域名 DNS 页面。

| 类型  | 名称                                        | 内容                                                  | 代理状态                 |
| ----- | ------------------------------------------- | ----------------------------------------------------- | ------------------------ |
| CNAME | 子域名，例如 blog。之后域名为：blog. 主域名 | cname-china.vercel-dns.com，Vercel 提供的中国优化节点 | 已代理，打开橙色云朵按钮 |

## 返回 NameSilo 配置页面

[NameSilo 配置页面](https://www.namesilo.com/account_domains.php)
点击域名进入。

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508031731435.png)

找到 [「NameServer」](https://www.namesilo.com/account/)，点击编辑。

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508031731436.png)

把 Cloudflare 中的链接粘贴到 NameServer 1 和 NameServer 2。

![](https://joey-md-asset.oss-cn-hangzhou.aliyuncs.com/img/202508031731437.png)

### 参考视频
[https://www.bilibili.com/video/BV1r24y1u7oj](https://www.bilibili.com/video/BV1r24y1u7oj/?spm_id_from=333.337.search-card.all.click&vd_source=e0adc7775256d2406275f6f6eadd9232)