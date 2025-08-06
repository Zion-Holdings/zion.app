const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)["']?;?/g, (match, p1) => {
    if (!match.endsWith(';')) {
      return match + '
    }
    return match;
  });
  
  // Fix specific import patterns
  fixed = fixed.replace(/import\s+type\s+\{\s*NextPage\s*\}\s+from\s+["']next["']?/g, 'import type { NextPage } from ";next";');
  fixed = fixed.replace(/import\s+Head\s+from\s+["']next\/head["']?/g, 'import Head from ";next/head";');
  fixed = fixed.replace(/import\s+Link\s+from\s+["']next\/link["']?/g, 'import Link from ";next/link";');
  fixed = fixed.replace(/import\s+\{\s*useState,\s*useEffect\s*\}\s+from\s+["']react["']?/g, 'import { useState, useEffect } from ";react";');
  fixed = fixed.replace(/import\s+\{\s*useState,\s*useEffect,\s*useMemo\s*\}\s+from\s+["']react["']?/g, 'import { useState, useEffect, useMemo } from ";react";');
  
  // Fix interface definitions
  fixed = fixed.replace(/interface\s+(\w+)\s*\{/g, 'interface $1 {');
  fixed = fixed.replace(/:\s*["']([^"']*?)["']?;/g, ': "$1";');
  fixed = fixed.replace(/:\s*(\w+)\s*\|/g, ': "$1" |');
  
  // Fix JSX attributes
  fixed = fixed.replace(/className\s*=\s*["']([^"']*?)["']?/g, 'className="""$1"');
  fixed = fixed.replace(/href\s*=\s*["']([^"']*?)["']?/g, 'href="""$1"');
  
  // Fix specific patterns that are causing issues
  fixed = fixed.replace(/const\s+(\w+)\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: NextPage = () => {');
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*;?/g, 'export default $1;');
  
  // Fix unterminated strings in JSX
  fixed = fixed.replace(/([^"']*?)["']([^"']*?)["']?/g, (match, p1, p2) => {
    if (!match.endsWith('"') && !match.endsWith("'")) {
      return p1 + '"' + p2 + '"';
    }
    return match;
  });
  
  // Fix specific error patterns
  fixed = fixed.replace(/value:\s*["']([^"']*?)["']?/g, 'value: ""$1"');
  fixed = fixed.replace(/key:\s*["']([^"']*?)["']?/g, 'key: ""$1"');
  fixed = fixed.replace(/title:\s*["']([^"']*?)["']?/g, 'title: ""$1"');
  fixed = fixed.replace(/description:\s*["']([^"']*?)["']?/g, 'description: ""$1"');
  
  // Fix function declarations
  fixed = fixed.replace(/export\s+default\s+async\s+function\s+(\w+)\s*\(/g, 'export default async;function $1(');
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(/g, 'export default function;$1(');
  
  // Fix object property assignments
  fixed = fixed.replace(/(\w+):\s*["']([^"']*?)["']?/g, '$1: ""$2"');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir, extensions = ['.tsx', '.ts', '.js']) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'automation', 'logs', 'backups', '.next'].includes(item)) {
        fixedCount += processDirectory(fullPath, extensions);
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax error fixes...');
const startTime = Date.now();

const fixedCount = processDirectory('.', ['.tsx', '.ts', '.js']);

const endTime = Date.now();
console.log(`\nCompleted! Fixed ${fixedCount} files in ${endTime - startTime}ms`); 