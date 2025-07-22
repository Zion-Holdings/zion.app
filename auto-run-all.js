// auto-run-all.js
const chokidar = require('chokidar');
const pm2 = require('pm2');
const path = require('path');
const fs = require('fs');

const WATCH_DIR = path.join(__dirname, 'components');
const FILE_GLOB = '**/*.{ts,tsx}';

// Helper to create a unique PM2 process name for each file
function getProcessName(filePath) {
  // Replace slashes with dashes for PM2 process name
  return 'auto-' + filePath.replace(/\//g, '-').replace(/\\/g, '-');
}

// Start or restart a file with PM2
function startOrRestartFile(filePath) {
  const absPath = path.resolve(filePath);
  const procName = getProcessName(path.relative(__dirname, absPath));
  // Use ts-node for .ts/.tsx files
  pm2.start({
    name: procName,
    script: absPath,
    interpreter: 'ts-node',
    watch: false,
    autorestart: true,
  }, (err) => {
    if (err) {
      // If already exists, restart
      pm2.restart(procName, (restartErr) => {
        if (restartErr) {
          console.error(`[auto-run-all] Failed to start/restart ${filePath}:`, restartErr.message);
        } else {
          console.log(`[auto-run-all] Restarted: ${filePath}`);
        }
      });
    } else {
      console.log(`[auto-run-all] Started: ${filePath}`);
    }
  });
}

// Stop a file's process in PM2
function stopFile(filePath) {
  const absPath = path.resolve(filePath);
  const procName = getProcessName(path.relative(__dirname, absPath));
  pm2.delete(procName, (err) => {
    if (err && !String(err.message).includes('process or namespace not found')) {
      console.error(`[auto-run-all] Failed to stop ${filePath}:`, err.message);
    } else {
      console.log(`[auto-run-all] Stopped: ${filePath}`);
    }
  });
}

// Main logic
pm2.connect((err) => {
  if (err) {
    console.error('[auto-run-all] PM2 connect error:', err);
    process.exit(2);
  }

  // Initial scan: start all files
  const glob = require('glob');
  glob(path.join(WATCH_DIR, FILE_GLOB), (err, files) => {
    if (err) {
      console.error('[auto-run-all] Glob error:', err);
      process.exit(1);
    }
    files.forEach(startOrRestartFile);
  });

  // Watch for changes
  const watcher = chokidar.watch(path.join(WATCH_DIR, FILE_GLOB), {
    ignoreInitial: true,
    awaitWriteFinish: true,
  });

  watcher
    .on('add', startOrRestartFile)
    .on('change', startOrRestartFile)
    .on('unlink', stopFile);

  console.log(`[auto-run-all] Watching ${WATCH_DIR} for .ts/.tsx files...`);
}); 