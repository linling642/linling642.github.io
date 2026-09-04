import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 已按你的 GitHub Pages 地址填好（仓库名固定为 linling642.github.io 时生效）
export default defineConfig({
  site: 'https://linling642.github.io',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
