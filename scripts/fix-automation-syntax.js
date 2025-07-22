#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

console.log('🔧 Fixing automation syntax errors...\n');

// Patterns to fix
const patterns = [
  // Fix require statements with extra semicolons and quotes
  {
    pattern: /require\('([^']+)'\);';/g,
    replacement: "require('$1');"
  },
  {
    pattern: /const ([^=]+) = require\('([^']+)'\);'const ([^=]+) = require\('([^']+)'\);'/g,
    replacement: "const $1 = require('$2');\nconst $3 = require('$4');"
  },
  {
    pattern: /const ([^=]+) = require\('([^']+)'\);'const ([^=]+) = require\('([^']+)'\);'const ([^=]+) = require\('([^']+)'\);'/g,
    replacement: "const $1 = require('$2');\nconst $3 = require('$4');\nconst $5 = require('$6');"
  },
  // Fix function calls with extra quotes
  {
    pattern: /([a-zA-Z_$][a-zA-Z0-9_$]*\.[a-zA-Z_$][a-zA-Z0-9_$]*\([^)]*\));'/g,
    replacement: "$1;"
  },
  // Fix object properties with extra quotes
  {
    pattern: /([a-zA-Z_$][a-zA-Z0-9_$]*): '([^']+)',/g,
    replacement: "$1: '$2',"
  },
  // Fix if statements with extra quotes
  {
    pattern: /if \(([^)]+)\) {'/g,
    replacement: "if ($1) {"
  },
  // Fix try blocks with extra quotes
  {
    pattern: /try {/g,
    replacement: "try {"
  },
  // Fix catch blocks with extra quotes
  {
    pattern: /} catch \(([^)]+)\) {'/g,
    replacement: "} catch ($1) {"
  },
  // Fix switch cases with extra quotes
  {
    pattern: /case '([^']+)':/g,
    replacement: "case '$1':"
  },
  // Fix object literals with extra quotes
  {
    pattern: /([a-zA-Z_$][a-zA-Z0-9_$]*): '([^']+)''/g,
    replacement: "$1: '$2'"
  },
  // Fix array elements with extra quotes
  {
    pattern: /'([^']+)',/g,
    replacement: "'$1',"
  },
  // Fix process.on calls with extra quotes
  {
    pattern: /process\.on\('([^']+)', \(\) => ([^)]+)\);'/g,
    replacement: "process.on('$1', () => $2);"
  }
];

// Directories to process
const directories = [
  'automation',
  'scripts'
];

// File extensions to process
const extensions = ['.js', '.cjs']
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Apply all patterns
    for (const { pattern, replacement } of patterns) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }

    // Additional specific fixes
    content = content
      .replace(/;\s*const /g, '\nconst ')
      .replace(/;\s*\/\/ Import/g, '\n// Import')
      .replace(/;\s*\/\/ Setup/g, '\n// Setup')
      .replace(/;\s*class /g, '\nclass ')
      .replace(/;\s*function /g, '\nfunction ')
      .replace(/;\s*module\.exports/g, '\nmodule.exports');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function processDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        fixFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }
}

// Process all directories
let totalFixed = 0;
for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`📁 Processing directory: ${dir}`);
    processDirectory(dir);
  }
}

console.log('\n🔍 Checking for remaining syntax errors...\n');

// Check for remaining syntax errors
let errorCount = 0;
for (const dir of directories) {
  if (fs.existsSync(dir)) {
    try {
      const result = execSync(`find ${dir} -name "*.js" -exec node -c {} \\; 2>&1`, { encoding: 'utf8' });
      if (result.trim()) {
        console.log(`⚠️  Remaining errors in ${dir}:`);
        console.log(result);
        errorCount++;
      }
    } catch (error) {
      console.log(`⚠️  Remaining errors in ${dir}:`);
      console.log(error.stdout || error.message);
      errorCount++;
    }
  }
}

if (errorCount === 0) {
  console.log('✅ All automation syntax errors have been fixed!');
} else {
  console.log(`⚠️  ${errorCount} directories still have syntax errors that need manual attention.`);
}

console.log('\n🚀 Automation system should now be ready to run!'); 