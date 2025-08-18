exports.handler = async function(event, context) {
  try {
    console.log('unused-media-scanner function triggered');
    
    // Basic unused-media-scanner logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'unused-media-scanner executed successfully',
        timestamp: new Date().toISOString(),
        function: 'unused-media-scanner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in unused-media-scanner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: 'unused-media-scanner'
      })
    };
  }
};
