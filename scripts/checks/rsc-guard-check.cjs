#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CHECKS = [];
let failed = false;

function check(name, test) {
  try {
    const ok = test();
    CHECKS.push({ name, ok: !!ok });
    if (!ok) failed = true;
  } catch (e) {
    CHECKS.push({ name, ok: false, error: e.message });
    failed = true;
  }
}

function readRel(rel) {
  try { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); } catch { return null; }
}

check('No use client directives in root publication pages excluding homepage', () => {
  const files = [
    'app/layout.tsx', 'app/services/[id]/page.tsx', 'app/blog/page.tsx', 'app/contact/page.tsx',
  ];
  return files.every((f) => {
    const text = readRel(f);
    return !text || !text.includes("'use client'");
  });
});

check('Service catalog declares client interactivity explicitly', () => {
  const text = readRel('app/services/page.tsx');
  return !!text && text.includes("'use client'");
});

check('Homepage declares use client directive', () => {
  const text = readRel('app/page.tsx');
  return !!text && text.includes("'use client'");
});

check('package.json declares type:module', () => {
  const pkg = JSON.parse(readRel('package.json') || '{}');
  return pkg.type === 'module';
});

check('No node_modules URLs in page content', () => {
  const candidates = ['app/page.tsx', 'app/layout.tsx'];
  return candidates.every((f) => {
    const text = readRel(f);
    return !text || !text.includes('node_modules');
  });
});

process.stdout.write(JSON.stringify({ ok: !failed, checks: CHECKS }, null, 2) + '\n');
process.exit(failed ? 1 : 0);
