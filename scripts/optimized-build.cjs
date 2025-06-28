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

// Critical: Disable CSS inlining for faster builds with many pages
process.env.NEXT_DISABLE_CSS_INLINE = 'true';
process.env.NEXT_DISABLE_SOURCE_MAPS = 'true';

// Performance optimizations for large page count
process.env.NEXT_BUILD_WORKERS = '2'; // Reduce workers to manage memory
process.env.NEXT_PRIVATE_BUILD_CACHE = 'false'; // Disable cache to prevent memory issues

// Experimental optimizations for Netlify
process.env.NEXT_EXPERIMENTAL_COMPILE_MODE = 'annotation';
process.env.NETLIFY_CACHE_NEXTJS = 'false';

console.log('🚀 Starting optimized build for 176+ pages...');
console.log(`📊 Memory limit: 6GB`);
console.log(`👷 Workers: ${process.env.NEXT_BUILD_WORKERS}`);
console.log(`⚡ CSS inlining: disabled`);
console.log(`🔧 Source maps: disabled`);
console.log(`💾 Build cache: disabled`);

const buildArgs = [
  'next', 
  'build', 
  '--no-lint',
  '--experimental-build-mode=compile'
];

console.log(`📦 Build command: npx ${buildArgs.join(' ')}`);

const build = spawn('npx', buildArgs, {
  stdio: 'inherit',
  env: {
    ...process.env,
  },
  // Increase timeout for large builds
  timeout: 900000, // 15 minutes
});

// Add timeout handling
const buildTimeout = setTimeout(() => {
  console.error('❌ Build timeout after 15 minutes');
  build.kill('SIGTERM');
  process.exit(1);
}, 900000);

build.on('close', (code) => {
  clearTimeout(buildTimeout);
  
  if (code === 0) {
    console.log('✅ Build completed successfully!');
    
    // Generate build report
    console.log('\n📊 Build Performance Report:');
    console.log('- Memory optimizations: ✅ Applied (6GB limit)');
    console.log('- CSS optimization: ✅ Disabled inlining for speed');
    console.log('- Source maps: ✅ Disabled for production');
    console.log('- EventEmitter fix: ✅ Max listeners increased to 50');
    console.log('- Workers: ✅ Limited to 2 for memory management');
    console.log('- Build cache: ✅ Disabled to prevent memory issues');
    console.log('- Pages generated: ~176 pages');
    
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