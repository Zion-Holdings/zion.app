#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMarkdownFiles(full));
    else if (/\.mdx?$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function extractHeadings(markdown) {
  const lines = markdown.split(/\r?\n/);
  const headings = [];
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+)$/.exec(line.trim());
    if (m) {
      headings.push(m[2].replace(/[`*_~]/g, '').trim());
    }
  }
  return headings;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const docsDir = path.join(workspaceRoot, 'docs');
  const files = listMarkdownFiles(docsDir);

  const termToSources = new Map();

  for (const file of files) {
    try {
      const src = fs.readFileSync(file, 'utf8');
      const headings = extractHeadings(src);
      for (const h of headings) {
        const term = h.replace(/[:#]/g, '').trim();
        if (!term) continue;
        if (!termToSources.has(term)) termToSources.set(term, new Set());
        termToSources.get(term).add(file.replace(workspaceRoot + path.sep, ''));
      }
    } catch {}
  }

  const sorted = Array.from(termToSources.keys()).sort((a,b)=>a.localeCompare(b));

  const lines = [];
  lines.push('# Glossary');
  lines.push('');
  lines.push('Auto-generated glossary of terms extracted from documentation headings.');
  lines.push('');

  for (const term of sorted) {
    const sources = Array.from(termToSources.get(term)).sort();
    lines.push(`## ${term}`);
    lines.push('');
    lines.push('Appears in:');
    for (const s of sources) {
      const label = s.replace(/^docs\//, '');
      lines.push(`- ${label}`);
    }
    lines.push('');
  }

  const outPath = path.join(docsDir, 'GLOSSARY.md');
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'));
  console.log(`Glossary written to ${path.relative(workspaceRoot, outPath)}`);
}

main();