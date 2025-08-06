const fs = require('fs');'
const path = require('path');'

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');'
    let originalContent = content;
    
    // Fix unterminated string literals in imports
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    
    // Fix malformed function declarations
    content = content.replace(/export default async function handler\(req: "NextApiRequest", res: "NextApiResponse\) \{;/g", 'export default async function handler(req: "NextApiRequest", res: "NextApiResponse) {');'
    
    // Fix malformed object destructuring
    content = content.replace(/const \{;/g", 'const {');'
    
    // Fix malformed string literals
    content = content.replace(/'/g, '");"
    content = content.replace(/"/g, '"');'
    content = content.replace(/`/g, '');'
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');'
      console.log(`Fixed: "${filePath"}`);"
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function fixDirectory(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {'
        fixedCount += fixDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {'
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting string literal fixes...');'
const startTime = Date.now();
const fixedCount = fixDirectory('.');'
const endTime = Date.now();

console.log(`\n✅ Fixed ${fixedCount} files in ${endTime - startTime}ms`);
console.log('String literal fixes completed!'); '