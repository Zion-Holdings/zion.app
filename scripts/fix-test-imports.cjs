const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .test.tsx files
function findTestFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findTestFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.test.tsx') || item.endsWith('.test.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix import paths in a file
function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements that import from @/pages/ to @/src/pages/
    const importRegex = /from\s+['"]@\/pages\/([^'"]+)['"]/g;
    const newContent = content.replace(importRegex, (match, pageName) => {
      modified = true;
      return `from '@/src/pages/${pageName}'`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.warn(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (_error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.warn('Fixing import paths in test files...');

const testDirs = [
  path.join(__dirname, '..', '__tests__'),
  path.join(__dirname, '..', 'tests'),
  path.join(__dirname, '..', 'temp_essential_pages')
];

let fixedCount = 0;
for (const testDir of testDirs) {
  if (fs.existsSync(testDir)) {
    const testFiles = findTestFiles(testDir);
    for (const file of testFiles) {
      if (fixImportPaths(file)) {
        fixedCount++;
      }
    }
  }
}

console.warn(`\nFixed ${fixedCount} test files with incorrect import paths.`); 