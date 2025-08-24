const { execSync } = require('child_process');

console.warn('📦 Installing build dependencies for Netlify...');

// List of essential build dependencies
const buildDeps = [
  'typescript',
  '@types/node',
  '@types/react',
  '@types/react-dom',
  '@swc/core',
  '@swc/helpers',
];

try {
  console.warn('Installing:', buildDeps.join(', '));
  execSync(`npm install ${buildDeps.join(' ')} --save-dev --legacy-peer-deps`, {
    stdio: 'inherit',
  });
  console.warn('✅ Build dependencies installed successfully');
} catch (_error) {
  console.error('❌ Failed to install build dependencies:', _error.message);
  process.exit(1);
}


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

