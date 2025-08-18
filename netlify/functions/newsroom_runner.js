exports.handler = async function(event, context) {
  try {
    console.log('newsroom_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Newsroom runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'newsroom_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in newsroom_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};