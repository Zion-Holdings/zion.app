exports.handler = async function(event, context) {
  try {
    console.log('topic_cluster_builder_runner function triggered');
    
    // Basic function logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Topic cluster builder runner function executed successfully',
        timestamp: new Date().toISOString(),
        function: 'topic_cluster_builder_runner'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in topic_cluster_builder_runner:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};