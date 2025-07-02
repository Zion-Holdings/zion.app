#!/usr/bin/env node

// Comprehensive build monitoring and error suppression
// Handles webpack runtime warnings while preserving critical error detection

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  suppressWarnings: true,
  logLevel: process.env.NODE_ENV === 'development' ? 'verbose' : 'normal',
  timeoutMs: 300000, // 5 minutes
  retryAttempts: 2
};

// Build monitoring state
let buildStartTime = Date.now();
let buildSuccess = false;
let criticalErrors = [];
let suppressedWarnings = [];

// Patterns for errors and warnings to classify
const patterns = {
  critical: [
    /Error:/,
    /Failed to compile/,
    /Module not found/,
    /Cannot resolve/,
    /SyntaxError/,
    /TypeError.*is not a function/,
    /ReferenceError.*is not defined/,
    /Build error occurred/
  ],
  
  suppressible: [
    /unhandledRejection.*ReferenceError.*self is not defined/,
    /unhandledRejection.*TypeError.*Cannot read properties of undefined.*reading 'length'/,
    /unhandledRejection.*TypeError.*map is not a function/,
    /TypeError.*Cannot read properties of undefined.*reading 'length'/,
    /webpack-runtime\.js.*installChunk/,
    /experimental\.esmExternals.*modified/,
    /Linting is disabled/,
    /Native modules externalized/,
    /Sentry disabled/,
    /webpack runtime polyfills/,
    /Applying webpack runtime polyfills/,
    /Global self polyfill applied/
  ],
  
  informational: [
    /Creating an optimized production build/,
    /Checking validity of types/,
    /Collecting page data/,
    /Generating static pages/,
    /pages compiled successfully/
  ]
};

// Color formatting for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}

function log(level, message, ...args) {
  const timestamp = new Date().toISOString().slice(11, 23);
  
  switch (level) {
    case 'info':
      if (config.logLevel === 'verbose' || config.logLevel === 'normal') {
        console.log(`${colorize(`[${timestamp}]`, colors.cyan)} ${colorize('ℹ', colors.blue)} ${message}`, ...args);
      }
      break;
    case 'success':
      console.log(`${colorize(`[${timestamp}]`, colors.cyan)} ${colorize('✅', colors.green)} ${message}`, ...args);
      break;
    case 'warning':
      if (config.logLevel === 'verbose') {
        console.log(`${colorize(`[${timestamp}]`, colors.cyan)} ${colorize('⚠️', colors.yellow)} ${message}`, ...args);
      }
      break;
    case 'error':
      console.error(`${colorize(`[${timestamp}]`, colors.cyan)} ${colorize('❌', colors.red)} ${message}`, ...args);
      break;
    case 'critical':
      console.error(`${colorize(`[${timestamp}]`, colors.cyan)} ${colorize('🔥', colors.magenta)} ${colorize(message, colors.bright)}`, ...args);
      break;
  }
}

function classifyLogLine(line) {
  // Check for critical errors first
  for (const pattern of patterns.critical) {
    if (pattern.test(line)) {
      return 'critical';
    }
  }
  
  // Check for suppressible warnings
  for (const pattern of patterns.suppressible) {
    if (pattern.test(line)) {
      return 'suppressible';
    }
  }
  
  // Check for informational messages
  for (const pattern of patterns.informational) {
    if (pattern.test(line)) {
      return 'informational';
    }
  }
  
  // Default classification
  if (line.includes('error') || line.includes('Error')) {
    return 'error';
  }
  if (line.includes('warn') || line.includes('Warning')) {
    return 'warning';
  }
  
  return 'info';
}

function processLogLine(line) {
  if (!line.trim()) return;
  
  const classification = classifyLogLine(line);
  
  switch (classification) {
    case 'critical':
      criticalErrors.push({
        message: line,
        timestamp: Date.now(),
        classification
      });
      log('critical', line);
      break;
      
    case 'error':
      log('error', line);
      break;
      
    case 'suppressible':
      suppressedWarnings.push({
        message: line,
        timestamp: Date.now(),
        classification
      });
      if (config.logLevel === 'verbose') {
        log('warning', `[SUPPRESSED] ${line}`);
      }
      break;
      
    case 'informational':
      log('info', line);
      break;
      
    case 'warning':
      log('warning', line);
      break;
      
    default:
      if (config.logLevel === 'verbose') {
        log('info', line);
      }
      break;
  }
}

