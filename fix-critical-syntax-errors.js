const fs = require('fs');''
const path = require('path');''

// Critical patterns to fix based on the lint errors
const criticalFixes = [
  // Fix unterminated string literals in imports
  {
    pattern: /import React from 'react'
    replacement: "import React from 'react'
  },
  {
    pattern: /import React from 'react'
    replacement: 'import React from 'react'
  },
  {
    pattern: /import React from 'react'
    replacement: 'import React from 'react'
  },
  {
    pattern: /import React from 'react'
    replacement: 'import React from 'react'
  },
  // Fix malformed function declarations
  {
    pattern: /export default async function handler\\(req: NextApiRequest, res: NextApiResponse\\) \\{;/g,
    replacement: 'export default async function handler(req: NextApiRequest, res: NextApiResponse) {'''
  },
  // Fix malformed interface declarations
  {
    pattern: /interface.*\\{;\\s*id: string;/g,
    replacement: 'interface FacilityPlan {\n  id: string;'''
  },
  // Fix malformed JSX attributes
  {
    pattern: /style=\\{font-family: \"Arial, sans-serif\"; max-width: \"800px\"; margin: auto; padding: 20px; background: white; color: #333;\\}/g,""
    replacement: 'style={{fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "20px", background: "white", color: "#333"}}'''
  },
  // Fix malformed template literals
  {
    pattern: /const.*= `;\\s*<div style=font-family:/g,
    replacement: 'const contractHtml = `\n    <div style="font-family:'''
  },
  // Fix malformed object properties
  {
    pattern: /images: "\\{/g,""
    replacement: 'images: {'''
  },
  {
    pattern: /domains: \\['images\\.unsplash\\.com', 'via\\.placeholder\\.com', 'localhost'\\],/g,''
    replacement: "domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost'],"""
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');''
    let originalContent = content;
    let fixed = false;
    
    for (const fix of criticalFixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');''
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {''
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {''
        if (fixFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting critical syntax error fixes...');''
const totalFixed = processDirectory('.');''
console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Critical syntax error fixes completed!'); 