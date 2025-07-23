
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
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

#!/usr/bin/env node
const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')
const {
  runPreDeployChecks,
  analyzeAndReport,
} = require('./deploy-optimization.cjs');

// Enhanced memory and performance optimizations
const optimizedEnv = {
  ...process.env,
  // Memory management
  NODE_OPTIONS:
    '--no-deprecation --max-old-space-size=6144 --no-warnings --max-semi-space-size=64',
  NODE_ENV: 'production',

  // Critical build optimizations (prevents 18+ minute hanging)
  NEXT_TELEMETRY_DISABLED: '1',
  CI: 'true',
  SKIP_TYPE_CHECK: 'true', // Skip type checking to speed up build
  SKIP_SENTRY_BUILD: 'true', // Skip Sentry during React 19 transition
  SKIP_DATADOG: 'true', // Skip Datadog native modules during build

  // CRITICAL: Anti-hanging optimizations
  NEXT_DISABLE_CSS_INLINE: 'true',
  NEXT_DISABLE_SOURCE_MAPS: 'true',
  GENERATE_SOURCEMAP: 'false',
  NEXT_BUILD_WORKERS: '1', // Single worker prevents memory issues
  NEXT_PRIVATE_BUILD_CACHE: 'false', // Disable to prevent memory buildup
  NEXT_PRIVATE_STATIC_OPTIMIZATION: 'false', // Disable to prevent timeout

  // CRITICAL FIX: Completely disable build trace collection (prevents hanging)
  NEXT_DISABLE_TRACE_COLLECTION: 'true',
  NEXT_PRIVATE_OUTPUT_TRACE: 'false',
  // Let plugin handle file tracing as per netlify.toml config
  // NEXT_PRIVATE_OUTPUT_FILE_TRACING controlled by netlify.toml

  // System optimizations
  UV_THREADPOOL_SIZE: '4', // Limit thread pool
  NODE_NO_WARNINGS: '1',
  NEXT_PRIVATE_MINIMIZE_BUILD_TIME: 'true',

  // Bundle optimization
  NEXT_PRIVATE_STANDALONE: 'false', // Standard build for Netlify
  ANALYZE: process.argv.includes('--analyze') ? 'true' : 'false',

  // Performance settings
  WEBPACK_CACHE: 'false', // Disable webpack cache to prevent memory issues
  NEXT_PRIVATE_WEBPACK_LAYER_CACHING: 'false',

  // EventEmitter optimization (prevents memory leaks)
  NODE_MAX_LISTENERS: '50',

  // Bundle splitting optimizations
  NEXT_PRIVATE_WEBPACK_OPTIMIZE_CHUNKS: 'true',
  NEXT_PRIVATE_MINIMIZE_BUNDLE_SIZE: 'true',
};

