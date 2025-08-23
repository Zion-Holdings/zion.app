#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const baseUrlRaw = process.env.BASE_URL || '';
if (!baseUrlRaw) {
  console.error('BASE_URL environment variable is required, e.g. https://user.github.io/repo/');
  process.exit(1);
}
let baseUrl = baseUrlRaw.trim();
if (!baseUrl.endsWith('/')) baseUrl += '/';

const IGNORE_DIRS = new Set(['.git', '.github', 'node_modules', 'dist']);

function toUrlPath(filePath) {
  const rel = path.relative(projectRoot, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '';
  if (rel.endsWith('/index.html')) return rel.slice(0, -'index.html'.length);
  if (rel.endsWith('.html')) return rel.slice(0, -'.html'.length);
  return null;
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) {
      if (entry.name === '.well-known') {
        // allow
      } else if (IGNORE_DIRS.has(entry.name)) {
        continue;
      }
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

async function main() {
  const urls = [];
  for await (const filePath of walk(projectRoot)) {
    if (!filePath.endsWith('.html')) continue;
    const urlPath = toUrlPath(filePath);
    if (urlPath === null) continue;
    urls.push(urlPath);
  }

  // Ensure root is present
  if (!urls.includes('')) urls.push('');

  const now = new Date().toISOString();
  const xmlUrls = urls
    .sort()
    .map((p) => {
      const loc = baseUrl + p;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p === '' ? '1.0' : '0.6'}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>\n`;

  await fs.writeFile(path.join(projectRoot, 'sitemap.xml'), xml, 'utf8');
  console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
