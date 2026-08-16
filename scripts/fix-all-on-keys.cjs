#!/usr/bin/env node
/**
 * Fix all 'on:' keys to 'on:' in workflow files to prevent YAML 1.1 boolean interpretation
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

  // Replace bare 'on:' at start of line with 'on:'
  // Match lines that are exactly 'on:' (possibly with trailing whitespace)
  content = content.replace(/^on:\s*$/gm, "'on':");

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`FIXED: ${file}`);
    fixed++;
  }
});

console.log(`\nTotal fixed: ${fixed}/${files.length}`);
