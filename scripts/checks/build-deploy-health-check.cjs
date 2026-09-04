#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Check critical built artifacts in public/
const cwd = process.cwd();
const checks = [
  { name: 'public/', test: () => fs.existsSync(path.join(cwd, 'public')) },
  { name: 'public/index.html', test: () => fs.existsSync(path.join(cwd, 'public', 'index.html')) },
  { name: 'public/_redirects', test: () => fs.existsSync(path.join(cwd, 'public', '_redirects')) },
  { name: 'public/blog/', test: () => fs.existsSync(path.join(cwd, 'public', 'blog')) },
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
