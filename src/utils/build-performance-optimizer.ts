import { logWarn, logErrorToProduction } from '@/utils/productionLogger';

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
  type:
    | 'code-splitting'
    | 'tree-shaking'
    | 'compression'
    | 'caching'
    | 'lazy-loading';
  impact: 'high' | 'medium' | 'low';
  description: string;
  estimatedSaving: number; // in KB
  implementation: string;
}

class BuildPerformanceOptimizer {
  private _bundleAnalysis: BundleAnalysis[] = [];
  private _performanceMetrics: PerformanceMetrics;

  constructor() {
    this._performanceMetrics = {
      totalBundleSize: 0,
      largestChunks: [],
      duplicatedModules: [],
      unusedExports: [],
      optimizationOpportunities: [],
      recommendations: [],
    };
  }

  public async analyzeBuildOutput(
    buildDir: string = '.next',
  ): Promise<PerformanceMetrics> {
    try {
      // Analyze static chunks
      await this.analyzeStaticChunks(buildDir);

      // Analyze bundle composition
      await this.analyzeBundleComposition();

      // Identify optimization opportunities
      this.identifyOptimizations();

      // Generate recommendations
      this.generateRecommendations();

      return this._performanceMetrics;
    } catch {
      logErrorToProduction('❌ Error during build analysis:', error);
      throw error;
    }
  }

