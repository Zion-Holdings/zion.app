const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix extra spaces in import statements
    const extraSpacesFix = content.replace(/import\s+(\w+)\s+\s+from\s+/g, 'import $1 from ');
    if (extraSpacesFix !== content) {
      content = extraSpacesFix;
      modified = true;
    }
    
    // Fix extra spaces in type imports
    const typeImportSpacesFix = content.replace(/import\s+\{\s*(\w+)\s*\}\s+\s+from\s+/g, 'import { $1 } from ');
    if (typeImportSpacesFix !== content) {
      content = typeImportSpacesFix;
      modified = true;
    }
    
    // Fix malformed component declarations
    const componentFix = content.replace(/const\s+(\w+):\s*NextPage\s*:\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1: NextPage = () => {');
    if (componentFix !== content) {
      content = componentFix;
      modified = true;
    }
    
    // Fix malformed JSX structure
    const jsxFix = content.replace(/return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g, 'return (\n    <ModernLayout>');
    if (jsxFix !== content) {
      content = jsxFix;
      modified = true;
    }
    
    // Fix malformed closing tags
    const closingFix = content.replace(/<\/ModernLayout>\s*<\/ModernLayout>\s*\)\s*;\s*\}\s*;\s*$/g, '    </ModernLayout>\n  );\n};\n');
    if (closingFix !== content) {
      content = closingFix;
      modified = true;
    }
    
    // Fix missing semicolons
    const semicolonFix = content.replace(/\)\s*;\s*\}\s*;\s*export default\s+(\w+)\s*$/g, ');\n};\n\nexport default $1;');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
    }
    
    // Fix malformed className attributes
    const classNameFix = content.replace(/className="([^"]*):([^"]*)"/g, 'className="$1 $2"');
    if (classNameFix !== content) {
      content = classNameFix;
      modified = true;
    }
    
    // Fix malformed export statements
    const exportFix = content.replace(/export default\s+(\w+)\s*;\s*$/g, 'export default $1;');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
    }
    
    // Fix missing newlines between statements
    const newlineFix = content.replace(/([^;\n])\s*export\s+/g, '$1;\n\nexport ');
    if (newlineFix !== content) {
      content = newlineFix;
      modified = true;
    }
    
    // Fix malformed component structure
    const structureFix = content.replace(/const\s+(\w+)\s*:\s*NextPage\s*=\s*\(\s*\)\s*=>\s*\{\s*return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g, 'const $1: NextPage = () => {\n  return (\n    <ModernLayout>');
    if (structureFix !== content) {
      content = structureFix;
      modified = true;
    }
    
    // Fix malformed import statements with colons
    const importColonFix = content.replace(/import:\s*(\w+)\s*from\s+/g, 'import $1 from ');
    if (importColonFix !== content) {
      content = importColonFix;
      modified = true;
    }
    
    // Fix malformed type imports with colons
    const typeColonFix = content.replace(/import\s+type:\s*(\w+)\s*from\s+/g, 'import type { $1 } from ');
    if (typeColonFix !== content) {
      content = typeColonFix;
      modified = true;
    }
    
    // Fix malformed interface declarations
    const interfaceFix = content.replace(/interface\s+(\w+)\s*:\s*\{/g, 'interface $1 {');
    if (interfaceFix !== content) {
      content = interfaceFix;
      modified = true;
    }
    
    // Fix malformed function declarations
    const functionFix = content.replace(/function\s+(\w+)\s*:\s*\(\s*\)\s*=>\s*\{/g, 'function $1() {');
    if (functionFix !== content) {
      content = functionFix;
      modified = true;
    }
    
    // Fix malformed variable declarations
    const variableFix = content.replace(/const\s+(\w+)\s*:\s*(\w+)\s*=\s*(\w+)/g, 'const $1: $2 = $3');
    if (variableFix !== content) {
      content = variableFix;
      modified = true;
    }
    
    // Fix malformed JSX attributes
    const jsxAttrFix = content.replace(/className="([^"]*):([^"]*)"/g, 'className="$1 $2"');
    if (jsxAttrFix !== content) {
      content = jsxAttrFix;
      modified = true;
    }
    
    // Fix malformed closing brackets
    const bracketFix = content.replace(/\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+)\s*;\s*$/g, ');\n};\n\nexport default $1;');
    if (bracketFix !== content) {
      content = bracketFix;
      modified = true;
    }
    
    // Fix malformed return statements
    const returnFix = content.replace(/return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g, 'return (\n    <ModernLayout>');
    if (returnFix !== content) {
      content = returnFix;
      modified = true;
    }
    
    // Fix malformed component structure with multiple returns
    const multiReturnFix = content.replace(/return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>\s*return\s*\(\s*<ModernLayout>/g, 'return (\n    <ModernLayout>');
    if (multiReturnFix !== content) {
      content = multiReturnFix;
      modified = true;
    }
    
    // Fix malformed closing structure
    const closingStructureFix = content.replace(/<\/ModernLayout>\s*<\/ModernLayout>\s*<\/ModernLayout>\s*\)\s*;\s*\}\s*;\s*export\s+default\s+(\w+)\s*;\s*$/g, '    </ModernLayout>\n  );\n};\n\nexport default $1;');
    if (closingStructureFix !== content) {
      content = closingStructureFix;
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

// Function to recursively find and fix TypeScript/TSX files
function fixFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax fixes...');
const pagesDir = './pages';
const componentsDir = './components';
const srcDir = './src';

let totalFixed = 0;

if (fs.existsSync(pagesDir)) {
  console.log('Fixing files in pages directory...');
  totalFixed += fixFilesInDirectory(pagesDir);
}

if (fs.existsSync(componentsDir)) {
  console.log('Fixing files in components directory...');
  totalFixed += fixFilesInDirectory(componentsDir);
}

if (fs.existsSync(srcDir)) {
  console.log('Fixing files in src directory...');
  totalFixed += fixFilesInDirectory(srcDir);
}

console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Comprehensive syntax fixes completed!'); 