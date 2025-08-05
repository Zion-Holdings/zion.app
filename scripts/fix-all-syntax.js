const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix CSS class syntax
    content = content
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
    
    // Fix common syntax patterns
    content = content
      .replace(/return\s*\(\s*<div>\s*return\s*\(/g, 'return (')
      .replace(/\);\s*\);\s*$/g, ');')
      .replace(/export\s+default\s+([A-Z_][A-Z0-9_]*);\s*};/g, 'export default $1;')
      .replace(/const\s+([A-Z_][A-Z0-9_]*)\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: NextPage = () => {');
    
    // Add missing closing parentheses/braces
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    for (let i = 0; i < openParens - closeParens; i++) {
      content += ')';
    }
    
    for (let i = 0; i < openBraces - closeBraces; i++) {
      content += '}';
    }
    
    // Remove duplicate closing braces
    content = content.replace(/\}\s*\}\s*;?\s*$/g, '};');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

// Process all directories with potential syntax issues
const directories = [
  'pages',
  'components',
  'src'
];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing ${dir}...`);
    processDirectory(dir);
  }
});

console.log('All files processed!'); 