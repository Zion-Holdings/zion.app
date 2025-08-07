const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all malformed patterns
    const patterns = [
      // Fix malformed imports
      [/import type \{ NextApiRequest, NextApiResponse \} from 'next';;;;''/g, "import type { NextApiRequest, NextApiResponse } from 'next';"],
      [/import type \{ NextApiRequest, NextApiResponse \} from 'next';;;''/g, "import type { NextApiRequest, NextApiResponse } from 'next';"],
      [/import type \{ NextApiRequest, NextApiResponse \} from 'next';;''/g, "import type { NextApiRequest, NextApiResponse } from 'next';"],
      [/import React from 'react';;;;''/g, "import React from 'react';"],
      [/import React from 'react';;;''/g, "import React from 'react';"],
      [/import React from 'react';;''/g, "import React from 'react';"],
      [/import type \{ NextPage \} from 'next';;;''/g, "import type { NextPage } from 'next';"],
      [/import type \{ NextPage \} from 'next';;''/g, "import type { NextPage } from 'next';"],
      [/import Head from 'next/head';;;''/g, "import Head from 'next/head';"],
      [/import Head from 'next/head';;''/g, "import Head from 'next/head';"],
      [/import Link from 'next/link';;;''/g, "import Link from 'next/link';"],
      [/import Link from 'next/link';;''/g, "import Link from 'next/link';"],
      
      // Fix malformed function declarations
      [/export default function (\w+)\(req: NextApiRequest, res: NextApiResponse\) \{;/g, 'export default async function $1(req: NextApiRequest, res: NextApiResponse) {'],
      [/export default function (\w+)\(\) \{;/g, 'export default async function $1() {'],
      [/export default function (\w+)\(req, res\) \{;/g, 'export default async function $1(req, res) {'],
      
      // Fix malformed object properties
      [/id: '([^']+)',;''/g, "id: '$1',"],
      [/metric: '([^']+)',;''/g, "metric: '$1',"],
      [/type: '([^']+)',;''/g, "type: '$1',"],
      [/status: '([^']+)',;''/g, "status: '$1',"],
      [/priority: '([^']+)',;''/g, "priority: '$1',"],
      [/description: '([^']+)',;''/g, "description: '$1',"],
      [/impact: '([^']+)',;''/g, "impact: '$1',"],
      [/trend: '([^']+)',;''/g, "trend: '$1',"],
      [/value: (\d+),;''/g, "value: $1,"],
      [/cost: (\d+),;''/g, "cost: $1,"],
      
      // Fix malformed if statements
      [/if \(req\.method !== '([^']+)'\) \{;''/g, "if (req.method !== '$1') {"],
      [/if \(req\.method !== '([^']+)'\) \{;/g, "if (req.method !== '$1') {"],
      
      // Fix malformed return statements
      [/return res\.status\((\d+)\)\.json\(\{ error: '([^']+)' \}\);''/g, "return res.status($1).json({ error: '$2' });"],
      [/return res\.status\((\d+)\)\.json\(([^)]+)\);''/g, 'return res.status($1).json($2);'],
      
      // Fix malformed res.status statements
      [/res\.status\((\d+)\)\.json\(([^)]+)\);''/g, 'res.status($1).json($2);'],
      
      // Fix malformed try-catch blocks
      [/try \{;''/g, 'try {'],
      [/catch \(error\) \{;''/g, 'catch (error) {'],
      
      // Fix malformed console.error statements
      [/console\.error\('([^']+)', error\);''/g, "console.error('$1', error);"],
      
      // Fix malformed array elements
      [/},;/g, '},'],
      [/},;''/g, '},'],
      
      // Fix malformed object closing
      [/};''/g, '}'],
      [/};/g, '}'],
      
      // Fix malformed JSX return statements
      [/return \(\)/g, 'return ('],
      [/return \(\);/g, 'return ('],
      
      // Fix malformed JSX tags
      [/<div>;/g, '<div>'],
      [/<\/div>;/g, '</div>'],
      [/<span>;/g, '<span>'],
      [/<\/span>;/g, '</span>'],
      [/<p>;/g, '<p>'],
      [/<\/p>;/g, '</p>'],
      [/<h1>;/g, '<h1>'],
      [/<\/h1>;/g, '</h1>'],
      [/<h2>;/g, '<h2>'],
      [/<\/h2>;/g, '</h2>'],
      [/<h3>;/g, '<h3>'],
      [/<\/h3>;/g, '</h3>'],
      
      // Fix malformed interface declarations
      [/interface (\w+) \{;''/g, 'interface $1 {'],
      [/interface (\w+) \{;/g, 'interface $1 {'],
      
      // Fix malformed const declarations
      [/const (\w+) = \(\) => \{;''/g, 'const $1 = () => {'],
      [/const (\w+) = \(\) => \{;/g, 'const $1 = () => {'],
      
      // Fix malformed export statements
      [/export default (\w+);''/g, 'export default $1;'],
      [/export default (\w+);/g, 'export default $1;'],
      
      // Fix malformed template literals
      [/`([^`]+)`\)}/g, '`$1`)}'],
      [/`([^`]+)`\)/g, '`$1`)'],
      
      // Fix malformed object literals
      [/\{;''/g, '{'],
      [/\{;/g, '{'],
      [/\};''/g, '}'],
      [/\};/g, '}'],
      
      // Fix malformed array literals
      [/\[;''/g, '['],
      [/\[;/g, '['],
      [/\];''/g, ']'],
      [/\];/g, ']'],
      
      // Fix malformed parentheses
      [/\(;''/g, '('],
      [/\(;/g, '('],
      [/\);''/g, ')'],
      [/\);/g, ')'],
      
      // Fix malformed brackets
      [/\{;''/g, '{'],
      [/\{;/g, '{'],
      [/\};''/g, '}'],
      [/\};/g, '}'],
      
      // Fix malformed semicolons in various contexts
      [/;''/g, ''],
      [/;;/g, ';'],
      [/;;;/g, ';'],
      [/;;;;/g, ';']
    ];

    patterns.forEach(([pattern, replacement]) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all files to fix
const allFiles = findFiles('.');

// Fix all files
let fixedCount = 0;
allFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
