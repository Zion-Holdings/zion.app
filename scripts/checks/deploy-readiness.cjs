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

// Check 2: next.config.js or next.config.mjs exists
const nextConfigJs = path.join(process.cwd(), 'next.config.js');
const nextConfigMjs = path.join(process.cwd(), 'next.config.mjs');
if (fs.existsSync(nextConfigJs) || fs.existsSync(nextConfigMjs)) {
  checks.push(fs.existsSync(nextConfigJs) ? 'next.config.js: ok' : 'next.config.mjs: ok');
} else {
  checks.push('next.config(.js|.mjs): MISSING');
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

checks.forEach(c => console.log(`  ${c}`));
console.log(`\nDeploy readiness ${passed ? 'PASSED' : 'FAILED'}`);
process.exit(passed ? 0 : 1);
