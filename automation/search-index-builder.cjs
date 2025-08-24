#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT = path.join(ROOT, 'public', 'search', 'index.json');

function listFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) stack.push(full);
      else if (/\.(tsx|jsx|js|ts)$/.test(entry) && !full.includes('/api/')) results.push(full);
    }
  }
  return results;
}

function routeFromFile(full) {
  let rel = full.replace(PAGES_DIR, '').replace(/\\/g, '/');
  rel = rel.replace(/\.(tsx|jsx|js|ts)$/, '');
  if (rel.endsWith('/index')) rel = rel.slice(0, -6) || '/';
  return rel.startsWith('/') ? rel : `/${rel}`;
}

function extractTitle(content) {
  const m = content.match(/<title>([^<]+)<\/title>/i);
  return m ? m[1].trim() : '';
}

function extractH1(content) {
  const m = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  return m ? m[1].trim() : '';
}

async function main() {
  const files = listFiles(PAGES_DIR);
  const index = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const title = extractTitle(content);
    const h1 = extractH1(content);
    const route = routeFromFile(file);
    index.push({ route, title, h1 });
  }
  await fse.ensureDir(path.dirname(OUTPUT));
  await fse.writeJSON(OUTPUT, index, { spaces: 2 });
  console.log(`Search index built: ${index.length} entries`);
}

main().catch((err) => { console.error(err); process.exit(1); });