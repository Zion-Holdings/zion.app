const functions = [
  'homepage_advertiser',
  'cloud_orchestrator',
  'sitemap_runner',
  'front-enhancer',
  'marketing-and-features-promo',
  'fast-front-promoter'
];

console.log('🚀 Final Test of All Netlify Functions...\n');

async function testFunction(funcName) {
  try {
    const mod = require(`./netlify/functions/${funcName}.js`);
    console.log(`✅ ${funcName}: Loaded successfully, has handler: ${!!mod.handler}`);
    
    if (mod.handler) {
      try {
        const mockEvent = { httpMethod: 'GET', path: `/.netlify/functions/${funcName}` };
        const mockContext = { awsRequestId: 'test-' + Date.now() };
        
        const result = await mod.handler(mockEvent, mockContext);
        console.log(`   ✅ ${funcName}: Executed successfully, status: ${result.statusCode || 200}`);
        
        if (result.body) {
          try {
            const body = JSON.parse(result.body);
            console.log(`   📊 ${funcName}: ${body.message || 'No message'}`);
            if (body.summary) {
              console.log(`   📈 ${funcName}: ${body.summary.successful}/${body.summary.total} successful`);
            }
          } catch (e) {
            console.log(`   📊 ${funcName}: Raw body returned`);
          }
        }
        
        return { name: funcName, status: 'success', statusCode: result.statusCode || 200 };
        
      } catch (execError) {
        console.log(`   ❌ ${funcName}: Execution failed - ${execError.message}`);
        return { name: funcName, status: 'execution_error', error: execError.message };
      }
    } else {
      return { name: funcName, status: 'no_handler', error: 'No handler export found' };
    }
    
  } catch (error) {
    console.log(`❌ ${funcName}: Error - ${error.message}`);
    return { name: funcName, status: 'load_error', error: error.message };
  }
}

async function testAll() {
  const results = [];
  
  for (const funcName of functions) {
    const result = await testFunction(funcName);
    results.push(result);
    console.log('');
  }
  
  // Summary
  const successCount = results.filter(r => r.status === 'success').length;
  const executionErrorCount = results.filter(r => r.status === 'execution_error').length;
  const loadErrorCount = results.filter(r => r.status === 'load_error').length;
  const noHandlerCount = results.filter(r => r.status === 'no_handler').length;
  
  console.log('🎯 === FINAL SUMMARY ===');
  console.log(`Total Functions: ${results.length}`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`⚠️  Execution Errors: ${executionErrorCount}`);
  console.log(`❌ Load Errors: ${loadErrorCount}`);
  console.log(`⚠️  No Handler: ${noHandlerCount}`);
  
  if (successCount === results.length) {
    console.log('\n🎉 ALL FUNCTIONS ARE WORKING PERFECTLY!');
  } else if (successCount >= results.length * 0.8) {
    console.log('\n👍 Most functions are working well!');
  } else {
    console.log('\n🔧 Some functions need attention.');
  }
  
  return results;
}

testAll().catch(console.error);