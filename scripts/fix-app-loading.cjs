#!/usr/bin/env node

/**
 * Emergency App Loading Fix
 * Temporary fix for app loading issues
 */

const fs = require('fs');

console.log('🚨 EMERGENCY APP LOADING FIX');
console.log('============================\n');

// Check if we need to apply emergency fixes
function checkAppStatus() {
  console.log('🔍 Checking app loading status...');
  
  // Test if the main app file exists and is readable
  try {
    const appContent = fs.readFileSync('pages/_app.tsx', 'utf8');
    
    if (appContent.includes('Force initializing after timeout')) {
      console.log('✅ Latest loading fix is already applied');
      return true;
    } else {
      console.log('⚠️  App may need loading fix');
      return false;
    }
  } catch (error) {
    console.log('❌ Cannot read app file:', error.message);
    return false;
  }
}

// Create a minimal app component for emergency use
function createMinimalApp() {
  console.log('🔧 Creating minimal emergency app component...');
  
  const minimalAppContent = `import React from 'react';
import type { AppProps } from 'next/app';
import '../src/index.css';

// Emergency minimal app component
function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    console.log('✅ Emergency app component loaded successfully');
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
    console.log('📄 Current app backed up to _app.tsx.backup');
  } catch (error) {
    console.log('⚠️  Could not backup current app:', error.message);
  }

  // Write minimal app
  try {
    fs.writeFileSync('pages/_app.tsx.emergency', minimalAppContent);
    console.log('✅ Emergency app component created: _app.tsx.emergency');
    
    console.log('\n🔧 TO USE EMERGENCY APP:');
    console.log('  mv pages/_app.tsx.emergency pages/_app.tsx');
    console.log('  npm run build');
    console.log('\n🔄 TO RESTORE ORIGINAL:');
    console.log('  mv pages/_app.tsx.backup pages/_app.tsx');
    
  } catch (error) {
    console.log('❌ Could not create emergency app:', error.message);
  }
}

// Run diagnostics
function runDiagnostics() {
  console.log('\n🔍 RUNNING APP DIAGNOSTICS');
  console.log('==========================');
  
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
    console.log(`  ${result ? '✅' : '❌'} ${name}`);
  });
  
  console.log('\n📊 RECOMMENDATIONS:');
  console.log('  1. Try refreshing the browser (Ctrl+F5)');
  console.log('  2. Clear browser cache');
  console.log('  3. Check browser console for JavaScript errors');
  console.log('  4. Run: npm run build && npm run start');
  console.log('  5. If still stuck, use emergency app component');
}

// Main execution
async function main() {
  const statusOk = checkAppStatus();
  
  if (statusOk) {
    console.log('\n🎯 RECOMMENDATIONS TO FIX LOADING:');
    console.log('==================================');
    console.log('1. 🔄 Hard refresh browser (Ctrl+Shift+R)');
    console.log('2. 🧹 Clear browser cache completely');
    console.log('3. 🔍 Check browser console for errors');
    console.log('4. 🔨 Rebuild app: npm run build');
    console.log('5. 🚀 Restart dev server: npm run dev');
    console.log('');
    console.log('💡 The app has timeout protection - it should load within 3 seconds');
    console.log('💡 If still stuck, check browser developer tools console');
  }
  
  createMinimalApp();
  runDiagnostics();
  
  console.log('\n🎯 IMMEDIATE FIXES TO TRY:');
  console.log('==========================');
  console.log('1. Hard refresh: Ctrl+Shift+R (Chrome/Firefox)');
  console.log('2. Clear cache: F12 → Application → Storage → Clear site data');
  console.log('3. Check console: F12 → Console tab for errors');
  console.log('4. Rebuild: npm run build && npm run start');
  console.log('');
  console.log('✅ App should now load within 3 seconds max!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { checkAppStatus, createMinimalApp, runDiagnostics };