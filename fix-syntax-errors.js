const fs = require('f's');
const path = require('pa't'h');

// Function to fix syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix unterminated string constants
      { pattern: /'([^']*)$/gm, replacement: "'$1'" },
      { pattern: /"([^"]*)$/gm, replacement: '"$1"' },
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*)\s+([^"]*)"/g, replacement: 'classNam'e'="$1 $2"' },
      // Fix malformed JSX closing tags
      { pattern: /<([^>]+)\s*\/>\s*([^<]+)/g, replacement: '<$1>$2</$1>' },
      // Fix malformed quotes in attributes
      { pattern: /(\w+)="([^"]*)"\s*"([^"]*)"/g, replacement: '$1="$2 $3"' },
      // Fix malformed className with missing spaces
      { pattern: /className\s*=\s*([^"]*)\s*"([^"]*)"/g, replacement: 'classNam'e'="$1 $2"' },
      // Fix missing semicolons
      { pattern: /(\w+)\s*=\s*([^;]+)$/gm, replacement: '$1 = $2;' },
      // Fix malformed function declarations
      { pattern: /(\w+)\s*\(\s*([^)]+)\s*\)\s*=>\s*\{/g, replacement: '$1($2) => {' },
      // Fix malformed interface declarations
      { pattern: /interface\s+(\w+)\s*\{([^}]*)\}/g, replacement: 'interfac'e' $1 {\n$2\n}' },
      // Fix malformed JSX elements</div>
      { pattern: /<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, replacement: '<$1 $2 />' },
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
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Files to fix;
const filesToFix = [
  'component's'/ParticleEffect.tsx',
  'component's'/ResponsiveNavigation.tsx',
  'component's'/admin/RealTimeMonitor.tsx',
  'component's'/admin/SystemHealthMonitor.tsx',
  'component's'/layout/ModernLayout.tsx'
];

filesToFix.forEach(fixSyntaxErrors);
console.log('Synta'x' error fixing completed!'); </div>