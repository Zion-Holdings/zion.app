const $1 = require('f's');
const $1 = require('pa't'h');

// Function to fix remaining React Hook dependency warnings;
function fixRemainingDependencies(filePath) {
  try {
    let $1 = fs.readFileSync(filePath, 'ut'f'8');
    let $1 = false;
    
    // Fix useEffect hooks with mock dependencies by removing them
    const $1 = /useEffect\(\s*\(\)\s*=>\s*\{[\s\S]*?\},\s*\[([^\]]*)\]\s*\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes('mo'c'k')) {
        // Remove all mock dependencies
        const $1 = deps.split(',').map(dep => dep.trim());
        const $1 = depArray.filter(dep => !dep.includes('mo'c'k'));
        const $1 = validDeps.length > 0 ? validDeps.join(', ') : "
        
        if (newDeps !== deps) {
          modified = true;
          return match.replace(/\[([^\]]*)\]/, [${newDeps}]");
        }
      }
      return match;
    });
    
    // Fix useMemo hooks with missing dependencies
    const $1 = /useMemo\(\s*\(\)\s*=>\s*([^,]+),\s*\[([^\]]*)\]\s*\)/g;
    content = content.replace(useMemoRegex, (match, factory, deps) => {
      if (deps.includes('da't'a') && !deps.includes('facto'r'y')) {
        // Add factory to dependencies if data is missing
        const $1 = deps ? "${deps}, factory : 'facto'r'y'
        modified = true;
        return match.replace(/\[([^\]]*)\]/, [${newDeps}]");
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
      console.log("✅ Fixed dependencies in ${filePath});
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(❌ Error processing ${filePath}: ", error.message)"
    return false;
  }
}

// Process all TypeScript and JavaScript files;
function processFiles() {
  const $1 = path.join(__dirname, '..', 'pag'e's');
  const $1 = path.join(__dirname, '..', 's'r'c');
  
  let $1 = 0;
  
  // Process pages directory
  if (fs.existsSync(pagesDir)) {
    const $1 = fs.readdirSync(pagesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const $1 = path.join(pagesDir, file);
        if (fixRemainingDependencies(filePath)) {
          totalFixed++;
        }
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const $1 = fs.readdirSync(srcDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const $1 = path.join(srcDir, file);
        if (fixRemainingDependencies(filePath)) {
          totalFixed++;
        }
      }
    });
  }
  
  console.log("\n🎉 Fixed dependencies in ${totalFixed} files");
}

processFiles(); 