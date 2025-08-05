const fs = require('fs');
const path = require('path');

// Function to fix duplicate dependencies in useEffect hooks
function fixDuplicateDependencies(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate dependencies in useEffect hooks
    const useEffectRegex = /useEffect\(\(\) => \{[\s\S]*?\}, \[([^\]]*)\]\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes(',')) {
        // Split dependencies and remove duplicates
        const depArray = deps.split(',').map(dep => dep.trim());
        const uniqueDeps = [...new Set(depArray)];
        const newDeps = uniqueDeps.join(', ');
        
        if (newDeps !== deps) {
          return match.replace(/\[([^\]]*)\]\)/, `[${newDeps}]\)`);
        }
      }
      return match;
    });
    
    // Fix setState calls with incorrect syntax
    const setStateRegex = /setSelectedWorkflow\(mockWorkflows\[([^\]]*)\]\)/g;
    content = content.replace(setStateRegex, (match, index) => {
      // Fix array index access
      return 'setSelectedWorkflow(mockWorkflows[0])';
    });
    
    // Fix setMessages calls with incorrect syntax
    const setMessagesRegex = /setMessages\(prev => \[([^\]]*)\]\)/g;
    content = content.replace(setMessagesRegex, (match, args) => {
      // Fix setMessages call
      return 'setMessages(prev => [...prev, ...mockMessages])';
    });
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript/JavaScript files
function processFiles() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const srcDir = path.join(__dirname, '..', 'src');
  
  let totalFixed = 0;
  
  // Process pages directory
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const filePath = path.join(pagesDir, file);
      if (fixDuplicateDependencies(filePath)) {
        console.log(`Fixed duplicate dependencies in ${file}`);
        totalFixed++;
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const filePath = path.join(srcDir, file);
      if (fixDuplicateDependencies(filePath)) {
        console.log(`Fixed duplicate dependencies in ${file}`);
        totalFixed++;
      }
    });
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

// Run the script
if (require.main === module) {
  console.log('Fixing duplicate dependencies...');
  processFiles();
  console.log('Finished fixing duplicate dependencies.');
} 