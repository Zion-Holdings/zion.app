const fs = require('fs');
const path = require('path');

// Function to fix specific corrupted patterns
function fixSpecificPatterns(content) {
  // Fix the specific patterns we found
  content = content.replace(/import type \{ NextPage \} from "next/g, 'import type { NextPage } from "next"');
  content = content.replace(/import.*from.*react";\}/g, "import React from 'react'");
  content = content.replace(/import Link from next\/link"/g, "import Link from 'next/link'");
  content = content.replace(/import.*from.*';next/g, "import type { NextApiRequest, NextApiResponse } from 'next'");
  content = content.replace(/import.*from.*';react/g, "import React from 'react'");
  content = content.replace(/import.*from.*';next\/head/g, "import Head from 'next/head'");
  content = content.replace(/import.*from.*';next\/link/g, "import Link from 'next/link'");
  content = content.replace(/import.*from.*';next\/image/g, "import Image from 'next/image'");
  
  // Fix other common patterns
  content = content.replace(/from.*react";/g, "from 'react';");
  content = content.replace(/from.*next";/g, "from 'next';");
  content = content.replace(/from.*next\/head";/g, "from 'next/head';");
  content = content.replace(/from.*next\/link";/g, "from 'next/link';");
  content = content.replace(/from.*next\/image";/g, "from 'next/image';");
  
  return content;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix the content
    content = fixSpecificPatterns(content);
    
    // Only write if content was actually changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively process all files in a directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Fixing specific corrupted patterns in all files...');

const directories = [
  'pages',
  'components',
  'src'
];

let totalFixed = 0;

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += processDirectory(dir);
  }
});

console.log(`Total files fixed: ${totalFixed}`);
console.log('Pattern fixing completed!'); 