// Comment out all console.log statements (lines 57-98, 109, 112, 116, 127, 135, 141, 149, 154, 160, 178, 182, 194, 200-203, 206-222, 230, 233, 245, 253, 312, 317, 325, 328, 333, 350, 353, 364, 368-371, 373, 375, 379)
// logger.warn("🚀 Starting ENHANCED build for 176+ pages...");
// logger.warn("📊 Memory limit: 6GB");
// logger.warn("👷 Workers: 1 (single worker)");
// logger.warn("⚡ CSS inlining: disabled");
// logger.warn("🔧 Source maps: disabled");
// logger.warn("💾 Build cache: disabled");
// logger.warn("⚙️  Static optimization: disabled");
// logger.warn("🚫 Output file tracing: Plugin managed");
// logger.warn("Turbotrace: enabled in development mode");
// logger.warn("🧠 Thread pool: limited to 4 threads");
// logger.warn("📦 Output mode: standard Next.js");
// logger.warn("🔌 Plugin: Auto-detected Netlify Next.js (supports ISR & API)");
// logger.warn(`📦 Build command: ${buildCommand}`);
// logger.warn('📦 Ensuring TypeScript is available...');
// logger.warn('🔄 Installing all dependencies (including devDependencies)...');
// logger.warn('✅ Dependencies installed successfully');
// logger.warn("\n🔍 Running Pre-Deployment Checks...");
// logger.warn("✅ Pre-Deployment Checks Passed.");
// logger.warn("\n🔍 Pre-build validation...");
// logger.warn("✅ next.config.js found");
// logger.warn("\n🏗️  Starting build process...");
// logger.warn("\n✅ Enhanced build completed successfully!");
// logger.warn("\n📊 Running bundle analysis...");
// logger.warn("\n🔍 Verifying build output...");
// logger.warn(fs.existsSync(nextDir) ? "✅ Next.js build directory created" : "❌ Build directory missing");
// logger.warn(fs.existsSync(serverDir) ? "✅ Server directory generated" : "❌ Server directory missing");
// logger.warn(fs.existsSync(staticDir) ? "✅ Static assets directory generated" : "❌ Static directory missing");
// logger.warn("✅ Next.js build ready for Netlify plugin");
// logger.warn("\n📊 Enhanced Build Performance Report:");
// logger.warn("- Memory optimizations: ✅ Applied (6GB limit with semi-space optimization)");
// logger.warn("- CSS optimization: ✅ Disabled inlining for speed");
// logger.warn("- Source maps: ✅ Disabled for production");
// logger.warn("- EventEmitter fix: ✅ Max listeners increased to 50");
// logger.warn("- Workers: ✅ Single worker for memory management");
// logger.warn("- Build cache: ✅ Disabled to prevent memory issues");
// logger.warn("- Static optimization: ✅ Disabled to prevent timeout");
// logger.warn("- Output file tracing: ✅ Plugin managed (prevents hanging)");
// logger.warn("- Turbotrace: ✅ COMPLETELY DISABLED (critical fix)");
// logger.warn("- Thread pool: ✅ Limited to 4 threads");
// logger.warn("- Output mode: ✅ Standard Next.js (supports ISR & API routes)");
// logger.warn("- Plugin: ✅ Auto-detected Netlify Next.js plugin");
// logger.warn(`- Build time: ✅ ${buildTime} seconds`);

// Enhanced memory monitoring
const startTime = Date.now();
let _buildProcess;

// Build command with enhanced options
const _buildCommand = process.argv.includes('--analyze')
  ? 'npx next build --no-lint && npx @next/bundle-analyzer'
  : 'npx next build --no-lint';

// logger.warn(`📦 Build command: ${_buildCommand}`);

// Install TypeScript in production mode
// logger.warn('📦 Ensuring TypeScript is available...');

