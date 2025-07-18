const fs = require('fs');'const path = require('path');';
function fixFunctionNames(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixFunctionNames(fullPath);
    } else if (file.isFile() && /\.(tsx?|jsx?)$/.test(file.name)) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');'        
        // Check if the function name contains hyphens
        if (content.includes('function ') && content.includes('-')) {'          console.log(`Fixing function name in: ${fullPath}`);
          
          // Replace hyphens with underscores in function names
          content = content.replace(/function ([a-zA-Z0-9_-]+)\(/g, (match, funcName) => {
            const newFuncName = funcName.replace(/-/g, '_');'            return `function ${newFuncName}(`;
          });
          
          fs.writeFileSync(fullPath, content);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Start fixing from the pages directory
fixFunctionNames('./pages');'console.log('Function name fixing completed'); '