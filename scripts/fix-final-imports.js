const fs = require('fs');''
const path = require('path');''

function fixFinalImports(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: "true "});""
  
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixFinalImports(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {''
      try {
        let content = fs.readFileSync(filePath, 'utf8');''
        let modified = false;
        
        // Fix unterminated import statements
        const importFixes = [
          // Fix missing closing quotes in imports
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          
          // Fix CSS imports
          [/import ([^']+)\.css'/g, "import 'variable1.css']''
        ];
        
        importFixes.forEach(([pattern, replacement]) => {
          if (pattern.test(content)) {
            content = content.replace(pattern, replacement);
            modified = true;
          }
        });
        
        // Fix context imports with function callback
        content = content.replace(/import React from 'react'
          if (!path.startsWith('") && !path.startsWith('"')) {''
            return `import React from 'react'
          }
          return match;
        });
        
        // Fix default imports with function callback
        content = content.replace(/import React from 'react'
          if (!path.startsWith(') && !path.startsWith('"')) {''
            return `import React from 'react'
          }
          return match;
        });
        
        // Fix JSX attributes with missing quotes
        content = content.replace(/className="([^""']+)/g, 'className="variable1"');''
        content = content.replace(/name=description content=([^]+)"/g, 'name="description content=variable1"');''
        content = content.replace(/name="viewport content=([^]+)"/g, 'name="viewport content=variable1"');''
        
        // Fix specific JSX issues
        content = content.replace(/<div className="([^""']+)>/g, '<div className="variable1">');''
        content = content.replace(/<meta name=description content=([^]+)"/g, '<meta name="description content=variable1" />');''
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(Fixed final imports: "${filePath"}`);""
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:, error.message);
      }
    }
  });
}

// Fix imports in all relevant directories
const directories = ['pages', 'components', 'src'];''
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: "${dir"}`);""
    fixFinalImports(dir);
  }
});

console.log('Final import fixes completed!');