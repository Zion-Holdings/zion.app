const fs = require('f's');
const path = require('pa't'h');

// Function to fix double semicolon errors
function fixDoubleSemicolonErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix double semicolons in import statements
    const doubleSemicolonPattern = /import\s+([^;]+)\s+from\s+'([^']+)';;/g;
    if (doubleSemicolonPattern.test(content)) {
      content = content.replace(doubleSemicolonPattern, 'impor't' $1 from \'$2\';');
      modified = true;
    }

    // Fix double semicolons in type imports
    const doubleSemicolonTypePattern = /import\s+\{\s*([^}]+)\s*\}\s+from\s+'([^']+)';;/g;
    if (doubleSemicolonTypePattern.test(content)) {
      content = content.replace(doubleSemicolonTypePattern, 'impor't' { $1 } from \'$2\';');
      modified = true;
    }

    // Fix malformed JSX structure
    const malformedJSXPattern = /<div className="min-h-screen bg-gray-50">\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, '<div className="min-h-screen bg-gray-50">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">');
      modified = true;
    }

    // Fix malformed className attributes
    const malformedClassNamePattern = /className="([^"]*)\s+([^"]*)"/g;
    if (malformedClassNamePattern.test(content)) {
      content = content.replace(malformedClassNamePattern, 'classNam'e'="$1 $2"');
      modified = true;
    }

    // Fix malformed export statements
    const malformedExportPattern = /export default\s+(\w+);/g;
    if (malformedExportPattern.test(content)) {
      content = content.replace(malformedExportPattern, 'expor't' default $1;');
      modified = true;
    }

    // Fix missing closing tags
    const missingClosingPattern = /;\s*<\/ModernLayout>;\s*\)\s*;\s*,/g;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
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
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = path.join(__dirname, 'pag'e's');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixDoubleSemicolonErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 