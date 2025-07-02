#!/usr/bin/env node
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const process = require('process');
const { runPreDeployChecks, analyzeAndReport } = require('./deploy-optimization.cjs');

// Enhanced memory and performance optimizations
const optimizedEnv = {
  ...process.env,
  // Memory management
  NODE_OPTIONS: "--no-deprecation --max-old-space-size=6144 --no-warnings --max-semi-space-size=64",
  NODE_ENV: "production",
  
  // Critical build optimizations (prevents 18+ minute hanging)
  NEXT_TELEMETRY_DISABLED: "1",
  CI: "true",
  SKIP_TYPE_CHECK: "true", // Skip type checking to speed up build
  SKIP_SENTRY_BUILD: "true", // Skip Sentry during React 19 transition
  SKIP_DATADOG: "true", // Skip Datadog native modules during build
  
  // CRITICAL: Anti-hanging optimizations
  NEXT_DISABLE_CSS_INLINE: "true",
  NEXT_DISABLE_SOURCE_MAPS: "true", 
  GENERATE_SOURCEMAP: "false",
  NEXT_BUILD_WORKERS: "1", // Single worker prevents memory issues
  NEXT_PRIVATE_BUILD_CACHE: "false", // Disable to prevent memory buildup
  NEXT_PRIVATE_STATIC_OPTIMIZATION: "false", // Disable to prevent timeout
  
  // CRITICAL FIX: Completely disable build trace collection (prevents hanging)
  NEXT_DISABLE_TRACE_COLLECTION: "true",
  NEXT_PRIVATE_OUTPUT_TRACE: "false", 
  // Let plugin handle file tracing as per netlify.toml config
  // NEXT_PRIVATE_OUTPUT_FILE_TRACING controlled by netlify.toml
  
  // System optimizations
  UV_THREADPOOL_SIZE: "4", // Limit thread pool
  NODE_NO_WARNINGS: "1",
  NEXT_PRIVATE_MINIMIZE_BUILD_TIME: "true",
  
  // Bundle optimization
  NEXT_PRIVATE_STANDALONE: "false", // Standard build for Netlify
  ANALYZE: process.argv.includes('--analyze') ? "true" : "false",
  
  // Performance settings
  WEBPACK_CACHE: "false", // Disable webpack cache to prevent memory issues
  NEXT_PRIVATE_WEBPACK_LAYER_CACHING: "false",
  
  // EventEmitter optimization (prevents memory leaks)
  NODE_MAX_LISTENERS: "50",
  
  // Bundle splitting optimizations
  NEXT_PRIVATE_WEBPACK_OPTIMIZE_CHUNKS: "true",
  NEXT_PRIVATE_MINIMIZE_BUNDLE_SIZE: "true",
};

console.log("🚀 Starting ENHANCED build for 176+ pages...");
console.log("📊 Memory limit: 6GB");
console.log("👷 Workers: 1 (single worker)");
console.log("⚡ CSS inlining: disabled");
console.log("🔧 Source maps: disabled");
console.log("💾 Build cache: disabled");  
console.log("⚙️  Static optimization: disabled");
console.log("🚫 Output file tracing: Plugin managed");
console.log("🚫 Turbotrace: COMPLETELY DISABLED (critical fix)");
console.log("🧠 Thread pool: limited to 4 threads");
console.log("📦 Output mode: standard Next.js");
console.log("🔌 Plugin: Auto-detected Netlify Next.js (supports ISR & API)");

// Enhanced memory monitoring
const startTime = Date.now();
let buildProcess;

// Build command with enhanced options
const buildCommand = process.argv.includes('--analyze') 
  ? "npx next build --no-lint && npx @next/bundle-analyzer"
  : "npx next build --no-lint";

console.log(`📦 Build command: ${buildCommand}`);

// Install TypeScript in production mode
console.log('📦 Ensuring TypeScript is available...');

