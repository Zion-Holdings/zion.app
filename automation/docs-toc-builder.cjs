const fs = require('fs');
const path = require('path');

function readMarkdownFilesRecursively(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...readMarkdownFilesRecursively(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

function parseHeadings(content) {
  const lines = content.split(/\r?\n/);
  const headings = [];
  for (const line of lines) {
    const match = /^(#{1,6})\s+(.+)$/.exec(line.trim());
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const slug = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ level, text, slug });
    }
  }
  return headings;
}

(function main() {
  const root = path.resolve(__dirname, '..');
  const docsDir = path.join(root, 'docs');
  const publicDir = path.join(root, 'public', 'reports', 'docs-toc');
  const outDir = path.join(root, 'docs');

  try { fs.mkdirSync(publicDir, { recursive: true }); } catch {}
  try { fs.mkdirSync(outDir, { recursive: true }); } catch {}

  const files = fs.existsSync(docsDir) ? readMarkdownFilesRecursively(docsDir) : [];
  const toc = [];

  for (const file of files) {
    const rel = path.relative(root, file);
    let content = '';
    try { content = fs.readFileSync(file, 'utf8'); } catch {}
    const headings = parseHeadings(content);
    toc.push({ file: rel, headings });
  }

  const generatedAt = new Date().toISOString();
  const json = { generatedAt, totalFiles: toc.length, toc };

  const jsonPath = path.join(publicDir, 'latest.json');
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));

  const mdLines = [];
  mdLines.push('# Documentation Table of Contents');
  mdLines.push('');
  mdLines.push(`Generated: ${generatedAt}`);
  mdLines.push('');
  for (const entry of toc) {
    mdLines.push(`- ${entry.file}`);
    for (const h of entry.headings) {
      const indent = '  '.repeat(Math.max(0, h.level - 1));
      mdLines.push(`${indent}- ${'#'.repeat(h.level)} ${h.text}`);
    }
  }
  const mdPath = path.join(outDir, '_toc.md');
  fs.writeFileSync(mdPath, mdLines.join('\n'));

  // Also write an index page with links to artifacts
  const reportMdPath = path.join(root, 'docs', 'reports', 'docs-toc.md');
  try { fs.mkdirSync(path.dirname(reportMdPath), { recursive: true }); } catch {}
  fs.writeFileSync(reportMdPath, [
    '# Docs TOC Report',
    '',
    `Generated: ${generatedAt}`,
    '',
    `- Public JSON: /reports/docs-toc/latest.json`,
    `- TOC Markdown: docs/_toc.md`,
    ''
  ].join('\n'));
})();