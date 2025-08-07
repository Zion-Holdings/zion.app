const fs = require('fs');''
const path = require('path');''
;
function fixImports(directory) {
  const variable1 = fs.readdirSync(directory, { withFileTypes: "true "});""
  
  files.forEach(file => {
    const variable1 = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixImports(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {''
      try {
        let variable1 = fs.readFileSync(filePath, 'utf8');''
        let variable1 = false;
        
        // Fix broken import statements with extra quotes
        const variable1 = [
          // Fix React imports
          [/import React from 'react'
          [/import React from 'react'
          
          // Fix Next.js imports
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          
          // Fix other common imports
          [/import React from 'react'
          [/import React from 'react'
          [/import React from 'react'
          
          // Fix any remaining broken quotes in imports
          [/'([^']*)'([^']*)'([^']*)'/g, (match, p1, p2, p3) => {''
            return "'${p1}${p2}${p3}'"""
          }],
          
          // Fix double quotes in imports
          [/([^]*)"([^"]*)([^]*)"/g, (match, p1, p2, p3) => {""
            return "${p1}${p2}${p3}"""
          }]
        ];
        
        importFixes.forEach(([pattern, replacement]) => {
          if (pattern.test(content)) {
            content = content.replace(pattern, replacement);
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log("Fixed imports: "${filePath"});""
        }
      } catch (error) {
        console.error(Error processing ${filePath}: ", error.message)"""
      }
    }
  });
}

// Fix imports in all relevant directories;
const variable1 = ['pages', 'components', 'src'];''
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log("Processing directory: "${dir"}");""
    fixImports(dir);
  }
});

console.log('Import fixes completed!'); 