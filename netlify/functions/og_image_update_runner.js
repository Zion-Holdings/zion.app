exports.handler = async function(event, context) {
  try {
    console.log('og_image_update_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'OG image update runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'og_image_update_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in og_image_update_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};