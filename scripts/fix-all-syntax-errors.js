#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common fixes for JSX syntax errors
const fixes = [
  // Fix missing React imports
  {
    pattern: /^(?!import React)/m,
    replacement: 'import React from \'react\';\n',
    condition: (content) => content.includes('JSX') && !content.includes('import React')
  },
  
  // Fix JSX fragment syntax
  {
    pattern: /<>([\s\S]*?)<\/>/g,
    replacement: (match, innerContent) => {
      // Check if there are unclosed divs or other tags
      const openTags = (innerContent.match(/<([a-zA-Z][a-zA-Z0-9]*)/g) || []).length;
      const closeTags = (innerContent.match(/<\/([a-zA-Z][a-zA-Z0-9]*)/g) || []).length;
      
      if (openTags !== closeTags) {
        // If tags are unbalanced, wrap in a div
        return `<div>${innerContent}</div>`;
      }
      return match;
    }
  },
  
  // Fix missing closing tags
  {
    pattern: /<div([^>]*)>([\s\S]*?)(?=<div|$)/g,
    replacement: (match, attributes, innerContent) => {
      const openDivs = (innerContent.match(/<div/g) || []).length;
      const closeDivs = (innerContent.match(/<\/div/g) || []).length;
      
      if (openDivs > closeDivs) {
        // Add missing closing div
        return `<div${attributes}>${innerContent}</div>`;
      }
      return match;
    }
  },
  
  // Fix className syntax errors
  {
    pattern: /className=([^>]*?)(?=\s|>)/g,
    replacement: (match, className) => {
      if (!className.includes('"') && !className.includes("'")) {
        return `className="${className.trim()}"`;
      }
      return match;
    }
  },
  
  // Fix missing semicolons after imports
  {
    pattern: /import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*(?!;)/g,
    replacement: 'import $1 from \'$2\';'
  },
  
  // Fix unclosed JSX tags
  {
    pattern: /<([A-Z][a-zA-Z]*)([^>]*)\s*>(?!\s*<\/\1>)/g,
    replacement: (match, tagName, attributes) => {
      const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
      if (selfClosingTags.includes(tagName.toLowerCase())) {
        return `<${tagName}${attributes} />`;
      }
      return match;
    }
  },
  
  // Fix missing commas in object arrays
  {
    pattern: /(\{[^}]*\})\s*(\{[^}]*\})/g,
    replacement: '$1,\n$2'
  },
  
  // Fix useEffect dependencies
  {
    pattern: /useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]*)\}\s*,\s*\[\s*\]\s*\)/g,
    replacement: 'useEffect(() => {\n  $1\n}, [])'
  },
  
  // Fix missing type annotations
  {
    pattern: /const\s+([a-zA-Z][a-zA-Z0-9]*)\s*=\s*useState\s*\(\s*\)/g,
    replacement: 'const [$1, set$1] = useState<any>([])'
  },
  
  // Fix Link component usage
  {
    pattern: /<a\s+href=([^>]*)>/g,
    replacement: '<Link href=$1>'
  },
  {
    pattern: /<Link\s+href=([^>]*)>([^<]*)<\/a>/g,
    replacement: '<Link href=$1>$2</Link>'
  },
  
  // Fix specific JSX structure issues
  {
    pattern: /return\s*\(\s*<>\s*<div/g,
    replacement: 'return (\n    <div'
  },
  {
    pattern: /<\/div>\s*<>\s*\)/g,
    replacement: '</div>\n  )'
  },
  
  // Fix missing Head component import
  {
    pattern: /import React from 'react';/,
    replacement: 'import React from \'react\';\nimport Head from \'next/head\';',
    condition: (content) => content.includes('<Head>') && !content.includes('import Head')
  },
  
  // Fix missing motion import
  {
    pattern: /import React from 'react';/,
    replacement: 'import React from \'react\';\nimport { motion } from \'framer-motion\';',
    condition: (content) => content.includes('<motion.') && !content.includes('import { motion }')
  },
  
  // Fix missing Link import
  {
    pattern: /import React from 'react';/,
    replacement: 'import React from \'react\';\nimport Link from \'next/link\';',
    condition: (content) => content.includes('<Link') && !content.includes('import Link')
  },
  
  // Fix specific syntax errors in className attributes
  {
    pattern: /className="([^"]*)"([^"]*)"([^"]*)"/g,
    replacement: 'className="$1$2$3"'
  },
  
  // Fix missing closing braces
  {
    pattern: /const\s+([A-Z][a-zA-Z]*)\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{([^}]*)$/gm,
    replacement: 'const $1: NextPage = () => {\n  $2\n}'
  },
  
  // Fix useEffect cleanup
  {
    pattern: /useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]*)\}\s*,\s*\[\s*\]\s*\)/g,
    replacement: 'useEffect(() => {\n  $1\n}, [])'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixesApplied = 0;
    
    // Apply each fix
    fixes.forEach((fix, index) => {
      const originalContentBeforeFix = content;
      
      if (fix.condition && !fix.condition(content)) {
        return; // Skip this fix if condition is not met
      }
      
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
      
      if (content !== originalContentBeforeFix) {
        fixesApplied++;
        console.log(`  Applied fix ${index + 1} to ${path.basename(filePath)}`);
      }
    });
    
    // Additional specific fixes for common issues
    content = content.replace(/className="([^"]*)"([^"]*)"([^"]*)"/g, 'className="$1$2$3"');
    content = content.replace(/className=([^>]*?)(?=\s|>)/g, (match, className) => {
      if (!className.includes('"') && !className.includes("'")) {
        return `className="${className.trim()}"`;
      }
      return match;
    });
    
    // Write the fixed content
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`  Applied ${fixesApplied} fixes to ${path.basename(filePath)}`);
      return fixesApplied;
    }
    
    return 0;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return 0;
  }
}

function fixAllFiles() {
  console.log('Starting comprehensive syntax fix...');
  
  const tsxFiles = glob.sync('pages/**/*.tsx');
  let totalFixes = 0;
  let filesProcessed = 0;
  
  tsxFiles.forEach(file => {
    console.log(`Processing ${file}...`);
    const fixesApplied = fixFile(file);
    totalFixes += fixesApplied;
    filesProcessed++;
  });
  
  console.log(`\nComprehensive syntax fix completed!`);
  console.log(`Files processed: ${filesProcessed}`);
  console.log(`Total fixes applied: ${totalFixes}`);
  
  return { filesProcessed, totalFixes };
}

// Run the fix if this script is executed directly
if (require.main === module) {
  fixAllFiles();
}

module.exports = { fixAllFiles, fixFile }; 