const fs = require('fs');
const path = require('path');
;
function fixFinalImports(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixFinalImports(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix unterminated import statements
        const importFixes = [
          // Fix missing closing quotes in imports
          [/import type \{ AppProps \} from 'next\/app;/g, "import type { AppProps } from 'next/app';"],
          [/import React from 'react;/g, "import React from 'react';"],
          [/import React, \{ ([^}]+) \} from 'react;/g, "import React, { $1 } from 'react';"],
          [/import \{ NextPage \} from next';/g, "import { NextPage } from 'next';"],
          [/import Head from 'next\/head;/g, "import Head from 'next/head';"],
          [/import Link from next\/link';/g, "import Link from 'next/link';"],
          [/import \{ useRouter \} from next\/router';/g, "import { useRouter } from 'next/router';"],
          [/import Image from 'next\/image;/g, "import Image from 'next/image';"],
          
          // Fix CSS imports
          [/import ([^']+)\.css';/g, "import '$1.css';"]
        ];
        
        importFixes.forEach(([pattern, replacement]) => {
          if (pattern.test(content)) {
            content = content.replace(pattern, replacement);
            modified = true;
          }
        });
        
        // Fix context imports with function callback
        content = content.replace(/import \{ ([^}]+) \} from ([^']+);/g, (match, imports, path) => {
          if (!path.startsWith("'") && !path.startsWith('"')) {
            return `import { ${imports} } from '${path}';`;
          }
          return match;
        });
        
        // Fix default imports with function callback
        content = content.replace(/import ([^']+) from ([^']+);/g, (match, importName, path) => {
          if (!path.startsWith("'") && !path.startsWith('"')) {
            return `import ${importName} from '${path}';`;
          }
          return match;
        });
        
        // Fix JSX attributes with missing quotes
        content = content.replace(/className=([^"']+)/g, 'className="$1"');
        content = content.replace(/name="description content=([^"]+)"/g, 'name="description" content="$1"');
        content = content.replace(/name="viewport" content=([^"]+)"/g, 'name="viewport" content="$1"');
        
        // Fix specific JSX issues
        content = content.replace(/<div className=([^"']+)>/g, '<div className="$1">');</div>
        content = content.replace(/<meta name="description content=([^"]+)"/g, '<meta name="description" content="$1" />');
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed final imports: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Fix imports in all relevant directories;
const directories = ['pages', 'components', 'src'];
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    fixFinalImports(dir);
  }
});

console.log('Final import fixes completed!'); </div>