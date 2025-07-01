// Build Performance Optimizer
// Analyzes bundle sizes, identifies optimization opportunities, and provides recommendations

interface BundleAnalysis {
  file: string;
  size: number;
  gzippedSize?: number;
  type: 'js' | 'css' | 'image' | 'font' | 'other';
  route?: string;
  isChunk: boolean;
  dependencies?: string[];
}

interface PerformanceMetrics {
  totalBundleSize: number;
  largestChunks: BundleAnalysis[];
  duplicatedModules: string[];
  unusedExports: string[];
  optimizationOpportunities: OptimizationOpportunity[];
  recommendations: string[];
}

interface OptimizationOpportunity {
  type: 'code-splitting' | 'tree-shaking' | 'compression' | 'caching' | 'lazy-loading';
  impact: 'high' | 'medium' | 'low';
  description: string;
  estimatedSaving: number; // in KB
  implementation: string;
}

class BuildPerformanceOptimizer {
  private bundleAnalysis: BundleAnalysis[] = [];
  private performanceMetrics: PerformanceMetrics;

  constructor() {
    this.performanceMetrics = {
      totalBundleSize: 0,
      largestChunks: [],
      duplicatedModules: [],
      unusedExports: [],
      optimizationOpportunities: [],
      recommendations: []
    };
  }

  public async analyzeBuildOutput(buildDir: string = '.next'): Promise<PerformanceMetrics> {
    console.log('🔍 Starting build performance analysis...');
    
    try {
      // Analyze static chunks
      await this.analyzeStaticChunks(buildDir);
      
      // Analyze bundle composition
      await this.analyzeBundleComposition();
      
      // Identify optimization opportunities
      this.identifyOptimizations();
      
      // Generate recommendations
      this.generateRecommendations();
      
      console.log('✅ Build performance analysis complete');
      return this.performanceMetrics;
      
    } catch (error) {
      console.error('❌ Error during build analysis:', error);
      throw error;
    }
  }

  private async analyzeStaticChunks(buildDir: string): Promise<void> {
    const fs = await import('fs');
    const path = await import('path');
    
    const staticDir = path.join(buildDir, 'static', 'chunks');
    
    if (!fs.existsSync(staticDir)) {
      console.warn('⚠️ Static chunks directory not found');
      return;
    }

    const files = fs.readdirSync(staticDir, { recursive: true }) as string[];
    
    for (const file of files) {
      if (typeof file === 'string' && file.endsWith('.js')) {
        const filePath = path.join(staticDir, file);
        const stats = fs.statSync(filePath);
        
        const analysis: BundleAnalysis = {
          file: file,
          size: stats.size,
          type: 'js',
          isChunk: true,
          route: this.extractRouteFromChunk(file)
        };

        // Estimate gzipped size (roughly 30% of original)
        analysis.gzippedSize = Math.round(stats.size * 0.3);
        
        this.bundleAnalysis.push(analysis);
        this.performanceMetrics.totalBundleSize += stats.size;
      }
    }

    // Sort by size and identify largest chunks
    this.performanceMetrics.largestChunks = this.bundleAnalysis
      .sort((a, b) => b.size - a.size)
      .slice(0, 10);
  }

  private extractRouteFromChunk(filename: string): string | undefined {
    // Extract route information from chunk filename
    if (filename.includes('pages/')) {
      const match = filename.match(/pages\/(.+?)-[a-f0-9]+\.js$/);
      return match ? match[1] : undefined;
    }
    
    if (filename.includes('vendors')) return 'vendor';
    if (filename.includes('common')) return 'common';
    if (filename.includes('runtime')) return 'runtime';
    
    return undefined;
  }

  private async analyzeBundleComposition(): Promise<void> {
    // Analyze common patterns that indicate optimization opportunities
    const vendorChunks = this.bundleAnalysis.filter(chunk => 
      chunk.file.includes('vendor') || chunk.file.includes('node_modules')
    );
    
    const pageChunks = this.bundleAnalysis.filter(chunk => 
      chunk.route && !['vendor', 'common', 'runtime'].includes(chunk.route)
    );

    // Calculate vendor bundle size
    const vendorSize = vendorChunks.reduce((total, chunk) => total + chunk.size, 0);
    const pageSize = pageChunks.reduce((total, chunk) => total + chunk.size, 0);

    console.log(`📊 Bundle composition:`);
    console.log(`  Vendor chunks: ${this.formatSize(vendorSize)} (${vendorChunks.length} files)`);
    console.log(`  Page chunks: ${this.formatSize(pageSize)} (${pageChunks.length} files)`);
    console.log(`  Total: ${this.formatSize(this.performanceMetrics.totalBundleSize)}`);
  }

