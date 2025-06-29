#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Bundle Optimizer for Next.js 14 with 177 pages
class BundleOptimizer {
  constructor() {
    this.buildDir = path.join(process.cwd(), '.next');
    this.staticDir = path.join(this.buildDir, 'static');
    this.analysis = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      chunks: [],
      pages: [],
      assets: [],
      recommendations: [],
      performance: {
        score: 0,
        metrics: {}
      }
    };
  }

  async optimize() {
    console.log('🚀 Bundle Optimizer for Next.js 14 (177+ pages)');
    console.log('================================================\n');

    if (!fs.existsSync(this.buildDir)) {
      console.log('❌ Build directory not found. Run `npm run build` first.');
      return;
    }

    // Run analysis
    await this.analyzeBundle();
    await this.analyzePages();
    await this.analyzeAssets();
    await this.generateRecommendations();
    
    // Display results
    this.displayResults();
    
    // Save detailed report
    await this.saveReport();
    
    console.log('\n✅ Bundle optimization analysis complete!');
  }

  async analyzeBundle() {
    console.log('📊 Analyzing bundle composition...');
    
    const chunksDir = path.join(this.staticDir, 'chunks');
    if (!fs.existsSync(chunksDir)) return;

    const chunkFiles = fs.readdirSync(chunksDir);
    
    for (const file of chunkFiles) {
      if (!file.endsWith('.js')) continue;
      
      const filePath = path.join(chunksDir, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      
      this.analysis.totalSize += size;
      
      const chunkInfo = {
        name: file,
        size,
        sizeKB: Math.round(size / 1024),
        type: this.categorizeChunk(file),
        isLarge: size > 500 * 1024, // > 500KB
        recommendations: []
      };

      // Add specific recommendations for large chunks
      if (chunkInfo.isLarge) {
        chunkInfo.recommendations.push('Consider code splitting or lazy loading');
      }

      this.analysis.chunks.push(chunkInfo);
    }

    // Sort chunks by size
    this.analysis.chunks.sort((a, b) => b.size - a.size);
    
    console.log(`   📦 Total bundle size: ${(this.analysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   🧩 JavaScript chunks: ${this.analysis.chunks.length}`);
  }

  categorizeChunk(filename) {
    if (filename.includes('framework')) return 'framework';
    if (filename.includes('vendor') || filename.includes('node_modules')) return 'vendor';
    if (filename.includes('pages')) return 'page';
    if (filename.includes('common')) return 'common';
    if (filename.includes('runtime')) return 'runtime';
    if (filename.includes('webpack')) return 'webpack';
    return 'application';
  }

  async analyzePages() {
    console.log('\n📄 Analyzing page optimization...');
    
    const buildManifestPath = path.join(this.buildDir, 'build-manifest.json');
    if (!fs.existsSync(buildManifestPath)) return;

    const manifest = JSON.parse(fs.readFileSync(buildManifestPath, 'utf8'));
    const pages = Object.keys(manifest.pages || {});
    
    this.analysis.pages = pages.map(page => ({
      route: page,
      chunks: manifest.pages[page] || [],
      chunkCount: (manifest.pages[page] || []).length,
      estimatedSize: this.calculatePageSize(manifest.pages[page] || [])
    }));

    console.log(`   📋 Total pages: ${pages.length}`);
    console.log(`   📊 Average chunks per page: ${(this.analysis.pages.reduce((sum, p) => sum + p.chunkCount, 0) / pages.length).toFixed(1)}`);
  }

  calculatePageSize(chunks) {
    return chunks.reduce((total, chunk) => {
      const chunkInfo = this.analysis.chunks.find(c => chunk.includes(c.name.replace('.js', '')));
      return total + (chunkInfo ? chunkInfo.size : 0);
    }, 0);
  }

  async analyzeAssets() {
    console.log('\n🖼️  Analyzing static assets...');
    
    const mediaDir = path.join(this.staticDir, 'media');
    const cssDir = path.join(this.staticDir, 'css');
    
    // Analyze CSS
    if (fs.existsSync(cssDir)) {
      const cssFiles = fs.readdirSync(cssDir);
      for (const file of cssFiles) {
        const filePath = path.join(cssDir, file);
        const stats = fs.statSync(filePath);
        this.analysis.assets.push({
          name: file,
          type: 'css',
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024)
        });
      }
    }

    // Analyze media files
    if (fs.existsSync(mediaDir)) {
      const mediaFiles = fs.readdirSync(mediaDir);
      for (const file of mediaFiles) {
        const filePath = path.join(mediaDir, file);
        const stats = fs.statSync(filePath);
        this.analysis.assets.push({
          name: file,
          type: this.getAssetType(file),
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024)
        });
      }
    }

    console.log(`   🎨 CSS files: ${this.analysis.assets.filter(a => a.type === 'css').length}`);
    console.log(`   🖼️  Media files: ${this.analysis.assets.filter(a => a.type !== 'css').length}`);
  }

  getAssetType(filename) {
    const ext = path.extname(filename).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'].includes(ext)) return 'image';
    if (['.mp4', '.webm', '.mov'].includes(ext)) return 'video';
    if (['.woff', '.woff2', '.ttf', '.otf'].includes(ext)) return 'font';
    if (['.svg'].includes(ext)) return 'svg';
    return 'other';
  }

  async generateRecommendations() {
    console.log('\n💡 Generating optimization recommendations...');
    
    const recommendations = [];

    // Bundle size recommendations
    if (this.analysis.totalSize > 3 * 1024 * 1024) { // > 3MB
      recommendations.push({
        priority: 'high',
        category: 'bundle-size',
        title: 'Large Bundle Size',
        description: `Total bundle size is ${(this.analysis.totalSize / 1024 / 1024).toFixed(2)}MB`,
        action: 'Implement aggressive code splitting and lazy loading',
        impact: 'High - reduces initial load time',
        effort: 'Medium'
      });
    }

    // Large chunk recommendations
    const largeChunks = this.analysis.chunks.filter(c => c.size > 500 * 1024);
    if (largeChunks.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'code-splitting',
        title: 'Large Chunks Detected',
        description: `${largeChunks.length} chunks are larger than 500KB`,
        action: 'Split large chunks using dynamic imports',
        impact: 'High - improves initial load performance',
        effort: 'Medium',
        chunks: largeChunks.map(c => ({ name: c.name, size: c.sizeKB }))
      });
    }

    // Framework chunk optimization
    const frameworkChunk = this.analysis.chunks.find(c => c.type === 'framework');
    if (frameworkChunk && frameworkChunk.size > 300 * 1024) {
      recommendations.push({
        priority: 'medium',
        category: 'framework',
        title: 'Large Framework Chunk',
        description: `Framework chunk is ${frameworkChunk.sizeKB}KB`,
        action: 'Optimize React/Next.js imports and remove unused features',
        impact: 'Medium - affects all pages',
        effort: 'Low'
      });
    }

    // Vendor chunk optimization
    const vendorChunks = this.analysis.chunks.filter(c => c.type === 'vendor');
    const totalVendorSize = vendorChunks.reduce((sum, c) => sum + c.size, 0);
    if (totalVendorSize > 1 * 1024 * 1024) { // > 1MB
      recommendations.push({
        priority: 'medium',
        category: 'vendor',
        title: 'Large Vendor Dependencies',
        description: `Vendor chunks total ${Math.round(totalVendorSize / 1024)}KB`,
        action: 'Review and optimize third-party dependencies',
        impact: 'Medium - reduces bundle size',
        effort: 'High'
      });
    }

    // Page optimization
    const heavyPages = this.analysis.pages.filter(p => p.estimatedSize > 1 * 1024 * 1024);
    if (heavyPages.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'pages',
        title: 'Heavy Pages Detected',
        description: `${heavyPages.length} pages have large bundle sizes`,
        action: 'Implement page-level code splitting',
        impact: 'Medium - improves specific page performance',
        effort: 'Medium'
      });
    }

    // Asset optimization
    const largeAssets = this.analysis.assets.filter(a => a.size > 100 * 1024);
    if (largeAssets.length > 0) {
      recommendations.push({
        priority: 'low',
        category: 'assets',
        title: 'Large Static Assets',
        description: `${largeAssets.length} assets are larger than 100KB`,
        action: 'Optimize images and compress assets',
        impact: 'Low - improves overall page weight',
        effort: 'Low'
      });
    }

    // Performance optimizations
    recommendations.push({
      priority: 'medium',
      category: 'performance',
      title: 'Runtime Performance',
      description: 'Implement performance monitoring and optimization',
      action: 'Add bundle monitoring and tree shaking',
      impact: 'Medium - ongoing performance insights',
      effort: 'Low'
    });

    this.analysis.recommendations = recommendations;
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Bundle size penalties
    if (this.analysis.totalSize > 3 * 1024 * 1024) score -= 20;
    else if (this.analysis.totalSize > 2 * 1024 * 1024) score -= 10;
    
    // Large chunk penalties
    const largeChunks = this.analysis.chunks.filter(c => c.size > 500 * 1024);
    score -= largeChunks.length * 5;
    
    // Too many chunks penalty
    if (this.analysis.chunks.length > 50) score -= 10;
    
    return Math.max(0, score);
  }

  displayResults() {
    console.log('\n📊 OPTIMIZATION RESULTS');
    console.log('========================');
    
    const score = this.calculatePerformanceScore();
    const scoreEmoji = score >= 80 ? '🟢' : score >= 60 ? '🟡' : '🔴';
    
    console.log(`${scoreEmoji} Performance Score: ${score}/100`);
    console.log(`📦 Total Bundle Size: ${(this.analysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`🧩 Total Chunks: ${this.analysis.chunks.length}`);
    console.log(`📄 Total Pages: ${this.analysis.pages.length}`);
    
    // Top 5 largest chunks
    console.log('\n🔥 Largest Chunks:');
    this.analysis.chunks.slice(0, 5).forEach((chunk, i) => {
      const typeEmoji = {
        framework: '⚛️',
        vendor: '📦',
        page: '📄',
        common: '🔗',
        runtime: '⚙️'
      }[chunk.type] || '📜';
      
      console.log(`   ${i + 1}. ${typeEmoji} ${chunk.name} (${chunk.sizeKB}KB)`);
    });

    // Priority recommendations
    console.log('\n🎯 Priority Recommendations:');
    const highPriority = this.analysis.recommendations.filter(r => r.priority === 'high');
    if (highPriority.length === 0) {
      console.log('   ✅ No high-priority optimizations needed!');
    } else {
      highPriority.forEach((rec, i) => {
        console.log(`   ${i + 1}. ${rec.title}`);
        console.log(`      📋 ${rec.description}`);
        console.log(`      💡 ${rec.action}`);
        console.log(`      📈 Impact: ${rec.impact}`);
        console.log('');
      });
    }
  }

  async saveReport() {
    const reportPath = path.join(process.cwd(), 'bundle-optimization-report.json');
    
    const report = {
      ...this.analysis,
      performance: {
        score: this.calculatePerformanceScore(),
        metrics: {
          bundleSizeMB: Math.round(this.analysis.totalSize / 1024 / 1024 * 100) / 100,
          chunkCount: this.analysis.chunks.length,
          pageCount: this.analysis.pages.length,
          averageChunkSize: Math.round(this.analysis.totalSize / this.analysis.chunks.length / 1024),
          largeChunkCount: this.analysis.chunks.filter(c => c.size > 500 * 1024).length
        }
      },
      nextSteps: [
        'Review high-priority recommendations',
        'Implement dynamic imports for large components',
        'Monitor bundle size in CI/CD pipeline',
        'Set up performance budgets',
        'Regular bundle analysis and optimization'
      ]
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📋 Detailed report saved to: ${reportPath}`);
  }
}

// CLI execution
if (require.main === module) {
  const optimizer = new BundleOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = BundleOptimizer; 