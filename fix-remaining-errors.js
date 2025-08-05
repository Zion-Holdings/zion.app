const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Additional fixes for remaining errors
const additionalFixes = [
  // Fix unterminated string literals in various contexts
  {
    pattern: /import.*from.*['"][^'"]*['"];\}/g,
    replacement: (match) => match.replace(/;\}$/, ';')
  },
  {
    pattern: /import.*from.*['"][^'"]*['"];import/g,
    replacement: (match) => match.replace(/;import/g, ';\nimport')
  },
  {
    pattern: /import.*from.*['"][^'"]*['"];import/g,
    replacement: (match) => match.replace(/;import/g, ';\nimport')
  },
  // Fix malformed useState declarations
  {
    pattern: /useState<[^>]*>\([^)]*\)\s*\(\<\/div\>/g,
    replacement: (match) => match.replace(/\(\<\/div\>/, ')')
  },
  // Fix unterminated string literals in JSX
  {
    pattern: /title="[^"]*$/gm,
    replacement: (match) => match + '"'
  },
  {
    pattern: /description="[^"]*$/gm,
    replacement: (match) => match + '"'
  },
  // Fix malformed interface declarations
  {
    pattern: /interface\s+\$[0-9]+\s*\{/g,
    replacement: 'interface ComponentProps {'
  },
  // Fix malformed function declarations
  {
    pattern: /const\s+\$[0-9]+:\s*NextPage\s*=\s*\(\)\s*=>\s*\{/g,
    replacement: 'const Component: NextPage = () => {'
  },
  // Fix malformed array declarations
  {
    pattern: /const\s+\$[0-9]+:\s*\$[0-9]+\[\]\s*=\s*\[/g,
    replacement: 'const data: any[] = ['
  },
  // Fix malformed object properties
  {
    pattern: /id:\s*[0-9]+',/g,
    replacement: (match) => match.replace(/([0-9]+)',/, "'$1',")
  },
  // Fix malformed string literals in type definitions
  {
    pattern: /type:\s*'[^']*'[^']*'[^']*'/g,
    replacement: (match) => {
      return match.replace(/'([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'")
    }
  },
  // Fix malformed status definitions
  {
    pattern: /status:\s*'[^']*'[^']*'[^']*'/g,
    replacement: (match) => {
      return match.replace(/'([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'")
    }
  },
  // Fix malformed priority definitions
  {
    pattern: /priority:\s*'[^']*'[^']*'[^']*'/g,
    replacement: (match) => {
      return match.replace(/'([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'")
    }
  },
  // Fix malformed name definitions
  {
    pattern: /name:\s*[^']*'[^']*'[^']*'/g,
    replacement: (match) => {
      return match.replace(/([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'")
    }
  },
  // Fix malformed type definitions
  {
    pattern: /type:\s*[^']*'[^']*'[^']*'/g,
    replacement: (match) => {
      return match.replace(/([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'")
    }
  },
  // Fix malformed startDate definitions
  {
    pattern: /startDate:\s*[0-9]{4}-[0-9]{2}-[0-9]{2}',/g,
    replacement: (match) => match.replace(/([0-9]{4}-[0-9]{2}-[0-9]{2})',/, "'$1',")
  },
  // Fix malformed endDate definitions
  {
    pattern: /endDate:\s*'[0-9]{4}-[0-9]{2}-[0-9]{2},/g,
    replacement: (match) => match.replace(/'([0-9]{4}-[0-9]{2}-[0-9]{2}),/, "'$1',")
  },
  // Fix malformed endDate definitions without quotes
  {
    pattern: /endDate:\s*[0-9]{4}-[0-9]{2}-[0-9]{2},/g,
    replacement: (match) => match.replace(/([0-9]{4}-[0-9]{2}-[0-9]{2}),/, "'$1',")
  },
  // Fix malformed endDate definitions with quotes
  {
    pattern: /endDate:\s*[0-9]{4}-[0-9]{2}-[0-9]{2}',/g,
    replacement: (match) => match.replace(/([0-9]{4}-[0-9]{2}-[0-9]{2})',/, "'$1',")
  },
  // Fix malformed JSX elements
  {
    pattern: /<Head[^>]*>[^<]*$/gm,
    replacement: (match) => match + '</Head>'
  },
  // Fix malformed function calls
  {
    pattern: /useState\([^)]*\)\s*\(\<\/div\>/g,
    replacement: (match) => match.replace(/\(\<\/div\>/, ')')
  },
  // Fix malformed array declarations
  {
    pattern: /useState<[^>]*>\([^)]*\)\s*\(\<\/div\>/g,
    replacement: (match) => match.replace(/\(\<\/div\>/, ')')
  },
  // Fix malformed object declarations
  {
    pattern: /useState<[^>]*\|\s*null>\([^)]*\)\s*\(\<\/div\>/g,
    replacement: (match) => match.replace(/\(\<\/div\>/, ')')
  },
  // Fix malformed string literals in various contexts
  {
    pattern: /'[^']*'[^']*'[^']*'/g,
    replacement: (match) => {
      return match.replace(/'([^']*)'([^']*)'([^']*)'/g, "'$1$2$3'")
    }
  },
  // Fix malformed quotes in various contexts
  {
    pattern: /"[^"]*"[^"]*"[^"]*"/g,
    replacement: (match) => {
      return match.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1$2$3"')
    }
  },
  // Fix malformed interface names
  {
    pattern: /interface\s+\$[0-9]+\s*\{'/g,
    replacement: 'interface ComponentProps {'
  },
  // Fix malformed function names
  {
    pattern: /const\s+\$[0-9]+\s*=\s*\([^)]*\)\s*=>\s*\{'/g,
    replacement: 'const handleAction = (params) => {'
  },
  // Fix malformed component names
  {
    pattern: /const\s+\$[0-9]+:\s*NextPage\s*=\s*\(\)\s*=>\s*\{/g,
    replacement: 'const Component: NextPage = () => {'
  },
  // Fix malformed array names
  {
    pattern: /const\s+\$[0-9]+:\s*\$[0-9]+\[\]\s*=\s*\[/g,
    replacement: 'const data: any[] = ['
  },
  // Fix malformed object properties with single quotes
  {
    pattern: /([a-zA-Z]+):\s*([^']*)'([^']*)'([^']*)'/g,
    replacement: (match, prop, prefix, middle, suffix) => {
      return `${prop}: '${prefix}${middle}${suffix}'`
    }
  },
  // Fix malformed object properties with double quotes
  {
    pattern: /([a-zA-Z]+):\s*([^"]*)"([^"]*)"([^"]*)"/g,
    replacement: (match, prop, prefix, middle, suffix) => {
      return `${prop}: "${prefix}${middle}${suffix}"`
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all additional fixes
    additionalFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const patterns = [
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, additionalFixes }; 