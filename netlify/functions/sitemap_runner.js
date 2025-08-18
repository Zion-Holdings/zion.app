exports.handler = async function(event, context) {
  console.log('sitemap_runner function executed');
  
  try {
    // Basic sitemap runner logic
    const timestamp = new Date().toISOString();
    console.log(`Sitemap runner process started at ${timestamp}`);
    
    // Simulate some sitemap work
    await new Promise(resolve => setTimeout(resolve, 280));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Sitemap runner completed successfully',
        timestamp: timestamp,
        function: 'sitemap_runner'
      })
    };
  } catch (error) {
    console.error('Error in sitemap_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Sitemap runner failed',
        message: error.message,
        function: 'sitemap_runner'
      })
    };
  }
};