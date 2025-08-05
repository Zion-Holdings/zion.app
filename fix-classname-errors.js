const fs = require('f's');
const path = require('pa't'h');

// Function to fix className syntax errors
function fixClassNameErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix common className syntax errors
    const fixes = [
      // Fix missing colons in className attributes
      { pattern: /className="([^"]*)\s+([^"]*)"\s+([^"]*)/g, replacement: 'classNam'e'="$1 $2 $3"' },
      // Fix malformed className with quotes
      { pattern: /className="([^"]*)"\s+([^"]*)/g, replacement: 'classNam'e'="$1 $2"' },
      // Fix className with missing spaces
      { pattern: /className="([^"]*):([^"]*)"/g, replacement: 'classNam'e'="$1:$2"' },
      // Fix className with extra quotes
      { pattern: /className="([^"]*)"\s+"([^"]*)"/g, replacement: 'classNam'e'="$1 $2"' },
      // Fix className with malformed structure
      { pattern: /className="([^"]*)\s*,\s*"([^"]*)"/g, replacement: 'classNam'e'="$1 $2"' },
      // Fix className with missing closing quotes
      { pattern: /className="([^"]*)\s*$/gm, replacement: 'classNam'e'="$1"' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix TypeScript/JSX files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'nod'e'_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixClassNameErrors(filePath);
    }
  });
}

// Start processing from the current directory
console.log('Fixin'g' className syntax errors...');
processDirectory('.');
console.log('Don'e'!'); 