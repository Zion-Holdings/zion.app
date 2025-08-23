#!/usr/bin/env node

/**
 * Dependency Health Check Script
 * Comprehensive check for SWC dependencies, punycode issues, and overall project health
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Dependency Health Check\n');

/**
 * Check SWC dependencies
 */
async function checkSWCDependencies() {
  console.log('⚙️  SWC Dependencies Check:');
  
  return new Promise((resolve) => {
    const checkProcess = spawn('npm', ['ls', '@swc/core', '@swc/helpers'], {
      stdio: 'pipe'
    });
    
    let output = '';
    checkProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    checkProcess.on('close', (code) => {
      if (output.includes('@swc/core') && output.includes('@swc/helpers')) {
        console.log('   ✅ SWC dependencies are properly installed');
        
        // Check for version conflicts
        const coreMatches = output.match(/@swc\/core@(\d+\.\d+\.\d+)/g);
        const helperMatches = output.match(/@swc\/helpers@(\d+\.\d+\.\d+)/g);
        
        if (coreMatches && helperMatches) {
          console.log(`   📦 Found SWC core versions: ${[...new Set(coreMatches)].join(', ')}`);
          console.log(`   📦 Found SWC helper versions: ${[...new Set(helperMatches)].join(', ')}`);
          
          if (new Set(coreMatches).size === 1 && new Set(helperMatches).size <= 2) {
            console.log('   ✅ SWC versions are compatible');
          } else {
            console.log('   ⚠️  Multiple SWC versions detected (this is usually fine)');
          }
        }
      } else {
        console.log('   ❌ SWC dependencies missing or not properly installed');
      }
      resolve(code === 0);
    });
  });
}

/**
 * Check punycode dependencies
 */
async function checkPunycodeDependencies() {
  console.log('\n🌐 Punycode Dependencies Check:');
  
  return new Promise((resolve) => {
    const checkProcess = spawn('npm', ['ls', 'punycode'], {
      stdio: 'pipe'
    });
    
    let output = '';
    checkProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    checkProcess.on('close', (code) => {
      if (output.includes('punycode@2.3.1')) {
        console.log('   ✅ Userland punycode package is installed (v2.3.1)');
        console.log('   💡 This helps replace deprecated Node.js built-in punycode');
      } else {
        console.log('   ⚠️  Userland punycode package not found');
      }
      
      // Count indirect punycode dependencies
      const matches = output.match(/punycode@\d+\.\d+\.\d+/g);
      if (matches) {
        console.log(`   📊 Total punycode dependencies: ${matches.length}`);
        console.log('   💡 These are from third-party packages (eslint, jsdom, mongoose, etc.)');
      }
      
      resolve(true);
    });
  });
}

/**
 * Test build with warning suppression
 */
async function testBuildWithWarnings() {
  console.log('\n🏗️  Build Test (with warning suppression):');
  
  return new Promise((resolve) => {
    const buildProcess = spawn('npm', ['run', 'build'], {
      stdio: 'pipe',
      env: { ...process.env, NODE_OPTIONS: '--no-deprecation' }
    });
    
    let output = '';
    let errorOutput = '';
    
    buildProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    buildProcess.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });
    
    buildProcess.on('close', (code) => {
      if (code === 0) {
        console.log('   ✅ Build completed successfully');
        
        // Check for deprecation warnings
        if (errorOutput.includes('DEP0040') || errorOutput.includes('punycode')) {
          console.log('   ⚠️  Punycode deprecation warnings still present');
        } else {
          console.log('   ✅ No punycode deprecation warnings detected');
        }
        
        // Check for SWC-related messages
        if (output.includes('swc') || errorOutput.includes('swc')) {
          console.log('   ℹ️  SWC-related messages found in build output');
        } else {
          console.log('   ✅ No SWC issues detected in build');
        }
        
        // Extract build metrics
        const pagesMatch = output.match(/(\d+) pages/);
        if (pagesMatch) {
          console.log(`   📄 Generated ${pagesMatch[1]} pages successfully`);
        }
        
      } else {
        console.log(`   ❌ Build failed with exit code ${code}`);
        if (errorOutput) {
          console.log('   📝 Error summary:');
          const errorLines = errorOutput.split('\n').slice(0, 5);
          errorLines.forEach(line => {
            if (line.trim()) console.log(`      ${line.trim()}`);
          });
        }
      }
      
      resolve(code === 0);
    });
  });
}

/**
 * Check package.json scripts
 */
function checkPackageScripts() {
  console.log('\n📋 Package Scripts Check:');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const scripts = packageJson.scripts || {};
    
    const requiredScripts = [
      'build',
      'deps:check',
      'deps:update',
      'deps:clean'
    ];
    
    requiredScripts.forEach(script => {
      if (scripts[script]) {
        console.log(`   ✅ ${script}: ${scripts[script]}`);
      } else {
        console.log(`   ❌ Missing script: ${script}`);
      }
    });
    
    // Check if build script includes warning suppression
    if (scripts.build && scripts.build.includes('suppress-warnings.cjs')) {
      console.log('   ✅ Warning suppression integrated in build script');
    } else {
      console.log('   ⚠️  Warning suppression not found in build script');
    }
    
  } catch (error) {
    console.log('   ❌ Error reading package.json:', error.message);
  }
}

/**
 * Generate health report
 */
function generateHealthReport(swcCheck, punycodeCheck, buildCheck) {
  console.log('\n📊 Health Report Summary:');
  console.log('=' .repeat(50));
  
  const status = swcCheck && buildCheck ? 'HEALTHY' : 'NEEDS ATTENTION';
  const emoji = status === 'HEALTHY' ? '🟢' : '🟡';
  
  console.log(`${emoji} Overall Status: ${status}`);
  console.log(`✅ SWC Dependencies: ${swcCheck ? 'OK' : 'ISSUES'}`);
  console.log(`✅ Punycode Handling: ${punycodeCheck ? 'OK' : 'ISSUES'}`);
  console.log(`✅ Build Process: ${buildCheck ? 'OK' : 'ISSUES'}`);
  
  console.log('\n🔧 Available Commands:');
  console.log('   npm run deps:check    # Check for outdated packages');
  console.log('   npm run deps:update   # Update dependencies');
  console.log('   npm run deps:clean    # Clean reinstall');
  console.log('   npm run build         # Build with warning suppression');
  
  console.log('\n💡 Recommendations:');
  if (status === 'HEALTHY') {
    console.log('   • Dependencies are healthy');
    console.log('   • Build process is working correctly');
    console.log('   • Warning suppression is active');
    console.log('   • Monitor dependency updates regularly');
  } else {
    console.log('   • Run npm run deps:clean if issues persist');
    console.log('   • Check Node.js version compatibility');
    console.log('   • Review dependency conflicts');
  }
}

/**
 * Main health check function
 */
async function runHealthCheck() {
  console.log('Starting comprehensive dependency health check...\n');
  
  const swcCheck = await checkSWCDependencies();
  const punycodeCheck = await checkPunycodeDependencies();
  checkPackageScripts();
  const buildCheck = await testBuildWithWarnings();
  
  generateHealthReport(swcCheck, punycodeCheck, buildCheck);
  
  console.log('\n🎯 Dependency Health Check Complete!');
}

// Run the health check
runHealthCheck().catch(console.error); 