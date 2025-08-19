#!/usr/bin/env node
"use strict";

const fs = require('fs-extra');
const path = require('path');

async function exportStatic() {
  try {
    console.log('🚀 Starting static export...');
    
    // Clean up previous export
    if (fs.existsSync('out')) {
      await fs.remove('out');
      console.log('🗑️ Cleaned up previous export');
    }
    
    // Create out directory
    await fs.ensureDir('out');
    console.log('📁 Created out directory');
    
    // Copy static files from .next/static
    if (fs.existsSync('.next/static')) {
      await fs.copy('.next/static', 'out/_next/static');
      console.log('📋 Copied static assets');
    }
    
    // Copy build manifest
    if (fs.existsSync('.next/build-manifest.json')) {
      await fs.copy('.next/build-manifest.json', 'out/_next/build-manifest.json');
      console.log('📋 Copied build manifest');
    }
    
    // Copy routes manifest
    if (fs.existsSync('.next/routes-manifest.json')) {
      await fs.copy('.next/routes-manifest.json', 'out/_next/routes-manifest.json');
      console.log('📋 Copied routes manifest');
    }
    
    // Copy prerendered pages
    if (fs.existsSync('.next/server/pages')) {
      const pagesDir = '.next/server/pages';
      const files = await fs.readdir(pagesDir);
      
      for (const file of files) {
        if (file.endsWith('.html')) {
          const sourcePath = path.join(pagesDir, file);
          const targetPath = path.join('out', file);
          await fs.copy(sourcePath, targetPath);
          console.log(`📋 Copied ${file}`);
        }
      }
    }
    
    // Copy public directory
    if (fs.existsSync('public')) {
      await fs.copy('public', 'out');
      console.log('📋 Copied public files');
    }
    
    // Create index.html if it doesn't exist
    if (!fs.existsSync('out/index.html')) {
      const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion App</title>
    <link rel="stylesheet" href="/_next/static/css/app.css">
</head>
<body>
    <div id="__next">
        <h1>Welcome to Zion App</h1>
        <p>Static export completed successfully!</p>
    </div>
    <script src="/_next/static/chunks/main.js"></script>
</body>
</html>`;
      
      await fs.writeFile('out/index.html', indexContent);
      console.log('📋 Created index.html');
    }
    
    console.log('✅ Static export completed successfully!');
    console.log('📁 Export directory: out/');
    
    // List exported files
    const exportedFiles = await fs.readdir('out');
    console.log(`📊 Exported ${exportedFiles.length} items:`, exportedFiles);
    
  } catch (error) {
    console.error('❌ Export failed:', error.message);
    process.exit(1);
  }
}

// Run export if called directly
if (require.main === module) {
  exportStatic();
}

module.exports = exportStatic;