#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const siteUrl = process.env.SITE_URL || 'https://zion.app';
const publicDir = path.join(process.cwd(), 'public');
const feedXml = path.join(publicDir, 'feed.xml');
const feedJson = path.join(publicDir, 'feed.json');

function ensure() { if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true }); }

function listBlogPages() {
  const dir = path.join(process.cwd(), 'pages', 'blog');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const items = [];
  for (const f of files) {
    if (f === 'index.tsx' || f === 'digests') continue;
    if (!f.endsWith('.tsx')) continue;
    const slug = f.replace(/\.tsx$/, '');
    const title = slug.replace(/-/g, ' ');
    items.push({ title, url: `${siteUrl}/blog/${slug}`, date: new Date().toISOString() });
  }
  // Digests
  const digDir = path.join(dir, 'digests');
  if (fs.existsSync(digDir)) {
    for (const g of fs.readdirSync(digDir)) {
      if (!g.endsWith('.tsx')) continue;
      const slug = g.replace(/\.tsx$/, '');
      items.push({ title: slug, url: `${siteUrl}/blog/digests/${slug}`, date: new Date().toISOString() });
    }
  }
  return items;
}

function buildRss(items) {
  const header = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0"><channel><title>Zion Feed</title><link>${siteUrl}</link><description>Latest content from Zion</description>`;
  const body = items.map(i => `<item><title><![CDATA[${i.title}]]></title><link>${i.url}</link><pubDate>${new Date(i.date).toUTCString()}</pubDate></item>`).join('');
  const footer = `</channel></rss>`;
  return header + body + footer;
}

function run() {
  ensure();
  const items = listBlogPages().slice(0, 100);
  const xml = buildRss(items);
  fs.writeFileSync(feedXml, xml);
  fs.writeFileSync(feedJson, JSON.stringify({ version: 'https://jsonfeed.org/version/1', title: 'Zion Feed', home_page_url: siteUrl, feed_url: `${siteUrl}/feed.json`, items: items.map(i => ({ id: i.url, url: i.url, title: i.title, date_published: i.date })) }, null, 2));
  console.log('[rss] feed generated with', items.length, 'items');
}

run();