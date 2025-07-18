const fs = require('fs');
const path = require('path');

function fixMergeConflicts(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixMergeConflicts(fullPath);
    } else if (file.isFile() && /\.(tsx?|jsx?)$/.test(file.name)) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (content.includes('<<<<<<< HEAD')) {
          console.log(`Fixing merge conflicts in: ${fullPath}`);
          
          // Remove merge conflict markers and keep HEAD version
          content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
          
          // Remove any remaining conflict markers
          content = content.replace(/<<<<<<< HEAD.*$/gm, '');
          content = content.replace(/=======.*$/gm, '');
          content = content.replace(/>>>>>>> [^\n]*$/gm, '');
          
          // Clean up any empty lines
          content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
          
          fs.writeFileSync(fullPath, content);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Start fixing from the src directory
fixMergeConflicts('./src');
fixMergeConflicts('./pages');
console.log('Merge conflict fixing completed'); 