#!/usr/bin/env node

/**
 * Bundle Optimizer - Phase 2 Implementation
 * 
 * Tracks bundle size improvements and validates optimization targets
 */

const fs = require('fs');
const path = require('path');

console.log('🎯 BUNDLE OPTIMIZATION TRACKER');
console.log('===============================\n');

// Target metrics from Phase 2 plan
const TARGETS = {
  mainBundle: 1000000,    // 1MB target (down from 4.97MB)
  maxChunkSize: 244000,   // 244KB max chunk size
  totalBundleReduction: 0.5, // 50% total reduction target
};

const BASELINE = {
  mainBundle: 4978000,    // 4.97MB baseline
  totalBundleSize: 8000000, // ~8MB estimated total
};

// Check if build output exists
const buildStatsPath = path.join(process.cwd(), '.next');
if (!fs.existsSync(buildStatsPath)) {
  console.log('❌ No build output found. Run `npm run build` first.');
  process.exit(1);
}

// Calculate improvements
function calculateImprovement(baseline, current) {
  const reduction = baseline - current;
  const percentage = (reduction / baseline) * 100;
  return { reduction, percentage };
}

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Analyze current bundle state
function analyzeBundles() {
  const results = {
    mainBundle: null,
    largeChunks: [],
    totalSize: 0,
    chunkCount: 0,
  };

  // Analyze static chunks
  const staticPath = path.join(buildStatsPath, 'static', 'chunks');
  if (fs.existsSync(staticPath)) {
    const chunks = fs.readdirSync(staticPath);
    
    chunks.forEach(chunk => {
      const chunkPath = path.join(staticPath, chunk);
      const stats = fs.statSync(chunkPath);
      const size = stats.size;
      
      results.totalSize += size;
      results.chunkCount++;
      
      if (size > TARGETS.maxChunkSize) {
        results.largeChunks.push({ name: chunk, size });
      }
    });
  }

  // Analyze pages (including _app)
  const pagesPath = path.join(buildStatsPath, 'static', 'chunks', 'pages');
  if (fs.existsSync(pagesPath)) {
    const pages = fs.readdirSync(pagesPath);
    
    pages.forEach(page => {
      const pagePath = path.join(pagesPath, page);
      const stats = fs.statSync(pagePath);
      const size = stats.size;
      
      results.totalSize += size;
      results.chunkCount++;
      
      if (page.includes('_app')) {
        results.mainBundle = { name: page, size };
      }
      
      if (size > TARGETS.maxChunkSize) {
        results.largeChunks.push({ name: page, size });
      }
    });
  }

  return results;
}

