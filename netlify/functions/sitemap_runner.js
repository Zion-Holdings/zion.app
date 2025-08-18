exports.handler = async function(event, context) {
  try {
    console.log('sitemap_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Sitemap runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'sitemap_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in sitemap_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};