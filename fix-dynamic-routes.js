const fs = require('fs');'const path = require('path');';
function fixDynamicRoutes(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixDynamicRoutes(fullPath);
    } else if (file.isFile() && /\.(tsx?|jsx?)$/.test(file.name)) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');'        
        // Check if this is a dynamic route (contains [])
        if (file.name.includes('[') && file.name.includes(']')) {'          console.log(`Fixing dynamic route: ${fullPath}`);
          
          // Extract the parameter name from the filename
          const paramMatch = file.name.match(/\[([^\]]+)\]/);
          if (paramMatch) {
            const paramName = paramMatch[1];
            const componentName = paramName.charAt(0).toUpperCase() + paramName.slice(1) + 'Page';'            
            // Replace the function name
            content = content.replace(/export default function \[([^\]]+)\]\(/g, 
              `export default function ${componentName}(`);
            
            fs.writeFileSync(fullPath, content);
          }
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Start fixing from the pages directory
fixDynamicRoutes('./pages');'console.log('Dynamic route fixing completed'); '