#!/usr/bin/env node
/**
 * Pre-playwright dependency and browser check.
 * Allows running Playwright tests gracefully in offline environments
 * by skipping tests when Playwright or browsers are not installed.
 */
const { spawnSync } = require('child_process');
const fs = require('fs');

function moduleExists(name) {
  try {
    require.resolve(name);
    return true;
  } catch {
    return false;
  }
}

if (!moduleExists('@playwright/test')) {
  console.error('⚠️  Playwright not installed. Skipping E2E tests.');
  console.error('Please run "./setup.sh npm" and "npx playwright install" to enable.');
  process.exit(0);
}

const { chromium } = require('@playwright/test');
let browserPath;
try {
  browserPath = chromium.executablePath();
} catch {
  browserPath = null;
}
if (!browserPath || !fs.existsSync(browserPath)) {
  console.error('⚠️  Playwright browsers not found. Skipping E2E tests.');
  console.error('Run "npx playwright install" to download the required browsers.');
  process.exit(0);
}

const result = spawnSync('playwright', ['test', ...process.argv.slice(2)], {
  stdio: 'inherit',
});
process.exit(result.status ?? 1);
