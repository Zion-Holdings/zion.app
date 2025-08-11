#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function walkDir(dir, exts = ['.ts', '.tsx', '.js', '.jsx']) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.next')) continue;
      results.push(...walkDir(p, exts));
    } else {
      if (exts.includes(path.extname(entry.name))) results.push(p);
    }
  }
  return results;
}

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function extractExportedSymbols(filePath) {
  const content = readFileSafe(filePath);
  const symbols = new Set();
  const exportFn = /export\s+function\s+([A-Za-z0-9_]+)/g;
  const exportConst = /export\s+const\s+([A-Za-z0-9_]+)/g;
  const exportClass = /export\s+class\s+([A-Za-z0-9_]+)/g;
  const defaultFn = /export\s+default\s+function\s+([A-Za-z0-9_]+)/g;

  let m;
  while ((m = exportFn.exec(content))) symbols.add(m[1]);
  while ((m = exportConst.exec(content))) symbols.add(m[1]);
  while ((m = exportClass.exec(content))) symbols.add(m[1]);
  while ((m = defaultFn.exec(content))) symbols.add(m[1]);

  return Array.from(symbols);
}

function extractDocHeadings(filePath) {
  const content = readFileSafe(filePath);
  const headings = [];
  const h = /\n#+\s+([^\n#]+)/g;
  let m;
  while ((m = h.exec(content))) headings.push(m[1].trim());
  return headings;
}

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9_\-\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(w => w.length > 2 && !['the','and','for','with','from','this','that','into','your','you','are','was','were','have','has','had','use','used','using','our','about','page'].includes(w));
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const codeDirs = [path.join(repoRoot, 'components'), path.join(repoRoot, 'pages')];
  const docsDir = path.join(repoRoot, 'docs');
  const outDir = path.join(repoRoot, 'public', 'reports');
  fs.mkdirSync(outDir, { recursive: true });

  const codeFiles = codeDirs.flatMap(d => walkDir(d, ['.ts', '.tsx']));
  const docFiles = walkDir(docsDir, ['.md', '.mdx']);

  const codeSymbols = new Map();
  for (const f of codeFiles) {
    const syms = extractExportedSymbols(f);
    if (syms.length) codeSymbols.set(f, syms);
  }

  const docHeadings = new Map();
  const docsAllText = [];
  for (const f of docFiles) {
    const headings = extractDocHeadings(f);
    docHeadings.set(f, headings);
    docsAllText.push(readFileSafe(f));
  }

  const allDocText = docsAllText.join('\n').toLowerCase();

  const undocumented = [];
  for (const [file, syms] of codeSymbols.entries()) {
    for (const s of syms) {
      const needle = s.toLowerCase();
      if (!allDocText.includes(needle)) {
        undocumented.push({ symbol: s, file });
      }
    }
  }

  const orphanedDocs = [];
  for (const [file, headings] of docHeadings.entries()) {
    for (const h of headings) {
      const toks = tokenize(h);
      if (!toks.length) continue;
      const hit = Array.from(codeSymbols.values()).flat().some(sym => toks.some(t => sym.toLowerCase().includes(t)));
      if (!hit) orphanedDocs.push({ heading: h, file });
    }
  }

  const reportMd = [];
  const now = new Date().toISOString();
  reportMd.push(`# Docs Drift Report`);
  reportMd.push(`Generated: ${now}`);
  reportMd.push('');
  reportMd.push(`- Code files scanned: ${codeFiles.length}`);
  reportMd.push(`- Docs files scanned: ${docFiles.length}`);
  reportMd.push(`- Undocumented exported symbols: ${undocumented.length}`);
  reportMd.push(`- Orphaned doc headings: ${orphanedDocs.length}`);
  reportMd.push('');

  if (undocumented.length) {
    reportMd.push('## Undocumented Exported Symbols');
    const top = undocumented.slice(0, 100);
    for (const u of top) {
      reportMd.push(`- ${u.symbol} — ${path.relative(repoRoot, u.file)}`);
    }
    if (undocumented.length > top.length) reportMd.push(`...and ${undocumented.length - top.length} more`);
    reportMd.push('');
  }

  if (orphanedDocs.length) {
    reportMd.push('## Orphaned Doc Headings');
    const top = orphanedDocs.slice(0, 100);
    for (const o of top) {
      reportMd.push(`- "${o.heading}" — ${path.relative(repoRoot, o.file)}`);
    }
    if (orphanedDocs.length > top.length) reportMd.push(`...and ${orphanedDocs.length - top.length} more`);
    reportMd.push('');
  }

  const summary = {
    generatedAt: now,
    codeFiles: codeFiles.length,
    docsFiles: docFiles.length,
    undocumentedCount: undocumented.length,
    orphanedDocsCount: orphanedDocs.length,
  };

  fs.writeFileSync(path.join(outDir, 'docs-drift-report.md'), reportMd.join('\n'), 'utf8');
  fs.writeFileSync(path.join(outDir, 'docs-drift-report.json'), JSON.stringify({ summary, undocumented, orphanedDocs }, null, 2), 'utf8');

  console.log(`Docs drift report generated with ${undocumented.length} undocumented symbols and ${orphanedDocs.length} orphaned headings.`);
}

if (require.main === module) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error('Docs drift detector failed:', err);
    process.exit(1);
  }
}