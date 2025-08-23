#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');

async function main() {
  const repoRoot = process.cwd();
  const pagesDir = path.join(repoRoot, 'pages');
  const publicDir = path.join(repoRoot, 'public');
  const logsDir = path.join(repoRoot, 'automation_logs');
  await fs.ensureDir(logsDir);

  function walk(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir)) {
      const p = path.join(dir, entry);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) out.push(...walk(p));
      else out.push(p);
    }
    return out;
  }

  let pageFiles = [];
  try { pageFiles = walk(pagesDir).filter(p => p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.js')); } catch {}

  const sitemapXml = path.join(repoRoot, 'out', 'sitemap.xml');
  const hasSitemap = await fs.pathExists(sitemapXml) || await fs.pathExists(path.join(publicDir, 'sitemap.xml'));

  const report = {
    ranAt: new Date().toISOString(),
    totalPages: pageFiles.length,
    hasSitemap,
    recommendations: [
      !hasSitemap ? 'Generate sitemap via npm run sitemap and publish to public/sitemap.xml' : null,
      pageFiles.length < 20 ? 'Add more targeted landing pages to capture long-tail keywords' : null,
    ].filter(Boolean),
  };

  await fs.writeJson(path.join(logsDir, 'seo-reporter-status.json'), report, { spaces: 2 });
  console.log('SEO Reporter Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });