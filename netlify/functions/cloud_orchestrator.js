exports.handler = async (event, context) => {
  try {
    console.log('cloud_orchestrator function triggered');
    
    // Simple response for testing
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'cloud_orchestrator function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'cloud_orchestrator'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in cloud_orchestrator:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};