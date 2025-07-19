#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');
const { _spawnSync } = require('child_process');

const browsersPath =
  process.env.PLAYWRIGHT_BROWSERS_PATH ||
  path.join(os.homedir(), '.cache', 'ms-playwright');

function browsersInstalled() {
  try {
    return (
      fs.existsSync(browsersPath) && fs.readdirSync(browsersPath).length > 0
    );
  } catch {
    return false;
  }
}

if (browsersInstalled()) {
  process.exit(0);
}

console.error('\u274c Playwright browsers not found at', browsersPath);
console.error('Attempting to install browsers via `npx playwright install`...');

const result = spawnSync('npx', ['playwright', 'install'], {
  stdio: 'inherit',
});
if (result.status !== 0) {
  console.error('\n\u274c Failed to install Playwright browsers.');
  console.error(
    'Please ensure network access and run `npx playwright install` manually.',
  );
  process.exit(1);
}

console.warn('\u2705 Playwright browsers installed successfully.');
