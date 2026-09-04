# 医保政策雷达 · 建站脚手架（Astro 静态站）

> **你只出文章，技术全包了。** 日常三步，全程不用碰命令行：
> 1. 双击 **`新建文章.bat`** → 输入标题 → 自动生成带格式的 `.md` 并用编辑器打开，你只写正文。
> 2. 文章改定后，丢在 `src/content/posts/` 即「发布」（没改完的放 `src/content/drafts/`，不会上线）。
> 3. 双击 **`一键发布.bat`** → 自动生成整站到 `dist\`。需要时双击 **`本地预览.bat`** 先看效果。
>
> 上线托管已备好（GitHub Actions / Netlify 配置都在），你把项目推上 GitHub 或给我托管账号，我帮你接「每天自动发」。

这个站点用来承载你的医保政策 / 陪诊内容，**每天可批量发上百篇**，并且对 AI 搜索（豆包 / 元宝 / 千问等）友好。

## 工作原理（你只管写 .md）
1. 你构思 → AI 出大纲 → 你改定
2. 把定稿存成 `.md` 文件，丢进 `src/content/posts/`（这就是"发布"夹）
3. 没改完的放 `src/content/drafts/`（"草稿"夹，不会上线）
4. 运行构建 → 自动生成纯静态 HTML + 每页 JSON-LD 结构化数据 + sitemap + llms.txt 导读
5. 部署到对象存储 / Vercel / Netlify / GitHub Pages

## 怎么加一篇新文章
在 `src/content/posts/` 新建一个 `.md`，顶部写"头信息"，下面写正文：

```
---
title: 文章标题
date: 2026-09-04
category: 医保政策
tags: [标签1, 标签2]
source: https://www.nhc.gov.cn/   # 卫健委原文链接，自动变成引用出处
author: 资深陪诊顾问
description: 一句话摘要
---

正文用 Markdown 写……
```

## 本地预览 / 构建
```bash
npm install        # 第一次需要，拉取 Astro
npm run dev        # 本地预览 http://localhost:4321
npm run build      # 生成静态站到 dist/
npm run preview    # 预览构建结果
```

## AI 搜索友好点（已内置）
- 每页自动 JSON-LD（作者 / 日期 / 出处 / 分类）→ AI 抓取即带权威信息
- `public/robots.txt` 已放开主流 AI 爬虫
- sitemap 自动生成，提交给搜索引擎与 AI 索引
- `public/llms.txt` 给 AI 的站点导读（建议部署后改为自动生成）

## 上线到 GitHub（你只点鼠标，不用打任何命令）

前提：你已注册 GitHub 账号 **linling642**。

1. 下载安装 **GitHub Desktop**：https://desktop.github.com ，装好后用 linling642 登录。
2. 打开 GitHub Desktop → 菜单 **File → Add Local Repository** → 选文件夹 `F:\website\yibao-radar`。
3. 点 **Publish repository**：
   - Repository name **必须填 `linling642.github.io`**（一字不差，这是 GitHub Pages 的个人站点地址）
   - 选 **Public**（公开才能被搜索引擎和 AI 抓到）
   - 点 Publish —— 这一步会直接在 GitHub 上建好仓库并把整个项目推上去
4. 去该仓库网页 **Settings → Pages → Source** 选 **GitHub Actions**，保存。
5. 等几分钟（看仓库的 Actions 标签页在跑构建），站点就活在 **https://linling642.github.io** 。

> 说明：走 GitHub Actions 后，**你本机不用装 Node、不用跑构建**——云端自动帮你生成整站。本机装 Node 只是想用 `本地预览.bat` 先看效果时才需要。

### 以后每天发新文章（每天 100 篇也扛得住）
1. 双击 **`新建文章.bat`** → 输入标题 → 自动生成带格式的 `.md` 并用编辑器打开，你只写正文。
2. 改定后文件在 `src/content/posts/` 即「发布」（没改完的放 `src/content/drafts/`，不会上线）。
3. 打开 **GitHub Desktop**：会看到新增的文章文件 → 写一句说明（如"新增 100 篇医保解读"）→ **Commit to main** → **Push**。
4. 推完云端自动重新构建发布，站点立刻更新，无需你做任何别的操作。

## 下一步（可选）
- 想要自己的域名（如 yibao-radar.com）：在域名商解析到 GitHub Pages，仓库 Settings → Pages 里填 Custom domain。
- 把 `public/llms.txt` 改成构建时自动生成（目前是手写模板，已可用）。
- 想要"定时自动发"而非手动 Push：可接 GitHub Actions 的定时任务（schedule），告诉我即可加。
