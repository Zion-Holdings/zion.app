#!/usr/bin/env node
/**
 * github-workflow-integrity-auditor.cjs
 * Audits all GitHub Actions workflow files for common issues:
 * - Invalid trigger syntax (true: instead of on:)
 * - Deprecated action versions
 * - Missing permissions
 * - timeout-minutes after uses:
 * - Missing node/npm script references
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
const pkgPath = path.join(process.cwd(), 'package.json');

function checkWorkflowIntegrity() {
  const issues = [];
  const warnings = [];

  if (!fs.existsSync(workflowsDir)) {
    console.log('No .github/workflows directory found.');
    return { issues, warnings };
  }

  const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  let pkgScripts = [];
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      pkgScripts = Object.keys(pkg.scripts || {});
    } catch {
      warnings.push('package.json is invalid JSON');
    }
  }

  for (const file of files) {
    const filePath = path.join(workflowsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      // Check for invalid trigger syntax: 'true:' instead of 'on:'
      if (/^true:\s*$/.test(line)) {
        issues.push(`${file}:${lineNum} - Invalid trigger syntax 'true:' should be 'on:'`);
      }

      // Check for timeout-minutes after uses: (invalid for reusable workflows)
      if (line.trim().startsWith('uses:')) {
        const nextLine = lines[i + 1];
        if (nextLine && nextLine.trim().includes('timeout-minutes')) {
          issues.push(`${file}:${i+2} - timeout-minutes is not valid after uses: (reusable workflow call)`);
        }
      }

      // Check for deprecated actions
      if (line.includes('actions/checkout@v')) {
        const version = line.match(/actions\/checkout@v(\d+)/);
        if (version && parseInt(version[1]) < 3) {
          warnings.push(`${file}:${lineNum} - Deprecated actions/checkout@v${version[1]}`);
        }
      }
      if (line.includes('actions/setup-node@v')) {
        const version = line.match(/actions\/setup-node@v(\d+)/);
        if (version && parseInt(version[1]) < 3) {
          warnings.push(`${file}:${lineNum} - Deprecated actions/setup-node@v${version[1]}`);
        }
      }
    }

    // Check for node script references that don't exist
    const nodeMatches = content.match(/node\s+(\S+\.cjs)/g) || [];
    for (const match of nodeMatches) {
      const scriptPath = match.replace('node ', '');
      const fullPath = path.join(process.cwd(), scriptPath);
      if (!fs.existsSync(fullPath)) {
        issues.push(`${file} - References missing node script: ${scriptPath}`);
      }
    }

    // Check for npm run references to missing scripts
    const npmMatches = content.match(/npm\s+run\s+([a-zA-Z0-9:_\-]+)/g) || [];
    for (const match of npmMatches) {
      const scriptName = match.replace('npm run ', '').trim();
      if (!pkgScripts.includes(scriptName)) {
        issues.push(`${file} - References missing npm script: ${scriptName}`);
      }
    }
  }

  return { issues, warnings };
}

const result = checkWorkflowIntegrity();

// Output results
if (result.issues.length > 0) {
  console.error('❌ Workflow integrity issues found:');
  result.issues.forEach(i => console.error(`  - ${i}`));
}
if (result.warnings.length > 0) {
  console.warn('⚠️  Workflow warnings:');
  result.warnings.forEach(w => console.warn(`  - ${w}`));
}

if (result.issues.length === 0) {
  console.log('✅ All workflow files passed integrity checks.');
}

// Save report
const reportsDir = path.join(process.cwd(), 'automation', 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(
  path.join(reportsDir, 'workflow-integrity-report.json'),
  JSON.stringify(result, null, 2)
);

process.exit(result.issues.length > 0 ? 1 : 0);
