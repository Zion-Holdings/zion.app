const fs = require('fs');
const path = require('path');

// Function to fix import syntax errors
function fixImportSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const malformedImportPattern = /import:\s*React\s*from\s*'react';/g;
    if (malformedImportPattern.test(content)) {
      content = content.replace(malformedImportPattern, 'import React from \'react\';');
      modified = true;
    }

    // Fix malformed component declarations
    const malformedComponentPattern = /const\s+(\w+):\s*NextPage:\s*=\s*\(\s*\)\s*=>\s*\{/g;
    if (malformedComponentPattern.test(content)) {
      content = content.replace(malformedComponentPattern, 'const $1: NextPage = () => {');
      modified = true;
    }

    // Fix malformed JSX structure with multiple return statements
    const multipleReturnPattern = /return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g;
    if (multipleReturnPattern.test(content)) {
      content = content.replace(multipleReturnPattern, 'return (\n    <ModernLayout>');
      modified = true;
    }

    // Fix malformed className attributes with colons
    const malformedClassNamePattern = /className="([^"]*):([^"]*)"/g;
    if (malformedClassNamePattern.test(content)) {
      content = content.replace(malformedClassNamePattern, 'className="$1 $2"');
      modified = true;
    }

    // Fix malformed closing tags
    const malformedClosingPattern = /<\/ModernLayout>\s*<\/ModernLayout>\s*\)\s*;\s*\}\s*;\s*$/g;
    if (malformedClosingPattern.test(content)) {
      content = content.replace(malformedClosingPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix missing imports
    if (content.includes('<Home') || content.includes('<Search') || content.includes('<User')) {
      const hasIconImport = /import.*\{.*Home.*Search.*User.*\}.*from.*lucide-react/g.test(content);
      if (!hasIconImport) {
        const importPattern = /import.*from.*lucide-react.*;/g;
        if (importPattern.test(content)) {
          content = content.replace(importPattern, (match) => {
            if (match.includes('Home') || match.includes('Search') || match.includes('User')) {
              return match;
            }
            return match.replace('} from \'lucide-react\';', ', Home, Search, User } from \'lucide-react\';');
          });
        } else {
          // Add import statement after existing imports
          const lastImportIndex = content.lastIndexOf('import');
          if (lastImportIndex !== -1) {
            const lastImportEnd = content.indexOf(';', lastImportIndex) + 1;
            content = content.slice(0, lastImportEnd) + '\nimport { Home, Search, User } from \'lucide-react\';' + content.slice(lastImportEnd);
          }
        }
        modified = true;
      }
    }

    // Fix malformed export statements
    const malformedExportPattern = /export default\s+(\w+)\s*;\s*$/g;
    if (malformedExportPattern.test(content)) {
      content = content.replace(malformedExportPattern, 'export default $1;');
      modified = true;
    }

    // Fix missing semicolons
    const missingSemicolonPattern = /\)\s*;\s*\}\s*;\s*export default\s+(\w+)\s*$/g;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, ');\n};\n\nexport default $1;');
      modified = true;
    }

    // Fix malformed component structure
    const malformedComponentStructurePattern = /const\s+(\w+)\s*:\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedComponentStructurePattern.test(content)) {
      content = content.replace(malformedComponentStructurePattern, 'const $1: NextPage = () => {\n  return (\n    <ModernLayout>');
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
  if (fixImportSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 