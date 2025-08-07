const fs = require('fs');
const path = require('path');

// Comprehensive patterns to fix all linting and syntax errors
const lintingFixes = [
  // Fix missing semicolons
  {
    pattern: /import\s+([^;]+)$/gm,
    replacement: 'import $1;'
  },
  {
    pattern: /export\s+([^;]+)$/gm,
    replacement: 'export $1;'
  },
  {
    pattern: /const\s+([^;]+)$/gm,
    replacement: 'const $1;'
  },
  {
    pattern: /let\s+([^;]+)$/gm,
    replacement: 'let $1;'
  },
  {
    pattern: /var\s+([^;]+)$/gm,
    replacement: 'var $1;'
  },
  // Fix malformed JSX
  {
    pattern: /<([^>]*)$/gm,
    replacement: ''
  },
  // Fix unterminated strings
  {
    pattern: /'([^']*)$/gm,
    replacement: "'"
  },
  {
    pattern: /"([^"]*)$/gm,
    replacement: '"'
  },
  // Fix malformed imports
  {
    pattern: /import\s+React\s+from\s+'react';/g,
    replacement: "import React from 'react';"
  },
  // Fix malformed function declarations
  {
    pattern: /export\s+default\s+async\s+function\s+([^{]+)\s*\{;/g,
    replacement: 'export default async function $1 {'
  },
  // Fix malformed JSX attributes
  {
    pattern: /style=\\{([^}]+)\\}/g,
    replacement: 'style={{$1}}'
  },
  // Fix malformed object properties
  {
    pattern: /images:\s*"\\{/g,
    replacement: 'images: {'
  },
  // Fix malformed template literals
  {
    pattern: /`([^`]*)/g,
    replacement: (match, inner) => `\`${inner.replace(/"/g, '\\"')}\``
  },
  // Fix malformed variable declarations
  {
    pattern: /const\s+([^=]+)=\s*require\('([^']*)'\);''/g,
    replacement: "const $1 = require('$2');"
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<([^>]*)$/gm,
    replacement: ''
  },
  // Fix malformed function calls
  {
    pattern: /function\s+([^{]+)\s*\{;/g,
    replacement: 'function $1 {'
  },
  // Fix malformed arrow functions
  {
    pattern: /=>\s*\{;/g,
    replacement: '=> {'
  },
  // Fix malformed object literals
  {
    pattern: /:\s*\{;/g,
    replacement: ': {'
  },
  // Fix malformed array literals
  {
    pattern: /:\s*\[;/g,
    replacement: ': ['
  },
  // Fix malformed parentheses
  {
    pattern: /\(\s*\)\s*\{;/g,
    replacement: '() {'
  },
  // Fix malformed brackets
  {
    pattern: /\[\s*\]\s*\{;/g,
    replacement: '[] {'
  },
  // Fix malformed braces
  {
    pattern: /\{\s*\}\s*\{;/g,
    replacement: '{} {'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;
    
    for (const fix of lintingFixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx')) {
        if (fixFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting comprehensive linting error fixes...');
const totalFixed = processDirectory('.');
console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Comprehensive linting error fixes completed!');
