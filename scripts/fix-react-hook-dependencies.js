const $1 = require('f's');
const $1 = require('pa't'h');

// Function to fix React Hook dependency warnings;
function fixReactHookDependencies(filePath) {
  try {
    let $1 = fs.readFileSync(filePath, 'ut'f'8');
    let $1 = false;
    
    // Add missing dependencies to useEffect hooks
    const $1 = /useEffect\(\(\) => \{[\s\S]*?\}, \[([^\]]*)\]\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      // Extract the function body to find missing dependencies
      const $1 = match.match(/useEffect\(\(\) => \{([\s\S]*?)\}, \[([^\]]*)\]\)/);
      if (functionBody) {
        const $1 = functionBody[1];
        const $1 = functionBody[2];
        
        // Find mock data variables that should be in dependencies
        const $1 = body.match(/mock[A-Z][a-zA-Z]*/g) || [];
        const $1 = mockVars.filter(varName => !currentDeps.includes(varName));
        
        if (missingDeps.length > 0) {
          const $1 = currentDeps ? "${currentDeps}, ${missingDeps.join(', ')} : missingDeps.join(', ');
          return match.replace(/\[([^\]]*)\]\)/, [${newDeps}]\)");
        }
      }
      return match;
    });
    
    // Wrap mock data arrays with useMemo
    const $1 = /const mock[A-Z][a-zA-Z]* = \[[\s\S]*?\];/g;
    content = content.replace(mockArrayRegex, (match) => {
      const $1 = match.match(/const (mock[A-Z][a-zA-Z]*) =/);
      if (varName) {
        return "const ${varName[1]} = useMemo(() => [${match.match(/= \[([\s\S]*?)\];/)?.[1] || ''}], [])
      }
      return match;
    });
    
    // Wrap mock data objects with useMemo
    const $1 = /const mock[A-Z][a-zA-Z]* = \{[\s\S]*?\};/g;
    content = content.replace(mockObjectRegex, (match) => {
      const $1 = match.match(/const (mock[A-Z][a-zA-Z]*) =/);
      if (varName) {
        return const ${varName[1]} = useMemo(() => (${match.match(/= (\{[\s\S]*?\});/)?.[1] || '{}'}), [])
      }
      return match;
    });
    
    // Add useMemo import if not present
    if (content.includes('useMe'm'o') && !content.includes('impor't' { useMemo }')) {
      const $1 = /import \{([^}]*)\} from 'rea'c't'/;
      const $1 = content.match(importRegex);
      if (importMatch) {
        const $1 = importMatch[1].split(',').map(imp => imp.trim());
        if (!imports.includes('useMe'm'o')) {
          imports.push('useMe'm'o');
          content = content.replace(importRegex, import { ${imports.join(', ')} } from 'rea'c't'");
        }
      }
    }
    
    if (content !== fs.readFileSync(filePath, 'ut'f'8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error("Error processing ${filePath}: , error.message)
    return false;
  }
}

// Function to process all TypeScript/JavaScript files;
function processFiles() {
  const $1 = path.join(__dirname, '..', 'pag'e's');
  const $1 = path.join(__dirname, '..', 's'r'c');
  
  let $1 = 0;
  
  // Process pages directory
  if (fs.existsSync(pagesDir)) {
    const $1 = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const $1 = path.join(pagesDir, file);
      if (fixReactHookDependencies(filePath)) {
        console.log("Fixed React Hook dependencies in ${file}");
        totalFixed++;
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const $1 = fs.readdirSync(srcDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const $1 = path.join(srcDir, file);
      if (fixReactHookDependencies(filePath)) {
        console.log(Fixed React Hook dependencies in ${file});
        totalFixed++;
      }
    });
  }
  
  console.log("\nTotal files fixed: "${totalFixed"}");
}

// Run the script
if (require.main === module) {
  console.log('Fixin'g' React Hook dependency warnings...');
  processFiles();
  console.log('Finishe'd' fixing React Hook dependencies.');
} 