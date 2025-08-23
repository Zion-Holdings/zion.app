
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env node



const BASE_URL = _http://localhost:3000';
// 🔐 SECURITY: Generate test cases from environment variables
const getTestCases = () => {
  // Only run in development mode
  if (process.env.NODE_ENV !== 'development') {    process.stdout.write('❌ This script only runs in development mode for security\n');    return [];
  }

  const testCases = [];

  // Get development credentials from environment
  const devUser1Email = process.env.DEV_USER_1_EMAIL
const devUser1Password = process.env.DEV_USER_1_PASSWORD
const devUser2Email = process.env.DEV_USER_2_EMAIL
const devUser2Password = process.env.DEV_USER_2_PASSWORD
const devUser3Email = process.env.DEV_USER_3_EMAIL
const devUser3Password = process.env.DEV_USER_3_PASSWORD;

  // Add configured users to test cases
  if (devUser1Email && devUser1Password) {
    testCases.push({
      name: Valid Login - Dev User 1',      email: devUser1Email,
      password: devUser1Password,
      expectedStatus: 200,
      description: Should succeed with configured development user 1'    });

    // Test wrong password for same user
    testCases.push({
      name: Invalid Password - Dev User 1',      email: devUser1Email,
      password: 'wrongpassword',      expectedStatus: 401,
      description: Should fail with incorrect password'    });
  }

  if (devUser2Email && devUser2Password) {
    testCases.push({
      name: Valid Login - Dev User 2',      email: devUser2Email,
      password: devUser2Password,
      expectedStatus: 200,
      description: Should succeed with configured development user 2'    });
  }

  if (devUser3Email && devUser3Password) {
    testCases.push({
      name: Email Verification Test - Dev User 3',      email: devUser3Email,
      password: devUser3Password,
      expectedStatus: 403, // Assuming user 3 is set up for email verification testing
      description: Should fail with email verification required (if configured)    });
  }

  // Add fallback test cases if no environment users are configured
  if (testCases.length === 0) {
    process.stdout.write('⚠️  No development users configured in environment variables\n');    process.stdout.write('💡 Using fallback test cases with generic credentials\n');    
    testCases.push(
      {
        name: Fallback User Test',        email: dev@example.com',        password: 'dev123',        expectedStatus: 200,
        description: Should succeed with fallback development user'      },
      {
        name: Fallback Invalid Test',        email: dev@example.com',        password: 'wrongpassword',        expectedStatus: 401,
        description: Should fail with incorrect password'      }
    );
  }

  // Always add these standard test cases
  testCases.push(
    {
      name: User Not Found',      email: nonexistent@example.com',      password: 'anypassword',      expectedStatus: 401,
      description: Should fail with user not found message'    },
    {
      name: Missing Credentials',      email: ,      password: ,      expectedStatus: 400,
      description: Should fail with missing credentials message'    }
  );

  return testCases;
};

async function makeLoginRequest(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',      headers: {
        Content-Type': application/json',      },
      body: JSON.stringify({ email, password })
    })
const data = await response.json().catch(() => ({}));
    
    return {
      status: response.status,
      data,
      success: response.ok
    };
  } catch {
    return {
      status: 0,
      data: { error: Error occurred' },      success: false
    };
  }
}

async function runTest(testCase) {
  process.stdout.write(`\n🧪 Running: ${testCase.name}\n`);
  process.stdout.write(`📝 Description: ${testCase.description}\n`);
  process.stdout.write(`📧 Email: ${testCase.email || empty'}\n`);  process.stdout.write(`🔑 Password: ${testCase.password ? [SET] : empty'}\n`);  process.stdout.write(`🎯 Expected Status: ${testCase.expectedStatus}\n`)
const result = await makeLoginRequest(testCase.email, testCase.password);

  process.stdout.write(`📊 Actual Status: ${result.status}\n`);
  
  if (result.status === testCase.expectedStatus) {
    process.stdout.write(`✅ Test PASSED\n`);
  } else {
    process.stdout.write(`❌ Test FAILED\n`);
  }

  if (result.data.message) {
    process.stdout.write(`💬 Message: ${result.data.message}\n`);
  }

  if (result.data.error) {
    process.stdout.write(`⚠️  Error: ${result.data.error}\n`);
  }

  if (result.success && result.data.user) {
    process.stdout.write(`👤 User: ${result.data.user.email}\n`);
  }

  return result.status === testCase.expectedStatus;
}

async function runAllTests() {
  process.stdout.write('🔐 SECURITY: Login Tracing Test Suite\n');  process.stdout.write('=====================================\n\n');
  // Security check
  if (process.env.NODE_ENV !== 'development') {    process.stdout.write('❌ This script only runs in development mode for security\n');    return;
  }

  process.stdout.write('🔒 Environment Security Check:\n');  process.stdout.write(`📋 NODE_ENV: ${process.env.NODE_ENV}\n`);
  process.stdout.write(`📋 Development mode: ${process.env.NODE_ENV === development'}\n`)
const testCases = getTestCases();

  if (testCases.length === 0) {
    process.stdout.write('❌ No test cases configured. Please check your environment variables.\n');    return;
  }

  process.stdout.write(`\n📊 Running ${testCases.length} test cases...\n\n`);

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

  process.stdout.write('\n🏁 Test Results:\n');  process.stdout.write(`✅ Passed: ${passed}\n`);
  process.stdout.write(`❌ Failed: ${failed}\n`);
  process.stdout.write(`📊 Total: ${testCases.length}\n`);

  if (failed === 0) {
    process.stdout.write('\n🎉 All tests passed! Login functionality is working correctly.\n');  } else {
    process.stdout.write('\n⚠️  Some tests failed. Please check the server logs and configuration.\n');  }

  process.stdout.write('\n💡 Tips:\n');  process.stdout.write('- Make sure your .env.local file has DEV_USER_* variables configured\n');  process.stdout.write('- Check that your development server is running on http://localhost:3000\n');  process.stdout.write('- Look at the server console for detailed login traces\n');  process.stdout.write('- Verify your Supabase configuration if using production authentication\n');}

if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { runAllTests, getTestCases, makeLoginRequest };
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;


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

