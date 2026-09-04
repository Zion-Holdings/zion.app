#!/usr/bin/env node
/**
 * Use committed public/ on Cloudflare Workers Builds.
 * Everywhere else, run the real Next static export.
 */
const { spawnSync } = require('child_process');
const path = require('path');

if (process.env.WORKERS_CI === '1') {
  const prep = spawnSync(process.execPath, [path.join('scripts', 'workers-static-prepare.cjs')], {
    stdio: 'inherit',
  });
  process.exit(prep.status || 0);
}

const result = spawnSync(process.execPath, [require.resolve('next/dist/bin/next'), 'build'], {
  stdio: 'inherit',
  env: process.env,
});
process.exit(result.status == null ? 1 : result.status);
