const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX syntax errors
    const fixes = [
      // Fix missing commas in arrays
      { pattern: /(\{[^}]*\})\s*(\{[^}]*\})/g, replacement: '$1,\n    $2' },
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*)"\s*"([^"]*)"/g, replacement: 'className="$1 $2"' },
      // Fix malformed JSX closing tags
      { pattern: /<([^>]+)\s*\/>\s*([^<]+)/g, replacement: '<$1>$2</$1>' },
      // Fix malformed quotes in attributes
      { pattern: /(\w+)="([^"]*)"\s*"([^"]*)"/g, replacement: '$1="$2 $3"' },
      // Fix malformed className with missing spaces
      { pattern: /className="([^"]*):([^"]*)"/g, replacement: 'className="$1:$2"' },
      // Fix malformed JSX structure
      { pattern: /<([^>]+)>\s*"([^"]*)/g, replacement: '<$1>$2' },
      // Fix malformed closing tags
      { pattern: /"([^"]*)\s*<\/([^>]+)>/g, replacement: '$1</$2>' },
      // Fix malformed array syntax
      { pattern: /(\{[^}]*\})\s*(\{[^}]*\})/g, replacement: '$1,\n    $2' },
      // Fix malformed useEffect dependencies
      { pattern: /(\}\s*\[[^\]]*\]\)/g, replacement: '$1' },
      // Fix malformed JSX fragments
      { pattern: /<>\s*"([^"]*)/g, replacement: '<>$1' },
      // Fix malformed closing fragments
      { pattern: /"([^"]*)\s*<>/g, replacement: '$1</>' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors: ${filePath}`);
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
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixJSXErrors(filePath);
    }
  });
}

// Start processing from the current directory
console.log('Fixing JSX syntax errors...');
processDirectory('.');
console.log('Done!'); 