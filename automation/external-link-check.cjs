#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function* walkFiles(startDir, exts = ['.tsx', '.ts', '.jsx', '.js', '.mdx']) {
  if (!fs.existsSync(startDir)) return;
  const stack = [startDir];
  while (stack.length) {
    const current = stack.pop();
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        stack.push(full);
      } else if (entry.isFile()) {
        if (exts.includes(path.extname(entry.name))) yield full;
      }
    }
  }
}

function extractExternalLinks(text) {
  const links = new Set();
  const regex = /href\s*=\s*{?\s*["'`](https?:\/\/[^"'`\s}]+)["'`]/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    links.add(m[1]);
  }
  return Array.from(links);
}

function shouldSkip(url) {
  try {
    const { hostname } = new URL(url);
    return hostname === 'github.com' || hostname.endsWith('.github.com');
  } catch { return false; }
}

function checkUrl(url) {
  return new Promise((resolve) => {
    if (shouldSkip(url)) {
      resolve({ url, statusCode: 0, ok: true, skipped: true, reason: 'skipped-host' });
      return;
    }
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve({ url, statusCode: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
      res.resume();
    });
    req.on('timeout', () => { req.destroy(new Error('timeout')); });
    req.on('error', () => {
      // fallback to GET
      const req2 = mod.get(url, { timeout: 10000 }, (res2) => {
        resolve({ url, statusCode: res2.statusCode, ok: res2.statusCode >= 200 && res2.statusCode < 400 });
        res2.resume();
      });
      req2.on('timeout', () => { req2.destroy(new Error('timeout')); resolve({ url, statusCode: 0, ok: false, error: 'timeout' }); });
      req2.on('error', (e2) => resolve({ url, statusCode: 0, ok: false, error: e2.message }));
    });
    req.end();
  });
}

async function main() {
  const pagesDirs = [path.join(process.cwd(), 'pages'), path.join(process.cwd(), 'src', 'pages')];
  const urls = new Set();
  for (const dir of pagesDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of walkFiles(dir)) {
      let text = '';
      try { text = fs.readFileSync(file, 'utf8'); } catch { continue; }
      for (const u of extractExternalLinks(text)) urls.add(u);
    }
  }
  const list = Array.from(urls).slice(0, 500);
  const results = [];
  const concurrency = 12;
  let i = 0;
  async function worker() {
    while (i < list.length) {
      const idx = i++;
      const url = list[idx];
      const res = await checkUrl(url);
      results.push(res);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  const bad = results.filter((r) => !r.ok);
  const outDir = path.join(process.cwd(), 'data', 'reports', 'external-links');
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `external-links-${Date.now()}.json`);
  fs.writeFileSync(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), total: results.length, bad: bad.length, results }, null, 2));
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), total: results.length, bad: bad.length, results }, null, 2));
  console.log(`Checked ${results.length} external links. Bad: ${bad.length}. Report: ${outFile}`);
}

main().catch((e) => { console.error(e); process.exit(1); });