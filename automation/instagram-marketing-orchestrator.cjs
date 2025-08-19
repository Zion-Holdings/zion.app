'use strict';

const fs = require('fs');
const path = require('path');

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const igUserId = process.env.IG_USER_ID || '';
const igToken = process.env.IG_ACCESS_TOKEN || '';
const DATA_DIR = path.join(__dirname, '..', 'data', 'marketing');
const POSTS_FILE = path.join(DATA_DIR, 'instagram-posts.json');

function log(message) {
  process.stdout.write(`[instagram-marketing] ${message}\n`);
}

if (!igUserId || !igToken) {
  log('Missing IG_USER_ID or IG_ACCESS_TOKEN. Skipping Instagram post.');
  process.exit(0);
}

let caption = '';
try {
  const { posts } = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));
  if (Array.isArray(posts) && posts.length) {
    const pickIndex = Math.floor(Math.random() * posts.length);
    caption = posts[pickIndex].caption || '';
  }
} catch {}

if (!caption) caption = `Explore our latest features: ${CANONICAL_URL}`;

log(`Would post to Instagram user ${igUserId}:\n${caption}`);

process.exit(0);


