#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing unterminated string literals in imports...');

// Find all TypeScript and JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
});

let fixedFiles = 0;
let totalIssues = 0;

files.forEach((file) => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileIssues = 0;

    // Fix unterminated string literals in import statements
    content = content.replace(
      /import\s+([^;]+)\s+from\s+['"`]([^'"`]*)$/g,
      (match, importContent, modulePath) => {
        fileIssues++;
        return `import ${importContent} from '${modulePath}';`;
      },
    );

    // Fix unterminated string literals in import statements with semicolon
    content = content.replace(
      /import\s+([^;]+)\s+from\s+['"`]([^'"`]*);';/g,
      (match, importContent, modulePath) => {
        fileIssues++;
        return `import ${importContent} from '${modulePath}';`;
      },
    );

    // Fix simple unterminated imports
    content = content.replace(
      /import\s+([^;]+)\s+from\s+['"`]([^'"`]*);/g,
      (match, importContent, modulePath) => {
        fileIssues++;
        return `import ${importContent} from '${modulePath}';`;
      },
    );

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      totalIssues += fileIssues;
      if (fileIssues > 0) {
        console.log(`✅ Fixed ${fileIssues} issues in ${file}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log(
  `\n🎉 Fixed ${totalIssues} import issues across ${fixedFiles} files`,
);
