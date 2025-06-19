#!/usr/bin/env node

/**
 * 🔧 Login Tracing Test Script
 * Tests the enhanced login API with verbose logging
 */

const BASE_URL = 'http://localhost:3000';

const testCases = [
  {
    name: 'Valid Login - Kalcatrao',
    email: 'kalcatrao@hotmail.com',
    password: 'kalc2024!',
    expectedStatus: 200,
    description: 'Should succeed with detailed bcrypt.compare logging'
  },
  {
    name: 'Valid Login - Jane',
    email: 'jane@example.com',
    password: 'password123',
    expectedStatus: 200,
    description: 'Should succeed with plain text comparison'
  },
  {
    name: 'Invalid Password - Kalcatrao',
    email: 'kalcatrao@hotmail.com',
    password: 'wrongpassword',
    expectedStatus: 401,
    description: 'Should fail with detailed password comparison logging'
  },
  {
    name: 'User Not Found',
    email: 'nonexistent@example.com',
    password: 'anypassword',
    expectedStatus: 401,
    description: 'Should fail with user not found message'
  },
  {
    name: 'Email Not Verified',
    email: 'test@unverified.com',
    password: 'test123',
    expectedStatus: 403,
    description: 'Should fail with email verification required message'
  },
  {
    name: 'Missing Credentials',
    email: '',
    password: '',
    expectedStatus: 400,
    description: 'Should fail with missing credentials message'
  }
];

async function testLogin(testCase) {
  console.log(`\n🔧 Testing: ${testCase.name}`);
  console.log(`📝 Description: ${testCase.description}`);
  
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testCase.email,
        password: testCase.password
      })
    });

    const data = await response.json().catch(() => ({}));
    
    console.log(`📊 Response Status: ${response.status} (Expected: ${testCase.expectedStatus})`);
    console.log(`📋 Response Data:`, JSON.stringify(data, null, 2));
    
    const statusMatch = response.status === testCase.expectedStatus;
    console.log(`✅ Status Match: ${statusMatch ? 'PASS' : 'FAIL'}`);
    
    if (!statusMatch) {
      console.log(`❌ Expected ${testCase.expectedStatus}, got ${response.status}`);
    }
    
    // Check for specific response patterns
    if (testCase.expectedStatus === 200) {
      const hasUser = !!data.user;
      const hasToken = !!data.accessToken;
      console.log(`🔑 Has User: ${hasUser}, Has Token: ${hasToken}`);
    }
    
    if (testCase.expectedStatus === 403) {
      const isEmailVerificationError = data.code === 'EMAIL_NOT_VERIFIED' || data.code === 'EMAIL_NOT_CONFIRMED';
      console.log(`📧 Email Verification Error: ${isEmailVerificationError}`);
    }
    
    return statusMatch;
    
  } catch (error) {
    console.error(`❌ Request failed:`, error.message);
    return false;
  }
}

async function runTests() {
  console.log('🔧 LOGIN TRACING TEST SUITE');
  console.log('=============================');
  console.log(`🌐 Testing against: ${BASE_URL}`);
  console.log(`📅 Started at: ${new Date().toISOString()}`);
  
  let passed = 0;
  let failed = 0;
  
  for (const testCase of testCases) {
    const success = await testLogin(testCase);
    if (success) {
      passed++;
    } else {
      failed++;
    }
    
    // Add delay between tests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n🏁 TEST RESULTS');
  console.log('================');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${passed + failed}`);
  console.log(`🎯 Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
  
  if (failed > 0) {
    console.log('\n⚠️  Some tests failed. Check the server logs for detailed tracing information.');
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed! Check the server logs for detailed tracing information.');
  }
}

// Check if server is running
fetch(`${BASE_URL}/api/health`)
  .then(() => {
    console.log('🟢 Server is running, starting tests...');
    runTests();
  })
  .catch(() => {
    console.error('🔴 Server is not running. Please start the development server with `npm run dev`');
    process.exit(1);
  }); 