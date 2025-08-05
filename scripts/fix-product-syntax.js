const fs = require('fs');
const path = require('path');

// Function to fix CSS class syntax
function fixCssClasses(content) {
  // Fix common CSS class syntax errors
  return content
    .replace(/rounded-lg:shadow-md/g, 'rounded-lg shadow-md')
    .replace(/text-lg:font-semibold/g, 'text-lg font-semibold')
    .replace(/text-3xl:font-bold/g, 'text-3xl font-bold')
    .replace(/text-xl:font-semibold/g, 'text-xl font-semibold')
    .replace(/rounded-md:hover:bg-blue-700/g, 'rounded-md hover:bg-blue-700')
    .replace(/hover:from-purple-700/g, 'hover:from-purple-700')
    .replace(/hover:to-pink-700/g, 'hover:to-pink-700')
    .replace(/hover:text-purple-300/g, 'hover:text-purple-300')
    .replace(/hover:bg-black\/30/g, 'hover:bg-black/30')
    .replace(/focus:outline-none/g, 'focus:outline-none')
    .replace(/focus:ring-2/g, 'focus:ring-2')
    .replace(/focus:ring-offset-2/g, 'focus:ring-offset-2')
    .replace(/focus:ring-purple-500/g, 'focus:ring-purple-500')
    .replace(/focus:border-transparent/g, 'focus:border-transparent')
    .replace(/disabled:opacity-50/g, 'disabled:opacity-50')
    .replace(/disabled:cursor-not-allowed/g, 'disabled:cursor-not-allowed');
}

// Function to fix missing parentheses and braces
function fixSyntax(content) {
  // Count opening and closing parentheses/braces
  const openParens = (content.match(/\(/g) || []).length;
  const closeParens = (content.match(/\)/g) || []).length;
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  
  let fixedContent = content;
  
  // Add missing closing parentheses
  for (let i = 0; i < openParens - closeParens; i++) {
    fixedContent += ')';
  }
  
  // Add missing closing braces
  for (let i = 0; i < openBraces - closeBraces; i++) {
    fixedContent += '}';
  }
  
  // Remove duplicate closing braces at the end
  fixedContent = fixedContent.replace(/\}\s*\}\s*;?\s*$/g, '};');
  
  return fixedContent;
}

// Function to process a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = fixCssClasses(content);
    fixedContent = fixSyntax(fixedContent);
    
    // Additional fixes for common patterns
    fixedContent = fixedContent
      .replace(/const\s+([A-Z_][A-Z0-9_]*)\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: NextPage = () => {')
      .replace(/export\s+default\s+([A-Z_][A-Z0-9_]*);\s*};/g, 'export default $1;')
      .replace(/return\s*\(\s*<div>\s*return\s*\(/g, 'return (')
      .replace(/\);\s*\);\s*$/g, ');');
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to process all product files
function fixProductFiles() {
  const productsDir = path.join(__dirname, '../pages/products');
  
  if (!fs.existsSync(productsDir)) {
    console.log('Products directory not found');
    return;
  }
  
  const files = fs.readdirSync(productsDir);
  const tsxFiles = files.filter(file => file.endsWith('.tsx'));
  
  console.log(`Found ${tsxFiles.length} product files to fix`);
  
  tsxFiles.forEach(file => {
    const filePath = path.join(productsDir, file);
    fixFile(filePath);
  });
  
  console.log('Product files fixed!');
}

// Run the fix
fixProductFiles(); 