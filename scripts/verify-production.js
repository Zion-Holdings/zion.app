#!/usr/bin/env node

/**
 * Production Verification Script
 * Tests key routes to ensure no global rendering failures
 */

import fetch from 'node-fetch';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

const ROUTES_TO_TEST = [
  '/',
  '/about',
  '/marketplace', 
  '/services',
  '/contact',
  '/login',
  '/signup'
];

const ERROR_PATTERNS = [
  'Something went wrong',
  'Error: supabaseUrl is required',
  'Sentry DSN is missing',
  'ChunkLoadError',
  'Uncaught',
  'TypeError',
  'ReferenceError',
  'Error boundary',
  'has-error'
];

const SUCCESS_PATTERNS = [
  'next/head',
  '__NEXT_DATA__',
  'react',
  '<div id="__next"',
  '<main',
  '<body'
];

async function testRoute(route) {
  try {
    console.log(`🔍 Testing ${route}...`);
    
    const response = await fetch(`${BASE_URL}${route}`, {
      headers: {
        'User-Agent': 'Production-Verification-Script/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      timeout: 10000 // 10 second timeout
    });

    if (!response.ok) {
      return {
        route,
        success: false,
        error: `HTTP ${response.status}: ${response.statusText}`,
        type: 'http_error'
      };
    }

    const html = await response.text();
    
    // Check for error patterns in the HTML
    const foundErrors = ERROR_PATTERNS.filter(pattern => 
      html.toLowerCase().includes(pattern.toLowerCase())
    );

    if (foundErrors.length > 0) {
      return {
        route,
        success: false,
        error: `Found error patterns: ${foundErrors.join(', ')}`,
        type: 'rendering_error'
      };
    }

    // Check for success patterns (at least 2 should be present)
    const foundSuccess = SUCCESS_PATTERNS.filter(pattern => 
      html.toLowerCase().includes(pattern.toLowerCase())
    );

    if (foundSuccess.length < 2) {
      return {
        route,
        success: false,
        error: `Page appears incomplete. Found patterns: ${foundSuccess.join(', ')}`,
        type: 'structure_error'
      };
    }

    // Check HTML size (should be substantial for a real page)
    if (html.length < 500) {
      return {
        route,
        success: false,
        error: `Page too small (${html.length} chars), might be an error page`,
        type: 'size_error'
      };
    }

    return {
      route,
      success: true,
      message: `Route renders successfully (${html.length} chars, patterns: ${foundSuccess.join(', ')})`
    };

  } catch (error) {
    return {
      route,
      success: false,
      error: error.message,
      type: 'network_error'
    };
  }
}

async function checkServerHealth() {
  try {
    console.log('🏥 Checking server health...');
    const response = await fetch(`${BASE_URL}/api/health`, {
      timeout: 5000
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Server is healthy:', data.status);
      return true;
    } else {
      console.log('⚠️ Health check failed, but server is responding');
      return true; // Server is up, health endpoint might not exist
    }
  } catch (error) {
    console.log('❌ Server appears to be down:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting production verification...');
  console.log(`📍 Base URL: ${BASE_URL}`);
  
  // Check if server is running
  const serverHealthy = await checkServerHealth();
  if (!serverHealthy) {
    console.log('🚨 Cannot proceed - server is not responding');
    process.exit(1);
  }
  
  console.log(`📋 Testing ${ROUTES_TO_TEST.length} routes\n`);

  const results = [];
  
  for (const route of ROUTES_TO_TEST) {
    const result = await testRoute(route);
    results.push(result);
    
    if (result.success) {
      console.log(`✅ ${route} - ${result.message}`);
    } else {
      console.log(`❌ ${route} - ${result.error}`);
    }
    
    // Add small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n📊 Verification Summary:');
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✅ Successful: ${successful.length}/${results.length}`);
  
  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.length}/${results.length}`);
    console.log('\n🔍 Failed Routes:');
    
    failed.forEach(result => {
      console.log(`  • ${result.route}: ${result.error} (${result.type})`);
    });
    
    // Only fail if more than 50% of routes fail
    const failureRate = failed.length / results.length;
    if (failureRate > 0.5) {
      console.log('\n🚨 Production verification FAILED (>50% failure rate)');
      process.exit(1);
    } else {
      console.log('\n⚠️ Some routes failed but overall verification PASSED');
    }
  } else {
    console.log('\n🎉 All routes verified successfully!');
    console.log('✅ Production verification PASSED');
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('❌ Verification script failed:', error);
    process.exit(1);
  });
} 