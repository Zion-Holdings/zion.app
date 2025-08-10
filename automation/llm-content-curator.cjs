#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const MARKETING_DIR = path.join(__dirname, '..', 'data', 'reports', 'marketing', 'linkedin');
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'homepage-promo', 'proposals');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }

function loadJsonSafe(fp) { try { return JSON.parse(fs.readFileSync(fp, 'utf8')); } catch { return null; } }

function pickTop(items, n) { return (items || []).slice(0, n); }

function proposalFromPosts(posts) {
  const ts = Date.now();
  const lines = [
    '# Homepage Promo Refresh Proposal',
    '',
    `Generated: ${new Date(ts).toISOString()}`,
    '',
    '## Suggested Highlights',
    '',
  ];
  for (const p of posts) {
    lines.push(`- ${p.title || 'Untitled'} — ${p.url || ''}`);
  }
  lines.push('', '## Actions', '', '- Rotate homepage hero blurb', '- Add two feature cards matching current top posts');
  return { filename: `proposal-${ts}.md`, content: lines.join('\n') + '\n' };
}

function main() {
  ensureDir(OUTPUT_DIR);
  const pro = loadJsonSafe(path.join(MARKETING_DIR, 'linkedin-pro-posts.json')) || { posts: [] };
  const top = pickTop(pro.posts, 5);
  if (!top.length) {
    console.log('No posts found to propose.');
    return;
  }
  const { filename, content } = proposalFromPosts(top);
  const out = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(out, content);
  console.log('Wrote proposal:', out);
}

main();