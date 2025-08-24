#!/usr/bin/env node
/*
  Add <Head><title>...</title></Head> to simple Next.js pages missing it.
  Heuristic: file contains `export default function` and no `next/head` import.
*/
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function toTitle(name){
  const base = name.replace(/[-_]/g,' ').replace(/\.[tj]sx?$/,'');
  return base.replace(/\b\w/g, c => c.toUpperCase());
}

function processFile(file){
  const src = fs.readFileSync(file,'utf8');
  if (/from\s+['"]next\/head['"]/.test(src)) return false;
  if (!/export\s+default\s+function\s+\w+\s*\(/.test(src)) return false;
  const title = toTitle(path.basename(file));
  let updated = src;
  // insert import
  updated = `import Head from 'next/head'\n` + updated;
  // naive wrap: insert <Head> block after first return
  updated = updated.replace(/return\s*\(/, match => `${match}\n      <Head>\n        <title>${title} | Zion OS</title>\n        <meta name=\"description\" content=\"${title} page\"/>\n      </Head>\n`);
  if (updated !== src){
    fs.writeFileSync(file, updated);
    return true;
  }
  return false;
}

const files = glob.sync('pages/**/*.tsx', { nodir: true });
let changed = 0;
for (const f of files){
  if (f.includes('_app') || f.includes('_document')) continue;
  try { if (processFile(f)) changed++; } catch(e){ console.warn('skip', f, e.message); }
}
console.log(`SEO meta enriched in ${changed} file(s).`);