
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', .tsx', .js', .jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file !== node_modules' && file !== .git' && !file.startsWith('.')) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

// Function to fix a single file by removing extraneous single quotes
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all sequences of 3 or more single quotes
    content = content.replace(/'{3,}/g, );
    
    // Remove sequences of single quotes that appear after semicolons or at line ends
    content = content.replace(/;{1,}/g, ;);
    content = content.replace(/'{1,}$/gm, );
    
    // Remove sequences of single quotes that appear after closing braces
    content = content.replace(/}{1,}/g, });
    
    // Remove sequences of single quotes that appear after closing parentheses
    content = content.replace(/\){1,}/g, ));
    
    // Remove sequences of single quotes that appear after closing brackets
    content = content.replace(/\]{1,}/g, ]);
    
    // Remove sequences of single quotes that appear after closing angle brackets
    content = content.replace(/>{1,}/g, >);
    
    // Remove sequences of single quotes that appear after commas
    content = content.replace(/,{1,}{1,}/g, ,);
    
    // Remove sequences of single quotes that appear after spaces
    content = content.replace(/ {1,}/g,  );
    
    // Remove sequences of single quotes that appear after tabs
    content = content.replace(/\t'{1,}/g, \t');
    
    // Remove sequences of single quotes that appear after newlines
    content = content.replace(/\n'{1,}/g, \n');
    
    // Remove sequences of single quotes that appear after carriage returns
    content = content.replace(/\r'{1,}/g, \r');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

console.log('🚀 Starting corruption fix script...');

// Find all TypeScript and JavaScript files
const files = findFiles('.', ['.ts', .tsx', .js', .jsx']);

console.log(`📁 Found ${files.length} files to check`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✨ Fixed ${fixedCount} files.`);

console.log('\n🔍 Running syntax check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('✅ TypeScript syntax check passed');
} catch (error) {
  console.error('⚠️ TypeScript syntax check failed - some files may still need manual fixing');
}

console.log('\n🚀 Ready to commit and push changes!'); 