  private identifyOptimizations(): void {
    const opportunities: OptimizationOpportunity[] = [];

    // Check for oversized vendor chunks
    const largeVendorChunks = this.bundleAnalysis.filter(chunk => 
      chunk.file.includes('vendor') && chunk.size > 500000 // > 500KB
    );

    if (largeVendorChunks.length > 0) {
      opportunities.push({
        type: 'code-splitting',
        impact: 'high',
        description: 'Large vendor chunks detected. Consider splitting vendor libraries.',
        estimatedSaving: Math.round(largeVendorChunks.reduce((total, chunk) => total + chunk.size, 0) * 0.3 / 1024),
        implementation: 'Configure webpack splitChunks to separate large libraries like React, lodash, etc.'
      });
    }

    // Check for oversized page chunks
    const largePageChunks = this.bundleAnalysis.filter(chunk => 
      chunk.route && !['vendor', 'common'].includes(chunk.route) && chunk.size > 200000 // > 200KB
    );

    if (largePageChunks.length > 0) {
      opportunities.push({
        type: 'lazy-loading',
        impact: 'medium',
        description: 'Large page chunks detected. Consider lazy loading components.',
        estimatedSaving: Math.round(largePageChunks.reduce((total, chunk) => total + chunk.size, 0) * 0.4 / 1024),
        implementation: 'Use React.lazy() and dynamic imports for heavy components'
      });
    }

    // Check total bundle size
    if (this.performanceMetrics.totalBundleSize > 2000000) { // > 2MB
      opportunities.push({
        type: 'tree-shaking',
        impact: 'high',
        description: 'Total bundle size is large. Optimize imports and enable tree shaking.',
        estimatedSaving: Math.round(this.performanceMetrics.totalBundleSize * 0.2 / 1024),
        implementation: 'Use named imports, remove unused code, configure webpack for better tree shaking'
      });
    }

    // Check for compression opportunities
    const uncompressedSize = this.performanceMetrics.totalBundleSize;
    const estimatedGzippedSize = uncompressedSize * 0.3;
    
    if (estimatedGzippedSize > 500000) { // > 500KB gzipped
      opportunities.push({
        type: 'compression',
        impact: 'medium',
        description: 'Large compressed bundle size. Enable better compression and caching.',
        estimatedSaving: Math.round(estimatedGzippedSize * 0.2 / 1024),
        implementation: 'Enable Brotli compression, optimize asset caching, use CDN'
      });
    }

    this.performanceMetrics.optimizationOpportunities = opportunities;
  }

  private generateRecommendations(): void {
    const recommendations: string[] = [];

    // Based on analysis results
    if (this.performanceMetrics.largestChunks.length > 0) {
      const largestChunk = this.performanceMetrics.largestChunks[0];
      if (largestChunk) {
        recommendations.push(
          `🎯 Focus on optimizing ${largestChunk.file} (${this.formatSize(largestChunk.size)}) - your largest chunk`
        );
      }
    }

    // Vendor optimization
    const vendorChunks = this.bundleAnalysis.filter(chunk => chunk.file.includes('vendor'));
    if (vendorChunks.length > 0) {
      const vendorSize = vendorChunks.reduce((total, chunk) => total + chunk.size, 0);
      if (vendorSize > this.performanceMetrics.totalBundleSize * 0.6) {
        recommendations.push(
          `📦 Vendor chunks are ${Math.round(vendorSize / this.performanceMetrics.totalBundleSize * 100)}% of total bundle. Consider code splitting`
        );
      }
    }

    // Performance budget recommendations
    const totalSizeMB = this.performanceMetrics.totalBundleSize / (1024 * 1024);
    if (totalSizeMB > 3) {
      recommendations.push(
        `⚡ Total bundle size (${totalSizeMB.toFixed(2)}MB) exceeds recommended 3MB limit. Implement lazy loading`
      );
    }

    // Specific optimization recommendations
    this.performanceMetrics.optimizationOpportunities.forEach(opportunity => {
      if (opportunity.impact === 'high') {
        recommendations.push(
          `🔥 HIGH IMPACT: ${opportunity.description} (Est. saving: ${opportunity.estimatedSaving}KB)`
        );
      }
    });

    // General recommendations
    recommendations.push(
      '🚀 Enable Next.js experimental features like "optimizeCss" and "swcMinify"',
      '📱 Implement Progressive Web App features for better caching',
      '🎨 Optimize images with next/image and use WebP format',
      '⚡ Consider using a CDN for static assets',
      '🔍 Regular bundle analysis with webpack-bundle-analyzer'
    );

    this.performanceMetrics.recommendations = recommendations;
  }

