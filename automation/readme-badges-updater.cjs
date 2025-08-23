#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const START = '<!-- AUTO-GENERATED: BADGES_START -->';
const END = '<!-- AUTO-GENERATED: BADGES_END -->';

function read(file) { try { return fs.readFileSync(file, 'utf8'); } catch { return ''; } }
function write(file, content) { fs.writeFileSync(file, content, 'utf8'); }

function buildBlock() {
  const ts = new Date().toISOString();
  return [
    START,
    '',
    '<p align="left">',
    `  <a href="/.netlify/functions/trigger-all-and-commit"><img alt="Cloud Automations" src="https://img.shields.io/badge/cloud_automations-live-22c55e?style=for-the-badge" /></a>`,
    `  <a href="/.netlify/functions/robots-and-headers-optimizer"><img alt="Robots/Headers" src="https://img.shields.io/badge/robots%2Fheaders-optimized-06b6d4?style=for-the-badge" /></a>`,
    `  <a href="/.netlify/functions/navigation-directory-builder"><img alt="Directory Builder" src="https://img.shields.io/badge/directory-builder-8b5cf6?style=for-the-badge" /></a>`,
    `  <a href="/.netlify/functions/readme-badges-updater"><img alt="README Badges" src="https://img.shields.io/badge/readme-badges-auto-ec4899?style=for-the-badge" /></a>`,
    '</p>',
    '',
    `<sub>Last updated: ${ts}</sub>`,
    '',
    END,
  ].join('\n');
}

(function main() {
  const root = process.cwd();
  const readmePath = path.join(root, 'README.md');
  const original = read(readmePath);
  if (!original) {
    console.log('[badges] README.md not found, skipping');
    process.exit(0);
  }
  const startIdx = original.indexOf(START);
  const endIdx = original.indexOf(END);
  const block = buildBlock();
  let updated;
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    const before = original.slice(0, startIdx);
    const after = original.slice(endIdx + END.length);
    updated = `${before}${block}${after}`;
  } else {
    updated = `${original}\n\n${block}\n`;
  }
  if (updated !== original) {
    write(readmePath, updated);
    console.log('[badges] README badges updated.');
  } else {
    console.log('[badges] No changes needed.');
  }
})();