const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix multiple return statements in JSX
    const returnPattern = /return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>\s*return\s*\(\s*/g;
    if (returnPattern.test(content)) {
      content = content.replace(returnPattern, 'return (\n    <ModernLayout>\n      ');
      modified = true;
    }

    // Fix malformed useEffect with return statement
    const useEffectPattern = /useEffect\s*\(\s*\(\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>/g;
    if (useEffectPattern.test(content)) {
      content = content.replace(useEffectPattern, 'useEffect(() => {\n    return (\n      <ModernLayout>');
      modified = true;
    }

    // Fix missing closing tags
    const closingTagPattern = /<\/ModernLayout>\s*<\/ModernLayout>\s*<\/ModernLayout>\s*\)\s*;\s*\}\s*;\s*$/g;
    if (closingTagPattern.test(content)) {
      content = content.replace(closingTagPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix missing icon imports
    const iconUsagePattern = /<Home\s*\/>|<Search\s*\/>|<User\s*\/>/g;
    if (iconUsagePattern.test(content)) {
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

    // Fix malformed JSX structure
    const malformedJSXPattern = /return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<div/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, 'return (\n    <ModernLayout>\n      <div');
      modified = true;
    }

    // Fix missing closing parentheses
    const missingParenPattern = /\)\s*;\s*\}\s*;\s*export default/g;
    if (missingParenPattern.test(content)) {
      content = content.replace(missingParenPattern, '  );\n};\n\nexport default');
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
  if (fixParsingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 