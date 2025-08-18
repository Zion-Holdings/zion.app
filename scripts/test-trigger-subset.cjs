#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function log(msg) { console.log(`[test-trigger] ${msg}`); }

// Test with just a few functions
const testFunctions = [
  'homepage_advertiser',
  'cloud_orchestrator', 
  'front-enhancer'
];

async function testFunction(functionName) {
  log(`Testing function: ${functionName}`);
  
  try {
    const functionPath = path.join(process.cwd(), 'netlify', 'functions', `${functionName}.js`);
    const func = require(functionPath);
    
    const result = await func.handler({}, {});
    log(`✅ ${functionName} completed: ${result.statusCode}`);
    return { name: functionName, ok: true, statusCode: result.statusCode };
  } catch (error) {
    log(`❌ ${functionName} failed: ${error.message}`);
    return { name: functionName, ok: false, error: error.message };
  }
}

async function main() {
  log('Testing Netlify functions trigger with subset...');
  
  const results = [];
  for (const functionName of testFunctions) {
    const result = await testFunction(functionName);
    results.push(result);
  }
  
  const summary = {
    timestamp: new Date().toISOString(),
    totals: {
      count: results.length,
      ok: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok).length,
    },
    results,
  };
  
  console.log('\nTest Summary:');
  console.log(`Total: ${summary.totals.count}`);
  console.log(`Passed: ${summary.totals.ok}`);
  console.log(`Failed: ${summary.totals.failed}`);
  
  if (summary.totals.failed > 0) {
    console.log('\nFailed functions:');
    results.filter(r => !r.ok).forEach(r => {
      console.log(`- ${r.name}: ${r.error}`);
    });
  }
  
  process.exitCode = summary.totals.failed > 0 ? 1 : 0;
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});