import { defineCollection, z } from 'astro:content';

// 两个内容集合：
//   posts  = 发布（会生成网页，对 AI 和搜索引擎可见）
//   drafts = 草稿（不上线，改不完的大纲先放这里）
const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string().default('医保政策'),
  tags: z.array(z.string()).default([]),
  source: z.string().url().optional(), // 卫健委/官方原文链接 → 自动变成引用出处
  author: z.string().default('资深陪诊顾问'),
  description: z.string().optional(),
});

const posts = defineCollection({ type: 'content', schema: postSchema });
const drafts = defineCollection({ type: 'content', schema: postSchema });

export const collections = { posts, drafts };
