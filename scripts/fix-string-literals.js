const fs = require('fs');
const path = require('path');

function fixStringLiterals(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix unterminated string literals
    const stringFixes = [
      // Fix unterminated double quotes
      [/"([^"]*)$/gm, '"$1"'],
      [/"([^"]*)\n/g, '"$1"\n'],
      
      // Fix unterminated single quotes
      [/'([^']*)$/gm, "'$1'"],
      [/'([^']*)\n/g, "'$1'\n"],
      
      // Fix unterminated template literals
      [/`([^`]*)$/gm, '`$1`'],
      [/`([^`]*)\n/g, '`$1`\n'],
      
      // Fix broken import statements
      [/import\s+(\w+)\s+from\s+['"]([^'"]*)$/gm, "import $1 from '$2';"],
      [/import\s+(\w+)\s+from\s+['"]([^'"]*)\n/g, "import $1 from '$2';\n"],
      
      // Fix broken export statements
      [/export\s+default\s+(\w+)\s*$/gm, 'export default $1;'],
      [/export\s+(\w+)\s*$/gm, 'export $1;'],
      
      // Fix broken JSX attributes
      [/(\w+)=['"]([^'"]*)$/gm, '$1="$2"'],
      [/(\w+)=['"]([^'"]*)\s/g, '$1="$2" '],
      
      // Fix broken object properties
      [/(\w+):\s*['"]([^'"]*)$/gm, '$1: "$2"'],
      [/(\w+):\s*['"]([^'"]*),/gm, '$1: "$2",'],
      
      // Fix broken function calls
      [/(\w+)\(['"]([^'"]*)$/gm, '$1("$2")'],
      [/(\w+)\(['"]([^'"]*)\)/gm, '$1("$2")'],
      
      // Fix broken array elements
      [/\[\s*['"]([^'"]*)$/gm, '["$1"'],
      [/\[\s*['"]([^'"]*),/gm, '["$1",'],
      
      // Fix broken object literals
      [/\{\s*(\w+):\s*['"]([^'"]*)$/gm, '{\n  $1: "$2"'],
      [/\{\s*(\w+):\s*['"]([^'"]*),/gm, '{\n  $1: "$2",'],
      
      // Fix broken JSX elements
      [/<(\w+)\s+(\w+)=['"]([^'"]*)$/gm, '<$1 $2="$3"'],
      [/<(\w+)\s+(\w+)=['"]([^'"]*)\s*>/gm, '<$1 $2="$3">'],
      
      // Fix broken component declarations
      [/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {'],
      [/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {'],
      
      // Fix broken return statements
      [/return\s+<(\w+)\s*$/gm, 'return <$1>'],
      [/return\s+(\w+)\s*$/gm, 'return $1;'],
      
      // Fix broken variable declarations
      [/const\s+(\w+)\s*=\s*['"]([^'"]*)$/gm, 'const $1 = "$2"'],
      [/let\s+(\w+)\s*=\s*['"]([^'"]*)$/gm, 'let $1 = "$2"'],
      [/var\s+(\w+)\s*=\s*['"]([^'"]*)$/gm, 'var $1 = "$2"'],
    ];
    
    stringFixes.forEach(([pattern, replacement]) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        fixed = true;
      }
    });
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed string literals: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixStringLiterals(filePath);
    }
  });
}

// Process all relevant directories
const directories = [
  'pages',
  'components',
  'src',
  'utils'
];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    processDirectory(dir);
  }
});

console.log('String literal fixes completed!'); 