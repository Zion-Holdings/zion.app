const fs = require('fs');
const path = require('path');

// Function to fix remaining parsing errors
function fixRemainingParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix "Declaration or statement expected" errors
    // This usually means there's a syntax error at the beginning of the file
    if (content.includes('Declaration or statement expected')) {
      // Check if the file starts with proper imports
      if (!content.startsWith('import') && !content.startsWith('const') && !content.startsWith('function') && !content.startsWith('export')) {
        // Add proper React import if missing
        if (!content.includes('import React')) {
          content = 'import React from \'react\';\n' + content;
          modified = true;
        }
      }
    }

    // Fix malformed component declarations
    const malformedComponentPattern = /const\s+(\w+)\s*:\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedComponentPattern.test(content)) {
      content = content.replace(malformedComponentPattern, 'const $1: NextPage = () => {\n  return (\n    <ModernLayout>');
      modified = true;
    }

    // Fix missing closing braces and parentheses
    const missingClosingPattern = /\)\s*;\s*\}\s*;\s*export default/g;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure
    const malformedJSXPattern = /return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<div/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, 'return (\n    <ModernLayout>\n      <div');
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

    // Fix malformed useEffect hooks
    const malformedUseEffectPattern = /useEffect\s*\(\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedUseEffectPattern.test(content)) {
      content = content.replace(malformedUseEffectPattern, 'useEffect(() => {\n    return (\n      <ModernLayout>');
      modified = true;
    }

    // Fix missing closing tags
    const missingClosingTagsPattern = /<\/ModernLayout>\s*<\/ModernLayout>\s*<\/ModernLayout>\s*\)\s*;\s*\}\s*;\s*$/g;
    if (missingClosingTagsPattern.test(content)) {
      content = content.replace(missingClosingTagsPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix unexpected tokens in JSX
    const unexpectedTokenPattern = /<(\w+)\s*\/>\s*<(\w+)\s*\/>\s*<(\w+)\s*\/>/g;
    if (unexpectedTokenPattern.test(content)) {
      content = content.replace(unexpectedTokenPattern, '<$1 />\n      <$2 />\n      <$3 />');
      modified = true;
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
  if (fixRemainingParsingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 