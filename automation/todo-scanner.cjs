#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function toTitleCase(input) {
  return input
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function scanTodos(rootDir) {
  const patterns = [
    '**/*.{js,jsx,ts,tsx,md,mdx,css,scss,html,json,yml,yaml}'
  ];
  const ignore = [
    '**/node_modules/**',
    '**/.git/**',
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    '**/dist/**',
    '**/coverage/**',
    '**/automation/logs/**'
  ];

  const files = await glob(patterns, { cwd: rootDir, ignore, nodir: true, dot: true });

  const results = [];
  for (const relPath of files) {
    const absPath = path.join(rootDir, relPath);
    const content = readFileSafe(absPath);
    if (!content) continue;
    const lines = content.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = /(TODO|FIXME)\s*:?\s*(.*)/i.exec(line);
      if (match) {
        results.push({
          file: relPath,
          line: i + 1,
          tag: match[1].toUpperCase(),
          text: match[2].trim(),
          preview: line.trim().slice(0, 200)
        });
      }
    }
  }
  return results;
}

function generateMarkdownReport(findings) {
  const byFile = new Map();
  for (const f of findings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }

  const total = findings.length;
  const header = `# TODO and FIXME Report\n\n- Generated: ${new Date().toISOString()}\n- Total findings: ${total}\n`;

  const sections = [];
  const filesSorted = Array.from(byFile.keys()).sort((a, b) => a.localeCompare(b));
  for (const file of filesSorted) {
    const items = byFile.get(file).sort((a, b) => a.line - b.line);
    const bullets = items
      .map((it) => `- [${it.tag}] ${file}:${it.line} — ${it.text || it.preview}`)
      .join('\n');
    sections.push(`\n## ${file}\n\n${bullets}\n`);
  }

  return header + sections.join('\n');
}

async function main() {
  const root = process.cwd();
  const findings = await scanTodos(root);

  // Write JSON summary
  const publicDir = path.join(root, 'public', 'automation');
  ensureDir(publicDir);
  const summary = {
    generatedAt: new Date().toISOString(),
    total: findings.length,
    files: findings.reduce((acc, f) => {
      if (!acc[f.file]) acc[f.file] = [];
      acc[f.file].push({ line: f.line, tag: f.tag, text: f.text, preview: f.preview });
      return acc;
    }, {})
  };
  fs.writeFileSync(path.join(publicDir, 'todo-summary.json'), JSON.stringify(summary, null, 2), 'utf8');

  // Write Markdown report
  const docsDir = path.join(root, 'docs');
  ensureDir(docsDir);
  const md = generateMarkdownReport(findings);
  fs.writeFileSync(path.join(docsDir, 'TODO_REPORT.md'), md, 'utf8');

  // Console output for CI logs
  const filesWithCounts = Object.entries(summary.files).map(([file, list]) => ({ file, count: list.length }));
  filesWithCounts.sort((a, b) => b.count - a.count);
  console.log(`Found ${summary.total} TODO/FIXME items across ${filesWithCounts.length} files.`);
  for (const item of filesWithCounts.slice(0, 20)) {
    console.log(`Top: ${item.file} (${item.count})`);
  }
}

main().catch((err) => {
  console.error('todo-scanner failed:', err);
  process.exit(1);
});