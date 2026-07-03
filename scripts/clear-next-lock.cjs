#!/usr/bin/env node
// clear-next-lock.cjs — remove stale Next.js build lock/temp state if present
const fs = require('fs');
const path = require('path');
const nextDir = path.join(process.cwd(), '.next');
const lock = path.join(nextDir, 'BUILD_LOCK');
if (!fs.existsSync(nextDir)) {
  console.log('clear-next-lock: .next not present; nothing to do');
  process.exit(0);
}
if (fs.existsSync(lock)) {
  try { fs.unlinkSync(lock); console.log('clear-next-lock: removed BUILD_LOCK'); }
  catch (e) { console.warn('clear-next-lock: failed to remove lock:', e.message); }
}
console.log('clear-next-lock: done');
