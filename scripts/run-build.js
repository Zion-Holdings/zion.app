// Wrapper to raise fd limit and run next build in-process
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Raise the soft fd limit to the hard limit (unlimited on this system)
const limits = fs.readFileSync('/proc/self/limits', 'utf8');
console.log('Original limits:', limits.match(/Max open files:[\s\S]*?\n/g)?.[0]?.trim());

// Try to raise via ulimit equivalent
try {
  // In Node.js, we can set resource limits before spawning
  process.env.NODE_OPTIONS = '--max-old-space-size=4096';
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  process.env.NEXT_BUILD_WORKER_COUNT = '1';
} catch(e) { console.error('env error', e.message); }

const nextBin = path.join('node_modules', '.bin', 'next');
console.log('Using next:', nextBin);

try {
  const out = execSync(`"${nextBin}" build`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    timeout: 280 * 1000,
    env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=4096' }
  });
  console.log('STDOUT:', out.stdout.slice(-1000));
  console.log('STDERR:', out.stderr.slice(-1000));
  console.log('EXIT: 0');
} catch(err) {
  console.log('EXIT:', err.status || 1);
  console.log('STDOUT:', (err.stdout || '').slice(-1500));
  console.log('STDERR:', (err.stderr || '').slice(-1500));
}
