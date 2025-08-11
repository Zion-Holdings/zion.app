#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '..', 'components');
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'components');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function walk(dir, exts = ['.tsx', '.jsx', '.ts', '.js']) {
  const items = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) items.push(...walk(full, exts));
    else if (entry.isFile() && exts.includes(path.extname(entry.name))) items.push(full);
  }
  return items;
}

function getComponentNameFromFile(filePath) {
  const base = path.basename(filePath, path.extname(filePath));
  try {
    const src = fs.readFileSync(filePath, 'utf8');
    const m1 = src.match(/export\s+default\s+function\s+(\w+)/);
    if (m1) return m1[1];
    const m2 = src.match(/export\s+function\s+(\w+)/);
    if (m2) return m2[1];
    const m3 = src.match(/function\s+(\w+)\s*\(/);
    if (m3) return m3[1];
  } catch {}
  // Fallback to filename in PascalCase
  return base.replace(/(^|[-_\s]+)([a-zA-Z])/g, (_, __, c) => c.toUpperCase());
}

function estimateFileSizeKb(filePath) {
  try { return Math.round((fs.statSync(filePath).size / 1024) * 10) / 10; } catch { return 0; }
}

function indexComponentUsage(componentsFiles, searchFiles) {
  const usageMap = new Map();
  const byBase = new Map();
  for (const c of componentsFiles) {
    const base = path.basename(c, path.extname(c));
    byBase.set(base, c);
    usageMap.set(c, 0);
  }
  for (const f of searchFiles) {
    let src = '';
    try { src = fs.readFileSync(f, 'utf8'); } catch { continue; }
    for (const [base, compPath] of byBase.entries()) {
      // naive import/JSX usage detection
      const importRegex = new RegExp(`from\\s+['\"][^'\"]*${base}['\"]|import\\s+.*${base}`, 'g');
      const jsxRegex = new RegExp(`<${base}(\s|>)`, 'g');
      const matches = (src.match(importRegex) || []).length + (src.match(jsxRegex) || []).length;
      if (matches > 0) usageMap.set(compPath, (usageMap.get(compPath) || 0) + matches);
    }
  }
  return usageMap;
}

function renderHTML(rows) {
  const tr = rows.map(r => `
    <tr>
      <td><code>${r.name}</code></td>
      <td>${r.file.replace(/^.*?components\//, 'components/')}</td>
      <td>${r.sizeKb} kB</td>
      <td>${r.usageCount}</td>
    </tr>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Component Catalog</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px; font-size: 14px; }
    th { background: #f3f4f6; text-align: left; }
    caption { text-align: left; font-weight: 700; margin-bottom: 8px; }
  </style>
</head>
<body>
  <h1>Component Catalog</h1>
  <p>Autonomously generated. Lists UI components with approximate sizes and usage counts across pages.</p>
  <table>
    <caption>Total components: ${rows.length}</caption>
    <thead>
      <tr><th>Name</th><th>File</th><th>Size</th><th>Usage</th></tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
</body>
</html>`;
}

(function main() {
  const componentsFiles = fs.existsSync(COMPONENTS_DIR) ? walk(COMPONENTS_DIR) : [];
  const searchFiles = [
    ...(fs.existsSync(PAGES_DIR) ? walk(PAGES_DIR) : []),
    ...componentsFiles,
  ];
  const usageMap = indexComponentUsage(componentsFiles, searchFiles);
  const rows = componentsFiles.map(file => ({
    name: getComponentNameFromFile(file),
    file: path.relative(path.join(__dirname, '..'), file),
    sizeKb: estimateFileSizeKb(file),
    usageCount: usageMap.get(file) || 0,
  })).sort((a, b) => b.usageCount - a.usageCount || a.name.localeCompare(b.name));

  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(rows));
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify(rows, null, 2));
})();