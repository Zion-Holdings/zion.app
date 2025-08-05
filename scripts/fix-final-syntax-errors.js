const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixSyntaxErrors(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix unterminated string literals
        content = content.replace(/import React from 'react/g, "import React from 'react'");
        content = content.replace(/import \{ ([^}]+) \} from 'react/g, "import { $1 } from 'react'");
        content = content.replace(/import ([^']+) from '([^']+)/g, "import $1 from '$2'");
        content = content.replace(/import \{ ([^}]+) \} from '([^']+)/g, "import { $1 } from '$2'");
        
        // Fix JSX attributes
        content = content.replace(/className=([^"']+)/g, 'className="$1"');
        content = content.replace(/name="description content=([^"]+)"/g, 'name="description" content="$1"');
        content = content.replace(/name="viewport" content=([^"]+)"/g, 'name="viewport" content="$1"');
        
        // Fix specific syntax issues
        content = content.replace(/<div className=([^"']+)>/g, '<div className="$1">');
        content = content.replace(/<meta name="description content=([^"]+)"/g, '<meta name="description" content="$1" />');
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed syntax errors: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Fix syntax errors in all relevant directories
const directories = ['pages', 'components', 'src'];
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    fixSyntaxErrors(dir);
  }
});

console.log('Final syntax error fixes completed!');