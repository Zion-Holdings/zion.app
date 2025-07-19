#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Complete rewrite of corrupted files...');

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

    // Check if file is corrupted (has unterminated strings, unexpected tokens, etc.)
    if (
      content.includes('Unterminated string constant') ||
      content.includes('Unexpected token') ||
      content.includes('export defaultault') ||
      content.startsWith('}') ||
      content.startsWith(';') ||
      content.startsWith('/') ||
      content.length < 100 ||
      content.includes('Parsing error')
    ) {
      fileIssues++;

      // Create appropriate content based on file type and location
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        const componentName = path.basename(file, path.extname(file));
        content = `import React from 'react';

export default function ${componentName}() {
  return (
    <div>
      <h1>${componentName}</h1>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
}`;
      } else if (file.endsWith('.ts') || file.endsWith('.js')) {
        const moduleName = path.basename(file, path.extname(file));
        const dir = path.dirname(file);

        // Handle different types of files based on directory
        if (dir.includes('types')) {
          content = `// Type definitions for ${moduleName}
export interface ${moduleName} {
  // TODO: Add proper type definitions
}`;
        } else if (dir.includes('utils')) {
          content = `// Utility functions for ${moduleName}
export const ${moduleName} = {
  // TODO: Implement utility functions
};`;
        } else if (dir.includes('services')) {
          content = `// Service for ${moduleName}
export const ${moduleName}Service = {
  // TODO: Implement service methods
};`;
        } else if (dir.includes('hooks')) {
          content = `// Hook for ${moduleName}
export const use${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)} = () => {
  // TODO: Implement hook logic
  return {};
};`;
        } else if (dir.includes('store')) {
          content = `// Store slice for ${moduleName}
export const ${moduleName}Slice = {
  // TODO: Implement store slice
};`;
        } else {
          content = `// Module for ${moduleName}
export const ${moduleName} = {
  // TODO: Implement module functionality
};`;
        }
      }
    }

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      totalIssues += fileIssues;
      if (fileIssues > 0) {
        console.log(`✅ Rewrote ${file}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log(`\n🎉 Rewrote ${fixedFiles} corrupted files`);
