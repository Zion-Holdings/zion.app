#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'pages', 'blog');
const SITE = process.env.SITE_URL || 'https://example.com';
const OUT_XML = path.join(ROOT, 'public', 'feed.xml');
const OUT_JSON = path.join(ROOT, 'public', 'feed.json');

function listBlogFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) stack.push(full);
      else if (/\.(tsx|jsx|md|mdx)$/.test(entry)) results.push(full);
    }
  }
  return results;
}

function routeFromFile(full) {
  let rel = full.replace(BLOG_DIR, '').replace(/\\/g, '/');
  rel = rel.replace(/\.(tsx|jsx|md|mdx)$/, '');
  if (rel.endsWith('/index')) rel = rel.slice(0, -6) || '/';
  return `/blog${rel}`;
}

function extractTitle(content) {
  const m = content.match(/<title>([^<]+)<\/title>/i);
  if (m) return m[1].trim();
  const h1 = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1) return h1[1].trim();
  return 'Untitled';
}

function iso(dtMs) {
  return new Date(dtMs).toISOString();
}

function toRss(items) {
  const header = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0"><channel><title>Zion Blog</title><link>${SITE}</link><description>Zion AI Marketplace Blog</description>`;
  const body = items.map((it) => `\n<item><title>${escapeXml(it.title)}</title><link>${SITE}${it.route}</link><pubDate>${new Date(it.date).toUTCString()}</pubDate><guid>${SITE}${it.route}</guid></item>`).join('');
  const footer = `\n</channel></rss>`;
  return header + body + footer;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  const files = listBlogFiles(BLOG_DIR);
  const items = files.map((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const title = extractTitle(content);
    const route = routeFromFile(file);
    const stat = fs.statSync(file);
    return { title, route, date: stat.mtimeMs };
  }).sort((a, b) => b.date - a.date);

  await fse.writeFile(OUT_XML, toRss(items));
  await fse.writeJSON(OUT_JSON, { site: SITE, updated: iso(Date.now()), items }, { spaces: 2 });
  console.log(`RSS feed generated with ${items.length} items`);
}

main().catch((err) => { console.error(err); process.exit(1); });