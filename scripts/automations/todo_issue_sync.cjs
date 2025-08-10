#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function listTrackedFiles() {
  try {
    const out = execSync('git ls-files', { encoding: 'utf8' });
    return out.split('\n').filter(Boolean);
  } catch (e) {
    return [];
  }
}

function isLikelyTextFile(filePath) {
  const textExtensions = [
    '.js', '.jsx', '.ts', '.tsx', '.json', '.yml', '.yaml', '.md', '.mdx', '.css', '.scss', '.sass', '.html', '.txt', '.cjs', '.mjs', '.toml'
  ];
  const ext = path.extname(filePath).toLowerCase();
  if (textExtensions.includes(ext)) return true;
  // Fallback: treat small files as text and ignore big binaries
  try {
    const stat = fs.statSync(filePath);
    return stat.size < 1024 * 1024; // <1MB
  } catch {
    return false;
  }
}

function extractTodosFromContent(content) {
  const lines = content.split(/\r?\n/);
  const results = [];
  const re = /(TODO|FIXME|NOTE)\s*:?\s*(.*)/i;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(re);
    if (m) {
      const contextBefore = lines.slice(Math.max(0, i - 2), i).join('\n');
      const contextAfter = lines.slice(i + 1, i + 3).join('\n');
      results.push({
        lineNumber: i + 1,
        keyword: m[1].toUpperCase(),
        text: m[2].trim(),
        contextBefore,
        contextAfter,
      });
    }
  }
  return results;
}

function generateReport(todosByFile) {
  const header = `# Repository TODO/FIXME/NOTE Sync\n\n` +
    `This issue is automatically generated. Do not edit manually.\n\n` +
    `- Total files with items: ${todosByFile.size}\n` +
    `- Generated: ${new Date().toISOString()}\n\n`;

  const sections = [];
  for (const [file, items] of todosByFile) {
    sections.push(`## ${file} ( ${items.length} )\n`);
    for (const item of items) {
      sections.push(`- [${item.keyword}] L${item.lineNumber}: ${item.text}`);
      if (item.contextBefore || item.contextAfter) {
        sections.push('```');
        if (item.contextBefore) sections.push(item.contextBefore);
        sections.push((item.keyword + ': ' + item.text).trim());
        if (item.contextAfter) sections.push(item.contextAfter);
        sections.push('```');
      }
    }
    sections.push('');
  }

  return header + sections.join('\n');
}

(function main() {
  const files = listTrackedFiles()
    .filter(f => !f.startsWith('.git/'))
    .filter(f => !f.startsWith('node_modules/'))
    .filter(f => isLikelyTextFile(f));

  const todosByFile = new Map();
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const items = extractTodosFromContent(content);
      if (items.length > 0) {
        todosByFile.set(file, items);
      }
    } catch {
      // ignore
    }
  }

  const docsDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
  const outPath = path.join(docsDir, 'TODO_SYNC.md');
  const report = generateReport(todosByFile);
  fs.writeFileSync(outPath, report, 'utf8');
  console.log(`Wrote ${outPath}`);
})();