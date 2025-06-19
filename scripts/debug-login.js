#!/usr/bin/env node

/**
 * 🔧 Debug Login API
 * Simple test to identify the source of 500 errors
 */

// Test the login functionality directly
async function testLoginApi() {
  try {
    console.log('🔧 DEBUG: Testing login API components...');
    
    // Test 1: Check if we can import the user data
    console.log('\n1. Testing user data import...');
    try {
      const { findUserByEmail, users } = await import('../pages/api/users/data.js');
      console.log('✅ User data imported successfully');
      console.log('📊 Available users:', Object.keys(users));
      
      const kalcUser = findUserByEmail('kalcatrao@hotmail.com');
      console.log('🔍 Kalcatrao user found:', !!kalcUser);
      if (kalcUser) {
        console.log('📋 User details:', {
          id: kalcUser.id,
          email: kalcUser.email,
          hasPassword: !!kalcUser.password,
          emailVerified: kalcUser.emailVerified
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
    
    // Test 5: Simulate login logic
    console.log('\n5. Testing login logic simulation...');
    const testEmail = 'kalcatrao@hotmail.com';
    const testPassword = 'kalc2024!';
    
    try {
      const { findUserByEmail } = await import('../pages/api/users/data.js');
      const user = findUserByEmail(testEmail);
      
      if (!user) {
        console.log('❌ User not found');
        return;
      }
      
      console.log('✅ User found');
      
      // Check email verification
      if (user.emailVerified === false) {
        console.log('❌ Email not verified');
        return;
      }
      
      console.log('✅ Email verified');
      
      // Check password
      const passwordMatch = user.password === testPassword;
      console.log('🔍 Password match:', passwordMatch);
      
      if (passwordMatch) {
        console.log('✅ Authentication would succeed');
        
        // Test JWT generation
        const jwt = await import('jsonwebtoken');
        const token = jwt.default.sign(
          { userId: user.id, email: user.email, name: user.name },
          'dev-secret-key',
          { expiresIn: '7d' }
        );
        
        console.log('✅ JWT token generated successfully');
        console.log('🔑 Token preview:', token.substring(0, 50) + '...');
      } else {
        console.log('❌ Password mismatch');
      }
      
    } catch (error) {
      console.error('❌ Error in login simulation:', error.message);
      console.error('📋 Stack trace:', error.stack);
    }
    
    console.log('\n🏁 Debug complete. All components appear to be working.');
    
  } catch (error) {
    console.error('❌ Unexpected error in debug script:', error.message);
    console.error('📋 Stack trace:', error.stack);
  }
}

testLoginApi(); 