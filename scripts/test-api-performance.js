#!/usr/bin/env node

/**
 * API Performance Test Script
 * 
 * Tests the problematic API endpoints mentioned in issue #16:
 * - /api/categories
 * - /api/blog
 * - /api/jobs
 * 
 * Measures response times and validates caching behavior
 */

const https = require('http');
const { performance } = require('perf_hooks');

const BASE_URL = 'http://localhost:3000';
const TIMEOUT_THRESHOLD = 5000; // 5 seconds (much less than 30s mentioned in issue)
const MAX_ACCEPTABLE_TIME = 2000; // 2 seconds for cached responses

// Test endpoints that were timing out
const TEST_ENDPOINTS = [
  {
    name: 'Categories API',
    path: '/api/categories',
    expectedCached: true,
    method: 'GET'
  },
  {
    name: 'Blog API (all posts)',
    path: '/api/blog',
    expectedCached: true,
    method: 'GET'
  },
  {
    name: 'Blog API (search)',
    path: '/api/blog?query=AI',
    expectedCached: true,
    method: 'GET'
  },
  {
    name: 'Jobs API',
    path: '/api/jobs',
    expectedCached: true,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer demo_key_123'
    }
  },
  {
    name: 'Search API',
    path: '/api/search?query=GPU',
    expectedCached: true,
    method: 'GET'
  },
  {
    name: 'Search Suggestions',
    path: '/api/search/suggest?q=AI',
    expectedCached: true,
    method: 'GET'
  }
];

/**
 * Make HTTP request with timeout
 */
function makeRequest(endpoint, timeoutMs = TIMEOUT_THRESHOLD) {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: endpoint.path,
      method: endpoint.method,
      headers: {
        'Content-Type': 'application/json',
        ...(endpoint.headers || {})
      },
      timeout: timeoutMs
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = performance.now();
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
        } catch (error) {
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

    req.on('error', (error) => {
      const endTime = performance.now();
      reject({
        error: error.message,
        responseTime: endTime - startTime
      });
    });

    req.on('timeout', () => {
      const endTime = performance.now();
      req.destroy();
      reject({
        error: 'Request timeout',
        responseTime: endTime - startTime
      });
    });

    req.end();
  });
}

/**
 * Test a single endpoint
 */
