#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const files = ['.env.local', 'netlify.toml'];
const placeholderRegex = /(your_|PLACEHOLDER|dummy)/i;
let issueFound = false;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]+)"?/);
    if (match) {
      const key = match[1];
      const val = match[2];
      if (placeholderRegex.test(val)) {
        // console.log(`Placeholder detected in ${file}:${index + 1} -> ${key}`);
        issueFound = true;
      }
    }
  });
});

if (!issueFound) {
  // console.log('No placeholder environment values detected.');
}
