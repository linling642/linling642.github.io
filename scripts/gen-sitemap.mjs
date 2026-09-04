// 构建后自动生成 sitemap.xml（不依赖任何外部插件，最稳）
// 用法：node scripts/gen-sitemap.mjs  （在 npm run build 之后执行）
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://linling642.github.io';
const DIST = join(process.cwd(), 'dist');

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

function toUrl(file) {
  let rel = file.slice(DIST.length).replace(/\\/g, '/');
  rel = rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  if (!rel.startsWith('/')) rel = '/' + rel;
  return SITE + rel;
}

const urls = walk(DIST).map(toUrl).sort((a, b) => a.localeCompare(b));
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
  `\n</urlset>\n`;

writeFileSync(join(DIST, 'sitemap.xml'), xml);
console.log(`[gen-sitemap] 已生成 sitemap.xml，共 ${urls.length} 个页面`);
