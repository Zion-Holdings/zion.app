#!/usr/bin/env node
/*
  automation-preflight-check.cjs - Minimal preflight check for CI
*/

const fs = require('fs');
const path = require('path');

console.log('=== Preflight Check ===');

let passed = 0;
let failed = 0;

// Check 1: package.json exists and is valid
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (pkg.name && pkg.scripts) {
    console.log('✅ package.json valid');
    passed++;
  } else {
    console.log('❌ package.json missing required fields');
    failed++;
  }
} catch (e) {
  console.log('❌ package.json parse error:', e.message);
  failed++;
}

// Check 2: next.config.mjs exists
if (fs.existsSync('next.config.mjs')) {
  console.log('✅ next.config.mjs exists');
  passed++;
} else {
  console.log('❌ next.config.mjs missing');
  failed++;
}

// Check 3: tsconfig.json exists
if (fs.existsSync('tsconfig.json')) {
  console.log('✅ tsconfig.json exists');
  passed++;
} else {
  console.log('❌ tsconfig.json missing');
  failed++;
}

// Check 4: .github/workflows directory exists
if (fs.existsSync('.github/workflows')) {
  console.log('✅ .github/workflows directory exists');
  passed++;
} else {
  console.log('❌ .github/workflows directory missing');
  failed++;
}

// Check 5: app directory exists
if (fs.existsSync('app')) {
  console.log('✅ app directory exists');
  passed++;
} else {
  console.log('❌ app directory missing');
  failed++;
}

// Check 6: Count workflow files
const wfDir = '.github/workflows';
if (fs.existsSync(wfDir)) {
  const files = fs.readdirSync(wfDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  console.log(`✅ ${files.length} workflow files found`);
  passed++;
} else {
  console.log('❌ cannot count workflow files');
  failed++;
}

console.log('\n=== Summary ===');
console.log(`Passed: ${passed}, Failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
}

process.exit(0);
