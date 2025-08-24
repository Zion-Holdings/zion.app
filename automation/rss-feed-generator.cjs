#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

function rssEscape(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function buildItem({ title, link, description }) {
  const now = new Date().toUTCString();
  return `  <item>\n    <title>${rssEscape(title)}</title>\n    <link>${link}</link>\n    <guid>${link}</guid>\n    <pubDate>${now}</pubDate>\n    <description>${rssEscape(description)}</description>\n  </item>`;
}

(function main() {
  const siteUrl = process.env.SITE_URL || process.env.URL || 'https://zion.app';
  const items = [
    { title: 'AI Trends Radar — Live Report', link: `${siteUrl}/reports/ai-trends`, description: 'Aggregated AI trends updated automatically.' },
    { title: 'SEO Report — Latest', link: `${siteUrl}/reports/seo`, description: 'Latest SEO audit and insights.' },
    { title: 'Automation Hub', link: `${siteUrl}/automation`, description: 'Explore autonomous cloud automations running 24/7.' }
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n<channel>\n  <title>Zion — Updates Feed</title>\n  <link>${siteUrl}</link>\n  <description>Autonomous updates and reports from Zion.</description>\n  <generator>zion.app automation/rss-feed-generator.cjs</generator>\n${items.map(buildItem).join('\n')}\n</channel>\n</rss>\n`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), rss);
  console.log('RSS feed generated at public/feed.xml');
})();