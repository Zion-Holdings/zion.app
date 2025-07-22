#!/usr/bin/env node

const _fs = require('fs')
const _path = require('path')
const files = ['.env.local', 'netlify.toml']
const placeholderRegex = /(your_|PLACEHOLDER|dummy)/i;
let issueFound = false;

files.forEach((file) => {
  if (!_fs.existsSync(file)) return
const content = _fs.readFileSync(file, 'utf8')
const lines = content.split(/\r?\n/);
  lines.forEach((line, _index) => {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]+)"?/);
    if (match) {
      const _key = match[1]
const val = match[2];
      if (placeholderRegex.test(val)) {
        // console.warn(`Placeholder detected in ${file}:${index + 1} -> ${key}`);
        issueFound = true;
      }
    }
  });
});

if (!issueFound) {
  // console.warn('No placeholder environment values detected.');
}
