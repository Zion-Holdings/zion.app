const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

const runCommand = (cmd) => {
  return new Promise((resolve) => {
    exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
      resolve({ error, stdout, stderr });
    });
  });
};

const log = (...args) => {
  console.log('[auto-fix-watcher]', ...args);
};

const runBuildAndTest = async () => {
  log('Running build...');
  const build = await runCommand('npm run build');
  if (build.error) {
    log('Build error detected. Attempting ESLint/Prettier fixes...');
    await runCommand('npx eslint . --fix');
    await runCommand('npx prettier --write .');
    log('Re-running build after fixes...');
    return runBuildAndTest();
  }
  log('Build successful. Running tests...');
  const test = await runCommand('npm test');
  if (test.error) {
    log('Test failures detected. Attempting ESLint/Prettier fixes...');
    await runCommand('npx eslint . --fix');
    await runCommand('npx prettier --write .');
    log('Re-running tests after fixes...');
    return runBuildAndTest();
  }
  log('Build and tests passed!');
};

const watcher = chokidar.watch('.', {
  ignored:
    /node_modules|\.git|coverage|dist|build|\.next|out|logs|\.DS_Store|\.log$/,
  persistent: true
});

let running = false;
let rerun = false;

const trigger = async () => {
  if (running) {
    rerun = true;
    return;
  }
  running = true;
  await runBuildAndTest();
  running = false;
  if (rerun) {
    rerun = false;
    trigger();
  }
};

watcher.on('ready', () => {
  log('Watching for file changes...');
  trigger();
});

watcher.on('all', (event, filePath) => {
  log(`Detected ${event} on ${filePath}`);
  trigger();
});
