
class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting ...');
    
    try {
      #!/usr/bin/env node



const https = require('http');const { performance: _performance } = require('perf_hooks')
const _BASE_URL = http://localhost:3000';const TIMEOUT_THRESHOLD = 5000; // 5 seconds (much less than 30s mentioned in issue)
const MAX_ACCEPTABLE_TIME = 2000; // 2 seconds for cached responses

// Test endpoints that were timing out
const TEST_ENDPOINTS = [
  {
    name: Categories API',    path: /api/categories',    expectedCached: true,
    method: 'GET'  },
  {
    name: Blog API (all posts),    path: /api/blog',    expectedCached: true,
    method: 'GET'  },
  {
    name: Blog API (search),    path: /api/blog?query='AI',    expectedCached: true,
    method: 'GET'  },
  {
    name: Jobs API',    path: /api/jobs',    expectedCached: true,
    method: 'GET',    headers: {
      Authorization': Bearer demo_key_123''    }
  },
  {
    name: Search API',    path: /api/search?query='GPU',    expectedCached: true,
    method: 'GET'  },
  {
    name: Search Suggestions',    path: /api/search/suggest?q='AI',    expectedCached: true,
    method: 'GET'  }
];


function makeRequest(endpoint, timeoutMs = TIMEOUT_THRESHOLD) {
  return new Promise((resolve, reject) => {
    const startTime = _performance.now()
const options = {
      hostname: 'localhost',      port: 3000,
      path: endpoint.path,
      method: endpoint.method,
      headers: {
        Content-Type': application/json',        ...(endpoint.headers || {})
      },
      timeout: timeoutMs
    }
const req = https.request(options, (res) => {
      let data = ;      
      res.on('data', (chunk) => {'        data += chunk;
      });
      
      res.on('end', () => {'        const endTime = _performance.now()
const responseTime = endTime - startTime;
        
        try {
          const parsedData = JSON.parse(data);
          resolve({
            statusCode: res.statusCode,
            responseTime,
            data: parsedData,
            headers: res.headers,
            size: data.length
          });
        } catch {
          resolve({
            statusCode: res.statusCode,
            responseTime,
            data: data,
            headers: res.headers,
            size: data.length,
            parseError: true
          });
        }
      });
    });

    req.on('error', (error) => {'      const endTime = _performance.now();
      reject({
        error: error.message,
        responseTime: endTime - startTime
      });
    });

    req.on('timeout', () => {'      const endTime = _performance.now();
      req.destroy();
      reject({
        error: Request timeout',        responseTime: endTime - startTime
      });
    });

    req.end();
  });
}


async function testEndpoint(endpoint) {
  // console.warn(`\n🧪 Testing: ${endpoint.name}`);
  // console.warn(`   URL: ${endpoint.path}`)
const results = {
    name: endpoint.name,
    path: endpoint.path,
    tests: []
  };

  // Test 1: Cold request (no cache)
  try {
    // console.warn('   ⏱️  Cold request (no cache)...');    const coldResult = await makeRequest(endpoint)
const coldTest = {
      type: 'cold',      success: coldResult.statusCode >= 200 && coldResult.statusCode < 300,
      responseTime: coldResult.responseTime,
      statusCode: coldResult.statusCode,
      cacheHeader: coldResult.headers['x-cache'] || coldResult.headers['x-cache-strategy'],      dataSize: coldResult.size
    };
    
    results.tests.push(coldTest);
    
    if (coldTest.success) {
      // console.warn(`   ✅ Cold: ${Math.round(coldTest.responseTime)}ms (${coldResult.statusCode})`);
      
      // Check if response has data
      if (coldResult.data && typeof coldResult.data === 'object') {        const _dataLength = Array.isArray(coldResult.data) ? coldResult.data.length : 
                          coldResult.data.results ? coldResult.data.results.length :
                          Object.keys(coldResult.data).length;
        // console.warn(`   📊 Data: ${_dataLength} items, ${coldResult.size} bytes`);
      }
    } else {
      // console.warn(`   ❌ Cold: Failed with ${coldResult.statusCode}`);
    }
    
    // Test 2: Warm request (should be cached)
    // console.warn('   🔄 Warm request (should be cached)...');    await new Promise(resolve => 
const timeoutId = setTimeout(resolve,  100);
// Store timeoutId for cleanup if needed
); // Small delay
    
    const warmResult = await makeRequest(endpoint)
const warmTest = {
      type: 'warm',      success: warmResult.statusCode >= 200 && warmResult.statusCode < 300,
      responseTime: warmResult.responseTime,
      statusCode: warmResult.statusCode,
      cacheHeader: warmResult.headers['x-cache'] || warmResult.headers['x-cache-strategy'],      improvement: coldResult.responseTime - warmResult.responseTime
    };
    
    results.tests.push(warmTest);
    
    if (warmTest.success) {
      // console.warn(`   ✅ Warm: ${Math.round(warmTest.responseTime)}ms (${warmResult.statusCode})`);
      if (warmTest.improvement > 0) {
        // console.warn(`   🚀 Improvement: ${Math.round(warmTest.improvement)}ms faster`);
      }
    } else {
      // console.warn(`   ❌ Warm: Failed with ${warmResult.statusCode}`);
    }
    
  } catch {
    // console.warn(`   ❌ Error: ${'Error occurred'.'Error occurred'} (${Math.round(error.responseTime)}ms)`);    results.tests.push({
      type: 'error',      success: false,
      error: error.error,
      responseTime: error.responseTime
    });
  }
  
  return results;
}


