exports.handler = async function(event, context) {
  try {
    console.log('headers-enforcer function triggered');
    
    // Basic headers enforcement logic
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN'
      },
      body: JSON.stringify({
        message: 'Headers enforcer function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'headers-enforcer',
        status: 'success',
        enforcedHeaders: ['HSTS', 'X-Content-Type-Options', 'X-Frame-Options']
      })
    };
    
    return response;
  } catch (error) {
    console.error('Error in headers-enforcer:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Error in headers enforcer function',
        error: error.message,
        timestamp: new Date().toISOString(),
        function: 'headers-enforcer',
        status: 'error'
      })
    };
  }
};