#!/usr/bin/env node

/**
 * Search Functionality Test Script
 * Tests the search API and basic functionality after bug fixes
 */

const { spawn } = require('child_process');

console.log('🔍 Testing Search Functionality After Bug Fixes\n');

// Test the search API endpoint
async function testSearchAPI() {
  console.log('1. Testing Search API...');
  
  try {
    const response = await fetch('http://localhost:3000/api/search?query=AI');
    const data = await response.json();
    
    if (response.ok && data.results) {
      console.log('   ✅ Search API responds correctly');
      console.log(`   📊 Found ${data.results.length} results for "AI"`);
    } else {
      console.log('   ❌ Search API error:', data.error || 'Unknown error');
    }
  } catch (error) {
    console.log('   ❌ Search API failed:', error.message);
    console.log('   💡 Make sure the development server is running: npm run dev');
  }
}

// Test search suggestions API
async function testSuggestionsAPI() {
  console.log('\n2. Testing Search Suggestions API...');
  
  try {
    const response = await fetch('http://localhost:3000/api/search/suggest?q=GPU');
    const data = await response.json();
    
    if (response.ok && Array.isArray(data)) {
      console.log('   ✅ Suggestions API responds correctly');
      console.log(`   💡 Found ${data.length} suggestions for "GPU"`);
    } else {
      console.log('   ❌ Suggestions API error');
    }
  } catch (error) {
    console.log('   ❌ Suggestions API failed:', error.message);
  }
}

// Test instructions for manual verification
function showManualTestInstructions() {
  console.log('\n3. Manual Testing Instructions:');
  console.log('   🌐 Open http://localhost:3000 in your browser');
  console.log('   🔍 Find the search bar and test these scenarios:');
  console.log('');
  console.log('   📝 Test 1: Initial Input');
  console.log('      • Click on the search bar');
  console.log('      • Type "AI" immediately');
  console.log('      • ✅ EXPECTED: All keystrokes should be captured');
  console.log('');
  console.log('   🖱️  Test 2: Suggestion Clicks');
  console.log('      • Type "GPU" in search bar');
  console.log('      • Wait for suggestions to appear');
  console.log('      • Click on any suggestion');
  console.log('      • ✅ EXPECTED: Navigation to search results page');
  console.log('');
  console.log('   ⌨️  Test 3: Enter Key Search');
  console.log('      • Type "machine learning" in search bar');
  console.log('      • Press Enter key');
  console.log('      • ✅ EXPECTED: Search results appear immediately');
  console.log('      • ❌ SHOULD NOT: Show "No results found" initially');
  console.log('');
  console.log('   🔄 Test 4: State Consistency');
  console.log('      • Perform a search');
  console.log('      • Use browser back/forward buttons');
  console.log('      • ✅ EXPECTED: Search state stays consistent');
}

// Check if development server is running
function checkDevServer() {
  console.log('\n🚀 Checking Development Server...');
  
  return new Promise((resolve) => {
    const testServer = spawn('curl', ['-s', 'http://localhost:3000'], {
      stdio: 'pipe'
    });
    
    testServer.on('close', (code) => {
      if (code === 0) {
        console.log('   ✅ Development server is running');
        resolve(true);
      } else {
        console.log('   ❌ Development server not responding');
        console.log('   💡 Start it with: npm run dev');
        resolve(false);
      }
    });
    
    testServer.on('error', () => {
      console.log('   ❌ Cannot connect to development server');
      console.log('   💡 Start it with: npm run dev');
      resolve(false);
    });
  });
}

// Main test function
async function runTests() {
  const serverRunning = await checkDevServer();
  
  if (serverRunning) {
    await testSearchAPI();
    await testSuggestionsAPI();
  }
  
  showManualTestInstructions();
  
  console.log('\n🎯 Bug Fixes Applied:');
  console.log('   ✅ Fixed suggestion click handling (onClick instead of onMouseDown)');
  console.log('   ✅ Improved input focus management');
  console.log('   ✅ Fixed state synchronization in SearchPage');
  console.log('   ✅ Enhanced debounce hook for initial values');
  console.log('   ✅ Added proper blur/focus event handling');
  
  console.log('\n📋 Summary of Changes:');
  console.log('   📁 Modified: src/components/search/AutocompleteSuggestions.tsx');
  console.log('   📁 Modified: src/components/SearchBar.tsx');
  console.log('   📁 Modified: src/components/search/EnhancedSearchInput.tsx');
  console.log('   📁 Modified: src/pages/SearchPage.tsx');
  console.log('   📁 Modified: src/hooks/useDebounce.ts');
}

// Run the tests
runTests().catch(console.error); 