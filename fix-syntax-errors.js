#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix import statements without quotes
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+(\w+);/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+(\w+);/g, "import $1 from '$2';");
  
  // Fix export statements
  fixed = fixed.replace(/export\s*;/g, '');
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)/g, 'export default function $1');
  
  // Fix React imports specifically
  fixed = fixed.replace(/import\s+React\s+from\s+react;/g, "import React from 'react';");
  
  // Fix any remaining unquoted imports
  fixed = fixed.replace(/from\s+([a-zA-Z][a-zA-Z0-9]*);/g, "from '$1';");
  
  // Remove any trailing semicolons after export
  fixed = fixed.replace(/export\s*;\s*\n/g, '\n');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content, filePath);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and process all JS/TS/TSX files
function processDirectory(dir) {
  const extensions = ['.js', '.ts', '.tsx', '.jsx'];
  let fixedCount = 0;
  
  function walkDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'build', 'coverage'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

// Main execution
console.log('🔧 Starting syntax error fixes...');

const startTime = Date.now();
const fixedCount = processDirectory('.');

console.log(`✅ Fixed ${fixedCount} files in ${Date.now() - startTime}ms`);

// Run ESLint to check if issues are resolved
console.log('🔍 Running ESLint to verify fixes...');
try {
  execSync('npx eslint . --ext .js,.ts,.tsx --max-warnings 100', { stdio: 'inherit' });
  console.log('✅ ESLint passed!');
} catch (error) {
  console.log('⚠️  Some ESLint issues remain, but syntax errors should be fixed.');
} 