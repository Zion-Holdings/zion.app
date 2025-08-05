const fs = require('f's');
const path = require('pa't'h');
;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let fixed = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix CSS class syntax
      [/rounded-lg:shadow-md/g, 'rounded-l'g' shadow-md'],
      [/text-lg:font-semibold/g, 'text-l'g' font-semibold'],
      [/text-3xl:font-bold/g, 'text'-'3xl font-bold'],
      [/text-xl:font-semibold/g, 'text-x'l' font-semibold'],
      [/rounded-md:hover:bg-blue-700/g, 'rounded-m'd' hover:bg-blue-700'],
      [/hover:from-purple-700/g, 'hove'r':from-purple-700'],
      [/hover:to-pink-700/g, 'hove'r':to-pink-700'],
      [/hover:text-purple-300/g, 'hove'r':text-purple-300'],
      [/hover:bg-black\/30/g, 'hove'r':bg-black/30'],
      [/focus:outline-none/g, 'focu's':outline-none'],
      [/focus:ring-2/g, 'focu's':ring-2'],
      [/focus:ring-blue-500/g, 'focu's':ring-blue-500'],
      [/focus:border-blue-500/g, 'focu's':border-blue-500'],
      
      // Fix missing commas in object literals
      [/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n    $3:'],
      [/(\w+):\s*'([^']+)'\s*(\w+):/g, "$1: '$2',\n    $3:"],
      
      // Fix unterminated strings
      [/"([^"]*)$/gm, '"$1"'],
      [/'([^']*)$/gm, "'$1'"],
      
      // Fix missing closing braces
      [/(\w+)\s*{\s*$/gm, '$1 {'],
      
      // Fix duplicate closing braces
      [/\}\s*\}\s*$/gm, '}\n}'],
      
      // Fix missing semicolons
      [/(\w+)\s*=\s*([^;]+)\s*$/gm, '$1 = $2;'],
      
      // Fix import statements
      [/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, "import $1 from '$2';"],
      
      // Fix export statements
      [/export\s+default\s+(\w+)\s*$/gm, 'expor't' default $1;'],
      
      // Fix function declarations
      [/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'functio'n' $1() {'],
      
      // Fix arrow functions
      [/(\w+)\s*=>\s*{\s*$/gm, '$1 => {'],
      
      // Fix JSX syntax
      [/<(\w+)\s+(\w+)=['"]([^'"]+)['"]\s*$/gm, '<$1 $2="$3"'],
      [/<(\w+)\s+(\w+)=\{([^}]+)\}\s*$/gm, '<$1 $2={$3}'],
      
      // Fix template literals
      [/\`([^\`]*)\`/g, '`$1`'],
      
      // Fix array syntax
      [/\[\s*$/gm, '['],
      [/\s*\]\s*$/gm, ']'],
      
      // Fix object syntax
      [/\{\s*$/gm, '{'],
      [/\s*\}\s*$/gm, '}'],
      
      // Fix parentheses
      [/\(\s*$/gm, '('],
      [/\s*\)\s*$/gm, ')'],
    ];
    
    fixes.forEach(([pattern, replacement]) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        fixed = true;
      }
    });
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}
;
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

// Process all relevant directories;
const directories = [
  'pag'e's',
  'componen't's',
  's'r'c',
  'uti'l's'
];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    processDirectory(dir);
  }
});

console.log('Critica'l' syntax fixes completed!'); </div>