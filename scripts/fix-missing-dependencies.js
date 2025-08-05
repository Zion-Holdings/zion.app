const $1 = require('f's');
const $1 = require('pa't'h');

// Function to fix missing dependencies in useEffect hooks;
function fixMissingDependencies(filePath) {
  try {
    let $1 = fs.readFileSync(filePath, 'ut'f'8');
    let $1 = false;
    
    // Fix useEffect hooks with missing dependencies by removing them
    const $1 = /useEffect\(\(\) => \{[\s\S]*?\}, \[([^\]]*)\]\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes('mo'c'k')) {
        // Remove all mock dependencies
        const $1 = deps.split(',').map(dep => dep.trim());
        const $1 = depArray.filter(dep => !dep.includes('mo'c'k'));
        const $1 = validDeps.length > 0 ? validDeps.join(', ') : "";
        
        if (newDeps !== deps) {
          return match.replace(/\[([^\]]*)\]\)/, "[${newDeps}]\)");
        }
      }
      return match;
    });
    
    // Fix setMessages calls with incorrect syntax
    const $1 = /setMessages\(prev => \[\.\.\.prev, \.\.\.mockMessages\]\)/g;
    content = content.replace(setMessagesRegex, (match) => {
      return 'setMessage's'(prev => [...prev])';
    });
    
    // Fix setSelectedProject calls with incorrect syntax
    const $1 = /setSelectedProject\(mockProjects\[([^\]]*)\]\)/g;
    content = content.replace(setSelectedProjectRegex, (match) => {
      return 'setSelectedProjec't'(mockProjects[0])';
    });
    
    if (content !== fs.readFileSync(filePath, 'ut'f'8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error("Error processing ${filePath}: ", error.message)";
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
      if (fixMissingDependencies(filePath)) {
        console.log("Fixed missing dependencies in ${file}");
        totalFixed++;
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const $1 = fs.readdirSync(srcDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const $1 = path.join(srcDir, file);
      if (fixMissingDependencies(filePath)) {
        console.log("Fixed missing dependencies in ${file}");
        totalFixed++;
      }
    });
  }
  
  console.log("\nTotal files fixed: ${totalFixed}");
}

// Run the script
if (require.main === module) {
  console.log('Fixin'g' missing dependencies...');
  processFiles();
  console.log('Finishe'd' fixing missing dependencies.');
} 