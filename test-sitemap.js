const mod = require('./netlify/functions/sitemap_runner.js');

console.log('Testing sitemap_runner...');
console.log('Has handler:', !!mod.handler);

if (mod.handler) {
  const mockEvent = { httpMethod: 'GET', path: '/.netlify/functions/sitemap_runner' };
  const mockContext = { awsRequestId: 'test-' + Date.now() };
  
  mod.handler(mockEvent, mockContext)
    .then(result => {
      console.log('✅ Function executed successfully');
      console.log('Status:', result.statusCode);
      if (result.body) {
        try {
          const body = JSON.parse(result.body);
          console.log('Message:', body.message);
          console.log('Routes count:', body.routesCount);
        } catch (e) {
          console.log('Raw body:', result.body);
        }
      }
    })
    .catch(error => {
      console.log('❌ Function execution failed:', error.message);
    });
}