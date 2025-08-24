#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fetch = global.fetch || ((...args) => import('node-fetch').then(({default: f}) => f(...args)));

const OUT_DIR = path.join(process.cwd(), 'content', 'digests');
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'digests');
const SOURCES = [
  { name: 'Hacker News', url: 'https://hnrss.org/frontpage' },
  { name: 'Dev.to', url: 'https://dev.to/feed' }
];

function extractItems(xml, max=10) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m; let count=0;
  while ((m = re.exec(xml)) && count < max) {
    const item = m[1];
    const title = (item.match(/<title>([\s\S]*?)<\/title>/i)||[])[1] || 'Untitled';
    const link = (item.match(/<link>([\s\S]*?)<\/link>/i)||[])[1] || '#';
    items.push({ title: title.trim(), link: link.trim() });
    count++;
  }
  return items;
}

(async function main(){
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  const date = new Date();
  const y = date.toISOString().slice(0,10);
  const fileName = `${y}.md`;
  const outFile = path.join(OUT_DIR, fileName);
  const publicFile = path.join(PUBLIC_DIR, fileName);
  let content = `# Tech Digest — ${y}\n\n`;
  for (const src of SOURCES) {
    try {
      const res = await fetch(src.url);
      const xml = await res.text();
      const items = extractItems(xml, 10);
      content += `## ${src.name}\n`;
      for (const it of items) {
        content += `- ${it.title} — ${it.link}\n`;
      }
      content += `\n`;
    } catch (e) {
      content += `> Failed to fetch ${src.name}\n\n`;
    }
  }
  fs.writeFileSync(outFile, content);
  fs.writeFileSync(publicFile, content);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'latest.md'), content);
  console.log(`Wrote digest: ${path.relative(process.cwd(), outFile)} and ${path.relative(process.cwd(), publicFile)}`);
})();