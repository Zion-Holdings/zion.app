#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const siteUrl = process.env.SITE_URL || 'https://zion.app';

function getPosts() {
  const files = glob.sync('pages/blog/*.tsx', { ignore: ['pages/blog/index.tsx'] });
  return files.map((fp) => {
    const rel = '/' + path.relative(path.join(process.cwd(), 'pages'), fp).replace(/\\/g, '/').replace(/\.(t|j)sx?$/, '');
    const href = rel;
    const slug = rel.split('/').pop();
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
    const stat = fs.statSync(fp);
    return { title, url: siteUrl + href, date: new Date(stat.mtimeMs).toUTCString() };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

function buildRss(posts) {
  const items = posts.map(p => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${p.url}</link>
      <guid>${p.url}</guid>
      <pubDate>${p.date}</pubDate>
    </item>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Zion Tech Solutions - Blog</title>
    <link>${siteUrl}</link>
    <description>Latest posts from Zion Tech Solutions</description>
${items}
  </channel>
</rss>
`;
}

function main() {
  const posts = getPosts();
  const rss = buildRss(posts);
  const out = path.join(process.cwd(), 'public', 'rss.xml');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, rss);
  console.log(`Generated ${out}`);
}

main();