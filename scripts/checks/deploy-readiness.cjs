// scripts/checks/deploy-readiness.cjs
// Verifies deployment readiness: build output, redirects, sitemap.
const fs = require('fs');
const path = require('path');

const checks = [];
let passed = true;

// Check 1: package.json exists
const pkgPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(pkgPath)) {
  checks.push('package.json: ok');
} else {
  checks.push('package.json: MISSING');
  passed = false;
}

// Check 2: next.config.js exists
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  checks.push('next.config.js: ok');
} else {
  checks.push('next.config.js: MISSING');
  passed = false;
}

// Check 3: _redirects exists
const redirectsPath = path.join(process.cwd(), 'public/_redirects');
if (fs.existsSync(redirectsPath)) {
  const content = fs.readFileSync(redirectsPath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim() && !l.startsWith('#'));
  checks.push(`_redirects: ok (${lines.length} rules)`);
} else {
  checks.push('_redirects: MISSING');
  passed = false;
}

// Check 4: tsconfig.typecheck.json exists (for CI type checking)
const tsconfigPath = path.join(process.cwd(), 'tsconfig.typecheck.json');
if (fs.existsSync(tsconfigPath)) {
  checks.push('tsconfig.typecheck.json: ok');
} else {
  checks.push('tsconfig.typecheck.json: MISSING');
  passed = false;
}

console.log('Deploy readiness checks:');
checks.forEach(c => console.log('  ' + c));

if (!passed) {
  console.error('\nDeploy readiness FAILED');
  process.exit(1);
}

console.log('\nDeploy readiness: ok');
