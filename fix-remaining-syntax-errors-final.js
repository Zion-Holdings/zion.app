const fs = require('fs');
const path = require('path');

// Final comprehensive patterns to fix all remaining syntax errors
const finalFixes = [
  // Fix malformed imports with unterminated string literals
  {
    pattern: /import type { NextApiRequest, NextApiResponse } from 'next'/g,
    replacement: "import type { NextApiRequest, NextApiResponse } from 'next'"
  },
  {
    pattern: /import.*from \";next\";/g,
    replacement: 'import type { NextPage } from \"next\";'
  },
  {
    pattern: /import { useState, useEffect, useMemo } from "react";/g,
    replacement: 'import { useState, useEffect, useMemo } from \"react\";'
  },
  {
    pattern: /import.*from \";react/g,
    replacement: 'import { useState, useEffect, useMemo } from \"react\";'
  },
  // Fix malformed function declarations
  {
    pattern: /export default async function handler\\(req: NextApiRequest, res: NextApiResponse\\) \\{;/g,
    replacement: 'export default async function handler(req: NextApiRequest, res: NextApiResponse) {'
  },
  // Fix malformed interface declarations
  {
    pattern: /interface.*\\{;\\s*id: string;/g,
    replacement: 'interface FacilityPlan {\n  id: string;'
  },
  // Fix malformed JSX attributes
  {
    pattern: /style=\\{font-family: \"Arial, sans-serif\"; max-width: \"800px\"; margin: auto; padding: 20px; background: white; color: #333;\\}/g,
    replacement: 'style={{fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "20px", background: "white", color: "#333"}}'
  },
  // Fix malformed template literals
  {
    pattern: /const.*= `;\\s*<div style=font-family:/g,
    replacement: 'const contractHtml = `\n    <div style="font-family:'
  },
  // Fix malformed object properties
  {
    pattern: /images: "\\{/g,
    replacement: 'images: {'
  },
  {
    pattern: /domains: \\['images\\.unsplash\\.com', 'via\\.placeholder\\.com', 'localhost'\\],/g,
    replacement: "domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost'],"
  },
  // Fix malformed imports in pages
  {
    pattern: /import type \\{ NextPage \\} from \";next\";/g,
    replacement: 'import type { NextPage } from \"next\";'
  },
  {
    pattern: /import ModernLayout from ';\\.\\.\/components\/layout\/ModernLayout'/g,
    replacement: "import ModernLayout from '../components/layout/ModernLayout';"
  },
  {
    pattern: /import \\{ useState, useEffect, useMemo \\} from \";react/g,
    replacement: 'import { useState, useEffect, useMemo } from \"react\";'
  },
  {
    pattern: /import Link from next\\/link';/g,
    replacement: "import Link from 'next/link';"
  },
  // Fix malformed JSX syntax
  {
    pattern: /<div style=font-family: \"Arial, sans-serif\"; max-width: \"800px\"; margin: auto; padding: 20px; background: white; color: #333;>/g,
    replacement: '<div style={{fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "20px", background: "white", color: "#333"}}>'
  },
  // Fix malformed string literals in JSX
  {
    pattern: /style=\\{display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #e0e0e0; padding-bottom: 20px;\\}/g,
    replacement: 'style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "2px solid #e0e0e0", paddingBottom: "20px"}}'
  },
  // Fix malformed template literals in JSX
  {
    pattern: /\\$\\{notes \\? \";\\s*<div style=margin-bottom: \"30px\";>/g,
    replacement: '${notes ? `\n        <div style={{marginBottom: "30px"}}>'
  },
  // Fix malformed object declarations
  {
    pattern: /const \\{;\\s*invoiceNumber,/g,
    replacement: 'const {\n    invoiceNumber,'
  },
  // Fix malformed function calls
  {
    pattern: /res\\.status\\(200\\)\\.json\\(\\{ invoice \\}\\)\";/g,
    replacement: 'res.status(200).json({ invoice });'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;
    
    for (const fix of finalFixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
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
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
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

console.log('Starting final comprehensive syntax error fixes...');
const totalFixed = processDirectory('.');
console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Final syntax error fixes completed!'); 