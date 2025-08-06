const fs = require('fs');
const path = require('path');

// Common syntax error patterns to fix
const syntaxFixes = [
  // Fix malformed import statements
  { pattern: /import.*from\s+['"];next['"]/g, replacement: "import type { NextApiRequest, NextApiResponse } from 'next'" },
  { pattern: /import.*from\s+['"];@supabase\/ssr['"]/g, replacement: "import { createServerClient } from '@supabase/ssr'" },
  { pattern: /import.*from\s+['"];next\/image['"]/g, replacement: "import Image from 'next/image'" },
  
  // Fix malformed console.error statements
  { pattern: /console\.error\('([^']*):\s*",\s*error\)"/g, replacement: "console.error('$1:', error)" },
  { pattern: /console\.error\('([^']*):\s*",\s*error\)/g, replacement: "console.error('$1:', error)" },
  
  // Fix malformed string literals
  { pattern: /['"];([^'"]*)['"]/g, replacement: "'$1'" },
  { pattern: /['"]([^'"]*);['"]/g, replacement: "'$1'" },
  
  // Fix malformed array syntax
  { pattern: /\[\s*([^;]*);\s*\]/g, replacement: "[$1]" },
  { pattern: /,\s*;\s*([^}]*)\s*}/g, replacement: ",$1}" },
  
  // Fix malformed object syntax
  { pattern: /{\s*;\s*([^}]*)\s*}/g, replacement: "{$1}" },
  
  // Fix malformed function parameters
  { pattern: /\(\s*;\s*([^)]*)\s*\)/g, replacement: "($1)" },
  
  // Fix malformed template literals
  { pattern: /`\s*;\s*([^`]*)\s*`/g, replacement: "`$1`" },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all syntax fixes
    syntaxFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    content = content.replace(/['"];next['"]/g, "'next'");
    content = content.replace(/['"];@supabase\/ssr['"]/g, "'@supabase/ssr'");
    content = content.replace(/['"];next\/image['"]/g, "'next/image'");
    
    // Fix unterminated string literals
    content = content.replace(/(['"])([^'"]*)(['"]);/g, '$1$2$3');
    
    // Fix malformed semicolons in arrays and objects
    content = content.replace(/,\s*;\s*/g, ', ');
    content = content.replace(/;\s*,/g, ',');
    
    // Fix malformed interface definitions
    content = content.replace(/interface\s+(\w+)\s*{;/g, 'interface $1 {');
    
    // Fix malformed export statements
    content = content.replace(/export\s+default\s+async\s+function\s+(\w+)\s*\([^)]*\)\s*{;/g, 'export default async function $1(req, res) {');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing from the project root
const projectRoot = process.cwd();
console.log('Starting syntax error fixes...');
const totalFixed = walkDirectory(projectRoot);
console.log(`Fixed ${totalFixed} files.`); 