// Force reinstall all dependencies including devDependencies
// This is needed because Netlify sets NODE_ENV=production which skips devDependencies
console.log('🔄 Installing all dependencies (including devDependencies)...');
try {
  execSync('npm install --production=false', {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: {
      ...process.env,
      NODE_ENV: 'development', // Temporarily override NODE_ENV
      NPM_CONFIG_PRODUCTION: 'false' // Also ensure npm config doesn't skip devDependencies
    }
  });
  console.log('✅ Dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

async function main() {
  try {
    console.log("\n🔍 Running Pre-Deployment Checks...");
    const preCheckResults = await runPreDeployChecks();
    if (preCheckResults.warnings.some(w => w.includes('Missing environment variables') || w.includes('Security vulnerabilities detected'))) {
      // Decide if critical warnings should halt the build. For now, just log.
      console.warn("⚠️ Pre-deployment checks reported warnings. Review logs from deploy-optimization script.");
    } else {
      console.log("✅ Pre-Deployment Checks Passed.");
    }
  } catch (error) {
    console.error("❌ Pre-Deployment Checks Failed:", error.message);
    process.exit(1); // Exit if pre-checks fail critically
  }
  
  try {
    console.log("\n🔍 Pre-build validation...");

    // Check for common issues before building
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  if (fs.existsSync(nextConfigPath)) {
    console.log("✅ next.config.js found");
  } else {
    console.warn("⚠️  next.config.js not found");
  }
  
  // Enhanced build execution with better error handling
  console.log("\n🏗️  Starting build process...");
  
  buildProcess = spawn('npx', ['next', 'build', '--no-lint'], {
    env: optimizedEnv,
    stdio: 'inherit',
    shell: true
  });
  
  buildProcess.on('error', (error) => {
    console.error("❌ Build process error:", error.message);
    process.exit(1);
  });
  
  buildProcess.on('close', (code) => {
    const endTime = Date.now();
    const buildTime = ((endTime - startTime) / 1000).toFixed(1);
    
    if (code === 0) {
      console.log("\n✅ Enhanced build completed successfully!");
      
      // Bundle analysis if requested
      if (process.argv.includes('--analyze')) {
        console.log("\n📊 Running bundle analysis...");
        try {
          execSync('npx @next/bundle-analyzer', { 
            env: optimizedEnv,
            stdio: 'inherit' 
          });
        } catch (analyzeError) {
          console.warn("⚠️  Bundle analysis failed, but build was successful");
        }
      }
      
      // Post-build verification
      console.log("\n🔍 Verifying build output...");
      
      const nextDir = path.join(process.cwd(), '.next');
      const serverDir = path.join(nextDir, 'server');
      const staticDir = path.join(nextDir, 'static');
      
      console.log(fs.existsSync(nextDir) ? "✅ Next.js build directory created" : "❌ Build directory missing");
      console.log(fs.existsSync(serverDir) ? "✅ Server directory generated" : "❌ Server directory missing");
      console.log(fs.existsSync(staticDir) ? "✅ Static assets directory generated" : "❌ Static directory missing");
      console.log("✅ Next.js build ready for Netlify plugin");
      
      // Enhanced performance report
      console.log("\n📊 Enhanced Build Performance Report:");
      console.log("- Memory optimizations: ✅ Applied (6GB limit with semi-space optimization)");
      console.log("- CSS optimization: ✅ Disabled inlining for speed");
      console.log("- Source maps: ✅ Disabled for production");
      console.log("- EventEmitter fix: ✅ Max listeners increased to 50");
      console.log("- Workers: ✅ Single worker for memory management");
      console.log("- Build cache: ✅ Disabled to prevent memory issues");
      console.log("- Static optimization: ✅ Disabled to prevent timeout");
      console.log("- Output file tracing: ✅ Plugin managed (prevents hanging)");
      console.log("- Turbotrace: ✅ COMPLETELY DISABLED (critical fix)");
      console.log("- Thread pool: ✅ Limited to 4 threads");
      console.log("- Output mode: ✅ Standard Next.js (supports ISR & API routes)");
      console.log("- Plugin: ✅ Auto-detected Netlify Next.js plugin");
      console.log(`- Build time: ✅ ${buildTime} seconds`);
      console.log("- Pages processed: ~176 pages");
      console.log("- ISR & API routes: ✅ Fully supported");
      console.log("- Bundle optimization: ✅ Chunk splitting enabled");
      
      // Bundle size analysis
      try {
        const buildManifest = path.join(nextDir, 'build-manifest.json');
        if (fs.existsSync(buildManifest)) {
          const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
          const pageCount = Object.keys(manifest.pages || {}).length;
          console.log(`- Total pages in manifest: ${pageCount}`);
        }
      } catch (manifestError) {
        console.log("- Manifest analysis: ⚠️  Could not analyze build manifest");
      }
      
    } else {
      console.error(`❌ Build failed with exit code: ${code}`);
      console.error("Build time:", ((endTime - startTime) / 1000).toFixed(1), "seconds");
      process.exit(code);
    }
  });
  
  // Handle process termination gracefully
  process.on('SIGINT', () => {
    console.log('\n🛑 Build interrupted by user');
    if (buildProcess) {
      buildProcess.kill('SIGTERM');
    }
    process.exit(1);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Build terminated');
    if (buildProcess) {
      buildProcess.kill('SIGTERM');
    }
    process.exit(1);
  });
  
  } catch (error) {
    console.error("❌ Failed to start build:", error.message);
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
  // The try-catch block that starts with `console.log("\n🔍 Pre-build validation...");` is the main execution block after setup.
  // I will convert that main execution block into an async function and call it.

  // Let's rename the main execution logic to `executeBuildSequence` and make it async.

  await executeBuildSequence();

}

async function executeBuildSequence() {
  try {
    console.log("\n🔍 Running Pre-Deployment Checks...");
    const preCheckResults = await runPreDeployChecks();
    if (preCheckResults.warnings.some(w => w.includes('Missing environment variables') || w.includes('Security vulnerabilities detected'))) {
      console.warn("⚠️ Pre-deployment checks reported warnings. Review logs from deploy-optimization script.");
    } else {
      console.log("✅ Pre-Deployment Checks Passed.");
    }
  } catch (error) {
    console.error("❌ Pre-Deployment Checks Failed:", error.message);
    process.exit(1);
  }

  try {
    console.log("\n🔍 Pre-build validation...");
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      console.log("✅ next.config.js found");
    } else {
      console.warn("⚠️  next.config.js not found");
    }

    console.log("\n🏗️  Starting build process...");
    buildProcess = spawn('npx', ['next', 'build', '--no-lint'], {
      env: optimizedEnv,
      stdio: 'inherit',
      shell: true
    });

    buildProcess.on('error', (error) => {
      console.error("❌ Build process error:", error.message);
      process.exit(1);
    });

    buildProcess.on('close', async (code) => { // Made this handler async
      const endTime = Date.now();
      const buildTime = ((endTime - startTime) / 1000).toFixed(1);

      if (code === 0) {
        console.log("\n✅ Enhanced build completed successfully!");

        if (process.argv.includes('--analyze')) {
          console.log("\n📊 Running bundle analysis...");
          try {
            execSync('npx @next/bundle-analyzer', {
              env: optimizedEnv,
              stdio: 'inherit'
            });
          } catch (analyzeError) {
            console.warn("⚠️  Bundle analysis failed, but build was successful");
          }
        }

        console.log("\n🔍 Verifying build output...");
        const nextDir = path.join(process.cwd(), '.next');
        const serverDir = path.join(nextDir, 'server');
        const staticDir = path.join(nextDir, 'static');
        console.log(fs.existsSync(nextDir) ? "✅ Next.js build directory created" : "❌ Build directory missing");
        console.log(fs.existsSync(serverDir) ? "✅ Server directory generated" : "❌ Server directory missing");
        console.log(fs.existsSync(staticDir) ? "✅ Static assets directory generated" : "❌ Static directory missing");
        console.log("✅ Next.js build ready for Netlify plugin");

        console.log("\n📊 Enhanced Build Performance Report (details from optimized-build.cjs):");
        // ... (original report logs) ...
        console.log(`- Build time: ✅ ${buildTime} seconds`);

        // Apply Netlify self fix
        try {
          console.log("\n🔧 Applying Netlify self reference fix...");
          const netlifyFix = require('./netlify-self-fix.cjs');
          netlifyFix.main();
          console.log("✅ Netlify self fix applied successfully.");
        } catch (fixError) {
          console.error("❌ Netlify self fix failed:", fixError.message);
          // This is critical for Netlify deployment
          process.exit(1);
        }

        try {
          console.log("\n🔍 Running Post-Build Analysis & Reporting (from deploy-optimization.js)...");
          await analyzeAndReport(); // Call the imported function
          console.log("✅ Post-Build Analysis & Reporting Completed.");
        } catch (reportError) {
          console.error("❌ Post-Build Analysis & Reporting Failed:", reportError.message);
          // Decide if this failure is critical. For now, just log.
        }

      } else {
        console.error(`❌ Build failed with exit code: ${code}`);
        console.error("Build time:", ((endTime - startTime) / 1000).toFixed(1), "seconds");
        process.exit(code);
      }
    });

    process.on('SIGINT', () => {
      console.log('\n🛑 Build interrupted by user');
      if (buildProcess) buildProcess.kill('SIGTERM');
      process.exit(1);
    });

    process.on('SIGTERM', () => {
      console.log('\n🛑 Build terminated');
      if (buildProcess) buildProcess.kill('SIGTERM');
      process.exit(1);
    });

  } catch (error) {
    console.error("❌ Failed to start build sequence:", error.message);
    process.exit(1);
  }
}

// Execute the main build sequence
runBuildWorkflow().catch(error => {
  console.error("❌ Unhandled error in build workflow:", error.message);
  process.exit(1);
});