exports.handler = async function(event, context) {
  console.log('⚡ async-concurrency-tester function triggered');
  
  try {
    const timestamp = new Date().toISOString();
    
    // Test different async operation patterns
    const asyncTests = {
      sequential: 'sequential-operations',
      parallel: 'parallel-operations',
      race: 'race-conditions',
      timeout: 'timeout-handling',
      retry: 'retry-logic',
      waterfall: 'waterfall-operations'
    };
    
    const results = {};
    const startTime = Date.now();
    
    // Test 1: Sequential operations
    const sequentialStart = Date.now();
    const sequentialResults = [];
    for (let i = 0; i < 5; i++) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Simulate async work
      sequentialResults.push(`operation-${i + 1}-completed`);
    }
    results.sequential = {
      type: 'sequential',
      operations: sequentialResults,
      duration: Date.now() - sequentialStart,
      status: 'completed'
    };
    
    // Test 2: Parallel operations
    const parallelStart = Date.now();
    const parallelPromises = Array.from({ length: 5 }, (_, i) => 
      new Promise(resolve => 
        setTimeout(() => resolve(`parallel-${i + 1}-completed`), 300)
      )
    );
    const parallelResults = await Promise.all(parallelPromises);
    results.parallel = {
      type: 'parallel',
      operations: parallelResults,
      duration: Date.now() - parallelStart,
      status: 'completed'
    };
    
    // Test 3: Race conditions
    const raceStart = Date.now();
    const racePromises = [
      new Promise(resolve => setTimeout(() => resolve('fast-operation'), 100)),
      new Promise(resolve => setTimeout(() => resolve('medium-operation'), 250)),
      new Promise(resolve => setTimeout(() => resolve('slow-operation'), 400))
    ];
    const raceWinner = await Promise.race(racePromises);
    results.race = {
      type: 'race',
      winner: raceWinner,
      duration: Date.now() - raceStart,
      status: 'completed'
    };
    
    // Test 4: Timeout handling
    const timeoutStart = Date.now();
    try {
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), 100);
      });
      await Promise.race([
        timeoutPromise,
        new Promise(resolve => setTimeout(resolve, 200))
      ]);
      results.timeout = {
        type: 'timeout',
        status: 'timeout-prevented',
        duration: Date.now() - timeoutStart
      };
    } catch (error) {
      results.timeout = {
        type: 'timeout',
        status: 'timeout-occurred',
        error: error.message,
        duration: Date.now() - timeoutStart
      };
    }
    
    // Test 5: Retry logic
    const retryStart = Date.now();
    let retryAttempts = 0;
    let retrySuccess = false;
    while (retryAttempts < 3 && !retrySuccess) {
      retryAttempts++;
      try {
        await new Promise((resolve, reject) => {
          if (Math.random() > 0.3) { // 70% success rate
            resolve('retry-success');
          } else {
            reject(new Error(`Attempt ${retryAttempts} failed`));
          }
        });
        retrySuccess = true;
      } catch (error) {
        if (retryAttempts === 3) {
          // Final attempt failed
        }
      }
    }
    results.retry = {
      type: 'retry',
      attempts: retryAttempts,
      success: retrySuccess,
      duration: Date.now() - retryStart,
      status: retrySuccess ? 'succeeded' : 'failed-after-retries'
    };
    
    // Test 6: Waterfall operations
    const waterfallStart = Date.now();
    const waterfallResults = [];
    let previousResult = 'initial';
    for (let i = 0; i < 4; i++) {
      await new Promise(resolve => setTimeout(resolve, 150));
      previousResult = `waterfall-step-${i + 1}-using-${previousResult}`;
      waterfallResults.push(previousResult);
    }
    results.waterfall = {
      type: 'waterfall',
      operations: waterfallResults,
      duration: Date.now() - waterfallStart,
      status: 'completed'
    };
    
    const totalDuration = Date.now() - startTime;
    
    // Calculate concurrency metrics
    const concurrencyMetrics = {
      totalDuration: totalDuration,
      sequentialDuration: results.sequential.duration,
      parallelDuration: results.parallel.duration,
      efficiencyGain: ((results.sequential.duration - results.parallel.duration) / results.sequential.duration * 100).toFixed(1),
      operationsPerSecond: (Object.keys(results).length / (totalDuration / 1000)).toFixed(2)
    };
    
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Async concurrency tester completed successfully',
        timestamp: timestamp,
        function: 'async-concurrency-tester',
        status: 'success',
        concurrencyMetrics: concurrencyMetrics,
        testResults: results,
        summary: {
          totalTests: Object.keys(asyncTests).length,
          successfulTests: Object.values(results).filter(r => r.status === 'completed' || r.status === 'succeeded' || r.status === 'timeout-prevented').length,
          totalDuration: totalDuration,
          averageTestDuration: (totalDuration / Object.keys(asyncTests).length).toFixed(0)
        },
        nextRun: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString() // 4 hours from now
      })
    };
    
    console.log('✅ async-concurrency-tester completed successfully');
    return result;
    
  } catch (error) {
    console.error('❌ async-concurrency-tester failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Async concurrency tester failed',
        error: error.message,
        function: 'async-concurrency-tester',
        status: 'error'
      })
    };
  }
};