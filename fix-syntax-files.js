#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const files = [
  'automation/syntax-error-monitor.js',
  'automation/syntax-fix-orchestrator.js',
  'automation/continuous-syntax-fix.js',
  'automation/syntax-fix-launcher.js'
];

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // Fix missing semicolons in require statements
  const requirePattern = /const\s+(\w+(?:\s*,\s*\w+)*)\s*=\s*require\s*\(\s*['"][^'"]+['"]\s*\)\s*$/gm;
  content = content.replace(requirePattern, (match) => {
    if (!match.endsWith(';')) {
      hasChanges = true;
      return match + ';';
    }
    return match;
  });

  // Fix missing semicolons in function calls
  const functionCallPattern = /(\w+\.\w+\([^)]*\))\s*$/gm;
  content = content.replace(functionCallPattern, (match, funcCall) => {
    if (!match.endsWith(';')) {
      hasChanges = true;
      return funcCall + ';';
    }
    return match;
  });

  // Fix double semicolons
  content = content.replace(/;;/g, ';');

  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed syntax issues in ${filePath}`);
  } else {
    console.log(`✅ No issues found in ${filePath}`);
  }
}

console.log('🔧 Fixing syntax issues in automation files...');

for (const file of files) {
  fixFile(file);
}

console.log('✅ Syntax fix completed');
