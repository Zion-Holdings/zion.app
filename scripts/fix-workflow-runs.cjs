#!/usr/bin/env node
/**
 * Fix broken run commands in GitHub Actions workflows.
 * Many workflows have double-quoted run strings with broken \\ line continuations
 * and \\n escapes that corrupt the YAML. This script rewrites them as clean
 * block scalar (|) strings.
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = '.github/workflows';

// Files that need run command fixing (from our analysis)
const filesToFix = [
  'changelog.yml',
  'custom-eslint.yml',
  'content-freshness.yml',
  'content-summarizer.yml',
  'db-retention.yml',
  'schema-validator.yml',
  'sitemap-optimizer.yml',
  'heap-diff.yml',
  'openapi-drift-detector.yml',
  'accessibility-scorecard.yml',
  'bundle-split-analyzer.yml',
  'cert-monitor.yml',
];

let fixed = 0;

filesToFix.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Pattern: run: "..." with broken \\ line continuations
  // Replace with clean run: | block
  // Match run: "..." that contains \\n sequences and \\ at end of lines
  content = content.replace(
    /run: "set -euo pipefail\\\\n(.+?)\\\\n"/gs,
    (match, inner) => {
      // Unescape the content
      let unescaped = inner
        .replace(/\\\\n/g, '\n')
        .replace(/\\\\\\"/g, '"')
        .replace(/\\\\\\\\/g, '\\')
        .replace(/^\\s+/gm, '        ')
        .trim();
      // Remove leading whitespace from first line
      return 'run: |\n' + unescaped;
    }
  );
  
  // Also fix single-quoted run blocks with broken format
  // Pattern: run: 'command\n\n        echo...\n\n        '
  content = content.replace(
    /run: '(.+?)\n\n        echo "exit_code=\$\?" >> \$GITHUB_OUTPUT\n\n        '/gs,
    (match, cmd) => {
      return 'run: |\n        ' + cmd.trim() + '\n        echo "exit_code=$?" >> $GITHUB_OUTPUT';
    }
  );
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`FIXED: ${file}`);
    fixed++;
  }
});

console.log(`\nTotal fixed: ${fixed}/${filesToFix.length}`);
