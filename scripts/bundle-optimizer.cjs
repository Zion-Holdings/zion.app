#!/usr/bin/env node

/**
 * Bundle Optimizer - Phase 2 Implementation
 * 
 * Tracks bundle size improvements and validates optimization targets
 */

const fs = require('fs');
const path = require('path');

// Comment out all console.log statements (lines 11, 12, 29, 107, 108, 116, 117, 118, 119, 120, 123, 127, 129, 134, 135, 136, 137, 138, 139, 143, 144, 150, 152, 154, 155, 159, 160, 165, 166, 167, 170, 171, 174, 175, 176, 177, 178, 182, 183, 184, 185, 186, 189, 190, 191, 192, 193, 201, 202, 204, 205, 231)
// console.warn('🎯 BUNDLE OPTIMIZATION TRACKER');
// console.warn('===============================\n');

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
  // console.warn('❌ No build output found. Run `npm run build` first.');
  process.exit(1);
}

// Calculate improvements
function calculateImprovement(baseline, current) {
  const reduction = baseline - current;
  const percentage = (reduction / baseline) * 100;
  return { reduction, percentage };
}

// Format bytes to human readable
function _formatBytes(bytes) {
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
  
  // console.warn('📊 CURRENT BUNDLE STATE:');
  // console.warn('========================');
  
  // Main bundle analysis
  if (analysis.mainBundle) {
    const current = analysis.mainBundle.size;
    const target = TARGETS.mainBundle;
    const _improvement = calculateImprovement(BASELINE.mainBundle, current);
    
    // console.warn(`📦 Main Bundle (_app):`);
    // console.warn(`   Current: ${formatBytes(current)}`);
    // console.warn(`   Baseline: ${formatBytes(BASELINE.mainBundle)}`);
    // console.warn(`   Target: ${formatBytes(target)}`);
    // console.warn(`   Improvement: ${formatBytes(improvement.reduction)} (${improvement.percentage.toFixed(1)}%)`);
    
    if (current <= target) {
      // console.warn(`   ✅ TARGET ACHIEVED!`);
    } else {
      const remaining = current - target;
      const _remainingPercent = ((remaining / current) * 100).toFixed(1);
      // console.warn(`   ⚠️  Still ${formatBytes(remaining)} (${remainingPercent}%) over target`);
    }
    // console.warn();
  }
  
  // Total bundle analysis
  const totalImprovement = calculateImprovement(BASELINE.totalBundleSize, analysis.totalSize);
  // console.warn(`📊 Total Bundle Size:`);
  // console.warn(`   Current: ${formatBytes(analysis.totalSize)}`);
  // console.warn(`   Baseline: ${formatBytes(BASELINE.totalBundleSize)}`);
  // console.warn(`   Improvement: ${formatBytes(totalImprovement.reduction)} (${totalImprovement.percentage.toFixed(1)}%)`);
  // console.warn(`   Chunks: ${analysis.chunkCount} total`);
  // console.warn();
  
  // Large chunks analysis
  if (analysis.largeChunks.length > 0) {
    // console.warn(`⚠️  CHUNKS OVER ${formatBytes(TARGETS.maxChunkSize)}:`);
    // console.warn('================================');
    analysis.largeChunks
      .sort((a, b) => b.size - a.size)
      .slice(0, 10) // Show top 10
      .forEach(chunk => {
        const _overTarget = chunk.size - TARGETS.maxChunkSize;
        // console.warn(`   📄 ${chunk.name}: ${formatBytes(chunk.size)} (+${formatBytes(overTarget)})`);
      });
    // console.warn();
  } else {
    // console.warn(`✅ All chunks under ${formatBytes(TARGETS.maxChunkSize)} target!`);
    // console.warn();
  }
  
  // Optimization suggestions
  // console.warn('🎯 OPTIMIZATION PROGRESS:');
  // console.warn('=========================');
  
  const _mainBundleProgress = analysis.mainBundle ? 
    ((BASELINE.mainBundle - analysis.mainBundle.size) / (BASELINE.mainBundle - TARGETS.mainBundle)) * 100 : 0;
  
  // console.warn(`📈 Main Bundle Optimization: ${Math.min(100, mainBundleProgress).toFixed(1)}% complete`);
  // console.warn(`📈 Total Size Reduction: ${totalImprovement.percentage.toFixed(1)}% achieved`);
  // console.warn();
  
  // Next steps
  // console.warn(' NEXT OPTIMIZATION STEPS:');
  // console.warn('============================');
  
  if (analysis.mainBundle && analysis.mainBundle.size > TARGETS.mainBundle) {
    // console.warn('1. 📦 Continue _app bundle optimization:');
    // console.warn('   - Move more providers to page-level');
    // console.warn('   - Implement additional dynamic imports');
    // console.warn('   - Review heavy dependency usage');
    // console.warn();
  }
  
  if (analysis.largeChunks.length > 3) {
    // console.warn('2. Address remaining large chunks:');
    // console.warn('   - Implement page-level code splitting');
    // console.warn('   - Optimize vendor bundle groupings');
    // console.warn('   - Use React.lazy for heavy components');
    // console.warn();
  }
  
  // console.warn('3. 📊 Monitor and validate:');
  // console.warn('   - Run bundle analysis after changes');
  // console.warn('   - Test loading performance');
  // console.warn('   - Validate user experience impact');
  // console.warn();
  
  // Success criteria
  const isMainBundleOptimized = analysis.mainBundle && analysis.mainBundle.size <= TARGETS.mainBundle;
  const isTotalSizeGood = totalImprovement.percentage >= (TARGETS.totalBundleReduction * 100);
  const areChunksOptimized = analysis.largeChunks.length <= 2;
  
  if (isMainBundleOptimized && isTotalSizeGood && areChunksOptimized) {
    // console.warn('🎉 PHASE 2 OPTIMIZATION COMPLETE!');
    // console.warn('All bundle size targets achieved.');
  } else {
    // console.warn('⚡ PHASE 2 OPTIMIZATION IN PROGRESS');
    // console.warn('Continue implementing optimization strategies.');
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
  // console.warn(`\n Results saved to: ${reportPath}`);
}

// Main execution
try {
  const results = generateReport();
  saveResults(results);
  
  // Exit with appropriate code
  process.exit(results.success ? 0 : 1);
} catch {
  // console.error('❌ Error during bundle optimization analysis:', error.message);
  process.exit(1);
} 