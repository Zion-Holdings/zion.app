#!/usr/bin/env node

/**
 * Deployment Optimization Script
 * Prepares the Zion App for production deployment with all optimizations
 */

const fs = require('fs');
const path = require('path');
const { _execSync } = require('child_process');

// Comment out all console.log statements (lines 11, 35, 47, 65, 69, 72, 79, 82, 87, 97, 102, 111, 137, 144, 146, 157, 162, 180, 249, 250, 251, 252, 253, 256, 258, 262, 263, 264, 265, 266, 269)
// console.warn('🚀 Starting deployment optimization...\n');

class DeploymentOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.buildDir = path.join(this.projectRoot, '.next');
    this.optimizationResults = {
      bundleSize: 0,
      optimizationsApplied: [],
      warnings: [],
      performance: {},
    };
  }

  async optimize(isStandalone = true) {
    try {
      await this.runPreDeployChecks();
      if (isStandalone) {
        await this.optimizeBuild(); // Only run build if called standalone
      }
      await this.analyzeBundle();
      await this.generateOptimizationReport();

      if (isStandalone) {
        // console.warn('\n✅ Deployment optimization completed successfully!');
        this.printSummary();
      }
    } catch (_error) {
      // console.error('\n❌ Deployment optimization failed:', error.message);
      // If part of a larger script, don't exit process, throw instead
      if (isStandalone) process.exit(1);
      else throw error;
    }
  }

  async runPreDeployChecks() {
    // console.warn('🔍 Running pre-deployment checks...');

    // Check if required environment variables are set
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    ];

    const missingEnvVars = requiredEnvVars.filter(
      (envVar) => !process.env[envVar],
    );

    if (missingEnvVars.length > 0) {
      this.optimizationResults.warnings.push(
        `Missing environment variables: ${missingEnvVars.join(', ')}`,
      );
    }

    // Check for TypeScript errors (skip if SKIP_TYPE_CHECK is set)
    if (process.env.SKIP_TYPE_CHECK === 'true') {
      // console.warn('   ⏭️  TypeScript check skipped (SKIP_TYPE_CHECK=true)');
    } else {
      try {
        execSync('npx tsc --noEmit', { stdio: 'pipe' });
        // console.warn('   ✅ TypeScript check passed');
      } catch (_error) {
        this.optimizationResults.warnings.push('TypeScript errors detected');
        // console.warn('   ⚠️  TypeScript warnings detected (continuing with build)');
      }
    }

    // Check for security vulnerabilities
    try {
      execSync('npm audit --audit-level=high', { stdio: 'pipe' });
      // console.warn('   ✅ Security audit passed');
    } catch (_error) {
      this.optimizationResults.warnings.push(
        'Security vulnerabilities detected',
      );
      // console.warn('   ⚠️  Security vulnerabilities detected');
    }
  }

  async optimizeBuild() {
    // console.warn('\n📦 Building optimized production bundle...');

    // Set production environment variables
    process.env.NODE_ENV = 'production';
    process.env.NEXT_TELEMETRY_DISABLED = '1';

    try {
      // Clean previous build
      if (fs.existsSync(this.buildDir)) {
        fs.rmSync(this.buildDir, { recursive: true, force: true });
        // console.warn('   🗑️  Cleaned previous build');
      }

      // Run production build
      execSync('npm run build', { stdio: 'inherit' });
      // console.warn('   ✅ Production build completed');

      this.optimizationResults.optimizationsApplied.push('Production build');
    } catch (_error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async analyzeBundle() {
    // console.warn('\n📊 Analyzing bundle size...');

    try {
      // Get build statistics
      const buildManifest = path.join(this.buildDir, 'build-manifest.json');

      if (fs.existsSync(buildManifest)) {
        const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));

        // Calculate total bundle size
        let totalSize = 0;
        const chunks = [];

        Object.entries(manifest.pages).forEach(([page, files]) => {
          files.forEach((file) => {
            const filePath = path.join(this.buildDir, 'static', file);
            if (fs.existsSync(filePath)) {
              const size = fs.statSync(filePath).size;
              totalSize += size;
              chunks.push({ page, file, size });
            }
          });
        });

        this.optimizationResults.bundleSize = totalSize;

        // console.warn(`   📦 Total bundle size: ${this.formatBytes(totalSize)}`);

        // Find largest chunks
        const largestChunks = chunks
          .sort((a, b) => b.size - a.size)
          .slice(0, 5);

        // console.warn('   📋 Largest chunks:');
        largestChunks.forEach((chunk) => {
          // console.warn(`      ${chunk.file}: ${this.formatBytes(chunk.size)}`);
        });

        // Check for bundle size warnings
        if (totalSize > 5 * 1024 * 1024) {
          // 5MB
          this.optimizationResults.warnings.push(
            `Large bundle size detected: ${this.formatBytes(totalSize)}`,
          );
        }
      }
    } catch (_error) {
      // console.warn('   ⚠️  Bundle analysis failed:', error.message);
    }
  }

  async generateOptimizationReport() {
    // console.warn('\n📄 Generating optimization report...');

    const report = {
      timestamp: new Date().toISOString(),
      version: this.getPackageVersion(),
      environment: 'production',
      optimizations: this.optimizationResults.optimizationsApplied,
      bundleSize: this.optimizationResults.bundleSize,
      bundleSizeFormatted: this.formatBytes(
        this.optimizationResults.bundleSize,
      ),
      warnings: this.optimizationResults.warnings,
      recommendations: this.generateRecommendations(),
      deploymentChecklist: this.generateDeploymentChecklist(),
    };

    // Save report
    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // console.warn(`   💾 Report saved to: ${reportPath}`);
    this.optimizationResults.reportPath = reportPath;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.optimizationResults.bundleSize > 3 * 1024 * 1024) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        title: 'Consider code splitting',
        description:
          'Bundle size is large. Implement dynamic imports for heavy components.',
        action: 'Use React.lazy() and dynamic imports',
      });
    }

    if (this.optimizationResults.warnings.length > 0) {
      recommendations.push({
        type: 'security',
        priority: 'medium',
        title: 'Address warnings',
        description: 'Several warnings were detected during optimization.',
        action: 'Review and resolve warnings before deployment',
      });
    }

    recommendations.push({
      type: 'monitoring',
      priority: 'medium',
      title: 'Setup production monitoring',
      description: 'Enable performance monitoring in production.',
      action: 'Configure Sentry alerts and performance budgets',
    });

    return recommendations;
  }

  generateDeploymentChecklist() {
    return [
      {
        item: 'Environment variables configured',
        status: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'complete' : 'pending',
        required: true,
      },
      {
        item: 'Production build successful',
        status: fs.existsSync(this.buildDir) ? 'complete' : 'pending',
        required: true,
      },
      {
        item: 'Bundle size optimized',
        status:
          this.optimizationResults.bundleSize < 5 * 1024 * 1024
            ? 'complete'
            : 'warning',
        required: false,
      },
      {
        item: 'Security audit passed',
        status: this.optimizationResults.warnings.some((w) =>
          w.includes('Security'),
        )
          ? 'warning'
          : 'complete',
        required: false,
      },
      {
        item: 'Performance monitoring ready',
        status: 'manual-check',
        required: false,
      },
    ];
  }

  printSummary() {
    // console.warn('\n📊 DEPLOYMENT OPTIMIZATION SUMMARY');
    // console.warn('=====================================');
    // console.warn(`Bundle Size: ${this.formatBytes(this.optimizationResults.bundleSize)}`);
    // console.warn(`Optimizations Applied: ${this.optimizationResults.optimizationsApplied.length}`);
    // console.warn(`Warnings: ${this.optimizationResults.warnings.length}`);

    if (this.optimizationResults.warnings.length > 0) {
      // console.warn('\n⚠️  WARNINGS:');
      this.optimizationResults.warnings.forEach((warning) => {
        // console.warn(`   • ${warning}`);
      });
    }

    // console.warn('\n🚀 NEXT STEPS:');
    // console.warn('   1. Review deployment report for detailed analysis');
    // console.warn('   2. Deploy to your hosting platform');
    // console.warn('   3. Configure production monitoring');
    // console.warn('   4. Run post-deployment tests');

    if (this.optimizationResults.reportPath) {
      // console.warn(`\n📄 Full report: ${this.optimizationResults.reportPath}`);
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getPackageVersion() {
    try {
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'),
      );
      return packageJson.version || '1.0.0';
    } catch {
      return '1.0.0';
    }
  }
}

// Run optimization if script is executed directly
if (require.main === module) {
  const optimizer = new DeploymentOptimizer();
  optimizer.optimize(true).catch(console.error); // Pass true for standalone
}

// Export methods for use in other scripts
module.exports = {
  DeploymentOptimizer,
  _runPreDeployChecks: async () => {
    const optimizer = new DeploymentOptimizer();
    await optimizer.runPreDeployChecks();
    return optimizer.optimizationResults; // Return results for inspection if needed
  },
  _analyzeAndReport: async () => {
    const optimizer = new DeploymentOptimizer();
    // Ensure buildDir is set if not running the full optimize sequence
    optimizer.buildDir = path.join(process.cwd(), '.next');
    await optimizer.analyzeBundle();
    await optimizer.generateOptimizationReport();
    optimizer.printSummary(); // Optionally print summary
    return optimizer.optimizationResults;
  },
};