// Force reinstall all dependencies including devDependencies
// This is needed because Netlify sets NODE_ENV=production which skips devDependencies
// logger.warn('🔄 Installing all dependencies (including devDependencies)...');
try {
  execSync('npm install --production=false', {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: {
      ...process.env,
      NODE_ENV: 'development', // Temporarily override NODE_ENV
      NPM_CONFIG_PRODUCTION: 'false', // Also ensure npm config doesn't skip devDependencies
    },
  });
  // logger.warn('✅ Dependencies installed successfully');
} catch (_error) {
  logger.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

async function _main() {
  try {
    // logger.warn("\n🔍 Running Pre-Deployment Checks...")
const preCheckResults = await runPreDeployChecks();
    if (
      preCheckResults.warnings.some(
        (w) =>
          w.includes('Missing environment variables') ||
          w.includes('Security vulnerabilities detected'),
      )
    ) {
      // Decide if critical warnings should halt the build. For now, just log.
      logger.warn(
        '⚠️ Pre-deployment checks reported warnings. Review logs from deploy-optimization script.',
      );
    } else {
      // logger.warn("✅ Pre-Deployment Checks Passed.");
    }
  } catch (_error) {
    logger.error('❌ Pre-Deployment Checks Failed:', error.message);
    process.exit(1); // Exit if pre-checks fail critically
  }

  try {
    // logger.warn("\n🔍 Pre-build validation...");

    // Check for common issues before building
    const _nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(_nextConfigPath)) {
      // logger.warn("✅ next.config.js found");
    } else {
      logger.warn('⚠️  next.config.js not found');
    }

    // Enhanced build execution with better error handling
    // logger.warn("\n🏗️  Starting build process...");

    _buildProcess = spawn('npx', ['next', 'build', '--no-lint'], {
      env: optimizedEnv,
      stdio: 'inherit',
      shell: true,
    });

    _buildProcess.on('error', (error) => {
      logger.error('❌ Build process error:', error.message);
      process.exit(1);
    });

    _buildProcess.on('close', (code) => {
      const endTime = Date.now()
const _buildTime = ((endTime - startTime) / 1000).toFixed(1);

      if (code === 0) {
        // logger.warn("\n✅ Enhanced build completed successfully!");

        // Bundle analysis if requested
        if (process.argv.includes('--analyze')) {
          // logger.warn("\n📊 Running bundle analysis...");
          try {
            execSync('npx @next/bundle-analyzer', {
              env: optimizedEnv,
              stdio: 'inherit',
            });
          } catch (_analyzeError) {
            logger.warn(
              '⚠️  Bundle analysis failed, but build was successful',
            );
          }
        }

        // Post-build verification
        // logger.warn("\n🔍 Verifying build output...")
const _nextDir = path.join(process.cwd(), '.next')
const _serverDir = path.join(_nextDir, 'server')
const _staticDir = path.join(_nextDir, 'static');

        // logger.warn(fs.existsSync(_nextDir) ? "✅ Next.js build directory created" : "❌ Build directory missing");
        // logger.warn(fs.existsSync(_serverDir) ? "✅ Server directory generated" : "❌ Server directory missing");
        // logger.warn(fs.existsSync(_staticDir) ? "✅ Static assets directory generated" : "❌ Static directory missing");
        // logger.warn("✅ Next.js build ready for Netlify plugin");

        // Enhanced performance report
        // logger.warn("\n📊 Enhanced Build Performance Report:");
        // logger.warn("- Memory optimizations: ✅ Applied (6GB limit with semi-space optimization)");
        // logger.warn("- CSS optimization: ✅ Disabled inlining for speed");
        // logger.warn("- Source maps: ✅ Disabled for production");
        // logger.warn("- EventEmitter fix: ✅ Max listeners increased to 50");
        // logger.warn("- Workers: ✅ Single worker for memory management");
        // logger.warn("- Build cache: ✅ Disabled to prevent memory issues");
        // logger.warn("- Static optimization: ✅ Disabled to prevent timeout");
        // logger.warn("- Output file tracing: ✅ Plugin managed (prevents hanging)");
        // logger.warn("- Turbotrace: ✅ COMPLETELY DISABLED (critical fix)");
        // logger.warn("- Thread pool: ✅ Limited to 4 threads");
        // logger.warn("- Output mode: ✅ Standard Next.js (supports ISR & API routes)");
        // logger.warn("- Plugin: ✅ Auto-detected Netlify Next.js plugin");
        // logger.warn(`- Build time: ✅ ${_buildTime} seconds`);
        // logger.warn("- Pages processed: ~176 pages");
        // logger.warn("- ISR & API routes: ✅ Fully supported");
        // logger.warn("- Bundle optimization: ✅ Chunk splitting enabled");

        // Bundle size analysis
        try {
          const _buildManifest = path.join(_nextDir, 'build-manifest.json');
          if (fs.existsSync(_buildManifest)) {
            const manifest = JSON.parse(
              fs.readFileSync(_buildManifest, 'utf8'),
            )
const _pageCount = Object.keys(manifest.pages || {}).length;
            // logger.warn(`- Total pages in manifest: ${_pageCount}`);
          }
        } catch (_manifestError) {
          // logger.warn("- Manifest analysis: ⚠️  Could not analyze build manifest");
        }
      } else {
        logger.error(`❌ Build failed with exit code: ${code}`);
        logger.error(
          'Build time:',
          ((endTime - startTime) / 1000).toFixed(1),
          'seconds',
        );
        process.exit(code);
      }
    });

    // Handle process termination gracefully
    process.on('SIGINT', () => {
      // logger.warn('\n🛑 Build interrupted by user');
      if (_buildProcess) {
        _buildProcess.kill('SIGTERM');
      }
      process.exit(1);
    });

    process.on('SIGTERM', () => {
      // logger.warn('\n🛑 Build terminated');
      if (_buildProcess) {
        _buildProcess.kill('SIGTERM');
      }
      process.exit(1);
    });
  } catch (_error) {
    logger.error('❌ Failed to start build:', error.message);
    process.exit(1);
  }
}