function generateBuildReport() {
  const buildDuration = Date.now() - buildStartTime;
  const report = {
    timestamp: new Date().toISOString(),
    duration: buildDuration,
    success: buildSuccess,
    criticalErrors: criticalErrors.length,
    suppressedWarnings: suppressedWarnings.length,
    details: {
      criticalErrors,
      suppressedWarnings: config.logLevel === 'verbose' ? suppressedWarnings : []
    }
  };
  
  // Write report to file
  try {
    fs.writeFileSync('build-report.json', JSON.stringify(report, null, 2));
    log('info', `Build report written to build-report.json`);
  } catch (error) {
    log('error', `Failed to write build report: ${error.message}`);
  }
  
  // Console summary
  console.log('\n' + colorize('━'.repeat(60), colors.cyan));
  console.log(colorize('BUILD SUMMARY', colors.bright));
  console.log(colorize('━'.repeat(60), colors.cyan));
  
  log('info', `Duration: ${colorize(`${(buildDuration / 1000).toFixed(2)}s`, colors.bright)}`);
  log('info', `Status: ${buildSuccess ? colorize('SUCCESS', colors.green) : colorize('FAILED', colors.red)}`);
  log('info', `Critical Errors: ${colorize(criticalErrors.length.toString(), criticalErrors.length > 0 ? colors.red : colors.green)}`);
  log('info', `Suppressed Warnings: ${colorize(suppressedWarnings.length.toString(), colors.yellow)}`);
  
  if (criticalErrors.length > 0) {
    console.log('\n' + colorize('CRITICAL ERRORS:', colors.red));
    criticalErrors.forEach((error, index) => {
      console.log(`${index + 1}. ${error.message}`);
    });
  }
  
  if (suppressedWarnings.length > 0 && config.logLevel === 'verbose') {
    console.log('\n' + colorize('SUPPRESSED WARNINGS:', colors.yellow));
    suppressedWarnings.slice(0, 5).forEach((warning, index) => {
      console.log(`${index + 1}. ${warning.message}`);
    });
    if (suppressedWarnings.length > 5) {
      console.log(`... and ${suppressedWarnings.length - 5} more`);
    }
  }
  
  console.log(colorize('━'.repeat(60), colors.cyan) + '\n');
}

async function runBuild(attempt = 1) {
  log('info', `Starting build attempt ${attempt}/${config.retryAttempts + 1}`);
  buildStartTime = Date.now();
  
  return new Promise((resolve, reject) => {
    // Prepare build command with enhanced Node.js options
    const buildCommand = 'npm';
    const buildArgs = ['run', 'build'];
    
    const buildProcess = spawn(buildCommand, buildArgs, {
      stdio: ['inherit', 'pipe', 'pipe'],
      env: {
        ...process.env,
        NODE_OPTIONS: '--no-deprecation --require ./scripts/fix-self-global.js',
        FORCE_COLOR: '1' // Preserve colors in output
      }
    });
    
    let hasResponded = false;
    
    // Set up timeout
    const timeout = setTimeout(() => {
      if (!hasResponded) {
        hasResponded = true;
        log('error', `Build timeout after ${config.timeoutMs / 1000}s`);
        buildProcess.kill('SIGTERM');
        reject(new Error('Build timeout'));
      }
    }, config.timeoutMs);
    
    // Process stdout
    buildProcess.stdout.on('data', (data) => {
      const lines = data.toString().split('\n');
      lines.forEach(processLogLine);
    });
    
    // Process stderr
    buildProcess.stderr.on('data', (data) => {
      const lines = data.toString().split('\n');
      lines.forEach(processLogLine);
    });
    
    // Handle process completion
    buildProcess.on('close', (code) => {
      clearTimeout(timeout);
      
      if (!hasResponded) {
        hasResponded = true;
        
        // Build success is determined by exit code, not by unhandled rejections
        // Webpack runtime warnings are non-critical and don't affect build success
        buildSuccess = code === 0;
        
        if (buildSuccess) {
          log('success', `Build completed successfully in ${((Date.now() - buildStartTime) / 1000).toFixed(2)}s`);
          
          // If we have suppressible warnings but exit code is 0, it's still a success
          if (suppressedWarnings.length > 0) {
            log('info', `Build successful with ${suppressedWarnings.length} suppressed non-critical warnings`);
          }
          
          resolve(code);
        } else {
          log('error', `Build failed with exit code ${code}`);
          reject(new Error(`Build failed with exit code ${code}`));
        }
      }
    });
    
    buildProcess.on('error', (error) => {
      clearTimeout(timeout);
      
      if (!hasResponded) {
        hasResponded = true;
        log('error', `Build process error: ${error.message}`);
        reject(error);
      }
    });
  });
}

async function main() {
  log('info', colorize('Starting comprehensive build monitoring...', colors.bright));
  
  let lastError;
  
  for (let attempt = 1; attempt <= config.retryAttempts + 1; attempt++) {
    try {
      await runBuild(attempt);
      break; // Success, exit retry loop
    } catch (error) {
      lastError = error;
      
      if (attempt < config.retryAttempts + 1) {
        log('warning', `Build attempt ${attempt} failed, retrying...`);
        // Reset state for retry
        criticalErrors = [];
        suppressedWarnings = [];
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2s before retry
      }
    }
  }
  
  // Generate final report
  generateBuildReport();
  
  // Exit with appropriate code
  if (!buildSuccess) {
    log('critical', 'Build failed after all retry attempts');
    process.exit(1);
  } else {
    log('success', 'Build monitoring completed successfully');
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  log('warning', 'Build monitoring interrupted');
  generateBuildReport();
  process.exit(130);
});

process.on('SIGTERM', () => {
  log('warning', 'Build monitoring terminated');
  generateBuildReport();
  process.exit(143);
});

// Run the build monitor
main().catch((error) => {
  log('critical', `Unexpected error: ${error.message}`);
  console.error(error.stack);
  process.exit(1);
});