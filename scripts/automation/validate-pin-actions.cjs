#!/usr/bin/env node
/**
 * validate-pin-actions.cjs
 * Validates that GitHub Actions use pinned versions.
 */
const fs = require('fs');
const path = require('path');

function validate() {
  const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
  if (!fs.existsSync(workflowsDir)) {
    console.log('No workflows directory found.');
    process.exit(0);
  }

  const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  let violations = 0;

  for (const file of files) {
    const content = fs.readFileSync(path.join(workflowsDir, file), 'utf8');
    const matches = content.match(/uses:\s+@actions\/([^@\s]+)@v(\d+(?:\.\d+)?)/g);
    if (matches) {
      for (const match of matches) {
        const version = match.match(/@v(\d+(?:\.\d+)?)/)[1];
        const major = parseInt(version.split('.')[0]);
        if (major < 3) {
          console.warn(`  ⚠️  ${file}: Uses deprecated @v${version}`);
          violations++;
        }
      }
    }
  }

  if (violations === 0) {
    console.log('✅ All pinned actions are up to date.');
    process.exit(0);
  } else {
    console.error(`❌ Found ${violations} deprecated action versions.`);
    process.exit(1);
  }
}

validate();