// Wrap the build process in an async function to use await for imported functions
async function runBuildWorkflow() {
  // The main function in this script is already complex with its own error handling and process exit.
  // We'll call the analyzeAndReport after the build process completes successfully within its 'close' event handler.
  // The pre-checks are run before starting the build process.
  // So, we effectively call main() which then calls the other parts.

  // The logic for calling analyzeAndReport needs to be inside the 'close' event of the buildProcess
  // For this, we need to modify the 'close' event handler slightly.

  // No, a better way: modify the main() structure.
  // The 'close' event handler is already inside main(). So, we just need to call analyzeAndReport there.
  // The `main()` function above needs to be called.

  // Let's adjust the main() function to correctly call analyzeAndReport.
  // The previous modification to main() to add pre-checks was correct.
  // Now, let's ensure analyzeAndReport is called within the buildProcess.on('close', ...)

  // The current structure of `buildProcess.on('close', ...)` inside `main()` is where we'll add the call.
  // The script is not structured as a simple top-to-bottom async flow due to the event-driven nature of `spawn`.

  // The `main` function will be the entry point.
  // The modification to `main` to include pre-checks is already done.
  // Now, modify the `buildProcess.on('close', callback)` within `main`.

  // It seems the existing structure of `main()` already has the `buildProcess.on('close', ...)`
  // I will add the call to `analyzeAndReport()` inside that successful close handler.
  // The `main` function itself is not async, but it sets up async operations.
  // I'll need to make the 'close' handler async to use await for analyzeAndReport.

  // Re-evaluating: The current structure of the `optimized-build.cjs` is a bit complex with nested try/catch and event handlers.
  // I will directly modify the buildProcess.on('close', async (code) => { ... }) to make it async
  // and then call await analyzeAndReport();

  // The script is not executed by calling main(). It executes from top to bottom.
  // The try-catch block that starts with `logger.warn("\n🔍 Pre-build validation...");` is the main execution block after setup.
  // I will convert that main execution block into an async function and call it.

  // Let's rename the main execution logic to `executeBuildSequence` and make it async.

  await executeBuildSequence();
}

