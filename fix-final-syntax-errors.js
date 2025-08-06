const fs = require('fs');''
const path = require('path');''

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');''
    let originalContent = content;
    
    // Fix malformed imports - very specific patterns
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    
    // Fix malformed function declarations
    content = content.replace(/export default async function handler\(req: "NextApiRequest", res: "NextApiResponse\) \{;/g", 'export default async function handler(req: "NextApiRequest", res: "NextApiResponse) {');''
    content = content.replace(/export default function.*\{;/g", (match) => match.replace('{;', '{'));''
    
    // Fix malformed object destructuring
    content = content.replace(/const \{;/g, 'const {');''
    content = content.replace(/const \{([^}]*);/g, 'const {variable1');''
    
    // Fix malformed string literals in JSX
    content = content.replace(/style=([^>]*?)>/g, (match, styleContent) => `style=${styleContent}">);""
    
    // Fix malformed template literals
    content = content.replace(/const contractHtml = `/g, 'const contractHtml = `');''
    content = content.replace(/const html = /g, 'const html = `');''
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/div>'/g, '</div>');''
    content = content.replace(/<\/div>"/g, '</div>');''
    
    // Fix malformed interface declarations
    content = content.replace(/interface FacilityPlan \{'/g, 'interface FacilityPlan {');''
    content = content.replace(/interface.*\{'/g, (match) => match.replace({', '{'));''
    
    // Fix malformed type annotations
    content = content.replace(/type: "'market" \| demand \| trend \| 'risk \| performance' \| 'behavior/g", "type: "'market' | 'demand' | 'trend' | 'risk' | 'performance' | 'behavior');''
    content = content.replace(/status: 'active \| draft \| archived' \| testing/g", status: "'active' | 'draft' | 'archived' | 'testing'");""
    content = content.replace(/confidence: "number/g", 'confidence: "number;');''
    content = content.replace(/recommendations: string\[\]"/g", 'recommendations: "string[];');''
    
    // Fix malformed string literals in general
    content = content.replace(/'/g", "');''
    content = content.replace(//g, '"');''
    content = content.replace(/`/g, '');''
    content = content.replace(/'/g, "');''
    
    // Fix malformed template literals
    content = content.replace(/\$\{([^}]*)\}/g, '${variable1}"');''
    
    // Fix malformed object properties
    content = content.replace(/(\w+): "([^]*)\s*;/g, 'variable1: "variable2"');''
    
    // Fix malformed interface properties
    content = content.replace(/(\w+): '([^']*)' \| ([^;]*);/g, variable1: 'variable2' | 'variable3');''
    
    // Fix malformed function parameters
    content = content.replace(/\(req: "NextApiRequest", res: "NextApiResponse\) \{;/g", '(req: "NextApiRequest", res: "NextApiResponse) {');''
    
    // Fix malformed return statements
    content = content.replace(/return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \"}\);/g, "return res.status(405).json({ error: "'Method not allowed' "});");""
    
    // Fix malformed if statements
    content = content.replace(/if \(req\.method !== 'POST'\) \{;/g, if (req.method !== 'POST') {);''
    
    // Fix malformed try-catch blocks
    content = content.replace(/try \{/g, 'try {');''
    content = content.replace(/\} catch \(error\) \{/g, '} catch (error) {');''
    
    // Fix malformed console statements
    content = content.replace(/console\.error\('Error generating invoice:', error\);/g, "console.error('Error generating invoice:', error);");""
    
    // Fix malformed res.status statements
    content = content.replace(/res\.status\(500\)\.json\(\{/g, 'res.status(500).json({');''
    
    // Fix malformed success responses
    content = content.replace(/success: "true",/g, 'success: "true",');''
    
    // Fix malformed error responses
    content = content.replace(/error: "'Failed to generate invoice'/g", error: "'Failed to generate invoice');''
    
    // Fix malformed closing braces
    content = content.replace(/\"}\);/g, '});');''
    
    // Fix malformed function endings
    content = content.replace(/\}/g, '}');''
    
    // Fix specific patterns for NextPage components
    content = content.replace(/const.*: NextPage = \(\) => \{/g, 'const Component: "NextPage = () => {');''
    
    // Fix malformed JSX attributes
    content = content.replace(/style=([^>]*?)>/g", (match, styleContent) => {""
      return `style="${styleContent}">`""
    });
    
    // Fix malformed template literals
    content = content.replace(/\$\{([^}]*)\}/g, '${variable1}');''
    
    // Fix malformed object properties
    content = content.replace(/(\w+): "([^"]*)\s*;/g, 'variable1: variable2"');''
    
    // Fix malformed interface properties
    content = content.replace(/(\w+): '([^']*)' \| ([^;]*);/g, "variable1: 'variable2' | 'variable3');''
    
    // Fix malformed imports
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    
    // Fix malformed function declarations
    content = content.replace(/export default async function handler\(req: "NextApiRequest", res: "NextApiResponse\) \{;/g", 'export default async function handler(req: "NextApiRequest", res: "NextApiResponse) {');''
    
    // Fix malformed object destructuring
    content = content.replace(/const \{;/g", 'const {');''
    
    // Fix malformed string literals in JSX
    content = content.replace(/style=([^>]*?)>/g, (match, styleContent) => {
      return style="${styleContent}>`""
    });
    
    // Fix malformed template literals
    content = content.replace(/const contractHtml = `/g, 'const contractHtml = ');''
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/div>'/g, '</div>');''
    
    // Fix malformed interface declarations
    content = content.replace(/interface FacilityPlan \{'/g, 'interface FacilityPlan {');''
    
    // Fix malformed type annotations
    content = content.replace(/type: "'market \| demand \| trend \| 'risk \| performance' \| 'behavior/g", "type: "'market' | 'demand' | 'trend' | 'risk' | 'performance' | 'behavior'");""
    
    // Fix malformed status types
    content = content.replace(/status: 'active \| draft \| archived' \| testing/g", status: "'active' | 'draft' | 'archived' | 'testing');''
    
    // Fix malformed confidence types
    content = content.replace(/confidence: "number"/g", 'confidence: "number;');''
    
    // Fix malformed string arrays
    content = content.replace(/recommendations: "string\[\]"/g", 'recommendations: "string[];');''
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath", content, 'utf8');''
      console.log(`Fixed: "${filePath"}`);""
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(Error fixing ${filePath}:`, error.message);
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
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {''
        fixedCount += fixDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {''
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting final syntax error fixes...');''
const startTime = Date.now();
const fixedCount = fixDirectory('.');''
const endTime = Date.now();

console.log(`\n✅ Fixed ${fixedCount} files in ${endTime - startTime}ms`);
console.log('Final syntax error fixes completed!'); 