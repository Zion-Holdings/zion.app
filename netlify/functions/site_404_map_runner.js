exports.handler = async function(event, context) {
  try {
    console.log('site_404_map_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Site 404 map runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'site_404_map_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in site_404_map_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};