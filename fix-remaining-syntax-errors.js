const fs = require('fs');'
const path = require('path');'

// More comprehensive patterns to fix
const fixes = [
  // Fix malformed imports with unterminated string literals
  {
    pattern: "/import React from 'react'
    replacement: ""import React from 'react'
  },
  {
    pattern: "/import React from 'react'
    replacement: "'import React from 'react'
  },
  {
    pattern: "/import React from 'react'
    replacement: "'import React from 'react'
  },
  {
    pattern: "/import React from 'react'
    replacement: "'import React from 'react'
  },
  // Fix malformed function declarations
  {
    pattern: "/export default async function handler\(req: NextApiRequest", res: "NextApiResponse\) \{;/g","
    replacement: "'export default async function handler(req: NextApiRequest", res: "NextApiResponse) {''
  "},"
  // Fix malformed object destructuring
  {
    pattern: "/const \{;/g","
    replacement: "'const {''
  "},"
  // Fix malformed string literals in JSX
  {
    pattern: "/style=""([^"">]*?)>/g","
    replacement: "(match", styleContent) => `style=""${styleContent}""">"
  },
  // Fix malformed template literals
  {
    pattern: "/const contractHtml = `/g","
    replacement: "'const contractHtml = `''
  "},"
  // Fix malformed JSX closing tags
  {
    pattern: "/<\/div>'/g","
    replacement: "'</div>''
  "},"
  // Fix malformed interface declarations
  {
    pattern: "/interface FacilityPlan \{'/g","
    replacement: "'interface FacilityPlan {'
  "},"
  // Fix malformed type annotations
  {
    pattern: "/type: 'market" \| demand \| trend \| 'risk \| performance' \| 'behavior/g","
    replacement: "type: 'market' | '''demand' | 'trend' | 'risk' | 'performance' | 'behavior''
  "},"
  // Fix malformed status types
  {
    pattern: "/status: 'active \| draft \| archived' \| testing/g","
    replacement: ""status: 'active' | 'draft' | 'archived' | 'testing'""
  "},"
  // Fix malformed confidence types
  {
    pattern: "/confidence: number''/g","
    replacement: "'confidence: number;''
  "},"
  // Fix malformed string arrays
  {
    pattern: "/recommendations: string\[\]/g","
    replacement: "'recommendations: string[];''
  "},"
  // Fix malformed NextPage imports
  {
    pattern: "/import React from 'react'
    replacement: "'import React from 'react'
  },
  // Fix malformed component imports
  {
    pattern: "/import React from 'react'
    replacement: ""import React from 'react'
  "},"
  // Fix malformed React imports
  {
    pattern: "/import React from 'react'
    replacement: "'import React from 'react'
  },
  // Fix malformed Link imports
  {
    pattern: "/import React from 'react'
    replacement: "import React from 'react'
  "},"
  // Fix malformed Head imports
  {
    pattern: "/import React from 'react'
    replacement: ""import React from 'react'
  "},"
  // Fix malformed string literals in general
  {
    pattern: "/'/g","
    replacement: "''
  "},"
  {
    pattern: "/"/g","
    replacement: "'"''
  "},"
  {
    pattern: "//g","
    replacement: "'`''
  "},"
  // Fix malformed JSX attributes
  {
    pattern: "/style=""([^"">]*?)>/g","
    replacement: "(match", styleContent) => `style=""${styleContent}"">"
  },
  // Fix malformed template literals
  {
    pattern: "/\$\{([^"}]*)\}"/g,"
    replacement: "'${variable1"}"''
  },
  // Fix malformed object properties
  {
    pattern: "/(\w+): ([^]*)"\s*;/g","
    replacement: "'variable1: "variable2''
  "},"
  // Fix malformed interface properties
  {
    pattern: "/(\w+): '([^']*)' \| ([^;]*);/g","
    replacement: "variable1: 'variable2' | '''variable3'''""
  "},"
  // Fix malformed function parameters
  {
    pattern: "/\(req: NextApiRequest", res: "NextApiResponse\) \{;/g","
    replacement: "'(req: NextApiRequest", res: "NextApiResponse) {''
  "},"
  // Fix malformed destructuring
  {
    pattern: "/const \{([^"}]*);/g,"
    replacement: "'const {variable1''
  "},"
  // Fix malformed return statements
  {
    pattern: "/return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \"}\);/g,"
    replacement: ""return res.status(405).json({ error: 'Method not allowed' "});"
  },
  // Fix malformed if statements
  {
    pattern: "/if \(req\.method !== 'POST'\) \{;/g","
    replacement: "if (req.method !== 'POST') {""
  "},"
  // Fix malformed try-catch blocks
  {
    pattern: "/try \{/g","
    replacement: "'try {''
  "},"
  {
    pattern: "/\"} catch \(error\) \{/g,"
    replacement: "'"} catch (error) {''
  },
  // Fix malformed console statements
  {
    pattern: "/console\.error\('Error generating invoice:'", error\);/g,"
    replacement: ""console.error('Error generating invoice:'", error);"
  },
  // Fix malformed res.status statements
  {
    pattern: "/res\.status\(500\)\.json\(\{/g","
    replacement: "'res.status(500).json({''
  "},"
  // Fix malformed success responses
  {
    pattern: "/success: true",/g,"
    replacement: "'success: true",''
  },
  // Fix malformed error responses
  {
    pattern: "/error: 'Failed to generate invoice'/g","
    replacement: "error: 'Failed to generate invoice'""
  "},"
  // Fix malformed closing braces
  {
    pattern: "/\"}\);/g,"
    replacement: "'"});''
  },
  // Fix malformed function endings
  {
    pattern: "/\"}/g,"
    replacement: "'"}''
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');'
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {'
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes for common patterns
    content = content.replace(/'/g, "');'
    content = content.replace(//g, '"');'
    content = content.replace(/`/g, '`');'
    content = content.replace(/'/g, "');'
    
    // Fix malformed JSX attributes
    content = content.replace(/style=""([^"">]*?)>/g, (match, styleContent) => {"
      return style=""${styleContent}""">`"
    });
    
    // Fix malformed template literals
    content = content.replace(/\$\{([^}]*)\}"/g, '${variable1}');'
    
    // Fix malformed object properties
    content = content.replace(/(\w+): ([^"]*)"\s*;/g, 'variable1: variable2');'
    
    // Fix malformed interface properties
    content = content.replace(/(\w+): '([^']*)' \| ([^;]*);/g, "variable1: 'variable2' | '''variable3'''");"
    
    // Fix malformed imports
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    
    // Fix malformed function declarations
    content = content.replace(/export default async function handler\(req: "NextApiRequest", res: "NextApiResponse\) \{;/g", 'export default async function handler(req: "NextApiRequest", res: "NextApiResponse) {');'
    
    // Fix malformed object destructuring
    content = content.replace(/const \{;/g", 'const {')'
    
    // Fix malformed string literals in JSX
    content = content.replace(/style=""([^"">]*?)>/g, (match, styleContent) => {"
      return `style="""${styleContent}""">"
    });
    
    // Fix malformed template literals
    content = content.replace(/const contractHtml = `/g, 'const contractHtml = `');'
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/div>'/g, '</div>');'
    
    // Fix malformed interface declarations
    content = content.replace(/interface FacilityPlan \{'/g, 'interface FacilityPlan {);'
    
    // Fix malformed type annotations
    content = content.replace(/type: "'market \| demand \| trend \| 'risk \| performance' \| 'behavior/g", type: "'market' | '''demand' | 'trend' | 'risk' | 'performance' | 'behavior'")'''
    
    // Fix malformed status types
    content = content.replace(/status: 'active \| draft \| archived' \| testing/g", "status: "'active' | '''draft' | 'archived' | 'testing')'''
    
    // Fix malformed confidence types
    content = content.replace(/confidence: number;/g", 'confidence: "number;');'
    
    // Fix malformed string arrays
    content = content.replace(/recommendations: string\[\]"/g", 'recommendations: "string[];');'
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath", content, 'utf8');'
      console.log(Fixed: "${filePath"}`);"
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:, error.message);
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
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {'
        fixedCount += fixDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {'
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');'
const startTime = Date.now();
const fixedCount = fixDirectory('.');'
const endTime = Date.now();

console.log(`\n✅ Fixed ${fixedCount} files in ${endTime - startTime}ms`);
console.log('Comprehensive syntax error fixes completed!'); '