// Generate optimization report
function generateReport() {
  const analysis = analyzeBundles();
  
  console.log('📊 CURRENT BUNDLE STATE:');
  console.log('========================');
  
  // Main bundle analysis
  if (analysis.mainBundle) {
    const current = analysis.mainBundle.size;
    const target = TARGETS.mainBundle;
    const improvement = calculateImprovement(BASELINE.mainBundle, current);
    
    console.log(`📦 Main Bundle (_app):`);
    console.log(`   Current: ${formatBytes(current)}`);
    console.log(`   Baseline: ${formatBytes(BASELINE.mainBundle)}`);
    console.log(`   Target: ${formatBytes(target)}`);
    console.log(`   Improvement: ${formatBytes(improvement.reduction)} (${improvement.percentage.toFixed(1)}%)`);
    
    if (current <= target) {
      console.log(`   ✅ TARGET ACHIEVED!`);
    } else {
      const remaining = current - target;
      const remainingPercent = ((remaining / current) * 100).toFixed(1);
      console.log(`   ⚠️  Still ${formatBytes(remaining)} (${remainingPercent}%) over target`);
    }
    console.log();
  }
  
  // Total bundle analysis
  const totalImprovement = calculateImprovement(BASELINE.totalBundleSize, analysis.totalSize);
  console.log(`📊 Total Bundle Size:`);
  console.log(`   Current: ${formatBytes(analysis.totalSize)}`);
  console.log(`   Baseline: ${formatBytes(BASELINE.totalBundleSize)}`);
  console.log(`   Improvement: ${formatBytes(totalImprovement.reduction)} (${totalImprovement.percentage.toFixed(1)}%)`);
  console.log(`   Chunks: ${analysis.chunkCount} total`);
  console.log();
  
  // Large chunks analysis
  if (analysis.largeChunks.length > 0) {
    console.log(`⚠️  CHUNKS OVER ${formatBytes(TARGETS.maxChunkSize)}:`);
    console.log('================================');
    analysis.largeChunks
      .sort((a, b) => b.size - a.size)
      .slice(0, 10) // Show top 10
      .forEach(chunk => {
        const overTarget = chunk.size - TARGETS.maxChunkSize;
        console.log(`   📄 ${chunk.name}: ${formatBytes(chunk.size)} (+${formatBytes(overTarget)})`);
      });
    console.log();
  } else {
    console.log(`✅ All chunks under ${formatBytes(TARGETS.maxChunkSize)} target!`);
    console.log();
  }
  
  // Optimization suggestions
  console.log('🎯 OPTIMIZATION PROGRESS:');
  console.log('=========================');
  
  const mainBundleProgress = analysis.mainBundle ? 
    ((BASELINE.mainBundle - analysis.mainBundle.size) / (BASELINE.mainBundle - TARGETS.mainBundle)) * 100 : 0;
  
  console.log(`📈 Main Bundle Optimization: ${Math.min(100, mainBundleProgress).toFixed(1)}% complete`);
  console.log(`📈 Total Size Reduction: ${totalImprovement.percentage.toFixed(1)}% achieved`);
  console.log();
  
  // Next steps
  console.log('� NEXT OPTIMIZATION STEPS:');
  console.log('============================');
  
  if (analysis.mainBundle && analysis.mainBundle.size > TARGETS.mainBundle) {
    console.log('1. 📦 Continue _app bundle optimization:');
    console.log('   - Move more providers to page-level');
    console.log('   - Implement additional dynamic imports');
    console.log('   - Review heavy dependency usage');
    console.log();
  }
  
  if (analysis.largeChunks.length > 3) {
    console.log('2. � Address remaining large chunks:');
    console.log('   - Implement page-level code splitting');
    console.log('   - Optimize vendor bundle groupings');
    console.log('   - Use React.lazy for heavy components');
    console.log();
  }
  
  console.log('3. 📊 Monitor and validate:');
  console.log('   - Run bundle analysis after changes');
  console.log('   - Test loading performance');
  console.log('   - Validate user experience impact');
  console.log();
  
  // Success criteria
  const isMainBundleOptimized = analysis.mainBundle && analysis.mainBundle.size <= TARGETS.mainBundle;
  const isTotalSizeGood = totalImprovement.percentage >= (TARGETS.totalBundleReduction * 100);
  const areChunksOptimized = analysis.largeChunks.length <= 2;
  
  if (isMainBundleOptimized && isTotalSizeGood && areChunksOptimized) {
    console.log('🎉 PHASE 2 OPTIMIZATION COMPLETE!');
    console.log('All bundle size targets achieved.');
  } else {
    console.log('⚡ PHASE 2 OPTIMIZATION IN PROGRESS');
    console.log('Continue implementing optimization strategies.');
  }
  
  return {
    success: isMainBundleOptimized && isTotalSizeGood,
    mainBundleSize: analysis.mainBundle?.size || 0,
    totalSize: analysis.totalSize,
    largeChunksCount: analysis.largeChunks.length,
    improvement: totalImprovement.percentage,
  };
}

// Save results for tracking
function saveResults(results) {
  const reportPath = path.join(process.cwd(), 'bundle-optimization-results.json');
  const timestamp = new Date().toISOString();
  
  const report = {
    timestamp,
    phase: 'Phase 2',
    results,
    targets: TARGETS,
    baseline: BASELINE,
  };
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n� Results saved to: ${reportPath}`);
}

// Main execution
try {
  const results = generateReport();
  saveResults(results);
  
  // Exit with appropriate code
  process.exit(results.success ? 0 : 1);
} catch (error) {
  console.error('❌ Error during bundle optimization analysis:', error.message);
  process.exit(1);
} 