/**
 * Replace leftover Next.js static-export HTML with honest closers.
 * Those pages 404 live today (Pages serves public/), but merging this
 * branch with the old pages.yml rsync would have published them.
 */
import fs from 'node:fs';
import path from 'node:path';
import { honestCloser, titleFromSlug } from './honest-closer.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const SKIP_DIRS = new Set(['.git', 'node_modules', '.github', 'public', 'out', '.next', '.composio']);

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = path.join(dir, name);
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(full, out);
    else if (name === 'index.html' || name === '404.html') out.push(full);
  }
  return out;
}

const files = walk(ROOT);
let replaced = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const leftover =
    text.includes('_next/static') ||
    text.includes('Get Free Consultation') ||
    text.includes('aggregateRating') && text.includes('reviewCount":"200"');
  if (!leftover) continue;
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const canonical = rel === '404.html' || rel.endsWith('/404.html') ? '/' : '/services/';
  const title = rel === '404.html' ? 'Page not found' : titleFromSlug(rel);
  fs.writeFileSync(file, honestCloser({ title, canonical }));
  replaced += 1;
}

console.log(`replaced ${replaced} leftover Next.js html files`);
