const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed',
        error: 'Only POST method is supported'
      })
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Validate required fields
    if (!data.event || !data.sessionId || !data.timestamp) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Missing required fields',
          error: 'event, sessionId, and timestamp are required'
        })
      };
    }

    // Process analytics data
    const processedData = {
      ...data,
      processedAt: new Date().toISOString(),
      serverTimestamp: Date.now()
    };

    // Store analytics data (in a real app, this would go to a database)
    // For now, we'll just log it
    console.log('Analytics Event:', processedData);

    // Send to external analytics service if configured
    if (process.env.EXTERNAL_ANALYTICS_URL) {
      try {
        await fetch(process.env.EXTERNAL_ANALYTICS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.EXTERNAL_ANALYTICS_API_KEY || ''}`
          },
          body: JSON.stringify(processedData)
        });
      } catch (error) {
        console.error('External analytics error:', error);
      }
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        success: true,
        message: 'Analytics data processed successfully',
        data: processedData
      })
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        success: false,
        message: 'Internal server error',
        error: errorMessage
      })
    };
  }
};

module.exports = { handler };