#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const OUTPUT_DIR = path.join(ROOT, 'public', 'automation');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'content-keywords.json');

function ensureDirExists(dirPath) {
  try { fs.mkdirSync(dirPath, { recursive: true }); } catch {}
}

function walkFiles(startDir, exts) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (exts.includes(path.extname(entry.name))) results.push(full);
    }
  }
  walk(startDir);
  return results;
}

function extractTextFromTsx(source) {
  // Remove code blocks and JSX tags naively to approximate text content
  let s = source;
  s = s.replace(/`[\s\S]*?`/g, ' '); // template strings
  s = s.replace(/\{[\s\S]*?\}/g, ' '); // JS expressions
  s = s.replace(/<[^>]+>/g, ' '); // JSX tags
  s = s.replace(/[^A-Za-z0-9\s-]+/g, ' ');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

function computeKeywords(text, topN = 12) {
  const stop = new Set('a,an,and,are,as,at,be,by,for,from,has,have,in,is,it,its,of,on,or,that,the,these,this,to,was,were,will,with,our,your,you,we,they,them,us,not,into,via,over,under,out,up,down,across,per,vs,vs.,v,can,may,should,could,while,when,where,which,who,what,how,why,than,then,also,all,any,each,more,most,other,some,such,no,nor,only,own,same,so,too,very'.split(','));
  const counts = new Map();
  for (const raw of text.split(' ')) {
    const w = raw.toLowerCase();
    if (!w || w.length < 3 || stop.has(w)) continue;
    const numish = /^[0-9]+$/.test(w);
    if (numish) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, topN).map(([word, count]) => ({ word, count }));
}

(function main() {
  ensureDirExists(OUTPUT_DIR);
  const files = walkFiles(PAGES_DIR, ['.tsx', '.jsx', '.mdx']);
  const results = [];
  for (const file of files) {
    let src = '';
    try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const text = extractTextFromTsx(src);
    if (!text) continue;
    const keywords = computeKeywords(text, 16);
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    results.push({ file: rel, keywords });
  }
  const out = { generatedAt: new Date().toISOString(), totalFiles: results.length, pages: results };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Wrote keyword analysis for ${results.length} pages to public/automation/content-keywords.json`);
})();