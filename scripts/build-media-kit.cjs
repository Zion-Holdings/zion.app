#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const kitDir = path.join(__dirname, '../public/toolkit_assets/media_kit');
const zipFile = path.join(__dirname, '../public/toolkit_assets/media_kit.zip');

if (!fs.existsSync(kitDir)) {
  console.error('Media kit directory not found:', kitDir);
  process.exit(1);
}

try {
  if (fs.existsSync(zipFile)) {
    fs.unlinkSync(zipFile);
  }
  execSync(`zip -r ${zipFile} .`, { cwd: kitDir, stdio: 'inherit' });
  console.log('Media kit archive created at', zipFile);
} catch (err) {
  console.error('Failed to create media kit archive:', err);
  process.exit(1);
}

