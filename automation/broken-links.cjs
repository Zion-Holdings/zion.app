#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(listMarkdown(p));
    else if (p.endsWith('.md') || p.endsWith('.mdx')) files.push(p);
  }
  return files;
}

function extractLinks(content) {
  const re = /https?:\/\/[^\s)]+/g;
  const set = new Set();
  let m;
  while ((m = re.exec(content))) set.add(m[0]);
  return Array.from(set);
}

function check(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve({ url, status: res.statusCode });
      res.resume();
    });
    req.on('error', () => resolve({ url, status: 0 }));
    req.on('timeout', () => { req.destroy(); resolve({ url, status: 0 }); });
    req.end();
  });
}

(async function main() {
  const roots = [path.join(process.cwd(), 'docs'), path.join(process.cwd(), '.')];
  const files = roots.flatMap((r) => listMarkdown(r));
  const allLinks = new Set();
  for (const f of files) {
    const c = fs.readFileSync(f, 'utf8');
    extractLinks(c).forEach((u) => allLinks.add(u));
  }
  const links = Array.from(allLinks).slice(0, 2000);
  const results = [];
  const concurrency = 20;
  let i = 0;
  async function worker() {
    while (i < links.length) {
      const url = links[i++];
      try { results.push(await check(url)); } catch { results.push({ url, status: 0 }); }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  const outDir = path.join(process.cwd(), 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'broken-links.json');
  fs.writeFileSync(outPath, JSON.stringify({ scannedAt: new Date().toISOString(), count: results.length, results }, null, 2));
  console.log('[links] wrote', outPath);
})();