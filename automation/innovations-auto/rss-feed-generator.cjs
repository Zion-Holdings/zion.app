#!/usr/bin/env node
/*
  RSS Feed Generator
  - Scans pages/blog for posts (tsx files)
  - Generates a basic RSS 2.0 feed at public/feed.xml
*/
const fs = require('fs');
const path = require('path');

function toTitleCaseFromSlug(slug) {
  return String(slug)
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function collectBlogPosts(cwd = process.cwd()) {
  const dir = path.join(cwd, 'pages', 'blog');
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir).filter((f) => f.endsWith('.tsx'));
  return entries.map((file) => {
    const slug = file.replace(/\.tsx$/i, '');
    return {
      slug,
      title: toTitleCaseFromSlug(slug.replace(/-chat$/, '')),
      link: `https://ziontechgroup.com/blog/${slug}`,
      guid: `blog:${slug}`,
      pubDate: new Date().toUTCString(),
    };
  });
}

function buildRss(posts) {
  const now = new Date().toUTCString();
  const items = posts
    .map((p) => `    <item>\n      <title>${p.title}</title>\n      <link>${p.link}</link>\n      <guid isPermaLink="false">${p.guid}</guid>\n      <pubDate>${p.pubDate}</pubDate>\n      <description>${p.title}</description>\n    </item>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Zion Tech Solutions — Blog</title>\n    <link>https://ziontechgroup.com/blog</link>\n    <description>Latest posts from Zion Tech Solutions</description>\n    <lastBuildDate>${now}</lastBuildDate>\n${items}\n  </channel>\n</rss>\n`;
}

function main() {
  const posts = collectBlogPosts(process.cwd());
  const xml = buildRss(posts);
  const outPath = path.join(process.cwd(), 'public', 'feed.xml');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`RSS: Wrote ${outPath} with ${posts.length} posts.`);
}

if (require.main === module) main();

module.exports = { main };