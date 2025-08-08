#!/usr/bin/env node
const { spawn } = require('child_process');

function printHelp() {
  console.log('Zion CLI');
  console.log('Usage: zion <command> [options]');
  console.log('Commands:');
  console.log('  devnet start     Start local DevNet (Next.js) on port 3001');
}

function runNextDev() {
  const child = spawn('npm', ['run', 'devnet:start'], {
    stdio: 'inherit',
    env: { ...process.env, DEVNET: '1', PORT: '3001' },
    shell: true,
  });
  child.on('exit', (code) => process.exit(code ?? 0));
}

const args = process.argv.slice(2);
if (args.length === 0 || (args[0] === 'help')) {
  printHelp();
  process.exit(0);
}

if (args[0] === 'devnet' && args[1] === 'start') {
  runNextDev();
} else {
  console.error('Unknown command');
  printHelp();
  process.exit(1);
}