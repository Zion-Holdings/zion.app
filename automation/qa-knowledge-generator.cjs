'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

function readFileSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf8'); } catch { return ''; }
}

function listMarkdownFiles(rootDirs) {
  const files = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(md|mdx)$/i.test(entry.name)) files.push(full);
    }
  }
  for (const d of rootDirs) walk(d);
  return files;
}

function extractQAFromMarkdown(markdown, filePath) {
  const lines = markdown.split(/\r?\n/);
  const qas = [];
  let currentHeading = null;
  let currentPara = [];
  function flush() {
    if (currentHeading) {
      const text = currentPara.join(' ').trim();
      if (text) {
        const question = `What is ${currentHeading}?`;
        const answer = text.replace(/\s+/g, ' ').slice(0, 800);
        qas.push({ question, answer, source: filePath });
      }
    }
    currentHeading = null;
    currentPara = [];
  }
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+)$/.exec(line);
    if (m) {
      flush();
      currentHeading = m[2].replace(/[#`*_]/g, '').trim();
      continue;
    }
    if (line.trim() === '') {
      if (currentPara.length > 0) flush();
      continue;
    }
    if (!currentHeading) continue;
    currentPara.push(line.trim());
  }
  flush();
  return qas;
}

(function main() {
  const reportsDir = path.resolve('public', 'reports');
  ensureDir(reportsDir);

  const sources = [];
  const files = listMarkdownFiles([path.resolve('docs'), path.resolve('.')]).filter((f) => /README\.md$/i.test(f) || f.includes(path.sep + 'docs' + path.sep));
  for (const f of files) {
    const content = readFileSafe(f);
    if (!content) continue;
    const qas = extractQAFromMarkdown(content, path.relative(process.cwd(), f));
    if (qas.length) sources.push({ file: f, total: qas.length });
  }

  const allQAs = [];
  for (const f of files) {
    const content = readFileSafe(f);
    if (!content) continue;
    allQAs.push(...extractQAFromMarkdown(content, path.relative(process.cwd(), f)));
  }

  const output = {
    generatedAt: new Date().toISOString(),
    totalPairs: allQAs.length,
    sources,
    items: allQAs
  };

  fs.writeFileSync(path.resolve(reportsDir, 'qa-knowledge.json'), JSON.stringify(output, null, 2));
})();