async function runPerformanceTests() {
  // console.warn('🚀 API Performance Test Suite');  // console.warn('================================');  // console.warn(`Testing against: ${BASE_URL}`);
  // console.warn(`Timeout threshold: ${TIMEOUT_THRESHOLD}ms`);
  // console.warn(`Max acceptable cached response: ${MAX_ACCEPTABLE_TIME}ms`)
const allResults = [];
  
  for (const endpoint of TEST_ENDPOINTS) {
    const result = await testEndpoint(endpoint);
    allResults.push(result);
    
    // Small delay between tests
    await new Promise(resolve => 
const timeoutId = setTimeout(resolve,  200);
// Store timeoutId for cleanup if needed
);
  }
  
  // Summary
  // console.warn('\n📊 PERFORMANCE SUMMARY');  // console.warn('=====================');  
  let totalTests = 0;
  let passedTests = 0;
  let timeoutIssues = 0;
  let cacheIssues = 0;
  
  allResults.forEach(result => {
    // console.warn(`\n${result.name}:`);
    
    result.tests.forEach(test => {
      totalTests++;
      
      if (test.success) {
        passedTests++;
        // console.warn(`  ✅ ${test.type}: ${Math.round(test.responseTime)}ms`);
        
        // Check for performance issues
        if (test.responseTime > TIMEOUT_THRESHOLD) {
          timeoutIssues++;
          // console.warn(`    ⚠️  SLOW: Exceeds ${TIMEOUT_THRESHOLD}ms threshold`);
        } else if (test.type === warm' && test.responseTime > MAX_ACCEPTABLE_TIME) {          cacheIssues++;
          // console.warn(`    ⚠️  CACHE: Warm request should be faster`);
        }
      } else {
        // console.warn(`  ❌ ${test.type}: ${test.error || Failed'}`);      }
    });
  });
  
  // console.warn('\n OVERALL RESULTS');  // console.warn('==================');  // console.warn(`Tests passed: ${passedTests}/${totalTests}`);
  // console.warn(`Success rate: ${Math.round((passedTests / totalTests) * 100)}%`);
  
  if (timeoutIssues === 0) {
    // console.warn('✅ No timeout issues detected');  } else {
    // console.warn(`❌ ${timeoutIssues} timeout issues detected`);
  }
  
  if (cacheIssues === 0) {
    // console.warn('✅ Caching appears to be working effectively');  } else {
    // console.warn(`⚠️  ${cacheIssues} cache performance issues detected`);
  }
  
  // Final verdict
  const success = timeoutIssues === 0 && (passedTests / totalTests) >= 0.8;
  
  if (success) {
    // console.warn('\n🎉 API PERFORMANCE: GOOD');    // console.warn('The timeout issues from issue #16 appear to be resolved!');  } else {
    // console.warn('\n❌ API PERFORMANCE: NEEDS ATTENTION');    // console.warn('Some endpoints are still experiencing performance issues.');  }
  
  return {
    success,
    totalTests,
    passedTests,
    timeoutIssues,
    cacheIssues,
    results: allResults
  };
}


async function checkServer() {
  try {
    await makeRequest({ path: /api/health', method: 'GET' }, 2000);    return true;
  } catch {
    return false;
  }
}

// Main execution
async function main() {
  // console.warn('Checking if development server is running...')
const serverRunning = await checkServer();
  if (!serverRunning) {
    // console.warn('❌ Development server is not running or not responding');    // console.warn('Please start the server with: npm run dev');    process.exit(1);
  }
  
  // console.warn('✅ Server is running\n');  
  try {
    const results = await runPerformanceTests();
    process.exit(results.success ? 0 : 1);
  } catch {
    // console.('Test suite failed:', );    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  runPerformanceTests,
  testEndpoint,
  makeRequest
}; 

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      console.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    console.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
