const fs = require('fs');''
const path = require('path');''

// Function to fix unterminated string literals in import statements
function fixUnterminatedStringLiterals(content) {
  // Fix common patterns of corrupted imports
  content = content.replace(/import React from 'react'
  content = content.replace(/import React from 'react'
  content = content.replace(/import React from 'react'
  content = content.replace(/import React from 'react'
  content = content.replace(/import React from 'react'
  
  // Fix other common corrupted patterns
  content = content.replace(/';next/g, "'next");""
  content = content.replace(/';react/g, "'react");""
  content = content.replace(/';next\/head/g, "'next/head");""
  content = content.replace(/';next\/link/g, "'next/link");""
  content = content.replace(/';next\/image/g, "'next/image");""
  
  return content;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');''
    const originalContent = content;
    
    // Fix the content
    content = fixUnterminatedStringLiterals(content);
    
    // Only write if content was actually changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');''
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively process all files in a directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {''
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Fixing unterminated string literals in all files...');''

const directories = [
  'pages',''
  'components',''
  'src'''
];

let totalFixed = 0;

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += processDirectory(dir);
  }
});

console.log(`Total files fixed: ${totalFixed}`);
console.log('String literal fixing completed!'); 