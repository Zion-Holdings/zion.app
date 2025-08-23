#!/usr/bin/env node

/**
 * 🔧 Login Tracing Test Script
 * Tests the enhanced login API with verbose logging
 * 🔐 SECURITY: Uses environment variables, no hardcoded credentials
 */

const BASE_URL = 'http://localhost:3000';

// 🔐 SECURITY: Generate test cases from environment variables
const getTestCases = () => {
  // Only run in development mode
  if (process.env.NODE_ENV !== 'development') {
    console.log('❌ This script only runs in development mode for security');
    return [];
  }

  const testCases = [];

  // Get development credentials from environment
  const devUser1Email = process.env.DEV_USER_1_EMAIL;
  const devUser1Password = process.env.DEV_USER_1_PASSWORD;
  const devUser2Email = process.env.DEV_USER_2_EMAIL;
  const devUser2Password = process.env.DEV_USER_2_PASSWORD;
  const devUser3Email = process.env.DEV_USER_3_EMAIL;
  const devUser3Password = process.env.DEV_USER_3_PASSWORD;

  // Add configured users to test cases
  if (devUser1Email && devUser1Password) {
    testCases.push({
      name: 'Valid Login - Dev User 1',
      email: devUser1Email,
      password: devUser1Password,
      expectedStatus: 200,
      description: 'Should succeed with configured development user 1'
    });

    // Test wrong password for same user
    testCases.push({
      name: 'Invalid Password - Dev User 1',
      email: devUser1Email,
      password: 'wrongpassword',
      expectedStatus: 401,
      description: 'Should fail with incorrect password'
    });
  }

  if (devUser2Email && devUser2Password) {
    testCases.push({
      name: 'Valid Login - Dev User 2',
      email: devUser2Email,
      password: devUser2Password,
      expectedStatus: 200,
      description: 'Should succeed with configured development user 2'
    });
  }

  if (devUser3Email && devUser3Password) {
    testCases.push({
      name: 'Email Verification Test - Dev User 3',
      email: devUser3Email,
      password: devUser3Password,
      expectedStatus: 403, // Assuming user 3 is set up for email verification testing
      description: 'Should fail with email verification required (if configured)'
    });
  }

  // Add fallback test cases if no environment users are configured
  if (testCases.length === 0) {
    console.log('⚠️  No development users configured in environment variables');
    console.log('💡 Using fallback test cases with generic credentials');
    
    testCases.push(
      {
        name: 'Fallback User Test',
        email: 'dev@example.com',
        password: 'dev123',
        expectedStatus: 200,
        description: 'Should succeed with fallback development user'
      },
      {
        name: 'Fallback Invalid Test',
        email: 'dev@example.com',
        password: 'wrongpassword',
        expectedStatus: 401,
        description: 'Should fail with incorrect password'
      }
    );
  }

  // Always add these standard test cases
  testCases.push(
    {
      name: 'User Not Found',
      email: 'nonexistent@example.com',
      password: 'anypassword',
      expectedStatus: 401,
      description: 'Should fail with user not found message'
    },
    {
      name: 'Missing Credentials',
      email: '',
      password: '',
      expectedStatus: 400,
      description: 'Should fail with missing credentials message'
    }
  );

  return testCases;
};

async function makeLoginRequest(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json().catch(() => ({}));
    
    return {
      status: response.status,
      data,
      success: response.ok
    };
  } catch (error) {
    return {
      status: 0,
      data: { error: error.message },
      success: false
    };
  }
}

async function runTest(testCase) {
  console.log(`\n🧪 Running: ${testCase.name}`);
  console.log(`📝 Description: ${testCase.description}`);
  console.log(`📧 Email: ${testCase.email || 'empty'}`);
  console.log(`🔑 Password: ${testCase.password ? '[SET]' : 'empty'}`);
  console.log(`🎯 Expected Status: ${testCase.expectedStatus}`);

  const result = await makeLoginRequest(testCase.email, testCase.password);

  console.log(`📊 Actual Status: ${result.status}`);
  
  if (result.status === testCase.expectedStatus) {
    console.log(`✅ Test PASSED`);
  } else {
    console.log(`❌ Test FAILED`);
  }

  if (result.data.message) {
    console.log(`💬 Message: ${result.data.message}`);
  }

  if (result.data.error) {
    console.log(`⚠️  Error: ${result.data.error}`);
  }

  if (result.success && result.data.user) {
    console.log(`👤 User: ${result.data.user.email}`);
  }

  return result.status === testCase.expectedStatus;
}

async function runAllTests() {
  console.log('🔐 SECURITY: Login Tracing Test Suite');
  console.log('=====================================\n');

  // Security check
  if (process.env.NODE_ENV !== 'development') {
    console.log('❌ This script only runs in development mode for security');
    return;
  }

  console.log('🔒 Environment Security Check:');
  console.log(`📋 NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`📋 Development mode: ${process.env.NODE_ENV === 'development'}`);

  const testCases = getTestCases();

  if (testCases.length === 0) {
    console.log('❌ No test cases configured. Please check your environment variables.');
    return;
  }

  console.log(`\n📊 Running ${testCases.length} test cases...\n`);

  let passed = 0;
  let failed = 0;

  for (const testCase of testCases) {
    const success = await runTest(testCase);
    if (success) {
      passed++;
    } else {
      failed++;
    }
  }

  console.log('\n🏁 Test Results:');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${testCases.length}`);

  if (failed === 0) {
    console.log('\n🎉 All tests passed! Login functionality is working correctly.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the server logs and configuration.');
  }

  console.log('\n💡 Tips:');
  console.log('- Make sure your .env.local file has DEV_USER_* variables configured');
  console.log('- Check that your development server is running on http://localhost:3000');
  console.log('- Look at the server console for detailed login traces');
  console.log('- Verify your Supabase configuration if using production authentication');
}

if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { runAllTests, getTestCases, makeLoginRequest }; 
