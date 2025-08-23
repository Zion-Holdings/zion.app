#!/usr/bin/env node

// Performance Analysis Script
// Runs build performance analysis and generates optimization recommendations

import BuildPerformanceOptimizer from '../src/utils/build-performance-optimizer.js';

async function main() {
  console.log('🚀 Starting Zion App Performance Analysis...\n');
  
  try {
    // Run the analysis
    await BuildPerformanceOptimizer.runAnalysis('.next');
    
    console.log('\n✅ Performance analysis completed successfully!');
    console.log('\n💡 Next steps:');
    console.log('  1. Review the generated build-performance-report.md');
    console.log('  2. Implement high-impact optimizations first');
    console.log('  3. Re-run analysis after optimizations to measure improvement');
    console.log('  4. Set up automated performance monitoring in CI/CD');
    
  } catch (error) {
    console.error('❌ Performance analysis failed:', error.message);
    process.exit(1);
  }
}

main();