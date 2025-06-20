#!/usr/bin/env node

/**
 * Test script to verify root path routing is working correctly
 * This can be run to test for the 404 issues that were fixed
 */

const http = require('http');
const https = require('https');

const TEST_URLS = [
  'http://localhost:3000/',
  'http://localhost:3000/home',  // Should redirect to /
  'http://localhost:3000', // Without trailing slash
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          statusCode: res.statusCode,
          headers: res.headers,
          hasContent: data.length > 0,
          isHtml: res.headers['content-type']?.includes('text/html'),
          title: data.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] || 'No title',
          cacheControl: res.headers['cache-control'],
          routeHandler: res.headers['x-route-handler']
        });
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        error: err.message,
        statusCode: 0
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        url,
        error: 'Request timeout',
        statusCode: 0
      });
    });
  });
}

async function testRootPathRouting() {
  console.log('🧪 Testing Root Path Routing Fixes\n');
  console.log('Please make sure your dev server is running on http://localhost:3000\n');
  
  for (const url of TEST_URLS) {
    console.log(`Testing: ${url}`);
    
    const result = await makeRequest(url);
    
    if (result.error) {
      console.log(`  ❌ Error: ${result.error}\n`);
      continue;
    }
    
    const status = result.statusCode;
    const isSuccess = status >= 200 && status < 300;
    const isRedirect = status >= 300 && status < 400;
    
    if (isSuccess) {
      console.log(`  ✅ Status: ${status}`);
      console.log(`  📄 Title: ${result.title}`);
      console.log(`  🗂️  Content: ${result.hasContent ? 'Present' : 'Missing'}`);
      console.log(`  📦 Cache: ${result.cacheControl || 'Not set'}`);
      console.log(`  🛣️  Handler: ${result.routeHandler || 'Not set'}`);
    } else if (isRedirect) {
      console.log(`  🔄 Redirect: ${status} → ${result.headers.location}`);
    } else {
      console.log(`  ❌ Failed: ${status}`);
    }
    
    console.log('');
  }
  
  console.log('🎯 Test Summary:');
  console.log('If all tests show ✅ or 🔄 (redirects), the root path routing is working correctly!');
  console.log('If you see ❌ with 404 errors, there may still be routing issues to investigate.');
  console.log('\n💡 Tips:');
  console.log('- Make sure to test after clearing browser cache');
  console.log('- Try accessing / from different browsers/incognito');
  console.log('- Monitor network tab for any failed requests');
}

if (require.main === module) {
  testRootPathRouting().catch(console.error);
}

module.exports = { testRootPathRouting }; 