const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixDuplicateImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Match import statements from lucide-react
  const importRegex = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];/g;
  
  let updatedContent = content;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const fullImport = match[0];
    const importList = match[1];
    
    // Split by comma and clean up
    const imports = importList.split(',').map(item => item.trim());
    
    // Remove duplicates while preserving order
    const uniqueImports = [];
    const seen = new Set();
    
    for (const importItem of imports) {
      // Extract the base name (before 'as' if aliased)
      const baseName = importItem.split(' as ')[0].trim();
      
      if (!seen.has(baseName)) {
        seen.add(baseName);
        uniqueImports.push(importItem);
      }
    }
    
    // Reconstruct the import statement
    const newImport = `import { ${uniqueImports.join(', ')} } from 'lucide-react';`;
    
    // Only replace if we actually removed duplicates
    if (uniqueImports.length < imports.length) {
      updatedContent = updatedContent.replace(fullImport, newImport);
      console.log(`Fixed duplicates in ${filePath}: removed ${imports.length - uniqueImports.length} duplicate(s)`);
    }
  }
  
  // Write back if changed
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent);
    return true;
  }
  
  return false;
}

// Find all .tsx files in pages directory
const files = glob.sync('pages/**/*.tsx');

let fixedCount = 0;

files.forEach(file => {
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Processed ${files.length} files, fixed ${fixedCount} files with duplicate imports.`);