#!/usr/bin/env node
;
const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in imports
  fixed = fixed.replace(/import React, { useEffect, useRef } from "react";/g, 'import React, { useEffect, useRef } from "react";');
  fixed = fixed.replace(/import React from "react";/g, 'import React from "react";');
  fixed = fixed.replace(/import { [^}]+ } from "react;/g, (match) => match.replace(/;$/, '";'));
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/className="fixed inset-0 pointer-events-none z-0"/g, 'className="fixed inset-0 pointer-events-none z-0"');
  fixed = fixed.replace(/className="([^"]*)$/gm, (match, className) => {
    if (!match.endsWith('"')) {
      return `className="${className}"`;
    }
    return match;
  });
  
  // Fix unterminated string literals in style objects
  fixed = fixed.replace(/style={{ background: 'transparent' }}/g, 'style={{ background: \'transparent\' }}');
  fixed = fixed.replace(/style={{ background: ([^}]+) }}/g, (match, bg) => {
    if (bg.includes("'") && !bg.endsWith("'")) {
      return `style={{ background: 'transparent' }}`;
    }
    return match;
  });
  
  // Fix array syntax errors
  fixed = fixed.replace(/\[#00d4ff', '#8b5cf6, #ec4899', '#10b981\]/g, "['#00d4ff', '#8b5cf6', '#ec4899', '#10b981']");
  fixed = fixed.replace(/\[([^]]+)\]/g, (match, content) => {
    if (content.includes("'") && !content.includes("'")) {
      return `['${content.split("'")[0]}']`;
    }
    return match;
  });
  
  // Fix event listener syntax
  fixed = fixed.replace(/addEventListener\(resi'z'e/g, "addEventListener('resize'");
  fixed = fixed.replace(/removeEventListener\(resi'z'e/g, "removeEventListener('resize'");
  
  // Fix canvas context
  fixed = fixed.replace(/getContext\('2d\)/g, "getContext('2d')");
  
  // Fix common JSX syntax errors
  fixed = fixed.replace(/<([^>]+) className=([^>]+)>/g, (match, tag, className) => {
    if (!className.startsWith('"') && !className.startsWith("'")) {</div>
      return `<${tag} className="${className}">`;
    }
    return match;
  });
  
  // Fix export statements
  fixed = fixed.replace(/export default ([^;]+);/g, (match, component) => {
    if (!match.endsWith(';')) {
      return `${match};`;
    }
    return match;
  });
  
  return fixed;
}

// Function to process a file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files;
function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
        fixedCount += processDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const startTime = Date.now();
const fixedCount = processDirectory('.');
const endTime = Date.now();

console.log(`\nCompleted! Fixed ${fixedCount} files in ${endTime - startTime}ms`); </div>