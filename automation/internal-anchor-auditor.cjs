#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function listFilesRecursively(startDir, includeExtensions = ['.md', '.mdx', '.js', '.jsx', '.ts', '.tsx'], excludeDirs = ['.git', 'node_modules', '.next', 'out', 'public']) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      const rel = path.relative(process.cwd(), full);
      if (entry.isDirectory()) {
        if (excludeDirs.some(x => rel === x || rel.startsWith(x + path.sep))) continue;
        walk(full);
      } else {
        if (includeExtensions.includes(path.extname(entry.name))) {
          results.push(full);
        }
      }
    }
  }
  walk(startDir);
  return results;
}

function extractIdsAndAnchors(content) {
  const idRegex = /id\s*=\s*"([^"]+)"/g;
  const hrefAnchorRegex = /href\s*=\s*"#([^"]+)"/g;
  const ids = new Set();
  const anchors = new Set();
  let m;
  while ((m = idRegex.exec(content))) ids.add(m[1]);
  while ((m = hrefAnchorRegex.exec(content))) anchors.add(m[1]);
  return { ids: Array.from(ids), anchors: Array.from(anchors) };
}

function main() {
  const roots = [path.join(process.cwd(), 'pages'), path.join(process.cwd(), 'components')];
  const files = roots.flatMap(root => listFilesRecursively(root));
  const missing = [];
  for (const file of files) {
    let content = '';
    try { content = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const { ids, anchors } = extractIdsAndAnchors(content);
    const idSet = new Set(ids);
    const missingHere = anchors.filter(a => !idSet.has(a));
    if (missingHere.length > 0) {
      missing.push({ file: path.relative(process.cwd(), file), missingAnchors: missingHere, presentIds: ids });
    }
  }
  const report = {
    generatedAt: new Date().toISOString(),
    totalFilesScanned: files.length,
    totalIssues: missing.reduce((acc, m) => acc + m.missingAnchors.length, 0),
    issues: missing
  };
  const outPath = path.join(process.cwd(), 'public', 'automation', 'anchors-report.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`[anchor-audit] Wrote ${outPath} with ${report.totalIssues} issues.`);
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { console.error(e); process.exit(1); }
}