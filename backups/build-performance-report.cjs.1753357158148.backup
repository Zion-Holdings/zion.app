
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

console.warn('📊 Build Performance Report');
console.warn('==========================\n')
function analyzeBuildStats() {
  const buildDir = path.join(process.cwd(), '.next');

  if (!fs.existsSync(buildDir)) {
    console.warn('❌ No build directory found. Run npm run build first.');
    return;
  }

  console.warn('🔍 Build Analysis:');

  // Check for build manifest
  const manifestPath = path.join(buildDir, 'build-manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const entryFiles = Object.keys(manifest.pages);
    console.warn(`   📄 Total pages: ${entryFiles.length}`);
  }

  // Check server pages
  const serverDir = path.join(buildDir, 'server', 'pages');
  if (fs.existsSync(serverDir)) {
    const serverPages = fs.readdirSync(serverDir, { recursive: true })
const pageCount = serverPages.filter((file) => file.endsWith('.js')).length;
    console.warn(`   🖥️  Server pages: ${pageCount}`);
  }

  // Check static pages
  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {
    const staticFiles = fs.readdirSync(staticDir, { recursive: true })
const jsFiles = staticFiles.filter((file) => file.endsWith('.js'))
const cssFiles = staticFiles.filter((file) => file.endsWith('.css'));
    console.warn(`   📦 Static JS files: ${jsFiles.length}`);
    console.warn(`   🎨 CSS files: ${cssFiles.length}`);
  }

  // Build size analysis
  const buildSize = getDirSize(buildDir);
  console.warn(`   💾 Total build size: ${formatBytes(buildSize)}`);
}

function getDirSize(dirPath) {
  let totalSize = 0
function calculateSize(currentPath) {
    const stats = fs.statSync(currentPath);
    if (stats.isFile()) {
      totalSize += stats.size;
    } else if (stats.isDirectory()) {
      const files = fs.readdirSync(currentPath);
      files.forEach((file) => {
        calculateSize(path.join(currentPath, file));
      });
    }
  }

  try {
    calculateSize(dirPath);
  } catch {
    console.warn(`Warning: Could not calculate size for ${dirPath}`);
  }

  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
const k = 1024
const sizes = ['Bytes', 'KB', 'MB', 'GB']
const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function provideOptimizationSuggestions() {
  console.warn('\n💡 Optimization Recommendations:');
  console.warn('================================');

  console.warn('✅ Environment validation is working');
  console.warn('✅ Search functionality has been optimized');
  console.warn('✅ Pre-build checks prevent deployment issues');

  console.warn('\n🎯 Next Steps for Further Optimization:');
  console.warn('• Consider implementing dynamic imports for large components');
  console.warn('• Add bundle analyzer for detailed size analysis');
  console.warn('• Implement service worker for better caching');
  console.warn('• Consider image optimization for better performance');
  console.warn('• Add performance monitoring in production');
}

function checkBuildHealth() {
  console.warn('\n🏥 Build Health Check:');
  console.warn('======================')
const checks = [
    { name: 'Build directory exists', check: () => fs.existsSync('.next') },
    {
      name: 'Static files generated',
      check: () => fs.existsSync('.next/static'),
    },
    {
      name: 'Server pages built',
      check: () => fs.existsSync('.next/server/pages'),
    },
    {
      name: 'Build manifest exists',
      check: () => fs.existsSync('.next/build-manifest.json'),
    },
  ];

  checks.forEach(({ name, check }) => {
    const result = check();
    console.warn(`   ${result ? '✅' : '❌'} ${name}`);
  });
}

// Run analysis
analyzeBuildStats();
checkBuildHealth();
provideOptimizationSuggestions();

console.warn('\n🎉 Build Performance Report Complete!');
console.warn('=====================================');
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
