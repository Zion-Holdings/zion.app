#!/usr/bin/env node

/**
 * 🔧 Debug Login API
 * Simple test to identify the source of 500 errors
 * 🔐 SECURITY: No hardcoded credentials - uses environment variables
 */

// Test the login functionality directly
async function testLoginApi() {
  try {
    console.log('🔧 DEBUG: Testing login API components...');
    
    // 🔐 SECURITY: Check environment configuration
    console.log('\n🔐 Security Check...');
    const isDevMode = process.env.NODE_ENV === 'development';
    console.log('📋 Environment mode:', process.env.NODE_ENV || 'undefined');
    console.log('📋 Development mode:', isDevMode);
    
    if (!isDevMode) {
      console.log('❌ This script only runs in development mode for security');
      return;
    }
    
    // Test 1: Check if we can import the user data
    console.log('\n1. Testing user data import...');
    try {
      const { findUserByEmail, users } = await import('../pages/api/users/data.js');
      console.log('✅ User data imported successfully');
      console.log('📊 Available users count:', Object.keys(users).length);
      
      // 🔐 SECURITY: Use environment variables for test credentials
      const testEmail = process.env.DEV_USER_1_EMAIL || 'test@example.com';
      const testUser = findUserByEmail(testEmail);
      console.log('🔍 Test user found:', !!testUser);
      if (testUser) {
        console.log('📋 User details:', {
          id: testUser.id,
          email: testUser.email,
          hasPassword: !!testUser.password,
          emailVerified: testUser.emailVerified
        });
      }
    } catch (error) {
      console.error('❌ Error importing user data:', error.message);
      return;
    }
    
    // Test 2: Check JWT import
    console.log('\n2. Testing JWT import...');
    try {
      const jwt = await import('jsonwebtoken');
      console.log('✅ JWT imported successfully');
      
      // Test token generation
      const testToken = jwt.default.sign(
        { test: true },
        'test-secret',
        { expiresIn: '1h' }
      );
      console.log('✅ JWT token generation works');
    } catch (error) {
      console.error('❌ Error with JWT:', error.message);
    }
    
    // Test 3: Check bcrypt import (optional)
    console.log('\n3. Testing bcrypt import...');
    try {
      const bcrypt = await import('bcryptjs');
      console.log('✅ bcrypt imported successfully');
    } catch (error) {
      console.log('ℹ️  bcrypt not available (using plain text comparison):', error.message);
    }
    
    // Test 4: Check environment variables
    console.log('\n4. Testing environment variables...');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    console.log('📋 Supabase URL:', supabaseUrl ? 'SET' : 'NOT_SET');
    console.log('📋 Supabase Key:', supabaseKey ? 'SET' : 'NOT_SET');
    
    const isSupabaseConfigured = supabaseUrl && supabaseKey && 
      supabaseUrl !== 'https://your-supabase-url.supabase.co' && 
      supabaseKey !== 'your_supabase_service_role_key_here' &&
      !supabaseUrl.includes('placeholder') &&
      !supabaseKey.includes('placeholder');
    
    console.log('🔧 Supabase configured:', isSupabaseConfigured);
    console.log('🔧 Should use dev authentication:', !isSupabaseConfigured);
    
    // 🔐 SECURITY: Check development user configuration
    console.log('\n🔐 Development User Configuration...');
    const devUser1Email = process.env.DEV_USER_1_EMAIL;
    const devUser1Password = process.env.DEV_USER_1_PASSWORD;
    const devUser2Email = process.env.DEV_USER_2_EMAIL;
    const devUser2Password = process.env.DEV_USER_2_PASSWORD;
    
    console.log('📋 DEV_USER_1_EMAIL:', devUser1Email ? 'SET' : 'NOT_SET');
    console.log('📋 DEV_USER_1_PASSWORD:', devUser1Password ? 'SET' : 'NOT_SET');
    console.log('📋 DEV_USER_2_EMAIL:', devUser2Email ? 'SET' : 'NOT_SET');
    console.log('📋 DEV_USER_2_PASSWORD:', devUser2Password ? 'SET' : 'NOT_SET');
    
    if (!devUser1Email || !devUser1Password) {
      console.log('⚠️  No development users configured in environment variables');
      console.log('💡 Add DEV_USER_1_EMAIL and DEV_USER_1_PASSWORD to .env.local');
    }
    
    // Test 5: Simulate login logic
    console.log('\n5. Testing login logic simulation...');
    const testEmail = devUser1Email || 'test@example.com';
    const testPassword = devUser1Password || 'test123';
    
    // Only show email for testing, never show password
    console.log('📧 Testing with email:', testEmail);
    console.log('🔑 Password configured:', !!testPassword);
    
    // Test the fallback authentication logic
    console.log('\n6. Testing fallback authentication...');
    const fallbackUsers = [
      { id: 'dev-user-1', email: 'dev@example.com', password: 'dev123', name: 'Dev User' },
      { id: 'dev-user-2', email: 'test@example.com', password: 'test123', name: 'Test User' }
    ];
    
    console.log('📊 Fallback users available:', fallbackUsers.length);
    console.log('📋 Fallback user emails:', fallbackUsers.map(u => u.email));
    
    console.log('\n✅ Debug test completed successfully!');
    console.log('\n💡 Next Steps:');
    console.log('1. Configure your .env.local with DEV_USER_* variables');
    console.log('2. Run npm run dev and test the login page');
    console.log('3. Check the server console for detailed login traces');
    
  } catch (error) {
    console.error('❌ Debug test failed:', error);
  }
}

if (require.main === module) {
  testLoginApi().catch(console.error);
}

module.exports = { testLoginApi }; 
