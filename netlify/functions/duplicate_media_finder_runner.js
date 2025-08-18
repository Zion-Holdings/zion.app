exports.handler = async function(event, context) {
  try {
    console.log('duplicate_media_finder_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Duplicate media finder runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'duplicate_media_finder_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in duplicate_media_finder_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};