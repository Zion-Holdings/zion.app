#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(process.cwd(), 'netlify', 'functions');
const LOGS_DIR = path.join(process.cwd(), 'automation', 'logs');
const TIMEOUT_MS = Number(process.env.NETLIFY_FUNCTION_TEST_TIMEOUT_MS || 30000);
const CONCURRENCY = Number(process.env.NETLIFY_FUNCTION_TEST_CONCURRENCY || 8);

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function listFunctions(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries
    .filter(e => e.isFile())
    .map(e => e.name)
    .filter(n => /\.js$/.test(n))
    .sort();
  return files.map(f => path.join(FUNCTIONS_DIR, f));
}

async function testFunction(modPath) {
  const start = Date.now();
  const functionName = path.basename(modPath, '.js');
  
  console.log(`\n🧪 Testing: ${functionName}`);
  
  try {
    // Clear require cache to isolate between functions
    delete require.cache[require.resolve(modPath)];
    
    const mod = require(modPath);
    const handler = mod && (mod.handler || mod.default || mod);
    
    if (typeof handler !== 'function') {
      return {
        name: functionName,
        success: false,
        error: 'No handler function export',
        durationMs: Date.now() - start,
        type: 'missing_handler'
      };
    }
    
    // Test the function
    const result = await handler({}, {});
    const durationMs = Date.now() - start;
    
    // Validate response structure
    const isValidResponse = result && 
      typeof result === 'object' && 
      (result.statusCode || result.body);
    
    if (isValidResponse) {
      console.log(`  ✅ ${functionName}: SUCCESS (${durationMs}ms)`);
      return {
        name: functionName,
        success: true,
        statusCode: result.statusCode || 200,
        durationMs,
        type: 'success',
        responseSize: JSON.stringify(result).length
      };
    } else {
      console.log(`  ⚠️  ${functionName}: INVALID_RESPONSE (${durationMs}ms)`);
      return {
        name: functionName,
        success: false,
        error: 'Invalid response structure',
        durationMs,
        type: 'invalid_response',
        actualResponse: result
      };
    }
    
  } catch (error) {
    const durationMs = Date.now() - start;
    console.log(`  ❌ ${functionName}: FAILED (${durationMs}ms) - ${error.message}`);
    return {
      name: functionName,
      success: false,
      error: error.message,
      durationMs,
      type: 'error',
      stack: error.stack
    };
  }
}

async function runComprehensiveTest() {
  ensureDir(LOGS_DIR);
  const functionPaths = listFunctions(FUNCTIONS_DIR);
  
  console.log(`🚀 Starting comprehensive Netlify functions test`);
  console.log(`📁 Testing ${functionPaths.length} functions`);
  console.log(`⚡ Concurrency: ${CONCURRENCY}`);
  console.log(`⏱️  Timeout: ${TIMEOUT_MS}ms`);
  
  const results = [];
  let index = 0;
  
  async function worker() {
    while (index < functionPaths.length) {
      const current = functionPaths[index++];
      const result = await testFunction(current);
      results.push(result);
    }
  }
  
  const workers = Array.from({ length: Math.min(CONCURRENCY, functionPaths.length) }, () => worker());
  await Promise.all(workers);
  
  // Generate comprehensive report
  const report = generateReport(results);
  
  // Save detailed report
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(LOGS_DIR, `comprehensive-netlify-test-${timestamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Save summary
  const summaryPath = path.join(LOGS_DIR, 'latest-comprehensive-test-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
  
  // Display summary
  displaySummary(report);
  
  console.log(`\n📊 Detailed report saved to: ${reportPath}`);
  console.log(`📋 Summary saved to: ${summaryPath}`);
  
  return report;
}

function generateReport(results) {
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  // Group failures by type
  const failuresByType = failed.reduce((acc, result) => {
    const type = result.type || 'unknown';
    if (!acc[type]) acc[type] = [];
    acc[type].push(result);
    return acc;
  }, {});
  
  // Performance analysis
  const durations = results.map(r => r.durationMs).filter(d => d > 0);
  const avgDuration = durations.length > 0 ? durations.reduce((a, b) => a + b, 0) / durations.length : 0;
  const slowest = results.reduce((slowest, current) => 
    current.durationMs > slowest.durationMs ? current : slowest, { durationMs: 0 });
  const fastest = results.reduce((fastest, current) => 
    current.durationMs < fastest.durationMs ? current : fastest, { durationMs: Infinity });
  
  const summary = {
    timestamp: new Date().toISOString(),
    totalFunctions: results.length,
    successful: successful.length,
    failed: failed.length,
    successRate: `${((successful.length / results.length) * 100).toFixed(2)}%`,
    performance: {
      averageDuration: Math.round(avgDuration),
      slowestFunction: slowest.name,
      slowestDuration: slowest.durationMs,
      fastestFunction: fastest.name,
      fastestDuration: fastest.durationMs
    },
    failuresByType: Object.keys(failuresByType).reduce((acc, type) => {
      acc[type] = failuresByType[type].length;
      return acc;
    }, {})
  };
  
  return {
    summary,
    results,
    failuresByType,
    metadata: {
      testEnvironment: 'local',
      nodeVersion: process.version,
      platform: process.platform,
      timestamp: new Date().toISOString()
    }
  };
}

function displaySummary(report) {
  const { summary, failuresByType } = report;
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 COMPREHENSIVE TEST SUMMARY`);
  console.log(`${'='.repeat(60)}`);
  console.log(`🎯 Total Functions: ${summary.totalFunctions}`);
  console.log(`✅ Successful: ${summary.successful}`);
  console.log(`❌ Failed: ${summary.failed}`);
  console.log(`📈 Success Rate: ${summary.successRate}`);
  
  console.log(`\n⚡ PERFORMANCE`);
  console.log(`  Average Duration: ${summary.performance.averageDuration}ms`);
  console.log(`  Slowest: ${summary.performance.slowestFunction} (${summary.performance.slowestDuration}ms)`);
  console.log(`  Fastest: ${summary.performance.fastestFunction} (${summary.performance.fastestDuration}ms)`);
  
  if (Object.keys(failuresByType).length > 0) {
    console.log(`\n❌ FAILURE ANALYSIS`);
    Object.entries(failuresByType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} failures`);
    });
  }
  
  if (summary.failed > 0) {
    console.log(`\n🔍 FAILED FUNCTIONS:`);
    report.results
      .filter(r => !r.success)
      .forEach(r => {
        console.log(`  - ${r.name}: ${r.error}`);
      });
  }
  
  console.log(`\n${'='.repeat(60)}`);
}

// Run the comprehensive test
runComprehensiveTest().catch(err => {
  console.error('💥 Comprehensive test failed:', err);
  process.exit(1);
});