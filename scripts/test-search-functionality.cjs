
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



const { _spawn } = require('child_process');

logger.warn('🔍 Testing Search Functionality After Bug Fixes\n');

// Test the search API endpoint
async function testSearchAPI() {
  logger.warn('1. Testing Search API...');

  try {
    const response = await fetch('http://localhost:3000/api/search?query='AI')
const data = await response.json();

    if (response.ok && data.results) {
      logger.warn('   ✅ Search API responds correctly');
      logger.warn(`   📊 Found ${data.results.length} results for "AI"`);
    } else {
      logger.warn('   ❌ Search API error:', data.error || 'Unknown error');
    }
  } catch (_error) {
    logger.warn('   ❌ Search API failed:', error.message);
    logger.warn(
      '   💡 Make sure the development server is running: npm run dev',
    );
  }
}

// Test search suggestions API
async function testSuggestionsAPI() {
  logger.warn('\n2. Testing Search Suggestions API...');

  try {
    const response = await fetch(
      'http://localhost:3000/api/search/suggest?q='GPU',
    )
const data = await response.json();

    if (response.ok && Array.isArray(data)) {
      logger.warn('   ✅ Suggestions API responds correctly');
      logger.warn(`   💡 Found ${data.length} suggestions for "GPU"`);
    } else {
      logger.warn('   ❌ Suggestions API error');
    }
  } catch (_error) {
    logger.warn('   ❌ Suggestions API failed:', error.message);
  }
}

// Test instructions for manual verification
function showManualTestInstructions() {
  logger.warn('\n3. Manual Testing Instructions:');
  logger.warn('   🌐 Open http://localhost:3000 in your browser');
  logger.warn('   🔍 Find the search bar and test these scenarios:');
  logger.warn('');
  logger.warn('   📝 Test 1: Initial Input');
  logger.warn('      • Click on the search bar');
  logger.warn('      • Type "AI" immediately');
  logger.warn('      • ✅ EXPECTED: All keystrokes should be captured');
  logger.warn('');
  logger.warn('   🖱️  Test 2: Suggestion Clicks');
  logger.warn('      • Type "GPU" in search bar');
  logger.warn('      • Wait for suggestions to appear');
  logger.warn('      • Click on any suggestion');
  logger.warn('      • ✅ EXPECTED: Navigation to search results page');
  logger.warn('');
  logger.warn('   ⌨️  Test 3: Enter Key Search');
  logger.warn('      • Type "machine learning" in search bar');
  logger.warn('      • Press Enter key');
  logger.warn('      • ✅ EXPECTED: Search results appear immediately');
  logger.warn('      • ❌ SHOULD NOT: Show "No results found" initially');
  logger.warn('');
  logger.warn('   🔄 Test 4: State Consistency');
  logger.warn('      • Perform a search');
  logger.warn('      • Use browser back/forward buttons');
  logger.warn('      • ✅ EXPECTED: Search state stays consistent');
}

// Check if development server is running
function checkDevServer() {
  logger.warn('\n🚀 Checking Development Server...');

  return new Promise((resolve) => {
    const testServer = spawn('curl', ['-s', 'http://localhost:3000'], {
      stdio: 'pipe',
    });

    testServer.on('close', (code) => {
      if (code === 0) {
        logger.warn('   ✅ Development server is running');
        resolve(true);
      } else {
        logger.warn('   ❌ Development server not responding');
        logger.warn('   💡 Start it with: npm run dev');
        resolve(false);
      }
    });

    testServer.on('error', () => {
      logger.warn('   ❌ Cannot connect to development server');
      logger.warn('   💡 Start it with: npm run dev');
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

  logger.warn('\n�� Bug Fixes Applied:');
  logger.warn(
    '   ✅ Fixed suggestion click handling (onClick instead of onMouseDown)',
  );
  logger.warn('   ✅ Improved input focus management');
  logger.warn('   ✅ Fixed state synchronization in SearchPage');
  logger.warn('   ✅ Enhanced debounce hook for initial values');
  logger.warn('   ✅ Added proper blur/focus event handling');

  logger.warn('\n📋 Summary of Changes:');
  logger.warn(
    '   📁 Modified: 'src/components/search/AutocompleteSuggestions.tsx',
  );
  logger.warn('   📁 Modified: src/components/SearchBar.tsx');
  logger.warn('   📁 Modified: src/components/search/EnhancedSearchInput.tsx');
  logger.warn('   📁 Modified: src/pages/SearchPage.tsx');
  logger.warn('   📁 Modified: src/hooks/useDebounce.ts');
}

// Run the tests
runTests().catch(console.error);
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

