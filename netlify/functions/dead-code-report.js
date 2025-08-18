exports.handler = async function(event, context) {
  try {
    console.log('dead-code-report function triggered');
    
    // Basic dead-code-report logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'dead-code-report executed successfully',
        timestamp: new Date().toISOString(),
        function: 'dead-code-report'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in dead-code-report:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'dead-code-report'
      })
    };
  }
};
