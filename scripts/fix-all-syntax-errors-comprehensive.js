const fs = require('fs');
const path = require('path');

// Function to recursively find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Common syntax error patterns and their fixes
const syntaxFixes = [
  // Fix unterminated string literals in import statements
  {
    pattern: /import.*from\s+['"][^'"]*['"];?['"]/g,
    replacement: (match) => {
      return match.replace(/['"];?['"]$/, "'");
    }
  },
  // Fix unterminated string literals in general
  {
    pattern: /['"][^'"]*['"];?['"]/g,
    replacement: (match) => {
      return match.replace(/['"];?['"]$/, "'");
    }
  },
  // Fix extra semicolons after interface definitions
  {
    pattern: /interface\s+\w+\s*\{[^}]*\};/g,
    replacement: (match) => {
      return match.replace(/;$/, '');
    }
  },
  // Fix malformed async function declarations
  {
    pattern: /export default async function handler\(;/g,
    replacement: 'export default async function handler('
  },
  // Fix malformed parameter declarations
  {
    pattern: /req: NextApiRequest,;/g,
    replacement: 'req: NextApiRequest,'
  },
  {
    pattern: /res: NextApiResponse;/g,
    replacement: 'res: NextApiResponse)'
  },
  // Fix malformed object property assignments
  {
    pattern: /apiKey: "process\.env\.OPENAI_API_KEY,"/g,
    replacement: 'apiKey: process.env.OPENAI_API_KEY,'
  },
  // Fix malformed type definitions
  {
    pattern: /type Data = {;/g,
    replacement: 'type Data = {'
  },
  {
    pattern: /success: "boolean";/g,
    replacement: 'success: boolean;'
  },
  // Fix malformed import statements
  {
    pattern: /import OpenAI from open'ai;/g,
    replacement: "import OpenAI from 'openai';"
  },
  {
    pattern: /import OpenAI from openai;/g,
    replacement: "import OpenAI from 'openai';"
  },
  // Fix malformed interface property definitions
  {
    pattern: /type: 'technology' \| ''process' \| 'organizational' \| 'cultural''/g,
    replacement: "type: 'technology' | 'process' | 'organizational' | 'cultural'"
  },
  {
    pattern: /status: 'planned' \| ''in-progress' \| 'completed' \| 'cancelled''/g,
    replacement: "status: 'planned' | 'in-progress' | 'completed' | 'cancelled'"
  },
  {
    pattern: /priority: 'low' \| ''medium' \| 'high' \| 'critical''/g,
    replacement: "priority: 'low' | 'medium' | 'high' | 'critical'"
  },
  {
    pattern: /impact: 'low' \| ''medium' \| 'high''/g,
    replacement: "impact: 'low' | 'medium' | 'high'"
  },
  {
    pattern: /type: 'service' \| ''employment' \| 'partnership' \| 'nda' \| 'license''/g,
    replacement: "type: 'service' | 'employment' | 'partnership' | 'nda' | 'license'"
  },
  {
    pattern: /status: 'active' \| ''inactive' \| 'on-leave''/g,
    replacement: "status: 'active' | 'inactive' | 'on-leave'"
  },
  {
    pattern: /priority: 'high' \| ''medium' \| 'low''/g,
    replacement: "priority: 'high' | 'medium' | 'low'"
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<h1>.*<\/h2>/g,
    replacement: (match) => {
      return match.replace(/<\/h2>$/, '</h1>');
    }
  }
];

let totalFixed = 0;
let totalFiles = 0;

try {
  // Find all TypeScript and JavaScript files
  const files = findFiles(process.cwd());
  console.log(`Found ${files.length} files to process...`);
  
  files.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fileFixed = false;
      
      syntaxFixes.forEach(({ pattern, replacement }) => {
        const newContent = content.replace(pattern, replacement);
        if (newContent !== content) {
          content = newContent;
          fileFixed = true;
        }
      });
      
      if (fileFixed) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        totalFixed++;
      }
      
      totalFiles++;
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`\nProcessing complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Total files fixed: ${totalFixed}`);
  
} catch (error) {
  console.error('Error during processing:', error.message);
} 