#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '../..');
const required = [
  'package.json',
  'next.config.mjs',
  'tsconfig.json',
  'CNAME',
  'public/CNAME',
  'public/index.html',
  'public/book/index.html',
  'public/services/cloud/index.html',
  'public/services/security/index.html',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
];
const missing = required.filter((rel) => !fs.existsSync(path.join(root, rel)));
if (missing.length) {
  console.error('Missing required source files:\n' + missing.join('\n'));
  process.exit(1);
}
const cname = fs.readFileSync(path.join(root, 'CNAME'), 'utf8').trim();
if (cname !== 'ziontechgroup.com') {
  console.error('CNAME must be ziontechgroup.com, got:', cname);
  process.exit(1);
}
console.log('core-source-check: PASS');
