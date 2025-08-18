exports.handler = async function(event, context) {
  console.log('trigger-all-and-commit function executed');
  
  try {
    // Basic trigger all and commit logic
    const timestamp = new Date().toISOString();
    console.log(`Trigger all and commit process started at ${timestamp}`);
    
    // Simulate some trigger work
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Trigger all and commit completed successfully',
        timestamp: timestamp,
        function: 'trigger-all-and-commit'
      })
    };
  } catch (error) {
    console.error('Error in trigger-all-and-commit:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Trigger all and commit failed',
        message: error.message,
        function: 'trigger-all-and-commit'
      })
    };
  }
};