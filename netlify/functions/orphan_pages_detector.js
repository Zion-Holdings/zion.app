exports.handler = async function(event, context) {
  try {
    console.log('orphan_pages_detector function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Orphan pages detector function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'orphan_pages_detector'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in orphan_pages_detector:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};