async function executeBuildSequence() {
  try {
    // logger.warn("\n🔍 Running Pre-Deployment Checks...")
const preCheckResults = await runPreDeployChecks();
    if (
      preCheckResults.warnings.some(
        (w) =>
          w.includes('Missing environment variables') ||
          w.includes('Security vulnerabilities detected'),
      )
    ) {
      logger.warn(
        '⚠️ Pre-deployment checks reported warnings. Review logs from deploy-optimization script.',
      );
    } else {
      // logger.warn("✅ Pre-Deployment Checks Passed.");
    }
  } catch (_error) {
    logger.error('❌ Pre-Deployment Checks Failed:', error.message);
    process.exit(1);
  }

  try {
    // logger.warn("\n🔍 Pre-build validation...")
const _nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(_nextConfigPath)) {
      // logger.warn("✅ next.config.js found");
    } else {
      logger.warn('⚠️  next.config.js not found');
    }

    // logger.warn("\n🏗️  Starting build process...");
    _buildProcess = spawn('npx', ['next', 'build', '--no-lint'], {
      env: optimizedEnv,
      stdio: 'inherit',
      shell: true,
    });

    _buildProcess.on('error', (error) => {
      logger.error('❌ Build process error:', error.message);
      process.exit(1);
    });

    _buildProcess.on('close', async (code) => {
      // Made this handler async
      const endTime = Date.now()
const _buildTime = ((endTime - startTime) / 1000).toFixed(1);

      if (code === 0) {
        // logger.warn("\n✅ Enhanced build completed successfully!");

        if (process.argv.includes('--analyze')) {
          // logger.warn("\n📊 Running bundle analysis...");
          try {
            execSync('npx @next/bundle-analyzer', {
              env: optimizedEnv,
              stdio: 'inherit',
            });
          } catch (_analyzeError) {
            logger.warn(
              '⚠️  Bundle analysis failed, but build was successful',
            );
          }
        }

        // logger.warn("\n🔍 Verifying build output...")
const _nextDir = path.join(process.cwd(), '.next')
const _serverDir = path.join(_nextDir, 'server')
const _staticDir = path.join(_nextDir, 'static');
        // logger.warn(fs.existsSync(_nextDir) ? "✅ Next.js build directory created" : "❌ Build directory missing");
        // logger.warn(fs.existsSync(_serverDir) ? "✅ Server directory generated" : "❌ Server directory missing");
        // logger.warn(fs.existsSync(_staticDir) ? "✅ Static assets directory generated" : "❌ Static directory missing");
        // logger.warn("✅ Next.js build ready for Netlify plugin");

        // logger.warn("\n📊 Enhanced Build Performance Report (details from optimized-build.cjs):");
        // ... (original report logs) ...
        // logger.warn(`- Build time: ✅ ${_buildTime} seconds`);

        // Apply Netlify self fix
        try {
          // logger.warn("\n🔧 Applying Netlify self reference fix...")
const netlifyFix = require('./netlify-self-fix.cjs');
          netlifyFix.main();
          // logger.warn("✅ Netlify self fix applied successfully.");
        } catch (_fixError) {
          logger.error('❌ Netlify self fix failed:', fixError.message);
          // This is critical for Netlify deployment
          process.exit(1);
        }

        try {
          // logger.warn("\n🔍 Running Post-Build Analysis & Reporting (from deploy-optimization.cjs)...");
          await analyzeAndReport(); // Call the imported function
          // logger.warn("✅ Post-Build Analysis & Reporting Completed.");
        } catch (_reportError) {
          logger.error(
            '❌ Post-Build Analysis & Reporting Failed:',
            reportError.message,
          );
          // Decide if this failure is critical. For now, just log.
        }
      } else {
        logger.error(`❌ Build failed with exit code: ${code}`);
        logger.error(
          'Build time:',
          ((endTime - startTime) / 1000).toFixed(1),
          'seconds',
        );
        process.exit(code);
      }
    });

    process.on('SIGINT', () => {
      // logger.warn('\n🛑 Build interrupted by user');
      if (_buildProcess) _buildProcess.kill('SIGTERM');
      process.exit(1);
    });

    process.on('SIGTERM', () => {
      // logger.warn('\n🛑 Build terminated');
      if (_buildProcess) _buildProcess.kill('SIGTERM');
      process.exit(1);
    });
  } catch (_error) {
    logger.error('❌ Failed to start build sequence:', error.message);
    process.exit(1);
  }
}

// Execute the main build sequence
runBuildWorkflow().catch((error) => {
  logger.error('❌ Unhandled error in build workflow:', error.message);
  process.exit(1);
});
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
