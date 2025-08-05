const fs = require('fs');
const path = require('path');

// Function to fix import statement errors
function fixImportStatementErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const malformedImportPattern = /import React from 'react';import ModernLayout from '([^']+)'/g;
    if (malformedImportPattern.test(content)) {
      content = content.replace(malformedImportPattern, 'import React from \'react\';\nimport ModernLayout from \'$1\';');
      modified = true;
    }

    // Fix missing semicolons in imports
    const missingSemicolonPattern = /import ([^;]+)from '([^']+)'/g;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, 'import $1 from \'$2\';');
      modified = true;
    }

    // Fix malformed component declarations
    const malformedComponentPattern = /const\s+(\w+):\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{/g;
    if (malformedComponentPattern.test(content)) {
      content = content.replace(malformedComponentPattern, 'const $1: NextPage = () => {');
      modified = true;
    }

    // Fix malformed JSX structure
    const malformedJSXPattern = /<div className="min-h-screen bg-gray-50">\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\s+py-32">/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, '<div className="min-h-screen bg-gray-50">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">');
      modified = true;
    }

    // Fix malformed className attributes
    const malformedClassNamePattern = /className="([^"]*)\s+([^"]*)"/g;
    if (malformedClassNamePattern.test(content)) {
      content = content.replace(malformedClassNamePattern, 'className="$1 $2"');
      modified = true;
    }

    // Fix malformed export statements
    const malformedExportPattern = /export default\s+(\w+);/g;
    if (malformedExportPattern.test(content)) {
      content = content.replace(malformedExportPattern, 'export default $1;');
      modified = true;
    }

    // Fix missing closing tags
    const missingClosingPattern = /;\s*<\/ModernLayout>;\s*\)\s*;\s*,/g;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = path.join(__dirname, 'pages');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixImportStatementErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 