  private formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  public generateReport(): string {
    const report = [`
🚀 BUILD PERFORMANCE ANALYSIS REPORT
====================================

📊 BUNDLE OVERVIEW
------------------
Total Bundle Size: ${this.formatSize(this.performanceMetrics.totalBundleSize)}
Number of Chunks: ${this.bundleAnalysis.length}
Estimated Gzipped: ${this.formatSize(this.performanceMetrics.totalBundleSize * 0.3)}

🔍 LARGEST CHUNKS
-----------------`];

    this.performanceMetrics.largestChunks.slice(0, 5).forEach((chunk, index) => {
      report.push(`${index + 1}. ${chunk.file} - ${this.formatSize(chunk.size)}`);
    });

    report.push(`
⚡ OPTIMIZATION OPPORTUNITIES
----------------------------`);

    this.performanceMetrics.optimizationOpportunities.forEach((opportunity, index) => {
      report.push(`${index + 1}. [${opportunity.impact.toUpperCase()}] ${opportunity.description}`);
      report.push(`   💡 ${opportunity.implementation}`);
      report.push(`   💰 Estimated saving: ${opportunity.estimatedSaving}KB`);
      report.push('');
    });

    report.push(`
🎯 RECOMMENDATIONS
------------------`);

    this.performanceMetrics.recommendations.forEach((rec, index) => {
      report.push(`${index + 1}. ${rec}`);
    });

    report.push(`
📈 PERFORMANCE SCORE
--------------------`);

    const score = this.calculatePerformanceScore();
    report.push(`Overall Score: ${score}/100 ${this.getScoreEmoji(score)}`);
    report.push(`Status: ${this.getPerformanceStatus(score)}`);

    return report.join('\n');
  }

  private calculatePerformanceScore(): number {
    let score = 100;
    
    // Deduct points based on bundle size
    const sizeMB = this.performanceMetrics.totalBundleSize / (1024 * 1024);
    if (sizeMB > 5) score -= 30;
    else if (sizeMB > 3) score -= 20;
    else if (sizeMB > 2) score -= 10;
    
    // Deduct points for large chunks
    const largeChunks = this.bundleAnalysis.filter(chunk => chunk.size > 500000);
    score -= largeChunks.length * 5;
    
    // Deduct points for high-impact optimization opportunities
    const highImpactOpportunities = this.performanceMetrics.optimizationOpportunities
      .filter(op => op.impact === 'high');
    score -= highImpactOpportunities.length * 15;
    
    return Math.max(0, Math.min(100, score));
  }

  private getScoreEmoji(score: number): string {
    if (score >= 90) return '🟢';
    if (score >= 70) return '🟡';
    if (score >= 50) return '🟠';
    return '🔴';
  }

  private getPerformanceStatus(score: number): string {
    if (score >= 90) return 'Excellent - Ready for production';
    if (score >= 70) return 'Good - Minor optimizations recommended';
    if (score >= 50) return 'Fair - Several optimizations needed';
    return 'Poor - Significant optimizations required';
  }

  // Static method to run analysis from command line
  public static async runAnalysis(buildDir?: string): Promise<void> {
    const optimizer = new BuildPerformanceOptimizer();
    
    try {
      await optimizer.analyzeBuildOutput(buildDir);
      const report = optimizer.generateReport();
      
      console.log(report);
      
      // Save report to file
      const fs = await import('fs');
      const reportPath = 'build-performance-report.md';
      fs.writeFileSync(reportPath, report);
      console.log(`\n📄 Detailed report saved to: ${reportPath}`);
      
    } catch (error) {
      console.error('❌ Analysis failed:', error);
      process.exit(1);
    }
  }
}

export default BuildPerformanceOptimizer;
export { type BundleAnalysis, type PerformanceMetrics, type OptimizationOpportunity };