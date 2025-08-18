#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(process.cwd(), 'netlify', 'functions');
const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function listFunctions() {
  try {
    const entries = fs.readdirSync(FUNCTIONS_DIR, { withFileTypes: true });
    return entries
      .filter(e => e.isFile() && e.name.endsWith('.js'))
      .map(e => e.name.replace('.js', ''))
      .sort();
  } catch (error) {
    console.error('Error listing functions:', error);
    return [];
  }
}

async function testFunction(functionName) {
  const start = Date.now();
  const functionPath = path.join(FUNCTIONS_DIR, `${functionName}.js`);
  
  try {
    // Load the function module
    const functionModule = require(functionPath);
    
    if (typeof functionModule.handler !== 'function') {
      return {
        name: functionName,
        status: 'FAILED',
        error: 'No handler function found',
        durationMs: Date.now() - start
      };
    }
    
    // Create mock event and context
    const event = {};
    const context = {};
    
    // Execute the handler
    const result = await functionModule.handler(event, context);
    const durationMs = Date.now() - start;
    
    if (result && result.statusCode) {
      if (result.statusCode >= 200 && result.statusCode < 300) {
        return {
          name: functionName,
          status: 'SUCCESS',
          statusCode: result.statusCode,
          durationMs,
          result: result.body ? JSON.parse(result.body) : result
        };
      } else {
        return {
          name: functionName,
          status: 'FAILED',
          statusCode: result.statusCode,
          error: result.body ? JSON.parse(result.body).error : 'Unknown error',
          durationMs
        };
      }
    } else {
      return {
        name: functionName,
        status: 'UNKNOWN',
        durationMs,
        result: result
      };
    }
    
  } catch (error) {
    const durationMs = Date.now() - start;
    return {
      name: functionName,
      status: 'ERROR',
      error: error.message,
      stack: error.stack,
      durationMs
    };
  }
}

async function testAllFunctions() {
  console.log('🧪 Testing all Netlify Functions...');
  
  ensureDir(REPORTS_DIR);
  
  const functionNames = listFunctions();
  console.log(`📋 Found ${functionNames.length} functions to test`);
  
  const results = [];
  let index = 0;
  
  // Test functions with limited concurrency to avoid overwhelming the system
  const CONCURRENCY = 3;
  
  async function worker() {
    while (index < functionNames.length) {
      const current = functionNames[index++];
      process.stdout.write(`\n[${index}/${functionNames.length}] Testing ${current}... `);
      
      const result = await testFunction(current);
      results.push(result);
      
      const status = result.status === 'SUCCESS' ? '✅' : 
                    result.status === 'FAILED' ? '❌' : 
                    result.status === 'ERROR' ? '💥' : '❓';
      
      process.stdout.write(`${status} ${result.status} (${result.durationMs}ms)\n`);
      
      // Small delay between tests to avoid overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  const workers = Array.from({ length: Math.min(CONCURRENCY, functionNames.length) }, () => worker());
  await Promise.all(workers);
  
  // Generate summary
  const summary = {
    timestamp: new Date().toISOString(),
    totalFunctions: results.length,
    successful: results.filter(r => r.status === 'SUCCESS').length,
    failed: results.filter(r => r.status === 'FAILED').length,
    errors: results.filter(r => r.status === 'ERROR').length,
    unknown: results.filter(r => r.status === 'UNKNOWN').length,
    results: results
  };
  
  // Save detailed results
  const resultsPath = path.join(REPORTS_DIR, `netlify-functions-test-results-${Date.now()}.json`);
  fs.writeFileSync(resultsPath, JSON.stringify(summary, null, 2));
  
  // Save latest results
  const latestPath = path.join(REPORTS_DIR, 'latest-netlify-functions-test-results.json');
  fs.writeFileSync(latestPath, JSON.stringify(summary, null, 2));
  
  // Print summary
  console.log('\n📊 Test Results Summary:');
  console.log(`   Total Functions: ${summary.totalFunctions}`);
  console.log(`   ✅ Successful: ${summary.successful}`);
  console.log(`   ❌ Failed: ${summary.failed}`);
  console.log(`   💥 Errors: ${summary.errors}`);
  console.log(`   ❓ Unknown: ${summary.unknown}`);
  
  // Show failed functions
  const failedFunctions = results.filter(r => r.status === 'FAILED' || r.status === 'ERROR');
  if (failedFunctions.length > 0) {
    console.log('\n❌ Failed Functions:');
    failedFunctions.forEach(f => {
      console.log(`   - ${f.name}: ${f.error || 'Unknown error'}`);
    });
  }
  
  // Show successful functions
  const successfulFunctions = results.filter(r => r.status === 'SUCCESS');
  if (successfulFunctions.length > 0) {
    console.log('\n✅ Successful Functions:');
    successfulFunctions.forEach(f => {
      console.log(`   - ${f.name}`);
    });
  }
  
  console.log(`\n📋 Detailed results saved to: ${resultsPath}`);
  console.log(`📋 Latest results saved to: ${latestPath}`);
  
  return summary;
}

if (require.main === module) {
  testAllFunctions().catch(err => {
    console.error('Test execution failed:', err);
    process.exit(1);
  });
}

module.exports = { testAllFunctions, testFunction };