const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated string literals at the beginning of files
  if (fixed.startsWith('"') && !fixed.includes('\n')) {
    // This is likely a malformed file, try to fix it
    fixed = `import React from 'react';
import Head from 'next/head';
import Layout from ';../components/layout/Layout';

export default function;Page() {
  return (
    <Layout>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
      <div className="""""container mx-auto px-4 py-8">
        <h1 className="""""text-3xl font-bold mb-6">Page Content</h1>
        <p>This page is under construction.</p>
      </div>
    </Layout>
  );
}`
  }
  
  // Fix common JSX syntax errors
  fixed = fixed.replace(/<Head>\s*<title>([^<]*)<\/title>\s*<meta[^>]*>\s*<\/Head>/g, 
    '<Head>\n        <title>$1</title>\n        <meta name="description" content="Page description" />\n      </Head>');
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/"([^"]*)$/gm, '"$1"');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<Head>\s*<title>([^<]*)<\/title>\s*<meta[^>]*>/g, 
    '<Head>\n        <title>$1</title>\n        <meta name="description" content="Page description" />\n      </Head>');
  
  // Fix octal literals
  fixed = fixed.replace(/\b0[0-7]+\b/g, (match) => {
    return `0o${parseInt(match, 8).toString(8)}`
  });
  
  // Fix unexpected tokens in JSX
  fixed = fixed.replace(/<([^>]*)\s*\/>/g, '<$1 />');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;])\s*$/gm, '$1;');
  
  // Fix import statements
  fixed = fixed.replace(/import\s+([^;]+);?\s*$/gm, 'import $1;');
  
  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+);?\s*$/gm, 'export default $1;');
  
  return fixed;
}

// Function to process files
function processFiles() {
  const patterns = [
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts',
    'src/**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**'] });
    
    files.forEach(filePath => {
      totalFiles++;
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSyntaxErrors(content, filePath);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent);
          console.log(`Fixed: ${filePath}`);
          fixedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    });
  });
  
  console.log(`\nProcessing complete:`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files fixed: ${fixedFiles}`);
}

// Run the script
processFiles(); 