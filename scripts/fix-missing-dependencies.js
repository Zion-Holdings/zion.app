const fs = require('fs');
const path = require('path');

// Function to fix missing dependencies in useEffect hooks
function fixMissingDependencies(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix useEffect hooks with missing dependencies by removing them
    const useEffectRegex = /useEffect\(\(\) => \{[\s\S]*?\}, \[([^\]]*)\]\)/g;
    content = content.replace(useEffectRegex, (match, deps) => {
      if (deps.includes('mock')) {
        // Remove all mock dependencies
        const depArray = deps.split(',').map(dep => dep.trim());
        const validDeps = depArray.filter(dep => !dep.includes('mock'));
        const newDeps = validDeps.length > 0 ? validDeps.join(', ') : '';
        
        if (newDeps !== deps) {
          return match.replace(/\[([^\]]*)\]\)/, `[${newDeps}]\)`);
        }
      }
      return match;
    });
    
    // Fix setMessages calls with incorrect syntax
    const setMessagesRegex = /setMessages\(prev => \[\.\.\.prev, \.\.\.mockMessages\]\)/g;
    content = content.replace(setMessagesRegex, (match) => {
      return 'setMessages(prev => [...prev])';
    });
    
    // Fix setSelectedProject calls with incorrect syntax
    const setSelectedProjectRegex = /setSelectedProject\(mockProjects\[([^\]]*)\]\)/g;
    content = content.replace(setSelectedProjectRegex, (match) => {
      return 'setSelectedProject(mockProjects[0])';
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
      if (fixMissingDependencies(filePath)) {
        console.log(`Fixed missing dependencies in ${file}`);
        totalFixed++;
      }
    });
  }
  
  // Process src directory
  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    files.forEach(file => {
      const filePath = path.join(srcDir, file);
      if (fixMissingDependencies(filePath)) {
        console.log(`Fixed missing dependencies in ${file}`);
        totalFixed++;
      }
    });
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

// Run the script
if (require.main === module) {
  console.log('Fixing missing dependencies...');
  processFiles();
  console.log('Finished fixing missing dependencies.');
} 