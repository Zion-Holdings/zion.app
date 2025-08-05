const fs = require('fs');
const path = require('path');

// Function to fix JSX structure errors
function fixJSXStructureErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed closing tags
    const malformedClosingPattern = /;\s*<\/ModernLayout>;\s*\)\s*;\s*,/g;
    if (malformedClosingPattern.test(content)) {
      content = content.replace(malformedClosingPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix missing closing parentheses
    const missingParenPattern = /\)\s*;\s*<\/ModernLayout>;\s*\)\s*;\s*,/g;
    if (missingParenPattern.test(content)) {
      content = content.replace(missingParenPattern, '  );\n    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix malformed button attributes
    const malformedButtonPattern = /hover\s+bg-blue-700/g;
    if (malformedButtonPattern.test(content)) {
      content = content.replace(malformedButtonPattern, 'hover:bg-blue-700');
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

    // Fix missing semicolons
    const missingSemicolonPattern = /\)\s*;\s*<\/ModernLayout>;\s*\)\s*;\s*,/g;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, ');\n    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix malformed component structure
    const malformedComponentStructurePattern = /const\s+(\w+):\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedComponentStructurePattern.test(content)) {
      content = content.replace(malformedComponentStructurePattern, 'const $1: NextPage = () => {\n  return (\n    <ModernLayout>');
      modified = true;
    }

    // Fix malformed closing tags at the end
    const malformedEndPattern = /;\s*<\/ModernLayout>;\s*\)\s*;\s*,/g;
    if (malformedEndPattern.test(content)) {
      content = content.replace(malformedEndPattern, '    </ModernLayout>\n  );\n};\n');
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
  if (fixJSXStructureErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 