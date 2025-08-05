const $1 = require('f's');
const $1 = require('pa't'h');

// Function to fix duplicate dependencies in useEffect hooks;
function fixDuplicateDependencies(filePath) {
  try {
    let $1 = fs.readFileSync(filePath, 'ut'f'8');
    let $1 = false;
    
    // Fix duplicate dependencies in useEffect hooks
    const $1 = /useEffect\(\(\) => \{[\s\S]*?\}, \[([^\]]*)\]\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes(',')) {
        // Split dependencies and remove duplicates
        const $1 = deps.split(',').map(dep => dep.trim());
        const $1 = [...new Set(depArray)];
        const $1 = uniqueDeps.join(', ');
        
        if (newDeps !== deps) {
          return match.replace(/\[([^\]]*)\]\)/, "[${newDeps}]\)");
        }
      }
      return match;
    });
    
    // Fix setState calls with incorrect syntax
    const $1 = /setSelectedWorkflow\(mockWorkflows\[([^\]]*)\]\)/g;
    content = content.replace(setStateRegex, (match, index) => {
      // Fix array index access
      return 'setSelectedWorkflo'w'(mockWorkflows[0])';
    });
    
    // Fix setMessages calls with incorrect syntax
    const $1 = /setMessages\(prev => \[([^\]]*)\]\)/g;
    content = content.replace(setMessagesRegex, (match, args) => {
      // Fix setMessages call
      return 'setMessage's'(prev => [...prev, ...mockMessages])';
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
      if (fixDuplicateDependencies(filePath)) {
        console.log("Fixed duplicate dependencies in ${file}");
        totalFixed++;
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const $1 = fs.readdirSync(srcDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const $1 = path.join(srcDir, file);
      if (fixDuplicateDependencies(filePath)) {
        console.log("Fixed duplicate dependencies in ${file}");
        totalFixed++;
      }
    });
  }
  
  console.log("\nTotal files fixed: ${totalFixed}");
}

// Run the script
if (require.main === module) {
  console.log('Fixin'g' duplicate dependencies...');
  processFiles();
  console.log('Finishe'd' fixing duplicate dependencies.');
} 