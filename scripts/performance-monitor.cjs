#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Performance monitoring and optimization script
class PerformanceMonitor {
  constructor() {
    this.metricsFile = path.join(process.cwd(), '.next', 'performance-metrics.json');
    this.colors = {
      reset: '\x1b[0m',
      bright: '\x1b[1m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m'
    };
  }

  colorize(text, color) {
    return `${this.colors[color]}${text}${this.colors.reset}`;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'kB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatTime(ms) {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  }

  async runHealthCheck() {
    console.log(this.colorize('\n🏥 Development Server Health Check', 'bright'));
    console.log(this.colorize('===================================\n', 'cyan'));

    const checks = [
      { name: 'Node.js Version', check: () => this.checkNodeVersion() },
      { name: 'Dependencies', check: () => this.checkDependencies() },
      { name: 'Environment Config', check: () => this.checkEnvironment() },
      { name: 'Build Files', check: () => this.checkBuildFiles() },
      { name: 'Server Response', check: () => this.checkServerResponse() }
    ];

    for (const { name, check } of checks) {
      try {
        const result = await check();
        console.log(`${this.colorize('✅', 'green')} ${name}: ${this.colorize(result, 'green')}`);
      } catch (error) {
        console.log(`${this.colorize('❌', 'red')} ${name}: ${this.colorize(error.message, 'red')}`);
      }
    }
  }

  checkNodeVersion() {
    const version = process.version;
    const majorVersion = parseInt(version.slice(1).split('.')[0]);
    if (majorVersion < 18) {
      throw new Error(`Node.js ${version} (upgrade to v18+ recommended)`);
    }
    return `${version} (compatible)`;
  }

  checkDependencies() {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const nodeModules = fs.existsSync('node_modules');
    if (!nodeModules) {
      throw new Error('node_modules not found - run npm install');
    }
    return `Installed (${Object.keys(packageJson.dependencies || {}).length} deps)`;
  }

  checkEnvironment() {
    const envFile = fs.existsSync('.env.local');
    if (!envFile) {
      throw new Error('.env.local not found');
    }
    return 'Configuration found';
  }

  checkBuildFiles() {
    const buildDir = fs.existsSync('.next');
    if (!buildDir) {
      return 'No build files (run npm run build)';
    }
    
    const buildManifest = path.join('.next', 'build-manifest.json');
    if (fs.existsSync(buildManifest)) {
      const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
      const pageCount = Object.keys(manifest.pages || {}).length;
      return `Built successfully (${pageCount} pages)`;
    }
    
    return 'Build directory exists';
  }

  async checkServerResponse() {
    try {
      // Check if development server is running
      const response = await fetch('http://localhost:3000/api/health')
        .catch(() => null);
      
      if (response && response.ok) {
        return `Server responding (${response.status})`;
      } else {
        return 'Server not running (start with npm run dev)';
      }
    } catch (error) {
      return 'Server not running (start with npm run dev)';
    }
  }

  analyzeBundle() {
    console.log(this.colorize('\n📦 Bundle Analysis', 'bright'));
    console.log(this.colorize('==================\n', 'cyan'));

    const buildDir = path.join(process.cwd(), '.next');
    if (!fs.existsSync(buildDir)) {
      console.log(this.colorize('⚠️  No build found. Run npm run build first.', 'yellow'));
      return;
    }

    // Analyze static chunks
    const staticDir = path.join(buildDir, 'static', 'chunks');
    if (fs.existsSync(staticDir)) {
      const chunks = this.getChunkInfo(staticDir);
      
      console.log(this.colorize(`📊 Total Chunks: ${chunks.length}`, 'blue'));
      console.log(this.colorize(`📏 Total Size: ${this.formatBytes(chunks.reduce((sum, chunk) => sum + chunk.size, 0))}`, 'blue'));
      
      // Show largest chunks
      const largest = chunks.sort((a, b) => b.size - a.size).slice(0, 5);
      console.log(this.colorize('\n🔥 Largest Chunks:', 'yellow'));
      largest.forEach((chunk, i) => {
        console.log(`${i + 1}. ${chunk.name} - ${this.formatBytes(chunk.size)}`);
      });

      // Categorize chunks
      this.categorizeChunks(chunks);
    }
  }

  getChunkInfo(dir) {
    const chunks = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && file.endsWith('.js')) {
        chunks.push({
          name: file,
          size: stat.size,
          path: filePath
        });
      }
    }
    
