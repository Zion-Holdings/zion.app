#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function listFiles(root, exts) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === 'node_modules' || e.name === '.git' || e.name === '.next' || e.name === 'out') continue;
        walk(p);
      } else {
        const ext = path.extname(e.name).toLowerCase();
        if (exts.has(ext)) results.push(p);
      }
    }
  }
  walk(root);
  return results;
}

const STOP_WORDS = new Set(
  'a,an,the,and,or,for,with,without,of,to,in,on,by,at,from,as,is,are,was,were,be,been,being,that,this,these,those,not,do,does,did,done,can,could,should,would,may,might,will,just,about,into,over,under,it,its,if,then,else,when,while,where,how,why,you,your,we,our,they,them,their,he,she,his,her,i,me,my,us,one,two,three,more,most,less,least,very,also,such'.split(',')
);

function tokenize(content) {
  const words = content
    .replace(/[A-Z][a-z]+/g, s => s) // keep camel-case segments
    .toLowerCase()
    .replace(/[^a-z0-9_\-\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  return words;
}

function topN(map, n) {
  const arr = Array.from(map.entries());
  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, n).map(([k, v]) => ({ term: k, count: v }));
}

function jaccard(setA, setB) {
  let inter = 0;
  for (const x of setA) if (setB.has(x)) inter += 1;
  const union = setA.size + setB.size - inter;
  return union === 0 ? 0 : inter / union;
}

function buildClusters(fileToTerms, threshold = 0.22) {
  const files = Object.keys(fileToTerms);
  const sets = files.map(f => new Set(fileToTerms[f]));
  const parent = Array.from({ length: files.length }, (_, i) => i);
  function find(i) { return parent[i] === i ? i : (parent[i] = find(parent[i])); }
  function unite(i, j) {
    const ri = find(i), rj = find(j);
    if (ri !== rj) parent[rj] = ri;
  }
  for (let i = 0; i < files.length; i += 1) {
    for (let j = i + 1; j < files.length; j += 1) {
      const sim = jaccard(sets[i], sets[j]);
      if (sim >= threshold) unite(i, j);
    }
  }
  const groups = new Map();
  for (let i = 0; i < files.length; i += 1) {
    const r = find(i);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(files[i]);
  }
  const clusters = [];
  for (const ids of groups.values()) {
    if (ids.length < 2) continue;
    const termCounts = new Map();
    for (const f of ids) {
      for (const t of fileToTerms[f]) termCounts.set(t, (termCounts.get(t) || 0) + 1);
    }
    clusters.push({ files: ids.sort(), keywords: topN(termCounts, 8) });
  }
  clusters.sort((a, b) => b.files.length - a.files.length);
  return clusters;
}

(function main() {
  const workspace = process.cwd();
  const candidates = [
    path.join(workspace, 'pages'),
    path.join(workspace, 'components'),
    path.join(workspace, 'scripts'),
    path.join(workspace, 'automation'),
  ];
  const exts = new Set(['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx']);
  const files = candidates.flatMap(root => listFiles(root, exts));
  const fileToTerms = {};
  for (const f of files) {
    const text = readText(f);
    const tokens = tokenize(text);
    const tf = new Map();
    for (const w of tokens) tf.set(w, (tf.get(w) || 0) + 1);
    const top = topN(tf, 25).map(x => x.term);
    fileToTerms[path.relative(workspace, f)] = top;
  }
  const clusters = buildClusters(fileToTerms);

  const outDirPublic = path.join(workspace, 'public', 'automation');
  const outDirData = path.join(workspace, 'data', 'reports');
  ensureDir(outDirPublic);
  ensureDir(outDirData);

  const jsonPathPublic = path.join(outDirPublic, 'topic-clusters.json');
  const jsonPathData = path.join(outDirData, 'topic-clusters.json');
  fs.writeFileSync(jsonPathPublic, JSON.stringify({ generatedAt: new Date().toISOString(), clusters }, null, 2));
  fs.writeFileSync(jsonPathData, JSON.stringify({ generatedAt: new Date().toISOString(), clusters }, null, 2));

  const htmlPath = path.join(outDirPublic, 'topic-clusters.html');
  const html = [
    '<!doctype html>','<meta charset="utf-8"/>','<title>Topic Clusters</title>',
    '<style>body{font-family:ui-sans-serif,system-ui;padding:20px;background:#0b1020;color:#fff} .card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:12px;margin:8px 0} .kw{display:inline-block;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.35);border-radius:999px;padding:2px 8px;margin:2px;font-size:12px}</style>',
    '<h1>Topic Clusters</h1>',
    `<p>Generated at ${new Date().toLocaleString()}</p>`,
  ];
  clusters.slice(0, 100).forEach((c, i) => {
    html.push(`<div class="card"><h3>#${i + 1} — ${c.files.length} files</h3>`);
    html.push('<div>Keywords: ' + c.keywords.map(k => `<span class="kw">${k.term}</span>`).join(' ') + '</div>');
    html.push('<details><summary>Files</summary><ul>' + c.files.map(f => `<li><code>${f}</code></li>`).join('') + '</ul></details>');
    html.push('</div>');
  });
  fs.writeFileSync(htmlPath, html.join('\n'));

  process.stdout.write(`[topic-cluster-builder] clusters=${clusters.length} -> ${jsonPathPublic}\n`);
})();