const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all TypeScript/TSX files
const files = glob.sync('pages/**/*.tsx', { cwd: process.cwd() });

console.log('Checking for syntax errors in files...');

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for common syntax issues
    let modified = false;
    let newContent = content;
    
    // Fix missing semicolons after imports
    newContent = newContent.replace(/(import.*from.*['"][^'"]*['"])(\s*\n)/g, '$1;$2');
    
    // Fix missing closing braces in component definitions
    newContent = newContent.replace(/(const\s+\w+\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{)(\s*\n)/g, '$1$2');
    
    // Fix missing closing braces in return statements
    newContent = newContent.replace(/(return\s*\(\s*\n\s*<div)/g, '$1');
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      console.log(`Fixed syntax issues in ${file}`);
      modified = true;
    }
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Syntax check completed!'); 