    return chunks;
  }

  categorizeChunks(chunks) {
    const categories = {
      'Framework': [],
      'UI Libraries': [],
      'Vendors': [],
      'Pages': [],
      'Common': [],
      'Other': []
    };

    chunks.forEach(chunk => {
      const name = chunk.name.toLowerCase();
      if (name.includes('framework')) {
        categories['Framework'].push(chunk);
      } else if (name.includes('ui-libs')) {
        categories['UI Libraries'].push(chunk);
      } else if (name.includes('vendors')) {
        categories['Vendors'].push(chunk);
      } else if (name.includes('pages')) {
        categories['Pages'].push(chunk);
      } else if (name.includes('common')) {
        categories['Common'].push(chunk);
      } else {
        categories['Other'].push(chunk);
      }
    });

    console.log(this.colorize('\n📂 Chunk Categories:', 'magenta'));
    Object.entries(categories).forEach(([category, categoryChunks]) => {
      if (categoryChunks.length > 0) {
        const totalSize = categoryChunks.reduce((sum, chunk) => sum + chunk.size, 0);
        console.log(`${category}: ${categoryChunks.length} chunks (${this.formatBytes(totalSize)})`);
      }
    });
  }

  generateOptimizationReport() {
    console.log(this.colorize('\n⚡ Optimization Recommendations', 'bright'));
    console.log(this.colorize('=================================\n', 'cyan'));

    const recommendations = [
      {
        category: '🎯 Critical',
        items: [
          'Implement dynamic imports for large components',
          'Use React.lazy() for non-critical components',
          'Enable compression (gzip/brotli) in production'
        ]
      },
      {
        category: '📈 Performance',
        items: [
          'Add bundle analyzer to webpack config',
          'Implement tree shaking for unused code',
          'Optimize images with next/image',
          'Use service workers for caching'
        ]
      },
      {
        category: '🔧 Development',
        items: [
          'Set up performance monitoring',
          'Implement error boundaries',
          'Add Lighthouse CI for performance tracking',
          'Use React DevTools Profiler'
        ]
      }
    ];

    recommendations.forEach(({ category, items }) => {
      console.log(this.colorize(category, 'yellow'));
      items.forEach(item => {
        console.log(`  • ${item}`);
      });
      console.log('');
    });
  }

  saveMetrics(metrics) {
    const timestamp = new Date().toISOString();
    const data = {
      timestamp,
      ...metrics
    };

    // Load existing metrics
    let history = [];
    if (fs.existsSync(this.metricsFile)) {
      try {
        history = JSON.parse(fs.readFileSync(this.metricsFile, 'utf8'));
      } catch (error) {
        console.log(this.colorize('⚠️  Could not read existing metrics', 'yellow'));
      }
    }

    // Add new metrics and keep last 50 entries
    history.push(data);
    history = history.slice(-50);

    // Save to file
    fs.writeFileSync(this.metricsFile, JSON.stringify(history, null, 2));
    console.log(this.colorize('\n💾 Metrics saved to .next/performance-metrics.json', 'green'));
  }

  async run() {
    const startTime = Date.now();
    
    console.log(this.colorize('🚀 Performance Monitor', 'bright'));
    console.log(this.colorize('====================', 'cyan'));
    
    await this.runHealthCheck();
    this.analyzeBundle();
    this.generateOptimizationReport();
    
    const duration = Date.now() - startTime;
    console.log(this.colorize(`\n⏱️  Analysis completed in ${this.formatTime(duration)}`, 'green'));
    
    // Save basic metrics
    this.saveMetrics({
      analysisTime: duration,
      buildExists: fs.existsSync('.next'),
      nodeVersion: process.version
    });
  }
}

// Run the monitor
const monitor = new PerformanceMonitor();
monitor.run().catch(console.error); 
