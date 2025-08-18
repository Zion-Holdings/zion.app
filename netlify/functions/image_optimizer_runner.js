exports.handler = async function(event, context) {
  try {
    console.log('image_optimizer_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Image optimizer runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'image_optimizer_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in image_optimizer_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};