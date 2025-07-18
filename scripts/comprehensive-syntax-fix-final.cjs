#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Comprehensive syntax fix - Final pass...');

// Find all TypeScript and JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**']
});

let fixedFiles = 0;
let totalIssues = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileIssues = 0;

    // Fix unterminated string literals in import statements
    content = content.replace(/import\s+([^;]+);';/g, (match, importContent) => {
      fileIssues++;
      return `import ${importContent};`;
    });

    // Fix unterminated string literals in type declarations
    content = content.replace(/type\s+([^=]+)=\s*['"`]([^'"`]*)['"`];';/g, (match, typeName, typeContent) => {
      fileIssues++;
      return `type ${typeName} = '${typeContent}';`;
    });

    // Fix unterminated string literals in variable declarations
    content = content.replace(/const\s+([^=]+)=\s*['"`]([^'"`]*)['"`];';/g, (match, varName, varContent) => {
      fileIssues++;
      return `const ${varName} = '${varContent}';`;
    });

    // Fix unterminated string literals in return statements
    content = content.replace(/return\s+['"`]([^'"`]*)['"`];';/g, (match, returnContent) => {
      fileIssues++;
      return `return '${returnContent}';`;
    });

    // Fix unterminated string literals in JSX
    content = content.replace(/['"`]([^'"`]*)['"`];';/g, (match, stringContent) => {
      fileIssues++;
      return `'${stringContent}';`;
    });

    // Fix malformed function declarations
    content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*\{\s*return null;\s*\}\s*return\s*\(([\s\S]*?)\)\s*;\s*;\s*$/g, (match, funcName, funcBody) => {
      fileIssues++;
      return `export default function ${funcName}() {\n  return (\n    ${funcBody}\n  );\n}`;
    });

    // Fix incomplete function declarations
    content = content.replace(/export def/g, 'export default');

    // Fix extra closing braces at the end of files
    content = content.replace(/;?\s*\}\s*;?\s*\}\s*;?\s*\}\s*;?\s*\}\s*$/g, '}');
    content = content.replace(/;?\s*\}\s*;?\s*\}\s*;?\s*\}\s*$/g, '}');
    content = content.replace(/;?\s*\}\s*;?\s*\}\s*$/g, '}');

    // Fix extra semicolons
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;\s*$/g, ';');

    // Fix malformed export statements
    content = content.replace(/export defaultault/g, 'export default');
    content = content.replace(/export defaultaultault/g, 'export default');

    // Fix malformed interface declarations
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}\s*;?\s*$/g, (match, interfaceName) => {
      fileIssues++;
      return `interface ${interfaceName} {\n  // TODO: Add interface properties\n}`;
    });

    // Fix malformed type declarations
    content = content.replace(/type\s+(\w+)\s*=\s*\{\s*\}\s*;?\s*$/g, (match, typeName) => {
      fileIssues++;
      return `type ${typeName} = {\n  // TODO: Add type properties\n};`;
    });

    // Fix malformed module declarations
    content = content.replace(/declare module\s+['"`]([^'"`]*)['"`]\s*\{\s*\}\s*;?\s*$/g, (match, moduleName) => {
      fileIssues++;
      return `declare module '${moduleName}' {\n  // TODO: Add module declarations\n}`;
    });

    // Fix malformed global declarations
    content = content.replace(/declare global\s*\{\s*\}\s*;?\s*$/g, (match) => {
      fileIssues++;
      return `declare global {\n  // TODO: Add global declarations\n}`;
    });

    // Fix malformed namespace declarations
    content = content.replace(/namespace\s+(\w+)\s*\{\s*\}\s*;?\s*$/g, (match, namespaceName) => {
      fileIssues++;
      return `namespace ${namespaceName} {\n  // TODO: Add namespace content\n}`;
    });

    // Fix malformed class declarations
    content = content.replace(/class\s+(\w+)\s*\{\s*\}\s*;?\s*$/g, (match, className) => {
      fileIssues++;
      return `class ${className} {\n  // TODO: Add class methods and properties\n}`;
    });

    // Fix malformed enum declarations
    content = content.replace(/enum\s+(\w+)\s*\{\s*\}\s*;?\s*$/g, (match, enumName) => {
      fileIssues++;
      return `enum ${enumName} {\n  // TODO: Add enum values\n}`;
    });

    // Fix malformed const declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\{\s*\}\s*;?\s*$/g, (match, constName) => {
      fileIssues++;
      return `const ${constName} = {\n  // TODO: Add object properties\n};`;
    });

    // Fix malformed let declarations
    content = content.replace(/let\s+(\w+)\s*=\s*\{\s*\}\s*;?\s*$/g, (match, letName) => {
      fileIssues++;
      return `let ${letName} = {\n  // TODO: Add object properties\n};`;
    });

    // Fix malformed var declarations
    content = content.replace(/var\s+(\w+)\s*=\s*\{\s*\}\s*;?\s*$/g, (match, varName) => {
      fileIssues++;
      return `var ${varName} = {\n  // TODO: Add object properties\n};`;
    });

    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*;?\s*$/g, (match, funcName) => {
      fileIssues++;
      return `function ${funcName}() {\n  // TODO: Add function implementation\n}`;
    });

    // Fix malformed arrow function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{\s*\}\s*;?\s*$/g, (match, funcName) => {
      fileIssues++;
      return `const ${funcName} = () => {\n  // TODO: Add function implementation\n};`;
    });

    // Fix malformed async function declarations
    content = content.replace(/async\s+function\s+(\w+)\s*\(\s*\)\s*\{\s*\}\s*;?\s*$/g, (match, funcName) => {
      fileIssues++;
      return `async function ${funcName}() {\n  // TODO: Add async function implementation\n}`;
    });

    // Fix malformed async arrow function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*async\s*\(\s*\)\s*=>\s*\{\s*\}\s*;?\s*$/g, (match, funcName) => {
      fileIssues++;
      return `const ${funcName} = async () => {\n  // TODO: Add async function implementation\n};`;
    });

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

console.log(`\n🎉 Fixed ${totalIssues} syntax issues across ${fixedFiles} files`); 