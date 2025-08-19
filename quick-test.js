const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(__dirname, 'netlify', 'functions');

async function quickTest() {
  const testFunctions = [
    'homepage_advertiser',
    'cloud_orchestrator', 
    'front-enhancer',
    'sitemap_runner',
    'dead-code-report'
  ];
  
  console.log('🧪 Quick Test of Key Netlify Functions\n');
  
  for (const funcName of testFunctions) {
    try {
      const functionPath = path.join(FUNCTIONS_DIR, `${funcName}.js`);
      
      if (!fs.existsSync(functionPath)) {
        console.log(`❌ ${funcName}: Function file not found`);
        continue;
      }
      
      // Load the function
      const mod = require(functionPath);
      
      if (!mod.handler) {
        console.log(`❌ ${funcName}: No handler export found`);
        continue;
      }
      
      // Test the handler
      const mockEvent = {};
      const mockContext = {};
      
      const start = Date.now();
      const result = await mod.handler(mockEvent, mockContext);
      const duration = Date.now() - start;
      
      if (result && result.statusCode) {
        if (result.statusCode >= 200 && result.statusCode < 300) {
          console.log(`✅ ${funcName}: SUCCESS (${result.statusCode}) - ${duration}ms`);
        } else {
          console.log(`❌ ${funcName}: FAILED (${result.statusCode}) - ${duration}ms`);
        }
      } else {
        console.log(`⚠️  ${funcName}: UNKNOWN RESPONSE - ${duration}ms`);
      }
      
    } catch (error) {
      console.log(`💥 ${funcName}: ERROR - ${error.message}`);
    }
  }
  
  console.log('\n🎯 Quick test completed!');
}

quickTest().catch(console.error);