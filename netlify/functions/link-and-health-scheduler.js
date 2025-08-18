exports.handler = async (event, context) => {
  try {
    console.log('link-and-health-scheduler function triggered');
    
    // Simulate link health monitoring
    const healthData = {
      totalLinks: Math.floor(Math.random() * 1000) + 500,
      healthyLinks: Math.floor(Math.random() * 800) + 400,
      brokenLinks: Math.floor(Math.random() * 50) + 10,
      redirects: Math.floor(Math.random() * 100) + 50,
      lastChecked: new Date().toISOString(),
      healthScore: Math.floor(Math.random() * 100)
    };
    
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 70));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'link-and-health-scheduler function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'link-and-health-scheduler',
        healthData,
        scheduled: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in link-and-health-scheduler:', error);
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