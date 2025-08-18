exports.handler = async function(event, context) {
  try {
    console.log('broken-image-scanner function triggered');
    
    // Basic broken-image-scanner logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'broken-image-scanner executed successfully',
        timestamp: new Date().toISOString(),
        function: 'broken-image-scanner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in broken-image-scanner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'broken-image-scanner'
      })
    };
  }
};
