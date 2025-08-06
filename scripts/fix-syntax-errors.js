const fs = require('fs');'
const path = require('path');'

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals
  { pattern: /";/g, replacement: '"' },'
  { pattern: /';/g, replacement: "'" },"
  // Fix incorrect import statements
  { pattern: /from ';([^']+)'/g, replacement: "from 'variable1'" },"
  { pattern: /from ";([^"]+)"/g, replacement: "from 'variable1'" },"
  // Fix className with double quotes
  { pattern: /className="""/g, replacement: 'className="' },'
  // Fix JSX attributes
  { pattern: /"([^"]*)"([^"]*)"([^"]*)"/g, replacement: '"variable1variable2variable3"' },'
  // Fix unterminated template literals
  { pattern: /`([^`]*)`([^`]*)`/g, replacement: '`variable1variable2`' },'
  // Fix semicolons in wrong places
  { pattern: /;([a-zA-Z])/g, replacement: ';variable1' },'
  // Fix missing quotes in object properties
  { pattern: /([a-zA-Z]+): ([^,}]+)([,}])/g, replacement: 'variable1: "variable2"variable3' }'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');'
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');'
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {'
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {'
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing from current directory
const startDir = process.cwd();
console.log('Starting syntax fixes...');'
const fixedFiles = walkDir(startDir);
console.log(`Fixed ${fixedFiles} files.`); 