  private async analyzeStaticChunks(buildDir: string): Promise<void> {
    const fs = await import('fs');
    const _path = await import('path');

    const staticDir = path.join(buildDir, 'static', 'chunks');

    if (!fs.existsSync(staticDir)) {
      logWarn('⚠️ Static chunks directory not found');
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
          route: this.extractRouteFromChunk(file) || '', // ensure route is always a string
        };

        // Estimate gzipped size (roughly 30% of original)
        analysis.gzippedSize = Math.round(stats.size * 0.3);

        this._bundleAnalysis.push(analysis);
        this._performanceMetrics.totalBundleSize += stats.size;
      }
    }

    // Sort by size and identify largest chunks
    this._performanceMetrics.largestChunks = this._bundleAnalysis
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
  }

  private identifyOptimizations(): void {
    const opportunities: OptimizationOpportunity[] = [];

    // Check for oversized vendor chunks
    const largeVendorChunks = this._bundleAnalysis.filter(
      (chunk) => chunk.file.includes('vendor') && chunk.size > 500000, // > 500KB
    );

    if (largeVendorChunks.length > 0) {
      opportunities.push({
        type: 'code-splitting',
        impact: 'high',
        description:
          'Large vendor chunks detected. Consider splitting vendor libraries.',
        estimatedSaving: Math.round(
          (largeVendorChunks.reduce((total, chunk) => total + chunk.size, 0) *
            0.3) /
            1024,
        ),
        implementation:
          'Configure webpack splitChunks to separate large libraries like React, lodash, etc.',
      });
    }

    // Check for oversized page chunks
    const largePageChunks = this._bundleAnalysis.filter(
      (chunk) =>
        chunk.route &&
        !['vendor', 'common'].includes(chunk.route) &&
        chunk.size > 200000, // > 200KB
    );

    if (largePageChunks.length > 0) {
      opportunities.push({
        type: 'lazy-loading',
        impact: 'medium',
        description:
          'Large page chunks detected. Consider lazy loading components.',
        estimatedSaving: Math.round(
          (largePageChunks.reduce((total, chunk) => total + chunk.size, 0) *
            0.4) /
            1024,
        ),
        implementation:
          'Use React.lazy() and dynamic imports for heavy components',
      });
    }

    // Check total bundle size
    if (this._performanceMetrics.totalBundleSize > 2000000) {
      // > 2MB
      opportunities.push({
        type: 'tree-shaking',
        impact: 'high',
        description:
          'Total bundle size is large. Optimize imports and enable tree shaking.',
        estimatedSaving: Math.round(
          (this._performanceMetrics.totalBundleSize * 0.2) / 1024,
        ),
        implementation:
          'Use named imports, remove unused code, configure webpack for better tree shaking',
      });
    }

    // Check for compression opportunities
    const uncompressedSize = this._performanceMetrics.totalBundleSize;
    const estimatedGzippedSize = uncompressedSize * 0.3;

    if (estimatedGzippedSize > 500000) {
      // > 500KB gzipped
      opportunities.push({
        type: 'compression',
        impact: 'medium',
        description:
          'Large compressed bundle size. Enable better compression and caching.',
        estimatedSaving: Math.round((estimatedGzippedSize * 0.2) / 1024),
        implementation:
          'Enable Brotli compression, optimize asset caching, use CDN',
      });
    }

    this._performanceMetrics.optimizationOpportunities = opportunities;
  }

  private generateRecommendations(): void {
    const recommendations: string[] = [];

    // Based on analysis results
    if (this._performanceMetrics.largestChunks.length > 0) {
      const largestChunk = this._performanceMetrics.largestChunks[0];
      if (largestChunk) {
        recommendations.push(
          `🎯 Focus on optimizing ${largestChunk.file} (${this.formatSize(largestChunk.size)}) - your largest chunk`,
        );
      }
    }

    // Vendor optimization
    const vendorChunks = this._bundleAnalysis.filter((chunk) =>
      chunk.file.includes('vendor'),
    );
    if (vendorChunks.length > 0) {
      const vendorSize = vendorChunks.reduce(
        (total, chunk) => total + chunk.size,
        0,
      );
      if (vendorSize > this._performanceMetrics.totalBundleSize * 0.6) {
        recommendations.push(
          `📦 Vendor chunks are ${Math.round((vendorSize / this._performanceMetrics.totalBundleSize) * 100)}% of total bundle. Consider code splitting`,
        );
      }
    }

    // Performance budget recommendations
    const totalSizeMB =
      this._performanceMetrics.totalBundleSize / (1024 * 1024);
    if (totalSizeMB > 3) {
      recommendations.push(
        `⚡ Total bundle size (${totalSizeMB.toFixed(2)}MB) exceeds recommended 3MB limit. Implement lazy loading`,
      );
    }

    // Specific optimization recommendations
    this._performanceMetrics.optimizationOpportunities.forEach(
      (opportunity) => {
        if (opportunity.impact === 'high') {
          recommendations.push(
            `🔥 HIGH IMPACT: ${opportunity.description} (Est. saving: ${opportunity.estimatedSaving}KB)`,
          );
        }
      },
    );

    // General recommendations
    recommendations.push(
      '🚀 Enable Next.js experimental features like "optimizeCss" and "swcMinify"',
      '📱 Implement Progressive Web App features for better caching',
      '🎨 Optimize images with next/image and use WebP format',
      '⚡ Consider using a CDN for static assets',
      '🔍 Regular bundle analysis with webpack-bundle-analyzer',
    );

    this._performanceMetrics.recommendations = recommendations;
  }

  private formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  public generateReport(): string {
    const report = [
      `
🚀 BUILD PERFORMANCE ANALYSIS REPORT
====================================

📊 BUNDLE OVERVIEW
------------------
Total Bundle Size: ${this.formatSize(this._performanceMetrics.totalBundleSize)}
Number of Chunks: ${this._bundleAnalysis.length}
Estimated Gzipped: ${this.formatSize(this._performanceMetrics.totalBundleSize * 0.3)}

🔍 LARGEST CHUNKS
-----------------`,
    ];

    this._performanceMetrics.largestChunks
      .slice(0, 5)
      .forEach((chunk, index) => {
        report.push(
          `${index + 1}. ${chunk.file} - ${this.formatSize(chunk.size)}`,
        );
      });

    report.push(`
⚡ OPTIMIZATION OPPORTUNITIES
----------------------------`);

    this._performanceMetrics.optimizationOpportunities.forEach(
      (opportunity, index) => {
        report.push(
          `${index + 1}. [${opportunity.impact.toUpperCase()}] ${opportunity.description}`,
        );
        report.push(`   💡 ${opportunity.implementation}`);
        report.push(`   💰 Estimated saving: ${opportunity.estimatedSaving}KB`);
        report.push('');
      },
    );

    report.push(`
🎯 RECOMMENDATIONS
------------------`);

    this._performanceMetrics.recommendations.forEach((rec, index) => {
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
    const sizeMB = this._performanceMetrics.totalBundleSize / (1024 * 1024);
    if (sizeMB > 5) score -= 30;
    else if (sizeMB > 3) score -= 20;
    else if (sizeMB > 2) score -= 10;

    // Deduct points for large chunks
    const largeChunks = this._bundleAnalysis.filter(
      (chunk) => chunk.size > 500000,
    );
    score -= largeChunks.length * 5;

    // Deduct points for high-impact optimization opportunities
    const highImpactOpportunities =
      this._performanceMetrics.optimizationOpportunities.filter(
        (op) => op.impact === 'high',
      );
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
      optimizer.generateReport();

      // Remove all non-error/warn console statements at and after line 340
      // Remove logInfo(report);
      // Remove logInfo(`\n📄 Detailed report saved to: ${reportPath}`);
    } catch {
      logErrorToProduction('❌ Analysis failed:', error);
      process.exit(1);
    }
  }
}

export default BuildPerformanceOptimizer;
export {
  type BundleAnalysis,
  type PerformanceMetrics,
  type OptimizationOpportunity,
};
