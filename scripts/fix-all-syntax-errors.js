#!/usr/bin/env node
;
const fs = require('fs');
const path = require('path');

function fixAllSyntaxErrors(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixAllSyntaxErrors(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix unterminated string literals in imports
        content = content.replace(/import React from 'react/g, "import React from 'react'");
        content = content.replace(/import \{ ([^}]+) \} from 'react/g, "import { $1 } from 'react'");
        content = content.replace(/import ([^']+) from '([^']+)/g, "import $1 from '$2'");
        content = content.replace(/import \{ ([^}]+) \} from '([^']+)/g, "import { $1 } from '$2'");
        content = content.replace(/import type \{ ([^}]+) \} from '([^']+)/g, "import type { $1 } from '$2'");
        
        // Fix missing quotes in JSX attributes
        content = content.replace(/className=([^"']+)/g, 'className="$1"');
        content = content.replace(/name="description content=([^"]+)"/g, 'name="description" content="$1"');
        content = content.replace(/name="viewport" content=([^"]+)"/g, 'name="viewport" content="$1"');
        content = content.replace(/content=([^"']+)/g, 'content="$1"');
        content = content.replace(/title=([^"']+)/g, 'title="$1"');
        content = content.replace(/alt=([^"']+)/g, 'alt="$1"');
        content = content.replace(/src=([^"']+)/g, 'src="$1"');
        content = content.replace(/href=([^"']+)/g, 'href="$1"');
        
        // Fix specific JSX issues
        content = content.replace(/<div className=([^"']+)>/g, '<div className="$1">');
        content = content.replace(/<meta name="description content=([^"]+)"/g, '<meta name="description" content="$1" />');
        content = content.replace(/<meta name="viewport" content=([^"]+)"/g, '<meta name="viewport" content="$1" />');
        content = content.replace(/<meta name="description" content=([^"]+)"/g, '<meta name="description" content="$1" />');
        
        // Fix unterminated string literals in JSX
        content = content.replace(/<title>([^<]*)<\/title>/g, (match, title) => {
          if (!title.includes('"') && !title.includes("'")) {
            return `<title>${title}</title>`;
          }
          return match;
        });
        
        // Fix missing semicolons
        content = content.replace(/([^;])\nimport/g, '$1;\nimport');
        content = content.replace(/([^;])\nconst/g, '$1;\nconst');
        content = content.replace(/([^;])\nlet/g, '$1;\nlet');
        content = content.replace(/([^;])\nvar/g, '$1;\nvar');
        
        // Fix missing closing braces
        content = content.replace(/\{([^}]*)$/gm, '{$1}');
        
        // Fix missing closing parentheses
        content = content.replace(/\(([^)]*)$/gm, '($1)');
        
        // Fix missing closing brackets
        content = content.replace(/\[([^\]]*)$/gm, '[$1]');
        
        // Fix missing closing quotes
        content = content.replace(/'([^']*)$/gm, "'$1'");
        content = content.replace(/"([^"]*)$/gm, '"$1"');
        
        // Fix specific common patterns
        content = content.replace(/export default function/g, 'export default function');
        content = content.replace(/export default const/g, 'export default const');
        content = content.replace(/export default class/g, 'export default class');
        
        // Fix React component declarations
        content = content.replace(/const ([^=]+) = \(\) => \{/g, 'const $1 = () => {');
        content = content.replace(/const ([^=]+) = \(([^)]*)\) => \{/g, 'const $1 = ($2) => {');
        
        // Fix TypeScript interface declarations
        content = content.replace(/interface ([^{]+) \{/g, 'interface $1 {');
        
        // Fix function declarations
        content = content.replace(/function ([^(]+)\(([^)]*)\) \{/g, 'function $1($2) {');
        
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
    fixAllSyntaxErrors(dir);
  }
});

console.log('All syntax error fixes completed!');