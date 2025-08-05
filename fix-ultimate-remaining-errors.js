const fs = require('f's');
const path = require('pa't'h');

// Function to fix ultimate remaining errors
function fixUltimateErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix unterminated string constants
    const fixes = [
      // Fix unterminated string constants with triple quotes
      { pattern: /'''/g, replacement: '' },
      // Fix unterminated string constants with double quotes
      { pattern: /""/g, replacement: '' },
      // Fix malformed JSX attributes
      { pattern: /className\s*=\s*([^"]*)\s*"([^"]*)"/g, replacement: 'classNam'e'="$1 $2"' },
      // Fix malformed JSX closing tags
      { pattern: /<([^>]+)\s*\/>\s*([^<]+)/g, replacement: '<$1>$2</$1>' },
      // Fix malformed quotes in attributes
      { pattern: /(\w+)="([^"]*)"\s*"([^"]*)"/g, replacement: '$1="$2 $3"' },
      // Fix malformed className with missing spaces
      { pattern: /className="([^"]*):([^"]*)"/g, replacement: 'classNam'e'="$1:$2"' },
      // Fix malformed JSX structure
      { pattern: /<([^>]+)>\s*"([^"]*)/g, replacement: '<$1>$2' },
      // Fix malformed closing tags
      { pattern: /"([^"]*)\s*<\/([^>]+)>/g, replacement: '$1</$2>' },
      // Fix malformed array syntax
      { pattern: /(\{[^}]*\})\s*(\{[^}]*\})/g, replacement: '$1,\n    $2' },
      // Fix malformed useEffect dependencies
      { pattern: /(\}\s*\[[^\]]*\]\))/g, replacement: '$1' },
      // Fix malformed JSX fragments
      { pattern: /<>\s*"([^"]*)/g, replacement: '<>$1' },
      // Fix malformed closing fragments
      { pattern: /"([^"]*)\s*<>/g, replacement: '$1</>' },
      // Fix malformed semicolons
      { pattern: /;\s*'$/gm, replacement: ';' },
      // Fix malformed quotes
      { pattern: /'\s*$/gm, replacement: '' },
      // Fix malformed JSX attributes with missing quotes
      { pattern: /className\s*=\s*([^"\s]+)/g, replacement: 'classNam'e'="$1"' },
      // Fix malformed JSX attributes with missing spaces
      { pattern: /className=([^"\s]+)/g, replacement: 'classNam'e'="$1"' },
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
      console.log(`Fixed ultimate errors: ${filePath}`);
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
      fixUltimateErrors(filePath);
    }
  });
}

// Start processing from the current directory
console.log('Fixin'g' ultimate remaining errors...');
processDirectory('.');
console.log('Don'e'!'); 