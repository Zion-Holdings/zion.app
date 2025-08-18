exports.handler = async (event, context) => {
  try {
    console.log('front-enhancer function triggered');
    
    // Simple response for testing
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'front-enhancer function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'front-enhancer'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in front-enhancer:', error);
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