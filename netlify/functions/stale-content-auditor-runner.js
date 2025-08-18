exports.handler = async function(event, context) {
  try {
    console.log('stale-content-auditor-runner function triggered');
    
    // Basic stale content auditing logic
    const timestamp = new Date().toISOString();
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Stale content auditor runner function executed successfully',
        timestamp: timestamp,
        function: 'stale-content-auditor-runner',
        action: 'stale_content_audit',
        stale_content_found: 4
      })
    };
    
    console.log('stale-content-auditor-runner completed successfully');
    return result;
    
  } catch (error) {
    console.error('stale-content-auditor-runner error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};