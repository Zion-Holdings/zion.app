#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listFilesRecursively(dirPath, extensions) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.next') || entry.name === 'node_modules' || entry.name === '.git') continue;
      results.push(...listFilesRecursively(full, extensions));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext)) results.push(full);
    }
  }
  return results;
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function toRoute(filePath) {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  let rel = path.relative(pagesDir, filePath).replace(/\\/g, '/');
  if (rel.endsWith('/index.tsx') || rel.endsWith('/index.ts')) rel = rel.replace(/\/index\.tsx?$/, '/');
  if (rel.endsWith('.tsx') || rel.endsWith('.ts') || rel.endsWith('.jsx') || rel.endsWith('.js')) rel = rel.replace(/\.(t|j)sx?$/, '');
  if (!rel.startsWith('/')) rel = '/' + rel;
  if (rel === '/_app') return '';
  return rel;
}

function hasMetaDescription(content) {
  const headMatch = content.match(/<Head[\s\S]*?<\/Head>/i);
  if (!headMatch) return false;
  return /<meta\s+name=["']description["']\s+content=/.test(headMatch[0]);
}

function extractTitle(content) {
  const t = content.match(/<title>([\s\S]*?)<\/title>/i);
  return t ? t[1].trim() : '';
}

function main() {
  const pagesDir = path.resolve(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) {
    console.error('pages/ directory not found');
    process.exit(0);
  }

  const files = listFilesRecursively(pagesDir, ['.tsx', '.ts', '.jsx', '.js']).filter((f) => !/\/(api|_app|_document)\./.test(f));

  const rows = [];
  for (const file of files) {
    const content = readFileSafe(file);
    const route = toRoute(file);
    if (!route) continue;
    const title = extractTitle(content);
    const ok = hasMetaDescription(content);
    rows.push({ route, file, title, hasDescription: ok });
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    totalPages: rows.length,
    withDescription: rows.filter((r) => r.hasDescription).length,
    withoutDescription: rows.filter((r) => !r.hasDescription).length,
  };

  const outDataDir = path.resolve(process.cwd(), 'data');
  if (!fs.existsSync(outDataDir)) fs.mkdirSync(outDataDir, { recursive: true });
  fs.writeFileSync(path.join(outDataDir, 'meta-audit.json'), JSON.stringify({ summary, rows }, null, 2));

  const outDocsDir = path.resolve(process.cwd(), 'docs');
  if (!fs.existsSync(outDocsDir)) fs.mkdirSync(outDocsDir, { recursive: true });
  const lines = [];
  lines.push(`# Meta Description Audit`);
  lines.push('');
  lines.push(`Generated at: ${summary.generatedAt}`);
  lines.push('');
  lines.push(`Total pages: ${summary.totalPages}`);
  lines.push(`With description: ${summary.withDescription}`);
  lines.push(`Without description: ${summary.withoutDescription}`);
  lines.push('');
  lines.push('## Missing meta descriptions');
  lines.push('');
  for (const r of rows.filter((r) => !r.hasDescription)) {
    lines.push(`- ${r.route}  (${path.relative(process.cwd(), r.file)})`);
  }
  fs.writeFileSync(path.join(outDocsDir, 'meta-audit.md'), lines.join('\n'));
  console.log('Wrote docs/meta-audit.md and data/meta-audit.json');
}

if (require.main === module) {
  main();
}