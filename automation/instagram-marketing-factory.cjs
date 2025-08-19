'use strict';

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'marketing');
const INPUT_FILE = path.join(OUTPUT_DIR, 'instagram-candidates.json');
const POSTS_FILE = path.join(OUTPUT_DIR, 'instagram-posts.json');

function log(message) {
  process.stdout.write(`[instagram-factory] ${message}\n`);
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

function buildHashtags() {
  return ['#AI', '#Automation', '#SaaS', '#Innovation', '#WebDev'].slice(0, 4).join(' ');
}

function composeCaption(c) {
  const parts = [];
  if (c.title) parts.push(c.title);
  if (c.description) parts.push(c.description);
  if (c.points && c.points.length) parts.push('Highlights: ' + c.points.slice(0, 3).join(' • '));
  const hashtags = buildHashtags();
  const body = parts.filter(Boolean).join('\n\n');
  const caption = `${body}\n\nRead more: ${c.url}\n${hashtags}`.trim();
  return { url: c.url, caption };
}

function main() {
  const analyzed = loadJson(INPUT_FILE, { candidates: [] });
  const candidates = analyzed.candidates || [];
  if (!candidates.length) {
    log('No candidates found. Ensure analyzer ran first.');
    process.exit(0);
  }

  const posts = candidates.map(composeCaption);
  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(POSTS_FILE, JSON.stringify({ generatedAt: Date.now(), posts }, null, 2));
  log(`Wrote ${posts.length} Instagram posts to ${path.relative(process.cwd(), POSTS_FILE)}`);
  process.exit(0);
}

main();


