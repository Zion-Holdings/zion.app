exports.handler = async function(event, context) {
  try {
    console.log('unused_media_scanner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Unused media scanner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'unused_media_scanner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in unused_media_scanner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};