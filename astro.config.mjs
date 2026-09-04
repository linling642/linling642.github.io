import { defineConfig } from 'astro/config';

// 已按你的 GitHub Pages 地址填好（仓库名固定为 linling642.github.io 时生效）
// 站点地图(sitemap)改为构建后用 scripts/gen-sitemap.mjs 自动生成，不依赖外部插件，更稳
export default defineConfig({
  site: 'https://linling642.github.io',
  integrations: [],
  trailingSlash: 'ignore',
});
