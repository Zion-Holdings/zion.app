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
  // process.stdout.write('🧪 Testing Root Path Routing Fixes\n');
  // process.stdout.write('Please make sure your dev server is running on http://localhost:3000\n');
  
  for (const url of TEST_URLS) {
    // process.stdout.write(`Testing: ${url}\n`);
    
    const result = await makeRequest(url);
    
    if (result.error) {
      // process.stdout.write(`  ❌ Error: ${result.error}\n`);
      continue;
    }
    
    const status = result.statusCode;
    const isSuccess = status >= 200 && status < 300;
    const isRedirect = status >= 300 && status < 400;
    
    if (isSuccess) {
      // process.stdout.write(`  ✅ Status: ${status}\n`);
      // process.stdout.write(`  📄 Title: ${result.title}\n`);
      // process.stdout.write(`  🗂️  Content: ${result.hasContent ? 'Present' : 'Missing'}\n`);
      // process.stdout.write(`  📦 Cache: ${result.cacheControl || 'Not set'}\n`);
      // process.stdout.write(`  🛣️  Handler: ${result.routeHandler || 'Not set'}\n`);
    } else if (isRedirect) {
      // process.stdout.write(`  🔄 Redirect: ${status} → ${result.headers.location}\n`);
    } else {
      // process.stdout.write(`  ❌ Failed: ${status}\n`);
    }
    
    // process.stdout.write('\n');
  }
  
  // process.stdout.write('🎯 Test Summary:\n');
  // process.stdout.write('If all tests show ✅ or 🔄 (redirects), the root path routing is working correctly!\n');
  // process.stdout.write('If you see ❌ with 404 errors, there may still be routing issues to investigate.\n');
  // process.stdout.write('\n💡 Tips:\n');
  // process.stdout.write('- Make sure to test after clearing browser cache\n');
  // process.stdout.write('- Try accessing / from different browsers/incognito\n');
  // process.stdout.write('- Monitor network tab for any failed requests\n');
}

if (require.main === module) {
  testRootPathRouting().catch(console.error);
}

module.exports = { testRootPathRouting }; 