#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');

function findLinks(content) {
  const hrefs = [];
  const linkRe = /href=\"([^\"]+)\"/g;
  let m;
  while ((m = linkRe.exec(content))) hrefs.push(m[1]);
  return hrefs.filter(h => h.startsWith('/') && !h.startsWith('//'));
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

async function main() {
  const repoRoot = process.cwd();
  const pagesDir = path.join(repoRoot, 'pages');
  const logsDir = path.join(repoRoot, 'automation_logs');
  await fs.ensureDir(logsDir);

  const files = walk(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.js'));
  const contents = files.map(f => ({ f, src: fs.readFileSync(f, 'utf-8') }));
  const links = new Set();
  for (const { src } of contents) findLinks(src).forEach(l => links.add(l.split('#')[0]));

  const normalized = Array.from(links);
  const pagePaths = files.map(f => '/' + path.relative(pagesDir, f).replace(/index\.(tsx|js)$/, '').replace(/\.(tsx|js)$/, ''))
    .map(p => p.replace(/\\/g, '/').replace(/\/\/$/, ''));

  const missing = normalized.filter(l => !pagePaths.includes(l));
  const status = { ranAt: new Date().toISOString(), checked: normalized.length, broken: missing.sort() };
  await fs.writeJson(path.join(logsDir, 'broken-links-status.json'), status, { spaces: 2 });
  console.log('Broken Links Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });