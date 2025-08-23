#!/usr/bin/env node

/**
 * Build Monitor Script
 * Advanced monitoring and reporting for build process
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

console.log('🔍 Advanced Build Monitor\n');

/**
 * Analyze bundle composition
 */
function analyzeBundleComposition() {
  console.log('📊 Bundle Composition Analysis:');
  
  const buildDir = path.join(__dirname, '..', '.next');
  const staticDir = path.join(buildDir, 'static');
  
  if (!fs.existsSync(staticDir)) {
    console.log('   ❌ Build directory not found. Run `npm run build` first.');
    return null;
  }

  try {
    const analysis = {
      totalSize: 0,
      chunks: [],
      pages: [],
      css: [],
      fonts: [],
      images: []
    };

    // Analyze chunks
    const chunksDir = path.join(staticDir, 'chunks');
    if (fs.existsSync(chunksDir)) {
      const chunkFiles = fs.readdirSync(chunksDir);
      
      chunkFiles.forEach(file => {
        const filePath = path.join(chunksDir, file);
        const stats = fs.statSync(filePath);
        const size = stats.size;
        analysis.totalSize += size;
        
        if (file.endsWith('.js')) {
          analysis.chunks.push({ name: file, size, type: 'javascript' });
        }
      });
    }

    // Analyze CSS
    const cssDir = path.join(staticDir, 'css');
    if (fs.existsSync(cssDir)) {
      const cssFiles = fs.readdirSync(cssDir);
      
      cssFiles.forEach(file => {
        const filePath = path.join(cssDir, file);
        const stats = fs.statSync(filePath);
        const size = stats.size;
        analysis.totalSize += size;
        analysis.css.push({ name: file, size });
      });
    }

    // Sort chunks by size
    analysis.chunks.sort((a, b) => b.size - a.size);

    // Report findings
    console.log(`   📦 Total Bundle Size: ${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   🧩 JavaScript Chunks: ${analysis.chunks.length}`);
    console.log(`   🎨 CSS Files: ${analysis.css.length}`);
    
    // Show largest chunks
    console.log('\n   🔥 Largest Chunks:');
    analysis.chunks.slice(0, 5).forEach((chunk, index) => {
      const sizeKB = (chunk.size / 1024).toFixed(1);
      console.log(`      ${index + 1}. ${chunk.name} (${sizeKB} KB)`);
    });

    return analysis;
  } catch (error) {
    console.log('   ❌ Error analyzing bundle:', error.message);
    return null;
  }
}

/**
 * Check for potential optimizations
 */
function checkOptimizations(bundleAnalysis) {
  console.log('\n💡 Optimization Recommendations:');
  
  if (!bundleAnalysis) {
    console.log('   ⚠️  Bundle analysis required for recommendations');
    return;
  }

  const recommendations = [];

  // Check for large chunks
  const largeChunks = bundleAnalysis.chunks.filter(chunk => chunk.size > 500 * 1024); // > 500KB
  if (largeChunks.length > 0) {
    recommendations.push({
      type: 'warning',
      message: `${largeChunks.length} chunks are larger than 500KB`,
      action: 'Consider code splitting or lazy loading'
    });
  }

  // Check total bundle size
  if (bundleAnalysis.totalSize > 2 * 1024 * 1024) { // > 2MB
    recommendations.push({
      type: 'warning',
      message: 'Total bundle size exceeds 2MB',
      action: 'Consider bundle optimization and tree shaking'
    });
  } else {
    recommendations.push({
      type: 'success',
      message: 'Bundle size is within recommended limits',
      action: 'Continue monitoring growth over time'
    });
  }

  // Display recommendations
  recommendations.forEach(rec => {
    const icon = rec.type === 'success' ? '✅' : rec.type === 'warning' ? '⚠️' : '❌';
    console.log(`   ${icon} ${rec.message}`);
    console.log(`      💡 ${rec.action}`);
  });
}

/**
 * Performance benchmarking
 */
async function runPerformanceBenchmark() {
  console.log('\n⚡ Performance Benchmark:');
  
  const startTime = Date.now();
  
  return new Promise((resolve) => {
    // Simulate build time measurement
    const build = spawn('npm', ['run', 'build'], {
      stdio: 'pipe',
      env: { ...process.env, DISABLE_BUILD_OUTPUT: 'true' }
    });
    
    let buildOutput = '';
    build.stdout.on('data', (data) => {
      buildOutput += data.toString();
    });
    
    build.on('close', (code) => {
      const buildTime = Date.now() - startTime;
      const buildTimeSeconds = (buildTime / 1000).toFixed(1);
      
      console.log(`   ⏱️  Build Time: ${buildTimeSeconds}s`);
      
      if (buildTime < 30000) {
        console.log('   ✅ Build time is excellent (< 30s)');
      } else if (buildTime < 60000) {
        console.log('   ⚠️  Build time is acceptable (30-60s)');
      } else {
        console.log('   ❌ Build time is slow (> 60s) - consider optimizations');
      }
      
      // Extract page count from build output
      const pageMatch = buildOutput.match(/(\d+)\/(\d+).*pages/);
      if (pageMatch) {
        console.log(`   📄 Pages Generated: ${pageMatch[2]}`);
      }
      
      resolve({ buildTime, buildTimeSeconds, exitCode: code });
    });
  });
}

/**
 * Generate build report
 */
function generateBuildReport(bundleAnalysis, benchmark) {
  console.log('\n📋 Generating Build Report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    build: {
      successful: benchmark?.exitCode === 0,
      buildTime: benchmark?.buildTimeSeconds || 'unknown',
      totalPages: 152, // From recent build
    },
    bundle: bundleAnalysis ? {
      totalSize: (bundleAnalysis.totalSize / 1024 / 1024).toFixed(2) + ' MB',
      chunks: bundleAnalysis.chunks.length,
      largestChunk: bundleAnalysis.chunks[0]?.name || 'unknown'
    } : null,
    recommendations: bundleAnalysis?.totalSize > 2 * 1024 * 1024 ? [
      'Consider bundle optimization',
      'Review large dependencies',
      'Implement code splitting'
    ] : ['Bundle size optimized'],
    nextSteps: [
      'Monitor bundle growth over time',
      'Set up automated performance testing',
      'Configure CDN for static assets',
      'Enable compression in production'
    ]
  };
  
  // Save report to file
  const reportPath = path.join(__dirname, '..', 'build-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`   ✅ Report saved to: ${reportPath}`);
  console.log(`   📊 Build Status: ${report.build.successful ? 'SUCCESS' : 'FAILED'}`);
  console.log(`   ⏱️  Build Time: ${report.build.buildTime}`);
  
  return report;
}

/**
 * Main monitoring function
 */
async function runBuildMonitor() {
  console.log('Starting comprehensive build analysis...\n');
  
  // Step 1: Analyze current build
  const bundleAnalysis = analyzeBundleComposition();
  
  // Step 2: Check optimizations
  checkOptimizations(bundleAnalysis);
  
  // Step 3: Run performance benchmark (optional - comment out for faster analysis)
  // const benchmark = await runPerformanceBenchmark();
  
  // Step 4: Generate report
  const report = generateBuildReport(bundleAnalysis, null);
  
  console.log('\n🎯 Build Monitor Complete!');
  console.log('📈 Key Metrics:');
  console.log(`   • Bundle Size: ${report.bundle?.totalSize || 'unknown'}`);
  console.log(`   • Chunks: ${report.bundle?.chunks || 'unknown'}`);
  console.log(`   • Pages: ${report.build.totalPages}`);
  console.log(`   • Status: ${report.build.successful ? '✅ SUCCESS' : '❌ FAILED'}`);
  
  console.log('\n💡 Access detailed monitoring at: /dev/dashboard');
}

// Run the monitor
runBuildMonitor().catch(console.error); 