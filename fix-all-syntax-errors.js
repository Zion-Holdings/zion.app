const fs = require('fs');
const path = require('path');

// Comprehensive patterns to fix all syntax errors
const fixes = [
  // Fix next.config.js
  {
    pattern: /images: "\\{/g,
    replacement: 'images: {'
  },
  {
    pattern: /domains: \\['images\\.unsplash\\.com', 'via\\.placeholder\\.com', 'localhost'\\],/g,
    replacement: "domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost'],"
  },
  // Fix malformed imports
  {
    pattern: /import React from 'react';/g,
    replacement: "import React from 'react';"
  },
  {
    pattern: /import React from 'react';/g,
    replacement: 'import React from \'react\';'
  },
  {
    pattern: /import React from 'react';/g,
    replacement: 'import React from \'react\';'
  },
  {
    pattern: /import React from 'react';/g,
    replacement: 'import React from \'react\';'
  },
  // Fix malformed function declarations
  {
    pattern: /export default async function handler\\(req: NextApiRequest, res: NextApiResponse\\) \\{;/g,
    replacement: 'export default async function handler(req: NextApiRequest, res: NextApiResponse) {'
  },
  // Fix malformed string literals in JSX
  {
    pattern: /style=\\{font-family: \"Arial, sans-serif\"; max-width: \"800px\"; margin: auto; padding: 20px; background: white; color: #333;\\}/g,
    replacement: 'style={{fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "20px", background: "white", color: "#333"}}'
  },
  // Fix malformed template literals
  {
    pattern: /const contractHtml = `;\\s*<div style=font-family: \"Arial, sans-serif\"; max-width: \"800px\"; margin: auto; padding: 20px; background: white; color: #333;>/g,
    replacement: 'const contractHtml = `\n    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: white; color: #333;">'
  },
  // Fix malformed JSX attributes
  {
    pattern: /style=\\{display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #e0e0e0; padding-bottom: 20px;\\}/g,
    replacement: 'style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "2px solid #e0e0e0", paddingBottom: "20px"}}'
  },
  // Fix malformed interface declarations
  {
    pattern: /interface FacilityPlan \\{;\\s*id: string;\\s*title: string;\\s*description: string;\\s*type: 'market' \\| 'demand' \\| 'trend' \\| 'risk' \\| 'performance' \\| 'behavior';\\s*status: 'active' \\| 'draft' \\| 'archived' \\| 'testing';\\s*confidence: number;\\s*accuracy: number;\\s*timeframe: string;\\s*dataPoints: number;\\s*lastUpdated: Date;\\s*aiAnalysis: AIPredictionAnalysis;\\s*\\}/g,
    replacement: 'interface FacilityPlan {\n  id: string;\n  title: string;\n  description: string;\n  type: \'market\' | \'demand\' | \'trend\' | \'risk\' | \'performance\' | \'behavior\';\n  status: \'active\' | \'draft\' | \'archived\' | \'testing\';\n  confidence: number;\n  accuracy: number;\n  timeframe: string;\n  dataPoints: number;\n  lastUpdated: Date;\n  aiAnalysis: AIPredictionAnalysis;\n}'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;
    
    for (const fix of fixes) {
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

console.log('Starting comprehensive syntax error fixes...');
const totalFixed = processDirectory('.');
console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Syntax error fixes completed!'); 