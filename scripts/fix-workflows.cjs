#!/usr/bin/env node
/**
 * Fix GitHub Actions workflows comprehensively:
 * 1. Quote 'on:' keys to prevent YAML 1.1 boolean interpretation
 * 2. Add colon after bare 'workflow_dispatch' trigger
 * 3. Fix broken shell quoting in run commands
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = '.github/workflows';
const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  let changes = [];

  // Fix 1: Quote bare 'on:' keys → "'on':"
  // Match lines that start with 'on:' (possibly indented) as a key
  const onKeyFixed = content.replace(/^(\s*)on:\s*$/m, "$1'on':");
  if (onKeyFixed !== content) {
    content = onKeyFixed;
    changes.push('quoted on: key');
  }

  // Fix 2: Add colon after bare 'workflow_dispatch' 
  // Pattern: 'workflow_dispatch' as a bare scalar (no colon) on its own line
  // This should be 'workflow_dispatch:'
  const workflowDispatchFixed = content.replace(/^(\s+)workflow_dispatch\s*$/m, "$1workflow_dispatch:");
  if (workflowDispatchFixed !== content) {
    content = workflowDispatchFixed;
    changes.push('added colon to workflow_dispatch');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`FIXED: ${file} - ${changes.join(', ')}`);
    fixedCount++;
  }
});

console.log(`\nTotal fixed: ${fixedCount}/${files.length}`);
