#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { console.log(`[test-individual] ${msg}`); }

const workspace = process.cwd();
const functionsDir = path.join(workspace, 'netlify', 'functions');

// Mock event and context for testing
const mockEvent = {
  httpMethod: 'GET',
  path: '/test',
  headers: {},
  queryStringParameters: {},
  body: null
};

const mockContext = {
  functionName: 'test-function',
  functionVersion: '$LATEST',
  invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789012:function:test-function',
  memoryLimitInMB: '128',
  awsRequestId: 'test-request-id',
  logGroupName: '/aws/lambda/test-function',
  logStreamName: '2023/01/01/[$LATEST]test-stream',
  getRemainingTimeInMillis: () => 30000,
  done: () => {},
  fail: () => {},
  succeed: () => {}
};

async function testFunction(functionName) {
  const functionPath = path.join(functionsDir, `${functionName}.js`);
  
  if (!fs.existsSync(functionPath)) {
    return { name: functionName, status: 'missing', ok: false, error: 'Function file not found' };
  }
  
  try {
    // Clear require cache to isolate between functions
    delete require.cache[require.resolve(functionPath)];
    
    const mod = require(functionPath);
    
    if (!mod.handler) {
      return { name: functionName, status: 'invalid', ok: false, error: 'No handler function export' };
    }
    
    if (typeof mod.handler !== 'function') {
      return { name: functionName, status: 'invalid', ok: false, error: 'Handler is not a function' };
    }
    
    // Test the function execution
    const start = Date.now();
    const result = await mod.handler(mockEvent, mockContext);
    const duration = Date.now() - start;
    
    return { 
      name: functionName, 
      status: 'executed', 
      ok: true, 
      result: result,
      duration: duration
    };
    
  } catch (err) {
    return { name: functionName, status: 'error', ok: false, error: err.message };
  }
}

async function testSpecificFunctions(functionNames) {
  log(`Testing ${functionNames.length} specific functions...`);
  
  const results = [];
  for (const functionName of functionNames) {
    log(`Testing function: ${functionName}`);
    const result = await testFunction(functionName);
    results.push(result);
    
    if (result.ok) {
      log(`✅ ${functionName}: ${result.status} (${result.duration}ms)`);
      if (result.result && result.result.statusCode) {
        log(`   Status: ${result.result.statusCode}`);
      }
    } else {
      log(`❌ ${functionName}: ${result.status} - ${result.error}`);
    }
  }
  
  const summary = {
    timestamp: new Date().toISOString(),
    totals: {
      attempted: functionNames.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };
  
  log(`\nTest completed. ${summary.totals.ok}/${summary.totals.attempted} functions executed successfully.`);
  
  if (summary.totals.failed > 0) {
    log('\nFailed functions:');
    results.filter(r => !r.ok).forEach(r => {
      log(`  - ${r.name}: ${r.error}`);
    });
  }
  
  return summary;
}

// Test a few key functions
const testFunctions = [
  'homepage_advertiser',
  'cloud_orchestrator',
  'front_enhancer',
  'security-audit-runner',
  'seo-audit-runner',
  'ai-changelog-runner',
  'repo-knowledge-graph-runner',
  'image-optimizer-runner',
  'dead-code-report',
  'continuous-orchestrator'
];

testSpecificFunctions(testFunctions).catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});