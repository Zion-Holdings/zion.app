#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(process.cwd(), 'docs/gitbook');
const REPORT_DIR = path.join(process.cwd(), 'data/reports/docs');

function listMarkdownFiles(dir) {
  let results = [];
  const items = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(listMarkdownFiles(full));
    } else if (item.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function extractLinks(markdown) {
  const regex = /\]\(([^)]+)\)/g;
  const links = [];
  let m;
  while ((m = regex.exec(markdown))) {
    links.push(m[1]);
  }
  return links;
}

function build() {
  const files = listMarkdownFiles(DOCS_DIR);
  const map = files.map((f) => ({ file: path.relative(DOCS_DIR, f), size: fs.statSync(f).size }));
  const broken = [];
  for (const f of files) {
    const md = fs.readFileSync(f, 'utf8');
    const links = extractLinks(md)
      .filter((l) => !l.startsWith('http'))
      .map((l) => (l.startsWith('./') || l.startsWith('../') ? path.normalize(path.join(path.dirname(f), l)) : path.join(DOCS_DIR, l)));
    for (const l of links) {
      const withMd = l.endsWith('.md') ? l : `${l}`;
      if (!fs.existsSync(withMd)) {
        broken.push({ from: path.relative(DOCS_DIR, f), to: path.relative(DOCS_DIR, withMd) });
      }
    }
  }
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const summary = { updatedAt: new Date().toISOString(), totalFiles: files.length, files: map };
  fs.writeFileSync(path.join(REPORT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'broken-links.json'), JSON.stringify({ updatedAt: new Date().toISOString(), broken }, null, 2));
  console.log('Docs intelligence reports written to', REPORT_DIR);
}

build();