#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const SITE_URL = process.env.SITE_URL || '';

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true }).catch(() => {});
}

async function getLastMod(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return new Date(stat.mtime).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

async function generateSitemap() {
  const lastmod = await getLastMod(path.join(root, 'index.html'));

  const urls = [];
  if (SITE_URL) {
    urls.push({ loc: `${SITE_URL}/`, lastmod, changefreq: 'daily', priority: '1.0' });
  }

  const urlset = urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

  const target = path.join(root, 'sitemap.xml');
  await fs.writeFile(target, xml, 'utf8');
  return target;
}

async function generateRobots() {
  const lines = [
    'User-agent: *',
    'Allow: /'
  ];
  if (SITE_URL) {
    lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
  }
  const content = lines.join('\n') + '\n';
  const target = path.join(root, 'robots.txt');
  await fs.writeFile(target, content, 'utf8');
  return target;
}

async function generateManifest() {
  const manifest = {
    name: 'Zion',
    short_name: 'Zion',
    description: 'AI‑powered marketplace for high‑tech products, services, talents, and innovation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1020',
    theme_color: '#0b1020',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
  const target = path.join(root, 'manifest.webmanifest');
  await fs.writeFile(target, JSON.stringify(manifest, null, 2), 'utf8');
  return target;
}

async function main() {
  await ensureDir(root);
  const outputs = [];
  outputs.push(await generateManifest());
  outputs.push(await generateRobots());
  outputs.push(await generateSitemap());
  console.log('Generated files:', outputs.map(p => path.relative(root, p)).join(', '));
}

main().catch((e) => {
  console.error('Maintenance failed', e);
  process.exit(1);
});