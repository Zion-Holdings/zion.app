// auto-run-all.js
// Expanded watcher script for multiple directories and file types
const chokidar = require('chokidar');
const pm2 = require('pm2');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

// === CONFIGURATION ===
// Directories to watch
const WATCH_DIRS = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'automation'),
  path.join(__dirname, 'backend'),
  path.join(__dirname, 'scripts'),
];
// File types and their interpreters
const FILE_TYPES = {
  '.ts': 'ts-node',
  '.tsx': 'ts-node',
  '.js': 'node',
  '.sh': 'bash',
  '.py': 'python3',
};
// Glob pattern for all supported file types
const FILE_GLOB = '**/*.{ts,tsx,js,sh,py}';

// Helper to get file extension
function getFileExt(filePath) {
  return path.extname(filePath).toLowerCase();
}

// Helper to create a unique PM2 process name for each file
function getProcessName(filePath) {
  // Replace slashes with dashes for PM2 process name
  return 'auto-' + filePath.replace(/\//g, '-').replace(/\\/g, '-');
}

// Start or restart a file with PM2 using the correct interpreter
function startOrRestartFile(filePath) {
  const absPath = path.resolve(filePath);
  const relPath = path.relative(__dirname, absPath);
  const procName = getProcessName(relPath);
  const ext = getFileExt(filePath);
  const interpreter = FILE_TYPES[ext];
  if (!interpreter) {
    console.warn(`[auto-run-all] Skipping unsupported file type: ${filePath}`);
    return;
  }
  // For .sh files, ensure executable
  if (ext === '.sh') {
    try {
      fs.chmodSync(absPath, 0o755);
    } catch (e) {
      console.warn(`[auto-run-all] Could not chmod +x for ${filePath}:`, e.message);
    }
  }
  pm2.start({
    name: procName,
    script: absPath,
    interpreter,
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
  const relPath = path.relative(__dirname, absPath);
  const procName = getProcessName(relPath);
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

  // Initial scan: start all files in all directories
  WATCH_DIRS.forEach((dir) => {
    glob(path.join(dir, FILE_GLOB), (err, files) => {
      if (err) {
        console.error(`[auto-run-all] Glob error in ${dir}:`, err);
        return;
      }
      files.forEach(startOrRestartFile);
    });
  });

  // Watch for changes in all directories
  const watcher = chokidar.watch(WATCH_DIRS.map(dir => path.join(dir, FILE_GLOB)), {
    ignoreInitial: true,
    awaitWriteFinish: true,
  });

  watcher
    .on('add', startOrRestartFile)
    .on('change', startOrRestartFile)
    .on('unlink', stopFile)
    .on('error', (error) => {
      console.error('[auto-run-all] Watcher error:', error);
    });

  console.log(`[auto-run-all] Watching directories for .ts, .tsx, .js, .sh, .py files...`);
  WATCH_DIRS.forEach(dir => console.log(`[auto-run-all]  - ${dir}`));
});

// === END OF SCRIPT ===
// To add more directories or file types, edit WATCH_DIRS or FILE_TYPES above. 