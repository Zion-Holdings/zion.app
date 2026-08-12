#!/usr/bin/env node
/**
 * Comprehensive workflow fix phase 2:
 * - Fix broken path references (leading spaces in quotes)
 * - Fix broken expression syntax in env vars
 * - Fix broken github-script script blocks
 */
const fs = require('fs');
const path = require('path');

const wf = (f) => path.join('.github/workflows', f);
let fixes = 0;

// === api-schema-validation.yml ===
// Fix paths with leading space in quotes
let content = fs.readFileSync(wf('api-schema-validation.yml'), 'utf8');

// Fix path: ' automation/...' → 'automation/...'
content = content.replace(/' automation\/api-schema-validator\.cjs'/, "'automation/api-schema-validator.cjs'");
fs.writeFileSync(wf('api-schema-validation.yml'), content);
console.log('FIXED: api-schema-validation.yml - path leading space');
fixes++;

// === deploy-on-push.yml ===
// Fix the missing script reference
content = fs.readFileSync(wf('deploy-on-push.yml'), 'utf8');
if (content.includes("automation/ai-live-site-ux-audit-agent.cjs 2>/dev/null || true")) {
  // This script doesn't exist, replace with a simpler approach
  content = content.replace(
    /node automation\/ai-live-site-ux-audit-agent\.cjs\\\n        \\ 2>\/dev\/null \|\| true\n/g,
    'echo "Live UX audit not available; skipping."\n'
  );
  fs.writeFileSync(wf('deploy-on-push.yml'), content);
  console.log('FIXED: deploy-on-push.yml - removed reference to missing script');
  fixes++;
}

// === type-coverage.yml ===
// Fix broken run commands with odd quotes and broken expressions
content = fs.readFileSync(wf('type-coverage.yml'), 'utf8');
// Fix broken run command on line 36 (unterminated single quote)
content = content.replace(
  /run: 'npm run type-check\n/g,
  "run: 'npm run type-check'\n"
);
fs.writeFileSync(wf('type-coverage.yml'), content);
console.log('FIXED: type-coverage.yml - fixed type-check run command');
fixes++;

// === test-coverage.yml ===
// Fix broken env expression with multi-line
content = fs.readFileSync(wf('test-coverage.yml'), 'utf8');
content = content.replace(
  /COVERAGE_UPDATE_BASELINE_ON_MAIN: \$\{ secrets\.COVERERAGE_UPDATE_BASELINE_ON_MAIN\n          \|\| 'false' \}\}/g,
  "COVERAGE_UPDATE_BASELINE_ON_MAIN: ${{ secrets.COVERAGE_UPDATE_BASELINE_ON_MAIN || 'false' }}"
);
fs.writeFileSync(wf('test-coverage.yml'), content);
console.log('FIXED: test-coverage.yml - fixed multi-line expression');
fixes++;

console.log(`\nTotal additional fixes: ${fixes}`);
