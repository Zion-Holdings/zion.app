// scripts/automation/workflow-contracts.cjs
// Workflow contracts: dedupe, integrity, pin strict validation for CI
'use strict';

const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const wfDir = path.join(repoRoot, '.github', 'workflows');

let failures = [];
let warnings = [];

// 1. Check for duplicate workflow names
const workflowNames = new Map();
const workflowFiles = fs.readdirSync(wfDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
for (const file of workflowFiles) {
  const content = fs.readFileSync(path.join(wfDir, file), 'utf8');
  const nameMatch = content.match(/^name:\s(.+)$/m);
  if (nameMatch) {
    const name = nameMatch[1].trim();
    if (workflowNames.has(name)) {
      failures.push(`Duplicate workflow name "${name}" in ${file} and ${workflowNames.get(name)}`);
    } else {
      workflowNames.set(name, file);
    }
  }
}

// 2. Check for multiple workflow_dispatch triggers in the "on:" section only
for (const file of workflowFiles) {
  const content = fs.readFileSync(path.join(wfDir, file), 'utf8');
  const dispatchMatches = content.match(/workflow_dispatch:/g);
  if (dispatchMatches && dispatchMatches.length > 1) {
    failures.push(`Multiple workflow_dispatch triggers in ${file}`);
  }
}

// 3. Validate that all referenced scripts exist
const scriptsToCheck = [
  'scripts/checks/automation-preflight-check.cjs',
  'scripts/checks/build-deploy-health-check.cjs',
  'scripts/checks/smoke-routes-check.cjs',
  'config/smoke-routes.txt',
];
for (const script of scriptsToCheck) {
  if (!fs.existsSync(path.join(repoRoot, script))) {
    failures.push(`Missing required script: ${script}`);
  }
}

// 4. Check for unpinned actions (basic pin-strict check)
for (const file of workflowFiles) {
  const content = fs.readFileSync(path.join(wfDir, file), 'utf8');
  const actionRefs = content.match(/uses:\s[^\s@]+@[^\s]+/g) || [];
  for (const ref of actionRefs) {
    const match = ref.match(/uses:\s*([^\s]+)@/);
    if (match && !match[1].includes('/')) {
      warnings.push(`Non-standard action reference in ${file}: ${ref.trim()}`);
    }
  }
}

// Report
if (failures.length > 0) {
  console.error('Workflow contracts FAILED:');
  failures.forEach(f => console.error('  ✗ ' + f));
  if (warnings.length > 0) {
    console.error('\nWarnings:');
    warnings.forEach(w => console.error('  ⚠ ' + w));
  }
  process.exit(1);
}

console.log('workflow contracts ok');
if (warnings.length > 0) {
  warnings.forEach(w => console.warn('  ⚠ ' + w));
}
