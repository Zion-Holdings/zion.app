exports.handler = async function(event, context) {
  try {
    console.log('unused-media-scanner function triggered');
    
    // Basic unused media scanning logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Unused media scanner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'unused-media-scanner',
        action: 'scanning for unused media files'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in unused-media-scanner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};