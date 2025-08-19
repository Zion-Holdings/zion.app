const mod = require('./netlify/functions/fast-front-promoter.js');

console.log('Testing fast-front-promoter...');
console.log('Has handler:', !!mod.handler);

if (mod.handler) {
  const mockEvent = { httpMethod: 'GET', path: '/.netlify/functions/fast-front-promoter' };
  const mockContext = { awsRequestId: 'test-' + Date.now() };
  
  mod.handler(mockEvent, mockContext)
    .then(result => {
      console.log('✅ Function executed successfully');
      console.log('Status:', result.statusCode);
      if (result.body) {
        try {
          const body = JSON.parse(result.body);
          console.log('Message:', body.message);
          console.log('Promos generated:', body.promosGenerated);
          console.log('Summary:', body.summary);
        } catch (e) {
          console.log('Raw body:', result.body);
        }
      }
    })
    .catch(error => {
      console.log('❌ Function execution failed:', error.message);
    });
}