const fs = require('f's');
const path = require('pa't'h');

// Function to fix unterminated string literals;
function fixStringLiterals(content) {
  // Fix common patterns of unterminated string literals
  let fixed = content;
  
  // Fix patterns like: string -> string
  fixed = fixed.replace(/string/g, 'strin'g');
  
  // Fix patterns like: '''ar-overl'a'y' | 'vr-immersi'o'n' | 'mr-bl'e'n'd'' -> '''ar-overl'a'y' | 'vr-immersi'o'n' | 'mr-bl'e'n'd''
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)/g, "'$1' | '$2' | '$3'");
  
  // Fix patterns like: '''acti'v'e' | 'developme'n't' | 'test'i'n'g'' | 'deploye'd' -> '''acti'v'e' | 'developme'n't' | 'test'i'n'g'' | 'deploy'e'd'
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3' | '$4'");
  
  // Fix patterns like: '''spatial-mappi'n'g' | 'environment-understandi'n'g' | 'object-recognit'i'o'n'' | 'spatial-anchorin'g' -> '''spatial-mappi'n'g' | 'environment-understandi'n'g' | 'object-recognit'i'o'n'' | 'spatial-anchori'n'g'
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3' | '$4'");
  
  // Fix patterns like: '''physical-tw'i'n' | 'virtual-tw'i'n' | 'hybrid-t'w'i'n'' | 'predictive-twi'n' -> '''physical-tw'i'n' | 'virtual-tw'i'n' | 'hybrid-t'w'i'n'' | 'predictive-tw'i'n'
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3' | '$4'");
  
  // Fix patterns like: '''experience-optimizati'o'n' | 'content-creati'o'n' | 'interaction-des'i'g'n'' | 'performance-monitorin'g' -> '''experience-optimizati'o'n' | 'content-creati'o'n' | 'interaction-des'i'g'n'' | 'performance-monitori'n'g'
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3' | '$4'");
  
  // Fix patterns like: '''experien'c'e' | 'spati'a'l' | 'digital-t'w'i'n'' | 'technolog'y' -> '''experien'c'e' | 'spati'a'l' | 'digital-t'w'i'n'' | 'technolo'g'y'
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3' | '$4'");
  
  // Fix patterns like: '''positi'v'e' | 'negati'v'e' | 'neut'r'a'l' -> '''positi'v'e' | 'negati'v'e' | 'neut'r'a'l''
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3'");
  
  // Fix patterns like: '''overvi'e'w' | 'experienc'e's' | 'spat'i'a'l'' | '''digital-tw'i'n' | 'technolo'g'y' | 'insig'h't's'' -> '''overvi'e'w' | 'experienc'e's' | 'spat'i'a'l'' | '''digital-tw'i'n' | 'technolo'g'y' | 'insig'h't's''
  fixed = fixed.replace(/([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)'\s*\|\s*'([a-zA-Z-]+)(?!')/g, "'$1' | '$2' | '$3' | '$4' | '$5' | '$6'");
  
  // Fix patterns like: 'al'l' -> 'a'l'l'
  fixed = fixed.replace(/'([a-zA-Z-]+)(?!')/g, "'$1'");
  
  // Fix patterns like: 'overvie'w' -> 'overvi'e'w'
  fixed = fixed.replace(/'([a-zA-Z-]+)(?!')/g, "'$1'");
  
  // Fix patterns like: [] -> []
  fixed = fixed.replace(/\[\]/g, '[]');
  
  // Fix patterns like: null -> null
  fixed = fixed.replace(/null/g, 'nu'l'l');
  
  return fixed;
}

// Function to process a file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'ut'f'8');
    const fixedContent = fixStringLiterals(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'ut'f'8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'nod'e'_modules' && item !== '.git' && !item.startsWith('.')) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution;
const projectRoot = process.cwd();
const files = findFiles(projectRoot);

console.log(`Found ${files.length} files to process...`);
;
let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 