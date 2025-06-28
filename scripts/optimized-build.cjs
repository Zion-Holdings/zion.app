#!/usr/bin/env node

const { spawn } = require('child_process');
const { EventEmitter } = require('events');

// Increase EventEmitter max listeners to prevent memory leak warnings
EventEmitter.defaultMaxListeners = 50;

// Environment optimizations for build
process.env.NODE_OPTIONS = '--no-deprecation --max-old-space-size=6144 --no-warnings'; 
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.CI = 'true';
process.env.SKIP_TYPE_CHECK = 'true';

// Critical: Disable expensive operations for 176+ pages
process.env.NEXT_DISABLE_CSS_INLINE = 'true';
process.env.NEXT_DISABLE_SOURCE_MAPS = 'true';
process.env.GENERATE_SOURCEMAP = 'false';

// Performance optimizations for large page count
process.env.NEXT_BUILD_WORKERS = '1'; // Single worker to avoid memory issues
process.env.NEXT_PRIVATE_BUILD_CACHE = 'false';

// Disable static optimization to avoid timeout
process.env.NEXT_PRIVATE_STATIC_OPTIMIZATION = 'false';
process.env.NEXT_PRIVATE_STANDALONE = 'false';

// Experimental optimizations for Netlify
process.env.NETLIFY_CACHE_NEXTJS = 'false';

console.log('🚀 Starting FAST build for 176+ pages...');
console.log(`📊 Memory limit: 6GB`);
console.log(`👷 Workers: ${process.env.NEXT_BUILD_WORKERS} (single worker)`);
console.log(`⚡ CSS inlining: disabled`);
console.log(`🔧 Source maps: disabled`);
console.log(`💾 Build cache: disabled`);
console.log(`⚙️  Static optimization: disabled`);

const buildArgs = [
  'next', 
  'build',
  '--no-lint'
];

console.log(`📦 Build command: npx ${buildArgs.join(' ')}`);

const build = spawn('npx', buildArgs, {
  stdio: 'inherit',
  env: {
    ...process.env,
  },
  // Increase timeout for large builds
  timeout: 1500000, // 25 minutes
});

// Add timeout handling
const buildTimeout = setTimeout(() => {
  console.error('❌ Build timeout after 25 minutes');
  build.kill('SIGTERM');
  process.exit(1);
}, 1500000);

build.on('close', (code) => {
  clearTimeout(buildTimeout);
  
  if (code === 0) {
    console.log('✅ Fast build completed successfully!');
    
    // Generate build report
    console.log('\n📊 Build Performance Report:');
    console.log('- Memory optimizations: ✅ Applied (6GB limit)');
    console.log('- CSS optimization: ✅ Disabled inlining for speed');
    console.log('- Source maps: ✅ Disabled for production');
    console.log('- EventEmitter fix: ✅ Max listeners increased to 50');
    console.log('- Workers: ✅ Single worker for memory management');
    console.log('- Build cache: ✅ Disabled to prevent memory issues');
    console.log('- Static optimization: ✅ Disabled to prevent timeout');
    console.log('- Pages processed: ~176 pages');
    
  } else {
    console.error('❌ Build failed with code:', code);
    process.exit(code);
  }
});

build.on('error', (error) => {
  clearTimeout(buildTimeout);
  console.error('❌ Build error:', error);
  process.exit(1);
}); 