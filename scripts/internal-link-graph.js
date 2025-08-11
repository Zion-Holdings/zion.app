#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const OUT_DIR = path.join(ROOT, 'public', 'reports', 'internal-links');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listFiles(dir, includeExt = ['.tsx', '.jsx', '.ts', '.js']) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(full, includeExt));
    else if (entry.isFile() && includeExt.includes(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function isInternal(href) {
  if (!href) return false;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  return href.startsWith('/');
}

function extractLinks(source) {
  const links = new Set();
  // Match Next.js <Link href="/path"> and variations
  const linkRe = /<Link[^>]*?href\s*=\s*{?"([^"]+)"}?/g;
  let m;
  while ((m = linkRe.exec(source))) {
    if (isInternal(m[1])) links.add(m[1]);
  }
  // Match anchor <a href="/path">
  const aRe = /<a[^>]*?href\s*=\s*"([^"]+)"/g;
  while ((m = aRe.exec(source))) {
    if (isInternal(m[1])) links.add(m[1]);
  }
  return Array.from(links);
}

function analyze() {
  const files = [];
  if (fs.existsSync(PAGES_DIR)) files.push(...listFiles(PAGES_DIR));
  if (fs.existsSync(COMPONENTS_DIR)) files.push(...listFiles(COMPONENTS_DIR));
  const nodes = [];
  const edges = [];
  const details = [];
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT, file);
    const outbound = extractLinks(src);
    details.push({ file: rel, outbound });
    nodes.push({ id: rel, type: 'file' });
    for (const href of outbound) {
      edges.push({ from: rel, to: href });
      nodes.push({ id: href, type: 'route' });
    }
  }
  // Normalize nodes unique
  const nodeMap = new Map();
  for (const n of nodes) nodeMap.set(n.id, n);
  return { nodes: Array.from(nodeMap.values()), edges, details, generatedAt: new Date().toISOString() };
}

function renderHTML(graph) {
  const rows = graph.details.map(d => `<tr><td>${d.file}</td><td>${d.outbound.length}</td><td>${d.outbound.map(h => `<code>${h}</code>`).join('<br/>')}</td></tr>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Internal Link Graph</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin: 0 0 8px; }
    .muted { color: #6b7280; font-size: 12px; }
    table { border-collapse: collapse; width: 100%; margin-top: 16px; }
    th, td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; vertical-align: top; font-size: 14px; }
    th { background: #f9fafb; }
    code { background: #f3f4f6; padding: 1px 4px; border-radius: 4px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px; background: #fff; }
    .kbd { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
  </style>
</head>
<body>
  <h1>Internal Link Graph</h1>
  <div class="muted">Generated at ${graph.generatedAt}</div>
  <div class="grid">
    <div class="card">
      <div><strong>Nodes</strong>: ${graph.nodes.length} &nbsp; <strong>Edges</strong>: ${graph.edges.length}</div>
    </div>
    <div class="card">
      <div><strong>How to use</strong>: Explore outbound internal links per file. Identify orphan pages (no inbound), and opportunities to improve navigation.</div>
    </div>
  </div>
  <table>
    <thead><tr><th>Source File</th><th>Outbound Count</th><th>Outbound Internal Links</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;
}

function main() {
  const graph = analyze();
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'graph.json'), JSON.stringify(graph, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(graph));
}

main();