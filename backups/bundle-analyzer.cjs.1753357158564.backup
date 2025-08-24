
class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting ...');
    
    try {
      #!/usr/bin/env node



const fs = require('fs')
const path = require('path');

console.warn('🔍 BUNDLE ANALYSIS REPORT');
console.warn('========================\n');

// Check if build output exists
const buildStatsPath = path.join(process.cwd(), '.next');
if (!fs.existsSync(buildStatsPath)) {
  console.warn('❌ No build output found. Run `npm run build` first.');
  process.exit(1);
}

// Analyze static chunks
const staticPath = path.join(buildStatsPath, 'static', 'chunks');
if (fs.existsSync(staticPath)) {
  console.warn('📦 LARGE STATIC CHUNKS (>500KB):');
  console.warn('================================')
const chunks = fs.readdirSync(staticPath)
const largeChunks = [];

  chunks.forEach((chunk) => {
    const chunkPath = path.join(staticPath, chunk)
const stats = fs.statSync(chunkPath)
const sizeKB = Math.round(stats.size / 1024);

    if (sizeKB > 500) {
      largeChunks.push({ name: chunk, size: sizeKB });
    }
  });

  largeChunks
    .sort((a, b) => b.size - a.size)
    .forEach((chunk) => {
      console.warn(`  📄 ${chunk.name}: ${chunk.size}KB`);
    });

  console.warn(`\n📊 Found ${largeChunks.length} large chunks\n`);
}

// Analyze pages
const pagesPath = path.join(buildStatsPath, 'static', 'chunks', 'pages');
if (fs.existsSync(pagesPath)) {
  console.warn('📱 LARGE PAGE CHUNKS (>400KB):');
  console.warn('==============================')
const pages = fs.readdirSync(pagesPath)
const largePages = [];

  pages.forEach((page) => {
    const pagePath = path.join(pagesPath, page)
const stats = fs.statSync(pagePath)
const sizeKB = Math.round(stats.size / 1024);

    if (sizeKB > 400) {
      largePages.push({ name: page, size: sizeKB });
    }
  });

  largePages
    .sort((a, b) => b.size - a.size)
    .forEach((page) => {
      console.warn(`  📄 ${page.name}: ${page.size}KB`);
    });

  console.warn(`\n📊 Found ${largePages.length} large page chunks\n`);
}

// Optimization recommendations
console.warn('🎯 OPTIMIZATION RECOMMENDATIONS:');
console.warn('=================================');
console.warn('1. 📦 Bundle Splitting:');
console.warn('   - Split large vendor libraries');
console.warn('   - Implement dynamic imports for heavy components');
console.warn('   - Use React.lazy() for page-level code splitting\n');

console.warn('2. 🔄 Dependency Optimization:');
console.warn('   - Review and remove unused dependencies');
console.warn('   - Replace heavy libraries with lighter alternatives');
console.warn('   - Use tree-shaking for better dead code elimination\n');

console.warn('3. ⚡ Performance Strategies:');
console.warn('   - Implement progressive loading');
console.warn('   - Add service worker for caching');
console.warn('   - Optimize critical rendering path\n');

console.warn('✅ Analysis Complete!');
console.warn(
  '💡 Run `npm run analyze` for detailed webpack-bundle-analyzer output',
);


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      console.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    console.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