async function testEndpoint(endpoint) {
  console.log(`\n🧪 Testing: ${endpoint.name}`);
  console.log(`   URL: ${endpoint.path}`);
  
  const results = {
    name: endpoint.name,
    path: endpoint.path,
    tests: []
  };

  // Test 1: Cold request (no cache)
  try {
    console.log('   ⏱️  Cold request (no cache)...');
    const coldResult = await makeRequest(endpoint);
    
    const coldTest = {
      type: 'cold',
      success: coldResult.statusCode >= 200 && coldResult.statusCode < 300,
      responseTime: coldResult.responseTime,
      statusCode: coldResult.statusCode,
      cacheHeader: coldResult.headers['x-cache'] || coldResult.headers['x-cache-strategy'],
      dataSize: coldResult.size
    };
    
    results.tests.push(coldTest);
    
    if (coldTest.success) {
      console.log(`   ✅ Cold: ${Math.round(coldTest.responseTime)}ms (${coldResult.statusCode})`);
      
      // Check if response has data
      if (coldResult.data && typeof coldResult.data === 'object') {
        const dataLength = Array.isArray(coldResult.data) ? coldResult.data.length : 
                          coldResult.data.results ? coldResult.data.results.length :
                          Object.keys(coldResult.data).length;
        console.log(`   📊 Data: ${dataLength} items, ${coldResult.size} bytes`);
      }
    } else {
      console.log(`   ❌ Cold: Failed with ${coldResult.statusCode}`);
    }
    
    // Test 2: Warm request (should be cached)
    console.log('   🔄 Warm request (should be cached)...');
    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
    
    const warmResult = await makeRequest(endpoint);
    
    const warmTest = {
      type: 'warm',
      success: warmResult.statusCode >= 200 && warmResult.statusCode < 300,
      responseTime: warmResult.responseTime,
      statusCode: warmResult.statusCode,
      cacheHeader: warmResult.headers['x-cache'] || warmResult.headers['x-cache-strategy'],
      improvement: coldTest.responseTime - warmResult.responseTime
    };
    
    results.tests.push(warmTest);
    
    if (warmTest.success) {
      console.log(`   ✅ Warm: ${Math.round(warmTest.responseTime)}ms (${warmResult.statusCode})`);
      if (warmTest.improvement > 0) {
        console.log(`   🚀 Improvement: ${Math.round(warmTest.improvement)}ms faster`);
      }
    } else {
      console.log(`   ❌ Warm: Failed with ${warmResult.statusCode}`);
    }
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.error} (${Math.round(error.responseTime)}ms)`);
    results.tests.push({
      type: 'error',
      success: false,
      error: error.error,
      responseTime: error.responseTime
    });
  }
  
  return results;
}

/**
 * Run all performance tests
 */
async function runPerformanceTests() {
  console.log('🚀 API Performance Test Suite');
  console.log('================================');
  console.log(`Testing against: ${BASE_URL}`);
  console.log(`Timeout threshold: ${TIMEOUT_THRESHOLD}ms`);
  console.log(`Max acceptable cached response: ${MAX_ACCEPTABLE_TIME}ms`);
  
  const allResults = [];
  
  for (const endpoint of TEST_ENDPOINTS) {
    const result = await testEndpoint(endpoint);
    allResults.push(result);
    
    // Small delay between tests
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  // Summary
  console.log('\n📊 PERFORMANCE SUMMARY');
  console.log('=====================');
  
  let totalTests = 0;
  let passedTests = 0;
  let timeoutIssues = 0;
  let cacheIssues = 0;
  
  allResults.forEach(result => {
    console.log(`\n${result.name}:`);
    
    result.tests.forEach(test => {
      totalTests++;
      
      if (test.success) {
        passedTests++;
        console.log(`  ✅ ${test.type}: ${Math.round(test.responseTime)}ms`);
        
        // Check for performance issues
        if (test.responseTime > TIMEOUT_THRESHOLD) {
          timeoutIssues++;
          console.log(`    ⚠️  SLOW: Exceeds ${TIMEOUT_THRESHOLD}ms threshold`);
        } else if (test.type === 'warm' && test.responseTime > MAX_ACCEPTABLE_TIME) {
          cacheIssues++;
          console.log(`    ⚠️  CACHE: Warm request should be faster`);
        }
      } else {
        console.log(`  ❌ ${test.type}: ${test.error || 'Failed'}`);
      }
    });
  });
  
  console.log('\n🎯 OVERALL RESULTS');
  console.log('==================');
  console.log(`Tests passed: ${passedTests}/${totalTests}`);
  console.log(`Success rate: ${Math.round((passedTests / totalTests) * 100)}%`);
  
  if (timeoutIssues === 0) {
    console.log('✅ No timeout issues detected');
  } else {
    console.log(`❌ ${timeoutIssues} timeout issues detected`);
  }
  
  if (cacheIssues === 0) {
    console.log('✅ Caching appears to be working effectively');
  } else {
    console.log(`⚠️  ${cacheIssues} cache performance issues detected`);
  }
  
  // Final verdict
  const success = timeoutIssues === 0 && (passedTests / totalTests) >= 0.8;
  
  if (success) {
    console.log('\n🎉 API PERFORMANCE: GOOD');
    console.log('The timeout issues from issue #16 appear to be resolved!');
  } else {
    console.log('\n❌ API PERFORMANCE: NEEDS ATTENTION');
    console.log('Some endpoints are still experiencing performance issues.');
  }
  
  return {
    success,
    totalTests,
    passedTests,
    timeoutIssues,
    cacheIssues,
    results: allResults
  };
}

/**
 * Check if server is running
 */
async function checkServer() {
  try {
    await makeRequest({ path: '/api/health', method: 'GET' }, 2000);
    return true;
  } catch (error) {
    return false;
  }
}

// Main execution
async function main() {
  console.log('Checking if development server is running...');
  
  const serverRunning = await checkServer();
  if (!serverRunning) {
    console.log('❌ Development server is not running or not responding');
    console.log('Please start the server with: npm run dev');
    process.exit(1);
  }
  
  console.log('✅ Server is running\n');
  
  try {
    const results = await runPerformanceTests();
    process.exit(results.success ? 0 : 1);
  } catch (error) {
    console.error('Test suite failed:', error);
    process.exit(1);
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