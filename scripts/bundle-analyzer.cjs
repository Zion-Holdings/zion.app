#!/usr/bin/env node

/**
 * Bundle Analysis Script for Zion App
 * 
 * Analyzes bundle sizes and identifies optimization opportunities
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 BUNDLE ANALYSIS REPORT');
console.log('========================\n');

// Check if build output exists
const buildStatsPath = path.join(process.cwd(), '.next');
if (!fs.existsSync(buildStatsPath)) {
  console.log('❌ No build output found. Run `npm run build` first.');
  process.exit(1);
}

// Analyze static chunks
const staticPath = path.join(buildStatsPath, 'static', 'chunks');
if (fs.existsSync(staticPath)) {
  console.log('📦 LARGE STATIC CHUNKS (>500KB):');
  console.log('================================');
  
  const chunks = fs.readdirSync(staticPath);
  const largeChunks = [];
  
  chunks.forEach(chunk => {
    const chunkPath = path.join(staticPath, chunk);
    const stats = fs.statSync(chunkPath);
    const sizeKB = Math.round(stats.size / 1024);
    
    if (sizeKB > 500) {
      largeChunks.push({ name: chunk, size: sizeKB });
    }
  });
  
  largeChunks
    .sort((a, b) => b.size - a.size)
    .forEach(chunk => {
      console.log(`  📄 ${chunk.name}: ${chunk.size}KB`);
    });
  
  console.log(`\n📊 Found ${largeChunks.length} large chunks\n`);
}

// Analyze pages
const pagesPath = path.join(buildStatsPath, 'static', 'chunks', 'pages');
if (fs.existsSync(pagesPath)) {
  console.log('📱 LARGE PAGE CHUNKS (>400KB):');
  console.log('==============================');
  
  const pages = fs.readdirSync(pagesPath);
  const largePages = [];
  
  pages.forEach(page => {
    const pagePath = path.join(pagesPath, page);
    const stats = fs.statSync(pagePath);
    const sizeKB = Math.round(stats.size / 1024);
    
    if (sizeKB > 400) {
      largePages.push({ name: page, size: sizeKB });
    }
  });
  
  largePages
    .sort((a, b) => b.size - a.size)
    .forEach(page => {
      console.log(`  📄 ${page.name}: ${page.size}KB`);
    });
  
  console.log(`\n📊 Found ${largePages.length} large page chunks\n`);
}

// Optimization recommendations
console.log('🎯 OPTIMIZATION RECOMMENDATIONS:');
console.log('=================================');
console.log('1. 📦 Bundle Splitting:');
console.log('   - Split large vendor libraries');
console.log('   - Implement dynamic imports for heavy components');
console.log('   - Use React.lazy() for page-level code splitting\n');

console.log('2. 🔄 Dependency Optimization:');
console.log('   - Review and remove unused dependencies');
console.log('   - Replace heavy libraries with lighter alternatives');
console.log('   - Use tree-shaking for better dead code elimination\n');

console.log('3. ⚡ Performance Strategies:');
console.log('   - Implement progressive loading');
console.log('   - Add service worker for caching');
console.log('   - Optimize critical rendering path\n');

console.log('✅ Analysis Complete!');
console.log('💡 Run `npm run analyze` for detailed webpack-bundle-analyzer output');