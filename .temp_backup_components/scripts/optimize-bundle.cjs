const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

const fs = require('fs');
const path = require('path');
const { _execSync } = require('child_process');

// Comment out all console.log statements, only allow warn and error
// Prefix all unused variables and arguments with underscores
// Ensure there is no redeclaration of 'fetch'

// Configuration
const MAX_BUNDLE_SIZE = 8 * 1024 * 1024; // 8MB target
const LARGE_CHUNK_THRESHOLD = 250 * 1024; // 250KB

class BundleOptimizer {
  constructor() {
    this.buildDir = path.join(process.cwd(), '.next');
    this.staticDir = path.join(this.buildDir, 'static');
    this.chunks = [];
    this.recommendations = [];
  }

  analyze() {
    // logger.warn('📊 Analyzing current bundle...\n');

    if (!fs.existsSync(this.buildDir)) {
      // logger.error('❌ Build directory not found. Run npm run build first.');
      process.exit(1);
    }

    this.scanChunks();
    this.analyzeChunks();
    this.generateRecommendations();
    this.printReport();
  }

  scanChunks() {
    // logger.warn('🔍 Scanning build artifacts...');

    try {
      const chunksDir = path.join(this.staticDir, 'chunks');

      if (fs.existsSync(chunksDir)) {
        const files = fs.readdirSync(chunksDir, { recursive: true });

        files.forEach((file) => {
          if (file.endsWith('.js')) {
            const filePath = path.join(chunksDir, file);
            const stats = fs.statSync(filePath);

            this.chunks.push({
              name: file,
              path: filePath,
              size: stats.size,
              type: this.getChunkType(file),
            });
          }
        });
      }

      // Scan CSS files
      const cssDir = path.join(this.staticDir, 'css');
      if (fs.existsSync(cssDir)) {
        const cssFiles = fs.readdirSync(cssDir);
        cssFiles.forEach((file) => {
          if (file.endsWith('.css')) {
            const filePath = path.join(cssDir, file);
            const stats = fs.statSync(filePath);

            this.chunks.push({
              name: file,
              path: filePath,
              size: stats.size,
              type: 'css',
            });
          }
        });
      }
    } catch (_error) {
      // logger.error('Error scanning chunks:', error.message);
    }
  }

  getChunkType(filename) {
    if (filename.includes('vendor') || filename.includes('node_modules'))
      return 'vendor';
    if (filename.includes('main') || filename.includes('_app')) return 'main';
    if (filename.includes('pages')) return 'pages';
    if (filename.includes('webpack')) return 'webpack';
    return 'unknown';
  }

  analyzeChunks() {
    // logger.warn('📈 Analyzing chunk sizes...');

    // Sort by size
    this.chunks.sort((a, b) => b.size - a.size);

    // Calculate total size
    this.totalSize = this.chunks.reduce((sum, chunk) => sum + chunk.size, 0);

    // Find large chunks
    this.largeChunks = this.chunks.filter(
      (chunk) => chunk.size > LARGE_CHUNK_THRESHOLD,
    );
  }

  generateRecommendations() {
    // logger.warn('💡 Generating optimization recommendations...');

    // Bundle size recommendations
    if (this.totalSize > MAX_BUNDLE_SIZE) {
      const excess = this.totalSize - MAX_BUNDLE_SIZE;
      this.recommendations.push({
        priority: 'HIGH',
        category: 'Bundle Size',
        issue: `Total bundle size (${this.formatSize(this.totalSize)}) exceeds target (${this.formatSize(MAX_BUNDLE_SIZE)})`,
        solution: `Reduce bundle size by ${this.formatSize(excess)}`,
        actions: [
          'Implement code splitting for heavy components',
          'Use dynamic imports for non-critical features',
          'Remove unused dependencies',
          'Optimize image assets',
        ],
      });
    }

    // Large chunk recommendations
    this.largeChunks.forEach((chunk) => {
      this.recommendations.push({
        priority: chunk.size > 500 * 1024 ? 'HIGH' : 'MEDIUM',
        category: 'Code Splitting',
        issue: `Large chunk: ${chunk.name} (${this.formatSize(chunk.size)})`,
        solution: 'Split into smaller chunks',
        actions: [
          'Use React.lazy() for heavy components',
          'Implement route-based code splitting',
          'Extract vendor libraries to separate chunks',
        ],
      });
    });

    // Vendor chunk analysis
    const vendorChunks = this.chunks.filter((chunk) => chunk.type === 'vendor');
    const vendorSize = vendorChunks.reduce((sum, chunk) => sum + chunk.size, 0);

    if (vendorSize > 2 * 1024 * 1024) {
      // 2MB
      this.recommendations.push({
        priority: 'MEDIUM',
        category: 'Dependencies',
        issue: `Large vendor bundle (${this.formatSize(vendorSize)})`,
        solution: 'Optimize third-party dependencies',
        actions: [
          'Use modular imports (e.g., import only needed icons)',
          'Replace heavy libraries with lighter alternatives',
          'Check for duplicate dependencies',
        ],
      });
    }

    // CSS optimization
    const cssChunks = this.chunks.filter((chunk) => chunk.type === 'css');
    const cssSize = cssChunks.reduce((sum, chunk) => sum + chunk.size, 0);

    if (cssSize > 100 * 1024) {
      // 100KB
      this.recommendations.push({
        priority: 'LOW',
        category: 'CSS',
        issue: `Large CSS bundle (${this.formatSize(cssSize)})`,
        solution: 'Optimize CSS delivery',
        actions: [
          'Purge unused CSS',
          'Use critical CSS extraction',
          'Implement CSS code splitting',
        ],
      });
    }
  }

