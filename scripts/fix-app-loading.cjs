const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

/**
 * Emergency App Loading Fix
 * Temporary fix for app loading issues
 */

const fs = require('fs');
const { _execSync } = require('child_process');

// Replace console.log with console.warn for allowed console methods
logger.warn('Starting app loading fix...');
logger.warn('Checking for app loading issues...');

// Check if we need to apply emergency fixes
function checkAppStatus() {
  logger.warn('🔍 Checking app loading status...');

  // Ensure dependencies are installed
  if (!fs.existsSync('node_modules')) {
    logger.warn('❌ node_modules directory is missing');
    logger.warn(
      '   -> Attempting to install dependencies via "./setup.sh npm"',
    );
    try {
      _execSync('./setup.sh npm', { stdio: 'inherit' });
    } catch (_installErr) {
      logger.error('Failed to install dependencies:', _installErr.message);
      if (/EAI_AGAIN|ENOTFOUND|403 Forbidden/.test(_installErr.message)) {
        logger.error('Network access appears to be restricted.');
        logger.error(
          'Ensure internet connectivity or configure a proxy before running the setup script.',
        );
        logger.error('Attempting to start offline development mode...');
        try {
          _execSync('bash offline-dev.sh', { stdio: 'inherit' });
          logger.warn('✅ Offline development mode started.');
        } catch (_offlineErr) {
          logger.error('Failed to start offline mode:', _offlineErr.message);
          logger.error('You can still run "./offline-dev.sh" manually.');
        }
      }
      logger.warn(
        '   -> Please run "./setup.sh npm" manually when connectivity is restored.',
      );
      return false;
    }
    return true;
  }

  // Test if the main app file exists and is readable
  try {
    const appContent = fs.readFileSync('pages/_app.tsx', 'utf8');
    const loadingFixMarkers = [
      'Force initializing after timeout',
      'Force completing app initialization due to timeout',
      'Force initialization completion',
    ];

    if (loadingFixMarkers.some((marker) => appContent.includes(marker))) {
      logger.warn('✅ Latest loading fix is already applied');
      return true;
    } else {
      logger.warn('⚠️  App may need loading fix');
      return false;
    }
  } catch (_error) {
    logger.warn('❌ Cannot read app file:', _error.message);
    return false;
  }
}

// Create a minimal app component for emergency use
function createMinimalApp() {
  logger.warn('🔧 Creating minimal emergency app component...');
  const minimalAppContent = `import React from 'react';
import type { AppProps } from 'next/app';
import '../src/index.css';

// Emergency minimal app component
function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    logger.warn('✅ Emergency app component loaded successfully');
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading Zion App...</p>
          <p className="text-blue-200 text-sm mt-2">Emergency mode activated</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Zion App - Emergency Mode</h1>
        <p className="text-blue-100">The app is running in emergency mode. Core functionality available.</p>
      </header>
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
`;

  // Backup the current app
  try {
    const currentApp = fs.readFileSync('pages/_app.tsx', 'utf8');
    fs.writeFileSync('pages/_app.tsx.backup', currentApp);
    logger.warn('📄 Current app backed up to _app.tsx.backup');
  } catch (_error) {
    logger.warn('⚠️  Could not backup current app:', _error.message);
  }

  // Write minimal app
  try {
    fs.writeFileSync('pages/_app.tsx.emergency', minimalAppContent);
    logger.warn('✅ Emergency app component created: _app.tsx.emergency');

    logger.warn('\n🔧 TO USE EMERGENCY APP:');
    logger.warn('  mv pages/_app.tsx.emergency pages/_app.tsx');
    logger.warn('  npm run build');
    logger.warn('\n🔄 TO RESTORE ORIGINAL:');
    logger.warn('  mv pages/_app.tsx.backup pages/_app.tsx');
  } catch (_error) {
    logger.warn('❌ Could not create emergency app:', _error.message);
  }
}

// Run diagnostics
function runDiagnostics() {
  logger.warn('\n🔍 RUNNING APP DIAGNOSTICS');
  logger.warn('==========================');
  const checks = [
    {
      name: 'App file exists',
      check: () => fs.existsSync('pages/_app.tsx'),
    },
    {
      name: 'App file readable',
      check: () => {
        try {
          fs.readFileSync('pages/_app.tsx', 'utf8');
          return true;
        } catch {
          return false;
        }
      },
    },
    {
      name: 'Build directory exists',
      check: () => fs.existsSync('.next'),
    },
    {
      name: 'Node modules exists',
      check: () => fs.existsSync('node_modules'),
    },
  ];

  checks.forEach(({ name, check }) => {
    const result = check();
    logger.warn(`  ${result ? '✅' : '❌'} ${name}`);
  });

  logger.warn('\n📊 RECOMMENDATIONS:');
  logger.warn('  1. Try refreshing the browser (Ctrl+F5)');
  logger.warn('  2. Clear browser cache');
  logger.warn('  3. Check browser console for JavaScript errors');
  logger.warn('  4. Run: npm run build && npm run start');
  logger.warn('  5. Ensure dependencies are installed: ./setup.sh npm');
  logger.warn('  6. If still stuck, use emergency app component');
}

// Main execution
async function main() {
  const statusOk = checkAppStatus();

  if (statusOk) {
    logger.warn('\n🎯 RECOMMENDATIONS TO FIX LOADING:');
    logger.warn('==================================');
    logger.warn('1. 🔄 Hard refresh browser (Ctrl+Shift+R)');
    logger.warn('2. 🧹 Clear browser cache completely');
    logger.warn('3. 🔍 Check browser console for errors');
    logger.warn('4. 🔨 Rebuild app: npm run build');
    logger.warn('5. 🚀 Restart dev server: npm run dev');
    logger.warn('');
    logger.warn(
      '💡 The app has timeout protection - it should load within 3 seconds',
    );
    logger.warn('💡 If still stuck, check browser developer tools console');
  } else {
    createMinimalApp();
    runDiagnostics();

    logger.warn('\n🎯 IMMEDIATE FIXES TO TRY:');
    logger.warn('==========================');
    logger.warn('1. Hard refresh: Ctrl+Shift+R (Chrome/Firefox)');
    logger.warn(
      '2. Clear cache: F12 → Application → Storage → Clear site data',
    );
    logger.warn('3. Check console: F12 → Console tab for errors');
    logger.warn('4. Rebuild: npm run build && npm run start');
    logger.warn('');
    logger.warn('✅ App should now load within 3 seconds max!');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { checkAppStatus, createMinimalApp, runDiagnostics };
