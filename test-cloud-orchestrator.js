const mod = require('./netlify/functions/cloud_orchestrator.js');

console.log('Testing cloud_orchestrator...');
console.log('Has handler:', !!mod.handler);

if (mod.handler) {
  const mockEvent = { httpMethod: 'GET', path: '/.netlify/functions/cloud_orchestrator' };
  const mockContext = { awsRequestId: 'test-' + Date.now() };
  
  mod.handler(mockEvent, mockContext)
    .then(result => {
      console.log('✅ Function executed successfully');
      console.log('Status:', result.statusCode);
      if (result.body) {
        try {
          const body = JSON.parse(result.body);
          console.log('Message:', body.message);
          console.log('Summary:', body.summary);
          if (body.results) {
            console.log('Results:');
            body.results.forEach(r => {
              console.log(`  ${r.script || r.component}: ${r.success ? '✅' : '❌'} ${r.message || r.error || ''}`);
            });
          }
        } catch (e) {
          console.log('Raw body:', result.body);
        }
      }
    })
    .catch(error => {
      console.log('❌ Function execution failed:', error.message);
    });
}