let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

// Function to fix remaining React Hook dependency warnings
function fixRemainingDependencies(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix useEffect hooks with mock dependencies by removing them
    const useEffectRegex = /useEffect\\(\\(\\) => \\{[\\s\\S]*?\\}, \\[([^\\]]*)\\]\\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes('mock')) {
        // Remove all mock dependencies
        const depArray = deps.split(',').map(dep => dep.trim());
        const validDeps = depArray.filter(dep => !dep.includes('mock'));
        const newDeps = validDeps.length > 0 ? validDeps.join(', ') : '';
        
        if (newDeps !== deps) {
          modified = true;
          return match.replace(/\\[([^\\]]*)\\]/, `[${newDeps}]`);
        }
      }
      return match;
    });
    
    // Fix useMemo hooks with missing dependencies
    const useMemoRegex = /useMemo\\(\\(\\) => ([^,]+), \\[([^\\]]*)\\]\\)/g;
    content = content.replace(useMemoRegex, (match, factory, deps) => {
      if (deps.includes('data') && !deps.includes('factory')) {
        // Add factory to dependencies if data is missing
        const newDeps = deps ? `${deps}, factory` : 'factory';
        modified = true;
        return match.replace(/\\[([^\\]]*)\\]/, `[${newDeps}]`);
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.log(`✅ Fixed dependencies in ${filePath}`, 'info');
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
  
  this.log(`\n🎉 Fixed dependencies in ${totalFixed} files`, 'info');
}

processFiles(); 