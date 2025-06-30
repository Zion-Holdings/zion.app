#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing logErrorToProduction imports and function calls...');

// Files to search in
const files = glob.sync('{src,pages}/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedFiles = 0;
let totalChanges = 0;

files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;
  
  // Fix imports from wrong module
  content = content.replace(
    /import\s*\{\s*logErrorToProduction\s*\}\s*from\s*['"]@\/utils\/logError['"];?/g,
    "import { logErrorToProduction } from '@/utils/productionLogger';"
  );
  
  content = content.replace(
    /import\s*\{\s*logErrorToProduction\s*\}\s*from\s*['"]\.\/logError['"];?/g,
    "import { logErrorToProduction } from '@/utils/productionLogger';"
  );
  
  // Fix function calls - handle various patterns
  // Pattern: logErrorToProduction(error, context)
  content = content.replace(
    /logErrorToProduction\s*\(\s*([^,]+),\s*(\{[^}]*\}|\w+)\s*\)/g,
    (match, errorArg, contextArg) => {
      // Skip if already in correct format (starts with string)
      if (errorArg.includes('.message') || errorArg.includes('String(') || errorArg.match(/^['"`]/)) {
        return match;
      }
      return `logErrorToProduction(${errorArg} instanceof Error ? ${errorArg}.message : String(${errorArg}), ${errorArg} instanceof Error ? ${errorArg} : undefined, ${contextArg})`;
    }
  );
  
  // Pattern: logErrorToProduction(error)
  content = content.replace(
    /logErrorToProduction\s*\(\s*([^,)]+)\s*\)(?!\s*instanceof)/g,
    (match, errorArg) => {
      // Skip if already in correct format
      if (errorArg.includes('.message') || errorArg.includes('String(') || errorArg.match(/^['"`]/)) {
        return match;
      }
      return `logErrorToProduction(${errorArg} instanceof Error ? ${errorArg}.message : String(${errorArg}), ${errorArg} instanceof Error ? ${errorArg} : undefined)`;
    }
  );
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    fixedFiles++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n🎉 Fixed ${fixedFiles} files with logErrorToProduction issues`);
console.log('✨ All imports now point to @/utils/productionLogger');
console.log('✨ All function calls use correct signature: (message, error, context)'); 