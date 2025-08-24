#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureReadmeBadges() {
  const readmePath = path.resolve(process.cwd(), 'README.md');
  const now = new Date().toISOString();
  let content = '';
  try {
    content = fs.readFileSync(readmePath, 'utf8');
  } catch {
    content = '# Project\n\n';
  }

  const start = '<!-- AUTO-BADGES: START -->';
  const end = '<!-- AUTO-BADGES: END -->';
  const badgeBlock = [
    start,
    '',
    `![Automation](https://img.shields.io/badge/automation-active-34d399?labelColor=0b1020)`,
    `![Cloud](https://img.shields.io/badge/cloud-netlify-06b6d4?labelColor=0b1020)`,
    `![Last Run](https://img.shields.io/badge/last_run-${encodeURIComponent(now)}-a78bfa?labelColor=0b1020)`,
    '',
    end,
  ].join('\n');

  if (content.includes(start) && content.includes(end)) {
    const newContent = content.replace(new RegExp(`${start}[\s\S]*?${end}`), badgeBlock);
    fs.writeFileSync(readmePath, newContent);
    console.log('Updated badges in README.md');
  } else {
    const newContent = `${badgeBlock}\n\n${content}`;
    fs.writeFileSync(readmePath, newContent);
    console.log('Inserted badges in README.md');
  }
}

function main() {
  ensureReadmeBadges();
}

if (require.main === module) {
  main();
}