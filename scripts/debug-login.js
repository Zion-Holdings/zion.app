
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



// Test the login functionality directly
async function testLoginApi() {
  try {
    logger.warn('🔧 DEBUG: Testing login API components...');    
    // 🔐 SECURITY: Check environment configuration
    logger.warn('\n🔐 Security Check...')
const isDevMode = process.env.NODE_ENV === development';    logger.warn('📋 Environment mode:', process.env.NODE_ENV || undefined');    logger.warn('📋 Development mode:', isDevMode);    
    if (!isDevMode) {
      logger.warn('❌ This script only runs in development mode for security');      return;
    }
    
    // Test 1: Check if we can import the user data;    logger.warn('\n1. Testing user data import...');    try {
      const { findUserByEmail, users } = await import('../pages/api/users/data.js');      logger.warn('✅ User data imported successfully');      logger.warn('📊 Available users count:', Object.keys(users).length);      
      // 🔐 SECURITY: Use environment variables for test credentials
      const testEmail = process.env.DEV_USER_1_EMAIL || test@example.com';      const testUser = findUserByEmail(testEmail);
      logger.warn('🔍 Test user found:', !!testUser);      if (testUser) {
        logger.warn('📋 User details:', {'          id: testUser.id,
          email: testUser.email,
          hasPassword: !!testUser.password,
          emailVerified: testUser.emailVerified
        });
      }
    } catch {
      console.('❌ Error importing user data:', .message);      return;
    }
    
    // Test 2: Check JWT import
    logger.warn('\n2. Testing JWT import...');    try {
      const jwt = await import('jsonwebtoken');      logger.warn('✅ JWT imported successfully');      
      // Test token generation
      const testToken = jwt.default.sign(
        { test: true },
        test-secret',        { expiresIn: 1h' }      );
      logger.warn('✅ JWT token generation works');    } catch {
      console.('❌ Error with JWT:', .message);    }
    
    // Test 3: Check bcrypt import (optional);    logger.warn('\n3. Testing bcrypt import...');    try {
      const bcrypt = await import('bcryptjs');      logger.warn('✅ bcrypt imported successfully');    } catch {
      // logger.warn('ℹ️  bcrypt not available (using plain text comparison):', Error occurred');    }
    
    // Test 4: Check environment variables
    logger.warn('\n4. Testing environment variables...')
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    logger.warn('📋 Supabase URL:', supabaseUrl ? SET' : NOT_SET');    logger.warn('📋 Supabase Key:', supabaseKey ? SET' : NOT_SET')
const isSupabaseConfigured = supabaseUrl && supabaseKey && 
      supabaseUrl !== https://your-supabase-url.supabase.co' &&       supabaseKey !== your_supabase_service_role_key_here' &&'      !supabaseUrl.includes('placeholder') &&'      !supabaseKey.includes('placeholder');    
    logger.warn('🔧 Supabase configured:', isSupabaseConfigured);    logger.warn('🔧 Should use dev authentication:', !isSupabaseConfigured);    
    // 🔐 SECURITY: Check development user configuration
    logger.warn('\n🔐 Development User Configuration...')
const devUser1Email = process.env.DEV_USER_1_EMAIL
const devUser1Password = process.env.DEV_USER_1_PASSWORD
const devUser2Email = process.env.DEV_USER_2_EMAIL
const devUser2Password = process.env.DEV_USER_2_PASSWORD;
    
    logger.warn('📋 DEV_USER_1_EMAIL:', devUser1Email ? SET' : NOT_SET');    logger.warn('📋 DEV_USER_1_PASSWORD:', devUser1Password ? SET' : NOT_SET');    logger.warn('📋 DEV_USER_2_EMAIL:', devUser2Email ? SET' : NOT_SET');    logger.warn('📋 DEV_USER_2_PASSWORD:', devUser2Password ? SET' : NOT_SET');    
    if (!devUser1Email || !devUser1Password) {
      logger.warn('⚠️  No development users configured in environment variables');      logger.warn('💡 Add DEV_USER_1_EMAIL and DEV_USER_1_PASSWORD to .env.local');    }
    
    // Test 5: Simulate login logic
    logger.warn('\n5. Testing login logic simulation...')
const testEmail = devUser1Email || test@example.com';    const testPassword = devUser1Password || test123';    
    // Only show email for testing, never show password
    logger.warn('📧 Testing with email:', testEmail);    logger.warn('🔑 Password configured:', !!testPassword);    
    // Test the fallback authentication logic
    logger.warn('\n6. Testing fallback authentication...')
const fallbackUsers = [
      { id: 'dev-user-1', email: dev@example.com', password: 'dev123', name: Dev User' },      { id: 'dev-user-2', email: test@example.com', password: 'test123', name: Test User' }    ];
    
    logger.warn('📊 Fallback users available:', fallbackUsers.length);    logger.warn('📋 Fallback user emails:', fallbackUsers.map(u => u.email));    
    logger.warn('\n✅ Debug test completed successfully!');    logger.warn('\n💡 Next Steps:');    logger.warn('1. Configure your .env.local with DEV_USER_* variables');    logger.warn('2. Run npm run dev and test the login page');    logger.warn('3. Check the server console for detailed login traces');    
  } catch {
    console.('❌ Debug test failed:', );  }
}

if (require.main === module) {
  testLoginApi().catch(console.error);
}

module.exports = { testLoginApi };
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

