#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function upsertLine(lines, needle) {
  if (!lines.some((l) => l.trim() === needle.trim())) {
    lines.push(needle);
  }
}

function main() {
  const workspace = path.resolve(__dirname, '..');
  const robotsPath = path.join(workspace, 'public', 'robots.txt');
  ensureDir(path.dirname(robotsPath));

  let lines = [];
  if (fs.existsSync(robotsPath)) {
    lines = fs.readFileSync(robotsPath, 'utf8').split(/\r?\n/);
  } else {
    lines = [];
  }

  // Basic allow all
  upsertLine(lines, 'User-agent: *');
  if (!lines.some((l) => l.toLowerCase().startsWith('allow:'))) {
    upsertLine(lines, 'Allow: /');
  }

  // Add sitemap reference (relative path works across environments)
  if (!lines.some((l) => l.toLowerCase().startsWith('sitemap:'))) {
    upsertLine(lines, 'Sitemap: /sitemap.xml');
  }

  const content = lines.filter(Boolean).join('\n') + '\n';
  fs.writeFileSync(robotsPath, content);
  console.log('robots.txt ensured and enhanced');
}

main();