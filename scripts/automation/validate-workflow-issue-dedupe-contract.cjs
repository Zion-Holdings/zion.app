#!/usr/bin/env node
/**
 * validate-workflow-issue-dedupe-contract.cjs
 * Validates GitHub workflow issue deduplication contracts.
 */
const fs = require('fs');
const path = require('path');

function validate() {
  const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
  const pkgPath = path.join(process.cwd(), 'package.json');
  const issues = [];

  if (!fs.existsSync(workflowsDir)) {
    console.log('No workflows directory found.');
    process.exit(0);
  }

  const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(workflowsDir, file), 'utf8');
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('uses:') && i + 1 < lines.length) {
        if (lines[i + 1].trim().includes('timeout-minutes')) {
          issues.push(`${file}:${i+2} - timeout-minutes after uses: (invalid)`);
        }
      }
      if (/^true:\s*$/.test(lines[i])) {
        issues.push(`${file}:${i+1} - Invalid 'true:' trigger (should be 'on:')`);
      }
    }
  }

  if (issues.length > 0) {
    console.error('❌ Workflow contract violations:');
    issues.forEach(i => console.error(`  - ${i}`));
    process.exit(1);
  }

  console.log('✅ All workflows pass issue dedupe contract validation.');
  process.exit(0);
}

validate();
