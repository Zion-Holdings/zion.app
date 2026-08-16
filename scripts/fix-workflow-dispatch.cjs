#!/usr/bin/env node
/**
 * Fix remaining bare 'workflow_dispatch' (without colon) in workflows
 */
const fs = require('fs');
const path = require('path');

const workflowsDir = '.github/workflows';
const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace bare 'workflow_dispatch' (no colon) with 'workflow_dispatch:'
  // Match: lines with workflow_dispatch but no colon after it
  content = content.replace(/^((\s+)workflow_dispatch)$/m, "$1:");
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`FIXED: ${file}`);
    fixed++;
  }
});

console.log(`\nTotal fixed: ${fixed}`);
