exports.handler = async function(event, context) {
  try {
    console.log('Test function executed successfully');
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Test function working!',
        timestamp: new Date().toISOString(),
        event: event,
        context: context
      })
    };
  } catch (error) {
    console.error('Test function error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Test function failed',
        message: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};