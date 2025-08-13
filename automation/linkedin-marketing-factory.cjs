'use strict';

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'marketing');
const INPUT_FILE = path.join(OUTPUT_DIR, 'linkedin-candidates.json');
const POSTS_FILE = path.join(OUTPUT_DIR, 'linkedin-posts.json');

function log(message) {
  process.stdout.write(`[linkedin-factory] ${message}\n`);
}

function loadJson(fp, fallback) {
  try {
    const txt = fs.readFileSync(fp, 'utf8');
    return JSON.parse(txt);
  } catch {
    return fallback;
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function buildHashtags(text) {
  const base = ['#AI', '#Automation', '#SaaS', '#DevTools', '#Engineering'];
  const picks = base.slice(0, 3);
  const unique = Array.from(new Set(picks));
  return unique.join(' ');
}

function composePost(c) {
  const lines = [];
  if (c.title) lines.push(c.title);
  if (c.description) lines.push(c.description);
  if (c.headings && c.headings.length) lines.push('Highlights: ' + c.headings.slice(0, 3).join(' • '));
  if (c.bullets && c.bullets.length) lines.push('What you get: ' + c.bullets.slice(0, 3).join(' | '));
  const hashtags = buildHashtags(c.title + ' ' + c.description);
  const body = lines.filter(Boolean).join('\n\n');
  const caption = `${body}\n\nLearn more: ${c.url}\n${hashtags}`.trim();
  return { url: c.url, caption };
}

function main() {
  const analyzed = loadJson(INPUT_FILE, { candidates: [] });
  const candidates = analyzed.candidates || [];
  if (!candidates.length) {
    log('No candidates found. Ensure analyzer ran first.');
    process.exit(0);
  }

  const posts = candidates.map(composePost);
  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(POSTS_FILE, JSON.stringify({ generatedAt: Date.now(), posts }, null, 2));
  log(`Wrote ${posts.length} LinkedIn posts to ${path.relative(process.cwd(), POSTS_FILE)}`);
  process.exit(0);
}

main();


