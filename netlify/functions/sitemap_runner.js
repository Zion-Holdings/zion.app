exports.handler = async (event, context) => {
  try {
    console.log('sitemap_runner function triggered');
    
    // Simulate sitemap generation
    const sitemapData = {
      pages: Math.floor(Math.random() * 100) + 50,
      lastModified: new Date().toISOString(),
      priority: 'high',
      changeFreq: 'weekly',
      generated: true
    };
    
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 60));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'sitemap_runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'sitemap_runner',
        sitemapData,
        sitemapGenerated: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in sitemap_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};