#!/usr/bin/env node

// Performance Analysis Script
// Runs build performance analysis and generates optimization recommendations

import BuildPerformanceOptimizer from '../src/utils/build-performance-optimizer.js';

async function main() {
  console.warn('🚀 Starting Zion App Performance Analysis...\n');

  try {
    // Run the analysis
    await BuildPerformanceOptimizer.runAnalysis('.next');

    console.warn('\n✅ Performance analysis completed successfully!');
    console.warn('\n💡 Next steps:');
    console.warn('  1. Review the generated build-performance-report.md');
    console.warn('  2. Implement high-impact optimizations first');
    console.warn(
      '  3. Re-run analysis after optimizations to measure improvement',
    );
    console.warn('  4. Set up automated performance monitoring in CI/CD');
  } catch {
    console.error('❌ Performance analysis failed');
    process.exit(1);
  }
}

main();


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

