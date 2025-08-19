const mod = require('./netlify/functions/homepage_advertiser.js');

console.log('Testing homepage_advertiser...');
console.log('Has handler:', !!mod.handler);

if (mod.handler) {
  const mockEvent = { httpMethod: 'GET', path: '/.netlify/functions/homepage_advertiser' };
  const mockContext = { awsRequestId: 'test-' + Date.now() };
  
  mod.handler(mockEvent, mockContext)
    .then(result => {
      console.log('✅ Function executed successfully');
      console.log('Status:', result.statusCode);
      if (result.body) {
        try {
          const body = JSON.parse(result.body);
          console.log('Message:', body.message);
          console.log('Functions count:', body.functionsCount);
        } catch (e) {
          console.log('Raw body:', result.body);
        }
      }
    })
    .catch(error => {
      console.log('❌ Function execution failed:', error.message);
    });
}