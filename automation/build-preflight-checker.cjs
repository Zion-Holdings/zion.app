#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'build-preflight.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDir(dir) { 
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); 
}

function checkFileExists(filePath, description) {
  if (!fs.existsSync(filePath)) {
    log(`❌ ${description} not found: ${filePath}`);
    return false;
  }
  log(`✅ ${description}: ${filePath}`);
  return true;
}

function checkPackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');
  if (!checkFileExists(packagePath, 'package.json')) return false;
  
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const requiredScripts = ['build', 'export'];
    const missingScripts = requiredScripts.filter(script => !pkg.scripts[script]);
    
    if (missingScripts.length > 0) {
      log(`❌ Missing required scripts: ${missingScripts.join(', ')}`);
      return false;
    }
    
    log(`✅ Required scripts found: ${requiredScripts.join(', ')}`);
    
    // Check Next.js version
    if (pkg.dependencies.next) {
      log(`✅ Next.js version: ${pkg.dependencies.next}`);
    } else if (pkg.devDependencies.next) {
      log(`✅ Next.js version (dev): ${pkg.devDependencies.next}`);
    } else {
      log(`❌ Next.js not found in dependencies`);
      return false;
    }
    
    return true;
  } catch (error) {
    log(`❌ Failed to parse package.json: ${error.message}`);
    return false;
  }
}

