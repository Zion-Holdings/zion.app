#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Check built artifacts exist in public/
const checks = [
  { name: 'public/', test: () => fs.existsSync(path.join(process.cwd(), 'public')) },
  { name: 'public/sitemap.xml', test: () => fs.existsSync(path.join(process.cwd(), 'public', 'sitemap.xml')) },
  { name: 'package.json', test: () => fs.existsSync(path.join(process.cwd(), 'package.json')) },
];

let pass = 0, fail = 0;
for (const c of checks) {
  try {
    const ok = c.test();
    console.log(ok ? 'PASS' : 'FAIL', c.name);
    ok ? pass++ : fail++;
  } catch (e) {
    console.log('ERROR', c.name, e.message);
    fail++;
  }
}
console.log(`SUMMARY pass=${pass} fail=${fail}`);
if (fail > 0) process.exitCode = 1;
