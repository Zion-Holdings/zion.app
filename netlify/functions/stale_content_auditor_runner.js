exports.handler = async function(event, context) {
  try {
    console.log('stale_content_auditor_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Stale content auditor runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'stale_content_auditor_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in stale_content_auditor_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};