const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all API files with the syntax error
const apiFiles = glob.sync('pages/api/**/*.ts');

console.log(`Found ${apiFiles.length} API files to fix...`);

apiFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, utf8');
    
    // Fix the unterminated string constant
    content = content.replace(
      "import type { NextApiRequest, NextApiResponse } from next;";,""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""import type { NextApiRequest, NextApiResponse } from next';"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    );
    
    // Add missing closing brace if needed
    if (!content.trim().endsWith('})) {
      content = content.trim() + \n};
    }
    
    // Fix missing closing brace after if statement
    content = content.replace(
      /if \(req\.method !== GET' && req\.method !== POST'\) \{\s+return res\.status\(405\)\.json\(\{ error: Method not allowed' \}\);\s*\n\s*\/\/ Mock API response/,
      "if (req.method !== GET' && req.method !== POST') {\n    return res.status(405).json({ error: Method not allowed' });\n  }\n\n  // Mock API response"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('🎉 API syntax errors fixed!'); 