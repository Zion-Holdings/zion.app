exports.handler = async function(event, context) {
  console.log('🔍 edge-case-handler function triggered');
  
  try {
    const timestamp = new Date().toISOString();
    
    // Test various edge cases and data types
    const edgeCaseTests = {
      nullHandling: null,
      undefinedHandling: undefined,
      emptyString: '',
      emptyArray: [],
      emptyObject: {},
      specialCharacters: '!@#$%^&*()_+-=[]{}|;:,.<>?',
      unicodeCharacters: '🚀🌟💻🎯🔥',
      veryLongString: 'a'.repeat(1000),
      numbers: [0, -1, 3.14159, Infinity, -Infinity, NaN],
      booleanValues: [true, false],
      mixedTypes: [null, 'string', 42, true, { nested: 'value' }]
    };
    
    // Simulate processing these edge cases
    const processingResults = {};
    let successCount = 0;
    let edgeCaseCount = 0;
    
    for (const [testName, testValue] of Object.entries(edgeCaseTests)) {
      try {
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 150));
        
        // Test different handling scenarios
        if (testValue === null || testValue === undefined) {
          processingResults[testName] = 'handled-null-undefined';
          edgeCaseCount++;
        } else if (Array.isArray(testValue) && testValue.length === 0) {
          processingResults[testName] = 'handled-empty-array';
          edgeCaseCount++;
        } else if (typeof testValue === 'string' && testValue.length === 0) {
          processingResults[testName] = 'handled-empty-string';
          edgeCaseCount++;
        } else if (typeof testValue === 'object' && Object.keys(testValue).length === 0) {
          processingResults[testName] = 'handled-empty-object';
          edgeCaseCount++;
        } else {
          processingResults[testName] = 'processed-successfully';
          successCount++;
        }
      } catch (error) {
        processingResults[testName] = `error: ${error.message}`;
      }
    }
    
    // Calculate edge case handling metrics
    const totalTests = Object.keys(edgeCaseTests).length;
    const edgeCaseHandlingRate = (edgeCaseCount / totalTests) * 100;
    const successRate = (successCount / totalTests) * 100;
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Edge case handler completed successfully',
        timestamp: timestamp,
        function: 'edge-case-handler',
        status: 'success',
        testSummary: {
          totalTests: totalTests,
          successfulTests: successCount,
          edgeCaseTests: edgeCaseCount,
          successRate: `${successRate.toFixed(1)}%`,
          edgeCaseHandlingRate: `${edgeCaseHandlingRate.toFixed(1)}%`
        },
        processingResults: processingResults,
        edgeCaseTests: edgeCaseTests,
        robustnessScore: Math.min(100, successRate + edgeCaseHandlingRate),
        nextRun: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString() // 2 hours from now
      })
    };
    
    console.log('✅ edge-case-handler completed successfully');
    return result;
    
  } catch (error) {
    console.error('❌ edge-case-handler failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Edge case handler failed',
        error: error.message,
        function: 'edge-case-handler',
        status: 'error'
      })
    };
  }
};