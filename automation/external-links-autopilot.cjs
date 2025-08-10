#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const http = require('http');

function findLinks(content) {
  const hrefs = [];
  const linkRe = /href=\"([^\"]+)\"/g;
  let m;
  while ((m = linkRe.exec(content))) hrefs.push(m[1]);
  return hrefs.filter(h => /^https?:\/\//i.test(h));
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

function head(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve(res.statusCode || 0);
    });
    req.on('error', () => resolve(0));
    req.on('timeout', () => { req.destroy(); resolve(0); });
    req.end();
  });
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

  const arr = Array.from(links).slice(0, 50);
  const results = [];
  for (const url of arr) {
    const code = await head(url);
    results.push({ url, code });
  }

  await fs.writeJson(path.join(logsDir, 'external-links-status.json'), { ranAt: new Date().toISOString(), sampled: arr.length, results }, { spaces: 2 });
  console.log('External Links Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });