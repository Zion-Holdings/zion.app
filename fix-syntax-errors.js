const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix malformed imports
  {
    pattern: /import type \{ NextPage \} from ";next";/g,
    replacement: 'import type { NextPage } from "next";'
  },
  {
    pattern: /import ModernLayout from ';\.\.\/components\/layout\/ModernLayout'/g,
    replacement: "import ModernLayout from '../components/layout/ModernLayout';"
  },
  {
    pattern: /import \{ useState, useEffect, useMemo \} from ";react/g,
    replacement: 'import { useState, useEffect, useMemo } from "react";'
  },
  {
    pattern: /import Link from next\/link';/g,
    replacement: "import Link from 'next/link';"
  },
  // Fix malformed string literals in imports
  {
    pattern: /import type { NextApiRequest, NextApiResponse } from 'next'/g,
    replacement: "import type { NextApiRequest, NextApiResponse } from 'next'"
  },
  // Fix malformed function declarations
  {
    pattern: /export default async function handler\(req: NextApiRequest, res: NextApiResponse\) \{;/g,
    replacement: 'export default async function handler(req: NextApiRequest, res: NextApiResponse) {'
  },
  // Fix malformed object destructuring
  {
    pattern: /const \{;/g,
    replacement: 'const {'
  },
  // Fix malformed string literals in JSX
  {
    pattern: /style=""font-family: Arial, sans-serif;"/g,
    replacement: 'style="font-family: Arial, sans-serif;"'
  },
  // Fix malformed template literals
  {
    pattern: /const contractHtml = `/g,
    replacement: 'const contractHtml = `'
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<\/div">';/g,
    replacement: '</div>'
  },
  // Fix malformed interface declarations
  {
    pattern: /interface FacilityPlan \{'/g,
    replacement: 'interface FacilityPlan {
  },
  // Fix malformed type annotations
  {
    pattern: /type: 'market" \| demand \| trend \| 'risk \| performance' \| 'behavior/g,
    replacement: "type: 'market' | ''demand' | 'trend' | 'risk' | 'performance' | 'behavior'"
  },
  // Fix malformed status types
  {
    pattern: /status: 'active \| draft \| archived' \| testing/g,
    replacement: "status: 'active' | 'draft' | 'archived' | 'testing'"
  },
  // Fix malformed confidence types
  {
    pattern: /confidence: number';/g,
    replacement: 'confidence: number;'
  },
  // Fix malformed string arrays
  {
    pattern: /recommendations: "string\[\]";/g,
    replacement: 'recommendations: string[];'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    content = content.replace(/';/g, "';");
    content = content.replace(/";/g, '";');
    content = content.replace(/`/g, '`');
    content = content.replace(/';/g, "';");
    
    // Fix malformed JSX attributes
    content = content.replace(/style="([^">]*?)>/g, (match, styleContent) => {
      return `style=""${styleContent}"">`
    });
    
    // Fix malformed template literals
    content = content.replace(/\$\{([^}]*)\}";/g, '${$1}";');
    
    // Fix malformed object properties
    content = content.replace(/(\w+): "([^"]*)"\s*;/g, '$1: "$2";');
    
    // Fix malformed interface properties
    content = content.replace(/(\w+): '([^']*)' \| ([^;]*);/g, "$1: '$2' | ''$3'';");
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
        fixedCount += fixDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const startTime = Date.now();
const fixedCount = fixDirectory('.');
const endTime = Date.now();

console.log(`\n✅ Fixed ${fixedCount} files in ${endTime - startTime}ms`);
console.log('Syntax error fixes completed!'); 