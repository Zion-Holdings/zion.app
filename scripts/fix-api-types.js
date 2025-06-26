#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing API TypeScript errors...');

// Common patterns to fix
const fixes = [
  // Fix req.query destructuring
  {
    pattern: /const { ([^}]+) } = req\.query;/g,
    replacement: (match, params) => {
      const paramList = params.split(',').map(p => p.trim()).join(': string | string[], ') + ': string | string[]';
      return `const { ${params} } = req.query as { ${paramList} };`;
    }
  },
  // Fix req.body destructuring
  {
    pattern: /const { ([^}]+) } = req\.body;/g,
    replacement: (match, params) => {
      const paramList = params.split(',').map(p => p.trim() + '?: unknown').join(', ');
      return `const { ${params} } = req.body as { ${paramList} };`;
    }
  },
  // Fix req.headers access
  {
    pattern: /req\.headers\[([^\]]+)\]/g,
    replacement: '(req.headers as Record<string, string | string[] | undefined>)[$1]'
  },
  // Fix req.connection access
  {
    pattern: /req\.connection/g,
    replacement: '(req as any).connection'
  }
];

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find API files
function findApiFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findApiFiles(fullPath));
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.js'))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories that can't be read
  }
  
  return files;
}

// Main execution
const apiDirs = [
  path.join(process.cwd(), 'pages/api'),
  path.join(process.cwd(), 'temp_essential_pages/api'),
  path.join(process.cwd(), 'api')
];

let totalFixed = 0;

apiDirs.forEach(apiDir => {
  if (fs.existsSync(apiDir)) {
    console.log(`\n🔍 Processing ${apiDir}...`);
    const apiFiles = findApiFiles(apiDir);
    
    apiFiles.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  }
});

console.log(`\n🎯 Summary: Fixed ${totalFixed} API files`);

// Also create a types import helper
const helperContent = `// Auto-generated API type helpers
import type { NextApiRequest, NextApiResponse } from 'next';

export function safeQueryParam<T = string>(query: NextApiRequest['query'], key: string): T | undefined {
  const value = (query as Record<string, unknown>)[key];
  return value as T;
}

export function safeBodyParam<T = unknown>(body: NextApiRequest['body'], key: string): T | undefined {
  const safeBody = body as Record<string, unknown>;
  return safeBody[key] as T;
}

export function safeHeader(headers: NextApiRequest['headers'], key: string): string | string[] | undefined {
  const safeHeaders = headers as Record<string, string | string[] | undefined>;
  return safeHeaders[key];
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src/utils/api-helpers.ts'), helperContent);
console.log('✅ Created API helper utilities');

export default {}; 