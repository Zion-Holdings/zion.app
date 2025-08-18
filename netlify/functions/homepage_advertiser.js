exports.handler = async (event, context) => {
  try {
    console.log('homepage_advertiser function triggered');
    
    // Simple response for testing
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'homepage_advertiser function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'homepage_advertiser'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error in homepage_advertiser:', error);
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