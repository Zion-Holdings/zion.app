#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'data', 'reports');
const outPath = path.join(reportsDir, 'stale-content.json');

function ensure() { if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true }); }

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    for (const e of fs.readdirSync(cur)) {
      const p = path.join(cur, e);
      const st = fs.statSync(p);
      if (st.isDirectory()) stack.push(p); else if (/\.(tsx|mdx|md)$/.test(e)) out.push({ path: p, mtime: st.mtimeMs });
    }
  }
  return out;
}

function run() {
  ensure();
  const targets = [path.join(process.cwd(), 'pages', 'blog'), path.join(process.cwd(), 'pages', 'chat-content')];
  const files = targets.flatMap(listFiles);
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000; // 30 days
  const stale = files.filter(f => f.mtime < cutoff).map(f => ({ file: path.relative(process.cwd(), f.path), lastModified: new Date(f.mtime).toISOString() }));
  const report = { generatedAt: new Date().toISOString(), staleCount: stale.length, items: stale };
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log('[stale] items', stale.length);
}

run();