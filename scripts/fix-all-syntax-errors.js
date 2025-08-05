#!/usr/bin/env node
;
const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const syntaxFixes = [
  // Fix unterminated string literals in import statements
  {
    pattern: /import.*from\s+['"][^'"]*['"];?['"]/g,
    replacement: (match) => {
      // Remove extra quotes and semicolons
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
    pattern: /export\s+default\s+async;function/g,
    replacement: 'export default async function'
  },
  // Fix malformed await statements
  {
    pattern: /const\s+\{[^}]*\}\s*=\s*await\s+[^;]*;?['"]/g,
    replacement: (match) => {
      return match.replace(/;?['"]$/, ';');
    }
  },
  // Fix malformed console.error statements
  {
    pattern: /console\.error\([^)]*['"];?['"]/g,
    replacement: (match) => {
      return match.replace(/['"];?['"]$/, "'");
    }
  },
  // Fix malformed res.status statements
  {
    pattern: /res\.status\([^)]*\)\.json\([^)]*['"];?['"]/g,
    replacement: (match) => {
      return match.replace(/['"];?['"]$/, "'");
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Apply all syntax fixes
    for (const fix of syntaxFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }

    // Additional specific fixes for common patterns
    content = content.replace(/['"];?['"]/g, "'");
    content = content.replace(/;{2,}/g, ';');
    content = content.replace(/['"]{2,}/g, "'");
    content = content.replace(/import\s+.*from\s+['"][^'"]*['"];?['"]/g, (match) => {
      return match.replace(/['"];?['"]$/, "'");
    });

    if (fixed || content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');

const directories = [
  'pages',
  'components',
  'src',
  'utils'
];

let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += processDirectory(dir);
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('Syntax error fixes completed!');