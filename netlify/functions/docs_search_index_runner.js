exports.handler = async function(event, context) {
  try {
    console.log('docs_search_index_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Docs search index runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'docs_search_index_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in docs_search_index_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};