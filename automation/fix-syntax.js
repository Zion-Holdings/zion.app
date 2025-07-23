#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'continuous-improvement', 'ai-optimizer.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Fix syntax errors
const fixes = [
  // Fix missing semicolons and quotes in object properties
  [/'([^']+)',\s*'([^']+)'/g, "'$1',\n        '$2'"],
  [/'([^']+)',\s*([^,]+)/g, "'$1',\n        $2"],
  
  // Fix missing semicolons after const declarations
  [/const ([^=]+)=([^;]+)'/g, 'const $1=$2;'],
  
  // Fix missing semicolons in object properties
  [/([^,]+),'([^']+)'/g, '$1,\n        $2'],
  
  // Fix missing quotes in object properties
  [/([^,]+),'([^']+)'/g, '$1,\n        $2'],
  
  // Fix missing semicolons in variable declarations
  [/(let|const) ([^=]+)=([^;]+)'/g, '$1 $2=$3;'],
  
  // Fix missing semicolons in function calls
  [/([^;]+)'([^;]+)/g, '$1;\n        $2'],
];

// Apply fixes
fixes.forEach(([pattern, replacement]) => {
  content = content.replace(pattern, replacement);
});

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Fixed syntax errors in ai-optimizer.js'); 