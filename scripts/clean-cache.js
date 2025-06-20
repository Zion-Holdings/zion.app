#!/usr/bin/env node
/*
 * Simple cache cleanup utility
 * Removes common build and temp directories to reclaim space.
 */
import { rmSync } from 'fs';
import { join } from 'path';

const paths = [
  '.next',
  'node_modules/.cache',
  'coverage',
  'logs/perf/hourly.log',
  'logs/security/hourly-fix.log',
  'test-results',
  'temp_file',
];

for (const p of paths) {
  try {
    rmSync(join(process.cwd(), p), { recursive: true, force: true });
    console.log(`Removed ${p}`);
  } catch (err) {
    console.error(`Failed to remove ${p}:`, err.message);
  }
}
