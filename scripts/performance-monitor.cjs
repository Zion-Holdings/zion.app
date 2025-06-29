#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Tracks build performance, bundle sizes, and development metrics
 */

const { performance } = require('perf_hooks');
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: null,
      bundleSize: null,
      chunkCount: null,
      timestamp: new Date().toISOString(),
      warnings: [],
      errors: []
    };
    this.startTime = performance.now();
  }

  // Monitor Next.js build performance
  async monitorBuild() {
    console.log('🔍 Performance Monitor Starting...');
    
    try {
      // Check if build artifacts exist
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        await this.analyzeBuildArtifacts(buildDir);
      }

      // Monitor development server performance
      await this.checkDevServerHealth();
      
      // Generate performance report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      this.metrics.errors.push(error.message);
    }
  }

  async analyzeBuildArtifacts(buildDir) {
    try {
      // Analyze static chunks
      const staticDir = path.join(buildDir, 'static', 'chunks');
      if (fs.existsSync(staticDir)) {
        const chunks = fs.readdirSync(staticDir).filter(file => file.endsWith('.js'));
        this.metrics.chunkCount = chunks.length;
        
        // Calculate total bundle size
        let totalSize = 0;
        chunks.forEach(chunk => {
          const chunkPath = path.join(staticDir, chunk);
          const stats = fs.statSync(chunkPath);
          totalSize += stats.size;
        });
        
        this.metrics.bundleSize = this.formatBytes(totalSize);
        
        console.log(`📦 Bundle Analysis:`);
        console.log(`   Chunks: ${this.metrics.chunkCount}`);
        console.log(`   Total Size: ${this.metrics.bundleSize}`);
      }
    } catch (error) {
      this.metrics.warnings.push(`Bundle analysis failed: ${error.message}`);
    }
  }

  async checkDevServerHealth() {
    try {
      const response = await fetch('http://localhost:3000/api/health').catch(() => null);
      if (response && response.ok) {
        console.log('✅ Development server: Healthy');
        this.metrics.devServerHealth = 'healthy';
      } else {
        console.log('⚠️  Development server: Not responding');
        this.metrics.devServerHealth = 'offline';
      }
    } catch (error) {
      this.metrics.devServerHealth = 'error';
      this.metrics.warnings.push(`Dev server check failed: ${error.message}`);
    }
  }

  generateReport() {
    const endTime = performance.now();
    this.metrics.buildTime = `${(endTime - this.startTime).toFixed(2)}ms`;
    
    console.log('\n📊 Performance Report');
    console.log('=====================');
    console.log(`⏱️  Monitoring Time: ${this.metrics.buildTime}`);
    console.log(`📦 Bundle Size: ${this.metrics.bundleSize || 'Not available'}`);
    console.log(`🧩 Chunk Count: ${this.metrics.chunkCount || 'Not available'}`);
    console.log(`🏥 Dev Server: ${this.metrics.devServerHealth || 'Unknown'}`);
    
    if (this.metrics.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      this.metrics.warnings.forEach(warning => console.log(`   - ${warning}`));
    }
    
    if (this.metrics.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.metrics.errors.forEach(error => console.log(`   - ${error}`));
    }

    // Save metrics to file
    this.saveMetrics();
    
    console.log('\n🎯 Recommendations:');
    this.generateRecommendations();
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.chunkCount && this.metrics.chunkCount > 100) {
      recommendations.push('Consider optimizing chunk splitting - high chunk count detected');
    }
    
    if (this.metrics.devServerHealth === 'offline') {
      recommendations.push('Start development server: npm run dev:quiet');
    }
    
    if (this.metrics.warnings.length > 3) {
      recommendations.push('Review and address build warnings');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ Performance looks good! No immediate optimizations needed.');
    }
    
    recommendations.forEach(rec => console.log(`   • ${rec}`));
  }

  saveMetrics() {
    try {
      const metricsFile = path.join(process.cwd(), 'performance-metrics.json');
      
      // Load existing metrics if they exist
      let allMetrics = [];
      if (fs.existsSync(metricsFile)) {
        const existing = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
        allMetrics = Array.isArray(existing) ? existing : [existing];
      }
      
      // Add current metrics
      allMetrics.push(this.metrics);
      
      // Keep only last 10 runs
      if (allMetrics.length > 10) {
        allMetrics = allMetrics.slice(-10);
      }
      
      fs.writeFileSync(metricsFile, JSON.stringify(allMetrics, null, 2));
      console.log(`\n💾 Metrics saved to performance-metrics.json`);
    } catch (error) {
      console.error('Failed to save metrics:', error.message);
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run performance monitoring
const monitor = new PerformanceMonitor();
monitor.monitorBuild().catch(console.error); 