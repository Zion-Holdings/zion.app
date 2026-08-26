#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const REDIRECTS = path.join(process.cwd(), 'public', '_redirects');
if (!fs.existsSync(REDIRECTS)) {
  console.error('MISSING public/_redirects');
  process.exit(1);
}

const lines = fs.readFileSync(REDIRECTS, 'utf8').split(/\r?\n/).filter(Boolean);
const seen = new Map();
for (const raw of lines) {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const parts = trimmed.split(/\s+/);
  if (parts.length < 2 || parts.length > 3) {
    console.error('BAD_RULE', trimmed);
    process.exit(1);
  }
  const from = parts[0];
  const dup = seen.get(from);
  if (dup) {
    console.error('DUPLICATE', from, 'first=', dup, 'second=', trimmed);
    process.exit(1);
  }
  seen.set(from, trimmed);
}
console.log('REDIRECTS_OK', lines.length, 'rules');
