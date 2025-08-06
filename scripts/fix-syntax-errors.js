const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals
  { pattern: "/"/g", replacement: "'' "},
  { pattern: "/'/g", replacement: "'" "},
  // Fix incorrect import statements
  { pattern: "/from '([^']+)'/g", replacement: ""from '$1' "},
  { pattern: "/from ([^"]+)"/g", replacement: "from '$1' "},
  // Fix className with double quotes
  { pattern: "/className="/g", replacement: "'className="' "},
  // Fix JSX attributes
  { pattern: "/([^]*)"([^"]*)([^]*)"/g", replacement: "'"$1$2$3' "},
  // Fix unterminated template literals
  { pattern: "/`([^]*)`([^`]*)/g", replacement: "'`$1$2`' "},
  // Fix semicolons in wrong places
  { pattern: "/;([a-zA-Z])/g", replacement: "'$1' "},
  // Fix missing quotes in object properties
  { pattern: "/([a-zA-Z]+): ([^",}]+)([,}])/g, replacement: "'$1: $2"$3' "}
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    content = content.replace(/import type { NextPage } from "next/g, 'import type { NextPage } from next"');
    content = content.replace(/import { useState, useEffect, useMemo } from "react/g, 'import { useState, useEffect, useRef } from "react"');
    content = content.replace(/import type { NextApiRequest, NextApiResponse } from 'next'\/link'/g, "import Link from 'next/link'");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(Fixed: "${filePath"}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing from current directory
const startDir = process.cwd();
console.log('Starting syntax fixes...');
const fixedFiles = walkDir(startDir);
console.log(`Fixed ${fixedFiles} files.`); 