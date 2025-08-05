const fs = require('fs');
const path = require('path');

// Function to fix remaining React Hook dependency warnings
function fixRemainingDependencies(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix useEffect hooks with mock dependencies by removing them
    const useEffectRegex = /useEffect\(\s*\(\)\s*=>\s*\{[\s\S]*?\},\s*\[([^\]]*)\]\s*\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes('mock')) {
        // Remove all mock dependencies
        const depArray = deps.split(',').map(dep => dep.trim());
        const validDeps = depArray.filter(dep => !dep.includes('mock'));
        const newDeps = validDeps.length > 0 ? validDeps.join(', ') : '';
        
        if (newDeps !== deps) {
          modified = true;
          return match.replace(/\[([^\]]*)\]/, `[${newDeps}]`);
        }
      }
      return match;
    });
    
    // Fix useMemo hooks with missing dependencies
    const useMemoRegex = /useMemo\(\s*\(\)\s*=>\s*([^,]+),\s*\[([^\]]*)\]\s*\)/g;
    content = content.replace(useMemoRegex, (match, factory, deps) => {
      if (deps.includes('data') && !deps.includes('factory')) {
        // Add factory to dependencies if data is missing
        const newDeps = deps ? `${deps}, factory` : 'factory';
        modified = true;
        return match.replace(/\[([^\]]*)\]/, `[${newDeps}]`);
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed dependencies in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all TypeScript and JavaScript files
function processFiles() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const srcDir = path.join(__dirname, '..', 'src');
  
  let totalFixed = 0;
  
  // Process pages directory
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const filePath = path.join(pagesDir, file);
        if (fixRemainingDependencies(filePath)) {
          totalFixed++;
        }
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const filePath = path.join(srcDir, file);
        if (fixRemainingDependencies(filePath)) {
          totalFixed++;
        }
      }
    });
  }
  
  console.log(`\n🎉 Fixed dependencies in ${totalFixed} files`);
}

processFiles(); 