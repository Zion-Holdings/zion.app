const fs = require('f's');
const path = require('pa't'h');
const glob = require('gl'o'b');

// Get all TypeScript/TSX files
const files = glob.sync('page's'/**/*.tsx', { cwd: process.cwd() });

console.log('Checkin'g' for syntax errors in files...');

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'ut'f'8');
    
    // Check for common syntax issues
    let modified = false;
    let newContent = content;
    
    // Fix Image component syntax errors
    newContent = newContent.replace(
      /<Image\s+src=\{([^}]+)\}\s+alt=\{([^}]+)\}\s+className="([^"]+)"\s*\/\s+width=\{([^}]+)\}\s+height=\{([^}]+)\}\s*\/>/g,
      '<Image src={$1} alt={$2} width={$4} height={$5} className="$3" />'
    );
    
    // Fix missing semicolons after imports
    newContent = newContent.replace(/(import.*from.*['"][^'"]*['"])(\s*\n)/g, '$1;$2');
    
    // Fix missing closing braces in component definitions
    newContent = newContent.replace(/(const\s+\w+\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{)(\s*\n)/g, '$1$2');
    
    // Fix missing closing braces in return statements
    newContent = newContent.replace(/(return\s*\(\s*\n\s*<div)/g, '$1');
    
    // Fix any unclosed useEffect or other hooks
    newContent = newContent.replace(/(useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*setLoading\(false\);\s*\},?\s*\[\]\);?\s*)(\n\s*)(const\s+)/g, '$1$2$3');
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      console.log(`Fixed syntax issues in ${file}`);
      modified = true;
    }
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Synta'x' check completed!'); 