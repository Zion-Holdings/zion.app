#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';

const CANONICAL_BASE = process.env.CANONICAL_BASE || 'https://ziontechgroup.com';

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function extractPostMeta(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  const fileName = path.basename(filePath);
  if (fileName === 'index.tsx') return null;
  const slug = fileName.replace(/\.tsx$/, '');

  let title = null;
  let description = null;
  let h1 = null;

  const titleMatch = raw.match(/<title>[\s\S]*?<\/title>/i);
  if (titleMatch) {
    const inner = titleMatch[0].replace(/<\/?title>/gi, '').trim();
    title = inner.replace(/\s*-\s*Zion Tech Solutions\s*$/i, '').trim();
  }

  const metaDescMatch = raw.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["'][^>]*>/i);
  if (metaDescMatch) {
    description = metaDescMatch[1].trim();
  }

  const h1Match = raw.match(/<h1>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    h1 = h1Match[1].trim();
  }

  if (!title && h1) title = h1;
  if (!title) title = slug.replace(/-/g, ' ');
  if (!description) description = `Read ${title} on our blog.`;

  const stats = await fs.stat(filePath);
  const pubDate = stats.mtime; // fallback to file mtime

  return {
    slug,
    title,
    description,
    pubDate,
    link: `${CANONICAL_BASE}/blog/${slug}`,
  };
}

async function generateRss() {
  const blogFiles = await glob('pages/blog/*.tsx', { nodir: true });
  const items = [];
  for (const file of blogFiles) {
    const meta = await extractPostMeta(file);
    if (meta) items.push(meta);
  }
  items.sort((a, b) => b.pubDate - a.pubDate);

  const now = new Date();
  const channelTitle = 'Zion Tech Solutions Blog';
  const channelLink = `${CANONICAL_BASE}/blog`;
  const channelDesc = 'Latest articles and updates from Zion Tech Solutions.';

  const itemsXml = items.map((item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.link)}</guid>
      <pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(channelDesc)}</description>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>\n`;

  await fs.mkdir('public', { recursive: true });
  const outPath = path.join('public', 'feed.xml');
  await fs.writeFile(outPath, rss, 'utf8');
  console.log(`RSS generated: ${outPath} (${items.length} items)`);
}

generateRss().catch((err) => {
  console.error('RSS generation failed:', err);
  process.exit(1);
});