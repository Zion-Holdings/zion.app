#!/usr/bin/env node

/**
 * Deployment Optimization Script
 * Prepares the Zion App for production deployment with all optimizations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting deployment optimization...\n');

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
        console.log('\n✅ Deployment optimization completed successfully!');
        this.printSummary();
      }
    } catch (error) {
      console.error('\n❌ Deployment optimization failed:', error.message);
      // If part of a larger script, don't exit process, throw instead
      if (isStandalone) process.exit(1);
      else throw error;
    }
  }

  async runPreDeployChecks() {
    console.log('🔍 Running pre-deployment checks...');
    
    // Check if required environment variables are set
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    ];

    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
    
    if (missingEnvVars.length > 0) {
      this.optimizationResults.warnings.push(
        `Missing environment variables: ${missingEnvVars.join(', ')}`
      );
    }

    // Check for TypeScript errors
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      console.log('   ✅ TypeScript check passed');
    } catch (error) {
      this.optimizationResults.warnings.push('TypeScript errors detected');
      console.log('   ⚠️  TypeScript warnings detected (continuing with build)');
    }

    // Check for security vulnerabilities
    try {
      execSync('npm audit --audit-level=high', { stdio: 'pipe' });
      console.log('   ✅ Security audit passed');
    } catch (error) {
      this.optimizationResults.warnings.push('Security vulnerabilities detected');
      console.log('   ⚠️  Security vulnerabilities detected');
    }
  }

  async optimizeBuild() {
    console.log('\n📦 Building optimized production bundle...');
    
    // Set production environment variables
    process.env.NODE_ENV = 'production';
    process.env.NEXT_TELEMETRY_DISABLED = '1';
    
    try {
      // Clean previous build
      if (fs.existsSync(this.buildDir)) {
        fs.rmSync(this.buildDir, { recursive: true, force: true });
        console.log('   🗑️  Cleaned previous build');
      }

      // Run production build
      execSync('npm run build', { stdio: 'inherit' });
      console.log('   ✅ Production build completed');
      
      this.optimizationResults.optimizationsApplied.push('Production build');
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async analyzeBundle() {
    console.log('\n📊 Analyzing bundle size...');
    
    try {
      // Get build statistics
      const buildManifest = path.join(this.buildDir, 'build-manifest.json');
      
      if (fs.existsSync(buildManifest)) {
        const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
        
        // Calculate total bundle size
        let totalSize = 0;
        const chunks = [];
        
        Object.entries(manifest.pages).forEach(([page, files]) => {
          files.forEach(file => {
            const filePath = path.join(this.buildDir, 'static', file);
            if (fs.existsSync(filePath)) {
              const size = fs.statSync(filePath).size;
              totalSize += size;
              chunks.push({ page, file, size });
            }
          });
        });

        this.optimizationResults.bundleSize = totalSize;
        
        console.log(`   📦 Total bundle size: ${this.formatBytes(totalSize)}`);
        
        // Find largest chunks
        const largestChunks = chunks
          .sort((a, b) => b.size - a.size)
          .slice(0, 5);
          
        console.log('   📋 Largest chunks:');
        largestChunks.forEach(chunk => {
          console.log(`      ${chunk.file}: ${this.formatBytes(chunk.size)}`);
        });

        // Check for bundle size warnings
        if (totalSize > 5 * 1024 * 1024) { // 5MB
          this.optimizationResults.warnings.push(
            `Large bundle size detected: ${this.formatBytes(totalSize)}`
          );
        }
      }
    } catch (error) {
      console.log('   ⚠️  Bundle analysis failed:', error.message);
    }
  }

  async generateOptimizationReport() {
    console.log('\n📄 Generating optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      version: this.getPackageVersion(),
      environment: 'production',
      optimizations: this.optimizationResults.optimizationsApplied,
      bundleSize: this.optimizationResults.bundleSize,
      bundleSizeFormatted: this.formatBytes(this.optimizationResults.bundleSize),
      warnings: this.optimizationResults.warnings,
      recommendations: this.generateRecommendations(),
      deploymentChecklist: this.generateDeploymentChecklist(),
    };

    // Save report
    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`   💾 Report saved to: ${reportPath}`);
    this.optimizationResults.reportPath = reportPath;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.optimizationResults.bundleSize > 3 * 1024 * 1024) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        title: 'Consider code splitting',
        description: 'Bundle size is large. Implement dynamic imports for heavy components.',
        action: 'Use React.lazy() and dynamic imports'
      });
    }

    if (this.optimizationResults.warnings.length > 0) {
      recommendations.push({
        type: 'security',
        priority: 'medium',
        title: 'Address warnings',
        description: 'Several warnings were detected during optimization.',
        action: 'Review and resolve warnings before deployment'
      });
    }

    recommendations.push({
      type: 'monitoring',
      priority: 'medium',
      title: 'Setup production monitoring',
      description: 'Enable performance monitoring in production.',
      action: 'Configure Sentry alerts and performance budgets'
    });

    return recommendations;
  }

  generateDeploymentChecklist() {
    return [
      {
        item: 'Environment variables configured',
        status: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'complete' : 'pending',
        required: true
      },
      {
        item: 'Production build successful',
        status: fs.existsSync(this.buildDir) ? 'complete' : 'pending',
        required: true
      },
      {
        item: 'Bundle size optimized',
        status: this.optimizationResults.bundleSize < 5 * 1024 * 1024 ? 'complete' : 'warning',
        required: false
      },
      {
        item: 'Security audit passed',
        status: this.optimizationResults.warnings.some(w => w.includes('Security')) ? 'warning' : 'complete',
        required: false
      },
      {
        item: 'Performance monitoring ready',
        status: 'manual-check',
        required: false
      }
    ];
  }

  printSummary() {
    console.log('\n📊 DEPLOYMENT OPTIMIZATION SUMMARY');
    console.log('=====================================');
    console.log(`Bundle Size: ${this.formatBytes(this.optimizationResults.bundleSize)}`);
    console.log(`Optimizations Applied: ${this.optimizationResults.optimizationsApplied.length}`);
    console.log(`Warnings: ${this.optimizationResults.warnings.length}`);
    
    if (this.optimizationResults.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.optimizationResults.warnings.forEach(warning => {
        console.log(`   • ${warning}`);
      });
    }

    console.log('\n🚀 NEXT STEPS:');
    console.log('   1. Review deployment report for detailed analysis');
    console.log('   2. Deploy to your hosting platform');
    console.log('   3. Configure production monitoring');
    console.log('   4. Run post-deployment tests');
    
    if (this.optimizationResults.reportPath) {
      console.log(`\n📄 Full report: ${this.optimizationResults.reportPath}`);
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
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
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
  runPreDeployChecks: async () => {
    const optimizer = new DeploymentOptimizer();
    await optimizer.runPreDeployChecks();
    return optimizer.optimizationResults; // Return results for inspection if needed
  },
  analyzeAndReport: async () => {
    const optimizer = new DeploymentOptimizer();
    // Ensure buildDir is set if not running the full optimize sequence
    optimizer.buildDir = path.join(process.cwd(), '.next');
    await optimizer.analyzeBundle();
    await optimizer.generateOptimizationReport();
    optimizer.printSummary(); // Optionally print summary
    return optimizer.optimizationResults;
  }
};