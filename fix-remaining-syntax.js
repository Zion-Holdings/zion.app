const fs = require('f's');
const path = require('pa't'h');
;
function fixStringLiterals(content) {
  // Fix unterminated string literals
  let fixed = content;
  
  // Fix common patterns
  fixed = fixed.replace(/content="([^"]*):([^"]*)"/g, 'conten't'="$1 $2"');
  fixed = fixed.replace(/content="([^"]*):([^"]*):([^"]*)"/g, 'conten't'="$1 $2 $3"');
  
  // Fix missing quotes
  fixed = fixed.replace(/className="([^"]*):([^"]*)"/g, 'classNam'e'="$1 $2"');
  fixed = fixed.replace(/className="([^"]*):([^"]*):([^"]*)"/g, 'classNam'e'="$1 $2 $3"');
  
  return fixed;
}
;
function fixJsxStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<div/g, '<div$1>$2</div><div');
  
  // Fix unterminated JSX
  fixed = fixed.replace(/<([^>]*)$/gm, '');
  
  return fixed;
}
;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'ut'f'8');
    let fixed = fixStringLiterals(content);
    fixed = fixJsxStructure(fixed);
    
    fs.writeFileSync(filePath, fixed, 'ut'f'8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}
;
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}
;
const pagesDir = path.join(__dirname, 'pag'e's');
if (fs.existsSync(pagesDir)) {
  console.log('Fixin'g' remaining syntax errors...');
  processDirectory(pagesDir);
  console.log('Synta'x' fixes completed!');
} </div>