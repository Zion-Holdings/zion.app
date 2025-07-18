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
    
    // Fix import statements that import from @/src/pages/ to @/pages/
    const importRegex = /from\s+['"]@\/src\/pages\/([^'"]+)['"]/g;
    const newContent = content.replace(importRegex, (match, pageName) => {
      modified = true;
      return `from '@/pages/${pageName}'`;
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
console.warn('Fixing import paths to use correct @/pages/ mapping...');

const pagesDir = path.join(__dirname, '..', 'pages');
const tsxFiles = findTsxFiles(pagesDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixImportPaths(file)) {
    fixedCount++;
  }
}

// Also fix routes config
const routesConfigPath = path.join(__dirname, '..', 'src', 'routes', 'config.tsx');
if (fs.existsSync(routesConfigPath)) {
  if (fixImportPaths(routesConfigPath)) {
    fixedCount++;
  }
}

console.warn(`\nFixed ${fixedCount} files with incorrect import paths.`); 