#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing all remaining syntax errors...');

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
      /import\s+([^;]+);';/g,
      (match, importContent) => {
        fileIssues++;
        return `import ${importContent};`;
      },
    );

    // Fix unterminated string literals in type declarations
    content = content.replace(
      /type\s+([^=]+)=\s*['"`]([^'"`]*)['"`];';/g,
      (match, typeName, typeContent) => {
        fileIssues++;
        return `type ${typeName} = '${typeContent}';`;
      },
    );

    // Fix unterminated string literals in variable declarations
    content = content.replace(
      /const\s+([^=]+)=\s*['"`]([^'"`]*)['"`];';/g,
      (match, varName, varContent) => {
        fileIssues++;
        return `const ${varName} = '${varContent}';`;
      },
    );

    // Fix unterminated string literals in return statements
    content = content.replace(
      /return\s+['"`]([^'"`]*)['"`];';/g,
      (match, returnContent) => {
        fileIssues++;
        return `return '${returnContent}';`;
      },
    );

    // Fix unterminated string literals in JSX
    content = content.replace(
      /['"`]([^'"`]*)['"`];';/g,
      (match, stringContent) => {
        fileIssues++;
        return `'${stringContent}';`;
      },
    );

    // Fix extra closing braces at the end of files
    content = content.replace(
      /;?\s*\}\s*;?\s*\}\s*;?\s*\}\s*;?\s*\}\s*$/g,
      '}',
    );
    content = content.replace(/;?\s*\}\s*;?\s*\}\s*;?\s*\}\s*$/g, '}');
    content = content.replace(/;?\s*\}\s*;?\s*\}\s*$/g, '}');

    // Fix malformed function declarations
    content = content.replace(
      /export default function\s+(\w+)\s*\(\s*\)\s*\{\s*return null;\s*\}\s*return\s*\(([\s\S]*?)\)\s*;\s*;\s*$/g,
      (match, funcName, funcBody) => {
        fileIssues++;
        return `export default function ${funcName}() {\n  return (\n    ${funcBody}\n  );\n}`;
      },
    );

    // Fix incomplete function declarations
    content = content.replace(/export def/g, 'export default');

    // Fix extra semicolons
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;\s*$/g, ';');

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
  `\n🎉 Fixed ${totalIssues} syntax issues across ${fixedFiles} files`,
);
