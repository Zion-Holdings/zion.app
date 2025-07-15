const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findTsxFiles(fullPath, files);
    } else if (item.endsWith('.tsx')) {
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
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing import paths...');

const pagesDir = path.join(__dirname, '..', 'pages');
const tsxFiles = findTsxFiles(pagesDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixImportPaths(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files with incorrect import paths.`); 