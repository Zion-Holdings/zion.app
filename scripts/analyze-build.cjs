#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'kB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBuildOutput() {
  const buildDir = path.join(process.cwd(), '.next');
  
  if (!fs.existsSync(buildDir)) {
    console.log(colorize('⚠️  Build directory not found. Please run "npm run build" first.', 'yellow'));
    return;
  }

  console.log(colorize('\n🔍 Build Analysis Report', 'bright'));
  console.log(colorize('========================\n', 'cyan'));

  // Analyze static files
  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {
    analyzeStaticFiles(staticDir);
  }

  // Analyze server files
  const serverDir = path.join(buildDir, 'server');
  if (fs.existsSync(serverDir)) {
    analyzeServerFiles(serverDir);
  }

  // Performance recommendations
  provideRecommendations();
}

function analyzeStaticFiles(staticDir) {
  console.log(colorize('📦 Static Assets Analysis', 'blue'));
  console.log(colorize('-------------------------', 'blue'));

  const jsDir = path.join(staticDir, 'chunks');
  const cssDir = path.join(staticDir, 'css');

  if (fs.existsSync(jsDir)) {
    const jsFiles = getAllFiles(jsDir, '.js');
    const totalJSSize = jsFiles.reduce((total, file) => {
      return total + fs.statSync(file).size;
    }, 0);

    console.log(colorize(`📄 JavaScript Files: ${jsFiles.length}`, 'green'));
    console.log(colorize(`📏 Total JS Size: ${formatBytes(totalJSSize)}`, 'green'));

    // Find largest JS chunks
    const largechunks = jsFiles
      .map(file => ({
        name: path.basename(file),
        size: fs.statSync(file).size,
        path: file
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 10);

    console.log(colorize('\n🔥 Largest JS Chunks:', 'yellow'));
    largechunks.forEach((chunk, i) => {
      console.log(`${i + 1}. ${chunk.name} - ${formatBytes(chunk.size)}`);
    });
  }

  if (fs.existsSync(cssDir)) {
    const cssFiles = getAllFiles(cssDir, '.css');
    const totalCSSSize = cssFiles.reduce((total, file) => {
      return total + fs.statSync(file).size;
    }, 0);

    console.log(colorize(`\n🎨 CSS Files: ${cssFiles.length}`, 'magenta'));
    console.log(colorize(`📏 Total CSS Size: ${formatBytes(totalCSSSize)}`, 'magenta'));
  }
}

function analyzeServerFiles(serverDir) {
  console.log(colorize('\n🖥️  Server Files Analysis', 'blue'));
  console.log(colorize('-------------------------', 'blue'));

  const pagesDir = path.join(serverDir, 'pages');
  if (fs.existsSync(pagesDir)) {
    const pageFiles = getAllFiles(pagesDir, '.js');
    console.log(colorize(`📄 Server Pages: ${pageFiles.length}`, 'green'));

    const totalServerSize = pageFiles.reduce((total, file) => {
      return total + fs.statSync(file).size;
    }, 0);
    console.log(colorize(`📏 Total Server Size: ${formatBytes(totalServerSize)}`, 'green'));
  }
}

function getAllFiles(dir, ext) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, ext));
    } else if (path.extname(item) === ext) {
      files.push(fullPath);
    }
  }

  return files;
}

function provideRecommendations() {
  console.log(colorize('\n💡 Performance Recommendations', 'bright'));
  console.log(colorize('================================', 'cyan'));

  const recommendations = [
    '🚀 Consider implementing dynamic imports for large components',
    '📦 Use webpack-bundle-analyzer for detailed bundle analysis',
    '🖼️  Optimize images using next/image with proper sizing',
    '🗜️  Enable gzip/brotli compression in production',
    '📱 Implement code splitting at the route level',
    '🔄 Use React.lazy() for components not immediately needed',
    '📊 Monitor Core Web Vitals in production',
    '🎯 Consider preloading critical resources',
    '📝 Use service workers for offline functionality',
    '⚡ Implement tree shaking for unused code elimination'
  ];

  recommendations.forEach(rec => {
    console.log(rec);
  });

  console.log(colorize('\n📈 Bundle Analysis Commands', 'blue'));
  console.log(colorize('---------------------------', 'blue'));
  console.log('npm install --save-dev webpack-bundle-analyzer');
  console.log('ANALYZE=true npm run build');
  console.log('npx webpack-bundle-analyzer .next/static/chunks/*.js');

  console.log(colorize('\n✅ Build analysis complete!', 'green'));
}

// Run analysis
analyzeBuildOutput(); 