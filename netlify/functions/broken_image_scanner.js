exports.handler = async function(event, context) {
  try {
    console.log('broken_image_scanner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Broken image scanner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'broken_image_scanner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in broken_image_scanner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};