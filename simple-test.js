const functions = [
  'homepage_advertiser',
  'cloud_orchestrator',
  'sitemap_runner',
  'front-enhancer',
  'marketing-and-features-promo',
  'fast-front-promoter'
];

console.log('Testing Netlify Functions...\n');

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
          } catch (e) {
            console.log(`   📊 ${funcName}: Raw body returned`);
          }
        }
        
      } catch (execError) {
        console.log(`   ❌ ${funcName}: Execution failed - ${execError.message}`);
      }
    }
    
  } catch (error) {
    console.log(`❌ ${funcName}: Error - ${error.message}`);
  }
  console.log('');
}

async function testAll() {
  for (const funcName of functions) {
    await testFunction(funcName);
  }
}

testAll().catch(console.error);