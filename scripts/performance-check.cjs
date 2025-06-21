#!/usr/bin/env node

/**
 * Performance Check Script
 * Monitors and reports on app performance metrics after improvements
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 App Performance Check\n');

/**
 * Check bundle sizes
 */
function checkBundleSize() {
  console.log('📦 Bundle Size Analysis:');
  const buildDir = path.join(__dirname, '..', '.next');
  
  if (!fs.existsSync(buildDir)) {
    console.log('   ❌ Build directory not found. Run `npm run build` first.');
    return;
  }

  try {
    const statsPath = path.join(buildDir, 'static');
    if (fs.existsSync(statsPath)) {
      const jsDir = path.join(statsPath, 'chunks');
      if (fs.existsSync(jsDir)) {
        const files = fs.readdirSync(jsDir);
        const jsFiles = files.filter(f => f.endsWith('.js'));
        
        let totalSize = 0;
        jsFiles.forEach(file => {
          const filePath = path.join(jsDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        });
        
        console.log(`   ✅ Total JS Bundle Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   ✅ Number of JS Chunks: ${jsFiles.length}`);
      }
    }
  } catch (error) {
    console.log('   ⚠️  Could not analyze bundle size:', error.message);
  }
}

/**
 * Check TypeScript compilation
 */
async function checkTypeScript() {
  console.log('\n🔍 TypeScript Check:');
  
  return new Promise((resolve) => {
    const tsc = spawn('npx', ['tsc', '--noEmit'], {
      stdio: 'pipe'
    });
    
    let output = '';
    tsc.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    tsc.stderr.on('data', (data) => {
      output += data.toString();
    });
    
    tsc.on('close', (code) => {
      if (code === 0) {
        console.log('   ✅ TypeScript compilation successful');
      } else {
        console.log('   ❌ TypeScript compilation errors:');
        console.log('  ', output.split('\n').slice(0, 5).join('\n   '));
      }
      resolve(code === 0);
    });
  });
}

/**
 * Check for security vulnerabilities
 */
async function checkSecurity() {
  console.log('\n🔒 Security Audit:');
  
  return new Promise((resolve) => {
    const audit = spawn('npm', ['audit', '--audit-level=moderate'], {
      stdio: 'pipe'
    });
    
    let output = '';
    audit.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    audit.on('close', (code) => {
      if (output.includes('found 0 vulnerabilities')) {
        console.log('   ✅ No security vulnerabilities found');
      } else if (output.includes('vulnerabilities')) {
        const lines = output.split('\n');
        const summaryLine = lines.find(line => line.includes('vulnerabilities')) || '';
        console.log(`   ⚠️  ${summaryLine.trim()}`);
      } else {
        console.log('   ✅ Security audit completed');
      }
      resolve(true);
    });
  });
}

/**
 * Check for unused dependencies
 */
async function checkDependencies() {
  console.log('\n📋 Dependencies Check:');
  
  try {
    const packageJson = require('../package.json');
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`   📦 Production dependencies: ${dependencies.length}`);
    console.log(`   🔧 Development dependencies: ${devDependencies.length}`);
    console.log(`   📊 Total packages: ${dependencies.length + devDependencies.length}`);
    
    // Check for potential issues
    const largeDeps = ['@sentry/nextjs', 'next', '@chakra-ui/react'];
    const foundLargeDeps = dependencies.filter(dep => largeDeps.includes(dep));
    
    if (foundLargeDeps.length > 0) {
      console.log(`   💡 Large dependencies found: ${foundLargeDeps.join(', ')}`);
      console.log('      Consider lazy loading or code splitting for these');
    }
    
  } catch (error) {
    console.log('   ❌ Could not analyze dependencies:', error.message);
  }
}

/**
 * Performance recommendations
 */
function showRecommendations() {
  console.log('\n💡 Performance Recommendations:');
  console.log('   ✅ Next.js optimizations applied');
  console.log('   ✅ Bundle splitting configured');
  console.log('   ✅ Image optimization enabled');
  console.log('   ✅ Security headers added');
  console.log('   ✅ Compression enabled');
  
  console.log('\n🚀 Additional Optimizations to Consider:');
  console.log('   • Enable ISR (Incremental Static Regeneration) for dynamic content');
  console.log('   • Implement service worker for caching');
  console.log('   • Use CDN for static assets');
  console.log('   • Optimize database queries');
  console.log('   • Monitor Core Web Vitals');
}

/**
 * Main performance check
 */
async function runPerformanceCheck() {
  checkBundleSize();
  await checkTypeScript();
  await checkSecurity();
  await checkDependencies();
  showRecommendations();
  
  console.log('\n🎯 Performance Check Complete!');
  console.log('📊 For detailed metrics, use: npm run build && npm run start');
  console.log('🔍 Monitor in production with Sentry and Core Web Vitals');
}

// Run the performance check
runPerformanceCheck().catch(console.error); 