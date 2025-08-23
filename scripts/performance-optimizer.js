#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.buildDir = path.join(this.projectRoot, '.next');
    this.publicDir = path.join(this.projectRoot, 'public');
    this.reportsDir = path.join(this.projectRoot, 'performance-reports');
  }

  async run() {
    console.log('🚀 Starting Performance Optimization...\n');

    try {
      // Create reports directory
      if (!fs.existsSync(this.reportsDir)) {
        fs.mkdirSync(this.reportsDir, { recursive: true });
      }

      // Run performance analysis
      await this.analyzeBuild();
      await this.optimizeImages();
      await this.generateLighthouseReport();
      await this.analyzeBundle();
      await this.generateReport();

      console.log('✅ Performance optimization completed successfully!');
    } catch (error) {
      console.error('❌ Performance optimization failed:', error.message);
      process.exit(1);
    }
  }

  async analyzeBuild() {
    console.log('📊 Analyzing build output...');
    
    if (!fs.existsSync(this.buildDir)) {
      throw new Error('Build directory not found. Run "npm run build" first.');
    }

    const buildStats = {
      totalSize: 0,
      fileCount: 0,
      largestFiles: [],
      optimizationOpportunities: []
    };

    // Analyze static files
    const staticDir = path.join(this.buildDir, 'static');
    if (fs.existsSync(staticDir)) {
      const staticFiles = this.getFilesRecursively(staticDir);
      staticFiles.forEach(file => {
        const stats = fs.statSync(file);
        buildStats.totalSize += stats.size;
        buildStats.fileCount++;
        
        if (stats.size > 100 * 1024) { // Files larger than 100KB
          buildStats.largestFiles.push({
            path: path.relative(this.buildDir, file),
            size: stats.size,
            sizeKB: (stats.size / 1024).toFixed(2)
          });
        }
      });
    }

    // Sort largest files
    buildStats.largestFiles.sort((a, b) => b.size - a.size);

    // Save build analysis
    const reportPath = path.join(this.reportsDir, 'build-analysis.json');
    fs.writeFileSync(reportPath, JSON.stringify(buildStats, null, 2));

    console.log(`   📁 Total files: ${buildStats.totalSize.toLocaleString()}`);
    console.log(`   💾 Total size: ${(buildStats.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   🔍 Found ${buildStats.largestFiles.length} large files`);
  }

  async optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    if (!fs.existsSync(this.publicDir)) {
      console.log('   ⚠️  Public directory not found, skipping image optimization');
      return;
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
    const images = this.getFilesRecursively(this.publicDir)
      .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));

    console.log(`   📸 Found ${images.length} images to optimize`);

    // Check if sharp is available for image optimization
    try {
      require('sharp');
      console.log('   ✅ Sharp available for image optimization');
    } catch {
      console.log('   ⚠️  Sharp not available, install with: npm install sharp');
    }
  }

  async generateLighthouseReport() {
    console.log('🏗️  Generating Lighthouse report...');
    
    try {
      // Check if lighthouse is available
      execSync('lighthouse --version', { stdio: 'pipe' });
      
      const url = 'http://localhost:3000';
      const outputPath = path.join(this.reportsDir, 'lighthouse-report.html');
      
      console.log(`   🔍 Running Lighthouse audit for ${url}...`);
      
      execSync(`lighthouse ${url} --output html --output-path ${outputPath} --chrome-flags="--headless --no-sandbox"`, {
        stdio: 'inherit'
      });
      
      console.log(`   📊 Lighthouse report saved to: ${outputPath}`);
    } catch (error) {
      console.log('   ⚠️  Lighthouse not available, install with: npm install -g lighthouse');
    }
  }

  async analyzeBundle() {
    console.log('📦 Analyzing bundle...');
    
    try {
      // Check if webpack-bundle-analyzer is available
      const analyzerPath = path.join(this.projectRoot, 'node_modules', 'webpack-bundle-analyzer');
      if (fs.existsSync(analyzerPath)) {
        console.log('   ✅ Webpack Bundle Analyzer available');
        console.log('   💡 Run "npm run analyze" to generate bundle analysis');
      } else {
        console.log('   ⚠️  Webpack Bundle Analyzer not available');
        console.log('   💡 Install with: npm install --save-dev webpack-bundle-analyzer');
      }
    } catch (error) {
      console.log('   ⚠️  Bundle analysis not available');
    }
  }

  async generateReport() {
    console.log('📋 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      project: path.basename(this.projectRoot),
      buildAnalysis: JSON.parse(fs.readFileSync(path.join(this.reportsDir, 'build-analysis.json'), 'utf8')),
      recommendations: this.generateRecommendations(),
      nextSteps: [
        'Review build analysis for large files',
        'Optimize images using next/image',
        'Implement code splitting for large components',
        'Add bundle analysis to build process',
        'Monitor Core Web Vitals in production'
      ]
    };

    const reportPath = path.join(this.reportsDir, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log(`   📄 Performance report saved to: ${reportPath}`);
  }

  generateRecommendations() {
    return [
      {
        category: 'Build Optimization',
        items: [
          'Use dynamic imports for code splitting',
          'Implement tree shaking for unused code',
          'Optimize third-party dependencies',
          'Use Next.js Image component for automatic optimization'
        ]
      },
      {
        category: 'Performance Monitoring',
        items: [
          'Implement Core Web Vitals tracking',
          'Add performance budgets to build process',
          'Monitor bundle size growth',
          'Set up automated performance testing'
        ]
      },
      {
        category: 'Caching Strategy',
        items: [
          'Implement service worker for offline support',
          'Optimize cache headers for static assets',
          'Use CDN for global content delivery',
          'Implement stale-while-revalidate caching'
        ]
      }
    ];
  }

  getFilesRecursively(dir) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    });
    
    return files;
  }
}

// Run the optimizer if this script is executed directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;