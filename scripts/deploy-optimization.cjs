
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


/**
 * Deployment Optimization Script
 * Prepares the Zion App for production deployment with all optimizations
 */

const fs = require('fs')
const path = require('path')
const { _execSync } = require('child_process');

// Comment out all console.log statements (lines 11, 35, 47, 65, 69, 72, 79, 82, 87, 97, 102, 111, 137, 144, 146, 157, 162, 180, 249, 250, 251, 252, 253, 256, 258, 262, 263, 264, 265, 266, 269)
// logger.warn('🚀 Starting deployment optimization...\n')
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
        // logger.warn('\n✅ Deployment optimization completed successfully!');
        this.printSummary();
      }
    } catch (_error) {
      // logger.error('\n❌ Deployment optimization failed:', error.message);
      // If part of a larger script, don't exit process, throw instead
      if (isStandalone) process.exit(1);
      else throw error;
    }
  }

  async runPreDeployChecks() {
    // logger.warn('🔍 Running pre-deployment checks...');

    // Check if required environment variables are set
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    ]
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
      // logger.warn('   ⏭️  TypeScript check skipped (SKIP_TYPE_CHECK=true)');
    } else {
      try {
        execSync('npx tsc --noEmit', { stdio: 'pipe' });
        // logger.warn('   ✅ TypeScript check passed');
      } catch (_error) {
        this.optimizationResults.warnings.push('TypeScript errors detected');
        // logger.warn('   ⚠️  TypeScript warnings detected (continuing with build)');
      }
    }

    // Check for security vulnerabilities
    try {
      execSync('npm audit --audit-level=high', { stdio: 'pipe' });
      // logger.warn('   ✅ Security audit passed');
    } catch (_error) {
      this.optimizationResults.warnings.push(
        'Security vulnerabilities detected',
      );
      // logger.warn('   ⚠️  Security vulnerabilities detected');
    }
  }

  async optimizeBuild() {
    // logger.warn('\n📦 Building optimized production bundle...');

    // Set production environment variables
    process.env.NODE_ENV = 'production';
    process.env.NEXT_TELEMETRY_DISABLED = '1';

    try {
      // Clean previous build
      if (fs.existsSync(this.buildDir)) {
        fs.rmSync(this.buildDir, { recursive: true, force: true });
        // logger.warn('   🗑️  Cleaned previous build');
      }

      // Run production build
      execSync('npm run build', { stdio: 'inherit' });
      // logger.warn('   ✅ Production build completed');

      this.optimizationResults.optimizationsApplied.push('Production build');
    } catch (_error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async analyzeBundle() {
    // logger.warn('\n📊 Analyzing bundle size...');

    try {
      // Get build statistics
      const buildManifest = path.join(this.buildDir, 'build-manifest.json');

      if (fs.existsSync(buildManifest)) {
        const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));

        // Calculate total bundle size
        let totalSize = 0
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

        // logger.warn(`   📦 Total bundle size: ${this.formatBytes(totalSize)}`);

        // Find largest chunks
        const largestChunks = chunks
          .sort((a, b) => b.size - a.size)
          .slice(0, 5);

        // logger.warn('   📋 Largest chunks:');
        largestChunks.forEach((chunk) => {
          // logger.warn(`      ${chunk.file}: ${this.formatBytes(chunk.size)}`);
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
      // logger.warn('   ⚠️  Bundle analysis failed:', error.message);
    }
  }

  async generateOptimizationReport() {
    // logger.warn('\n📄 Generating optimization report...')
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

    // logger.warn(`   💾 Report saved to: ${reportPath}`);
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
    // logger.warn('\n📊 DEPLOYMENT OPTIMIZATION SUMMARY');
    // logger.warn('=====================================');
    // logger.warn(`Bundle Size: ${this.formatBytes(this.optimizationResults.bundleSize)}`);
    // logger.warn(`Optimizations Applied: ${this.optimizationResults.optimizationsApplied.length}`);
    // logger.warn(`Warnings: ${this.optimizationResults.warnings.length}`);

    if (this.optimizationResults.warnings.length > 0) {
      // logger.warn('\n⚠️  WARNINGS:');
      this.optimizationResults.warnings.forEach((warning) => {
        // logger.warn(`   • ${warning}`);
      });
    }

    // logger.warn('\n🚀 NEXT STEPS:');
    // logger.warn('   1. Review deployment report for detailed analysis');
    // logger.warn('   2. Deploy to your hosting platform');
    // logger.warn('   3. Configure production monitoring');
    // logger.warn('   4. Run post-deployment tests');

    if (this.optimizationResults.reportPath) {
      // logger.warn(`\n📄 Full report: ${this.optimizationResults.reportPath}`);
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes'
const k = 1024
const sizes = ['Bytes', 'KB', 'MB', 'GB']
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

