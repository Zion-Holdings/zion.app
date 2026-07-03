// scripts/checks/automation-preflight-check.cjs
// Verifies that required automation directories/files exist before CI runs.
const fs = require('fs');
const path = require('path');

const required = [
  path.join(process.cwd(), 'scripts/automation'),
  path.join(process.cwd(), 'automation'),
  path.join(process.cwd(), 'config'),
];

const missing = required.filter((dir) => !fs.existsSync(dir));

if (missing.length > 0) {
  console.error('Automation preflight failed: missing required paths:');
  missing.forEach((m) => console.error('  - ' + m));
  process.exit(1);
}

console.log('automation preflight ok');
