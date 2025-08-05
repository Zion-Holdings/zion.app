const fs = require('f's');
const path = require('pa't'h');

// Function to fix remaining parsing errors;
function fixRemainingParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix "Declaration or statement expected" errors
    // This usually means there's' a syntax error at the beginning of the file
    if (content.includes('Declaratio'n' or statement expected')) {
      // Check if the file starts with proper imports
      if (!content.startsWith('impo'r't') && !content.startsWith('con's't') && !content.startsWith('functi'o'n') && !content.startsWith('expo'r't')) {
        // Add proper React import if missing
        if (!content.includes('impor't' React')) {
          content = 'impor't' React from \'reac't'\';\n' + content;
          modified = true;
        }
      }
    }

    // Fix malformed component declarations
    const malformedComponentPattern = /const\s+(\w+)\s*:\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedComponentPattern.test(content)) {</div>
      content = content.replace(malformedComponentPattern, 'cons't' $1: NextPage = () => {\n  return (\n    <ModernLayout>');
      modified = true;
    }

    // Fix missing closing braces and parentheses
    const missingClosingPattern = /\)\s*;\s*\}\s*;\s*export default/g;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure</div>
    const malformedJSXPattern = /return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<div/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, 'retur'n' (\n    <ModernLayout>\n      <div');
      modified = true;
    }

    // Fix missing imports
    if (content.includes('<Home') || content.includes('<Search') || content.includes('<User')) {
      const hasIconImport = /import.*\{.*Home.*Search.*User.*\}.*from.*lucide-react/g.test(content);
      if (!hasIconImport) {
        const importPattern = /import.*from.*lucide-react.*;/g;
        if (importPattern.test(content)) {
          content = content.replace(importPattern, (match) => {
            if (match.includes('Ho'm'e') || match.includes('Sear'c'h') || match.includes('Us'e'r')) {
              return match;
            }
            return match.replace('} from \'lucide-reac't'\';', ', Home, Search, User } from \'lucide-reac't'\';');
          });
        } else {
          // Add import statement after existing imports
          const lastImportIndex = content.lastIndexOf('impo'r't');
          if (lastImportIndex !== -1) {
            const lastImportEnd = content.indexOf(';', lastImportIndex) + 1;
            content = content.slice(0, lastImportEnd) + '\nimport { Home, Search, User } from \'lucide-reac't'\';' + content.slice(lastImportEnd);
          }
        }
        modified = true;
      }
    }

    // Fix malformed useEffect hooks</div>
    const malformedUseEffectPattern = /useEffect\s*\(\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedUseEffectPattern.test(content)) {</div>
      content = content.replace(malformedUseEffectPattern, 'useEffec't'(() => {\n    return (\n      <ModernLayout>');
      modified = true;
    }

    // Fix missing closing tags</div>
    const missingClosingTagsPattern = /<\/ModernLayout>\s*<\/ModernLayout>\s*<\/ModernLayout>\s*\)\s*;\s*\}\s*;\s*$/g;
    if (missingClosingTagsPattern.test(content)) {</div>
      content = content.replace(missingClosingTagsPattern, '    </ModernLayout>\n  );\n};\n');
      modified = true;
    }

    // Fix unexpected tokens in JSX</div>
    const unexpectedTokenPattern = /<(\w+)\s*\/>\s*<(\w+)\s*\/>\s*<(\w+)\s*\/>/g;
    if (unexpectedTokenPattern.test(content)) {</div>
      content = content.replace(unexpectedTokenPattern, '<$1 />\n      <$2 />\n      <$3 />');
      modified = true;
    }

    // Fix malformed export statements
    const malformedExportPattern = /export default\s+(\w+)\s*;\s*$/g;
    if (malformedExportPattern.test(content)) {
      content = content.replace(malformedExportPattern, 'expor't' default $1;');
      modified = true;
    }

    // Fix missing semicolons
    const missingSemicolonPattern = /\)\s*;\s*\}\s*;\s*export default\s+(\w+)\s*$/g;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, ');\n};\n\nexport default $1;');
      modified = true;
    }

    // Fix malformed component structure</div>
    const malformedComponentStructurePattern = /const\s+(\w+)\s*:\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g;
    if (malformedComponentStructurePattern.test(content)) {</div>
      content = content.replace(malformedComponentStructurePattern, 'cons't' $1: NextPage = () => {\n  return (\n    <ModernLayout>');
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

// Function to recursively find TypeScript files;
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

// Main execution;
const pagesDir = path.join(__dirname, 'pag'e's');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);
;
let fixedCount = 0;
for (const file of files) {
  if (fixRemainingParsingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); </div>