function checkNextConfig() {
  const configPath = path.join(process.cwd(), 'next.config.js');
  if (!checkFileExists(configPath, 'next.config.js')) return false;
  
  try {
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Check for output: 'export' for static builds
    if (!/output\s*:\s*['"]export['"]/i.test(configContent)) {
      log(`⚠️ next.config.js doesn't specify output: 'export' for static builds`);
    } else {
      log(`✅ next.config.js has output: 'export' configured`);
    }
    
    // Check for other important configs
    if (/trailingSlash\s*:\s*true/i.test(configContent)) {
      log(`✅ trailingSlash: true configured`);
    }
    
    if (/images\s*:\s*{\s*unoptimized\s*:\s*true/i.test(configContent)) {
      log(`✅ images: { unoptimized: true } configured`);
    }
    
    return true;
  } catch (error) {
    log(`❌ Failed to read next.config.js: ${error.message}`);
    return false;
  }
}

function checkNetlifyConfig() {
  const netlifyPath = path.join(process.cwd(), 'netlify.toml');
  if (!checkFileExists(netlifyPath, 'netlify.toml')) return false;
  
  try {
    const configContent = fs.readFileSync(netlifyPath, 'utf8');
    
    // Check for build command
    if (!/build\s*=\s*["']npm ci && npm run export["']/i.test(configContent)) {
      log(`⚠️ netlify.toml build command may not match expected: npm ci && npm run export`);
    } else {
      log(`✅ netlify.toml build command configured correctly`);
    }
    
    // Check for publish directory
    if (!/publish\s*=\s*["']out["']/i.test(configContent)) {
      log(`⚠️ netlify.toml publish directory may not be set to 'out'`);
    } else {
      log(`✅ netlify.toml publish directory set to 'out'`);
    }
    
    return true;
  } catch (error) {
    log(`❌ Failed to read netlify.toml: ${error.message}`);
    return false;
  }
}

function checkDependencies() {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    log(`❌ node_modules not found. Run 'npm install' first.`);
    return false;
  }
  
  const nextPath = path.join(nodeModulesPath, 'next');
  if (!fs.existsSync(nextPath)) {
    log(`❌ Next.js not installed in node_modules`);
    return false;
  }
  
  log(`✅ node_modules and Next.js found`);
  return true;
}

function checkPagesDirectory() {
  const pagesPath = path.join(process.cwd(), 'pages');
  if (!checkFileExists(pagesPath, 'pages directory')) return false;
  
  try {
    const entries = fs.readdirSync(pagesPath, { withFileTypes: true });
    const tsxFiles = entries.filter(e => e.isFile() && e.name.endsWith('.tsx'));
    const tsFiles = entries.filter(e => e.isFile() && e.name.endsWith('.ts'));
    const jsFiles = entries.filter(e => e.isFile() && e.name.endsWith('.js'));
    const jsxFiles = entries.filter(e => e.isFile() && e.name.endsWith('.jsx'));
    
    log(`📁 Pages directory contents:`);
    log(`   TSX files: ${tsxFiles.length}`);
    log(`   TS files: ${tsFiles.length}`);
    log(`   JS files: ${jsFiles.length}`);
    log(`   JSX files: ${jsxFiles.length}`);
    
    if (tsxFiles.length === 0 && tsFiles.length === 0 && jsFiles.length === 0 && jsxFiles.length === 0) {
      log(`❌ No page files found in pages directory`);
      return false;
    }
    
    return true;
  } catch (error) {
    log(`❌ Failed to read pages directory: ${error.message}`);
    return false;
  }
}

function checkCriticalFiles() {
  const criticalFiles = [
    { path: 'pages/index.tsx', description: 'Homepage component' },
    { path: 'pages/_app.tsx', description: 'App wrapper component' },
    { path: 'pages/_document.tsx', description: 'Document wrapper component' }
  ];
  
  let allExist = true;
  for (const file of criticalFiles) {
    if (!checkFileExists(file.path, file.description)) {
      allExist = false;
    }
  }
  
  return allExist;
}

function checkBuildScripts() {
  try {
    // Check if npm is available
    execSync('npm --version', { stdio: 'pipe' });
    log(`✅ npm is available`);
    
    // Check if the export script exists and is valid
    const packagePath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    if (pkg.scripts.export) {
      log(`✅ export script found: ${pkg.scripts.export}`);
    } else {
      log(`❌ export script not found in package.json`);
      return false;
    }
    
    return true;
  } catch (error) {
    log(`❌ npm not available or script check failed: ${error.message}`);
    return false;
  }
}

function checkEnvironment() {
  const requiredEnvVars = [
    'NODE_VERSION',
    'NODE_OPTIONS'
  ];
  
  const optionalEnvVars = [
    'NETLIFY_NEXT_PLUGIN_SKIP',
    'NEXT_DISABLE_SOURCEMAPS'
  ];
  
  log(`🔧 Environment check:`);
  
  let allRequired = true;
  for (const envVar of requiredEnvVars) {
    if (process.env[envVar]) {
      log(`   ✅ ${envVar}: ${process.env[envVar]}`);
    } else {
      log(`   ❌ ${envVar}: not set`);
      allRequired = false;
    }
  }
  
  for (const envVar of optionalEnvVars) {
    if (process.env[envVar]) {
      log(`   ℹ️ ${envVar}: ${process.env[envVar]}`);
    } else {
      log(`   ⚠️ ${envVar}: not set (optional)`);
    }
  }
  
  return allRequired;
}

function generateReport(results) {
  const summary = {
    generatedAt: new Date().toISOString(),
    totalChecks: Object.keys(results).length,
    passedChecks: Object.values(results).filter(r => r).length,
    failedChecks: Object.values(results).filter(r => !r).length,
    overallStatus: Object.values(results).every(r => r) ? 'PASSED' : 'FAILED'
  };
  
  // Generate JSON report
  const outDir = path.join(process.cwd(), 'public', 'reports', 'build-preflight');
  ensureDir(outDir);
  const outJson = path.join(outDir, 'latest.json');
  fs.writeFileSync(outJson, JSON.stringify({ ...summary, results }, null, 2));
  
  return { summary, outJson };
}

function main() {
  log('🚀 Starting build preflight check...');
  
  const results = {
    packageJson: checkPackageJson(),
    nextConfig: checkNextConfig(),
    netlifyConfig: checkNetlifyConfig(),
    dependencies: checkDependencies(),
    pagesDirectory: checkPagesDirectory(),
    criticalFiles: checkCriticalFiles(),
    buildScripts: checkBuildScripts(),
    environment: checkEnvironment()
  };
  
  const report = generateReport(results);
  
  log(`\n📊 Preflight check complete:`);
  log(`   Total checks: ${report.summary.totalChecks}`);
  log(`   Passed: ${report.summary.passedChecks}`);
  log(`   Failed: ${report.summary.failedChecks}`);
  log(`   Overall status: ${report.summary.overallStatus}`);
  log(`   Report saved to: ${report.outJson}`);
  
  if (report.summary.overallStatus === 'PASSED') {
    log('✅ All preflight checks passed! Build should proceed successfully.');
    process.exit(0);
  } else {
    log('❌ Some preflight checks failed. Please fix issues before building.');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  checkPackageJson,
  checkNextConfig,
  checkNetlifyConfig,
  checkDependencies,
  checkPagesDirectory,
  checkCriticalFiles,
  checkBuildScripts,
  checkEnvironment
};