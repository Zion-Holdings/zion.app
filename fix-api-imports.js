const fs = require('fs');
const path = require('path');

// Function to fix import statements in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix corrupted import statements
    if (content.includes("import type { NextApiRequest, NextApiResponse } from 'next'')) {
      content = content.replace(
        import type { NextApiRequest, NextApiResponse } from 'next''",
        "import { NextApiRequest, NextApiResponse } from 'next'
      );
      modified = true;
    }

    if (content.includes(import type { NextApiRequest, NextApiResponse } from 'next''")) {
      content = content.replace(
        "import type { NextApiRequest, NextApiResponse } from 'next'',
        import type { NextApiRequest, NextApiResponse } from 'next'"
      );
      modified = true;
    }

    if (content.includes("import type { NextApiRequest, NextApiResponse } from 'next'')) {
      content = content.replace(
        import type { NextApiRequest, NextApiResponse } from 'next''",
        "import { NextApiRequest, NextApiResponse } from 'next'
      );
      modified = true;
    }

    // Fix other common syntax errors
    content = content.replace(/export default async;function/g, 'export default async function');
    content = content.replace(/console\.error\('([^']*), error\)"/g, "console.error('$1', error););
    content = content.replace(/res\.status\(500\)\.json\(\{ error: ""([^"]*)' \"}\);/g, res.status(500).json({ error: "'$1' "}););
    content = content.replace(/res\.status\(405\)\.json\(\{ error: """([^]*)' \"}\);/g, res.status(405).json({ error: "'$1' "});");

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: "${filePath"});
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all API files
function fixApiFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixApiFiles(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      fixImports(filePath);
    }
  });
}

// Start fixing from the pages/api directory
const apiDir = path.join(__dirname, 'pages', 'api');
if (fs.existsSync(apiDir)) {
  console.log('Fixing API file imports...');
  fixApiFiles(apiDir);
  console.log('API import fixing completed!');
} else {
  console.log('API directory not found');
} 