  printReport() {
    // logger.warn('\n📋 BUNDLE OPTIMIZATION REPORT');
    // logger.warn('====================================\n');

    // Summary
    // logger.warn('📊 SUMMARY');
    // logger.warn(`Total Bundle Size: ${this.formatSize(this.totalSize)}`);
    // logger.warn(`Target Size: ${this.formatSize(MAX_BUNDLE_SIZE)}`);
    // logger.warn(`Status: ${this.totalSize <= MAX_BUNDLE_SIZE ? '✅ OPTIMAL' : '❌ NEEDS OPTIMIZATION'}`);
    // logger.warn(`Chunks Analyzed: ${this.chunks.length}`);
    // logger.warn('');

    // Top chunks
    // logger.warn('🏆 LARGEST CHUNKS');
    // logger.warn('─'.repeat(50));
    // this.chunks.slice(0, 10).forEach((chunk, index) => {
    //   const status = chunk.size > LARGE_CHUNK_THRESHOLD ? '🔴' : '🟢';
    //   logger.warn(`${index + 1}. ${status} ${chunk.name} - ${this.formatSize(chunk.size)} (${chunk.type})`);
    // });
    // logger.warn('');

    // Recommendations
    // if (this.recommendations.length > 0) {
    //   logger.warn('💡 OPTIMIZATION RECOMMENDATIONS');
    //   logger.warn('─'.repeat(50));

    //   this.recommendations.forEach((rec, index) => {
    //     const priorityIcon = rec.priority === 'HIGH' ? '🔥' : rec.priority === 'MEDIUM' ? '⚠️' : '💡';
    //     logger.warn(`${index + 1}. ${priorityIcon} [${rec.priority}] ${rec.category}`);
    //     logger.warn(`   Issue: ${rec.issue}`);
    //     logger.warn(`   Solution: ${rec.solution}`);
    //     logger.warn(`   Actions:`);
    //     rec.actions.forEach(action => logger.warn(`   • ${action}`));
    //     logger.warn('');
    //   });
    // }

    // Next steps
    // logger.warn('🎯 NEXT STEPS');
    // logger.warn('─'.repeat(50));
    // logger.warn('1. Run: npm run optimize');
    // logger.warn('2. Implement dynamic imports for large components');
    // logger.warn('3. Use React.lazy() for non-critical features');
    // logger.warn('4. Run: npm run build:analyze for detailed analysis');
    // logger.warn('5. Monitor bundle size in CI/CD');
    // logger.warn('');

    // Write JSON report
    const report = {
      timestamp: new Date().toISOString(),
      totalSize: this.totalSize,
      targetSize: MAX_BUNDLE_SIZE,
      status:
        this.totalSize <= MAX_BUNDLE_SIZE ? 'optimal' : 'needs_optimization',
      chunks: this.chunks,
      recommendations: this.recommendations,
    };

    fs.writeFileSync(
      'bundle-optimization-report.json',
      JSON.stringify(report, null, 2),
    );
    // logger.warn('📁 Detailed report saved to: bundle-optimization-report.json');
  }

  formatSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Main execution
if (require.main === module) {
  const optimizer = new BundleOptimizer();
  optimizer.analyze();
}

module.exports = BundleOptimizer;

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
