const cloudOrchestrator = require('./netlify/functions/cloud_orchestrator.js');

async function testFunction() {
  try {
    console.log('Testing cloud_orchestrator function...');
    const result = await cloudOrchestrator.handler({}, {});
    console.log('Function result:', result);
  } catch (error) {
    console.error('Function error:', error);
  }
}

testFunction();