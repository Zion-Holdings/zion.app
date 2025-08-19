const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(__dirname, 'netlify', 'functions');

async function testFunction(functionName) {
  try {
    const functionPath = path.join(FUNCTIONS_DIR, `${functionName}.js`);
    
    if (!fs.existsSync(functionPath)) {
      return { name: functionName, status: 'missing', error: 'Function file not found' };
    }
    
    // Load the function
    const mod = require(functionPath);
    
    if (!mod.handler) {
      return { name: functionName, status: 'invalid', error: 'No handler export found' };
    }
    
    // Test the handler with a mock event
    const mockEvent = { httpMethod: 'GET', path: `/.netlify/functions/${functionName}` };
    const mockContext = { awsRequestId: 'test-' + Date.now() };
    
    const result = await mod.handler(mockEvent, mockContext);
    
    return { 
      name: functionName, 
      status: 'success', 
      statusCode: result.statusCode || 200,
      body: result.body ? JSON.parse(result.body) : null
    };
    
  } catch (error) {
    return { 
      name: functionName, 
      status: 'error', 
      error: error.message,
      stack: error.stack
    };
  }
}

async function testAllFunctions() {
  const functions = [
    'homepage_advertiser',
    'cloud_orchestrator',
    'sitemap_runner',
    'front-enhancer',
    'marketing-and-features-promo',
    'fast-front-promoter'
  ];
  
  console.log('Testing Netlify Functions...\n');
  
  const results = [];
  
  for (const funcName of functions) {
    console.log(`Testing ${funcName}...`);
    const result = await testFunction(funcName);
    results.push(result);
    
    if (result.status === 'success') {
      console.log(`✅ ${funcName}: SUCCESS (${result.statusCode})`);
    } else if (result.status === 'error') {
      console.log(`❌ ${funcName}: ERROR - ${result.error}`);
    } else {
      console.log(`⚠️  ${funcName}: ${result.status.toUpperCase()} - ${result.error}`);
    }
    console.log('');
  }
  
  // Summary
  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.filter(r => r.status === 'error').length;
  const missingCount = results.filter(r => r.status === 'missing').length;
  
  console.log('=== SUMMARY ===');
  console.log(`Total: ${results.length}`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`⚠️  Missing: ${missingCount}`);
  
  // Show detailed errors
  if (errorCount > 0) {
    console.log('\n=== DETAILED ERRORS ===');
    results.filter(r => r.status === 'error').forEach(result => {
      console.log(`\n${result.name}:`);
      console.log(`  Error: ${result.error}`);
      if (result.stack) {
        console.log(`  Stack: ${result.stack.split('\n')[0]}`);
      }
    });
  }
  
  return results;
}

if (require.main === module) {
  testAllFunctions().catch(console.error);
}

module.exports = { testFunction, testAllFunctions };