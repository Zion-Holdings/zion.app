exports.handler = async function(event, context) {
  try {
    console.log('🤖 unused-media-scanner function triggered');
    
    // Basic function logic - can be expanded later
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'unused-media-scanner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'unused-media-scanner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('❌ unused-media-scanner function error:', error);
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
