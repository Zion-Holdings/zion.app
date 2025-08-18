exports.handler = async function(event, context) {
  try {
    console.log('external-link-check-runner function triggered');
    
    // Basic external-link-check-runner logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'external-link-check-runner executed successfully',
        timestamp: new Date().toISOString(),
        function: 'external-link-check-runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in external-link-check-runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'external-link-check-runner'
      })
    };
  }
};
