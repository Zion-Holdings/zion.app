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
    const errorReport = JSON.parse(event.body);

    // Validate required fields
    if (!errorReport.message || !errorReport.timestamp) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Missing required fields',
          error: 'message and timestamp are required'
        })
      };
    }

    // Generate unique error ID
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Process error report
    const processedReport = {
      ...errorReport,
      errorId,
      processedAt: new Date().toISOString(),
      serverTimestamp: Date.now(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || 'unknown'
    };

    // Log error
    console.log('Error Report:', processedReport);

    // Send to external error tracking service if configured
    if (process.env.EXTERNAL_ERROR_TRACKING_URL) {
      try {
        await fetch(process.env.EXTERNAL_ERROR_TRACKING_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.EXTERNAL_ERROR_TRACKING_API_KEY || ''}`
          },
          body: JSON.stringify(processedReport)
        });
      } catch (error) {
        console.error('External error tracking error:', error);
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
        message: 'Error report received successfully',
        errorId
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