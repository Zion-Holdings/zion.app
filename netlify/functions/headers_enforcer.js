exports.handler = async function(event, context) {
  try {
    console.log('headers_enforcer function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Headers enforcer function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'headers_enforcer'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in headers_enforcer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};