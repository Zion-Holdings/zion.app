exports.handler = async function(event, context) {
  console.log('Test function executed successfully');
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Test function working correctly',
      timestamp: new Date().toISOString(),
      event: event,
      context: {
        awsRequestId: context.awsRequestId,
        functionName: context.functionName
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};