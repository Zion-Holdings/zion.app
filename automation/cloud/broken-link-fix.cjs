#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const ROOT = process.cwd();
const PAGES_DIR = path.resolve('pages');

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...listFiles(full));
    else if (entry.endsWith('.md') || entry.endsWith('.mdx') || entry.endsWith('.tsx') || entry.endsWith('.jsx')) out.push(full);
  }
  return out;
}

function extractLinks(text) {
  const links = [];
  const md = [...text.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
  const hrefs = [...text.matchAll(/href=\"([^\"]+)\"/g)].map((m) => m[1]);
  return [...new Set([...md, ...hrefs])];
}

async function check(url) {
  try {
    const resp = await axios.head(url, { timeout: 5000, maxRedirects: 3, validateStatus: () => true });
    return resp.status;
  } catch {
    try {
      const resp = await axios.get(url, { timeout: 5000, maxRedirects: 3, validateStatus: () => true });
      return resp.status;
    } catch {
      return 0;
    }
  }
}

(async () => {
  const files = listFiles(PAGES_DIR).slice(0, 200); // cap for safety
  let fixes = 0;
  for (const file of files) {
    let src = '';
    try { src = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const links = extractLinks(src);
    let next = src;
    for (const l of links) {
      if (!l || l.startsWith('mailto:') || l.startsWith('#')) continue;
      // Fix common relative link missing leading slash
      if (!/^https?:\/\//.test(l) && !l.startsWith('/')) {
        const fixed = '/' + l;
        next = next.split(`"${l}"`).join(`"${fixed}"`).split(`(${l})`).join(`(${fixed})`);
        fixes += 1;
        continue;
      }
      // For http links to zion.app, prefer https
      if (l.startsWith('http://') && /zion\.app/.test(l)) {
        const fixed = l.replace('http://', 'https://');
        next = next.split(l).join(fixed);
        fixes += 1;
        continue;
      }
      // Skip external checks to reduce network; only basic normalization above
    }
    if (next !== src) {
      fs.writeFileSync(file, next);
      console.log('[links] Updated', file);
    }
  }
  console.log(`[links] Fixes applied: ${fixes}`);
})();