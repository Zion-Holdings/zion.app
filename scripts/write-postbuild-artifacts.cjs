#!/usr/bin/env node
/**
 * write-postbuild-artifacts.cjs
 * Writes post-build artifacts for the static export.
 */
const fs = require('fs');
const path = require('path');

function write() {
  const outDir = path.join(process.cwd(), 'out');
  const artifacts = {
    buildTimestamp: new Date().toISOString(),
    buildCompleted: true
  };

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, '_build-info.json'), JSON.stringify(artifacts, null, 2));

  console.log('Post-build artifacts written.');
}

write();
